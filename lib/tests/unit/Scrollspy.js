'use strict';

import dom from 'bower:metaljs/src/dom/dom';
import Scrollspy from '../../scripts/Scrollspy';

var spy;
var element;
var scrollElement;

describe('Scrollspy', function() {
  before(function() {
    dom.enterDocument('<style id="style">body{margin:0;padding:0;}');
  });

  after(function() {
    dom.exitDocument(dom.toElement('#style'));
  });

  afterEach(function() {
    if (spy) {
      spy.dispose();
    }
    if (scrollElement) {
      scrollElement.scrollTop = 0;
    }
    window.scrollTo(0, 0);
  });

  describe('Container', function () {
    before(function() {
      dom.enterDocument('<ul id="element" style="position:relative;height:500px;margin:0;"><li><a id="element1" href="#link1">link1</a></li><li><a id="element2" href="#link2">link2</a></li><li><a id="element3" href="#link3">link3</a></li><li><a id="element4" href="#link4">link4</a></li><li><a id="element5" href="#link5">link5</a></li></ul>');
      dom.enterDocument('<div id="scrollElement" style="position:relative;height:500px;overflow-y:auto;"><div id="link1" style="height:500px;">Link1</div><div id="link2" style="height:500px;">Link2</div><div id="link3" style="height:500px;">Link3</div><div id="link4" style="height:500px;">Link4</div><div id="link5" style="height:500px;">Link5</div></div>');
      element = dom.toElement('#element');
      scrollElement = dom.toElement('#scrollElement');
    });

    after(function() {
      dom.exitDocument(element);
      dom.exitDocument(scrollElement);
    });

    it('should activate element at offset', function() {
      spy = new Scrollspy({
        element: element,
        scrollElement: scrollElement,
        offset: 0
      });
      assert.ok(dom.hasClass(dom.toElement('#element1'), 'active'));
    });

    it('should activate element when scrolling', function(done) {
      spy = new Scrollspy({
        element: element,
        scrollElement: scrollElement,
        offset: 0
      });
      scrollElement.scrollTop = 500;
      nextScrollTick(function() {
        assert.ok(!dom.hasClass(dom.toElement('#element1'), 'active'));
        assert.ok(dom.hasClass(dom.toElement('#element2'), 'active'));

        scrollElement.scrollTop = 1000;
        nextScrollTick(function() {
          assert.ok(!dom.hasClass(dom.toElement('#element1'), 'active'));
          assert.ok(!dom.hasClass(dom.toElement('#element2'), 'active'));
          assert.ok(dom.hasClass(dom.toElement('#element3'), 'active'));

          scrollElement.scrollTop = 1500;
          nextScrollTick(function() {
            assert.ok(!dom.hasClass(dom.toElement('#element1'), 'active'));
            assert.ok(!dom.hasClass(dom.toElement('#element2'), 'active'));
            assert.ok(!dom.hasClass(dom.toElement('#element3'), 'active'));
            assert.ok(dom.hasClass(dom.toElement('#element4'), 'active'));
            done();
          }, scrollElement);
        }, scrollElement);
      }, scrollElement);
    });

    it('should activate element when scrolling at offset', function(done) {
      spy = new Scrollspy({
        element: element,
        scrollElement: scrollElement,
        offset: 100
      });
      scrollElement.scrollTop = 400;
      nextScrollTick(function() {
        assert.ok(!dom.hasClass(dom.toElement('#element1'), 'active'));
        assert.ok(dom.hasClass(dom.toElement('#element2'), 'active'));
        done();
      }, scrollElement);
    });

    it('should activate last element when scrolling to maximum position', function(done) {
      spy = new Scrollspy({
        element: element,
        scrollElement: scrollElement,
        offset: 0
      });
      scrollElement.scrollTop = 99999;
      nextScrollTick(function() {
        assert.ok(!dom.hasClass(dom.toElement('#element1'), 'active'));
        assert.ok(!dom.hasClass(dom.toElement('#element2'), 'active'));
        assert.ok(!dom.hasClass(dom.toElement('#element3'), 'active'));
        assert.ok(!dom.hasClass(dom.toElement('#element4'), 'active'));
        assert.ok(dom.hasClass(dom.toElement('#element5'), 'active'));
        done();
      }, scrollElement);
    });

    it('should always activate closest element when scrolling', function(done) {
      spy = new Scrollspy({
        element: element,
        scrollElement: scrollElement,
        offset: 0
      });
      scrollElement.scrollTop = 1000;
      nextScrollTick(function() {
        assert.ok(!dom.hasClass(dom.toElement('#element1'), 'active'));
        assert.ok(!dom.hasClass(dom.toElement('#element2'), 'active'));
        assert.ok(dom.hasClass(dom.toElement('#element3'), 'active'));
        assert.ok(!dom.hasClass(dom.toElement('#element4'), 'active'));
        assert.ok(!dom.hasClass(dom.toElement('#element5'), 'active'));
        done();
      }, scrollElement);
    });
  });

  describe('Document', function () {
    before(function() {
      dom.enterDocument('<div id="scrollElement" style="position:relative;"><div id="link1" style="height:5000px;">Link1</div><div id="link2" style="height:5000px;">Link2</div><div id="link3" style="height:5000px;">Link3</div><div id="link4" style="height:5000px;">Link4</div></div></div>');
      dom.enterDocument('<ul id="element"><li><a id="element1" href="#link1">link1</a></li><li><a id="element2" href="#link2">link2</a></li><li><a id="element3" href="#link3">link3</a></li><li><a id="element4" href="#link4">link4</a></li></ul>');
      element = dom.toElement('#element');
      scrollElement = dom.toElement('#scrollElement');
    });

    after(function() {
      dom.exitDocument(element);
      dom.exitDocument(scrollElement);
    });

    it('should activate element', function() {
      spy = new Scrollspy({
        element: element,
        offset: 0
      });
      assert.ok(dom.hasClass(dom.toElement('#element1'), 'active'));
    });

    it('should activate resolved element', function() {
      spy = new Scrollspy({
        element: element,
        offset: 0,
        resolveElement: function(el) {
          return el.parentNode;
        }
      });
      assert.ok(dom.hasClass(dom.toElement('#element1').parentNode, 'active'));
    });

    it('should activate element when scrolling', function(done) {
      spy = new Scrollspy({
        element: element,
        offset: 0
      });
      window.scrollTo(0, 5000);
      nextScrollTick(function() {
        assert.ok(!dom.hasClass(dom.toElement('#element1'), 'active'));
        assert.ok(dom.hasClass(dom.toElement('#element2'), 'active'));

        window.scrollTo(0, 10000);
        nextScrollTick(function() {
          assert.ok(!dom.hasClass(dom.toElement('#element1'), 'active'));
          assert.ok(!dom.hasClass(dom.toElement('#element2'), 'active'));
          assert.ok(dom.hasClass(dom.toElement('#element3'), 'active'));

          window.scrollTo(0, 15000);
          nextScrollTick(function() {
            assert.ok(!dom.hasClass(dom.toElement('#element1'), 'active'));
            assert.ok(!dom.hasClass(dom.toElement('#element2'), 'active'));
            assert.ok(!dom.hasClass(dom.toElement('#element3'), 'active'));
            assert.ok(dom.hasClass(dom.toElement('#element4'), 'active'));
            done();
          });
        });
      });
    });

    it('should activate element when scrolling at offset', function(done) {
      spy = new Scrollspy({
        element: element,
        offset: 1000
      });
      window.scrollTo(0, 4000);
      nextScrollTick(function() {
        assert.ok(!dom.hasClass(dom.toElement('#element1'), 'active'));
        assert.ok(dom.hasClass(dom.toElement('#element2'), 'active'));
        done();
      });
    });

    it('should activate last element when scrolling to maximum position', function(done) {
      spy = new Scrollspy({
        element: element,
        offset: 0
      });
      window.scrollTo(0, 99999);
      nextScrollTick(function() {
        assert.ok(!dom.hasClass(dom.toElement('#element1'), 'active'));
        assert.ok(!dom.hasClass(dom.toElement('#element2'), 'active'));
        assert.ok(!dom.hasClass(dom.toElement('#element3'), 'active'));
        assert.ok(dom.hasClass(dom.toElement('#element4'), 'active'));
        done();
      });
    });

    it('should activate index of closest element when scrolling', function(done) {
      spy = new Scrollspy({
        element: element,
        offset: 0
      });
      window.scrollTo(0, 10000);
      nextScrollTick(function() {
        assert.ok(!dom.hasClass(dom.toElement('#element1'), 'active'));
        assert.ok(!dom.hasClass(dom.toElement('#element2'), 'active'));
        assert.ok(dom.hasClass(dom.toElement('#element3'), 'active'));
        assert.ok(!dom.hasClass(dom.toElement('#element4'), 'active'));
        done();
      });
    });
  });
});

var nextScrollTick = function(fn, opt_el) {
  var handler = dom.on(opt_el || document, 'scroll', function() {
    fn();
    handler.removeListener();
  });
};
