/* jshint ignore:start */
import ComponentRegistry from 'aui/component/ComponentRegistry';
var Templates = ComponentRegistry.Templates;
// This file was automatically generated from Tooltip.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Templates.Tooltip.
 * @hassoydeltemplate {ComponentElement}
 * @hassoydeltemplate {ComponentTemplate}
 * @hassoydeltemplate {Tooltip}
 * @hassoydelcall {Component}
 * @hassoydelcall {ComponentElement}
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
Templates.Tooltip.__deltemplate_s75_8d49094e = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(soy.$$escapeHtml(soy.$$getDelegateFn(soy.$$getDelTemplateId('Component'), '', true)(soy.$$augmentMap(opt_data, {componentName: 'Tooltip'}), null, opt_ijData)));
};
if (goog.DEBUG) {
  Templates.Tooltip.__deltemplate_s75_8d49094e.soyTemplateName = 'Templates.Tooltip.__deltemplate_s75_8d49094e';
}
soy.$$registerDelegateFn(soy.$$getDelTemplateId('Tooltip'), '', 0, Templates.Tooltip.__deltemplate_s75_8d49094e);


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Templates.Tooltip.__deltemplate_s78_606fdd83 = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(soy.$$getDelegateFn(soy.$$getDelTemplateId('ComponentElement'), 'Tooltip', true)(soy.$$augmentMap(opt_data, {elementContent: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('' + Templates.Tooltip.content(opt_data, null, opt_ijData))}), null, opt_ijData));
};
if (goog.DEBUG) {
  Templates.Tooltip.__deltemplate_s78_606fdd83.soyTemplateName = 'Templates.Tooltip.__deltemplate_s78_606fdd83';
}
soy.$$registerDelegateFn(soy.$$getDelTemplateId('ComponentTemplate'), 'Tooltip', 0, Templates.Tooltip.__deltemplate_s78_606fdd83);


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Templates.Tooltip.__deltemplate_s82_71828d2a = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<div id="' + soy.$$escapeHtmlAttribute(opt_data.id) + '" class="tooltip component' + soy.$$escapeHtmlAttribute(opt_data.elementClasses ? ' ' + opt_data.elementClasses : '') + '" data-component="">' + soy.$$escapeHtml(opt_data.elementContent) + '</div>');
};
if (goog.DEBUG) {
  Templates.Tooltip.__deltemplate_s82_71828d2a.soyTemplateName = 'Templates.Tooltip.__deltemplate_s82_71828d2a';
}
soy.$$registerDelegateFn(soy.$$getDelTemplateId('Tooltip'), 'element', 0, Templates.Tooltip.__deltemplate_s82_71828d2a);


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Templates.Tooltip.__deltemplate_s90_a8d4319d = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(soy.$$getDelegateFn(soy.$$getDelTemplateId('Tooltip'), 'element', true)(opt_data, null, opt_ijData));
};
if (goog.DEBUG) {
  Templates.Tooltip.__deltemplate_s90_a8d4319d.soyTemplateName = 'Templates.Tooltip.__deltemplate_s90_a8d4319d';
}
soy.$$registerDelegateFn(soy.$$getDelTemplateId('ComponentElement'), 'Tooltip', 0, Templates.Tooltip.__deltemplate_s90_a8d4319d);

Templates.Tooltip.content.params = ["content"];
/* jshint ignore:end */
