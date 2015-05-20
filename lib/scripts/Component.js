'use strict';

import core from 'metaljs/src/core';
import dom from 'metaljs/src/dom/dom';
import SoyComponent from 'metaljs/src/soy/SoyComponent';

class Component extends SoyComponent {
	constructor(opt_config) {
		super(opt_config);
	}

	/**
	 * Sets the component visibility to false.
	 */
	hide() {
		this.visible = false;
	}

	/**
	 * Sets the component visibility to true.
	 */
	show() {
		this.visible = true;
	}

	syncVisible(visible) {
		dom[visible ? 'removeClasses' : 'addClasses'](this.element, 'hidden');
	}
}

Component.ATTRS = {
	visible: {
		validator: core.isBoolean,
		value: true
	}
};

export default Component;
