'use strict';

import Tooltip from './Tooltip';
import ComponentRegistry from 'metaljs/src/component/ComponentRegistry';
import './TooltipMenu.soy.js';

/**
 * TooltipMenu component.
 */
class TooltipMenu extends Tooltip {
	/**
	 * @inheritDoc
	 */
	constructor(opt_config) {
		super(opt_config);
	}

	/**
	 * @inheritDoc
	 */
	syncContent() {
	}
}

/**
 * Default tooltip elementClasses.
 * @default tooltip
 * @type {String}
 * @static
 */
TooltipMenu.ELEMENT_CLASSES_MERGED = 'tooltip-menu component';

/**
 * TooltipMenu attrbutes definition.
 * @type {Object}
 * @static
 */
TooltipMenu.ATTRS = {
	/**
	 * Delay showing and hiding the menu (ms).
	 * @type {!Array.<number>}
	 * @default [ 0, 0 ]
	 */
	delay: {
		validator: Array.isArray,
		value: [ 0, 0 ]
	},

	/**
	 * Trigger events used to bind handlers to show and hide tooltip.
	 * @type {!Array.<string>}
	 * @default ['click', 'mouseout']
	 */
	events: {
		validator: Array.isArray,
		value: [ 'click', 'click' ]
	},

	/**
	 * Items to be placed inside tooltip menu. Each item must contain at least a
	 * label key.
	 * @type {!Array.<!object>}
	 */
	content: {
		validator: Array.isArray,
		valueFn: function() {
			return [];
		}
	}
};

ComponentRegistry.register('TooltipMenu', TooltipMenu);

export default TooltipMenu;
