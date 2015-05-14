'use strict';

import Features from '../../scripts/Features';
import Animation from '../../scripts/Animation';
import {CancellablePromise as Promise} from 'metal-promise/src/promise/Promise';
import dom from 'metaljs/src/dom/dom';

var animationClassElement = document.createElement('style');
animationClassElement.type = 'text/css';
animationClassElement.innerHTML =
  `.test-animation {
      background-color: red;
      -webkit-animation-name: color;
      -webkit-animation-duration: 1s;
      animation-name: color;
      animation-duration: 1s;
  }

  @-webkit-keyframes color {
      from {background-color: red;}
      to {background-color: yellow;}
  }

  /* Standard syntax */
  @keyframes color {
      from {background-color: red;}
      to {background-color: yellow;}
  }`;

document.getElementsByTagName('head')[0].appendChild(animationClassElement);

var testElement;

describe('Animation', function() {
  afterEach(function() {
    dom.exitDocument(testElement);
  });

  beforeEach(function() {
    testElement = document.createElement('div');
    dom.enterDocument(testElement);
  });

  if (Features.animationEvent('end')) {
    it('should apply animation classes to an element', function() {
      Animation.animate('test-animation', testElement);

      assert.isTrue(dom.hasClass(testElement, 'test-animation'));
    });
  }

  it('should resolve a promise after the animation finishes', function(done) {
    var animationListener = sinon.spy(function() {
      assert.strictEqual(true, animationListener.calledOnce);

      done();
    });

    Animation.animate('test-animation', testElement)
      .then(animationListener);
  });
});