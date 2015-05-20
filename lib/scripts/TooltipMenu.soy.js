/* jshint ignore:start */
import ComponentRegistry from 'metaljs/src/component/ComponentRegistry';
var Templates = ComponentRegistry.Templates;
// This file was automatically generated from TooltipMenu.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Templates.TooltipMenu.
 * @hassoydeltemplate {TooltipMenu}
 * @hassoydeltemplate {TooltipMenu.items}
 * @hassoydelcall {TooltipMenu}
 * @hassoydelcall {TooltipMenu.items}
 */

if (typeof Templates.TooltipMenu == 'undefined') { Templates.TooltipMenu = {}; }


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Templates.TooltipMenu.content = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(soy.$$getDelegateFn(soy.$$getDelTemplateId('TooltipMenu.items'), '', true)(opt_data, null, opt_ijData));
};
if (goog.DEBUG) {
  Templates.TooltipMenu.content.soyTemplateName = 'Templates.TooltipMenu.content';
}


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Templates.TooltipMenu.items = function(opt_data, opt_ignored, opt_ijData) {
  var output = '';
  var itemList148 = opt_data.content;
  var itemListLen148 = itemList148.length;
  for (var itemIndex148 = 0; itemIndex148 < itemListLen148; itemIndex148++) {
    var itemData148 = itemList148[itemIndex148];
    output += '<li class="tooltip-menu-item"><a class="tooltip-menu-link" href="' + soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(itemData148.href ? itemData148.href : '#')) + '">' + soy.$$escapeHtml(itemData148.content) + '</a></li>';
  }
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(output);
};
if (goog.DEBUG) {
  Templates.TooltipMenu.items.soyTemplateName = 'Templates.TooltipMenu.items';
}


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Templates.TooltipMenu.__deltemplate_s155_cfc546d2 = function(opt_data, opt_ignored, opt_ijData) {
  opt_data = opt_data || {};
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<nav id="' + soy.$$escapeHtmlAttribute(opt_data.id) + '" class="tooltip-menu ' + soy.$$escapeHtmlAttribute(opt_data.elementClasses ? opt_data.elementClasses : '') + '" data-component>' + soy.$$escapeHtml(opt_data.elementContent) + '</nav>');
};
if (goog.DEBUG) {
  Templates.TooltipMenu.__deltemplate_s155_cfc546d2.soyTemplateName = 'Templates.TooltipMenu.__deltemplate_s155_cfc546d2';
}
soy.$$registerDelegateFn(soy.$$getDelTemplateId('TooltipMenu'), 'element', 0, Templates.TooltipMenu.__deltemplate_s155_cfc546d2);


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Templates.TooltipMenu.__deltemplate_s163_c0ab3df3 = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<ul id="' + soy.$$escapeHtmlAttribute(opt_data.id) + '-items" class="tooltip-menu-list">' + soy.$$escapeHtml(opt_data.elementContent) + '</ul>');
};
if (goog.DEBUG) {
  Templates.TooltipMenu.__deltemplate_s163_c0ab3df3.soyTemplateName = 'Templates.TooltipMenu.__deltemplate_s163_c0ab3df3';
}
soy.$$registerDelegateFn(soy.$$getDelTemplateId('TooltipMenu.items'), 'element', 0, Templates.TooltipMenu.__deltemplate_s163_c0ab3df3);


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Templates.TooltipMenu.__deltemplate_s169_8f8c631d = function(opt_data, opt_ignored, opt_ijData) {
  opt_data = opt_data || {};
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(soy.$$getDelegateFn(soy.$$getDelTemplateId('TooltipMenu'), 'element', true)({elementClasses: opt_data.elementClasses, elementContent: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('' + Templates.TooltipMenu.content(opt_data, null, opt_ijData)), id: opt_data.id}, null, opt_ijData));
};
if (goog.DEBUG) {
  Templates.TooltipMenu.__deltemplate_s169_8f8c631d.soyTemplateName = 'Templates.TooltipMenu.__deltemplate_s169_8f8c631d';
}
soy.$$registerDelegateFn(soy.$$getDelTemplateId('TooltipMenu'), '', 0, Templates.TooltipMenu.__deltemplate_s169_8f8c631d);


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Templates.TooltipMenu.__deltemplate_s175_8278e063 = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(soy.$$getDelegateFn(soy.$$getDelTemplateId('TooltipMenu.items'), 'element', true)({elementContent: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('' + Templates.TooltipMenu.items(opt_data, null, opt_ijData)), id: opt_data.id}, null, opt_ijData));
};
if (goog.DEBUG) {
  Templates.TooltipMenu.__deltemplate_s175_8278e063.soyTemplateName = 'Templates.TooltipMenu.__deltemplate_s175_8278e063';
}
soy.$$registerDelegateFn(soy.$$getDelTemplateId('TooltipMenu.items'), '', 0, Templates.TooltipMenu.__deltemplate_s175_8278e063);

Templates.TooltipMenu.items.params = ["content"];
/* jshint ignore:end */
