'use strict';

/*
 * Features component.
 */
const Features = {
	/**
	 * Checks if the current environment supports AJAX upload via FormData.
	 * @return {boolean} True if AJAX upload via FormData is supported, false otherwise.
	 * @static
	 */
	ajaxUpload: function() {
		return !!window.FormData && 'upload' in new XMLHttpRequest();
	},

	/**
	 * Checks for support of animation events and normalizes them among browsers.
	 * @param {string} type The name of the event which have to be checked and normalized.
	 * @return {string|undefined} The normalized name of the animation event if any. If the
	 * current browser does not support animation, undefined will be returned.
	 * @static
	 */
	animationEvent: function(type) {
		var animationEvent;
		var tempDiv = document.createElement('div');

		if (typeof tempDiv.style.animation !== 'undefined') {
			animationEvent = 'animation' + type;
		} else if (typeof tempDiv.style.WebkitAnimation !== 'undefined') {
			animationEvent = 'webkitAnimation' + type.charAt(0).toUpperCase() + type.slice(1);
		}

		return animationEvent;
	},

	/**
	 * Checks if Drag&Drop is supported in the current environment.
	 * @return {boolean} True if the current environment supports Drag&Drop, false otherwise.
	 * @static
	 */
	dragDrop: function() {
		return typeof FileReader !== 'undefined' && 'draggable' in document.createElement('span');
	}
};

export default Features;