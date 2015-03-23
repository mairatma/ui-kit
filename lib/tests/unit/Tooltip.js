'use strict';

import {async} from 'aui/promise/Promise';
import dom from 'aui/dom/dom';
import position from 'aui/dom/position';
import Tooltip from '../../scripts/Tooltip';

var tooltip;

describe('Tooltip', function() {
  afterEach(function() {
    if (tooltip) {
      tooltip.dispose();
    }
  });

  it('should render with default attributes', function() {
    tooltip = new Tooltip().render();
    assert.strictEqual('', tooltip.element.style.display);
  });

  it('should render with content', function() {
    tooltip = new Tooltip({ content: 'content' }).render();
    assert.strictEqual('content', tooltip.element.innerHTML);
  });

  it('should update when content attribute change', function() {
    tooltip = new Tooltip().render();
    tooltip.content = 'content';
    async.nextTick(function() {
      assert.strictEqual('content', tooltip.element.innerHTML);
    });
  });

  it('should decorate', function() {
    var markup = soy.$$getDelegateFn('Tooltip')({
      id: 'tooltip',
      elementClasses: 'component',
      content: 'content'
    }, null, { renderChildComponents: true });

    dom.append(document.body, markup.content);
    var outerHTML = document.getElementById('tooltip').outerHTML;

    tooltip = new Tooltip({
      element: '#tooltip',
      content: 'content'
    }).decorate();

    assert.strictEqual(tooltip.element.outerHTML, outerHTML);
  });
});
