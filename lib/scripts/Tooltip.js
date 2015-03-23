'use strict';

import core from 'aui/core';
import dom from 'aui/dom/dom';
import Component from './Component';
import Position from './Position';
import ComponentRegistry from 'aui/component/ComponentRegistry';
import './Tooltip.soy';

/**
 * Tooltip component.
 */
class Tooltip extends Component {
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
    this.syncAlignElement(this.alignElement);
  }

  /**
   * Aligns the tooltip with the best region around alignElement. The best
   * region is defined by clockwise rotation starting from the specified
   * `position`. The element is always aligned in the middle of alignElement
   * axis.
   * @param {Element=} opt_alignElement Optional element to align with.
   */
  align(opt_alignElement) {
    if (this.inDocument) {
      Tooltip.Position.align(this.element, opt_alignElement || this.alignElement, this.position);
    }
  }

  /**
   * @inheritDoc
   */
  syncAlignElement(alignElement) {
    if (this.inDocument && alignElement) {
      this.align();
    }
  }

  /**
   * @inheritDoc
   */
  syncContent(content) {
    if (this.inDocument) {
      dom.removeChildren(this.element);
      dom.append(this.element, content);
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
Tooltip.Position = Position;

/**
 * Default tooltip elementClasses.
 * @default tooltip
 * @type {String}
 * @static
 */
Tooltip.ELEMENT_CLASSES = 'tooltip';

/**
 * Tooltip attrbutes definition.
 * @type {Object}
 * @static
 */
Tooltip.ATTRS = {
  /**
   * Element to align tooltip with.
   * @type {Element}
   */
  alignElement: {
    setter: dom.toElement
  },

  /**
   * Content to be placed inside tooltip.
   * @type {String}
   */
  content: {
    validator: core.isString
  },

  /**
   * The position to try alignment. If not possible the best position will be
   * found.
   * @type {Position.Top|Position.Right|Position.Bottom|Position.Left}
   * @default Position.Bottom
   */
  position: {
    validator: Tooltip.Position.isValidPosition,
    value: Tooltip.Position.Bottom
  }
};

ComponentRegistry.register('Tooltip', Tooltip);

export default Tooltip;
