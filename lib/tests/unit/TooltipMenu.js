'use strict';

import async from 'metaljs/src/async/async';
import dom from 'metaljs/src/dom/dom';
import TooltipMenu from '../../scripts/TooltipMenu';

var menu;

describe('TooltipMenu', function() {
  afterEach(function() {
    if (menu) {
      menu.dispose();
    }
  });

  it('should render with default attributes', function() {
    menu = new TooltipMenu().render();
    assert.strictEqual('', menu.element.style.display);
  });

  it('should render with empty items', function() {
    menu = new TooltipMenu({ id: 'menu', items: [] }).render();
    assert.strictEqual('<ul id="menu-items" class="tooltip-menu-list"></ul>', menu.element.innerHTML);
  });

  it('should render with items', function() {
    menu = new TooltipMenu({
      id: 'menu',
      items: [{
        content: 'menu1'
      }, {
        content: 'menu2'
      }]
    }).render();
    assert.strictEqual(
      '<ul id="menu-items" class="tooltip-menu-list">' +
        '<li class="tooltip-menu-item"><a class="tooltip-menu-link" href="#">menu1</a></li>' +
        '<li class="tooltip-menu-item"><a class="tooltip-menu-link" href="#">menu2</a></li>' +
      '</ul>', menu.element.innerHTML);
  });

  it('should render with items when items attribute change', function(done) {
    menu = new TooltipMenu({ id: 'menu' }).render();
    menu.items = [{
      content: 'menu1'
    }, {
      content: 'menu2',
      href: 'foo'
    }];
    async.nextTick(function() {
      assert.strictEqual(
        '<ul id="menu-items" class="tooltip-menu-list">' +
          '<li class="tooltip-menu-item"><a class="tooltip-menu-link" href="#">menu1</a></li>' +
          '<li class="tooltip-menu-item"><a class="tooltip-menu-link" href="foo">menu2</a></li>' +
        '</ul>', menu.element.innerHTML);
      done();
    });
  });

  it('should decorate', function() {
    var markup = soy.$$getDelegateFn('TooltipMenu')({
      id: 'menu',
      elementClasses: 'component',
      items: [{
        content: 'menu1'
      }]
    }, null, {
      renderChildComponents: true
    });

    dom.append(document.body, markup.content);
    var outerHTML = document.getElementById('menu').outerHTML;

    menu = new TooltipMenu({
      element: '#menu',
      items: [{
        content: 'menu1'
      }]
    }).decorate();

    assert.strictEqual(menu.element.outerHTML, outerHTML);
  });
});
