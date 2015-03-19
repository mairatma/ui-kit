'use strict';

import core from 'aui/core';
import dom from 'aui/dom/dom';
import Component from './Component';
import ComponentRegistry from 'aui/component/ComponentRegistry';
import './Modal.soy';

class Modal extends Component {
  constructor(opt_config) {
    super(opt_config);
  }

  close() {
    this.visible = false;
  }

  disposeInternal() {
    dom.exitDocument(this.overlayElement);
    super.disposeInternal();
  }

  syncOverlay(overlay) {
    dom[overlay ? 'enterDocument' : 'exitDocument'](this.overlayElement);
  }

  syncVisible(visible) {
    if (this.overlay) {
      this.syncOverlay(visible);
    }
    super.syncVisible(visible);
  }

  valueOverlayElementFn_() {
    return dom.buildFragment('<div class="overlay"></div>').firstChild
  }
}

Modal.ELEMENT_CLASSES = 'modal';

Modal.ATTRS = {
  body: {
    validator: core.isString
  },
  elementClasses: {
    value: 'centered'
  },
  footer: {
    validator: core.isString
  },
  header: {
    validator: core.isString
  },
  overlay: {
    validator: core.isBoolean,
    value: true
  },
  overlayElement: {
    initOnly: true,
    valueFn: 'valueOverlayElementFn_'
  }
};

ComponentRegistry.register('Modal', Modal);

export default Modal;
