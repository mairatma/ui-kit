'use strict';

import AutoComplete from '../../scripts/AutoComplete';
import dom from 'metaljs/src/dom/dom';
import {CancellablePromise as Promise} from 'metal-promise/src/promise/Promise';

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

  it('should throw an exception if data provider is not provided', function(done) {
    autoComplete = new AutoComplete({
      inputElement: inputElement
    }).render();

    autoComplete.inputElement.value = 'a';

    dom.triggerEvent(autoComplete.inputElement, 'input');

    autoComplete.on('error', function(error) {
      assert.strictEqual(error, 'There is no provided data loader');
      done();
    });
  });

  it('should throw an exception if data provider returns neither array nor Promise', function(done) {
    autoComplete = new AutoComplete({
      data: function() {
        return null;
      },
      inputElement: inputElement
    }).render();

    autoComplete.inputElement.value = 'a';

    dom.triggerEvent(autoComplete.inputElement, 'input');

    autoComplete.on('error', function(error) {
      assert.strictEqual(error, 'The returned value from data loader should be an array or a Promise');
      done();
    });
  });

  it('should detach the attached event listeners on dispose', function() {
      autoComplete = new AutoComplete({
        data: data,
        inputElement: inputElement
      }).render();

      var removeEventListener = sinon.stub();

      autoComplete.inputElement.removeEventListener = removeEventListener;

      autoComplete.dispose();
      autoComplete = null;

      assert.ok(removeEventListener.calledWith('input'));
    });

  it('should trigger query event on input', function(done) {
    autoComplete = new AutoComplete({
      data: data,
      inputElement: inputElement
    }).render();

    var queryListener = sinon.stub();

    autoComplete.once('query', queryListener);

    dom.triggerEvent(autoComplete.inputElement, 'input');

    setTimeout(function() {
      assert.ok(queryListener.calledOnce);
      done();
    }, 50);
  });

  it('should process the query and provide results', function(done) {
    autoComplete = new AutoComplete({
      data: data,
      inputElement: inputElement
    }).render();

    var resultListener = sinon.stub();

    autoComplete.once('result', resultListener);

    autoComplete.inputElement.value = 'a';

    dom.triggerEvent(autoComplete.inputElement, 'input');

    setTimeout(function() {
      assert.ok(resultListener.calledOnce);

      done();
    }, 50);
  });

  it('should process the query and hide the UI if there were no results', function(done) {
    autoComplete = new AutoComplete({
      data: data,
      inputElement: inputElement
    }).render();

    autoComplete.inputElement.value = 'b';

    dom.triggerEvent(autoComplete.inputElement, 'input');

    setTimeout(function() {
      assert.strictEqual(autoComplete.element.style.display, 'none');

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

  it('should populate the UI with results when data loader returns Promise', function(done) {
    autoComplete = new AutoComplete({
      data: function() {
        return new Promise(function(resolve, reject) {
          resolve(['Alabama', 'Alaska']);
        });
      },
      inputElement: inputElement
    }).render();

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

  it('should format the data before to display it', function(done) {
    autoComplete = new AutoComplete({
      data: data,
      format: function(item) {
        return item + '-formatted';
      },
      inputElement: inputElement
    }).render();

    autoComplete.inputElement.value = 'a';

    dom.triggerEvent(autoComplete.inputElement, 'input');

    setTimeout(function() {
      var items = autoComplete.list_.items;

      for(var i = 0; i < states.length; i++) {
        assert.strictEqual(states[i] + '-formatted', items[i]);
      }

      done();
    }, 50);
  });

  it('should format the data before applying it to the input', function(done) {
    autoComplete = new AutoComplete({
      data: data,
      select: function(curValue, newValue) {
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

  it('should hide the list on click outside', function(done) {
    autoComplete = new AutoComplete({
      data: data,
      inputElement: inputElement
    }).render();

    autoComplete.inputElement.value = 'a';

    dom.triggerEvent(autoComplete.inputElement, 'input');

    setTimeout(function() {
      dom.triggerEvent(document.body, 'click');

      assert.isFalse(autoComplete.visible);

      done();
    }, 50);
  });
});