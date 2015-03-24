'use strict';

import domPosition from 'aui/dom/position';

/**
 * Position utility. Computes region or best region to align an element with
 * another. Regions are relative to viewport, make sure to use element with
 * position fixed, or position absolute when the element first positioned
 * parent is the body element.
 */
class Position {

  /**
   * Aligns the element with the best region around alignElement. The best
   * region is defined by clockwise rotation starting from the specified
   * `position`. The element is always aligned in the middle of alignElement
   * axis.
   * @param {!Element} element Element to be aligned.
   * @param {!Element} alignElement Element to align with.
   * @param {Position.Top|Position.Right|Position.Bottom|Position.Left} pos
   *     The initial position to try. Options `Position.Top`, `Position.Right`,
   *     `Position.Bottom`, `Position.Left`.
   * @static
   */
  static align(element, alignElement, position) {
    var bestRegion = this.getAlignBestRegion(element, alignElement, position);
    var left = bestRegion.left;
    var top = bestRegion.top;

    var computedStyle = window.getComputedStyle(element, null);
    if (computedStyle.getPropertyValue('position') !== 'fixed') {
      var docEl = window.document.documentElement;
      bestRegion.top += docEl.clientTop + window.pageYOffset;
      bestRegion.left += docEl.clientLeft + window.pageXOffset;
    }

    element.style.top = bestRegion.top + 'px';
    element.style.left = bestRegion.left + 'px';
  }

  /**
   * Returns the best region to align element with alignElement. The best
   * region is defined by clockwise rotation starting from the specified
   * `position`. The element is always aligned in the middle of alignElement
   * axis.
   * @param {!Element} element Element to be aligned.
   * @param {!Element} alignElement Element to align with.
   * @param {Position.Top|Position.Right|Position.Bottom|Position.Left} pos
   *     The initial position to try. Options `Position.Top`, `Position.Right`,
   *     `Position.Bottom`, `Position.Left`.
   * @return {DOMRect} Best region to align element.
   * @static
   */
  static getAlignBestRegion(element, alignElement, position) {
    var bestArea = 0;
    var bestPosition = position;
    var bestRegion = this.getAlignRegion(element, alignElement, bestPosition);
    var tryPosition = bestPosition;
    var tryRegion = bestRegion;

    for (var i = 0; i < 4;) {
      if (domPosition.intersectRegion(domPosition.getViewportRegion(), tryRegion)) {
        var visibleRegion = domPosition.intersection(domPosition.getViewportRegion(), tryRegion);
        var area = visibleRegion.width * visibleRegion.height;
        if (area > bestArea) {
          bestArea = area;
          bestRegion = tryRegion;
          bestPosition = tryPosition;
        }
        if (domPosition.insideViewportRegion(tryRegion)) {
          break;
        }
      }
      tryPosition = (position + (++i)) % 4;
      tryRegion = this.getAlignRegion(element, alignElement, tryPosition);
    }

    return bestRegion;
  }

  /**
   * Returns the region to align element with alignElement. The element is
   * always aligned in the middle of alignElement axis.
   * @param {!Element} element Element to be aligned.
   * @param {!Element} alignElement Element to align with.
   * @param {Position.Top|Position.Right|Position.Bottom|Position.Left} pos
   *     The position to align. Options `Position.Top`, `Position.Right`,
   *     `Position.Bottom`, `Position.Left`.
   * @return {DOMRect} Region to align element.
   * @static
   */
  static getAlignRegion(element, alignElement, position) {
    var r1 = domPosition.getRegion(alignElement);
    var r2 = domPosition.getRegion(element);
    var top = 0;
    var left = 0;

    switch(position) {
      case Position.Top:
        top = r1.top - r2.height;
        left = r1.left + r1.width/2 - r2.width/2;
        break;
      case Position.Right:
        top = r1.top + r1.height/2 - r2.height/2;
        left = r1.left + r1.width;
        break;
      case Position.Bottom:
        top = r1.bottom;
        left = r1.left + r1.width/2 - r2.width/2;
        break;
      case Position.Left:
        top = r1.top + r1.height/2 - r2.height/2;
        left = r1.left - r2.width;
        break;
    }

    return {
      bottom: top + r2.height,
      height: r2.height,
      left: left,
      right: left + r2.width,
      top: top,
      width: r2.width
    };
  }

  /**
   * Checks if specified value is a valid position. Options `Position.Top`,
   *     `Position.Right`, `Position.Bottom`, `Position.Left`.
   * @param {Position.Top|Position.Right|Position.Bottom|Position.Left} val
   * @return {Boolean} Returns true if value is a valid position.
   * @static
   */
  static isValidPosition(val) {
    return 0 <= val && val <= 3;
  }
}

/**
 * Represents the `Position.Top` constant.
 * @type {Number}
 * @default 0
 * @static
 */
Position.Top = 0;

/**
 * Represents the `Position.Right` constant.
 * @type {Number}
 * @default 1
 * @static
 */
Position.Right = 1;

/**
 * Represents the `Position.Bottom` constant.
 * @type {Number}
 * @default 2
 * @static
 */
Position.Bottom = 2;

/**
 * Represents the `Position.Left` constant.
 * @type {Number}
 * @default 3
 * @static
 */
Position.Left = 3;

export default Position;
