'use strict';

import core from 'aui/core';
import SoyComponent from 'aui/soy/SoyComponent';

class Component extends SoyComponent {
  constructor(opt_config) {
    super(opt_config);
  }

  syncVisible(visible) {
    this.element.style.display = visible ? null : 'none';
  }
}

Component.ATTRS = {
  visible: {
    validator: core.isBoolean,
    value: true
  }
};

export default Component;
