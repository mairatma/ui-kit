/* jshint ignore:start */
import ComponentRegistry from 'metaljs/src/component/ComponentRegistry';
var Templates = ComponentRegistry.Templates;
// This file was automatically generated from TreeView.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Templates.TreeView.
 * @hassoydeltemplate {TreeView}
 * @hassoydeltemplate {TreeView.nodes}
 * @hassoydelcall {TreeView}
 * @hassoydelcall {TreeView.nodes}
 */

if (typeof Templates.TreeView == 'undefined') { Templates.TreeView = {}; }


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Templates.TreeView.content = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(soy.$$getDelegateFn(soy.$$getDelTemplateId('TreeView.nodes'), '', true)(opt_data, null, opt_ijData));
};
if (goog.DEBUG) {
  Templates.TreeView.content.soyTemplateName = 'Templates.TreeView.content';
}


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Templates.TreeView.nodes = function(opt_data, opt_ignored, opt_ijData) {
  var output = '<ul class="treeview-nodes">';
  var nodeList209 = opt_data.nodes;
  var nodeListLen209 = nodeList209.length;
  for (var nodeIndex209 = 0; nodeIndex209 < nodeListLen209; nodeIndex209++) {
    var nodeData209 = nodeList209[nodeIndex209];
    var expanded__soy210 = nodeData209.children && nodeData209.expanded;
    output += '<li class="treeview-node ' + soy.$$escapeHtmlAttribute(expanded__soy210 ? 'expanded' : '') + ' ' + soy.$$escapeHtmlAttribute(nodeData209.children ? 'hasChildren' : '') + '"><div class="treeview-node-main u-cf" data-onclick="handleNodeClicked_"><div class="treeview-node-toggler"></div><span class="treeview-node-name">' + soy.$$escapeHtml(nodeData209.name) + '</span></div>' + ((nodeData209.children) ? Templates.TreeView.nodes({nodes: nodeData209.children}, null, opt_ijData) : '') + '</li>';
  }
  output += '</ul>';
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(output);
};
if (goog.DEBUG) {
  Templates.TreeView.nodes.soyTemplateName = 'Templates.TreeView.nodes';
}


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Templates.TreeView.__deltemplate_s225_13da0f6e = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(soy.$$getDelegateFn(soy.$$getDelTemplateId('TreeView'), 'element', true)({elementClasses: opt_data.elementClasses, elementContent: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('' + soy.$$getDelegateFn(soy.$$getDelTemplateId('TreeView'), 'content', true)(opt_data, null, opt_ijData)), id: opt_data.id}, null, opt_ijData));
};
if (goog.DEBUG) {
  Templates.TreeView.__deltemplate_s225_13da0f6e.soyTemplateName = 'Templates.TreeView.__deltemplate_s225_13da0f6e';
}
soy.$$registerDelegateFn(soy.$$getDelTemplateId('TreeView'), '', 0, Templates.TreeView.__deltemplate_s225_13da0f6e);


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Templates.TreeView.__deltemplate_s231_e5ca7691 = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(Templates.TreeView.content(opt_data, null, opt_ijData));
};
if (goog.DEBUG) {
  Templates.TreeView.__deltemplate_s231_e5ca7691.soyTemplateName = 'Templates.TreeView.__deltemplate_s231_e5ca7691';
}
soy.$$registerDelegateFn(soy.$$getDelTemplateId('TreeView'), 'content', 0, Templates.TreeView.__deltemplate_s231_e5ca7691);


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Templates.TreeView.__deltemplate_s233_38810b2c = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<div id="' + soy.$$escapeHtmlAttribute(opt_data.id) + '" class="treeview component' + soy.$$escapeHtmlAttribute(opt_data.elementClasses ? ' ' + opt_data.elementClasses : '') + '" data-component="">' + soy.$$escapeHtml(opt_data.elementContent) + '</div>');
};
if (goog.DEBUG) {
  Templates.TreeView.__deltemplate_s233_38810b2c.soyTemplateName = 'Templates.TreeView.__deltemplate_s233_38810b2c';
}
soy.$$registerDelegateFn(soy.$$getDelTemplateId('TreeView'), 'element', 0, Templates.TreeView.__deltemplate_s233_38810b2c);


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Templates.TreeView.__deltemplate_s241_6f4f2112 = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<div id="' + soy.$$escapeHtmlAttribute(opt_data.id) + '-nodes">' + soy.$$escapeHtml(opt_data.elementContent) + '</div>');
};
if (goog.DEBUG) {
  Templates.TreeView.__deltemplate_s241_6f4f2112.soyTemplateName = 'Templates.TreeView.__deltemplate_s241_6f4f2112';
}
soy.$$registerDelegateFn(soy.$$getDelTemplateId('TreeView.nodes'), 'element', 0, Templates.TreeView.__deltemplate_s241_6f4f2112);


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Templates.TreeView.__deltemplate_s247_c801199b = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(soy.$$getDelegateFn(soy.$$getDelTemplateId('TreeView.nodes'), 'element', true)({elementContent: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('' + ((! opt_ijData.skipSurfaceContents) ? soy.$$getDelegateFn(soy.$$getDelTemplateId('TreeView.nodes'), 'content', true)(opt_data, null, opt_ijData) : '')), id: opt_data.id}, null, opt_ijData));
};
if (goog.DEBUG) {
  Templates.TreeView.__deltemplate_s247_c801199b.soyTemplateName = 'Templates.TreeView.__deltemplate_s247_c801199b';
}
soy.$$registerDelegateFn(soy.$$getDelTemplateId('TreeView.nodes'), '', 0, Templates.TreeView.__deltemplate_s247_c801199b);


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Templates.TreeView.__deltemplate_s254_96976d66 = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(Templates.TreeView.nodes(opt_data, null, opt_ijData));
};
if (goog.DEBUG) {
  Templates.TreeView.__deltemplate_s254_96976d66.soyTemplateName = 'Templates.TreeView.__deltemplate_s254_96976d66';
}
soy.$$registerDelegateFn(soy.$$getDelTemplateId('TreeView.nodes'), 'content', 0, Templates.TreeView.__deltemplate_s254_96976d66);

Templates.TreeView.nodes.params = ["nodes"];
/* jshint ignore:end */
