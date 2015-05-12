'use strict';

const Features = {
	dragDrop: function() {
		return typeof FileReader !== 'undefined' &&
			'draggable' in document.createElement('span');
	},

	ajaxUpload: function() {
		return !!window.FormData && 'upload' in new XMLHttpRequest();
	}
};

export default Features;