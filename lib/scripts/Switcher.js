'use strict';

import core from 'bower:metaljs/src/core';
import dom from 'bower:metaljs/src/dom/dom';
import Component from './Component';
import ComponentRegistry from 'bower:metaljs/src/component/ComponentRegistry';
import './Switcher.soy.js';

/**
 * Switcher component.
 */
class Switcher extends Component {
	constructor(opt_config) {
		super(opt_config);
	}

	/**
	 * @inheritDoc
	 */
	attached() {
		this.on('click', this.handleClick);
	}

	/**
	 * Handles switcher click.
	 */
	handleClick() {
		this.checked = !this.checked;
	}

	/**
	 * @inheritDoc
	 */
	syncChecked(checked) {
		dom[checked ? 'addClasses' : 'removeClasses'](this.element, 'switcher-on');
	}
}

/**
 * Default switcher elementClasses.
 * @default list
 * @type {String}
 * @static
 */
Switcher.ELEMENT_CLASSES = 'switcher';

/**
 * Switcher attributes definition.
 * @type {Object}
 * @static
 */
Switcher.ATTRS = {
	checked: {
		validator: core.isBoolean,
		value: false
	}
};

ComponentRegistry.register('Switcher', Switcher);

export default Switcher;
