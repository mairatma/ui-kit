'use strict';

import dom from 'aui/dom/dom';
import position from 'aui/dom/position';
import Affix from '../../scripts/Affix';

var affix;
var container;
var element;
var elementInsideContainer;

describe('Affix', function() {
  after(function() {
    dom.exitDocument(element);
    dom.exitDocument(container);
  });

  afterEach(function() {
    if (affix) {
      affix.dispose();
    }
    if (container) {
      container.scrollTop = 0;
    }
    window.scrollTo(0, 0);
  });

  before(function() {
    dom.enterDocument('<style>body{margin:0;padding:0;}</style>');
    dom.enterDocument('<div id="affixElement" style="position:relative;top:100px;height:16px;">Element</div>');
    dom.enterDocument('<div id="container" style="position:relative;height:10000px;overflow:auto;"><div id="affixElementInsideContainer" style="position:relative;top:20000px;height:16px;">Element</div></div>');
    container = dom.toElement('#container');
    element = dom.toElement('#affixElement');
    elementInsideContainer = dom.toElement('#affixElementInsideContainer');
  });

  it('should never set affix-top when offsetTop not specified', function(done) {
    affix = new Affix({
      element: element
    });
    window.scrollTo(0, 100);
    nextScrollTick(function() {
      assert.ok(dom.hasClass(affix.element, 'affix-default'));
      assert.ok(!dom.hasClass(affix.element, 'affix-top'));
      done();
    });
  });

  it('should never set affix-bottom when offsetBottom not specified', function(done) {
    affix = new Affix({
      element: element
    });
    window.scrollTo(0, (position.getDocumentSize().height - 100));
    nextScrollTick(function() {
      assert.ok(dom.hasClass(affix.element, 'affix-default'));
      assert.ok(!dom.hasClass(affix.element, 'affix-bottom'));
      done();
    });
  });

  it('should set affix-top when reaches offsetTop', function() {
    affix = new Affix({
      element: element,
      offsetTop: 100
    });
    assert.ok(dom.hasClass(affix.element, 'affix-top'));
  });

  it('should restore class to affix-default when is not on offsetTop', function(done) {
    affix = new Affix({
      element: element,
      offsetTop: 50
    });
    assert.ok(dom.hasClass(affix.element, 'affix-top'));
    window.scrollTo(0, 51);
    nextScrollTick(function() {
      assert.ok(dom.hasClass(affix.element, 'affix-default'));
      window.scrollTo(0, 0);
      nextScrollTick(function() {
        assert.ok(dom.hasClass(affix.element, 'affix-top'));
        done();
      });
    });
  });

  it('should set affix-bottom when reaches offsetBottom', function(done) {
    affix = new Affix({
      element: element,
      offsetBottom: 0
    });
    window.scrollTo(0, position.getDocumentSize().height - window.document.documentElement.clientHeight);
    nextScrollTick(function() {
      assert.ok(dom.hasClass(affix.element, 'affix-bottom'));
      done();
    });
  });

  it('should restore class to affix-default when is not on offsetBottom', function(done) {
    affix = new Affix({
      element: element,
      offsetBottom: 0
    });
    assert.ok(dom.hasClass(affix.element, 'affix-default'));
    window.scrollTo(0, position.getDocumentSize().height - window.document.documentElement.clientHeight);
    nextScrollTick(function() {
      assert.ok(dom.hasClass(affix.element, 'affix-bottom'));
      window.scrollTo(0, position.getDocumentSize().height - window.document.documentElement.clientHeight - 1);
      nextScrollTick(function() {
        assert.ok(dom.hasClass(affix.element, 'affix-default'));
        done();
      });
    });
  });

  it('should set affix-top when reaches offsetTop inside container', function(done) {
    affix = new Affix({
      element: elementInsideContainer,
      container: container,
      offsetTop: 10
    });
    container.scrollTop = 5;
    nextScrollTick(function() {
      assert.ok(dom.hasClass(affix.element, 'affix-top'));
      done();
    }, container);
  });

  it('should set affix-bottom when reaches offsetBottom inside container', function(done) {
    affix = new Affix({
      element: elementInsideContainer,
      container: container,
      offsetBottom: 0
    });
    container.scrollTop = affix.getContainerDocumentHeight_();
    nextScrollTick(function() {
      affix.checkPosition();
      assert.ok(dom.hasClass(affix.element, 'affix-bottom'));
      done();
    }, container);
  });
});

var nextScrollTick = function(fn, opt_el) {
  var handler = dom.on(opt_el || document, 'scroll', function() {
    fn();
    handler.removeListener();
  });
};
