'use strict';

import dom from 'metaljs/src/dom/dom';
import Features from './Features';

/*
 * Animation component.
 */
class Animation {
	/**
	 * Animates a DOM element by adding CSS classes to it.
	 * @param {string} classes The animation classes which have to be added to the element.
	 * @param {Element=} opt_element An optional DOM element to which the classes should be added.
	 * If not provided, {@code this.element} will be used instead.
	 * @return {Promise} Returns a Promise, which will be fulfilled when the animation finishes.
	 * If animation is not available in the current environment, the Promise will be resolved
	 * immediately.
	 * @static
	 */
	static animate(classes, opt_element) {
		return new Promise(function(resolve) {
			var element = opt_element || this.element;
			var animationEvent;

			var onAnimationEnd = function(event) {
				element.removeEventListener(animationEvent, onAnimationEnd);
				dom.removeClasses(element, classes);

				resolve(event);
			};

			animationEvent = Features.animationEvent('end');

			if (animationEvent) {
				dom.on(element, animationEvent, onAnimationEnd);
				dom.addClasses(element, classes);
			} else {
				resolve();
			}
		});
	}
}

export default Animation;