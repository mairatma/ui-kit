'use strict';

import AutoCompleteBase from './AutoCompleteBase';
import ComponentRegistry from 'metaljs/src/component/ComponentRegistry';
import core from 'metaljs/src/core';
import dom from 'metaljs/src/dom/dom';
import List from './List';
import position from 'metal-position/src/position';

/*
 * AutoComplete component.
 */
class AutoComplete extends AutoCompleteBase {
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
		super.attached();

		this.on('result', this.onDataResult_.bind(this));
	}

	/**
	 * @inheritDoc
	 */
	created() {
		this.DEFAULT_ELEMENT_PARENT = this.inputElement.parentNode;
	}

	/**
	 * @inheritDoc
	 */
	detached() {
		super.detached();

		this.list_.dispose();

		this.disposeDocumentClickEvents_();
	}

	renderInternal() {
		var inputElementRegion = position.getRegion(this.inputElement);
		this.element.style.top = inputElementRegion.bottom + 'px';
		this.element.style.width = inputElementRegion.width + 'px';

		this.list_ = new List().render(this.element);
		this.list_.on('itemSelected', this.onItemSelected_.bind(this));
	}

	/**
	 * Attaches click events to the list and to the document.
	 *
	 * @protected
	 */
	attachDocumentClickEvents_() {
		this.documentClickHandler_ = dom.on(document, 'click', this.onDocumentClick_.bind(this));
		this.listClickHandler_ = dom.on(this.list_.element, 'click', this.onListClick_.bind(this));
	}

	/**
	 * Disposes the attached click events to the list and to the document.
	 *
	 * @protected
	 */
	disposeDocumentClickEvents_() {
		if (this.documentClickHandler_) {
			this.documentClickHandler_.dispose();
			this.documentClickHandler_ = null;
		}

		if (this.listClickHandler_) {
			this.listClickHandler_.dispose();
			this.listClickHandler_ = null;
		}
	}

	/**
	 * Populates the UI with the data results and shows/hides the component.
	 *
	 * @protected
	 * @param {!array} data The loaded results from the user's query with
	 * which the UI should be populated
	 */
	onDataResult_(data) {
		if (data && data.length > 0) {
			this.list_.items = data;

			this.visible = true;
		} else {
			this.visible = false;
		}
	}

	/**
	 * Handles clicking on document. If the dropdown is visible, hides it.
	 *
	 * @protected
	 * @param {Event} event The native click event
	 */
	onDocumentClick_(event) {
		this.visible = false;
	}

	/**
	 * Emits a `select` event with the information about the selected item
	 * and hides the UI.
	 *
	 * @param {!DOMElement} item The selected item from the UI
	 */
	onItemSelected_(item) {
		var itemIndex = parseInt(item.getAttribute('data-index'), 10);

		this.emit('select', this.list_.items[itemIndex].text);

		this.visible = false;
	}

	/**
	 * Handles clicking on the list. The function stops the event propagation.
	 *
	 * @protected
	 * @param {Event} event The native click event
	 */
	onListClick_(event) {
		event.stopPropagation();
	}

	/**
	 * Synchronizes the visibility of the component.
	 *
	 * @protected
	 * @param {Boolean} visible If true, shows the component, hides it otherwise
	 */
	syncVisible(visible) {
		// Handles the change of visible property. The function
		// attaches click listeners to document and the list and stops
		// the event when user clicks on the list. In this case,
		// if the event propagates to the document, this means user clicked
		// outside of the list.
		// TODO: Re-evaluate this approach

		if (visible) {
			this.element.style.display = null;

			this.attachDocumentClickEvents_();
		} else {
			this.element.style.display ='none';

			this.disposeDocumentClickEvents_();
		}
	}
}

/**
 * Provides a list of classes which have to be applied to the element's DOM element.
 *
 * @type {string}
 * @static
 * @default 'autocomplete autocomplete-list'
 */
AutoComplete.ELEMENT_CLASSES = 'autocomplete autocomplete-list';

/**
 * AutoComplete attributes definition.
 *
 * @type {Object}
 * @static
 */
AutoComplete.ATTRS = {
	/**
	 * Toggles the visibility of a component.
	 *
	 * @type {Boolean}
	 * @default false
	 */
	visible: {
		validator: core.isBoolean,
		value: false
	}
};

ComponentRegistry.register('AutoComplete', AutoComplete);

export default AutoComplete;