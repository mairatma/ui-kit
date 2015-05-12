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
  var nodeList183 = opt_data.nodes;
  var nodeListLen183 = nodeList183.length;
  for (var nodeIndex183 = 0; nodeIndex183 < nodeListLen183; nodeIndex183++) {
    var nodeData183 = nodeList183[nodeIndex183];
    var nodeId__soy184 = (opt_data.parentNodeId ? opt_data.parentNodeId : opt_data.id) + '-' + nodeIndex183;
    var expanded__soy185 = nodeData183.children && nodeData183.expanded;
    output += '<li id="' + soy.$$escapeHtmlAttribute(nodeId__soy184) + '" class="treeview-node ' + soy.$$escapeHtmlAttribute(expanded__soy185 ? 'expanded' : '') + ' ' + soy.$$escapeHtmlAttribute(nodeData183.children ? 'hasChildren' : '') + '"><div class="treeview-node-main u-cf" data-onclick="handleNodeClicked_"><div class="treeview-node-toggler"></div><span class="treeview-node-name">' + soy.$$escapeHtml(nodeData183.name) + '</span></div>' + ((nodeData183.children) ? Templates.TreeView.nodes({id: opt_data.id, nodes: nodeData183.children, parentNodeId: nodeId__soy184}, null, opt_ijData) : '') + '</li>';
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
Templates.TreeView.__deltemplate_s204_13da0f6e = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(soy.$$getDelegateFn(soy.$$getDelTemplateId('TreeView'), 'element', true)({elementClasses: opt_data.elementClasses, elementContent: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('' + Templates.TreeView.content(opt_data, null, opt_ijData)), id: opt_data.id}, null, opt_ijData));
};
if (goog.DEBUG) {
  Templates.TreeView.__deltemplate_s204_13da0f6e.soyTemplateName = 'Templates.TreeView.__deltemplate_s204_13da0f6e';
}
soy.$$registerDelegateFn(soy.$$getDelTemplateId('TreeView'), '', 0, Templates.TreeView.__deltemplate_s204_13da0f6e);


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Templates.TreeView.__deltemplate_s210_38810b2c = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<div id="' + soy.$$escapeHtmlAttribute(opt_data.id) + '" class="treeview component' + soy.$$escapeHtmlAttribute(opt_data.elementClasses ? ' ' + opt_data.elementClasses : '') + '" data-component="">' + soy.$$escapeHtml(opt_data.elementContent) + '</div>');
};
if (goog.DEBUG) {
  Templates.TreeView.__deltemplate_s210_38810b2c.soyTemplateName = 'Templates.TreeView.__deltemplate_s210_38810b2c';
}
soy.$$registerDelegateFn(soy.$$getDelTemplateId('TreeView'), 'element', 0, Templates.TreeView.__deltemplate_s210_38810b2c);


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Templates.TreeView.__deltemplate_s218_6f4f2112 = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<div id="' + soy.$$escapeHtmlAttribute(opt_data.id) + '-nodes">' + soy.$$escapeHtml(opt_data.elementContent) + '</div>');
};
if (goog.DEBUG) {
  Templates.TreeView.__deltemplate_s218_6f4f2112.soyTemplateName = 'Templates.TreeView.__deltemplate_s218_6f4f2112';
}
soy.$$registerDelegateFn(soy.$$getDelTemplateId('TreeView.nodes'), 'element', 0, Templates.TreeView.__deltemplate_s218_6f4f2112);


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Templates.TreeView.__deltemplate_s224_c801199b = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(soy.$$getDelegateFn(soy.$$getDelTemplateId('TreeView.nodes'), 'element', true)({elementContent: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('' + Templates.TreeView.nodes(opt_data, null, opt_ijData)), id: opt_data.id}, null, opt_ijData));
};
if (goog.DEBUG) {
  Templates.TreeView.__deltemplate_s224_c801199b.soyTemplateName = 'Templates.TreeView.__deltemplate_s224_c801199b';
}
soy.$$registerDelegateFn(soy.$$getDelTemplateId('TreeView.nodes'), '', 0, Templates.TreeView.__deltemplate_s224_c801199b);

Templates.TreeView.nodes.params = ["id","nodes"];
/* jshint ignore:end */
