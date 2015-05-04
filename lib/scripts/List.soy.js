/* jshint ignore:start */
import ComponentRegistry from 'metaljs/src/component/ComponentRegistry';
var Templates = ComponentRegistry.Templates;
// This file was automatically generated from List.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Templates.List.
 * @hassoydeltemplate {List}
 * @hassoydeltemplate {List.items}
 * @hassoydelcall {List}
 * @hassoydelcall {List.items}
 */

if (typeof Templates.List == 'undefined') { Templates.List = {}; }


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Templates.List.content = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(soy.$$getDelegateFn(soy.$$getDelTemplateId('List.items'), '', true)(opt_data, null, opt_ijData));
};
if (goog.DEBUG) {
  Templates.List.content.soyTemplateName = 'Templates.List.content';
}


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Templates.List.items = function(opt_data, opt_ignored, opt_ijData) {
  var output = '';
  var itemList5 = opt_data.items;
  var itemListLen5 = itemList5.length;
  for (var itemIndex5 = 0; itemIndex5 < itemListLen5; itemIndex5++) {
    var itemData5 = itemList5[itemIndex5];
    output += '<li class="list-item u-cf">';
    if (itemData5.icons) {
      output += '<div class="list-icons u-pull-right">';
      var iconList10 = itemData5.icons;
      var iconListLen10 = iconList10.length;
      for (var iconIndex10 = 0; iconIndex10 < iconListLen10; iconIndex10++) {
        var iconData10 = iconList10[iconIndex10];
        output += '<span class="list-icon ' + soy.$$escapeHtmlAttribute(iconData10) + '"></span>';
      }
      output += '</div>';
    }
    output += ((itemData5.img) ? '<span class="list-image u-pull-left ' + soy.$$escapeHtmlAttribute(itemData5.img['class']) + '"><img src="' + soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(itemData5.img.src)) + '"></span>' : '') + '<div class="list-main-content u-pull-left"><div class="list-text-primary">' + soy.$$escapeHtml(itemData5.content) + '</div>' + ((itemData5.help) ? '<div class="list-text-secondary">' + soy.$$escapeHtml(itemData5.help) + '</div>' : '') + '</div></li>';
  }
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(output);
};
if (goog.DEBUG) {
  Templates.List.items.soyTemplateName = 'Templates.List.items';
}


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Templates.List.__deltemplate_s33_e3f298e9 = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<ul id="' + soy.$$escapeHtmlAttribute(opt_data.id) + '-items">' + soy.$$escapeHtml(opt_data.elementContent) + '</ul>');
};
if (goog.DEBUG) {
  Templates.List.__deltemplate_s33_e3f298e9.soyTemplateName = 'Templates.List.__deltemplate_s33_e3f298e9';
}
soy.$$registerDelegateFn(soy.$$getDelTemplateId('List.items'), 'element', 0, Templates.List.__deltemplate_s33_e3f298e9);


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Templates.List.__deltemplate_s39_88d36183 = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(soy.$$getDelegateFn(soy.$$getDelTemplateId('List'), 'element', true)({elementClasses: opt_data.elementClasses, elementContent: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('' + soy.$$getDelegateFn(soy.$$getDelTemplateId('List'), 'content', true)(opt_data, null, opt_ijData)), id: opt_data.id}, null, opt_ijData));
};
if (goog.DEBUG) {
  Templates.List.__deltemplate_s39_88d36183.soyTemplateName = 'Templates.List.__deltemplate_s39_88d36183';
}
soy.$$registerDelegateFn(soy.$$getDelTemplateId('List'), '', 0, Templates.List.__deltemplate_s39_88d36183);


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Templates.List.__deltemplate_s45_22b2cd87 = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(Templates.List.content(opt_data, null, opt_ijData));
};
if (goog.DEBUG) {
  Templates.List.__deltemplate_s45_22b2cd87.soyTemplateName = 'Templates.List.__deltemplate_s45_22b2cd87';
}
soy.$$registerDelegateFn(soy.$$getDelTemplateId('List'), 'content', 0, Templates.List.__deltemplate_s45_22b2cd87);


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Templates.List.__deltemplate_s47_4ac84340 = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<div id="' + soy.$$escapeHtmlAttribute(opt_data.id) + '" class="list component' + soy.$$escapeHtmlAttribute(opt_data.elementClasses ? ' ' + opt_data.elementClasses : '') + '" data-component="">' + soy.$$escapeHtml(opt_data.elementContent) + '</div>');
};
if (goog.DEBUG) {
  Templates.List.__deltemplate_s47_4ac84340.soyTemplateName = 'Templates.List.__deltemplate_s47_4ac84340';
}
soy.$$registerDelegateFn(soy.$$getDelTemplateId('List'), 'element', 0, Templates.List.__deltemplate_s47_4ac84340);


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Templates.List.__deltemplate_s55_605e1843 = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(soy.$$getDelegateFn(soy.$$getDelTemplateId('List.items'), 'element', true)({elementContent: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('' + ((! opt_ijData.skipSurfaceContents) ? soy.$$getDelegateFn(soy.$$getDelTemplateId('List.items'), 'content', true)(opt_data, null, opt_ijData) : '')), id: opt_data.id}, null, opt_ijData));
};
if (goog.DEBUG) {
  Templates.List.__deltemplate_s55_605e1843.soyTemplateName = 'Templates.List.__deltemplate_s55_605e1843';
}
soy.$$registerDelegateFn(soy.$$getDelTemplateId('List.items'), '', 0, Templates.List.__deltemplate_s55_605e1843);


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Templates.List.__deltemplate_s62_a7f1f1fc = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(Templates.List.items(opt_data, null, opt_ijData));
};
if (goog.DEBUG) {
  Templates.List.__deltemplate_s62_a7f1f1fc.soyTemplateName = 'Templates.List.__deltemplate_s62_a7f1f1fc';
}
soy.$$registerDelegateFn(soy.$$getDelTemplateId('List.items'), 'content', 0, Templates.List.__deltemplate_s62_a7f1f1fc);

Templates.List.items.params = ["items"];
/* jshint ignore:end */
