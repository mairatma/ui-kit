'use strict';

import core from 'bower:metaljs/src/core';
import dom from 'bower:metaljs/src/dom/dom';
import Align from 'bower:metal-position/src/Align';
import Component from './Component';
import EventHandler from 'bower:metaljs/src/events/EventHandler';
import ComponentRegistry from 'bower:metaljs/src/component/ComponentRegistry';
import './Tooltip.soy.js';

/**
 * Tooltip component.
 */
class Tooltip extends Component {
	/**
	 * @inheritDoc
	 */
	constructor(opt_config) {
		super(opt_config);

		this.eventHandler_ = new EventHandler();
	}

	/**
	 * @inheritDoc
	 */
	attached() {
		this.align();
		this.syncEvents(this.events);
	}

	/**
	 * @inheritDoc
	 */
	detached() {
		this.eventHandler_.removeAllListeners();
	}

	/**
	 * Aligns the tooltip with the best region around alignElement. The best
	 * region is defined by clockwise rotation starting from the specified
	 * `position`. The element is always aligned in the middle of alignElement
	 * axis.
	 * @param {Element=} opt_alignElement Optional element to align with.
	 */
	align(opt_alignElement) {
		this.syncAlignElement(opt_alignElement || this.alignElement);
	}

	/**
	 * @param {Function} fn
	 * @param {number} delay
	 * @private
	 */
	callAsync_(fn, delay) {
		clearTimeout(this.delay_);
		this.delay_ = setTimeout(fn.bind(this), delay);
	}

	/**
	 * Handles hide event triggered by `events`.
	 * @param {Event} event
	 * @protected
	 */
	handleHide(event) {
		var interactingWithDifferentTarget = event.delegateTarget && (event.delegateTarget !== this.alignElement);
		this.callAsync_(function() {
			if (this.locked_) {
				return;
			}
			if (interactingWithDifferentTarget) {
				this.alignElement = event.delegateTarget;
			}
			else {
				this.visible = false;
			}
		}, this.delay[1]);
	}

	/**
	 * Handles show event triggered by `events`.
	 * @param {Event} event
	 * @protected
	 */
	handleShow(event) {
		this.callAsync_(function() {
			this.alignElement = event.delegateTarget;
			this.visible = true;
		}, this.delay[0]);
	}

	/**
	 * Handles toggle event triggered by `events`.
	 * @param {Event} event
	 * @protected
	 */
	handleToggle(event) {
		this.visible ? this.handleHide(event) : this.handleShow(event);
	}

	/**
	 * Locks tooltip visibility.
	 * @param {Event} event
	 */
	lock() {
		this.locked_ = true;
	}

	/**
	 * Unlocks tooltip visibility.
	 * @param {Event} event
	 */
	unlock(event) {
		this.locked_ = false;
		this.handleHide(event);
	}

	/**
	 * @inheritDoc
	 */
	syncAlignElement(alignElement) {
		if (this.inDocument && alignElement) {
			Tooltip.Align.align(this.element, alignElement, this.position);
		}
	}

	/**
	 * @inheritDoc
	 */
	syncContent(content) {
		if (this.inDocument) {
			dom.removeChildren(this.element);
			dom.append(this.element, content);
		}
	}

	/**
	 * @inheritDoc
	 */
	syncSelector() {
		this.syncEvents(this.events);
	}

	/**
	 * @inheritDoc
	 */
	syncEvents(events) {
		if (!this.inDocument) {
			return;
		}
		this.eventHandler_.removeAllListeners();
		var selector = this.selector;
		if (!selector) {
			return;
		}

		this.eventHandler_.add(
			this.on('mouseenter', this.lock),
			this.on('mouseleave', this.unlock));

		if (events[0] === events[1]) {
			this.eventHandler_.add(
				dom.delegate(document, events[0], selector, this.handleToggle.bind(this)));
		}
		else {
			this.eventHandler_.add(
				dom.delegate(document, events[0], selector, this.handleShow.bind(this)),
				dom.delegate(document, events[1], selector, this.handleHide.bind(this)));
		}
	}

	/**
	 * @inheritDoc
	 */
	syncVisible(visible) {
		super.syncVisible(visible);
		this.align();
	}
}

/**
 * @inheritDoc
 * @see `Align` class.
 * @static
 */
Tooltip.Align = Align;

/**
 * Default tooltip elementClasses.
 * @default tooltip
 * @type {String}
 * @static
 */
Tooltip.ELEMENT_CLASSES = 'tooltip';

/**
 * Tooltip attrbutes definition.
 * @type {Object}
 * @static
 */
Tooltip.ATTRS = {
	/**
	 * Element to align tooltip with.
	 * @type {Element}
	 */
	alignElement: {
		setter: dom.toElement
	},

	/**
	 * Delay showing and hiding the tooltip (ms).
	 * @type {!Array.<number>}
	 * @default [ 500, 250 ]
	 */
	delay: {
		validator: Array.isArray,
		value: [ 500, 250 ]
	},

	/**
	 * Trigger events used to bind handlers to show and hide tooltip.
	 * @type {!Array.<string>}
	 * @default ['mouseenter', 'mouseleave']
	 */
	events: {
		validator: Array.isArray,
		value: [ 'mouseenter', 'mouseleave' ]
	},

	/**
	 * If a selector is provided, tooltip objects will be delegated to the
	 * specified targets by setting the `alignElement`.
	 * @type {?string}
	 */
	selector: {
		validator: core.isString
	},

	/**
	 * Content to be placed inside tooltip.
	 * @type {String}
	 */
	content: {
		validator: core.isString
	},

	/**
	 * The position to try alignment. If not possible the best position will be
	 * found.
	 * @type {Align.Top|Align.Right|Align.Bottom|Align.Left}
	 * @default Align.Bottom
	 */
	position: {
		validator: Tooltip.Align.isValidPosition,
		value: Tooltip.Align.Bottom
	}
};

ComponentRegistry.register('Tooltip', Tooltip);

export default Tooltip;
