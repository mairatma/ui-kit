/* jshint ignore:start */
import ComponentRegistry from 'metaljs/src/component/ComponentRegistry';
var Templates = ComponentRegistry.Templates;
// This file was automatically generated from TooltipMenu.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Templates.TooltipMenu.
 * @hassoydeltemplate {ComponentElement}
 * @hassoydeltemplate {ComponentTemplate}
 * @hassoydeltemplate {TooltipMenu}
 * @hassoydeltemplate {TooltipMenu.items}
 * @hassoydelcall {Component}
 * @hassoydelcall {ComponentElement}
 * @hassoydelcall {Surface}
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
  var itemList105 = opt_data.items;
  var itemListLen105 = itemList105.length;
  for (var itemIndex105 = 0; itemIndex105 < itemListLen105; itemIndex105++) {
    var itemData105 = itemList105[itemIndex105];
    output += '<li class="tooltip-menu-item"><a class="tooltip-menu-link" href="' + soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(itemData105.href ? itemData105.href : '#')) + '">' + soy.$$escapeHtml(itemData105.content) + '</a></li>';
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
Templates.TooltipMenu.__deltemplate_s112_cfc546d2 = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<nav id="' + soy.$$escapeHtmlAttribute(opt_data.id) + '" class="tooltip-menu ' + soy.$$escapeHtmlAttribute(opt_data.elementClasses ? opt_data.elementClasses : '') + '" data-component>' + soy.$$escapeHtml(opt_data.elementContent) + '</nav>');
};
if (goog.DEBUG) {
  Templates.TooltipMenu.__deltemplate_s112_cfc546d2.soyTemplateName = 'Templates.TooltipMenu.__deltemplate_s112_cfc546d2';
}
soy.$$registerDelegateFn(soy.$$getDelTemplateId('TooltipMenu'), 'element', 0, Templates.TooltipMenu.__deltemplate_s112_cfc546d2);


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Templates.TooltipMenu.__deltemplate_s120_c0ab3df3 = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<ul id="' + soy.$$escapeHtmlAttribute(opt_data.id) + '-items" class="tooltip-menu-list">' + soy.$$escapeHtml(opt_data.elementContent) + '</ul>');
};
if (goog.DEBUG) {
  Templates.TooltipMenu.__deltemplate_s120_c0ab3df3.soyTemplateName = 'Templates.TooltipMenu.__deltemplate_s120_c0ab3df3';
}
soy.$$registerDelegateFn(soy.$$getDelTemplateId('TooltipMenu.items'), 'element', 0, Templates.TooltipMenu.__deltemplate_s120_c0ab3df3);


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Templates.TooltipMenu.__deltemplate_s126_8f8c631d = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(soy.$$escapeHtml(soy.$$getDelegateFn(soy.$$getDelTemplateId('Component'), '', true)(soy.$$augmentMap(opt_data, {componentName: 'TooltipMenu'}), null, opt_ijData)));
};
if (goog.DEBUG) {
  Templates.TooltipMenu.__deltemplate_s126_8f8c631d.soyTemplateName = 'Templates.TooltipMenu.__deltemplate_s126_8f8c631d';
}
soy.$$registerDelegateFn(soy.$$getDelTemplateId('TooltipMenu'), '', 0, Templates.TooltipMenu.__deltemplate_s126_8f8c631d);


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Templates.TooltipMenu.__deltemplate_s129_270e148b = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(soy.$$getDelegateFn(soy.$$getDelTemplateId('ComponentElement'), 'TooltipMenu', true)(soy.$$augmentMap(opt_data, {elementContent: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('' + Templates.TooltipMenu.content(opt_data, null, opt_ijData))}), null, opt_ijData));
};
if (goog.DEBUG) {
  Templates.TooltipMenu.__deltemplate_s129_270e148b.soyTemplateName = 'Templates.TooltipMenu.__deltemplate_s129_270e148b';
}
soy.$$registerDelegateFn(soy.$$getDelTemplateId('ComponentTemplate'), 'TooltipMenu', 0, Templates.TooltipMenu.__deltemplate_s129_270e148b);


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Templates.TooltipMenu.__deltemplate_s133_da5bead2 = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(soy.$$getDelegateFn(soy.$$getDelTemplateId('TooltipMenu'), 'element', true)(opt_data, null, opt_ijData));
};
if (goog.DEBUG) {
  Templates.TooltipMenu.__deltemplate_s133_da5bead2.soyTemplateName = 'Templates.TooltipMenu.__deltemplate_s133_da5bead2';
}
soy.$$registerDelegateFn(soy.$$getDelTemplateId('ComponentElement'), 'TooltipMenu', 0, Templates.TooltipMenu.__deltemplate_s133_da5bead2);


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Templates.TooltipMenu.__deltemplate_s135_8278e063 = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(soy.$$getDelegateFn(soy.$$getDelTemplateId('TooltipMenu.items'), 'element', true)(soy.$$augmentMap(opt_data, {elementContent: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('' + ((! opt_ijData.skipSurfaceContents) ? soy.$$escapeHtml(soy.$$getDelegateFn(soy.$$getDelTemplateId('Surface'), '', true)({content: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('' + Templates.TooltipMenu.items(opt_data, null, opt_ijData)), id: opt_data.id + '-items'}, null, opt_ijData)) : ''))}), null, opt_ijData));
};
if (goog.DEBUG) {
  Templates.TooltipMenu.__deltemplate_s135_8278e063.soyTemplateName = 'Templates.TooltipMenu.__deltemplate_s135_8278e063';
}
soy.$$registerDelegateFn(soy.$$getDelTemplateId('TooltipMenu.items'), '', 0, Templates.TooltipMenu.__deltemplate_s135_8278e063);

Templates.TooltipMenu.items.params = ["items"];
/* jshint ignore:end */
