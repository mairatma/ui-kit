'use strict';

import core from 'bower:metaljs/src/core';
import dom from 'bower:metaljs/src/dom/dom';
import SoyComponent from 'bower:metaljs/src/soy/SoyComponent';

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
