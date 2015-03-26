'use strict';

import core from 'aui/core';
import dom from 'aui/dom/dom';
import domPosition from 'aui/dom/position';
import Attribute from 'aui/attribute/Attribute';

/**
 * Scrollspy utility.
 */
class Scrollspy extends Attribute {
  /**
   * @inheritDoc
   */
  constructor(opt_config) {
    super(opt_config);

    /**
     * Holds the active index.
     * @type {Number}
     * @private
     * @default -1
     */
    this.activeIndex = -1;

    /**
     * Holds the regions cache.
     * @type {Object}
     * @private
     * @default null
     */
    this.regions = null;

    /**
     * Holds event handle that listens scroll shared event emitter proxy.
     * @type {EventHandle}
     * @protected
     */
    this.scrollHandle_ = dom.on(this.scrollElement, 'scroll', this.checkPosition.bind(this));

    this.refresh();
    this.on('elementChanged', this.refresh);
    this.on('offsetChanged', this.refresh);
    this.on('scrollElementChanged', this.refresh);
    this.on('selectorChanged', this.refresh);
  }

  /**
   * @inheritDoc
   */
  disposeInternal() {
    this.scrollHandle_.dispose();
    this.deactivateAll();
    super.disposeInternal();
  }

  /**
   * Activates index matching element.
   * @param {Number} index
   */
  activate(index) {
    this.checkIndex_(index);
    if (this.activeIndex !== index) {
      if (this.activeIndex >= 0) {
        this.deactivate(this.activeIndex);
      }
      this.activeIndex = index;
      dom.addClasses(this.resolveElement(this.regions[index].link), [this.activeClass]);
    }
  }

  /**
   * Checks if index is valid, otherwise throws exception.
   * @protected
   */
  checkIndex_(index) {
    if (index < 0 && index >= this.region.length) {
      throw new Error('Index not valid');
    }
  }

  /**
   * Checks position of elements and activate the one in region.
   */
  checkPosition() {
    if (!this.regions) {
      this.activate(this.findAndCacheElementReferencesFromDoc_());
      return;
    }

    var scrollTop = this.getScrollTop_();
    var maxScrollTop = this.getScrollHeight_();
    var totalRegions = this.regions.length;
    var top = this.regions[this.activeIndex].region.top;
    var bottom = this.regions[this.activeIndex].region.bottom;

    if (scrollTop >= maxScrollTop) {
      this.activate(totalRegions - 1);
      return;
    }
    if (scrollTop < top && this.activeIndex > 0) {
      this.activate(this.activeIndex - 1);
      return;
    }
    if ((scrollTop >= top) && (scrollTop < bottom)) {
      this.activate(this.activeIndex);
      return;
    }
    if (scrollTop >= bottom && this.activeIndex < totalRegions - 1) {
      this.activate(this.activeIndex + 1);
      return;
    }
  }

  /**
   * Deactivates index matching element.
   * @param {Number} index
   */
  deactivate(index) {
    this.checkIndex_(index);
    dom.removeClasses(this.resolveElement(this.regions[index].link), [this.activeClass]);
  }

  /**
   * Deactivates all elements.
   */
  deactivateAll() {
    for (var i = 0; i < this.regions.length; i++) {
      this.deactivate(i);
    }
  }

  /**
   * Finds and cache element regions and return the index of the possible
   * active element.
   * @protected
   */
  findAndCacheElementReferencesFromDoc_() {
    var scrollTop = this.getScrollTop_();
    var index = 0;
    var found = false;
    var links = this.element.querySelectorAll(this.selector);
    this.regions = [];
    for (var i = 0; i < links.length; ++i) {
      var link = links[i];
      if (link.hash && (link.hash.length > 1)) {
        var element = document.getElementById(link.hash.substring(1));
        var region = domPosition.getRegion(element);
        this.regions.push({
          link: link,
          region: region
        });
        if (!found && scrollTop <= region.top) {
          index = i;
          found = true;
        }
      }
    }
    this.sortRegions_();
    return index;
  }

  /**
   * Gets the scroll height of `scrollElement`.
   * @return {Number}
   */
  getScrollHeight_() {
    var maxScrollTop = this.offset;
    maxScrollTop += domPosition.getHeight(this.scrollElement);
    maxScrollTop += this.scrollElementRegion.top;
    maxScrollTop -= domPosition.getClientHeight(this.scrollElement);
    return maxScrollTop;
  }

  /**
   * Gets the scroll top of `scrollElement`.
   * @return {Number}
   */
  getScrollTop_() {
    var scrollTop = this.offset;
    scrollTop += domPosition.getScrollTop(this.scrollElement);
    scrollTop += this.scrollElementRegion.top;
    return scrollTop;
  }

  /**
   * Refreshes all regions from document. Relevant when spying elements that
   * nodes can be added and removed.
   */
  refresh() {
    if (this.regions) {
      this.deactivateAll();
      this.regions = null;
    }
    this.activeIndex = -1;
    this.scrollElementRegion = domPosition.getRegion(this.scrollElement);
    this.checkPosition();
  }

  /**
   * Sorts regions from lower to higher on y-axis.
   * @protected
   */
  sortRegions_() {
    this.regions.sort(function(a, b) {
      return a.region.top - b.region.top;
    });
  }
}

Scrollspy.ATTRS = {
  /**
   * Class to be used as active class.
   * @attribute activeClass
   * @type {string}
   */
  activeClass: {
    validator: core.isString,
    value: 'active'
  },

  /**
   * Function that receives the matching element as argument and return
   * itself. Relevant when the `activeClass` must be applied to a different
   * element, e.g. a parentNode.
   * @type {function}
   * @default core.identityFunction
   */
  resolveElement: {
    validator: core.isFunction,
    value: core.identityFunction
  },

  /**
   * The scrollElement element to be used as scrollElement area for affix. The scrollElement is
   * where the scroll event is listened from.
   * @type {Element|Window}
   */
  scrollElement: {
    setter: dom.toElement,
    value: document
  },

  /**
   * Defines the offset that triggers scrollspy.
   * @type {Number}
   * @default 0
   */
  offset: {
    validator: core.isNumber,
    value: 0
  },

  /**
   * Element to be used as alignment reference of affix.
   * @type {Element}
   */
  element: {
    setter: dom.toElement
  },

  /**
   * Selector to query elements inside `element` to be activated.
   * @type {Element}
   * @default 'a'
   */
  selector: {
    validator: core.isString,
    value: 'a'
  }
};

export default Scrollspy;
