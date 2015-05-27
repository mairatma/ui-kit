'use strict';

import dom from 'bower:metaljs/src/dom/dom';
import DragDropUpload from '../../scripts/DragDropUpload';
import Features from '../../scripts/Features';

var dragDropUpload;
var sandbox;

describe('DragDropUpload', function() {
  afterEach(function() {
    if (dragDropUpload) {
      dragDropUpload.dispose();
      dragDropUpload = null;
    }

    sandbox.restore();
  });

  beforeEach(function() {
    sandbox = sinon.sandbox.create();
    sandbox.useFakeXMLHttpRequest();
  });

  if (Features.dragDrop() && Features.ajaxUpload()) {
    it('should upload multiple files to the server', function(done) {
      dragDropUpload = new DragDropUpload().render();

      var uploadFailedHandler = sinon.stub();
      dragDropUpload.on('uploadFailed', uploadFailedHandler);

      var loadHandler = sinon.stub();
      dragDropUpload.on('uploadFinished', loadHandler);

      var uploadProgressHandler = sinon.stub();
      dragDropUpload.on('uploadProgress', uploadProgressHandler);

      dragDropUpload.on('uploadStart', function(xhr) {
        xhr.onerror();
        xhr.onload();
        xhr.upload.onprogress({
          lengthComputable: true,
          loaded: 1,
          total: 3
        });

        assert.ok(uploadFailedHandler.called);
        assert.ok(loadHandler.called);
        assert.ok(uploadProgressHandler.called);

        done();
      });

      dragDropUpload.uploadFiles_(['one', 'two', 'three']);
    });

    it('should detach the attached event listeners', function() {
      dragDropUpload = new DragDropUpload().render();

      var removeEventListener = sinon.stub();
      dragDropUpload.element.removeEventListener = removeEventListener;

      dragDropUpload.dispose();
      dragDropUpload = null;

      assert.ok(removeEventListener.calledWith('dragenter'));
      assert.ok(removeEventListener.calledWith('dragleave'));
      assert.ok(removeEventListener.calledWith('dragover'));
      assert.ok(removeEventListener.calledWith('drop'));
    });

    it('should trigger the attached events to the main element', function() {
      dragDropUpload = new DragDropUpload().render();

      dom.triggerEvent(dragDropUpload.element, 'dragenter');
      assert.isTrue(dom.hasClass(dragDropUpload.element, 'dragdrop-hover'));

      dom.triggerEvent(dragDropUpload.element, 'dragleave');
      assert.isFalse(dom.hasClass(dragDropUpload.element, 'dragdrop-hover'));
    });

    it('should hove class accept both string and null values', function() {
      dragDropUpload = new DragDropUpload({
        hoverClass: null
      }).render();

      assert.isNull(dragDropUpload.hoverClass);
    });
  }

});
