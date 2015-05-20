'use strict';

import AutoComplete from '../../scripts/AutoComplete';
import dom from 'metaljs/src/dom/dom';

var autoComplete;
var inputElement;

var states = [
  'Alabama',
  'Alaska'
];

var data = function(query) {
  var res = [];

  if (query) {
      query = query.toLowerCase();

      res = states.filter(function(item) {
          return (item.toLowerCase().indexOf(query) === 0);
      }.bind(this));
  }

  return res;
};

describe('AutoComplete', function() {
  afterEach(function() {
    if (autoComplete) {
      autoComplete.dispose();
      autoComplete = null;
    }

    if (inputElement) {
      dom.exitDocument(inputElement);
      inputElement = null;
    }
  });

  beforeEach(function(){
    inputElement = document.createElement('div');
    dom.enterDocument(inputElement);
  });

  it('should throw an exception if input element is not provided', function() {
    assert.throws(function() {
      autoComplete = new AutoComplete().render();
    });
  });

  it('should process the query and hide the UI if there were no results', function(done) {
    autoComplete = new AutoComplete({
      data: data,
      inputElement: inputElement
    }).render();

    autoComplete.inputElement.value = 'b';

    dom.triggerEvent(autoComplete.inputElement, 'input');

    setTimeout(function() {
      assert.ok(dom.hasClass(autoComplete.element, 'hidden'));

      done();
    }, 50);
  });

  it('should populate the UI with results', function(done) {
    autoComplete = new AutoComplete({
      data: data,
      inputElement: inputElement
    }).render();

    autoComplete.inputElement.value = 'a';

    dom.triggerEvent(autoComplete.inputElement, 'input');

    setTimeout(function() {
      assert.strictEqual(autoComplete.list_.items.length, 2);

      done();
    }, 50);
  });

  it('should select an item from the results', function(done) {
    autoComplete = new AutoComplete({
      data: data,
      inputElement: inputElement
    }).render();

    var resultListener = sinon.spy(function(){});

    autoComplete.once('select', resultListener);

    autoComplete.inputElement.value = 'a';

    dom.triggerEvent(autoComplete.inputElement, 'input');

    setTimeout(function() {
      var elements = autoComplete.list_.element.querySelectorAll('li');

      dom.triggerEvent(elements[1], 'click');

      assert.ok(resultListener.calledOnce);

      done();
    }, 50);
  });

  it('should hide the UI on click outside', function(done) {
    autoComplete = new AutoComplete({
      data: data,
      inputElement: inputElement
    }).render();

    autoComplete.inputElement.value = 'a';

    dom.triggerEvent(autoComplete.inputElement, 'input');

    setTimeout(function() {
      dom.triggerEvent(document, 'click');

      assert.isFalse(autoComplete.visible);

      done();
    }, 50);
  });

  it('should format the data before applying it to the input', function(done) {
    autoComplete = new AutoComplete({
      data: data,
      select: function() {
          return 'new value';
      },
      inputElement: inputElement
    }).render();

    autoComplete.inputElement.value = 'a';

    dom.triggerEvent(autoComplete.inputElement, 'input');

    setTimeout(function() {
      var elements = autoComplete.list_.element.querySelectorAll('li');

      dom.triggerEvent(elements[1], 'click');

      assert.strictEqual(autoComplete.inputElement.value, 'new value');

      done();
    }, 50);
  });
});
