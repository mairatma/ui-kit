'use strict';

import Component from './Component';
import ComponentRegistry from 'metaljs/src/component/ComponentRegistry';
import './List.soy.js';

/**
 * List component.
 */
class List extends Component {
	constructor(opt_config) {
		super(opt_config);
	}
}

/**
 * Default list elementClasses.
 * @default list
 * @type {String}
 * @static
 */
List.ELEMENT_CLASSES = 'list';

/**
 * List attributes definition.
 * @type {Object}
 * @static
 */
List.ATTRS = {
	/**
	 * The list items. Each is represented by an object that can have the following keys:
	 *   - content: The item's main content.
	 *   - help: (Optional) The item's help content.
	 *   - icons: (Optional) A list of icon css classes to render on the right side.
	 *   - img: (Optional) An object that specifies the image's src and, optionally, a css
	 *       class it should use.
	 * @type {!Array<!Object>}
	 * @default []
	 */
	items: {
		validator: Array.isArray,
		valueFn: function() {
			return [];
		}
	}
};

ComponentRegistry.register('List', List);

export default List;
