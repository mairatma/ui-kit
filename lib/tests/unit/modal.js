'use strict';

import {async} from 'aui/promise/Promise';
import html from 'aui/html/html';
import dom from 'aui/dom/dom';
import Modal from '../../scripts/modal';

var modal;

describe('Modal', function() {
  afterEach(function() {
    if (modal) {
      modal.dispose();
    }
  });

  it('should render with default attributes', function() {
    modal = new Modal().render();
    var header = modal.getSurfaceElement('header').innerHTML;
    var body = modal.getSurfaceElement('body').innerHTML;
    var footer = modal.getSurfaceElement('footer').innerHTML;
    assert.strictEqual('', header);
    assert.strictEqual('', body);
    assert.strictEqual('', footer);
    assert.strictEqual('', modal.element.style.display);
  });

  it('should render with header only', function() {
    modal = new Modal({ header: 'header' }).render();
    var header = modal.getSurfaceElement('header').innerHTML;
    var body = modal.getSurfaceElement('body').innerHTML;
    var footer = modal.getSurfaceElement('footer').innerHTML;
    assert.strictEqual('<a class="modal-close icon-12-close-long" data-onclick="close"></a>header', header);
    assert.strictEqual('', body);
    assert.strictEqual('', footer);
  });

  it('should render with body only', function() {
    modal = new Modal({ body: 'body' }).render();
    var header = modal.getSurfaceElement('header').innerHTML;
    var body = modal.getSurfaceElement('body').innerHTML;
    var footer = modal.getSurfaceElement('footer').innerHTML;
    assert.strictEqual('', header);
    assert.strictEqual('body', body);
    assert.strictEqual('', footer);
  });

  it('should render with footer only', function() {
    modal = new Modal({ footer: 'footer' }).render();
    var header = modal.getSurfaceElement('header').innerHTML;
    var body = modal.getSurfaceElement('body').innerHTML;
    var footer = modal.getSurfaceElement('footer').innerHTML;
    assert.strictEqual('', header);
    assert.strictEqual('', body);
    assert.strictEqual('footer', footer);
  });

  it('should cause dom repaint when body attribute change', function(done) {
    modal = new Modal().render();
    modal.body = 'body';
    async.nextTick(function() {
      var body = modal.getSurfaceElement('body').innerHTML;
      assert.strictEqual('body', body);
      done();
    });
  });

  it('should cause dom repaint when header attribute change', function(done) {
    modal = new Modal().render();
    modal.header = 'header';
    async.nextTick(function() {
      var header = modal.getSurfaceElement('header').innerHTML;
      assert.strictEqual('<a class="modal-close icon-12-close-long" data-onclick="close"></a>header', header);
      done();
    });
  });

  it('should cause dom repaint when footer attribute change', function(done) {
    modal = new Modal().render();
    modal.footer = 'footer';
    async.nextTick(function() {
      var footer = modal.getSurfaceElement('footer').innerHTML;
      assert.strictEqual('footer', footer);
      done();
    });
  });

  it('should cause dom repaint when visible attribute change', function(done) {
    modal = new Modal().render();
    modal.visible = false;
    async.nextTick(function() {
      assert.strictEqual('none', modal.element.style.display);
      modal.visible = true;
      async.nextTick(function() {
        assert.strictEqual('', modal.element.style.display);
        done();
      });
    });
  });

  it('should cause dom repaint when overlay attribute change', function(done) {
    modal = new Modal().render();
    modal.overlay = false;
    async.nextTick(function() {
      assert.ok(!modal.overlayElement.parentNode);
      modal.overlay = true;
      async.nextTick(function() {
        assert.ok(modal.overlayElement.parentNode);
        done();
      });
    });
  });

  it('should close on clicking close icon', function(done) {
    modal = new Modal({ header: 'header' }).render();
    dom.triggerEvent(modal.element.querySelector('.modal-close'), 'click');
    async.nextTick(function() {
      assert.ok(!modal.visible);
      done();
    });
  });

  it('should decorate', function() {
    var markup = soy.$$getDelegateFn('Modal')({
      id: 'modal',
      elementClasses: 'component centered',
      header: 'header',
      body: 'body',
      footer: 'footer',
      overlay: true
    }, null, { renderChildComponents: true });

    dom.append(document.body, markup.content);
    var outerHTML = document.getElementById('modal').outerHTML;

    modal = new Modal({
      element: '#modal',
      header: 'header',
      body: 'body',
      footer: 'footer'
    }).decorate();

    assert.strictEqual(modal.element.outerHTML, outerHTML);
  });
});
