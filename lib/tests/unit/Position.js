'use strict';

import {async} from 'aui/promise/Promise';
import dom from 'aui/dom/dom';
import position from 'aui/dom/position';
import Position from '../../scripts/Position';

var element;
var mutable;
var center;

describe('Position', function() {
  after(function() {
    dom.exitDocument(element);
    dom.exitDocument(mutable);
    dom.exitDocument(center);
  });

  before(function() {
    dom.enterDocument('<div id="element" style="position:absolute;height: 25px;width:25px;"></div>');
    dom.enterDocument('<div id="center" style="position:absolute;top:100px;left:100px;width:50px;height:50px;"></div>');
    dom.enterDocument('<div id="mutable" style="position:absolute;width:50px;height:50px;"></div>');
    element = dom.toElement('#element');
    mutable = dom.toElement('#mutable');
    center = dom.toElement('#center');
  });

  beforeEach(function() {
    mutable.style.top = '100px';
    mutable.style.left = '100px';
    mutable.style.bottom = '';
    mutable.style.right = '';
  });

  it('should align tooltip at bottom', function() {
    Position.align(element, center, Position.Bottom);
    assert.strictEqual('150px', element.style.top);
    assert.strictEqual('112.5px', element.style.left);
  });

  it('should align tooltip at right', function() {
    Position.align(element, center, Position.Right);
    assert.strictEqual('112.5px', element.style.top);
    assert.strictEqual('150px', element.style.left);
  });

  it('should align tooltip at top', function() {
    Position.align(element, center, Position.Top);
    assert.strictEqual('75px', element.style.top);
    assert.strictEqual('112.5px', element.style.left);
  });

  it('should align tooltip at left', function() {
    Position.align(element, center, Position.Left);
    assert.strictEqual('112.5px', element.style.top);
    assert.strictEqual('75px', element.style.left);
  });

  it('should try to align tooltip at top then move right', function() {
    mutable.style.top = 0;
    Position.align(element, mutable, Position.Top);
    assert.strictEqual('12.5px', element.style.top);
    assert.strictEqual('150px', element.style.left);
  });

  it('should try to align tooltip at right then move bottom', function() {
    mutable.style.left = (position.getRegion(window).right - 50) + 'px';
    Position.align(element, mutable, Position.Right);
    var mutableRegion = position.getRegion(mutable);
    var elementRegion = position.getRegion(element);
    assert.strictEqual('150px', element.style.top);
    assert.strictEqual((mutableRegion.left + mutableRegion.width/2 - elementRegion.width/2) + 'px', element.style.left);
  });

  it('should try to align tooltip at bottom then move left', function() {
    mutable.style.bottom = position.getRegion(window).bottom + 'px';
    mutable.style.top = (position.getRegion(window).bottom - 50) + 'px';
    Position.align(element, mutable, Position.Bottom);
    var mutableRegion = position.getRegion(mutable);
    var elementRegion = position.getRegion(element);
    assert.strictEqual((mutableRegion.top + mutableRegion.height/2 - elementRegion.height/2) + 'px', element.style.top);
    assert.strictEqual((mutableRegion.left - elementRegion.width) + 'px', element.style.left);
  });

  it('should try to align tooltip at left then move top', function() {
    mutable.style.top = '100px';
    mutable.style.left = 0;
    Position.align(element, mutable, Position.Left);
    assert.strictEqual('75px', element.style.top);
    assert.strictEqual('12.5px', element.style.left);
  });

  it('should compute pageYOffset when aligning tooltip element with position absolute', function() {
    element.style.position = 'absolute';
    mutable.style.position = 'relative';
    mutable.style.top = '10000px';
    mutable.style.left = '10000px';
    window.scrollTo(5000, 5000);
    Position.align(element, mutable, Position.Left);
    assert.strictEqual('10020.5px', element.style.top);
    assert.strictEqual('9983px', element.style.left);
  });

  it('should not compute pageYOffset when aligning tooltip element with position fixed', function() {
    element.style.position = 'fixed';
    mutable.style.position = 'relative';
    mutable.style.top = '10000px';
    mutable.style.left = '10000px';
    window.scrollTo(5000, 5000);
    Position.align(element, mutable, Position.Left);
    assert.strictEqual('5020.5px', element.style.top);
    assert.strictEqual('4983px', element.style.left);
  });
});
