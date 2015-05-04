/* jshint ignore:start */
import ComponentRegistry from 'metaljs/src/component/ComponentRegistry';
var Templates = ComponentRegistry.Templates;
// This file was automatically generated from Tooltip.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Templates.Tooltip.
 * @hassoydeltemplate {Tooltip}
 * @hassoydelcall {Tooltip}
 */

if (typeof Templates.Tooltip == 'undefined') { Templates.Tooltip = {}; }


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Templates.Tooltip.content = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(soy.$$escapeHtml(opt_data.content));
};
if (goog.DEBUG) {
  Templates.Tooltip.content.soyTemplateName = 'Templates.Tooltip.content';
}


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Templates.Tooltip.__deltemplate_s146_8d49094e = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(soy.$$getDelegateFn(soy.$$getDelTemplateId('Tooltip'), 'element', true)({elementClasses: opt_data.elementClasses, elementContent: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('' + soy.$$getDelegateFn(soy.$$getDelTemplateId('Tooltip'), 'content', true)(opt_data, null, opt_ijData)), id: opt_data.id}, null, opt_ijData));
};
if (goog.DEBUG) {
  Templates.Tooltip.__deltemplate_s146_8d49094e.soyTemplateName = 'Templates.Tooltip.__deltemplate_s146_8d49094e';
}
soy.$$registerDelegateFn(soy.$$getDelTemplateId('Tooltip'), '', 0, Templates.Tooltip.__deltemplate_s146_8d49094e);


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Templates.Tooltip.__deltemplate_s152_5eaa83f8 = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(Templates.Tooltip.content(opt_data, null, opt_ijData));
};
if (goog.DEBUG) {
  Templates.Tooltip.__deltemplate_s152_5eaa83f8.soyTemplateName = 'Templates.Tooltip.__deltemplate_s152_5eaa83f8';
}
soy.$$registerDelegateFn(soy.$$getDelTemplateId('Tooltip'), 'content', 0, Templates.Tooltip.__deltemplate_s152_5eaa83f8);


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Templates.Tooltip.__deltemplate_s154_71828d2a = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<div id="' + soy.$$escapeHtmlAttribute(opt_data.id) + '" class="tooltip component' + soy.$$escapeHtmlAttribute(opt_data.elementClasses ? ' ' + opt_data.elementClasses : '') + '" data-component="">' + soy.$$escapeHtml(opt_data.elementContent) + '</div>');
};
if (goog.DEBUG) {
  Templates.Tooltip.__deltemplate_s154_71828d2a.soyTemplateName = 'Templates.Tooltip.__deltemplate_s154_71828d2a';
}
soy.$$registerDelegateFn(soy.$$getDelTemplateId('Tooltip'), 'element', 0, Templates.Tooltip.__deltemplate_s154_71828d2a);

Templates.Tooltip.content.params = ["content"];
/* jshint ignore:end */
