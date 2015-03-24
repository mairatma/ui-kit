'use strict';

import core from 'aui/core';
import dom from 'aui/dom/dom';
import Component from './Component';
import Position from './Position';
import ComponentRegistry from 'aui/component/ComponentRegistry';
import './TooltipMenu.soy';

/**
 * TooltipMenu component.
 */
class TooltipMenu extends Component {
  /**
   * @inheritDoc
   */
  constructor(opt_config) {
    super(opt_config);
  }

  /**
   * @inheritDoc
   */
  attached() {
    this.align();
  }

  /**
   * Aligns the tooltip with the best region around alignElement. The best
   * region is defined by clockwise rotation starting from the specified
   * `position`. The element is always aligned in the middle of alignElement
   * axis.
   * @param {Element=} opt_alignElement Optional element to align with.
   */
  align(opt_alignElement) {
    this.syncAlignElement(opt_alignElement);
  }

  /**
   * @inheritDoc
   */
  syncAlignElement(alignElement) {
    if (this.inDocument && alignElement) {
      TooltipMenu.Position.align(this.element, alignElement, this.position);
    }
  }

  /**
   * @inheritDoc
   */
  syncVisible(visible) {
    super.syncVisible(visible);
    this.align();
  }
}

/**
 * @inheritDoc
 * @see `Position` class.
 * @static
 */
TooltipMenu.Position = Position;

/**
 * Default tooltip elementClasses.
 * @default tooltip
 * @type {String}
 * @static
 */
TooltipMenu.ELEMENT_CLASSES = 'tooltip-menu';

/**
 * TooltipMenu attrbutes definition.
 * @type {Object}
 * @static
 */
TooltipMenu.ATTRS = {
  /**
   * Element to align tooltip with.
   * @type {Element}
   */
  alignElement: {
    setter: dom.toElement
  },

  /**
   * Items to be placed inside tooltip menu. Each item must contain at least a
   * label key.
   * @type {!Array.<!object>}
   */
  items: {
    validator: Array.isArray,
    valueFn: function() {
      return [];
    }
  },

  /**
   * The position to try alignment. If not possible the best position will be
   * found.
   * @type {Position.Top|Position.Right|Position.Bottom|Position.Left}
   * @default Position.Bottom
   */
  position: {
    validator: TooltipMenu.Position.isValidPosition,
    value: TooltipMenu.Position.Bottom
  }
};

ComponentRegistry.register('TooltipMenu', TooltipMenu);

export default TooltipMenu;
