'use strict';

import core from 'metaljs/src/core';
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
		this.element.style.display = visible ? null : 'none';
	}
}

Component.ATTRS = {
	visible: {
		validator: core.isBoolean,
		value: true
	}
};

export default Component;
