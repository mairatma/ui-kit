'use strict';

import Component from './Component';
import ComponentRegistry from 'metaljs/src/component/ComponentRegistry';
import dom from 'metaljs/src/dom/dom';
import './TreeView.soy.js';

/**
 * TreeView component.
 */
class TreeView extends Component {
	constructor(opt_config) {
		super(opt_config);
	}

	/**
	 * This is called when one of this tree view's nodes is clicked.
	 * @param {Event} event
	 * @protected
	 */
	handleNodeClicked_(event) {
		var node = event.delegateTarget.parentNode;
		if (dom.hasClass(node, 'expanded')) {
			dom.removeClasses(node, ['expanded']);
		} else {
			dom.addClasses(node, ['expanded']);
		}
	}
}

/**
 * Default tree view elementClasses.
 * @default treeView
 * @type {String}
 * @static
 */
TreeView.ELEMENT_CLASSES = 'treeView';

/**
 * TreeView attributes definition.
 * @type {Object}
 * @static
 */
TreeView.ATTRS = {
	/**
	 * This tree view's nodes. Each node should have a name, and can optionally
	 * have nested children nodes. It should also indicate if its children are
	 * expanded or not.
	 * @type {Array<!{children: Array, expanded: boolean?, name: string}>}
	 * @default []
	 */
	nodes: {
		validator: Array.isArray,
		valueFn: function() {
			return [];
		}
	}
};

ComponentRegistry.register('TreeView', TreeView);

export default TreeView;
