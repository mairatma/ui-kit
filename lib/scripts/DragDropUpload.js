'use strict';

import Component from 'bower:metaljs/src/component/Component';
import ComponentRegistry from 'bower:metaljs/src/component/ComponentRegistry';
import core from 'bower:metaljs/src/core';
import dom from 'bower:metaljs/src/dom/dom';
import EventHandler from 'bower:metaljs/src/events/EventHandler';
import Features from './Features';

/*
 * DragDropUpload component.
 */
class DragDropUpload extends Component {
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
		if (this.isCompatible_) {
			this.eventHandler_ = new EventHandler();
			this.eventHandler_.add(
				this.on('dragenter',  this.onDragEnter_, this),
				this.on('dragleave', this.onDragLeave_, this),
				this.on('dragover', this.preventEvent_, this),
				this.on('drop', this.onDrop_, this)
			);
		}
	}

	/**
	 * @inheritDoc
	 */
	created() {
		this.isCompatible_ = Features.dragDrop() && Features.ajaxUpload();
	}

	/**
	 * @inheritDoc
	 */
	detached() {
		if (this.isCompatible_) {
			this.eventHandler_.removeAllListeners();
		}
	}

	/**
	 * Adds a class, specified in `hoverClass` attribute, to the main element.
	 *
	 * @protected
	 * @param {!Event} event Drag enter event
	 */
	onDragEnter_(event) {
		this.preventEvent_(event);

		if (this.hoverClass) {
			dom.addClasses(this.element, this.hoverClass);
		}
	}

	/**
	 * Removes a class, specified in `hoverClass` attribute, from the main element.
	 *
	 * @protected
	 * @param {!Event} event Drag leave event
	 */
	onDragLeave_(event) {
		this.preventEvent_(event);

		if (this.hoverClass && dom.hasClass(event.target, this.hoverClass)) {
			dom.removeClasses(this.element, this.hoverClass);
		}
	}

	/**
	 * Handles dropping files in the main area.
	 *
	 * @protected
	 * @param {!Event} event Drop event
	 */
	onDrop_(event) {
		this.preventEvent_(event);
		this.uploadFiles_(event.dataTransfer.files);
	}

	/**
	 * Prevents a native event.
	 *
	 * @protected
	 * @param {!Event} event The event to be prevented
	 */
	preventEvent_(event) {
		event.preventDefault();
		event.stopImmediatePropagation();
	}

	/**
	 * Uploads files to the provided URL from the `uploadURL` attribute.
	 *
	 * @param {!Array.<File>} files List of files to be uploaded to server
	 */
	uploadFiles_(files) {
		var formData = new FormData();

		for (var i = 0; i < files.length; i++) {
			formData.append('file', files[i]);
		}

		var xhr = new XMLHttpRequest();
		xhr.open('POST', this.uploadURL);

		xhr.onerror = function() {
			this.emit('uploadFailed');
		}.bind(this);

		xhr.onload = function() {
			this.emit('uploadFinished');
		}.bind(this);

		xhr.upload.onprogress = function (event) {
			if (event.lengthComputable) {
				this.emit('uploadProgress', (event.loaded / event.total * 100 | 0));
			}
		}.bind(this);

		xhr.send(formData);

		this.emit('uploadStart', xhr);
	}
}

/**
 * DragDropUpload attributes definition.
 * @type {Object}
 * @static
 */
DragDropUpload.ATTRS = {
	/**
	 * The class which have to be added on the bounding box when user hovers on it.
	 *
	 * @type {string}
	 * @default dragdrop-hover
	 */
	hoverClass: {
		validator: function(value) {
			return core.isString(value) || core.isNull(value);
		},
		value: 'dragdrop-hover'
	},

	/**
	 * The URL where the files should be uploaded.
	 *
	 * @type {string}
	 */
	uploadURL: {
		validator: core.isString
	}
};

ComponentRegistry.register('DragDropUpload', DragDropUpload);

export default DragDropUpload;
