/* jshint ignore:start */
import ComponentRegistry from 'bower:metaljs/src/component/ComponentRegistry';
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
  var itemList163 = opt_data.content;
  var itemListLen163 = itemList163.length;
  for (var itemIndex163 = 0; itemIndex163 < itemListLen163; itemIndex163++) {
    var itemData163 = itemList163[itemIndex163];
    output += '<li class="tooltip-menu-item"><a class="tooltip-menu-link" href="' + soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(itemData163.href ? itemData163.href : '#')) + '">' + soy.$$escapeHtml(itemData163.content) + '</a></li>';
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
Templates.TooltipMenu.__deltemplate_s170_cfc546d2 = function(opt_data, opt_ignored, opt_ijData) {
  opt_data = opt_data || {};
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<nav id="' + soy.$$escapeHtmlAttribute(opt_data.id) + '" class="tooltip-menu ' + soy.$$escapeHtmlAttribute(opt_data.elementClasses ? opt_data.elementClasses : '') + '" data-component>' + soy.$$escapeHtml(opt_data.elementContent) + '</nav>');
};
if (goog.DEBUG) {
  Templates.TooltipMenu.__deltemplate_s170_cfc546d2.soyTemplateName = 'Templates.TooltipMenu.__deltemplate_s170_cfc546d2';
}
soy.$$registerDelegateFn(soy.$$getDelTemplateId('TooltipMenu'), 'element', 0, Templates.TooltipMenu.__deltemplate_s170_cfc546d2);


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Templates.TooltipMenu.__deltemplate_s178_c0ab3df3 = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<ul id="' + soy.$$escapeHtmlAttribute(opt_data.id) + '-items" class="tooltip-menu-list">' + soy.$$escapeHtml(opt_data.elementContent) + '</ul>');
};
if (goog.DEBUG) {
  Templates.TooltipMenu.__deltemplate_s178_c0ab3df3.soyTemplateName = 'Templates.TooltipMenu.__deltemplate_s178_c0ab3df3';
}
soy.$$registerDelegateFn(soy.$$getDelTemplateId('TooltipMenu.items'), 'element', 0, Templates.TooltipMenu.__deltemplate_s178_c0ab3df3);


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Templates.TooltipMenu.__deltemplate_s184_8f8c631d = function(opt_data, opt_ignored, opt_ijData) {
  opt_data = opt_data || {};
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(soy.$$getDelegateFn(soy.$$getDelTemplateId('TooltipMenu'), 'element', true)({elementClasses: opt_data.elementClasses, elementContent: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('' + Templates.TooltipMenu.content(opt_data, null, opt_ijData)), id: opt_data.id}, null, opt_ijData));
};
if (goog.DEBUG) {
  Templates.TooltipMenu.__deltemplate_s184_8f8c631d.soyTemplateName = 'Templates.TooltipMenu.__deltemplate_s184_8f8c631d';
}
soy.$$registerDelegateFn(soy.$$getDelTemplateId('TooltipMenu'), '', 0, Templates.TooltipMenu.__deltemplate_s184_8f8c631d);


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Templates.TooltipMenu.__deltemplate_s190_8278e063 = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(soy.$$getDelegateFn(soy.$$getDelTemplateId('TooltipMenu.items'), 'element', true)({elementContent: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('' + Templates.TooltipMenu.items(opt_data, null, opt_ijData)), id: opt_data.id}, null, opt_ijData));
};
if (goog.DEBUG) {
  Templates.TooltipMenu.__deltemplate_s190_8278e063.soyTemplateName = 'Templates.TooltipMenu.__deltemplate_s190_8278e063';
}
soy.$$registerDelegateFn(soy.$$getDelTemplateId('TooltipMenu.items'), '', 0, Templates.TooltipMenu.__deltemplate_s190_8278e063);

Templates.TooltipMenu.items.params = ["content"];
/* jshint ignore:end */
