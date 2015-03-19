var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

(function () {
  "use strict";
  "use strict";

  /**
   * A collection of core utility functions.
   * @const
   */

  var jspm_packages$github$alloyui$core$master$core$$core = (function () {
    function jspm_packages$github$alloyui$core$master$core$$core() {
      _classCallCheck(this, jspm_packages$github$alloyui$core$master$core$$core);
    }

    _createClass(jspm_packages$github$alloyui$core$master$core$$core, null, {
      abstractMethod: {
        /**
         * When defining a class Foo with an abstract method bar(), you can do:
         * Foo.prototype.bar = core.abstractMethod
         *
         * Now if a subclass of Foo fails to override bar(), an error will be thrown
         * when bar() is invoked.
         *
         * @type {!Function}
         * @throws {Error} when invoked to indicate the method should be overridden.
         */

        value: function abstractMethod() {
          throw Error("Unimplemented abstract method");
        }
      },
      collectSuperClassesProperty: {

        /**
         * Loops constructor super classes collecting its properties values. If
         * property is not available on the super class `undefined` will be
         * collected as value for the class hierarchy position.
         * @param {!function()} constructor Class constructor.
         * @param {string} propertyName Property name to be collected.
         * @return {Array.<*>} Array of collected values.
         * TODO(*): Rethink superclass loop.
         */

        value: function collectSuperClassesProperty(constructor, propertyName) {
          var propertyValues = [constructor[propertyName]];
          while (constructor.__proto__ && !constructor.__proto__.isPrototypeOf(Function)) {
            constructor = constructor.__proto__;
            propertyValues.push(constructor[propertyName]);
          }
          return propertyValues;
        }
      },
      getUid: {

        /**
         * Gets an unique id. If `opt_object` argument is passed, the object is
         * mutated with an unique id. Consecutive calls with the same object
         * reference won't mutate the object again, instead the current object uid
         * returns. See {@link core.UID_PROPERTY}.
         * @type {opt_object} Optional object to be mutated with the uid. If not
         *     specified this method only returns the uid.
         * @throws {Error} when invoked to indicate the method should be overridden.
         */

        value: function getUid(opt_object) {
          if (opt_object) {
            return opt_object[jspm_packages$github$alloyui$core$master$core$$core.UID_PROPERTY] || (opt_object[jspm_packages$github$alloyui$core$master$core$$core.UID_PROPERTY] = jspm_packages$github$alloyui$core$master$core$$core.uniqueIdCounter_++);
          }
          return jspm_packages$github$alloyui$core$master$core$$core.uniqueIdCounter_++;
        }
      },
      identityFunction: {

        /**
         * The identity function. Returns its first argument.
         * @param {*=} opt_returnValue The single value that will be returned.
         * @return {?} The first argument.
         */

        value: function identityFunction(opt_returnValue) {
          return opt_returnValue;
        }
      },
      isBoolean: {

        /**
         * Returns true if the specified value is a boolean.
         * @param {?} val Variable to test.
         * @return {boolean} Whether variable is boolean.
         */

        value: function isBoolean(val) {
          return typeof val === "boolean";
        }
      },
      isDef: {

        /**
         * Returns true if the specified value is not undefined.
         * @param {?} val Variable to test.
         * @return {boolean} Whether variable is defined.
         */

        value: function isDef(val) {
          return val !== undefined;
        }
      },
      isDefAndNotNull: {

        /**
         * Returns true if value is not undefined or null.
         * @param {*} val
         * @return {Boolean}
         */

        value: function isDefAndNotNull(val) {
          return jspm_packages$github$alloyui$core$master$core$$core.isDef(val) && !jspm_packages$github$alloyui$core$master$core$$core.isNull(val);
        }
      },
      isElement: {

        /**
         * Returns true if value is a dom element.
         * @param {*} val
         * @return {Boolean}
         */

        value: function isElement(val) {
          return val && typeof val === "object" && val.nodeType === 1;
        }
      },
      isFunction: {

        /**
         * Returns true if the specified value is a function.
         * @param {?} val Variable to test.
         * @return {boolean} Whether variable is a function.
         */

        value: function isFunction(val) {
          return typeof val === "function";
        }
      },
      isNull: {

        /**
         * Returns true if value is null.
         * @param {*} val
         * @return {Boolean}
         */

        value: function isNull(val) {
          return val === null;
        }
      },
      isObject: {

        /**
         * Returns true if the specified value is an object. This includes arrays
         * and functions.
         * @param {?} val Variable to test.
         * @return {boolean} Whether variable is an object.
         */

        value: function isObject(val) {
          var type = typeof val;
          return type === "object" && val !== null || type === "function";
        }
      },
      isString: {

        /**
         * Returns true if value is a string.
         * @param {*} val
         * @return {Boolean}
         */

        value: function isString(val) {
          return typeof val === "string";
        }
      },
      mergeSuperClassesProperty: {

        /**
         * Merges the values of a static property a class with the values of that
         * property for all its super classes, and stores it as a new static
         * property of that class. If the static property already existed, it won't
         * be recalculated.
         * @param {!function()} constructor Class constructor.
         * @param {string} propertyName Property name to be collected.
         * @param {function(*, *):*=} opt_mergeFn Function that receives an array filled
         *   with the values of the property for the current class and all its super classes.
         *   Should return the merged value to be stored on the current class.
         * @return {*} The value of the merged property.
         */

        value: function mergeSuperClassesProperty(constructor, propertyName, opt_mergeFn) {
          var mergedName = propertyName + "_MERGED";
          if (constructor.hasOwnProperty(mergedName)) {
            return constructor[mergedName];
          }

          var merged = jspm_packages$github$alloyui$core$master$core$$core.collectSuperClassesProperty(constructor, propertyName);
          if (opt_mergeFn) {
            merged = opt_mergeFn(merged);
          }
          constructor[mergedName] = merged;
          return constructor[mergedName];
        }
      },
      nullFunction: {

        /**
         * Null function used for default values of callbacks, etc.
         * @return {void} Nothing.
         */

        value: function nullFunction() {}
      }
    });

    return jspm_packages$github$alloyui$core$master$core$$core;
  })();

  /**
   * Unique id property prefix.
   * @type {String}
   * @protected
   */
  jspm_packages$github$alloyui$core$master$core$$core.UID_PROPERTY = "core_" + (Math.random() * 1000000000 >>> 0);

  /**
   * Counter for unique id.
   * @type {Number}
   * @private
   */
  jspm_packages$github$alloyui$core$master$core$$core.uniqueIdCounter_ = 1;

  var jspm_packages$github$alloyui$core$master$core$$default = jspm_packages$github$alloyui$core$master$core$$core;
  "use strict";

  var jspm_packages$github$alloyui$core$master$object$object$$object = (function () {
    function jspm_packages$github$alloyui$core$master$object$object$$object() {
      _classCallCheck(this, jspm_packages$github$alloyui$core$master$object$object$$object);
    }

    _createClass(jspm_packages$github$alloyui$core$master$object$object$$object, null, {
      mixin: {
        /**
         * Copies all the members of a source object to a target object.
         * @param {Object} target Target object.
         * @param {...Object} var_args The objects from which values will be copied.
         * @return {Object} Returns the target object reference.
         */

        value: function mixin(target) {
          var key, source;
          for (var i = 1; i < arguments.length; i++) {
            source = arguments[i];
            for (key in source) {
              target[key] = source[key];
            }
          }
          return target;
        }
      }
    });

    return jspm_packages$github$alloyui$core$master$object$object$$object;
  })();

  var jspm_packages$github$alloyui$core$master$object$object$$default = jspm_packages$github$alloyui$core$master$object$object$$object;
  "use strict";

  /**
   * Disposable utility. When inherited provides the `dispose` function to its
   * subclass, which is responsible for disposing of any object references
   * when an instance won't be used anymore. Subclasses should override
   * `disposeInternal` to implement any specific disposing logic.
   * @constructor
   */

  var jspm_packages$github$alloyui$core$master$disposable$Disposable$$Disposable = (function () {
    function jspm_packages$github$alloyui$core$master$disposable$Disposable$$Disposable() {
      _classCallCheck(this, jspm_packages$github$alloyui$core$master$disposable$Disposable$$Disposable);

      /**
       * Flag indicating if this instance has already been disposed.
       * @type {boolean}
       * @protected
       */
      this.disposed_ = false;
    }

    _createClass(jspm_packages$github$alloyui$core$master$disposable$Disposable$$Disposable, {
      dispose: {

        /**
         * Disposes of this instance's object references. Calls `disposeInternal`.
         */

        value: function dispose() {
          if (!this.disposed_) {
            this.disposeInternal();
            this.disposed_ = true;
          }
        }
      },
      disposeInternal: {

        /**
         * Subclasses should override this method to implement any specific
         * disposing logic (like clearing references and calling `dispose` on other
         * disposables).
         */

        value: function disposeInternal() {}
      },
      isDisposed: {

        /**
         * Checks if this instance has already been disposed.
         * @return {boolean}
         */

        value: function isDisposed() {
          return this.disposed_;
        }
      }
    });

    return jspm_packages$github$alloyui$core$master$disposable$Disposable$$Disposable;
  })();

  var jspm_packages$github$alloyui$core$master$disposable$Disposable$$default = jspm_packages$github$alloyui$core$master$disposable$Disposable$$Disposable;
  "use strict";

  /**
   * EventHandle utility. Holds information about an event subscription, and
   * allows removing them easily.
   * EventHandle is a Disposable, but it's important to note that the
   * EventEmitter that created it is not the one responsible for disposing it.
   * That responsibility is for the code that holds a reference to it.
   * @param {!EventEmitter} emitter Emitter the event was subscribed to.
   * @param {string} event The name of the event that was subscribed to.
   * @param {!Function} listener The listener subscribed to the event.
   * @constructor
   * @extends {Disposable}
   */

  var jspm_packages$github$alloyui$core$master$events$EventHandle$$EventHandle = (function (_jspm_packages$github$alloyui$core$master$disposable$Disposable$$default) {
    function jspm_packages$github$alloyui$core$master$events$EventHandle$$EventHandle(emitter, event, listener) {
      _classCallCheck(this, jspm_packages$github$alloyui$core$master$events$EventHandle$$EventHandle);

      /**
       * The EventEmitter instance that the event was subscribed to.
       * @type {EventEmitter}
       * @protected
       */
      this.emitter_ = emitter;

      /**
       * The name of the event that was subscribed to.
       * @type {string}
       * @protected
       */
      this.event_ = event;

      /**
       * The listener subscribed to the event.
       * @type {Function}
       * @protected
       */
      this.listener_ = listener;
    }

    _inherits(jspm_packages$github$alloyui$core$master$events$EventHandle$$EventHandle, _jspm_packages$github$alloyui$core$master$disposable$Disposable$$default);

    _createClass(jspm_packages$github$alloyui$core$master$events$EventHandle$$EventHandle, {
      disposeInternal: {

        /**
         * Disposes of this instance's object references.
         * @override
         */

        value: function disposeInternal() {
          this.emitter_ = null;
          this.listener_ = null;
        }
      },
      removeListener: {

        /**
         * Removes the listener subscription from the emitter.
         */

        value: function removeListener() {
          if (!this.emitter_.isDisposed()) {
            this.emitter_.removeListener(this.event_, this.listener_);
          }
        }
      }
    });

    return jspm_packages$github$alloyui$core$master$events$EventHandle$$EventHandle;
  })(jspm_packages$github$alloyui$core$master$disposable$Disposable$$default);

  var jspm_packages$github$alloyui$core$master$events$EventHandle$$default = jspm_packages$github$alloyui$core$master$events$EventHandle$$EventHandle;
  "use strict";

  /**
   * This is a special EventHandle, that is responsible for dom events, instead
   * of EventEmitter events.
   * @param {!EventEmitter} emitter Emitter the event was subscribed to.
   * @param {string} event The name of the event that was subscribed to.
   * @param {!Function} listener The listener subscribed to the event.
   * @constructor
   * @extends {EventHandle}
   */

  var jspm_packages$github$alloyui$core$master$events$DomEventHandle$$DomEventHandle = (function (_jspm_packages$github$alloyui$core$master$events$EventHandle$$default) {
    function jspm_packages$github$alloyui$core$master$events$DomEventHandle$$DomEventHandle(emitter, event, listener) {
      _classCallCheck(this, jspm_packages$github$alloyui$core$master$events$DomEventHandle$$DomEventHandle);

      _get(Object.getPrototypeOf(jspm_packages$github$alloyui$core$master$events$DomEventHandle$$DomEventHandle.prototype), "constructor", this).call(this, emitter, event, listener);
    }

    _inherits(jspm_packages$github$alloyui$core$master$events$DomEventHandle$$DomEventHandle, _jspm_packages$github$alloyui$core$master$events$EventHandle$$default);

    _createClass(jspm_packages$github$alloyui$core$master$events$DomEventHandle$$DomEventHandle, {
      removeListener: {

        /**
         * @inheritDoc
         */

        value: function removeListener() {
          this.emitter_.removeEventListener(this.event_, this.listener_);
        }
      }
    });

    return jspm_packages$github$alloyui$core$master$events$DomEventHandle$$DomEventHandle;
  })(jspm_packages$github$alloyui$core$master$events$EventHandle$$default);

  var jspm_packages$github$alloyui$core$master$events$DomEventHandle$$default = jspm_packages$github$alloyui$core$master$events$DomEventHandle$$DomEventHandle;
  "use strict";

  var jspm_packages$github$alloyui$core$master$dom$dom$$dom = (function () {
    function jspm_packages$github$alloyui$core$master$dom$dom$$dom() {
      _classCallCheck(this, jspm_packages$github$alloyui$core$master$dom$dom$$dom);
    }

    _createClass(jspm_packages$github$alloyui$core$master$dom$dom$$dom, null, {
      addClasses: {
        /**
         * Adds the requested CSS classes to an element.
         * @param {!Element} element The element to add CSS classes to.
         * @param {!Array<string>} classes CSS classes to add.
         */

        value: function addClasses(element, classes) {
          if ("classList" in element) {
            jspm_packages$github$alloyui$core$master$dom$dom$$dom.addClassesWithNative_(element, classes);
          } else {
            jspm_packages$github$alloyui$core$master$dom$dom$$dom.addClassesWithoutNative_(element, classes);
          }
        }
      },
      enterDocument: {

        /**
         * Inserts node in document as last element.
         * @param {Element} node Element to remove children from.
         */

        value: function enterDocument(node) {
          jspm_packages$github$alloyui$core$master$dom$dom$$dom.append(document.body, node);
        }
      },
      exitDocument: {

        /**
         * Removes node from document.
         * @param {Element} node Element to remove children from.
         */

        value: function exitDocument(node) {
          if (node.parentNode) {
            node.parentNode.removeChild(node);
          }
        }
      },
      addClassesWithNative_: {

        /**
         * Adds the requested CSS classes to an element using classList.
         * @param {!Element} element The element to add CSS classes to.
         * @param {!Array<string>} classes CSS classes to add.
         * @protected
         */

        value: function addClassesWithNative_(element, classes) {
          classes.forEach(function (className) {
            element.classList.add(className);
          });
        }
      },
      addClassesWithoutNative_: {

        /**
         * Adds the requested CSS classes to an element without using classList.
         * @param {!Element} element The element to add CSS classes to.
         * @param {!Array<string>} classes CSS classes to add.
         * @protected
         */

        value: function addClassesWithoutNative_(element, classes) {
          var elementClassName = " " + element.className + " ";
          var classesToAppend = "";

          for (var i = 0; i < classes.length; i++) {
            var className = classes[i];

            if (elementClassName.indexOf(" " + className + " ") === -1) {
              classesToAppend += " " + className;
            }
          }

          if (classesToAppend) {
            element.className = element.className + classesToAppend;
          }
        }
      },
      append: {

        /**
         * Appends a child node with text or other nodes to a parent node. If
         * child is a HTML string it will be automatically converted to a document
         * fragment before appending it to the parent.
         * @param {!Element} parent The node to append nodes to.
         * @param {!Element|String} child The thing to append to the parent.
         * @return {!Element} The appended child.
         */

        value: function append(parent, child) {
          if (jspm_packages$github$alloyui$core$master$core$$default.isString(child)) {
            child = jspm_packages$github$alloyui$core$master$dom$dom$$dom.buildFragment(child);
          }
          return parent.appendChild(child);
        }
      },
      buildFragment: {

        /**
         * Helper for converting a HTML string into a document fragment.
         * @param {string} htmlString The HTML string to convert.
         * @return {!Element} The resulting document fragment.
         */

        value: function buildFragment(htmlString) {
          var tempDiv = document.createElement("div");
          tempDiv.innerHTML = "<br>" + htmlString;
          tempDiv.removeChild(tempDiv.firstChild);

          var fragment = document.createDocumentFragment();
          while (tempDiv.firstChild) {
            fragment.appendChild(tempDiv.firstChild);
          }
          return fragment;
        }
      },
      delegate: {

        /**
         * Listens to the specified event on the given DOM element, but only calls the
         * callback with the event when it triggered by elements that match the given
         * selector.
         * @param {!Element} element The container DOM element to listen to the event on.
         * @param {string} eventName The name of the event to listen to.
         * @param {string} selector The selector that matches the child elements that
         *   the event should be triggered for.
         * @param {!function(!Object)} callback Function to be called when the event is
         *   triggered. It will receive the normalized event object.
         * @return {!DomEventHandle} Can be used to remove the listener.
         */

        value: function delegate(element, eventName, selector, callback) {
          return jspm_packages$github$alloyui$core$master$dom$dom$$dom.on(element, eventName, jspm_packages$github$alloyui$core$master$dom$dom$$dom.handleDelegateEvent_.bind(null, selector, callback));
        }
      },
      handleDelegateEvent_: {

        /**
         * This is called when an event is triggered by a delegate listener (see
         * `dom.delegate` for more details).
         * @param {string} selector The selector or element that matches the child
         *   elements that the event should be triggered for.
         * @param {!function(!Object)} callback Function to be called when the event
         *   is triggered. It will receive the normalized event object.
         * @param {!Event} event The event payload.
         * @return {boolean} False if at least one of the triggered callbacks returns
         *   false, or true otherwise.
         */

        value: function handleDelegateEvent_(selector, callback, event) {
          jspm_packages$github$alloyui$core$master$dom$dom$$dom.normalizeDelegateEvent_(event);

          var currentElement = event.target;
          var returnValue = true;

          while (currentElement && !event.stopped) {
            if (jspm_packages$github$alloyui$core$master$core$$default.isString(selector) && jspm_packages$github$alloyui$core$master$dom$dom$$dom.match(currentElement, selector)) {
              event.delegateTarget = currentElement;
              returnValue &= callback(event);
            }
            currentElement = currentElement.parentNode;
          }

          return returnValue;
        }
      },
      hasClass: {

        /**
         * Checks if the given element has the requested css class.
         * @param {!Element} element
         * @param {string} className
         * @return {boolean}
         */

        value: function hasClass(element, className) {
          if ("classList" in element) {
            return jspm_packages$github$alloyui$core$master$dom$dom$$dom.hasClassWithNative_(element, className);
          } else {
            return jspm_packages$github$alloyui$core$master$dom$dom$$dom.hasClassWithoutNative_(element, className);
          }
        }
      },
      hasClassWithNative_: {

        /**
         * Checks if the given element has the requested css class using classList.
         * @param {!Element} element
         * @param {string} className
         * @return {boolean}
         * @protected
         */

        value: function hasClassWithNative_(element, className) {
          return element.classList.contains(className);
        }
      },
      hasClassWithoutNative_: {

        /**
         * Checks if the given element has the requested css class without using classList.
         * @param {!Element} element
         * @param {string} className
         * @return {boolean}
         * @protected
         */

        value: function hasClassWithoutNative_(element, className) {
          return (" " + element.className + " ").indexOf(" " + className + " ") >= 0;
        }
      },
      match: {

        /**
         * Check if an element matches a given selector.
         * @param {Element} element
         * @param {string} selector
         * @return {boolean}
         */

        value: function match(element, selector) {
          if (!element || element.nodeType !== 1) {
            return false;
          }

          var p = Element.prototype;
          var m = p.matches || p.webkitMatchesSelector || p.mozMatchesSelector || p.msMatchesSelector || p.oMatchesSelector;
          if (m) {
            return m.call(element, selector);
          }

          return jspm_packages$github$alloyui$core$master$dom$dom$$dom.matchFallback_(element, selector);
        }
      },
      matchFallback_: {

        /**
         * Check if an element matches a given selector, using an internal implementation
         * instead of calling existing javascript functions.
         * @param {Element} element
         * @param {string} selector
         * @return {boolean}
         * @protected
         */

        value: function matchFallback_(element, selector) {
          var nodes = document.querySelectorAll(selector, element.parentNode);
          for (var i = 0; i < nodes.length; ++i) {
            if (nodes[i] === element) {
              return true;
            }
          }
          return false;
        }
      },
      normalizeDelegateEvent_: {

        /**
         * Normalizes the event payload for delegate listeners.
         * @param {!Event} event
         */

        value: function normalizeDelegateEvent_(event) {
          event.stopPropagation = jspm_packages$github$alloyui$core$master$dom$dom$$dom.stopPropagation_;
          event.stopImmediatePropagation = jspm_packages$github$alloyui$core$master$dom$dom$$dom.stopImmediatePropagation_;
        }
      },
      on: {

        /**
         * Listens to the specified event on the given DOM element. This function normalizes
         * DOM event payloads and functions so they'll work the same way on all supported
         * browsers.
         * @param {!Element} element The DOM element to listen to the event on.
         * @param {string} eventName The name of the event to listen to.
         * @param {!function(!Object)} callback Function to be called when the event is
         *   triggered. It will receive the normalized event object.
         * @return {!DomEventHandle} Can be used to remove the listener.
         */

        value: function on(element, eventName, callback) {
          element.addEventListener(eventName, callback);
          return new jspm_packages$github$alloyui$core$master$events$DomEventHandle$$default(element, eventName, callback);
        }
      },
      removeChildren: {

        /**
         * Removes all the child nodes on a DOM node.
         * @param {Element} node Element to remove children from.
         */

        value: function removeChildren(node) {
          var child;
          while (child = node.firstChild) {
            node.removeChild(child);
          }
        }
      },
      removeClasses: {

        /**
         * Removes the requested CSS classes from an element.
         * @param {!Element} element The element to remove CSS classes from.
         * @param {!Array<string>} classes CSS classes to remove.
         */

        value: function removeClasses(element, classes) {
          if ("classList" in element) {
            jspm_packages$github$alloyui$core$master$dom$dom$$dom.removeClassesWithNative_(element, classes);
          } else {
            jspm_packages$github$alloyui$core$master$dom$dom$$dom.removeClassesWithoutNative_(element, classes);
          }
        }
      },
      removeClassesWithNative_: {

        /**
         * Removes the requested CSS classes from an element using classList.
         * @param {!Element} element The element to remove CSS classes from.
         * @param {!Array<string>} classes CSS classes to remove.
         * @protected
         */

        value: function removeClassesWithNative_(element, classes) {
          classes.forEach(function (className) {
            element.classList.remove(className);
          });
        }
      },
      removeClassesWithoutNative_: {

        /**
         * Removes the requested CSS classes from an element without using classList.
         * @param {!Element} element The element to remove CSS classes from.
         * @param {!Array<string>} classes CSS classes to remove.
         * @protected
         */

        value: function removeClassesWithoutNative_(element, classes) {
          var elementClassName = " " + element.className + " ";

          for (var i = 0; i < classes.length; i++) {
            elementClassName = elementClassName.replace(" " + classes[i] + " ", " ");
          }

          element.className = elementClassName.trim();
        }
      },
      stopImmediatePropagation_: {

        /**
         * The function that replaces `stopImmediatePropagation_` for events.
         * @protected
         */

        value: function stopImmediatePropagation_() {
          this.stopped = true;
          Event.prototype.stopImmediatePropagation.call(this);
        }
      },
      stopPropagation_: {

        /**
         * The function that replaces `stopPropagation` for events.
         * @protected
         */

        value: function stopPropagation_() {
          this.stopped = true;
          Event.prototype.stopPropagation.call(this);
        }
      },
      supportsEvent: {

        /**
         * Checks if the given element supports the given event type.
         * @param {!Element} element The DOM element to check.
         * @param {string} eventName The name of the event to check.
         * @return {boolean}
         */

        value: function supportsEvent(element, eventName) {
          return "on" + eventName in element;
        }
      },
      toElement: {

        /**
         * Converts the given argument to a DOM element. Strings are assumed to
         * be selectors, and so a matched element will be returned. If the arg
         * is already a DOM element it will be the return value.
         * @param {string|Element} selectorOrElement
         * @return {Element} The converted element, or null if none was found.
         */

        value: function toElement(selectorOrElement) {
          if (jspm_packages$github$alloyui$core$master$core$$default.isElement(selectorOrElement)) {
            return selectorOrElement;
          } else if (jspm_packages$github$alloyui$core$master$core$$default.isString(selectorOrElement)) {
            return document.querySelector(selectorOrElement);
          } else {
            return null;
          }
        }
      },
      triggerEvent: {

        /**
         * Triggers the specified event on the given element.
         * NOTE: This should mostly be used for testing, not on real code.
         * @param {!Element} element The node that should trigger the event.
         * @param {string} eventName The name of the event to be triggred.
         * @param {Object=} opt_eventObj An object with data that should be on the
         *   triggered event's payload.
         */

        value: function triggerEvent(element, eventName, opt_eventObj) {
          var eventObj = document.createEvent("HTMLEvents");
          eventObj.initEvent(eventName, true, true);
          jspm_packages$github$alloyui$core$master$object$object$$default.mixin(eventObj, opt_eventObj);
          element.dispatchEvent(eventObj);
        }
      }
    });

    return jspm_packages$github$alloyui$core$master$dom$dom$$dom;
  })();

  var jspm_packages$github$alloyui$core$master$dom$dom$$default = jspm_packages$github$alloyui$core$master$dom$dom$$dom;
  "use strict";

  /**
   * The component registry is used to register components, so they can
   * be accessible by name.
   * @type {Object}
   */

  var jspm_packages$github$alloyui$core$master$component$ComponentRegistry$$ComponentRegistry = (function () {
    function jspm_packages$github$alloyui$core$master$component$ComponentRegistry$$ComponentRegistry() {
      _classCallCheck(this, jspm_packages$github$alloyui$core$master$component$ComponentRegistry$$ComponentRegistry);
    }

    _createClass(jspm_packages$github$alloyui$core$master$component$ComponentRegistry$$ComponentRegistry, null, {
      getConstructor: {
        /**
         * Gets the constructor function for the given component name, or
         * undefined if it hasn't been registered yet.
         * @param {string} name The component's name.
         * @return {?function}
         * @static
         */

        value: function getConstructor(name) {
          var constructorFn = jspm_packages$github$alloyui$core$master$component$ComponentRegistry$$ComponentRegistry.components_[name];
          if (!constructorFn) {
            console.error("There's no constructor registered for the component " + "named " + name + ". Components need to be registered via " + "ComponentRegistry.register.");
          }
          return constructorFn;
        }
      },
      register: {

        /**
         * Registers a component.
         * @param {string} name The component's name.
         * @param {string} constructorFn The component's constructor function.
         * @static
         */

        value: function register(name, constructorFn) {
          jspm_packages$github$alloyui$core$master$component$ComponentRegistry$$ComponentRegistry.components_[name] = constructorFn;
          constructorFn.NAME = name;
          constructorFn.TEMPLATES = jspm_packages$github$alloyui$core$master$component$ComponentRegistry$$ComponentRegistry.Templates[name];
        }
      }
    });

    return jspm_packages$github$alloyui$core$master$component$ComponentRegistry$$ComponentRegistry;
  })();

  /**
   * Holds all registered components, indexed by their names.
   * @type {!Object<string, function()>}
   * @protected
   * @static
   */
  jspm_packages$github$alloyui$core$master$component$ComponentRegistry$$ComponentRegistry.components_ = {};

  /**
   * Holds all registered component templates, indexed by component names.
   * Soy files automatically add their templates to this object when imported.
   * @type {!Object<string, !Object<string, !function()>>}
   * @static
   */
  jspm_packages$github$alloyui$core$master$component$ComponentRegistry$$ComponentRegistry.Templates = {};

  var jspm_packages$github$alloyui$core$master$component$ComponentRegistry$$default = jspm_packages$github$alloyui$core$master$component$ComponentRegistry$$ComponentRegistry;
  "use strict";

  var jspm_packages$github$alloyui$core$master$array$array$$array = (function () {
    function jspm_packages$github$alloyui$core$master$array$array$$array() {
      _classCallCheck(this, jspm_packages$github$alloyui$core$master$array$array$$array);
    }

    _createClass(jspm_packages$github$alloyui$core$master$array$array$$array, null, {
      equal: {
        /**
         * Checks if the given arrays have the same content.
         * @param {!Array<*>} arr1
         * @param {!Array<*>} arr2
         * @return {boolean}
         */

        value: function equal(arr1, arr2) {
          for (var i = 0; i < arr1.length; i++) {
            if (arr1[i] !== arr2[i]) {
              return false;
            }
          }
          return arr1.length === arr2.length;
        }
      },
      firstDefinedValue: {

        /**
         * Returns the first value in the given array that isn't undefined.
         * @param {!Array} arr
         * @return {*}
         */

        value: function firstDefinedValue(arr) {
          for (var i = 0; i < arr.length; i++) {
            if (arr[i] !== undefined) {
              return arr[i];
            }
          }
        }
      },
      flatten: {

        /**
         * Transforms the input nested array to become flat.
         * @param {Array.<*|Array.<*>>} arr Nested array to flatten.
         * @param {Array.<*>} opt_output Optional output array.
         * @return {Array.<*>} Flat array.
         */

        value: function flatten(arr, opt_output) {
          var output = opt_output || [];
          for (var i = 0; i < arr.length; i++) {
            if (Array.isArray(arr[i])) {
              jspm_packages$github$alloyui$core$master$array$array$$array.flatten(arr[i], output);
            } else {
              output.push(arr[i]);
            }
          }
          return output;
        }
      },
      remove: {

        /**
         * Removes the first occurrence of a particular value from an array.
         * @param {Array.<T>} arr Array from which to remove value.
         * @param {T} obj Object to remove.
         * @return {boolean} True if an element was removed.
         * @template T
         */

        value: function remove(arr, obj) {
          var i = arr.indexOf(obj);
          var rv;
          if (rv = i >= 0) {
            jspm_packages$github$alloyui$core$master$array$array$$array.removeAt(arr, i);
          }
          return rv;
        }
      },
      removeAt: {

        /**
         * Removes from an array the element at index i
         * @param {Array} arr Array or array like object from which to remove value.
         * @param {number} i The index to remove.
         * @return {boolean} True if an element was removed.
         */

        value: function removeAt(arr, i) {
          return Array.prototype.splice.call(arr, i, 1).length === 1;
        }
      }
    });

    return jspm_packages$github$alloyui$core$master$array$array$$array;
  })();

  var jspm_packages$github$alloyui$core$master$array$array$$default = jspm_packages$github$alloyui$core$master$array$array$$array;
  "use strict";

  var jspm_packages$github$alloyui$core$master$string$string$$string = (function () {
    function jspm_packages$github$alloyui$core$master$string$string$$string() {
      _classCallCheck(this, jspm_packages$github$alloyui$core$master$string$string$$string);
    }

    _createClass(jspm_packages$github$alloyui$core$master$string$string$$string, null, {
      collapseBreakingSpaces: {
        /**
         * Removes the breaking spaces from the left and right of the string and
         * collapses the sequences of breaking spaces in the middle into single spaces.
         * The original and the result strings render the same way in HTML.
         * @param {string} str A string in which to collapse spaces.
         * @return {string} Copy of the string with normalized breaking spaces.
         */

        value: function collapseBreakingSpaces(str) {
          return str.replace(/[\t\r\n ]+/g, " ").replace(/^[\t\r\n ]+|[\t\r\n ]+$/g, "");
        }
      },
      hashCode: {

        /**
         * Calculates the hashcode for a string. The hashcode value is computed by
         * the sum algorithm: s[0]*31^(n-1) + s[1]*31^(n-2) + ... + s[n-1]. A nice
         * property of using 31 prime is that the multiplication can be replaced by
         * a shift and a subtraction for better performance: 31*i == (i<<5)-i.
         * Modern VMs do this sort of optimization automatically.
         * @param {String} val Target string.
         * @return {Number} Returns the string hashcode.
         */

        value: function hashCode(val) {
          var hash = 0;
          for (var i = 0, len = val.length; i < len; i++) {
            hash = 31 * hash + val.charCodeAt(i);
            hash %= 4294967296;
          }
          return hash;
        }
      },
      replaceInterval: {

        /**
         * Replaces interval into the string with specified value, e.g.
         * `replaceInterval("abcde", 1, 4, "")` returns "ae".
         * @param {string} str The input string.
         * @param {Number} start Start interval position to be replaced.
         * @param {Number} end End interval position to be replaced.
         * @param {string} value The value that replaces the specified interval.
         * @return {string}
         */

        value: function replaceInterval(str, start, end, value) {
          return str.substring(0, start) + value + str.substring(end);
        }
      }
    });

    return jspm_packages$github$alloyui$core$master$string$string$$string;
  })();

  var jspm_packages$github$alloyui$core$master$string$string$$default = jspm_packages$github$alloyui$core$master$string$string$$string;
  "use strict";

  var jspm_packages$github$alloyui$core$master$html$html$$html = (function () {
    function jspm_packages$github$alloyui$core$master$html$html$$html() {
      _classCallCheck(this, jspm_packages$github$alloyui$core$master$html$html$$html);
    }

    _createClass(jspm_packages$github$alloyui$core$master$html$html$$html, null, {
      compress: {
        /**
         * Minifies given HTML source by removing extra white spaces, comments and
         * other unneeded characters without breaking the content structure. As a
         * result HTML become smaller in size.
         * - Contents within <code>, <pre>, <script>, <style>, <textarea> and
         *   conditional comments tags are preserved.
         * - Comments are removed.
         * - Conditional comments are preserved.
         * - Breaking spaces are collapsed into a single space.
         * - Unneeded spaces inside tags (around = and before />) are removed.
         * - Spaces between tags are removed, even from inline-block elements.
         * - Spaces surrounding tags are removed.
         * - DOCTYPE declaration is simplified to <!DOCTYPE html>.
         * - Does not remove default attributes from <script>, <style>, <link>,
         *   <form>, <input>.
         * - Does not remove values from boolean tag attributes.
         * - Does not remove "javascript:" from in-line event handlers.
         * - Does not remove http:// and https:// protocols.
         * @param {string} htmlString Input HTML to be compressed.
         * @return {string} Compressed version of the HTML.
         */

        value: function compress(htmlString) {
          var preserved = {};
          htmlString = jspm_packages$github$alloyui$core$master$html$html$$html.preserveBlocks_(htmlString, preserved);
          htmlString = jspm_packages$github$alloyui$core$master$html$html$$html.simplifyDoctype_(htmlString);
          htmlString = jspm_packages$github$alloyui$core$master$html$html$$html.removeComments_(htmlString);
          htmlString = jspm_packages$github$alloyui$core$master$html$html$$html.removeIntertagSpaces_(htmlString);
          htmlString = jspm_packages$github$alloyui$core$master$html$html$$html.collapseBreakingSpaces_(htmlString);
          htmlString = jspm_packages$github$alloyui$core$master$html$html$$html.removeSpacesInsideTags_(htmlString);
          htmlString = jspm_packages$github$alloyui$core$master$html$html$$html.removeSurroundingSpaces_(htmlString);
          htmlString = jspm_packages$github$alloyui$core$master$html$html$$html.returnBlocks_(htmlString, preserved);
          return htmlString.trim();
        }
      },
      collapseBreakingSpaces_: {

        /**
         * Collapses breaking spaces into a single space.
         * @param {string} htmlString
         * @return {string}
         * @protected
         */

        value: function collapseBreakingSpaces_(htmlString) {
          return jspm_packages$github$alloyui$core$master$string$string$$default.collapseBreakingSpaces(htmlString);
        }
      },
      lookupPossibleTagBoundary_: {

        /**
         * Searches for first occurrence of the specified open tag string pattern
         * and from that point finds next ">" position, identified as possible tag
         * end position.
         * @param {string} htmlString
         * @param {string} openTag Open tag string pattern without open tag ending
         *     character, e.g. "<textarea" or "<code".
         * @return {string}
         * @protected
         */

        value: function lookupPossibleTagBoundary_(htmlString, openTag) {
          var tagPos = htmlString.indexOf(openTag);
          if (tagPos > -1) {
            tagPos += htmlString.substring(tagPos).indexOf(">") + 1;
          }
          return tagPos;
        }
      },
      lookupPossibleTagEnd_: {

        /**
         * Searches for first occurrence of the specified open tag string pattern
         * and from that point finds correct closing tag.
         * @param {string} openTagPattern
         * @param {string} openTag Open tag string pattern without open tag ending
         *     character, e.g. "<textarea" or " data-foo=".
         * @return {string}
         * @protected
         */

        value: function lookupPossibleTagEnd_(htmlString, openTagPattern) {
          var tagEnd = jspm_packages$github$alloyui$core$master$html$html$$html.lookupPossibleTagBoundary_(htmlString, openTagPattern);
          var abut = 0;
          var malformed = true;
          while (tagEnd < htmlString.length) {
            if (htmlString.charAt(tagEnd) === "<") {
              if (htmlString.charAt(tagEnd + 1) === "/") {
                if (abut === 0) {
                  malformed = false;
                  break;
                }
                abut--;
              } else {
                abut++;
              }
            }
            tagEnd++;
          }
          if (malformed) {
            throw new Error("Cannot remove element contents on malformed HTML.");
          }
          return tagEnd;
        }
      },
      preserveBlocks_: {

        /**
         * Preserves contents inside any <code>, <pre>, <script>, <style>,
         * <textarea> and conditional comment tags. When preserved, original content
         * are replaced with an unique generated block id and stored into
         * `preserved` map.
         * @param {string} htmlString
         * @param {Object} preserved Object to preserve the content indexed by an
         *     unique generated block id.
         * @return {html} The preserved HTML.
         * @protected
         */

        value: function preserveBlocks_(htmlString, preserved) {
          htmlString = jspm_packages$github$alloyui$core$master$html$html$$html.preserveOuterHtml_(htmlString, "<!--[if", "<![endif]-->", preserved);
          htmlString = jspm_packages$github$alloyui$core$master$html$html$$html.preserveInnerHtml_(htmlString, "<code", "</code", preserved);
          htmlString = jspm_packages$github$alloyui$core$master$html$html$$html.preserveInnerHtml_(htmlString, "<pre", "</pre", preserved);
          htmlString = jspm_packages$github$alloyui$core$master$html$html$$html.preserveInnerHtml_(htmlString, "<script", "</script", preserved);
          htmlString = jspm_packages$github$alloyui$core$master$html$html$$html.preserveInnerHtml_(htmlString, "<style", "</style", preserved);
          htmlString = jspm_packages$github$alloyui$core$master$html$html$$html.preserveInnerHtml_(htmlString, "<textarea", "</textarea", preserved);
          return htmlString;
        }
      },
      removeElementContent: {

        /**
         * Removes inner contents inside tags that matches with the specified tag
         * pattern recursively.
         * @param {string} htmlString
         * @param {string} openTagPattern Open tag string pattern without open tag
         *     ending character, e.g. "<textarea" or "<code".
         * @return {html} The HTML with inner content removed for desired tag.
         * @protected
         */

        value: function removeElementContent(htmlString, openTagPattern) {
          var tagPosEnd = jspm_packages$github$alloyui$core$master$html$html$$html.lookupPossibleTagBoundary_(htmlString, openTagPattern);
          if (tagPosEnd > -1) {
            var tagPosEndBoundary = jspm_packages$github$alloyui$core$master$html$html$$html.lookupPossibleTagEnd_(htmlString, openTagPattern);
            htmlString = jspm_packages$github$alloyui$core$master$string$string$$default.replaceInterval(htmlString, tagPosEnd, tagPosEndBoundary, "");
            htmlString = htmlString.replace(openTagPattern, "%%%~1~%%%");
            htmlString = jspm_packages$github$alloyui$core$master$html$html$$html.removeElementContent(htmlString, openTagPattern);
          }
          htmlString = htmlString.replace(/%%%~1~%%%/g, openTagPattern);
          return htmlString;
        }
      },
      preserveInnerHtml_: {

        /**
         * Preserves inner contents inside the specified tag. When preserved,
         * original content are replaced with an unique generated block id and
         * stored into `preserved` map.
         * @param {string} htmlString
         * @param {string} openTag Open tag string pattern without open tag ending
         *     character, e.g. "<textarea" or "<code".
         * @param {string} closeTag Close tag string pattern without close tag
         *     ending character, e.g. "</textarea" or "</code".
         * @param {Object} preserved Object to preserve the content indexed by an
         *     unique generated block id.
         * @return {html} The preserved HTML.
         * @protected
         */

        value: function preserveInnerHtml_(htmlString, openTag, closeTag, preserved) {
          var tagPosEnd = jspm_packages$github$alloyui$core$master$html$html$$html.lookupPossibleTagBoundary_(htmlString, openTag);
          while (tagPosEnd > -1) {
            var tagEndPos = htmlString.indexOf(closeTag);
            htmlString = jspm_packages$github$alloyui$core$master$html$html$$html.preserveInterval_(htmlString, tagPosEnd, tagEndPos, preserved);
            htmlString = htmlString.replace(openTag, "%%%~1~%%%");
            htmlString = htmlString.replace(closeTag, "%%%~2~%%%");
            tagPosEnd = jspm_packages$github$alloyui$core$master$html$html$$html.lookupPossibleTagBoundary_(htmlString, openTag);
          }
          htmlString = htmlString.replace(/%%%~1~%%%/g, openTag);
          htmlString = htmlString.replace(/%%%~2~%%%/g, closeTag);
          return htmlString;
        }
      },
      preserveInterval_: {

        /**
         * Preserves interval of the specified HTML into the preserved map replacing
         * original contents with an unique generated id.
         * @param {string} htmlString
         * @param {Number} start Start interval position to be replaced.
         * @param {Number} end End interval position to be replaced.
         * @param {Object} preserved Object to preserve the content indexed by an
         *     unique generated block id.
         * @return {string} The HTML with replaced interval.
         * @protected
         */

        value: function preserveInterval_(htmlString, start, end, preserved) {
          var blockId = "%%%~BLOCK~" + jspm_packages$github$alloyui$core$master$core$$default.getUid() + "~%%%";
          preserved[blockId] = htmlString.substring(start, end);
          return jspm_packages$github$alloyui$core$master$string$string$$default.replaceInterval(htmlString, start, end, blockId);
        }
      },
      preserveOuterHtml_: {

        /**
         * Preserves outer contents inside the specified tag. When preserved,
         * original content are replaced with an unique generated block id and
         * stored into `preserved` map.
         * @param {string} htmlString
         * @param {string} openTag Open tag string pattern without open tag ending
         *     character, e.g. "<textarea" or "<code".
         * @param {string} closeTag Close tag string pattern without close tag
         *     ending character, e.g. "</textarea" or "</code".
         * @param {Object} preserved Object to preserve the content indexed by an
         *     unique generated block id.
         * @return {html} The preserved HTML.
         * @protected
         */

        value: function preserveOuterHtml_(htmlString, openTag, closeTag, preserved) {
          var tagPos = htmlString.indexOf(openTag);
          while (tagPos > -1) {
            var tagEndPos = htmlString.indexOf(closeTag) + closeTag.length;
            htmlString = jspm_packages$github$alloyui$core$master$html$html$$html.preserveInterval_(htmlString, tagPos, tagEndPos, preserved);
            tagPos = htmlString.indexOf(openTag);
          }
          return htmlString;
        }
      },
      removeComments_: {

        /**
         * Removes all comments of the HTML. Including conditional comments and
         * "<![CDATA[" blocks.
         * @param {string} htmlString
         * @return {string} The HTML without comments.
         * @protected
         */

        value: function removeComments_(htmlString) {
          var preserved = {};
          htmlString = jspm_packages$github$alloyui$core$master$html$html$$html.preserveOuterHtml_(htmlString, "<![CDATA[", "]]>", preserved);
          htmlString = jspm_packages$github$alloyui$core$master$html$html$$html.preserveOuterHtml_(htmlString, "<!--", "-->", preserved);
          htmlString = jspm_packages$github$alloyui$core$master$html$html$$html.replacePreservedBlocks_(htmlString, preserved, "");
          return htmlString;
        }
      },
      removeIntertagSpaces_: {

        /**
         * Removes spaces between tags, even from inline-block elements.
         * @param {string} htmlString
         * @return {string} The HTML without spaces between tags.
         * @protected
         */

        value: function removeIntertagSpaces_(htmlString) {
          htmlString = htmlString.replace(jspm_packages$github$alloyui$core$master$html$html$$html.Patterns.INTERTAG_CUSTOM_CUSTOM, "~%%%%%%~");
          htmlString = htmlString.replace(jspm_packages$github$alloyui$core$master$html$html$$html.Patterns.INTERTAG_CUSTOM_TAG, "~%%%<");
          htmlString = htmlString.replace(jspm_packages$github$alloyui$core$master$html$html$$html.Patterns.INTERTAG_TAG, "><");
          htmlString = htmlString.replace(jspm_packages$github$alloyui$core$master$html$html$$html.Patterns.INTERTAG_TAG_CUSTOM, ">%%%~");
          return htmlString;
        }
      },
      removeSpacesInsideTags_: {

        /**
         * Removes spaces inside tags.
         * @param {string} htmlString
         * @return {string} The HTML without spaces inside tags.
         * @protected
         */

        value: function removeSpacesInsideTags_(htmlString) {
          htmlString = htmlString.replace(jspm_packages$github$alloyui$core$master$html$html$$html.Patterns.TAG_END_SPACES, "$1$2");
          htmlString = htmlString.replace(jspm_packages$github$alloyui$core$master$html$html$$html.Patterns.TAG_QUOTE_SPACES, "=$1$2$3");
          return htmlString;
        }
      },
      removeSurroundingSpaces_: {

        /**
         * Removes spaces surrounding tags.
         * @param {string} htmlString
         * @return {string} The HTML without spaces surrounding tags.
         * @protected
         */

        value: function removeSurroundingSpaces_(htmlString) {
          return htmlString.replace(jspm_packages$github$alloyui$core$master$html$html$$html.Patterns.SURROUNDING_SPACES, "$1");
        }
      },
      replacePreservedBlocks_: {

        /**
         * Restores preserved map keys inside the HTML. Note that the passed HTML
         * should contain the unique generated block ids to be replaced.
         * @param {string} htmlString
         * @param {Object} preserved Object to preserve the content indexed by an
         *     unique generated block id.
         * @param {string} replaceValue The value to replace any block id inside the
         * HTML.
         * @return {string}
         * @protected
         */

        value: function replacePreservedBlocks_(htmlString, preserved, replaceValue) {
          for (var blockId in preserved) {
            htmlString = htmlString.replace(blockId, replaceValue);
          }
          return htmlString;
        }
      },
      simplifyDoctype_: {

        /**
         * Simplifies DOCTYPE declaration to <!DOCTYPE html>.
         * @param {string} htmlString
         * @return {string}
         * @protected
         */

        value: function simplifyDoctype_(htmlString) {
          var preserved = {};
          htmlString = jspm_packages$github$alloyui$core$master$html$html$$html.preserveOuterHtml_(htmlString, "<!DOCTYPE", ">", preserved);
          htmlString = jspm_packages$github$alloyui$core$master$html$html$$html.replacePreservedBlocks_(htmlString, preserved, "<!DOCTYPE html>");
          return htmlString;
        }
      },
      returnBlocks_: {

        /**
         * Restores preserved map original contents inside the HTML. Note that the
         * passed HTML should contain the unique generated block ids to be restored.
         * @param {string} htmlString
         * @param {Object} preserved Object to preserve the content indexed by an
         *     unique generated block id.
         * @return {string}
         * @protected
         */

        value: function returnBlocks_(htmlString, preserved) {
          for (var blockId in preserved) {
            htmlString = htmlString.replace(blockId, preserved[blockId]);
          }
          return htmlString;
        }
      }
    });

    return jspm_packages$github$alloyui$core$master$html$html$$html;
  })();

  /**
   * HTML regex patterns.
   * @enum {RegExp}
   * @protected
   */
  jspm_packages$github$alloyui$core$master$html$html$$html.Patterns = {
    /**
     * @type {RegExp}
     */
    INTERTAG_CUSTOM_CUSTOM: /~%%%\s+%%%~/g,

    /**
     * @type {RegExp}
     */
    INTERTAG_TAG_CUSTOM: />\s+%%%~/g,

    /**
     * @type {RegExp}
     */
    INTERTAG_CUSTOM_TAG: /~%%%\s+</g,

    /**
     * @type {RegExp}
     */
    INTERTAG_TAG: />\s+</g,

    /**
     * @type {RegExp}
     */
    SURROUNDING_SPACES: /\s*(<[^>]+>)\s*/g,

    /**
     * @type {RegExp}
     */
    TAG_END_SPACES: /(<(?:[^>]+?))(?:\s+?)(\/?>)/g,

    /**
     * @type {RegExp}
     */
    TAG_QUOTE_SPACES: /\s*=\s*(["']?)\s*(.*?)\s*(\1)/g
  };

  var jspm_packages$github$alloyui$core$master$html$html$$default = jspm_packages$github$alloyui$core$master$html$html$$html;
  "use strict";

  /**
   * Class with static methods responsible for doing browser feature checks.
   */

  var jspm_packages$github$alloyui$core$master$dom$features$$features = (function () {
    function jspm_packages$github$alloyui$core$master$dom$features$$features() {
      _classCallCheck(this, jspm_packages$github$alloyui$core$master$dom$features$$features);
    }

    _createClass(jspm_packages$github$alloyui$core$master$dom$features$$features, null, {
      checkAttrOrderChange: {
        /**
         * Some browsers (like IE9) change the order of element attributes, when html
         * is rendered. This method can be used to check if this behavior happens on
         * the current browser.
         * @return {boolean}
         */

        value: function checkAttrOrderChange() {
          if (jspm_packages$github$alloyui$core$master$dom$features$$attrOrderChange === undefined) {
            var originalContent = "<div data-component data-ref></div>";
            var element = document.createElement("div");
            jspm_packages$github$alloyui$core$master$dom$dom$$default.append(element, originalContent);
            jspm_packages$github$alloyui$core$master$dom$features$$attrOrderChange = originalContent !== element.innerHTML;
          }
          return jspm_packages$github$alloyui$core$master$dom$features$$attrOrderChange;
        }
      }
    });

    return jspm_packages$github$alloyui$core$master$dom$features$$features;
  })();

  var jspm_packages$github$alloyui$core$master$dom$features$$attrOrderChange;

  var jspm_packages$github$alloyui$core$master$dom$features$$default = jspm_packages$github$alloyui$core$master$dom$features$$features;
  "use strict";

  /**
   * Trie data structure. It's useful for quickly storing and finding
   * information related to strings and their prefixes. See
   * http://en.wikipedia.org/wiki/Trie.
   * @constructor
   * @extends {Disposable}
   */

  var jspm_packages$github$alloyui$core$master$structs$Trie$$Trie = (function (_jspm_packages$github$alloyui$core$master$disposable$Disposable$$default2) {
    function jspm_packages$github$alloyui$core$master$structs$Trie$$Trie(value) {
      _classCallCheck(this, jspm_packages$github$alloyui$core$master$structs$Trie$$Trie);

      this.value_ = value;
      this.children_ = {};
    }

    _inherits(jspm_packages$github$alloyui$core$master$structs$Trie$$Trie, _jspm_packages$github$alloyui$core$master$disposable$Disposable$$default2);

    _createClass(jspm_packages$github$alloyui$core$master$structs$Trie$$Trie, {
      clear: {

        /**
         * Empties the trie of all keys and values.
         */

        value: function clear() {
          this.children_ = {};
          this.value_ = null;
        }
      },
      createNewTrieNode: {

        /**
         * Creates a new trie node.
         * @return {Trie}
         */

        value: function createNewTrieNode() {
          return new jspm_packages$github$alloyui$core$master$structs$Trie$$Trie();
        }
      },
      disposeInternal: {

        /**
         * Disposes of this instance's object references.
         * @override
         */

        value: function disposeInternal() {
          for (var k in this.children_) {
            this.children_[k].dispose();
          }

          this.children_ = null;
          this.value_ = null;
        }
      },
      findKeyNode_: {

        /**
         * Finds the node that represents the given key on this tree.
         * @param {!(Array|string)} key The key to set the value at.
         * @param {boolean} createIfMissing Flag indicating if nodes that don't yet
         *   exist in the searched path should be created.
         * @return {!Trie}
         */

        value: function findKeyNode_(key, createIfMissing) {
          var node = this;

          key = this.normalizeKey(key);

          for (var i = 0; i < key.length; i++) {
            node = node.getChild(key[i], createIfMissing);
            if (!node) {
              return null;
            }
          }

          return node;
        }
      },
      getAllChildren: {

        /**
         * Returns an array with all the child nodes for this trie.
         * @return {!Array}
         */

        value: function getAllChildren() {
          var allChildren = [];

          for (var k in this.children_) {
            allChildren.push(this.children_[k]);
          }

          return allChildren;
        }
      },
      getChild: {

        /**
         * Gets the child node for the given key part.
         * @param {string} keyPart String that can directly access a child of this
         *   Trie.
         * @param {boolean} createIfMissing Flag indicating if the child should be
         *   created if it doesn't exist.
         * @return {Trie}
         */

        value: function getChild(keyPart, createIfMissing) {
          var child = this.children_[keyPart];

          if (createIfMissing && !child) {
            child = this.createNewTrieNode();
            this.setChild(keyPart, child);
          }

          return child;
        }
      },
      getKeyValue: {

        /**
         * Gets the value for the given key in the tree.
         * @param {!(Array|string)} key
         * @return {*}
         */

        value: function getKeyValue(key) {
          var node = this.findKeyNode_(key);

          return node ? node.getValue() : null;
        }
      },
      getValue: {

        /**
         * Gets this tree's value.
         * @return {*}
         */

        value: function getValue() {
          return this.value_;
        }
      },
      normalizeKey: {

        /**
         * Returns a normalized key, to be used by a Trie.
         * @param  {!(Array|string)} key The key to be normalized.
         * @return {!Array} The normalized key.
         */

        value: function normalizeKey(key) {
          return jspm_packages$github$alloyui$core$master$core$$default.isString(key) ? key.split("") : key;
        }
      },
      setChild: {

        /**
         * Sets the child node for the given key part.
         * @param {string} keyPart String that can directly access a child of this
         *   Trie.
         * @param {Trie} child
         */

        value: function setChild(keyPart, child) {
          this.children_[keyPart] = child;
        }
      },
      setKeyValue: {

        /**
         * Sets the given key/value pair in the tree. If the key already exists and
         * `mergeFn` is given, the result of its call will be set as the value
         * instead.
         * @param {!(Array|string)} key The key to set the value at.
         * @param {*} value The value to set.
         * @param {function(*, *)=} opt_mergeFn Function to be called if the key
         *   already exists. It will be called with the old and the new values, and
         *   the key will be set to its return value.
         */

        value: function setKeyValue(key, value, opt_mergeFn) {
          var node = this.findKeyNode_(key, true);

          if (node.getValue() && opt_mergeFn) {
            value = opt_mergeFn(node.getValue(), value);
          }

          node.setValue(value);

          return node.getValue();
        }
      },
      setValue: {

        /**
         * Sets this tree's value.
         * @param {*} value
         */

        value: function setValue(value) {
          this.value_ = value;
        }
      }
    });

    return jspm_packages$github$alloyui$core$master$structs$Trie$$Trie;
  })(jspm_packages$github$alloyui$core$master$disposable$Disposable$$default);

  /**
   * The list of children for this tree.
   * @type {Object.<string, Trie>}
   * @protected
   */
  jspm_packages$github$alloyui$core$master$structs$Trie$$Trie.prototype.children_ = null;

  /**
   * The value associated with this tree.
   * @type {*}
   * @protected
   */
  jspm_packages$github$alloyui$core$master$structs$Trie$$Trie.prototype.value_ = null;

  var jspm_packages$github$alloyui$core$master$structs$Trie$$default = jspm_packages$github$alloyui$core$master$structs$Trie$$Trie;
  "use strict";

  /**
   * A trie that can handle wildcards.
   * @param {*} value
   * @constructor
   * @extends {Trie}
   */

  var jspm_packages$github$alloyui$core$master$structs$WildcardTrie$$WildcardTrie = (function (_jspm_packages$github$alloyui$core$master$structs$Trie$$default) {
    function jspm_packages$github$alloyui$core$master$structs$WildcardTrie$$WildcardTrie(value) {
      _classCallCheck(this, jspm_packages$github$alloyui$core$master$structs$WildcardTrie$$WildcardTrie);

      _get(Object.getPrototypeOf(jspm_packages$github$alloyui$core$master$structs$WildcardTrie$$WildcardTrie.prototype), "constructor", this).call(this, value);
    }

    _inherits(jspm_packages$github$alloyui$core$master$structs$WildcardTrie$$WildcardTrie, _jspm_packages$github$alloyui$core$master$structs$Trie$$default);

    _createClass(jspm_packages$github$alloyui$core$master$structs$WildcardTrie$$WildcardTrie, {
      createNewTrieNode: {

        /**
         * Creates a new trie node.
         * @return {Trie}
         * @override
         */

        value: function createNewTrieNode() {
          return new jspm_packages$github$alloyui$core$master$structs$WildcardTrie$$WildcardTrie();
        }
      },
      getChildrenMatchingKeyParts_: {

        /**
         * Gets all the children that match any of the given list of key parts.
         * @param {!Array} keyParts
         * @return {!Array}
         * @protected
         */

        value: function getChildrenMatchingKeyParts_(keyParts) {
          var matchingChildren = [];

          for (var i = 0; i < keyParts.length; i++) {
            var child = this.getChild(keyParts[i]);
            if (child) {
              matchingChildren.push(child);
            }
          }

          return matchingChildren;
        }
      },
      getKeyValue: {

        /**
         * Gets the value for the given key in the tree.
         * @param {!(Array|string)} key
         * @return {!Array}
         * @override
         */

        value: function getKeyValue(key) {
          key = this.normalizeKey(key);

          var nextKey = key.concat();
          var keyPart = nextKey.shift();

          if (!keyPart) {
            return this.getValue() ? [this.getValue()] : [];
          }

          return this.getKeyValueForChildren_(nextKey, keyPart);
        }
      },
      getKeyValueForChildren_: {

        /**
         * Gets the values of a key on the children that match the given key part.
         * @param  {!Array} key
         * @param  {string} keyPart
         * @return {!Array}
         */

        value: function getKeyValueForChildren_(key, keyPart) {
          var values = [];

          var children = this.getMatchingChildren_(keyPart);
          for (var i = 0; i < children.length; i++) {
            values = values.concat(children[i].getKeyValue(key));
          }

          return values;
        }
      },
      getMatchingChildren_: {

        /**
         * Gets all the children of this trie that match the given key part.
         * @param  {string} keyPart
         * @return {!Array.<Trie>}
         */

        value: function getMatchingChildren_(keyPart) {
          var matchingChildren = [];

          if (keyPart === jspm_packages$github$alloyui$core$master$structs$WildcardTrie$$WildcardTrie.TOKEN_SKIP_SINGLE) {
            matchingChildren = this.getAllChildren();
          } else {
            matchingChildren = this.getChildrenMatchingKeyParts_([keyPart, jspm_packages$github$alloyui$core$master$structs$WildcardTrie$$WildcardTrie.TOKEN_SKIP_SINGLE]);
          }

          return matchingChildren;
        }
      }
    });

    return jspm_packages$github$alloyui$core$master$structs$WildcardTrie$$WildcardTrie;
  })(jspm_packages$github$alloyui$core$master$structs$Trie$$default);

  /**
   * A token representing any single namespace.
   * @type {string}
   * @static
   */
  jspm_packages$github$alloyui$core$master$structs$WildcardTrie$$WildcardTrie.TOKEN_SKIP_SINGLE = "*";

  var jspm_packages$github$alloyui$core$master$structs$WildcardTrie$$default = jspm_packages$github$alloyui$core$master$structs$WildcardTrie$$WildcardTrie;
  "use strict";

  /**
   * EventEmitter utility.
   * @constructor
   * @extends {Disposable}
   */

  var jspm_packages$github$alloyui$core$master$events$EventEmitter$$EventEmitter = (function (_jspm_packages$github$alloyui$core$master$disposable$Disposable$$default3) {
    function jspm_packages$github$alloyui$core$master$events$EventEmitter$$EventEmitter() {
      _classCallCheck(this, jspm_packages$github$alloyui$core$master$events$EventEmitter$$EventEmitter);

      /**
       * The delimiter being used for namespaces.
       * @type {string}
       * @protected
       */
      this.delimiter_ = ".";

      /**
       * Holds event listeners scoped by event type.
       * @type {Trie}
       * @protected
       */
      this.listenersTree_ = new jspm_packages$github$alloyui$core$master$structs$WildcardTrie$$default();

      /**
       * The maximum number of listeners allowed for each event type. If the number
       * becomes higher than the max, a warning will be issued.
       * @type {number}
       * @protected
       */
      this.maxListeners_ = 10;

      /**
       * The id that will be assigned to the next listener added to this event
       * emitter.
       * @type {number}
       * @protected
       */
      this.nextId_ = 1;

      /**
       * Configuration option which determines if an event facade should be sent
       * as a param of listeners when emitting events. If set to true, the facade
       * will be passed as the first argument of the listener.
       * @type {boolean}
       * @protected
       */
      this.shouldUseFacade_ = false;
    }

    _inherits(jspm_packages$github$alloyui$core$master$events$EventEmitter$$EventEmitter, _jspm_packages$github$alloyui$core$master$disposable$Disposable$$default3);

    _createClass(jspm_packages$github$alloyui$core$master$events$EventEmitter$$EventEmitter, {
      addListener: {

        /**
         * Adds a listener to the end of the listeners array for the specified events.
         * @param {!(Array|string)} events
         * @param {!Function} listener
         * @return {!EventHandle} Can be used to remove the listener.
         */

        value: function addListener(events, listener) {
          this.validateListener_(listener);

          events = this.normalizeEvents_(events);
          for (var i = 0; i < events.length; i++) {
            this.addSingleListener_(events[i], listener);
          }

          return new jspm_packages$github$alloyui$core$master$events$EventHandle$$default(this, events, listener);
        }
      },
      addSingleListener_: {

        /**
         * Adds a listener to the end of the listeners array for a single event.
         * @param {string} event
         * @param {!Function} listener
         * @param {Function=} opt_origin The original function that was added as a
         *   listener, if there is any.
         * @protected
         */

        value: function addSingleListener_(event, listener, opt_origin) {
          this.emit("newListener", event, listener);

          var listeners = this.listenersTree_.setKeyValue(this.splitNamespaces_(event), [{
            fn: listener,
            id: this.nextId_++,
            origin: opt_origin
          }], this.mergeListenerArrays_);

          if (listeners.length > this.maxListeners_ && !listeners.warned) {
            console.warn("Possible EventEmitter memory leak detected. %d listeners added " + "for event %s. Use emitter.setMaxListeners() to increase limit.", listeners.length, event);
            listeners.warned = true;
          }
        }
      },
      compareListenerObjs_: {

        /**
         * Comparison function between listener objects.
         * @param {!Object} listener1
         * @param {!Object} listener2
         * @return {Number} The difference between the ids of the objects.
         * @protected
         */

        value: function compareListenerObjs_(obj1, obj2) {
          return obj1.id - obj2.id;
        }
      },
      disposeInternal: {

        /**
         * Disposes of this instance's object references.
         * @override
         */

        value: function disposeInternal() {
          this.listenersTree_.dispose();
          this.listenersTree_ = null;
        }
      },
      emit: {

        /**
         * Execute each of the listeners in order with the supplied arguments.
         * @param {string} event
         * @param {*} opt_args [arg1], [arg2], [...]
         * @return {boolean} Returns true if event had listeners, false otherwise.
         */

        value: function emit(event) {
          var args = Array.prototype.slice.call(arguments, 1);
          var listened = false;
          var listeners = this.listeners(event);

          if (this.getShouldUseFacade()) {
            var facade = {
              type: event
            };
            args = [facade].concat(args);
          }

          for (var i = 0; i < listeners.length; i++) {
            listeners[i].apply(this, args);
            listened = true;
          }

          return listened;
        }
      },
      getDelimiter: {

        /**
         * Gets the delimiter to be used by namespaces.
         * @return {string}
         */

        value: function getDelimiter() {
          return this.delimiter_;
        }
      },
      getShouldUseFacade: {

        /**
         * Gets the configuration option which determines if an event facade should
         * be sent as a param of listeners when emitting events. If set to true, the
         * facade will be passed as the first argument of the listener.
         * @return {boolean}
         */

        value: function getShouldUseFacade() {
          return this.shouldUseFacade_;
        }
      },
      listeners: {

        /**
         * Returns an array of listeners for the specified event.
         * @param {string} event
         * @return {Array} Array of listeners.
         */

        value: (function (_listeners) {
          var _listenersWrapper = function listeners(_x) {
            return _listeners.apply(this, arguments);
          };

          _listenersWrapper.toString = function () {
            return _listeners.toString();
          };

          return _listenersWrapper;
        })(function (event) {
          var listenerArrays = this.searchListenerTree_(event);
          var listeners = [];

          for (var i = 0; i < listenerArrays.length; i++) {
            listeners = listeners.concat(listenerArrays[i]);
          }

          if (listenerArrays.length > 1) {
            // If there was more than one result, we should reorder the listeners,
            // since we joined them without taking the order into account.
            listeners.sort(this.compareListenerObjs_);
          }

          return listeners.map(function (listener) {
            return listener.fn;
          });
        })
      },
      many: {

        /**
         * Adds a listener that will be invoked a fixed number of times for the
         * events. After each event is triggered the specified amount of times, the
         * listener is removed for it.
         * @param {!(Array|string)} events
         * @param {number} amount The amount of times this event should be listened
         * to.
         * @param {!Function} listener
         * @return {!EventHandle} Can be used to remove the listener.
         */

        value: function many(events, amount, listener) {
          events = this.normalizeEvents_(events);
          for (var i = 0; i < events.length; i++) {
            this.many_(events[i], amount, listener);
          }

          return new jspm_packages$github$alloyui$core$master$events$EventHandle$$default(this, events, listener);
        }
      },
      many_: {

        /**
         * Adds a listener that will be invoked a fixed number of times for a single
         * event. After the event is triggered the specified amount of times, the
         * listener is removed.
         * @param {string} event
         * @param {number} amount The amount of times this event should be listened
         * to.
         * @param {!Function} listener
         * @protected
         */

        value: function many_(event, amount, listener) {
          var self = this;

          if (amount <= 0) {
            return;
          }

          function handlerInternal() {
            if (--amount === 0) {
              self.removeListener(event, handlerInternal);
            }
            listener.apply(self, arguments);
          }

          self.addSingleListener_(event, handlerInternal, listener);
        }
      },
      matchesListener_: {

        /**
         * Checks if a listener object matches the given listener function. To match,
         * it needs to either point to that listener or have it as its origin.
         * @param {!Object} listenerObj
         * @param {!Function} listener
         * @return {boolean}
         * @protected
         */

        value: function matchesListener_(listenerObj, listener) {
          return listenerObj.fn === listener || listenerObj.origin && listenerObj.origin === listener;
        }
      },
      mergeListenerArrays_: {

        /**
         * Merges two objects that contain event listeners.
         * @param  {!Object} arr1
         * @param  {!Object} arr2
         * @return {!Object}
         * @protected
         */

        value: function mergeListenerArrays_(arr1, arr2) {
          for (var i = 0; i < arr2.length; i++) {
            arr1.push(arr2[i]);
          }
          return arr1;
        }
      },
      normalizeEvents_: {

        /**
         * Converts the parameter to an array if only one event is given.
         * @param  {!(Array|string)} events
         * @return {!Array}
         * @protected
         */

        value: function normalizeEvents_(events) {
          return jspm_packages$github$alloyui$core$master$core$$default.isString(events) ? [events] : events;
        }
      },
      off: {

        /**
         * Removes a listener for the specified events.
         * Caution: changes array indices in the listener array behind the listener.
         * @param {!(Array|string)} events
         * @param {!Function} listener
         * @return {!Object} Returns emitter, so calls can be chained.
         */

        value: function off(events, listener) {
          this.validateListener_(listener);

          var listenerArrays = this.searchListenerTree_(events);
          for (var i = 0; i < listenerArrays.length; i++) {
            this.removeMatchingListenerObjs_(listenerArrays[i], listener);
          }

          return this;
        }
      },
      on: {

        /**
         * Adds a listener to the end of the listeners array for the specified events.
         * @param {!(Array|string)} events
         * @param {!Function} listener
         * @return {!EventHandle} Can be used to remove the listener.
         */

        value: function on() {
          return this.addListener.apply(this, arguments);
        }
      },
      once: {

        /**
         * Adds a one time listener for the events. This listener is invoked only the
         * next time each event is fired, after which it is removed.
         * @param {!(Array|string)} events
         * @param {!Function} listener
         * @return {!EventHandle} Can be used to remove the listener.
         */

        value: function once(events, listener) {
          return this.many(events, 1, listener);
        }
      },
      removeAllListeners: {

        /**
         * Removes all listeners, or those of the specified events. It's not a good
         * idea to remove listeners that were added elsewhere in the code,
         * especially when it's on an emitter that you didn't create.
         * @param {(Array|string)=} opt_events
         * @return {!Object} Returns emitter, so calls can be chained.
         */

        value: function removeAllListeners(opt_events) {
          if (!opt_events) {
            this.listenersTree_.clear();
            return this;
          }

          return this.removeAllListenersForEvents_(opt_events);
        }
      },
      removeAllListenersForEvents_: {

        /**
         * Removes all listeners for the specified events.
         * @param  {!(Array|string)} events
         * @return {!Object} Returns emitter, so calls can be chained.
         * @protected
         */

        value: function removeAllListenersForEvents_(events) {
          events = this.normalizeEvents_(events);
          for (var i = 0; i < events.length; i++) {
            this.listenersTree_.setKeyValue(this.splitNamespaces_(events[i]), []);
          }

          return this;
        }
      },
      removeMatchingListenerObjs_: {

        /**
         * Removes all listener objects from the given array that match the given
         * listener function.
         * @param {!Array.<Object>} listenerObjects
         * @param {!Function} listener
         * @protected
         */

        value: function removeMatchingListenerObjs_(listenerObjects, listener) {
          for (var i = listenerObjects.length - 1; i >= 0; i--) {
            if (this.matchesListener_(listenerObjects[i], listener)) {
              listenerObjects.splice(i, 1);
            }
          }
        }
      },
      removeListener: {

        /**
         * Removes a listener for the specified events.
         * Caution: changes array indices in the listener array behind the listener.
         * @param {!(Array|string)} events
         * @param {!Function} listener
         * @return {!Object} Returns emitter, so calls can be chained.
         */

        value: function removeListener() {
          return this.off.apply(this, arguments);
        }
      },
      searchListenerTree_: {

        /**
         * Searches the listener tree for the given events.
         * @param {!(Array|string)} events
         * @return {!Array.<Array>} An array of listener arrays returned by the tree.
         * @protected
         */

        value: function searchListenerTree_(events) {
          var values = [];

          events = this.normalizeEvents_(events);
          for (var i = 0; i < events.length; i++) {
            values = values.concat(this.listenersTree_.getKeyValue(this.splitNamespaces_(events[i])));
          }

          return values;
        }
      },
      setDelimiter: {

        /**
         * Sets the delimiter to be used by namespaces.
         * @param {string} delimiter
         * @return {!Object} Returns emitter, so calls can be chained.
         */

        value: function setDelimiter(delimiter) {
          this.delimiter_ = delimiter;
          return this;
        }
      },
      setMaxListeners: {

        /**
         * By default EventEmitters will print a warning if more than 10 listeners
         * are added for a particular event. This is a useful default which helps
         * finding memory leaks. Obviously not all Emitters should be limited to 10.
         * This function allows that to be increased. Set to zero for unlimited.
         * @param {number} max The maximum number of listeners.
         * @return {!Object} Returns emitter, so calls can be chained.
         */

        value: function setMaxListeners(max) {
          this.maxListeners_ = max;
          return this;
        }
      },
      setShouldUseFacade: {

        /**
         * Sets the configuration option which determines if an event facade should
         * be sent as a param of listeners when emitting events. If set to true, the
         * facade will be passed as the first argument of the listener.
         * @param {boolean} shouldUseFacade
         * @return {!Object} Returns emitter, so calls can be chained.
         */

        value: function setShouldUseFacade(shouldUseFacade) {
          this.shouldUseFacade_ = shouldUseFacade;
          return this;
        }
      },
      splitNamespaces_: {

        /**
         * Splits the event, using the current delimiter.
         * @param {string} event
         * @return {!Array}
         * @protected
         */

        value: function splitNamespaces_(event) {
          return event.split(this.getDelimiter());
        }
      },
      validateListener_: {

        /**
         * Checks if the given listener is valid, throwing an exception when it's not.
         * @param  {*} listener
         * @protected
         */

        value: function validateListener_(listener) {
          if (!jspm_packages$github$alloyui$core$master$core$$default.isFunction(listener)) {
            throw new TypeError("Listener must be a function");
          }
        }
      }
    });

    return jspm_packages$github$alloyui$core$master$events$EventEmitter$$EventEmitter;
  })(jspm_packages$github$alloyui$core$master$disposable$Disposable$$default);

  var jspm_packages$github$alloyui$core$master$events$EventEmitter$$default = jspm_packages$github$alloyui$core$master$events$EventEmitter$$EventEmitter;

  "use strict";

  /**
   * Provides a more strict interface for Thenables in terms of
   * http://promisesaplus.com for interop with {@see CancellablePromise}.
   *
   * @interface
   * @extends {IThenable.<TYPE>}
   * @template TYPE
   */
  var jspm_packages$github$alloyui$core$master$promise$Promise$$Thenable = function jspm_packages$github$alloyui$core$master$promise$Promise$$Thenable() {};

  /**
   * Adds callbacks that will operate on the result of the Thenable, returning a
   * new child Promise.
   *
   * If the Thenable is fulfilled, the {@code onFulfilled} callback will be
   * invoked with the fulfillment value as argument, and the child Promise will
   * be fulfilled with the return value of the callback. If the callback throws
   * an exception, the child Promise will be rejected with the thrown value
   * instead.
   *
   * If the Thenable is rejected, the {@code onRejected} callback will be invoked
   * with the rejection reason as argument, and the child Promise will be rejected
   * with the return value of the callback or thrown value.
   *
   * @param {?(function(this:THIS, TYPE):
   *             (RESULT|IThenable.<RESULT>|Thenable))=} opt_onFulfilled A
   *     function that will be invoked with the fulfillment value if the Promise
   *     is fullfilled.
   * @param {?(function(*): *)=} opt_onRejected A function that will be invoked
   *     with the rejection reason if the Promise is rejected.
   * @param {THIS=} opt_context An optional context object that will be the
   *     execution context for the callbacks. By default, functions are executed
   *     with the default this.
   * @return {!CancellablePromise.<RESULT>} A new Promise that will receive the
   *     result of the fulfillment or rejection callback.
   * @template RESULT,THIS
   */
  jspm_packages$github$alloyui$core$master$promise$Promise$$Thenable.prototype.then = function () {};

  /**
   * An expando property to indicate that an object implements
   * {@code Thenable}.
   *
   * {@see addImplementation}.
   *
   * @const
   */
  jspm_packages$github$alloyui$core$master$promise$Promise$$Thenable.IMPLEMENTED_BY_PROP = "$goog_Thenable";

  /**
   * Marks a given class (constructor) as an implementation of Thenable, so
   * that we can query that fact at runtime. The class must have already
   * implemented the interface.
   * Exports a 'then' method on the constructor prototype, so that the objects
   * also implement the extern {@see Thenable} interface for interop with
   * other Promise implementations.
   * @param {function(new:Thenable,...[?])} ctor The class constructor. The
   *     corresponding class must have already implemented the interface.
   */
  jspm_packages$github$alloyui$core$master$promise$Promise$$Thenable.addImplementation = function (ctor) {
    ctor.prototype.then = ctor.prototype.then;
    ctor.prototype.$goog_Thenable = true;
  };

  /**
   * @param {*} object
   * @return {boolean} Whether a given instance implements {@code Thenable}.
   *     The class/superclass of the instance must call {@code addImplementation}.
   */
  jspm_packages$github$alloyui$core$master$promise$Promise$$Thenable.isImplementedBy = function (object) {
    if (!object) {
      return false;
    }
    try {
      return !!object.$goog_Thenable;
    } catch (e) {
      // Property access seems to be forbidden.
      return false;
    }
  };

  /**
   * Like bind(), except that a 'this object' is not required. Useful when the
   * target function is already bound.
   *
   * Usage:
   * var g = partial(f, arg1, arg2);
   * g(arg3, arg4);
   *
   * @param {Function} fn A function to partially apply.
   * @param {...*} var_args Additional arguments that are partially applied to fn.
   * @return {!Function} A partially-applied form of the function bind() was
   *     invoked as a method of.
   */
  var jspm_packages$github$alloyui$core$master$promise$Promise$$partial = function jspm_packages$github$alloyui$core$master$promise$Promise$$partial(fn) {
    var args = Array.prototype.slice.call(arguments, 1);
    return function () {
      // Clone the array (with slice()) and append additional arguments
      // to the existing arguments.
      var newArgs = args.slice();
      newArgs.push.apply(newArgs, arguments);
      return fn.apply(this, newArgs);
    };
  };

  var jspm_packages$github$alloyui$core$master$promise$Promise$$async = {};

  /**
   * Throw an item without interrupting the current execution context.  For
   * example, if processing a group of items in a loop, sometimes it is useful
   * to report an error while still allowing the rest of the batch to be
   * processed.
   * @param {*} exception
   */
  jspm_packages$github$alloyui$core$master$promise$Promise$$async.throwException = function (exception) {
    // Each throw needs to be in its own context.
    jspm_packages$github$alloyui$core$master$promise$Promise$$async.nextTick(function () {
      throw exception;
    });
  };

  /**
   * Fires the provided callback just before the current callstack unwinds, or as
   * soon as possible after the current JS execution context.
   * @param {function(this:THIS)} callback
   * @param {THIS=} opt_context Object to use as the "this value" when calling
   *     the provided function.
   * @template THIS
   */
  jspm_packages$github$alloyui$core$master$promise$Promise$$async.run = function (callback, opt_context) {
    if (!jspm_packages$github$alloyui$core$master$promise$Promise$$async.run.workQueueScheduled_) {
      // Nothing is currently scheduled, schedule it now.
      jspm_packages$github$alloyui$core$master$promise$Promise$$async.nextTick(jspm_packages$github$alloyui$core$master$promise$Promise$$async.run.processWorkQueue);
      jspm_packages$github$alloyui$core$master$promise$Promise$$async.run.workQueueScheduled_ = true;
    }

    jspm_packages$github$alloyui$core$master$promise$Promise$$async.run.workQueue_.push(new jspm_packages$github$alloyui$core$master$promise$Promise$$async.run.WorkItem_(callback, opt_context));
  };

  /** @private {boolean} */
  jspm_packages$github$alloyui$core$master$promise$Promise$$async.run.workQueueScheduled_ = false;

  /** @private {!Array.<!async.run.WorkItem_>} */
  jspm_packages$github$alloyui$core$master$promise$Promise$$async.run.workQueue_ = [];

  /**
   * Run any pending async.run work items. This function is not intended
   * for general use, but for use by entry point handlers to run items ahead of
   * async.nextTick.
   */
  jspm_packages$github$alloyui$core$master$promise$Promise$$async.run.processWorkQueue = function () {
    // NOTE: additional work queue items may be pushed while processing.
    while (jspm_packages$github$alloyui$core$master$promise$Promise$$async.run.workQueue_.length) {
      // Don't let the work queue grow indefinitely.
      var workItems = jspm_packages$github$alloyui$core$master$promise$Promise$$async.run.workQueue_;
      jspm_packages$github$alloyui$core$master$promise$Promise$$async.run.workQueue_ = [];
      for (var i = 0; i < workItems.length; i++) {
        var workItem = workItems[i];
        try {
          workItem.fn.call(workItem.scope);
        } catch (e) {
          jspm_packages$github$alloyui$core$master$promise$Promise$$async.throwException(e);
        }
      }
    }

    // There are no more work items, reset the work queue.
    jspm_packages$github$alloyui$core$master$promise$Promise$$async.run.workQueueScheduled_ = false;
  };

  /**
   * @constructor
   * @final
   * @struct
   * @private
   *
   * @param {function()} fn
   * @param {Object|null|undefined} scope
   */
  jspm_packages$github$alloyui$core$master$promise$Promise$$async.run.WorkItem_ = function (fn, scope) {
    /** @const */
    this.fn = fn;
    /** @const */
    this.scope = scope;
  };

  /**
   * Fires the provided callbacks as soon as possible after the current JS
   * execution context. setTimeout(…, 0) always takes at least 5ms for legacy
   * reasons.
   * @param {function(this:SCOPE)} callback Callback function to fire as soon as
   *     possible.
   * @param {SCOPE=} opt_context Object in whose scope to call the listener.
   * @template SCOPE
   */
  jspm_packages$github$alloyui$core$master$promise$Promise$$async.nextTick = function (callback, opt_context) {
    var cb = callback;
    if (opt_context) {
      cb = callback.bind(opt_context);
    }
    cb = jspm_packages$github$alloyui$core$master$promise$Promise$$async.nextTick.wrapCallback_(cb);
    // Introduced and currently only supported by IE10.
    if (jspm_packages$github$alloyui$core$master$core$$default.isFunction(window.setImmediate)) {
      window.setImmediate(cb);
      return;
    }
    // Look for and cache the custom fallback version of setImmediate.
    if (!jspm_packages$github$alloyui$core$master$promise$Promise$$async.nextTick.setImmediate_) {
      jspm_packages$github$alloyui$core$master$promise$Promise$$async.nextTick.setImmediate_ = jspm_packages$github$alloyui$core$master$promise$Promise$$async.nextTick.getSetImmediateEmulator_();
    }
    jspm_packages$github$alloyui$core$master$promise$Promise$$async.nextTick.setImmediate_(cb);
  };

  /**
   * Cache for the setImmediate implementation.
   * @type {function(function())}
   * @private
   */
  jspm_packages$github$alloyui$core$master$promise$Promise$$async.nextTick.setImmediate_ = null;

  /**
   * Determines the best possible implementation to run a function as soon as
   * the JS event loop is idle.
   * @return {function(function())} The "setImmediate" implementation.
   * @private
   */
  jspm_packages$github$alloyui$core$master$promise$Promise$$async.nextTick.getSetImmediateEmulator_ = function () {
    // Create a private message channel and use it to postMessage empty messages
    // to ourselves.
    var Channel = window.MessageChannel;
    // If MessageChannel is not available and we are in a browser, implement
    // an iframe based polyfill in browsers that have postMessage and
    // document.addEventListener. The latter excludes IE8 because it has a
    // synchronous postMessage implementation.
    if (typeof Channel === "undefined" && typeof window !== "undefined" && window.postMessage && window.addEventListener) {
      /** @constructor */
      Channel = function () {
        // Make an empty, invisible iframe.
        var iframe = document.createElement("iframe");
        iframe.style.display = "none";
        iframe.src = "";
        document.documentElement.appendChild(iframe);
        var win = iframe.contentWindow;
        var doc = win.document;
        doc.open();
        doc.write("");
        doc.close();
        var message = "callImmediate" + Math.random();
        var origin = win.location.protocol + "//" + win.location.host;
        var onmessage = (function (e) {
          // Validate origin and message to make sure that this message was
          // intended for us.
          if (e.origin !== origin && e.data !== message) {
            return;
          }
          this.port1.onmessage();
        }).bind(this);
        win.addEventListener("message", onmessage, false);
        this.port1 = {};
        this.port2 = {
          postMessage: function postMessage() {
            win.postMessage(message, origin);
          }
        };
      };
    }
    if (typeof Channel !== "undefined") {
      var channel = new Channel();
      // Use a fifo linked list to call callbacks in the right order.
      var head = {};
      var tail = head;
      channel.port1.onmessage = function () {
        head = head.next;
        var cb = head.cb;
        head.cb = null;
        cb();
      };
      return function (cb) {
        tail.next = {
          cb: cb
        };
        tail = tail.next;
        channel.port2.postMessage(0);
      };
    }
    // Implementation for IE6-8: Script elements fire an asynchronous
    // onreadystatechange event when inserted into the DOM.
    if (typeof document !== "undefined" && "onreadystatechange" in document.createElement("script")) {
      return function (cb) {
        var script = document.createElement("script");
        script.onreadystatechange = function () {
          // Clean up and call the callback.
          script.onreadystatechange = null;
          script.parentNode.removeChild(script);
          script = null;
          cb();
          cb = null;
        };
        document.documentElement.appendChild(script);
      };
    }
    // Fall back to setTimeout with 0. In browsers this creates a delay of 5ms
    // or more.
    return function (cb) {
      setTimeout(cb, 0);
    };
  };

  /**
   * Helper function that is overrided to protect callbacks with entry point
   * monitor if the application monitors entry points.
   * @param {function()} callback Callback function to fire as soon as possible.
   * @return {function()} The wrapped callback.
   * @private
   */
  jspm_packages$github$alloyui$core$master$promise$Promise$$async.nextTick.wrapCallback_ = function (opt_returnValue) {
    return opt_returnValue;
  };

  /**
   * Promises provide a result that may be resolved asynchronously. A Promise may
   * be resolved by being fulfilled or rejected with a value, which will be known
   * as the fulfillment value or the rejection reason. Whether fulfilled or
   * rejected, the Promise result is immutable once it is set.
   *
   * Promises may represent results of any type, including undefined. Rejection
   * reasons are typically Errors, but may also be of any type. Closure Promises
   * allow for optional type annotations that enforce that fulfillment values are
   * of the appropriate types at compile time.
   *
   * The result of a Promise is accessible by calling {@code then} and registering
   * {@code onFulfilled} and {@code onRejected} callbacks. Once the Promise
   * resolves, the relevant callbacks are invoked with the fulfillment value or
   * rejection reason as argument. Callbacks are always invoked in the order they
   * were registered, even when additional {@code then} calls are made from inside
   * another callback. A callback is always run asynchronously sometime after the
   * scope containing the registering {@code then} invocation has returned.
   *
   * If a Promise is resolved with another Promise, the first Promise will block
   * until the second is resolved, and then assumes the same result as the second
   * Promise. This allows Promises to depend on the results of other Promises,
   * linking together multiple asynchronous operations.
   *
   * This implementation is compatible with the Promises/A+ specification and
   * passes that specification's conformance test suite. A Closure Promise may be
   * resolved with a Promise instance (or sufficiently compatible Promise-like
   * object) created by other Promise implementations. From the specification,
   * Promise-like objects are known as "Thenables".
   *
   * @see http://promisesaplus.com/
   *
   * @param {function(
   *             this:RESOLVER_CONTEXT,
   *             function((TYPE|IThenable.<TYPE>|Thenable)),
   *             function(*)): void} resolver
   *     Initialization function that is invoked immediately with {@code resolve}
   *     and {@code reject} functions as arguments. The Promise is resolved or
   *     rejected with the first argument passed to either function.
   * @param {RESOLVER_CONTEXT=} opt_context An optional context for executing the
   *     resolver function. If unspecified, the resolver function will be executed
   *     in the default scope.
   * @constructor
   * @struct
   * @final
   * @implements {Thenable.<TYPE>}
   * @template TYPE,RESOLVER_CONTEXT
   */
  var jspm_packages$github$alloyui$core$master$promise$Promise$$CancellablePromise = (function (_jspm_packages$github$alloyui$core$master$promise$Promise$$CancellablePromise) {
    var _jspm_packages$github$alloyui$core$master$promise$Promise$$CancellablePromiseWrapper = function jspm_packages$github$alloyui$core$master$promise$Promise$$CancellablePromise(_x, _x2) {
      return _jspm_packages$github$alloyui$core$master$promise$Promise$$CancellablePromise.apply(this, arguments);
    };

    _jspm_packages$github$alloyui$core$master$promise$Promise$$CancellablePromiseWrapper.toString = function () {
      return _jspm_packages$github$alloyui$core$master$promise$Promise$$CancellablePromise.toString();
    };

    return _jspm_packages$github$alloyui$core$master$promise$Promise$$CancellablePromiseWrapper;
  })(function (resolver, opt_context) {
    /**
     * The internal state of this Promise. Either PENDING, FULFILLED, REJECTED, or
     * BLOCKED.
     * @private {CancellablePromise.State_}
     */
    this.state_ = jspm_packages$github$alloyui$core$master$promise$Promise$$CancellablePromise.State_.PENDING;

    /**
     * The resolved result of the Promise. Immutable once set with either a
     * fulfillment value or rejection reason.
     * @private {*}
     */
    this.result_ = undefined;

    /**
     * For Promises created by calling {@code then()}, the originating parent.
     * @private {CancellablePromise}
     */
    this.parent_ = null;

    /**
     * The list of {@code onFulfilled} and {@code onRejected} callbacks added to
     * this Promise by calls to {@code then()}.
     * @private {Array.<CancellablePromise.CallbackEntry_>}
     */
    this.callbackEntries_ = null;

    /**
     * Whether the Promise is in the queue of Promises to execute.
     * @private {boolean}
     */
    this.executing_ = false;

    if (jspm_packages$github$alloyui$core$master$promise$Promise$$CancellablePromise.UNHANDLED_REJECTION_DELAY > 0) {
      /**
       * A timeout ID used when the {@code UNHANDLED_REJECTION_DELAY} is greater
       * than 0 milliseconds. The ID is set when the Promise is rejected, and
       * cleared only if an {@code onRejected} callback is invoked for the
       * Promise (or one of its descendants) before the delay is exceeded.
       *
       * If the rejection is not handled before the timeout completes, the
       * rejection reason is passed to the unhandled rejection handler.
       * @private {number}
       */
      this.unhandledRejectionId_ = 0;
    } else if (jspm_packages$github$alloyui$core$master$promise$Promise$$CancellablePromise.UNHANDLED_REJECTION_DELAY === 0) {
      /**
       * When the {@code UNHANDLED_REJECTION_DELAY} is set to 0 milliseconds, a
       * boolean that is set if the Promise is rejected, and reset to false if an
       * {@code onRejected} callback is invoked for the Promise (or one of its
       * descendants). If the rejection is not handled before the next timestep,
       * the rejection reason is passed to the unhandled rejection handler.
       * @private {boolean}
       */
      this.hadUnhandledRejection_ = false;
    }

    try {
      var self = this;
      resolver.call(opt_context, function (value) {
        self.resolve_(jspm_packages$github$alloyui$core$master$promise$Promise$$CancellablePromise.State_.FULFILLED, value);
      }, function (reason) {
        self.resolve_(jspm_packages$github$alloyui$core$master$promise$Promise$$CancellablePromise.State_.REJECTED, reason);
      });
    } catch (e) {
      this.resolve_(jspm_packages$github$alloyui$core$master$promise$Promise$$CancellablePromise.State_.REJECTED, e);
    }
  });

  /**
   * @define {number} The delay in milliseconds before a rejected Promise's reason
   * is passed to the rejection handler. By default, the rejection handler
   * rethrows the rejection reason so that it appears in the developer console or
   * {@code window.onerror} handler.
   *
   * Rejections are rethrown as quickly as possible by default. A negative value
   * disables rejection handling entirely.
   */
  jspm_packages$github$alloyui$core$master$promise$Promise$$CancellablePromise.UNHANDLED_REJECTION_DELAY = 0;

  /**
   * The possible internal states for a Promise. These states are not directly
   * observable to external callers.
   * @enum {number}
   * @private
   */
  jspm_packages$github$alloyui$core$master$promise$Promise$$CancellablePromise.State_ = {
    /** The Promise is waiting for resolution. */
    PENDING: 0,

    /** The Promise is blocked waiting for the result of another Thenable. */
    BLOCKED: 1,

    /** The Promise has been resolved with a fulfillment value. */
    FULFILLED: 2,

    /** The Promise has been resolved with a rejection reason. */
    REJECTED: 3
  };

  /**
   * Typedef for entries in the callback chain. Each call to {@code then},
   * {@code thenCatch}, or {@code thenAlways} creates an entry containing the
   * functions that may be invoked once the Promise is resolved.
   *
   * @typedef {{
   *   child: CancellablePromise,
   *   onFulfilled: function(*),
   *   onRejected: function(*)
   * }}
   * @private
   */
  jspm_packages$github$alloyui$core$master$promise$Promise$$CancellablePromise.CallbackEntry_ = null;

  /**
   * @param {(TYPE|Thenable.<TYPE>|Thenable)=} opt_value
   * @return {!CancellablePromise.<TYPE>} A new Promise that is immediately resolved
   *     with the given value.
   * @template TYPE
   */
  jspm_packages$github$alloyui$core$master$promise$Promise$$CancellablePromise.resolve = function (opt_value) {
    return new jspm_packages$github$alloyui$core$master$promise$Promise$$CancellablePromise(function (resolve) {
      resolve(opt_value);
    });
  };

  /**
   * @param {*=} opt_reason
   * @return {!CancellablePromise} A new Promise that is immediately rejected with the
   *     given reason.
   */
  jspm_packages$github$alloyui$core$master$promise$Promise$$CancellablePromise.reject = function (opt_reason) {
    return new jspm_packages$github$alloyui$core$master$promise$Promise$$CancellablePromise(function (resolve, reject) {
      reject(opt_reason);
    });
  };

  /**
   * @param {!Array.<!(Thenable.<TYPE>|Thenable)>} promises
   * @return {!CancellablePromise.<TYPE>} A Promise that receives the result of the
   *     first Promise (or Promise-like) input to complete.
   * @template TYPE
   */
  jspm_packages$github$alloyui$core$master$promise$Promise$$CancellablePromise.race = function (promises) {
    return new jspm_packages$github$alloyui$core$master$promise$Promise$$CancellablePromise(function (resolve, reject) {
      if (!promises.length) {
        resolve(undefined);
      }
      for (var i = 0, promise; promise = promises[i]; i++) {
        promise.then(resolve, reject);
      }
    });
  };

  /**
   * @param {!Array.<!(Thenable.<TYPE>|Thenable)>} promises
   * @return {!CancellablePromise.<!Array.<TYPE>>} A Promise that receives a list of
   *     every fulfilled value once every input Promise (or Promise-like) is
   *     successfully fulfilled, or is rejected by the first rejection result.
   * @template TYPE
   */
  jspm_packages$github$alloyui$core$master$promise$Promise$$CancellablePromise.all = function (promises) {
    return new jspm_packages$github$alloyui$core$master$promise$Promise$$CancellablePromise(function (resolve, reject) {
      var toFulfill = promises.length;
      var values = [];

      if (!toFulfill) {
        resolve(values);
        return;
      }

      var onFulfill = function onFulfill(index, value) {
        toFulfill--;
        values[index] = value;
        if (toFulfill === 0) {
          resolve(values);
        }
      };

      var onReject = function onReject(reason) {
        reject(reason);
      };

      for (var i = 0, promise; promise = promises[i]; i++) {
        promise.then(jspm_packages$github$alloyui$core$master$promise$Promise$$partial(onFulfill, i), onReject);
      }
    });
  };

  /**
   * @param {!Array.<!(Thenable.<TYPE>|Thenable)>} promises
   * @return {!CancellablePromise.<TYPE>} A Promise that receives the value of
   *     the first input to be fulfilled, or is rejected with a list of every
   *     rejection reason if all inputs are rejected.
   * @template TYPE
   */
  jspm_packages$github$alloyui$core$master$promise$Promise$$CancellablePromise.firstFulfilled = function (promises) {
    return new jspm_packages$github$alloyui$core$master$promise$Promise$$CancellablePromise(function (resolve, reject) {
      var toReject = promises.length;
      var reasons = [];

      if (!toReject) {
        resolve(undefined);
        return;
      }

      var onFulfill = function onFulfill(value) {
        resolve(value);
      };

      var onReject = function onReject(index, reason) {
        toReject--;
        reasons[index] = reason;
        if (toReject === 0) {
          reject(reasons);
        }
      };

      for (var i = 0, promise; promise = promises[i]; i++) {
        promise.then(onFulfill, jspm_packages$github$alloyui$core$master$promise$Promise$$partial(onReject, i));
      }
    });
  };

  /**
   * Adds callbacks that will operate on the result of the Promise, returning a
   * new child Promise.
   *
   * If the Promise is fulfilled, the {@code onFulfilled} callback will be invoked
   * with the fulfillment value as argument, and the child Promise will be
   * fulfilled with the return value of the callback. If the callback throws an
   * exception, the child Promise will be rejected with the thrown value instead.
   *
   * If the Promise is rejected, the {@code onRejected} callback will be invoked
   * with the rejection reason as argument, and the child Promise will be rejected
   * with the return value (or thrown value) of the callback.
   *
   * @override
   */
  jspm_packages$github$alloyui$core$master$promise$Promise$$CancellablePromise.prototype.then = function (opt_onFulfilled, opt_onRejected, opt_context) {
    return this.addChildPromise_(jspm_packages$github$alloyui$core$master$core$$default.isFunction(opt_onFulfilled) ? opt_onFulfilled : null, jspm_packages$github$alloyui$core$master$core$$default.isFunction(opt_onRejected) ? opt_onRejected : null, opt_context);
  };
  jspm_packages$github$alloyui$core$master$promise$Promise$$Thenable.addImplementation(jspm_packages$github$alloyui$core$master$promise$Promise$$CancellablePromise);

  /**
   * Adds a callback that will be invoked whether the Promise is fulfilled or
   * rejected. The callback receives no argument, and no new child Promise is
   * created. This is useful for ensuring that cleanup takes place after certain
   * asynchronous operations. Callbacks added with {@code thenAlways} will be
   * executed in the same order with other calls to {@code then},
   * {@code thenAlways}, or {@code thenCatch}.
   *
   * Since it does not produce a new child Promise, cancellation propagation is
   * not prevented by adding callbacks with {@code thenAlways}. A Promise that has
   * a cleanup handler added with {@code thenAlways} will be canceled if all of
   * its children created by {@code then} (or {@code thenCatch}) are canceled.
   *
   * @param {function(this:THIS): void} onResolved A function that will be invoked
   *     when the Promise is resolved.
   * @param {THIS=} opt_context An optional context object that will be the
   *     execution context for the callbacks. By default, functions are executed
   *     in the global scope.
   * @return {!CancellablePromise.<TYPE>} This Promise, for chaining additional calls.
   * @template THIS
   */
  jspm_packages$github$alloyui$core$master$promise$Promise$$CancellablePromise.prototype.thenAlways = function (onResolved, opt_context) {
    var callback = function callback() {
      try {
        // Ensure that no arguments are passed to onResolved.
        onResolved.call(opt_context);
      } catch (err) {
        jspm_packages$github$alloyui$core$master$promise$Promise$$CancellablePromise.handleRejection_.call(null, err);
      }
    };

    this.addCallbackEntry_({
      child: null,
      onRejected: callback,
      onFulfilled: callback
    });
    return this;
  };

  /**
   * Adds a callback that will be invoked only if the Promise is rejected. This
   * is equivalent to {@code then(null, onRejected)}.
   *
   * @param {!function(this:THIS, *): *} onRejected A function that will be
   *     invoked with the rejection reason if the Promise is rejected.
   * @param {THIS=} opt_context An optional context object that will be the
   *     execution context for the callbacks. By default, functions are executed
   *     in the global scope.
   * @return {!CancellablePromise} A new Promise that will receive the result of the
   *     callback.
   * @template THIS
   */
  jspm_packages$github$alloyui$core$master$promise$Promise$$CancellablePromise.prototype.thenCatch = function (onRejected, opt_context) {
    return this.addChildPromise_(null, onRejected, opt_context);
  };

  /**
   * Cancels the Promise if it is still pending by rejecting it with a cancel
   * Error. No action is performed if the Promise is already resolved.
   *
   * All child Promises of the canceled Promise will be rejected with the same
   * cancel error, as with normal Promise rejection. If the Promise to be canceled
   * is the only child of a pending Promise, the parent Promise will also be
   * canceled. Cancellation may propagate upward through multiple generations.
   *
   * @param {string=} opt_message An optional debugging message for describing the
   *     cancellation reason.
   */
  jspm_packages$github$alloyui$core$master$promise$Promise$$CancellablePromise.prototype.cancel = function (opt_message) {
    if (this.state_ === jspm_packages$github$alloyui$core$master$promise$Promise$$CancellablePromise.State_.PENDING) {
      jspm_packages$github$alloyui$core$master$promise$Promise$$async.run(function () {
        var err = new jspm_packages$github$alloyui$core$master$promise$Promise$$CancellablePromise.CancellationError(opt_message);
        this.cancelInternal_(err);
      }, this);
    }
  };

  /**
   * Cancels this Promise with the given error.
   *
   * @param {!Error} err The cancellation error.
   * @private
   */
  jspm_packages$github$alloyui$core$master$promise$Promise$$CancellablePromise.prototype.cancelInternal_ = function (err) {
    if (this.state_ === jspm_packages$github$alloyui$core$master$promise$Promise$$CancellablePromise.State_.PENDING) {
      if (this.parent_) {
        // Cancel the Promise and remove it from the parent's child list.
        this.parent_.cancelChild_(this, err);
      } else {
        this.resolve_(jspm_packages$github$alloyui$core$master$promise$Promise$$CancellablePromise.State_.REJECTED, err);
      }
    }
  };

  /**
   * Cancels a child Promise from the list of callback entries. If the Promise has
   * not already been resolved, reject it with a cancel error. If there are no
   * other children in the list of callback entries, propagate the cancellation
   * by canceling this Promise as well.
   *
   * @param {!CancellablePromise} childPromise The Promise to cancel.
   * @param {!Error} err The cancel error to use for rejecting the Promise.
   * @private
   */
  jspm_packages$github$alloyui$core$master$promise$Promise$$CancellablePromise.prototype.cancelChild_ = function (childPromise, err) {
    if (!this.callbackEntries_) {
      return;
    }
    var childCount = 0;
    var childIndex = -1;

    // Find the callback entry for the childPromise, and count whether there are
    // additional child Promises.
    for (var i = 0, entry; entry = this.callbackEntries_[i]; i++) {
      var child = entry.child;
      if (child) {
        childCount++;
        if (child === childPromise) {
          childIndex = i;
        }
        if (childIndex >= 0 && childCount > 1) {
          break;
        }
      }
    }

    // If the child Promise was the only child, cancel this Promise as well.
    // Otherwise, reject only the child Promise with the cancel error.
    if (childIndex >= 0) {
      if (this.state_ === jspm_packages$github$alloyui$core$master$promise$Promise$$CancellablePromise.State_.PENDING && childCount === 1) {
        this.cancelInternal_(err);
      } else {
        var callbackEntry = this.callbackEntries_.splice(childIndex, 1)[0];
        this.executeCallback_(callbackEntry, jspm_packages$github$alloyui$core$master$promise$Promise$$CancellablePromise.State_.REJECTED, err);
      }
    }
  };

  /**
   * Adds a callback entry to the current Promise, and schedules callback
   * execution if the Promise has already been resolved.
   *
   * @param {CancellablePromise.CallbackEntry_} callbackEntry Record containing
   *     {@code onFulfilled} and {@code onRejected} callbacks to execute after
   *     the Promise is resolved.
   * @private
   */
  jspm_packages$github$alloyui$core$master$promise$Promise$$CancellablePromise.prototype.addCallbackEntry_ = function (callbackEntry) {
    if ((!this.callbackEntries_ || !this.callbackEntries_.length) && (this.state_ === jspm_packages$github$alloyui$core$master$promise$Promise$$CancellablePromise.State_.FULFILLED || this.state_ === jspm_packages$github$alloyui$core$master$promise$Promise$$CancellablePromise.State_.REJECTED)) {
      this.scheduleCallbacks_();
    }
    if (!this.callbackEntries_) {
      this.callbackEntries_ = [];
    }
    this.callbackEntries_.push(callbackEntry);
  };

  /**
   * Creates a child Promise and adds it to the callback entry list. The result of
   * the child Promise is determined by the state of the parent Promise and the
   * result of the {@code onFulfilled} or {@code onRejected} callbacks as
   * specified in the Promise resolution procedure.
   *
   * @see http://promisesaplus.com/#the__method
   *
   * @param {?function(this:THIS, TYPE):
   *          (RESULT|CancellablePromise.<RESULT>|Thenable)} onFulfilled A callback that
   *     will be invoked if the Promise is fullfilled, or null.
   * @param {?function(this:THIS, *): *} onRejected A callback that will be
   *     invoked if the Promise is rejected, or null.
   * @param {THIS=} opt_context An optional execution context for the callbacks.
   *     in the default calling context.
   * @return {!CancellablePromise} The child Promise.
   * @template RESULT,THIS
   * @private
   */
  jspm_packages$github$alloyui$core$master$promise$Promise$$CancellablePromise.prototype.addChildPromise_ = function (onFulfilled, onRejected, opt_context) {

    var callbackEntry = {
      child: null,
      onFulfilled: null,
      onRejected: null
    };

    callbackEntry.child = new jspm_packages$github$alloyui$core$master$promise$Promise$$CancellablePromise(function (resolve, reject) {
      // Invoke onFulfilled, or resolve with the parent's value if absent.
      callbackEntry.onFulfilled = onFulfilled ? function (value) {
        try {
          var result = onFulfilled.call(opt_context, value);
          resolve(result);
        } catch (err) {
          reject(err);
        }
      } : resolve;

      // Invoke onRejected, or reject with the parent's reason if absent.
      callbackEntry.onRejected = onRejected ? function (reason) {
        try {
          var result = onRejected.call(opt_context, reason);
          if (!jspm_packages$github$alloyui$core$master$core$$default.isDef(result) && reason instanceof jspm_packages$github$alloyui$core$master$promise$Promise$$CancellablePromise.CancellationError) {
            // Propagate cancellation to children if no other result is returned.
            reject(reason);
          } else {
            resolve(result);
          }
        } catch (err) {
          reject(err);
        }
      } : reject;
    });

    callbackEntry.child.parent_ = this;
    this.addCallbackEntry_(callbackEntry);
    return callbackEntry.child;
  };

  /**
   * Unblocks the Promise and fulfills it with the given value.
   *
   * @param {TYPE} value
   * @private
   */
  jspm_packages$github$alloyui$core$master$promise$Promise$$CancellablePromise.prototype.unblockAndFulfill_ = function (value) {
    if (this.state_ !== jspm_packages$github$alloyui$core$master$promise$Promise$$CancellablePromise.State_.BLOCKED) {
      throw new Error("CancellablePromise is not blocked.");
    }
    this.state_ = jspm_packages$github$alloyui$core$master$promise$Promise$$CancellablePromise.State_.PENDING;
    this.resolve_(jspm_packages$github$alloyui$core$master$promise$Promise$$CancellablePromise.State_.FULFILLED, value);
  };

  /**
   * Unblocks the Promise and rejects it with the given rejection reason.
   *
   * @param {*} reason
   * @private
   */
  jspm_packages$github$alloyui$core$master$promise$Promise$$CancellablePromise.prototype.unblockAndReject_ = function (reason) {
    if (this.state_ !== jspm_packages$github$alloyui$core$master$promise$Promise$$CancellablePromise.State_.BLOCKED) {
      throw new Error("CancellablePromise is not blocked.");
    }
    this.state_ = jspm_packages$github$alloyui$core$master$promise$Promise$$CancellablePromise.State_.PENDING;
    this.resolve_(jspm_packages$github$alloyui$core$master$promise$Promise$$CancellablePromise.State_.REJECTED, reason);
  };

  /**
   * Attempts to resolve a Promise with a given resolution state and value. This
   * is a no-op if the given Promise has already been resolved.
   *
   * If the given result is a Thenable (such as another Promise), the Promise will
   * be resolved with the same state and result as the Thenable once it is itself
   * resolved.
   *
   * If the given result is not a Thenable, the Promise will be fulfilled or
   * rejected with that result based on the given state.
   *
   * @see http://promisesaplus.com/#the_promise_resolution_procedure
   *
   * @param {CancellablePromise.State_} state
   * @param {*} x The result to apply to the Promise.
   * @private
   */
  jspm_packages$github$alloyui$core$master$promise$Promise$$CancellablePromise.prototype.resolve_ = function (state, x) {
    if (this.state_ !== jspm_packages$github$alloyui$core$master$promise$Promise$$CancellablePromise.State_.PENDING) {
      return;
    }

    if (this === x) {
      state = jspm_packages$github$alloyui$core$master$promise$Promise$$CancellablePromise.State_.REJECTED;
      x = new TypeError("CancellablePromise cannot resolve to itself");
    } else if (jspm_packages$github$alloyui$core$master$promise$Promise$$Thenable.isImplementedBy(x)) {
      x = x;
      this.state_ = jspm_packages$github$alloyui$core$master$promise$Promise$$CancellablePromise.State_.BLOCKED;
      x.then(this.unblockAndFulfill_, this.unblockAndReject_, this);
      return;
    } else if (jspm_packages$github$alloyui$core$master$core$$default.isObject(x)) {
      try {
        var then = x.then;
        if (jspm_packages$github$alloyui$core$master$core$$default.isFunction(then)) {
          this.tryThen_(x, then);
          return;
        }
      } catch (e) {
        state = jspm_packages$github$alloyui$core$master$promise$Promise$$CancellablePromise.State_.REJECTED;
        x = e;
      }
    }

    this.result_ = x;
    this.state_ = state;
    this.scheduleCallbacks_();

    if (state === jspm_packages$github$alloyui$core$master$promise$Promise$$CancellablePromise.State_.REJECTED && !(x instanceof jspm_packages$github$alloyui$core$master$promise$Promise$$CancellablePromise.CancellationError)) {
      jspm_packages$github$alloyui$core$master$promise$Promise$$CancellablePromise.addUnhandledRejection_(this, x);
    }
  };

  /**
   * Attempts to call the {@code then} method on an object in the hopes that it is
   * a Promise-compatible instance. This allows interoperation between different
   * Promise implementations, however a non-compliant object may cause a Promise
   * to hang indefinitely. If the {@code then} method throws an exception, the
   * dependent Promise will be rejected with the thrown value.
   *
   * @see http://promisesaplus.com/#point-70
   *
   * @param {Thenable} thenable An object with a {@code then} method that may be
   *     compatible with the Promise/A+ specification.
   * @param {!Function} then The {@code then} method of the Thenable object.
   * @private
   */
  jspm_packages$github$alloyui$core$master$promise$Promise$$CancellablePromise.prototype.tryThen_ = function (thenable, then) {
    this.state_ = jspm_packages$github$alloyui$core$master$promise$Promise$$CancellablePromise.State_.BLOCKED;
    var promise = this;
    var called = false;

    var resolve = function resolve(value) {
      if (!called) {
        called = true;
        promise.unblockAndFulfill_(value);
      }
    };

    var reject = function reject(reason) {
      if (!called) {
        called = true;
        promise.unblockAndReject_(reason);
      }
    };

    try {
      then.call(thenable, resolve, reject);
    } catch (e) {
      reject(e);
    }
  };

  /**
   * Executes the pending callbacks of a resolved Promise after a timeout.
   *
   * Section 2.2.4 of the Promises/A+ specification requires that Promise
   * callbacks must only be invoked from a call stack that only contains Promise
   * implementation code, which we accomplish by invoking callback execution after
   * a timeout. If {@code startExecution_} is called multiple times for the same
   * Promise, the callback chain will be evaluated only once. Additional callbacks
   * may be added during the evaluation phase, and will be executed in the same
   * event loop.
   *
   * All Promises added to the waiting list during the same browser event loop
   * will be executed in one batch to avoid using a separate timeout per Promise.
   *
   * @private
   */
  jspm_packages$github$alloyui$core$master$promise$Promise$$CancellablePromise.prototype.scheduleCallbacks_ = function () {
    if (!this.executing_) {
      this.executing_ = true;
      jspm_packages$github$alloyui$core$master$promise$Promise$$async.run(this.executeCallbacks_, this);
    }
  };

  /**
   * Executes all pending callbacks for this Promise.
   *
   * @private
   */
  jspm_packages$github$alloyui$core$master$promise$Promise$$CancellablePromise.prototype.executeCallbacks_ = function () {
    while (this.callbackEntries_ && this.callbackEntries_.length) {
      var entries = this.callbackEntries_;
      this.callbackEntries_ = [];

      for (var i = 0; i < entries.length; i++) {
        this.executeCallback_(entries[i], this.state_, this.result_);
      }
    }
    this.executing_ = false;
  };

  /**
   * Executes a pending callback for this Promise. Invokes an {@code onFulfilled}
   * or {@code onRejected} callback based on the resolved state of the Promise.
   *
   * @param {!CancellablePromise.CallbackEntry_} callbackEntry An entry containing the
   *     onFulfilled and/or onRejected callbacks for this step.
   * @param {CancellablePromise.State_} state The resolution status of the Promise,
   *     either FULFILLED or REJECTED.
   * @param {*} result The resolved result of the Promise.
   * @private
   */
  jspm_packages$github$alloyui$core$master$promise$Promise$$CancellablePromise.prototype.executeCallback_ = function (callbackEntry, state, result) {
    if (state === jspm_packages$github$alloyui$core$master$promise$Promise$$CancellablePromise.State_.FULFILLED) {
      callbackEntry.onFulfilled(result);
    } else {
      this.removeUnhandledRejection_();
      callbackEntry.onRejected(result);
    }
  };

  /**
   * Marks this rejected Promise as having being handled. Also marks any parent
   * Promises in the rejected state as handled. The rejection handler will no
   * longer be invoked for this Promise (if it has not been called already).
   *
   * @private
   */
  jspm_packages$github$alloyui$core$master$promise$Promise$$CancellablePromise.prototype.removeUnhandledRejection_ = function () {
    var p;
    if (jspm_packages$github$alloyui$core$master$promise$Promise$$CancellablePromise.UNHANDLED_REJECTION_DELAY > 0) {
      for (p = this; p && p.unhandledRejectionId_; p = p.parent_) {
        clearTimeout(p.unhandledRejectionId_);
        p.unhandledRejectionId_ = 0;
      }
    } else if (jspm_packages$github$alloyui$core$master$promise$Promise$$CancellablePromise.UNHANDLED_REJECTION_DELAY === 0) {
      for (p = this; p && p.hadUnhandledRejection_; p = p.parent_) {
        p.hadUnhandledRejection_ = false;
      }
    }
  };

  /**
   * Marks this rejected Promise as unhandled. If no {@code onRejected} callback
   * is called for this Promise before the {@code UNHANDLED_REJECTION_DELAY}
   * expires, the reason will be passed to the unhandled rejection handler. The
   * handler typically rethrows the rejection reason so that it becomes visible in
   * the developer console.
   *
   * @param {!CancellablePromise} promise The rejected Promise.
   * @param {*} reason The Promise rejection reason.
   * @private
   */
  jspm_packages$github$alloyui$core$master$promise$Promise$$CancellablePromise.addUnhandledRejection_ = function (promise, reason) {
    if (jspm_packages$github$alloyui$core$master$promise$Promise$$CancellablePromise.UNHANDLED_REJECTION_DELAY > 0) {
      promise.unhandledRejectionId_ = setTimeout(function () {
        jspm_packages$github$alloyui$core$master$promise$Promise$$CancellablePromise.handleRejection_.call(null, reason);
      }, jspm_packages$github$alloyui$core$master$promise$Promise$$CancellablePromise.UNHANDLED_REJECTION_DELAY);
    } else if (jspm_packages$github$alloyui$core$master$promise$Promise$$CancellablePromise.UNHANDLED_REJECTION_DELAY === 0) {
      promise.hadUnhandledRejection_ = true;
      jspm_packages$github$alloyui$core$master$promise$Promise$$async.run(function () {
        if (promise.hadUnhandledRejection_) {
          jspm_packages$github$alloyui$core$master$promise$Promise$$CancellablePromise.handleRejection_.call(null, reason);
        }
      });
    }
  };

  /**
   * A method that is invoked with the rejection reasons for Promises that are
   * rejected but have no {@code onRejected} callbacks registered yet.
   * @type {function(*)}
   * @private
   */
  jspm_packages$github$alloyui$core$master$promise$Promise$$CancellablePromise.handleRejection_ = jspm_packages$github$alloyui$core$master$promise$Promise$$async.throwException;

  /**
   * Sets a handler that will be called with reasons from unhandled rejected
   * Promises. If the rejected Promise (or one of its descendants) has an
   * {@code onRejected} callback registered, the rejection will be considered
   * handled, and the rejection handler will not be called.
   *
   * By default, unhandled rejections are rethrown so that the error may be
   * captured by the developer console or a {@code window.onerror} handler.
   *
   * @param {function(*)} handler A function that will be called with reasons from
   *     rejected Promises. Defaults to {@code async.throwException}.
   */
  jspm_packages$github$alloyui$core$master$promise$Promise$$CancellablePromise.setUnhandledRejectionHandler = function (handler) {
    jspm_packages$github$alloyui$core$master$promise$Promise$$CancellablePromise.handleRejection_ = handler;
  };

  /**
   * Error used as a rejection reason for canceled Promises.
   *
   * @param {string=} opt_message
   * @constructor
   * @extends {Error}
   * @final
   */
  jspm_packages$github$alloyui$core$master$promise$Promise$$CancellablePromise.CancellationError = (function (_Error) {
    var _class = function (opt_message) {
      _classCallCheck(this, _class);

      _get(Object.getPrototypeOf(_class.prototype), "constructor", this).call(this, opt_message);

      if (opt_message) {
        this.message = opt_message;
      }
    };

    _inherits(_class, _Error);

    return _class;
  })(Error);

  /** @override */
  jspm_packages$github$alloyui$core$master$promise$Promise$$CancellablePromise.CancellationError.prototype.name = "cancel";

  "use strict";

  /**
   * Attribute adds support for having object properties that can be watched for
   * changes, as well as configured with validators, setters and other options.
   * See the `addAttr` method for a complete list of available attribute
   * configuration options.
   * @constructor
   * @extends {EventEmitter}
   */

  var jspm_packages$github$alloyui$core$master$attribute$Attribute$$Attribute = (function (_jspm_packages$github$alloyui$core$master$events$EventEmitter$$default) {
    function jspm_packages$github$alloyui$core$master$attribute$Attribute$$Attribute(opt_config) {
      _classCallCheck(this, jspm_packages$github$alloyui$core$master$attribute$Attribute$$Attribute);

      _get(Object.getPrototypeOf(jspm_packages$github$alloyui$core$master$attribute$Attribute$$Attribute.prototype), "constructor", this).call(this);

      /**
       * Object with information about the batch event that is currently
       * scheduled, or null if none is.
       * @type {Object}
       * @protected
       */
      this.scheduledBatchData_ = null;

      /**
       * Object that contains information about all this instance's attributes.
       * @type {!Object<string, !Object>}
       * @protected
       */
      this.attrsInfo_ = {};

      this.mergeInvalidAttrs_();
      this.addAttrsFromStaticHint_(opt_config);
    }

    _inherits(jspm_packages$github$alloyui$core$master$attribute$Attribute$$Attribute, _jspm_packages$github$alloyui$core$master$events$EventEmitter$$default);

    _createClass(jspm_packages$github$alloyui$core$master$attribute$Attribute$$Attribute, {
      addAttr: {

        /**
         * Adds the given attribute.
         * @param {string} name The name of the new attribute.
         * @param {Object.<string, *>=} config The configuration object for the new attribute.
         *   This object can have the following keys:
         *   initOnly - Ignores writes to the attribute after it's been initialized. That is,
         *   allows writes only when adding the attribute for the first time.
         *   setter - Function for normalizing new attribute values. It receives the new value
         *   that was set, and returns the value that should be stored.
         *   validator - Function that validates new attribute values. When it returns false,
         *   the new value is ignored.
         *   value - The default value for this attribute. Note that setting this to an object
         *   will cause all attribute instances to use the same reference to the object. To
         *   have each attribute instance use a different reference, use the `valueFn` option
         *   instead.
         *   valueFn - A function that returns the default value for this attribute.
         * @param {*} initialValue The initial value of the new attribute. This value has higher
         *   precedence than the default value specified in this attribute's configuration.
         */

        value: function addAttr(name, config, initialValue) {
          this.assertValidAttrName_(name);

          this.attrsInfo_[name] = {
            config: config || {},
            initialValue: initialValue,
            state: jspm_packages$github$alloyui$core$master$attribute$Attribute$$Attribute.States.UNINITIALIZED
          };

          Object.defineProperty(this, name, {
            configurable: true,
            get: this.getAttrValue_.bind(this, name),
            set: this.setAttrValue_.bind(this, name)
          });
        }
      },
      addAttrs: {

        /**
         * Adds the given attributes.
         * @param {!Object.<string, !Object>} configs An object that maps the names of all the
         *   attributes to be added to their configuration objects.
         * @param {!Object.<string, *>} initialValues An object that maps the names of
         *   attributes to their initial values. These values have higher precedence than the
         *   default values specified in the attribute configurations.
         */

        value: function addAttrs(configs, initialValues) {
          initialValues = initialValues || {};
          var names = Object.keys(configs);

          for (var i = 0; i < names.length; i++) {
            this.addAttr(names[i], configs[names[i]], initialValues[names[i]]);
          }
        }
      },
      addAttrsFromStaticHint_: {

        /**
         * Adds attributes from super classes static hint `MyClass.ATTRS = {};`.
         * @param {!Object.<string, !Object>} configs An object that maps the names
         *     of all the attributes to be added to their configuration objects.
         * @protected
         */

        value: function addAttrsFromStaticHint_(config) {
          jspm_packages$github$alloyui$core$master$core$$default.mergeSuperClassesProperty(this.constructor, "ATTRS", this.mergeAttrs_);
          this.addAttrs(this.constructor.ATTRS_MERGED, config);
        }
      },
      assertValidAttrName_: {

        /**
         * Checks that the given name is a valid attribute name. If it's not, an error
         * will be thrown.
         * @param {string} name The name to be validated.
         * @throws {Error}
         */

        value: function assertValidAttrName_(name) {
          if (this.constructor.INVALID_ATTRS_MERGED[name]) {
            throw new Error("It's not allowed to create an attribute with the name \"" + name + "\".");
          }
        }
      },
      canWrite_: {

        /**
         * Checks if the it's allowed to write on the requested attribute.
         * @param {string} name The name of the attribute.
         * @return {Boolean}
         * @protected
         */

        value: function canWrite_(name) {
          this.initAttr_(name);

          var info = this.attrsInfo_[name];
          return !info.config.initOnly || info.state !== jspm_packages$github$alloyui$core$master$attribute$Attribute$$Attribute.States.INITIALIZED;
        }
      },
      callFunction_: {

        /**
         * Calls the requested function, running the appropriate code for when it's
         * passed as an actual function object or just the function's name.
         * @param {!Function|string} fn Function, or name of the function to run.
         * @param {...*} A variable number of optional parameters to be passed to the
         *   function that will be called.
         * @return {*} The return value of the called function.
         * @protected
         */

        value: function callFunction_(fn) {
          var args = Array.prototype.slice.call(arguments, 1);

          if (jspm_packages$github$alloyui$core$master$core$$default.isString(fn)) {
            return this[fn].apply(this, args);
          } else if (jspm_packages$github$alloyui$core$master$core$$default.isFunction(fn)) {
            return fn.apply(this, args);
          }
        }
      },
      callSetter_: {

        /**
         * Calls the attribute's setter, if there is one.
         * @param {string} name The name of the attribute.
         * @param {*} value The value to be set.
         * @return {*} The final value to be set.
         */

        value: function callSetter_(name, value) {
          var info = this.attrsInfo_[name];
          var config = info.config;
          if (config.setter) {
            value = this.callFunction_(config.setter, value);
          }
          return value;
        }
      },
      callValidator_: {

        /**
         * Calls the attribute's validator, if there is one.
         * @param {string} name The name of the attribute.
         * @param {*} value The value to be validated.
         * @return {Boolean} Flag indicating if value is valid or not.
         */

        value: function callValidator_(name, value) {
          var info = this.attrsInfo_[name];
          var config = info.config;
          if (config.validator) {
            return this.callFunction_(config.validator, value);
          }
          return true;
        }
      },
      disposeInternal: {

        /**
         * @inheritDoc
         */

        value: function disposeInternal() {
          _get(Object.getPrototypeOf(jspm_packages$github$alloyui$core$master$attribute$Attribute$$Attribute.prototype), "disposeInternal", this).call(this);
          this.attrsInfo_ = null;
          this.scheduledBatchData_ = null;
        }
      },
      emitBatchEvent_: {

        /**
         * Emits the attribute change batch event.
         * @protected
         */

        value: function emitBatchEvent_() {
          if (!this.isDisposed()) {
            var data = this.scheduledBatchData_;
            this.scheduledBatchData_ = null;
            this.emit("attrsChanged", data);
          }
        }
      },
      getAttrs: {

        /**
         * Returns an object that maps all attribute names to their values.
         * @return {Object.<string, *>}
         */

        value: function getAttrs() {
          var attrsMap = {};
          var names = this.getAttrNames();

          for (var i = 0; i < names.length; i++) {
            attrsMap[names[i]] = this[names[i]];
          }

          return attrsMap;
        }
      },
      getAttrNames: {

        /**
         * Returns an array with all attribute names.
         * @return {Array.<string>}
         */

        value: function getAttrNames() {
          return Object.keys(this.attrsInfo_);
        }
      },
      getAttrValue_: {

        /**
         * Gets the value of the specified attribute. This is passed as that attribute's
         * getter to the `Object.defineProperty` call inside the `addAttr` method.
         * @param {string} name The name of the attribute.
         * @return {*}
         * @protected
         */

        value: function getAttrValue_(name) {
          this.initAttr_(name);

          return this.attrsInfo_[name].value;
        }
      },
      informChange_: {

        /**
         * Informs of changes to an attributes value through an event. Won't trigger
         * the event if the value hasn't changed or if it's being initialized.
         * @param {string} name The name of the attribute.
         * @param {*} prevVal The previous value of the attribute.
         * @protected
         */

        value: function informChange_(name, prevVal) {
          if (this.shouldInformChange_(name, prevVal)) {
            var data = {
              attrName: name,
              newVal: this[name],
              prevVal: prevVal
            };
            this.emit(name + "Changed", data);
            this.scheduleBatchEvent_(data);
          }
        }
      },
      initAttr_: {

        /**
         * Initializes the specified attribute, giving it a first value.
         * @param {string} name The name of the attribute.
         * @protected
         */

        value: function initAttr_(name) {
          var info = this.attrsInfo_[name];
          if (info.state !== jspm_packages$github$alloyui$core$master$attribute$Attribute$$Attribute.States.UNINITIALIZED) {
            return;
          }

          info.state = jspm_packages$github$alloyui$core$master$attribute$Attribute$$Attribute.States.INITIALIZING;
          this.setInitialValue_(name);
          if (!info.written) {
            info.state = jspm_packages$github$alloyui$core$master$attribute$Attribute$$Attribute.States.INITIALIZING_DEFAULT;
            this.setDefaultValue_(name);
          }
          info.state = jspm_packages$github$alloyui$core$master$attribute$Attribute$$Attribute.States.INITIALIZED;
        }
      },
      mergeAttrs_: {

        /**
         * Merges an array of values for the ATTRS property into a single object.
         * @param {!Array} values The values to be merged.
         * @return {!Object} The merged value.
         * @protected
         */

        value: function mergeAttrs_(values) {
          return jspm_packages$github$alloyui$core$master$object$object$$default.mixin.apply(null, [{}].concat(values.reverse()));
        }
      },
      mergeInvalidAttrs_: {

        /**
         * Merges the values of the `INVALID_ATTRS` static for the whole hierarchy of
         * the current instance.
         * @protected
         */

        value: function mergeInvalidAttrs_() {
          jspm_packages$github$alloyui$core$master$core$$default.mergeSuperClassesProperty(this.constructor, "INVALID_ATTRS", function (values) {
            return jspm_packages$github$alloyui$core$master$array$array$$default.flatten(values).reduce(function (merged, val) {
              if (val) {
                merged[val] = true;
              }
              return merged;
            }, {});
          });
        }
      },
      removeAttr: {

        /**
         * Removes the requested attribute.
         * @param {string} name The name of the attribute.
         */

        value: function removeAttr(name) {
          this.attrsInfo_[name] = null;
          delete this[name];
        }
      },
      scheduleBatchEvent_: {

        /**
         * Schedules an attribute change batch event to be emitted asynchronously.
         * @param {!Object} attrChangeData Information about an attribute's update.
         * @protected
         */

        value: function scheduleBatchEvent_(attrChangeData) {
          if (!this.scheduledBatchData_) {
            jspm_packages$github$alloyui$core$master$promise$Promise$$async.nextTick(this.emitBatchEvent_, this);
            this.scheduledBatchData_ = {
              changes: {}
            };
          }

          var name = attrChangeData.attrName;
          var changes = this.scheduledBatchData_.changes;
          if (changes[name]) {
            changes[name].newVal = attrChangeData.newVal;
          } else {
            changes[name] = attrChangeData;
          }
        }
      },
      setAttrs: {

        /**
         * Sets the value of all the specified attributes.
         * @param {!Object.<string,*>} values A map of attribute names to the values they
         *   should be set to.
         */

        value: function setAttrs(values) {
          var names = Object.keys(values);

          for (var i = 0; i < names.length; i++) {
            this[names[i]] = values[names[i]];
          }
        }
      },
      setAttrValue_: {

        /**
         * Sets the value of the specified attribute. This is passed as that attribute's
         * setter to the `Object.defineProperty` call inside the `addAttr` method.
         * @param {string} name The name of the attribute.
         * @param {*} value The new value of the attribute.
         * @protected
         */

        value: function setAttrValue_(name, value) {
          if (!this.canWrite_(name) || !this.validateAttrValue_(name, value)) {
            return;
          }

          var info = this.attrsInfo_[name];
          var prevVal = this[name];
          info.value = this.callSetter_(name, value);
          info.written = true;
          this.informChange_(name, prevVal);
        }
      },
      setDefaultValue_: {

        /**
         * Sets the default value of the requested attribute.
         * @param {string} name The name of the attribute.
         * @return {*}
         */

        value: function setDefaultValue_(name) {
          var config = this.attrsInfo_[name].config;

          if (config.value !== undefined) {
            this[name] = config.value;
          } else {
            this[name] = this.callFunction_(config.valueFn);
          }
        }
      },
      setInitialValue_: {

        /**
         * Sets the initial value of the requested attribute.
         * @param {string} name The name of the attribute.
         * @return {*}
         */

        value: function setInitialValue_(name) {
          var info = this.attrsInfo_[name];
          if (info.initialValue !== undefined) {
            this[name] = info.initialValue;
            info.initialValue = undefined;
          }
        }
      },
      shouldInformChange_: {

        /**
         * Checks if we should inform about an attributes update. Updates are ignored
         * during attribute initialization. Otherwise, updates to primitive values
         * are only informed when the new value is different from the previous
         * one. Updates to objects (which includes functions and arrays) are always
         * informed outside initialization though, since we can't be sure if all of
         * the internal data has stayed the same.
         * @param {string} name The name of the attribute.
         * @param {*} prevVal The previous value of the attribute.
         * @return {Boolean}
         */

        value: function shouldInformChange_(name, prevVal) {
          var info = this.attrsInfo_[name];
          return info.state === jspm_packages$github$alloyui$core$master$attribute$Attribute$$Attribute.States.INITIALIZED && (jspm_packages$github$alloyui$core$master$core$$default.isObject(prevVal) || prevVal !== this[name]);
        }
      },
      validateAttrValue_: {

        /**
         * Validates the attribute's value, which includes calling the validator defined
         * in the attribute's configuration object, if there is one.
         * @param {string} name The name of the attribute.
         * @param {*} value The value to be validated.
         * @return {Boolean} Flag indicating if value is valid or not.
         */

        value: function validateAttrValue_(name, value) {
          var info = this.attrsInfo_[name];

          return info.state === jspm_packages$github$alloyui$core$master$attribute$Attribute$$Attribute.States.INITIALIZING_DEFAULT || this.callValidator_(name, value);
        }
      }
    });

    return jspm_packages$github$alloyui$core$master$attribute$Attribute$$Attribute;
  })(jspm_packages$github$alloyui$core$master$events$EventEmitter$$default);

  /**
   * A list with attribute names that will automatically be rejected as invalid.
   * Subclasses can define their own invalid attributes by setting this static
   * on their constructors, which will be merged together and handled automatically.
   * @type {!Array<string>}
   */
  jspm_packages$github$alloyui$core$master$attribute$Attribute$$Attribute.INVALID_ATTRS = ["attrs"];

  /**
   * Constants that represent the states that an attribute can be in.
   * @type {!Object}
   */
  jspm_packages$github$alloyui$core$master$attribute$Attribute$$Attribute.States = {
    UNINITIALIZED: 0,
    INITIALIZING: 1,
    INITIALIZING_DEFAULT: 2,
    INITIALIZED: 3
  };

  var jspm_packages$github$alloyui$core$master$attribute$Attribute$$default = jspm_packages$github$alloyui$core$master$attribute$Attribute$$Attribute;
  "use strict";

  /**
   * EventEmitterProxy utility. It's responsible for linking two EventEmitter
   * instances together, emitting events from the first emitter through the
   * second one. That means that listening to a supported event on the target
   * emitter will mean listening to it on the origin emitter as well.
   * @param {EventEmitter | Element} originEmitter Events originated on this emitter
   *   will be fired for the target emitter's listeners as well. Can be either a real
   *   EventEmitter instance or a DOM element.
   * @param {EventEmitter} targetEmitter Event listeners attached to this emitter
   *   will also be triggered when the event is fired by the origin emitter.
   * @param {Object} opt_blacklist Optional blacklist of events that should not be
   *   proxied.
   * @constructor
   * @extends {Disposable}
   */

  var jspm_packages$github$alloyui$core$master$events$EventEmitterProxy$$EventEmitterProxy = (function (_jspm_packages$github$alloyui$core$master$disposable$Disposable$$default4) {
    function jspm_packages$github$alloyui$core$master$events$EventEmitterProxy$$EventEmitterProxy(originEmitter, targetEmitter, opt_blacklist) {
      _classCallCheck(this, jspm_packages$github$alloyui$core$master$events$EventEmitterProxy$$EventEmitterProxy);

      /**
       * Map of events that should not be proxied.
       * @type {Object}
       * @protected
       */
      this.blacklist_ = opt_blacklist || {};

      /**
       * The origin emitter. This emitter's events will be proxied through the
       * target emitter.
       * @type {EventEmitter}
       * @protected
       */
      this.originEmitter_ = originEmitter;

      /**
       * Holds a map of events from the origin emitter that are already being proxied.
       * @type {Object}
       * @protected
       */
      this.proxiedEvents_ = {};

      /**
       * The target emitter. This emitter will emit all events that come from
       * the origin emitter.
       * @type {EventEmitter}
       * @protected
       */
      this.targetEmitter_ = targetEmitter;

      this.startProxy_();
    }

    _inherits(jspm_packages$github$alloyui$core$master$events$EventEmitterProxy$$EventEmitterProxy, _jspm_packages$github$alloyui$core$master$disposable$Disposable$$default4);

    _createClass(jspm_packages$github$alloyui$core$master$events$EventEmitterProxy$$EventEmitterProxy, {
      disposeInternal: {

        /**
         * @inheritDoc
         */

        value: function disposeInternal() {
          var removeFnName = jspm_packages$github$alloyui$core$master$core$$default.isElement(this.originEmitter_) ? "removeEventListener" : "removeListener";
          for (var event in this.proxiedEvents_) {
            this.originEmitter_[removeFnName](event, this.proxiedEvents_[event]);
          }

          this.proxiedEvents_ = null;
          this.originEmitter_ = null;
          this.targetEmitter_ = null;
        }
      },
      proxyEvent_: {

        /**
         * Proxies the given event from the origin to the target emitter.
         * @param {string} event
         */

        value: function proxyEvent_(event) {
          if (!this.shouldProxyEvent_(event)) {
            return;
          }

          var self = this;
          this.proxiedEvents_[event] = function () {
            var args = [event].concat(Array.prototype.slice.call(arguments, 0));
            self.targetEmitter_.emit.apply(self.targetEmitter_, args);
          };

          var addFnName = jspm_packages$github$alloyui$core$master$core$$default.isElement(this.originEmitter_) ? "addEventListener" : "on";
          this.originEmitter_[addFnName](event, this.proxiedEvents_[event]);
        }
      },
      shouldProxyEvent_: {

        /**
         * Checks if the given event should be proxied.
         * @param {string} event
         * @return {boolean}
         * @protected
         */

        value: function shouldProxyEvent_(event) {
          return !this.proxiedEvents_[event] && !this.blacklist_[event] && (!jspm_packages$github$alloyui$core$master$core$$default.isElement(this.originEmitter_) || jspm_packages$github$alloyui$core$master$dom$dom$$default.supportsEvent(this.originEmitter_, event));
        }
      },
      startProxy_: {

        /**
         * Starts proxying all events from the origin to the target emitter.
         * @protected
         */

        value: function startProxy_() {
          this.targetEmitter_.on("newListener", this.proxyEvent_.bind(this));
        }
      }
    });

    return jspm_packages$github$alloyui$core$master$events$EventEmitterProxy$$EventEmitterProxy;
  })(jspm_packages$github$alloyui$core$master$disposable$Disposable$$default);

  var jspm_packages$github$alloyui$core$master$events$EventEmitterProxy$$default = jspm_packages$github$alloyui$core$master$events$EventEmitterProxy$$EventEmitterProxy;
  "use strict";

  /**
   * EventHandler utility. It's useful for easily removing a group of
   * listeners from different EventEmitter instances.
   * @constructor
   * @extends {Disposable}
   */

  var jspm_packages$github$alloyui$core$master$events$EventHandler$$EventHandler = (function (_jspm_packages$github$alloyui$core$master$disposable$Disposable$$default5) {
    function jspm_packages$github$alloyui$core$master$events$EventHandler$$EventHandler() {
      _classCallCheck(this, jspm_packages$github$alloyui$core$master$events$EventHandler$$EventHandler);

      /**
       * An array that holds the added event handles, so the listeners can be
       * removed later.
       * @type {Array.<EventHandle>}
       * @protected
       */
      this.eventHandles_ = [];
    }

    _inherits(jspm_packages$github$alloyui$core$master$events$EventHandler$$EventHandler, _jspm_packages$github$alloyui$core$master$disposable$Disposable$$default5);

    _createClass(jspm_packages$github$alloyui$core$master$events$EventHandler$$EventHandler, {
      add: {

        /**
         * Adds event handles to be removed later through the `removeAllListeners`
         * method.
         * @param {...(!EventHandle)} var_args
         */

        value: function add() {
          for (var i = 0; i < arguments.length; i++) {
            this.eventHandles_.push(arguments[i]);
          }
        }
      },
      disposeInternal: {

        /**
         * Disposes of this instance's object references.
         * @override
         */

        value: function disposeInternal() {
          this.eventHandles_ = null;
        }
      },
      removeAllListeners: {

        /**
         * Removes all listeners that have been added through the `add` method.
         */

        value: function removeAllListeners() {
          for (var i = 0; i < this.eventHandles_.length; i++) {
            this.eventHandles_[i].removeListener();
          }

          this.eventHandles_ = [];
        }
      }
    });

    return jspm_packages$github$alloyui$core$master$events$EventHandler$$EventHandler;
  })(jspm_packages$github$alloyui$core$master$disposable$Disposable$$default);

  var jspm_packages$github$alloyui$core$master$events$EventHandler$$default = jspm_packages$github$alloyui$core$master$events$EventHandler$$EventHandler;
  "use strict";

  /**
   * Component collects common behaviors to be followed by UI components, such
   * as Lifecycle, bounding box element creation, CSS classes management,
   * events encapsulation and surfaces support. Surfaces are an area of the
   * component that can have information rendered into it. A component
   * manages multiple surfaces. Surfaces are only rendered when its content is
   * modified, representing render performance gains. For each surface, render
   * attributes could be associated, when the render context of a surface gets
   * modified the component Lifecycle re-paints the modified surface
   * automatically.
   *
   * Example:
   *
   * <code>
   * class CustomComponent extends Component {
   *   constructor(config) {
   *     super(config);
   *   }
   *
   *   created() {
   *   }
   *
   *   decorateInternal() {
   *   }
   *
   *   renderInternal() {
   *     this.element.appendChild(this.getSurfaceElement('header'));
   *     this.element.appendChild(this.getSurfaceElement('bottom'));
   *   }
   *
   *   getSurfaceContent(surfaceId) {
   *   }
   *
   *   attached() {
   *   }
   *
   *   detached() {
   *   }
   * }
   *
   * CustomComponent.ATTRS = {
   *   title: { value: 'Title' },
   *   fontSize: { value: '10px' }
   * };
   *
   * CustomComponent.SURFACES = {
   *   header: { renderAttrs: ['title', 'fontSize'] },
   *   bottom: { renderAttrs: ['fontSize'] }
   * };
   * </code>
   *
   * @param {!Object} opt_config An object with the initial values for this component's
   *   attributes.
   * @constructor
   * @extends {Attribute}
   */

  var jspm_packages$github$alloyui$core$master$component$Component$$Component = (function (_jspm_packages$github$alloyui$core$master$attribute$Attribute$$default) {
    function jspm_packages$github$alloyui$core$master$component$Component$$Component(opt_config) {
      _classCallCheck(this, jspm_packages$github$alloyui$core$master$component$Component$$Component);

      _get(Object.getPrototypeOf(jspm_packages$github$alloyui$core$master$component$Component$$Component.prototype), "constructor", this).call(this, opt_config);

      /**
       * Whether the element is being decorated.
       * @type {boolean}
       * @protected
       */
      this.decorating_ = false;

      /**
       * Holds events that were listened through the `delegate` Component function.
       * @type {EventHandler}
       * @protected
       */
      this.delegateEventHandler_ = null;

      /**
       * Instance of `EventEmitterProxy` which proxies events from the component's
       * element to the component itself.
       * @type {EventEmitterProxy}
       * @protected
       */
      this.elementEventProxy_ = null;

      /**
       * Whether the element is in document.
       * @type {boolean}
       */
      this.inDocument = false;

      /**
       * Maps that index the surfaces instances by the surface id.
       * @type {Object}
       * @default null
       * @protected
       */
      this.surfaces_ = null;

      /**
       * Whether the element was rendered.
       * @type {boolean}
       */
      this.wasRendered = false;

      /**
       * Whether the element was decorated.
       * @type {boolean}
       */
      this.wasDecorated = false;

      jspm_packages$github$alloyui$core$master$core$$default.mergeSuperClassesProperty(this.constructor, "ELEMENT_CLASSES", this.mergeElementClasses_);
      jspm_packages$github$alloyui$core$master$core$$default.mergeSuperClassesProperty(this.constructor, "ELEMENT_TAG_NAME", jspm_packages$github$alloyui$core$master$array$array$$default.firstDefinedValue);
      jspm_packages$github$alloyui$core$master$core$$default.mergeSuperClassesProperty(this.constructor, "SURFACE_TAG_NAME", jspm_packages$github$alloyui$core$master$array$array$$default.firstDefinedValue);
      this.addSurfacesFromStaticHint_();

      this.elementEventProxy_ = new jspm_packages$github$alloyui$core$master$events$EventEmitterProxy$$default(this.element, this);
      this.delegateEventHandler_ = new jspm_packages$github$alloyui$core$master$events$EventHandler$$default();

      this.created_();
    }

    _inherits(jspm_packages$github$alloyui$core$master$component$Component$$Component, _jspm_packages$github$alloyui$core$master$attribute$Attribute$$default);

    _createClass(jspm_packages$github$alloyui$core$master$component$Component$$Component, {
      addSurface: {

        /**
         * Registers a surface to the component. Surface elements are not
         * automatically appended to the component element.
         * @param {string} surfaceId The surface id to be registered.
         * @param {Object=} opt_config Optional surface configuration.
         * @chainable
         */

        value: function addSurface(surfaceId, opt_config) {
          this.surfaces_[surfaceId] = opt_config || {};
          this.cacheSurfaceRenderAttrs_(surfaceId);
          return this;
        }
      },
      addSurfaces: {

        /**
         * Registers surfaces to the component. Surface elements are not
         * automatically appended to the component element.
         * @param {!Object.<string, Object=>} configs An object that maps the names
         *     of all the surfaces to be added to their configuration objects.
         * @chainable
         */

        value: function addSurfaces(configs) {
          for (var surfaceId in configs) {
            this.addSurface(surfaceId, configs[surfaceId]);
          }
          return this;
        }
      },
      addSurfacesFromStaticHint_: {

        /**
         * Adds surfaces from super classes static hint.
         * @protected
         */

        value: function addSurfacesFromStaticHint_() {
          jspm_packages$github$alloyui$core$master$core$$default.mergeSuperClassesProperty(this.constructor, "SURFACES", this.mergeSurfaces_);
          this.surfaces_ = {};
          this.surfacesRenderAttrs_ = {};

          var configs = this.constructor.SURFACES_MERGED;
          for (var surfaceId in configs) {
            this.addSurface(surfaceId, jspm_packages$github$alloyui$core$master$object$object$$default.mixin({}, configs[surfaceId]));
          }
        }
      },
      attach: {

        /**
         * Invokes the attached Lifecycle. When attached, the component element is
         * appended to the DOM and any other action to be performed must be
         * implemented in this method, such as, binding DOM events. A component can
         * be re-attached multiple times.
         * @param {(string|Element)=} opt_parentElement Optional parent element
         *     to render the component.
         * @param {(string|Element)=} opt_siblingElement Optional sibling element
         *     to render the component before it. Relevant when the component needs
         *     to be rendered before an existing element in the DOM, e.g.
         *     `component.render(null, existingElement)`.
         * @protected
         * @chainable
         */

        value: function attach(opt_parentElement, opt_siblingElement) {
          if (!this.inDocument) {
            this.renderElement_(opt_parentElement, opt_siblingElement);
            this.inDocument = true;
            this.attached();
          }
          return this;
        }
      },
      attached: {

        /**
         * Lifecycle. When attached, the component element is appended to the DOM
         * and any other action to be performed must be implemented in this method,
         * such as, binding DOM events. A component can be re-attached multiple
         * times, therefore the undo behavior for any action performed in this phase
         * must be implemented on the detach phase.
         */

        value: function attached() {}
      },
      cacheSurfaceRenderAttrs_: {

        /**
         * Caches surface render attributes into a O(k) flat map representation.
         * Relevant for performance to calculate the surfaces group that were
         * modified by attributes mutation.
         * @param {string} surfaceId The surface id to be cached into the flat map.
         * @protected
         */

        value: function cacheSurfaceRenderAttrs_(surfaceId) {
          var attrs = this.getSurface(surfaceId).renderAttrs;
          for (var i in attrs) {
            this.surfacesRenderAttrs_[attrs[i]] = this.surfacesRenderAttrs_[attrs[i]] || {};
            this.surfacesRenderAttrs_[attrs[i]][surfaceId] = true;
          }
        }
      },
      clearSurfacesCache_: {

        /**
         * Clears the surfaces content cache.
         * @protected
         */

        value: function clearSurfacesCache_() {
          for (var surfaceId in this.surfaces_) {
            this.getSurface(surfaceId).cacheState = jspm_packages$github$alloyui$core$master$component$Component$$Component.Cache.NOT_INITIALIZED;
          }
        }
      },
      compressHtmlForCache_: {

        /**
         * Compresses the requested html for caching purposes.
         * @param {string} htmlString The html to be compressed.
         * @return {string} The compressed html.
         * @protected
         */

        value: function compressHtmlForCache_(htmlString) {
          return jspm_packages$github$alloyui$core$master$html$html$$default.compress(htmlString);
        }
      },
      computeSurfaceCacheState_: {

        /**
         * Computes the cache state for the surface content. If value is string, the
         * cache state is represented by its hashcode.
         * @param {Object} value The value to calculate the cache state.
         * @return {Object} The computed cache state.
         * @protected
         */

        value: function computeSurfaceCacheState_(value) {
          if (jspm_packages$github$alloyui$core$master$core$$default.isString(value)) {
            if (jspm_packages$github$alloyui$core$master$dom$features$$default.checkAttrOrderChange()) {
              value = this.convertHtmlToBrowserFormat_(value);
            }
            return jspm_packages$github$alloyui$core$master$string$string$$default.hashCode(value);
          }
          return jspm_packages$github$alloyui$core$master$component$Component$$Component.Cache.NOT_CACHEABLE;
        }
      },
      computeSurfacesCacheStateFromDom_: {

        /**
         * Computes the cache state for the surface content based on the decorated
         * DOM element. The innerHTML of the surface element is read and compressed
         * in order to minimize mismatches caused by breaking spaces or HTML
         * formatting differences that does not affect the content structure.
         * @protected
         */

        value: function computeSurfacesCacheStateFromDom_() {
          for (var surfaceId in this.surfaces_) {
            var surface = this.getSurface(surfaceId);
            surface.cacheState = this.computeSurfaceCacheState_(this.compressHtmlForCache_(this.getSurfaceElement(surfaceId).innerHTML));
          }
        }
      },
      convertHtmlToBrowserFormat_: {

        /**
         * Converts the given html string to the format the current browser uses
         * when html is rendered. This is done by rendering the html in a temporary
         * element, and returning its resulting rendered html.
         * @param {string} htmlString The html to be converted.
         * @return {string}
         * @protected
         */

        value: function convertHtmlToBrowserFormat_(htmlString) {
          var element = document.createElement("div");
          jspm_packages$github$alloyui$core$master$dom$dom$$default.append(element, htmlString);
          return element.innerHTML;
        }
      },
      created: {

        /**
         * Lifecycle. Creation phase of the component happens once after the
         * component is instantiated, therefore its the initial phase of the
         * component Lifecycle. Be conscious about actions performed in this phase
         * to not compromise instantiation time with operations that can be
         * postponed to further phases. It's recommended to bind component custom
         * events in this phase, in contrast to DOM events that must be bind on
         * attach phase.
         */

        value: function created() {}
      },
      createSurfaceElement_: {

        /**
         * Creates the surface element with its id namespaced to the component id.
         * @param {string} surfaceElementId The id of the element for the surface to be
         *   created.
         * @return {Element} The surface element.
         * @protected
         */

        value: function createSurfaceElement_(surfaceElementId) {
          var el = document.createElement(this.constructor.SURFACE_TAG_NAME_MERGED);
          el.id = surfaceElementId;
          return el;
        }
      },
      decorateInternal: {

        /**
         * Lifecycle. Internal implementation for decoration. Any extra operation
         * necessary to prepare the component DOM must be implemented in this phase.
         */

        value: function decorateInternal() {}
      },
      delegate: {

        /**
         * Listens to a delegate event on the component's element.
         * @param {string} eventName The name of the event to listen to.
         * @param {string} selector The selector that matches the child elements that
         *   the event should be triggered for.
         * @param {!function(!Object)} callback Function to be called when the event is
         *   triggered. It will receive the normalized event object.
         * @return {!DomEventHandle} Can be used to remove the listener.
         */

        value: function delegate(eventName, selector, callback) {
          var handle = jspm_packages$github$alloyui$core$master$dom$dom$$default.delegate(this.element, eventName, selector, callback);
          this.delegateEventHandler_.add(handle);
          return handle;
        }
      },
      detach: {

        /**
         * Invokes the detached Lifecycle. When detached, the component element is
         * removed from the DOM and any other action to be performed must be
         * implemented in this method, such as, unbinding DOM events. A component
         * can be detached multiple times.
         * @chainable
         */

        value: function detach() {
          if (this.inDocument) {
            this.element.parentNode.removeChild(this.element);
            this.inDocument = false;
            this.detached();
          }
          return this;
        }
      },
      detached: {

        /**
         * Lifecycle. When detached, the component element is removed from the DOM
         * and any other action to be performed must be implemented in this method,
         * such as, unbinding DOM events. A component can be detached multiple
         * times, therefore the undo behavior for any action performed in this phase
         * must be implemented on the attach phase.
         */

        value: function detached() {}
      },
      created_: {

        /**
         * Internal implementation for the creation phase of the component.
         * @protected
         */

        value: function created_() {
          this.on("attrsChanged", this.handleAttributesChanges_);
          this.created();
        }
      },
      decorate: {

        /**
         * Lifecycle. Creates the component using existing DOM elements. Often the
         * component can be created using existing elements in the DOM to leverage
         * progressive enhancement. Any extra operation necessary to prepare the
         * component DOM must be implemented in this phase. Decorate phase replaces
         * render phase.
         *
         * Decoration Lifecycle:
         *   decorate - Decorate is manually called.
         *   decorateInternal - Internal implementation for decoration happens.
         *   render surfaces - All surfaces content are rendered.
         *   attribute synchronization - All synchronization methods are called.
         *   attach - Attach Lifecycle is called.
         * @chainable
         */

        value: function decorate() {
          if (this.inDocument) {
            throw new Error(jspm_packages$github$alloyui$core$master$component$Component$$Component.Error.ALREADY_RENDERED);
          }
          this.decorating_ = true;

          this.decorateInternal();
          this.computeSurfacesCacheStateFromDom_(); // TODO(edu): This optimization seems worth it, analyze it.
          this.renderSurfacesContent_(this.surfaces_); // TODO(edu): Sync surfaces on decorate?

          this.syncAttrs_(this.getAttrNames());

          this.attach();

          this.decorating_ = false;
          this.wasDecorated = true;
          this.wasRendered = true;

          return this;
        }
      },
      disposeInternal: {

        /**
         * @inheritDoc
         */

        value: function disposeInternal() {
          this.detach();

          this.elementEventProxy_.dispose();
          this.elementEventProxy_ = null;

          this.delegateEventHandler_.removeAllListeners();
          this.delegateEventHandler_ = null;

          this.surfaces_ = null;
          this.surfacesRenderAttrs_ = null;
          _get(Object.getPrototypeOf(jspm_packages$github$alloyui$core$master$component$Component$$Component.prototype), "disposeInternal", this).call(this);
        }
      },
      syncAttrs_: {

        /**
         * Fires attributes synchronization changes for attributes.
         * @param {Object.<string, Object>} changes Object containing the attribute
         *     name as key and an object with newVal and prevVal as value.
         * @protected
         */

        value: function syncAttrs_(attrsName) {
          for (var i in attrsName) {
            this.fireAttrChange_(attrsName[i]);
          }
        }
      },
      syncAttrsFromChanges_: {

        /**
         * Fires attributes synchronization changes for attributes.
         * @param {Object.<string, Object>} changes Object containing the attribute
         *     name as key and an object with newVal and prevVal as value.
         * @protected
         */

        value: function syncAttrsFromChanges_(changes) {
          for (var attr in changes) {
            this.fireAttrChange_(attr, changes[attr]);
          }
        }
      },
      fireAttrChange_: {

        /**
         * Fires attribute synchronization change for the attribute.
         * @param {Object.<string, Object>} change Object containing newVal and
         *     prevVal keys.
         * @protected
         */

        value: function fireAttrChange_(attr, opt_change) {
          var fn = this["sync" + attr.charAt(0).toUpperCase() + attr.slice(1)];
          if (jspm_packages$github$alloyui$core$master$core$$default.isFunction(fn)) {
            if (!opt_change) {
              opt_change = {
                newVal: this[attr],
                prevVal: undefined
              };
            }
            fn.call(this, opt_change.newVal, opt_change.prevVal);
          }
        }
      },
      getModifiedSurfacesFromChanges_: {

        /**
         * Gets surfaces that got modified by the specified attributes changes.
         * @param {Object.<string, Object>} changes Object containing the attribute
         *     name as key and an object with newVal and prevVal as value.
         * @return {Object.<string, boolean>} Object containing modified surface ids
         *     as key and true as value.
         */

        value: function getModifiedSurfacesFromChanges_(changes) {
          var surfaces = [];
          for (var attr in changes) {
            surfaces.push(this.surfacesRenderAttrs_[attr]);
          }
          return jspm_packages$github$alloyui$core$master$object$object$$default.mixin.apply(null, surfaces);
        }
      },
      getSurface: {

        /**
         * Gets surface configuration object. If surface is not registered returns
         * null.
         * @param {string} surfaceId The surface id.
         * @return {?Object} The surface configuration object.
         */

        value: function getSurface(surfaceId) {
          return this.surfaces_[surfaceId] || null;
        }
      },
      getSurfaceContent: {

        /**
         * Gets the content for the requested surface. Should be implemented by subclasses.
         * @param {string} surfaceId The surface id.
         * @return {Object|string} The content to be rendered.
         */

        value: function getSurfaceContent() {}
      },
      getSurfaceContent_: {

        /**
         * Gets the content for the requested surface. By default this just calls
         * `getSurfaceContent`, but can be overriden to add more behavior (check
         * `SoyComponent` for an example).
         * @param {string} surfaceId The surface id.
         * @return {Object|string} The content to be rendered.
         * @protected
         */

        value: function getSurfaceContent_(surfaceId) {
          return this.getSurfaceContent(surfaceId);
        }
      },
      getSurfaceElement: {

        /**
         * Queries from the document or creates an element for the surface. Surface
         * elements have its surface id namespaced to the component id, e.g. for a
         * component with id `gallery` and a surface with id `pictures` the surface
         * element will be represented by the id `gallery-pictures`. Surface
         * elements must also be appended to the component element.
         * @param {string} surfaceId The surface id.
         * @return {Element} The surface element or null if surface not registered.
         */

        value: function getSurfaceElement(surfaceId) {
          var surface = this.getSurface(surfaceId);
          if (!surface) {
            return null;
          }
          if (!surface.element) {
            var surfaceElementId = this.makeSurfaceId_(surfaceId);
            surface.element = document.getElementById(surfaceElementId) || this.element.querySelector("#" + surfaceElementId) || this.createSurfaceElement_(surfaceElementId);
          }
          return surface.element;
        }
      },
      getSurfaces: {

        /**
         * A map of surface ids to the respective surface object.
         * @return {!Object}
         */

        value: function getSurfaces() {
          return this.surfaces_;
        }
      },
      handleAttributesChanges_: {

        /**
         * Handles attributes batch changes. Responsible for surface mutations and
         * attributes synchronization.
         * @param {Event} event
         * @protected
         */

        value: function handleAttributesChanges_(event) {
          if (this.inDocument) {
            this.renderSurfacesContent_(this.getModifiedSurfacesFromChanges_(event.changes));
          }
          this.syncAttrsFromChanges_(event.changes);
        }
      },
      makeId_: {

        /**
         * Makes an unique id for the component.
         * @return {string} Unique id.
         * @protected
         */

        value: function makeId_() {
          return "aui_c_" + jspm_packages$github$alloyui$core$master$core$$default.getUid(this);
        }
      },
      makeSurfaceId_: {

        /**
         * Makes the id for the surface scoped by the component.
         * @param {string} surfaceId The surface id.
         * @return {string}
         * @protected
         */

        value: function makeSurfaceId_(surfaceId) {
          return this.id + "-" + surfaceId;
        }
      },
      mergeElementClasses_: {

        /**
         * Merges an array of values for the ELEMENT_CLASSES property into a single object.
         * @param {!Array.<string>} values The values to be merged.
         * @return {!string} The merged value.
         * @protected
         */

        value: function mergeElementClasses_(values) {
          return values.filter(function (val) {
            return val;
          }).join(" ");
        }
      },
      mergeSurfaces_: {

        /**
         * Merges an array of values for the SURFACES property into a single object.
         * @param {!Array} values The values to be merged.
         * @return {!Object} The merged value.
         * @protected
         */

        value: function mergeSurfaces_(values) {
          return jspm_packages$github$alloyui$core$master$object$object$$default.mixin.apply(null, [{}].concat(values.reverse()));
        }
      },
      removeSurface: {

        /**
         * Unregisters a surface and removes its element from the DOM.
         * @param {string} surfaceId The surface id.
         * @chainable
         */

        value: function removeSurface(surfaceId) {
          var el = this.getSurfaceElement(surfaceId);
          if (el && el.parentNode) {
            el.parentNode.removeChild(el);
          }
          delete this.surfaces_[surfaceId];
          return this;
        }
      },
      render: {

        /**
         * Lifecycle. Renders the component into the DOM. Render phase replaces
         * decorate phase, without progressive enhancement support.
         *
         * Render Lifecycle:
         *   render - Decorate is manually called.
         *   renderInternal - Internal implementation for rendering happens.
         *   render surfaces - All surfaces content are rendered.
         *   attribute synchronization - All synchronization methods are called.
         *   attach - Attach Lifecycle is called.
         *
         * @param {(string|Element)=} opt_parentElement Optional parent element
         *     to render the component.
         * @param {(string|Element)=} opt_siblingElement Optional sibling element
         *     to render the component before it. Relevant when the component needs
         *     to be rendered before an existing element in the DOM, e.g.
         *     `component.render(null, existingElement)`.
         * @chainable
         */

        value: function render(opt_parentElement, opt_siblingElement) {
          if (this.wasRendered) {
            throw new Error(jspm_packages$github$alloyui$core$master$component$Component$$Component.Error.ALREADY_RENDERED);
          }

          this.renderInternal();
          this.clearSurfacesCache_();
          this.renderSurfacesContent_(this.surfaces_);

          this.syncAttrs_(this.getAttrNames());

          this.attach(opt_parentElement, opt_siblingElement);

          this.wasRendered = true;

          return this;
        }
      },
      renderElement_: {

        /**
         * Renders the component element into the DOM.
         * @param {(string|Element)=} opt_parentElement Optional parent element
         *     to render the component.
         * @param {(string|Element)=} opt_siblingElement Optional sibling element
         *     to render the component before it. Relevant when the component needs
         *     to be rendered before an existing element in the DOM, e.g.
         *     `component.render(null, existingElement)`.
         * @protected
         */

        value: function renderElement_(opt_parentElement, opt_siblingElement) {
          this.element.id = this.id;
          if (opt_siblingElement || !this.element.parentNode) {
            var parent = jspm_packages$github$alloyui$core$master$dom$dom$$default.toElement(opt_parentElement) || document.body;
            parent.insertBefore(this.element, jspm_packages$github$alloyui$core$master$dom$dom$$default.toElement(opt_siblingElement));
          }
        }
      },
      renderInternal: {

        /**
         * Lifecycle. Internal implementation for rendering. Any extra operation
         * necessary to prepare the component DOM must be implemented in this phase.
         */

        value: function renderInternal() {}
      },
      renderSurfaceContent: {

        /**
         * Render content into a surface. If the specified content is the same of
         * the current surface content, nothing happens. If the surface cache state
         * is not initialized or the content is not eligible for cache or content is
         * different, the surfaces re-renders. It's not recommended to use this
         * method directly since surface content can be provided by
         * `getSurfaceContent(surfaceId)`.
         * @param {string} surfaceId The surface id.
         * @param {Object|string} content The content to be rendered.
         */

        value: function renderSurfaceContent(surfaceId, content) {
          if (jspm_packages$github$alloyui$core$master$core$$default.isDefAndNotNull(content)) {
            var surface = this.getSurface(surfaceId);
            var cacheState = this.computeSurfaceCacheState_(content);

            surface.cacheMiss = cacheState === jspm_packages$github$alloyui$core$master$component$Component$$Component.Cache.NOT_INITIALIZED || cacheState === jspm_packages$github$alloyui$core$master$component$Component$$Component.Cache.NOT_CACHEABLE || cacheState !== surface.cacheState;
            if (surface.cacheMiss) {
              this.replaceSurfaceContent_(surfaceId, content);
            }
            surface.cacheState = cacheState;
          }
        }
      },
      renderSurfacesContent_: {

        /**
         * Renders all surfaces contents ignoring the cache.
         * @param {Object.<string, Object=>} surfaces Object map where the key is
         *     the surface id and value the optional surface configuration.
         * @protected
         */

        value: function renderSurfacesContent_(surfaces) {
          for (var surfaceId in surfaces) {
            this.renderSurfaceContent(surfaceId, this.getSurfaceContent_(surfaceId));
          }
        }
      },
      replaceSurfaceContent_: {

        /**
         * Replaces the content of a surface with a new one.
         * @param {string} surfaceId The surface id.
         * @param {Element|string} content The content to be rendered.
         * @protected
         */

        value: function replaceSurfaceContent_(surfaceId, content) {
          var el = this.getSurfaceElement(surfaceId);
          jspm_packages$github$alloyui$core$master$dom$dom$$default.removeChildren(el);
          jspm_packages$github$alloyui$core$master$dom$dom$$default.append(el, content);
        }
      },
      setterElementFn_: {

        /**
         * Setter logic for element attribute.
         * @param {string|Element} val
         * @return {Element}
         * @protected
         */

        value: function setterElementFn_(val) {
          var element = jspm_packages$github$alloyui$core$master$dom$dom$$default.toElement(val);
          if (!element) {
            element = this.valueElementFn_();
          }
          return element;
        }
      },
      syncElementClasses: {

        /**
         * Attribute synchronization logic for elementClasses attribute.
         * @param {string} newVal
         * @param {string} prevVal
         */

        value: function syncElementClasses(newVal, prevVal) {
          var classesToAdd = this.constructor.ELEMENT_CLASSES_MERGED;
          if (newVal) {
            classesToAdd = classesToAdd + " " + newVal;
          }
          if (prevVal) {
            jspm_packages$github$alloyui$core$master$dom$dom$$default.removeClasses(this.element, prevVal.split(" "));
          }
          jspm_packages$github$alloyui$core$master$dom$dom$$default.addClasses(this.element, classesToAdd.split(" "));
        }
      },
      validatorChildrenFn_: {

        /**
         * Validator logic for `children` element.
         * @param {*} val
         * @return {boolean}
         * @protected
         */

        value: function validatorChildrenFn_(val) {
          return val instanceof Array && val.every(function (component) {
            return component instanceof jspm_packages$github$alloyui$core$master$component$Component$$Component;
          });
        }
      },
      validatorElementFn_: {

        /**
         * Validator logic for element attribute.
         * @param {string|Element} val
         * @return {boolean} True if val is a valid element.
         * @protected
         */

        value: function validatorElementFn_(val) {
          return jspm_packages$github$alloyui$core$master$core$$default.isElement(val) || jspm_packages$github$alloyui$core$master$core$$default.isString(val);
        }
      },
      validatorElementClassesFn_: {

        /**
         * Validator logic for elementClasses attribute.
         * @param {string} val
         * @return {Boolean} True if val is a valid element classes.
         * @protected
         */

        value: function validatorElementClassesFn_(val) {
          return jspm_packages$github$alloyui$core$master$core$$default.isString(val);
        }
      },
      validatorIdFn_: {

        /**
         * Validator logic for id attribute.
         * @param {string} val
         * @return {Boolean} True if val is a valid id.
         * @protected
         */

        value: function validatorIdFn_(val) {
          return jspm_packages$github$alloyui$core$master$core$$default.isString(val);
        }
      },
      valueElementFn_: {

        /**
         * Provides the default value for element attribute.
         * @return {Element} The element.
         * @protected
         */

        value: function valueElementFn_() {
          return document.createElement(this.constructor.ELEMENT_TAG_NAME_MERGED);
        }
      },
      valueIdFn_: {

        /**
         * Provides the default value for id attribute.
         * @return {string} The id.
         * @protected
         */

        value: function valueIdFn_() {
          return this.element.id || this.makeId_();
        }
      }
    });

    return jspm_packages$github$alloyui$core$master$component$Component$$Component;
  })(jspm_packages$github$alloyui$core$master$attribute$Attribute$$default);

  /**
   * Component attributes definition.
   * @type {Object}
   * @static
   */
  jspm_packages$github$alloyui$core$master$component$Component$$Component.ATTRS = {
    /**
     * Child components passed to this component.
     * @type {Array<Component>}
     */
    children: {
      validator: "validatorChildrenFn_",
      valueFn: function valueFn() {
        return [];
      }
    },

    /**
     * Component element bounding box.
     * @type {Element}
     * @initOnly
     */
    element: {
      initOnly: true,
      setter: "setterElementFn_",
      validator: "validatorElementFn_",
      valueFn: "valueElementFn_"
    },

    /**
     * CSS classes to be applied to the element.
     * @type {Array.<string>}
     */
    elementClasses: {
      validator: "validatorElementClassesFn_"
    },

    /**
     * Component element id. If not specified will be generated.
     * @type {string}
     * @initOnly
     */
    id: {
      initOnly: true,
      validator: "validatorIdFn_",
      valueFn: "valueIdFn_"
    }
  };

  /**
   * CSS classes to be applied to the element.
   * @type {string}
   * @protected
   * @static
   */
  jspm_packages$github$alloyui$core$master$component$Component$$Component.ELEMENT_CLASSES = "component";

  /**
   * Element tag name is a string that specifies the type of element to be
   * created. The nodeName of the created element is initialized with the
   * value of tag name.
   * @type {string}
   * @default div
   * @protected
   * @static
   */
  jspm_packages$github$alloyui$core$master$component$Component$$Component.ELEMENT_TAG_NAME = "div";

  /**
   * Surface tag name is a string that specifies the type of element to be
   * created for the surfaces. The nodeName of the created element is
   * initialized with the value of tag name.
   * @type {string}
   * @default div
   * @protected
   * @static
   */
  jspm_packages$github$alloyui$core$master$component$Component$$Component.SURFACE_TAG_NAME = "div";

  /**
   * Cache states for the component.
   * @enum {string}
   */
  jspm_packages$github$alloyui$core$master$component$Component$$Component.Cache = {
    /**
     * Cache is not allowed for this state.
     */
    NOT_CACHEABLE: -1,

    /**
     * Cache not initialized.
     */
    NOT_INITIALIZED: -2
  };

  /**
   * Errors thrown by the component.
   * @enum {string}
   */
  jspm_packages$github$alloyui$core$master$component$Component$$Component.Error = {
    /**
     * Error when the component is already rendered and another render attempt
     * is made.
     */
    ALREADY_RENDERED: "Component already rendered"
  };

  /**
   * A list with attribute names that will automatically be rejected as invalid.
   * @type {!Array<string>}
   */
  jspm_packages$github$alloyui$core$master$component$Component$$Component.INVALID_ATTRS = ["componentName", "components", "elementContent", "ref"];

  var jspm_packages$github$alloyui$core$master$component$Component$$default = jspm_packages$github$alloyui$core$master$component$Component$$Component;
  "use strict";

  var jspm_packages$github$alloyui$core$master$component$ComponentCollector$$ComponentCollector = (function (_jspm_packages$github$alloyui$core$master$disposable$Disposable$$default6) {
    function jspm_packages$github$alloyui$core$master$component$ComponentCollector$$ComponentCollector(element) {
      _classCallCheck(this, jspm_packages$github$alloyui$core$master$component$ComponentCollector$$ComponentCollector);

      _get(Object.getPrototypeOf(jspm_packages$github$alloyui$core$master$component$ComponentCollector$$ComponentCollector.prototype), "constructor", this).call(this);

      /**
       * Holds the extracted components, indexed by id.
       * @type {!Object<string, !Component>}
       * @protected
       */
      this.components_ = {};

      /**
       * DOM element to search for component placeholders in.
       * @type {!Element}
       * @protected
       */
      this.element_ = element;

      /**
       * Holds a map of component ids that indicate if each component has already
       * been extracted as a subcomponent on this call to `extractComponents`.
       * @type {!Object<string, boolean>}
       * @protected
       */
      this.extractedSubComponents_ = {};

      /**
       * Holds the root extracted components (that is, components that are
       * not children of other extracted components), indexed by id.
       * @type {!Object<string, !Component>}
       * @protected
       */
      this.rootComponents_ = {};

      /**
       * Flag indicating if new components should be decorated instead of
       * rendered.
       * @type {boolean}
       * @protected
       */
      this.shouldDecorate_ = false;
    }

    _inherits(jspm_packages$github$alloyui$core$master$component$ComponentCollector$$ComponentCollector, _jspm_packages$github$alloyui$core$master$disposable$Disposable$$default6);

    _createClass(jspm_packages$github$alloyui$core$master$component$ComponentCollector$$ComponentCollector, {
      createComponent_: {

        /**
         * Creates a component instance.
         * @param {string} id The component id.
         * @param {string} name The component name.
         * @param {!Object} data The component config data.
         * @return {!Component} The created component instance.
         * @protected
         */

        value: function createComponent_(id, name, data) {
          var ConstructorFn = jspm_packages$github$alloyui$core$master$component$ComponentRegistry$$default.getConstructor(name);
          data.element = data.element ? data.element : "#" + id;
          this.components_[id] = new ConstructorFn(data);
          return this.components_[id];
        }
      },
      createRootComponent_: {

        /**
         * Creates a root component instance.
         * @param {string} id The component id.
         * @param {string} name The component name.
         * @param {!Object} data The component config data.
         * @param {Element} element The component's element.
         * @protected
         */

        value: function createRootComponent_(id, name, data, element) {
          data.element = element;
          this.rootComponents_[id] = this.createComponent_(id, name, data);

          if (this.shouldDecorate_ && element.childNodes.length > 0) {
            this.rootComponents_[id].decorate();
          } else {
            this.rootComponents_[id].render();
          }
        }
      },
      getComponents: {

        /**
         * Gets all the extracted components.
         * @return {!Array<!Component>}
         */

        value: function getComponents() {
          return this.components_;
        }
      },
      getRootComponents: {

        /**
         * Gets all the root extracted components.
         * @return {!Array<!Component>}
         */

        value: function getRootComponents() {
          return this.rootComponents_;
        }
      },
      extractComponents: {

        /**
         * Extracts components according, looking for elements with the appropriate
         * ids on the document, and creating component instances tied to those.
         * @param {!Object<string, !Object>} componentData An object with creation
         *   data for components that may be found inside the element, indexed by
         *   their ids.
         */

        value: function extractComponents(componentData) {
          var id;
          this.extractedSubComponents_ = {};

          for (id in componentData) {
            this.extractSubcomponents(componentData[id], componentData);
          }
          for (id in componentData) {
            if (!this.extractedSubComponents_[id]) {
              var element = document.getElementById(id) || this.element_.querySelector("#" + id);
              if (element) {
                this.extractRootComponent_(element, componentData);
              }
            }
          }
        }
      },
      extractRootComponent_: {

        /**
         * Extracts a component from the given element.
         * @param {!Element} element Element that represents a component that should
         *   be extracted.
         * @param {!Object<string, !Object>} componentData An object with creation
         *   data for components that may be found inside the element, indexed by
         *   their ids.
         * @protected
         */

        value: function extractRootComponent_(element, componentData) {
          var id = element.id;
          var data = componentData[id];

          if (this.components_[id]) {
            this.updateRootComponent_(id, data.data, element);
          } else {
            this.createRootComponent_(id, data.componentName, data.data, element);
          }
        }
      },
      extractSubcomponent_: {

        /**
         * Handles a subcomponent, creating it for the first time or updating it in
         * case it doesn't exist yet.
         * @param {!Object} data The subcomponent's template call data.
         * @param {!Object<string, !Object>} componentData An object with creation
         *   data for components that may be found inside the element, indexed by
         *   their ids.
         * @return {!Component} The subcomponent's instance.
         * @protected
         */

        value: function extractSubcomponent_(data, componentData) {
          this.extractSubcomponents(data, componentData);

          var id = data.data.id;
          var component = this.components_[id];
          if (component) {
            component.setAttrs(data.data);
          } else {
            component = this.createComponent_(id, data.componentName, data.data);
            delete this.rootComponents_[id];
          }
          this.extractedSubComponents_[id] = true;
          return component;
        }
      },
      extractSubcomponents: {

        /**
         * Converts values in the given data object to arrays of components, when
         * possible.
         * @param {!Object} data The subcomponent's template call data.
         * @param {!Object<string, !Object>} componentData An object with creation
         *   data for components that may be found inside the element, indexed by
         *   their ids.
         */

        value: function extractSubcomponents(data, componentData) {
          for (var key in data.data) {
            if (this.shouldExtractSubcomponents_(data.data[key])) {
              data.data[key] = this.extractSubcomponentsFromString_(data.data[key], componentData);
            }
          }
        }
      },
      extractSubcomponentsFromString_: {

        /**
         * Handles the given string of rendered templates, converting them to
         * component instances.
         * @param {string} renderedComponents Rendered components.
         * @param {!Object<string, !Object>} componentData An object with creation
         *   data for components that may be found inside the element, indexed by
         *   their ids.
         * @return {string|!Array<!Component>} [description]
         * @protected
         */

        value: function extractSubcomponentsFromString_(renderedComponents, componentData) {
          var components = [];
          var frag = jspm_packages$github$alloyui$core$master$dom$dom$$default.buildFragment(renderedComponents);
          var ignored = false;
          for (var i = 0; i < frag.childNodes.length; i++) {
            var node = frag.childNodes[i];
            if (jspm_packages$github$alloyui$core$master$core$$default.isElement(node) && node.hasAttribute("data-component") && node.id) {
              components.push(this.extractSubcomponent_(componentData[node.id], componentData));
            } else {
              ignored = true;
            }
          }

          if (components.length) {
            if (ignored) {
              console.warn("One or more HTML nodes were ignored when extracting components. " + "Only nodes with both the id and the data-component attribute set are valid.");
            }
            return components;
          } else {
            return renderedComponents;
          }
        }
      },
      setShouldDecorate: {

        /**
         * Sets the flag that indicates if new components should be decorated instead
         * of rendered.
         * @param {boolean} shouldDecorate
         */

        value: function setShouldDecorate(shouldDecorate) {
          this.shouldDecorate_ = shouldDecorate;
        }
      },
      shouldExtractSubcomponents_: {

        /**
         * Checks if the given value has sub components that should be extracted.
         * @param {*} value
         * @return {boolean}
         */

        value: function shouldExtractSubcomponents_(value) {
          return jspm_packages$github$alloyui$core$master$core$$default.isString(value) && value.indexOf("data-component") !== -1;
        }
      },
      updateRootComponent_: {

        /**
         * Updates a root component's data and parentNode.
         * @param {string} id The component's id.
         * @param {!Object} data The component's data.
         * @param {Element} element The element indicating the position the component
         *   should be at.
         * @protected
         */

        value: function updateRootComponent_(id, data, element) {
          var component = this.components_[id];
          if (component.element !== element) {
            element.parentNode.insertBefore(component.element, element);
            element.parentNode.removeChild(element);
          }
          component.setAttrs(data);
        }
      }
    });

    return jspm_packages$github$alloyui$core$master$component$ComponentCollector$$ComponentCollector;
  })(jspm_packages$github$alloyui$core$master$disposable$Disposable$$default);

  var jspm_packages$github$alloyui$core$master$component$ComponentCollector$$default = jspm_packages$github$alloyui$core$master$component$ComponentCollector$$ComponentCollector;
  "use strict";

  /**
   * Collects inline events from a passed element, detaching previously
   * attached events that are not being used anymore.
   * @param {Component} component
   * @constructor
   * @extends {Disposable}
   */

  var jspm_packages$github$alloyui$core$master$component$EventsCollector$$EventsCollector = (function (_jspm_packages$github$alloyui$core$master$disposable$Disposable$$default7) {
    function jspm_packages$github$alloyui$core$master$component$EventsCollector$$EventsCollector(component) {
      _classCallCheck(this, jspm_packages$github$alloyui$core$master$component$EventsCollector$$EventsCollector);

      _get(Object.getPrototypeOf(jspm_packages$github$alloyui$core$master$component$EventsCollector$$EventsCollector.prototype), "constructor", this).call(this);

      if (!component) {
        throw new Error("The component instance is mandatory");
      }

      /**
       * Holds the component intance.
       * @type {!Component}
       * @protected
       */
      this.component_ = component;

      /**
       * Holds the attached delegate event handles, indexed by the css selector.
       * @type {!Object<string, !DomEventHandle>}
       * @protected
       */
      this.eventHandles_ = {};

      /**
       * Holds the number of extracted listeners, indexed by the listener's css selector.
       * @type {!Object<string, number>}
       * @protected
       */
      this.listenerCounts_ = {};
    }

    _inherits(jspm_packages$github$alloyui$core$master$component$EventsCollector$$EventsCollector, _jspm_packages$github$alloyui$core$master$disposable$Disposable$$default7);

    _createClass(jspm_packages$github$alloyui$core$master$component$EventsCollector$$EventsCollector, {
      attachListener_: {

        /**
         * Attaches the listener described by the given params, unless it has already
         * been attached.
         * @param {string} eventType
         * @param {string} fnName
         * @protected
         */

        value: function attachListener_(eventType, fnName) {
          var selector = "[data-on" + eventType + "=\"" + fnName + "\"]";
          this.listenerCounts_[selector] = (this.listenerCounts_[selector] || 0) + 1;
          if (!this.eventHandles_[selector]) {
            var fn = this.component_[fnName].bind(this.component_);
            this.eventHandles_[selector] = this.component_.delegate(eventType, selector, fn);
          }
        }
      },
      attachListeners: {

        /**
         * Attaches all listeners declared as attributes on the given element and
         * its children.
         * @param {string} content
         */

        value: function attachListeners(content) {
          this.listenerCounts_ = {};
          this.attachListenersFromHtml_(content);
          this.detachUnusedListeners_();
        }
      },
      attachListenersFromHtml_: {

        /**
         * Attaches listeners found in the given html content.
         * @param {string} content
         * @protected
         */

        value: function attachListenersFromHtml_(content) {
          var regex = /data-on([a-z]+)=['|"](\w+)['|"]/g;
          var match = regex.exec(content);
          while (match) {
            this.attachListener_(match[1], match[2]);
            match = regex.exec(content);
          }
        }
      },
      detachAllListeners: {

        /**
         * Removes all previously attached event listeners to the component.
         */

        value: function detachAllListeners() {
          for (var selector in this.eventHandles_) {
            if (this.eventHandles_[selector]) {
              this.eventHandles_[selector].removeListener();
            }
          }
          this.eventHandles_ = {};
          this.listenerCounts_ = {};
        }
      },
      detachUnusedListeners_: {

        /**
         * Detaches all existing listeners that are not being used anymore.
         * @protected
         */

        value: function detachUnusedListeners_() {
          for (var selector in this.eventHandles_) {
            if (!this.listenerCounts_[selector]) {
              this.eventHandles_[selector].removeListener();
              this.eventHandles_[selector] = null;
            }
          }
        }
      },
      disposeInternal: {

        /**
         * @inheritDoc
         */

        value: function disposeInternal() {
          this.detachAllListeners();
          this.component_ = null;
        }
      }
    });

    return jspm_packages$github$alloyui$core$master$component$EventsCollector$$EventsCollector;
  })(jspm_packages$github$alloyui$core$master$disposable$Disposable$$default);

  var jspm_packages$github$alloyui$core$master$component$EventsCollector$$default = jspm_packages$github$alloyui$core$master$component$EventsCollector$$EventsCollector;
  var jspm_packages$github$alloyui$core$master$soy$SoyComponent$soy$$Templates = jspm_packages$github$alloyui$core$master$component$ComponentRegistry$$default.Templates;
  // This file was automatically generated from SoyComponent.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace Templates.SoyComponent.
   * @hassoydeltemplate {Component}
   * @hassoydeltemplate {ComponentChildren}
   * @hassoydeltemplate {ComponentElement}
   * @hassoydelcall {ComponentElement}
   * @hassoydelcall {ComponentTemplate}
   */

  if (typeof jspm_packages$github$alloyui$core$master$soy$SoyComponent$soy$$Templates.SoyComponent == "undefined") {
    jspm_packages$github$alloyui$core$master$soy$SoyComponent$soy$$Templates.SoyComponent = {};
  }

  /**
   * @param {Object.<string, *>=} opt_data
   * @param {(null|undefined)=} opt_ignored
   * @param {Object.<string, *>=} opt_ijData
   * @return {!soydata.SanitizedHtml}
   * @suppress {checkTypes}
   */
  jspm_packages$github$alloyui$core$master$soy$SoyComponent$soy$$Templates.SoyComponent.component = function (opt_data, opt_ignored, opt_ijData) {
    return soydata.VERY_UNSAFE.ordainSanitizedHtml(opt_ijData.renderChildComponents ? soy.$$escapeHtml(soy.$$getDelegateFn(soy.$$getDelTemplateId("ComponentTemplate"), opt_data.componentName, true)(opt_data, null, opt_ijData)) : soy.$$getDelegateFn(soy.$$getDelTemplateId("ComponentElement"), opt_data.componentName, true)(opt_data, null, opt_ijData));
  };
  if (goog.DEBUG) {
    jspm_packages$github$alloyui$core$master$soy$SoyComponent$soy$$Templates.SoyComponent.component.soyTemplateName = "Templates.SoyComponent.component";
  }

  /**
   * @param {Object.<string, *>=} opt_data
   * @param {(null|undefined)=} opt_ignored
   * @param {Object.<string, *>=} opt_ijData
   * @return {!soydata.SanitizedHtml}
   * @suppress {checkTypes}
   */
  jspm_packages$github$alloyui$core$master$soy$SoyComponent$soy$$Templates.SoyComponent.__deltemplate_s8_0084916f = function (opt_data, opt_ignored, opt_ijData) {
    return soydata.VERY_UNSAFE.ordainSanitizedHtml(jspm_packages$github$alloyui$core$master$soy$SoyComponent$soy$$Templates.SoyComponent.component(opt_data, null, opt_ijData));
  };
  if (goog.DEBUG) {
    jspm_packages$github$alloyui$core$master$soy$SoyComponent$soy$$Templates.SoyComponent.__deltemplate_s8_0084916f.soyTemplateName = "Templates.SoyComponent.__deltemplate_s8_0084916f";
  }
  soy.$$registerDelegateFn(soy.$$getDelTemplateId("Component"), "", 0, jspm_packages$github$alloyui$core$master$soy$SoyComponent$soy$$Templates.SoyComponent.__deltemplate_s8_0084916f);

  /**
   * @param {Object.<string, *>=} opt_data
   * @param {(null|undefined)=} opt_ignored
   * @param {Object.<string, *>=} opt_ijData
   * @return {!soydata.SanitizedHtml}
   * @suppress {checkTypes}
   */
  jspm_packages$github$alloyui$core$master$soy$SoyComponent$soy$$Templates.SoyComponent.__deltemplate_s10_26860e4b = function (opt_data, opt_ignored, opt_ijData) {
    return soydata.VERY_UNSAFE.ordainSanitizedHtml("<div id=\"" + soy.$$escapeHtmlAttribute(opt_data.id) + "-children-placeholder\" data-component-children>" + (opt_ijData.renderChildComponents ? soy.$$escapeHtml(opt_data.children) : "") + "</div>");
  };
  if (goog.DEBUG) {
    jspm_packages$github$alloyui$core$master$soy$SoyComponent$soy$$Templates.SoyComponent.__deltemplate_s10_26860e4b.soyTemplateName = "Templates.SoyComponent.__deltemplate_s10_26860e4b";
  }
  soy.$$registerDelegateFn(soy.$$getDelTemplateId("ComponentChildren"), "", 0, jspm_packages$github$alloyui$core$master$soy$SoyComponent$soy$$Templates.SoyComponent.__deltemplate_s10_26860e4b);

  /**
   * @param {Object.<string, *>=} opt_data
   * @param {(null|undefined)=} opt_ignored
   * @param {Object.<string, *>=} opt_ijData
   * @return {!soydata.SanitizedHtml}
   * @suppress {checkTypes}
   */
  jspm_packages$github$alloyui$core$master$soy$SoyComponent$soy$$Templates.SoyComponent.__deltemplate_s18_40718f6d = function (opt_data, opt_ignored, opt_ijData) {
    return soydata.VERY_UNSAFE.ordainSanitizedHtml("<div id=\"" + soy.$$escapeHtmlAttribute(opt_data.id) + "\" class=\"" + soy.$$escapeHtmlAttribute(opt_data.elementClasses ? opt_data.elementClasses : "") + "\" data-component>" + (opt_data.elementContent ? soy.$$escapeHtml(opt_data.elementContent) : "") + "</div>");
  };
  if (goog.DEBUG) {
    jspm_packages$github$alloyui$core$master$soy$SoyComponent$soy$$Templates.SoyComponent.__deltemplate_s18_40718f6d.soyTemplateName = "Templates.SoyComponent.__deltemplate_s18_40718f6d";
  }
  soy.$$registerDelegateFn(soy.$$getDelTemplateId("ComponentElement"), "", 0, jspm_packages$github$alloyui$core$master$soy$SoyComponent$soy$$Templates.SoyComponent.__deltemplate_s18_40718f6d);

  "use strict";

  /**
   * We need to listen to calls to the SoyComponent template so we can use them to
   * properly instantiate and update child components defined through soy.
   * TODO: Switch to using proper AOP.
   */
  var jspm_packages$github$alloyui$core$master$soy$SoyComponent$$originalTemplate = jspm_packages$github$alloyui$core$master$component$ComponentRegistry$$default.Templates.SoyComponent.component;

  /**
   * Special Component class that handles a better integration between soy templates
   * and the components. It allows for automatic rendering of surfaces that have soy
   * templates defined with their names, skipping the call to `getSurfaceContent`.
   * @param {Object} opt_config An object with the initial values for this component's
   *   attributes.
   * @constructor
   * @extends {Component}
   */

  var jspm_packages$github$alloyui$core$master$soy$SoyComponent$$SoyComponent = (function (_jspm_packages$github$alloyui$core$master$component$Component$$default) {
    function jspm_packages$github$alloyui$core$master$soy$SoyComponent$$SoyComponent(opt_config) {
      _classCallCheck(this, jspm_packages$github$alloyui$core$master$soy$SoyComponent$$SoyComponent);

      jspm_packages$github$alloyui$core$master$core$$default.mergeSuperClassesProperty(this.constructor, "TEMPLATES", this.mergeTemplates_);
      _get(Object.getPrototypeOf(jspm_packages$github$alloyui$core$master$soy$SoyComponent$$SoyComponent.prototype), "constructor", this).call(this, opt_config);

      /**
       * Holds a `ComponentCollector` that will extract inner components.
       * @type {!ComponentCollector}
       * @protected
       */
      this.componentCollector_ = new jspm_packages$github$alloyui$core$master$component$ComponentCollector$$default(this.element);

      /**
       * Gets all nested components.
       * @type {!Array<!Component>}
       */
      this.components = null;

      /**
       * Holds events that were listened through the element.
       * @type {!EventHandler}
       * @protected
       */
      this.eventsCollector_ = new jspm_packages$github$alloyui$core$master$component$EventsCollector$$default(this);

      /**
       * Stores the arguments that were passed to the last call to the
       * SoyComponent template for each component instance (mapped by its id).
       * @type {!Object}
       * @protected
       */
      this.componentsInterceptedData_ = {};

      this.addSurfacesFromTemplates_();
    }

    _inherits(jspm_packages$github$alloyui$core$master$soy$SoyComponent$$SoyComponent, _jspm_packages$github$alloyui$core$master$component$Component$$default);

    _createClass(jspm_packages$github$alloyui$core$master$soy$SoyComponent$$SoyComponent, {
      addSurfacesFromTemplates_: {

        /**
         * Adds surfaces for each registered template that is not named `element`.
         * @protected
         */

        value: function addSurfacesFromTemplates_() {
          var templates = this.constructor.TEMPLATES_MERGED;
          for (var templateName in templates) {
            if (templateName !== "content" && templateName.substr(0, 13) !== "__deltemplate") {

              var surface = this.getSurface(templateName);
              if (!surface) {
                this.addSurface(templateName, {
                  renderAttrs: templates[templateName].params
                });
              }
            }
          }
        }
      },
      attach: {

        /**
         * @inheritDoc
         * @override
         */

        value: function attach(opt_parentElement, opt_siblingElement) {
          if (this.decorating_) {
            // We need to call the element soy template function when the component
            // is being decorated, even though we won't use its results. This call is
            // only needed in order for us tointercept the call data for nested components.
            this.renderElementTemplate();
            this.componentCollector_.setShouldDecorate(true);
          }

          this.componentCollector_.extractComponents(this.componentsInterceptedData_);
          this.componentCollector_.setShouldDecorate(false);

          _get(Object.getPrototypeOf(jspm_packages$github$alloyui$core$master$soy$SoyComponent$$SoyComponent.prototype), "attach", this).call(this, opt_parentElement, opt_siblingElement);
          this.componentsInterceptedData_ = {};
          this.attachInlineListeners_();

          return this;
        }
      },
      attachInlineListeners_: {

        /**
         * Attaches inline listeners to the main element.
         * @protected
         */

        value: function attachInlineListeners_() {
          this.eventsCollector_.attachListeners(this.element.outerHTML);
        }
      },
      compressHtmlForCache_: {

        /**
         * Overrides the method that compresses html for caching, so that it now
         * first empties all nested component placeholders before compressing.
         * @param {string} htmlString The html to be compressed.
         * @return {string} The compressed html.
         * @protected
         * @override
         */

        value: function compressHtmlForCache_(htmlString) {
          htmlString = jspm_packages$github$alloyui$core$master$html$html$$default.removeElementContent(htmlString, " data-component");
          htmlString = jspm_packages$github$alloyui$core$master$html$html$$default.removeElementContent(htmlString, " data-component-children");
          return _get(Object.getPrototypeOf(jspm_packages$github$alloyui$core$master$soy$SoyComponent$$SoyComponent.prototype), "compressHtmlForCache_", this).call(this, htmlString);
        }
      },
      decorateChildren_: {

        /**
         * Calls decorate on all children components, setting their element
         * attribute to the appropriate element inside the children placeholder.
         * @param {!Element} placeholder Placeholder where the children should be
         *   rendered.
         * @param {!Array<!Component>} children An array of children components.
         * @return {boolean}
         */

        value: function decorateChildren_(placeholder, children) {
          children.forEach(function (child) {
            child.decorate();
          });
        }
      },
      detach: {

        /**
         * @inheritDoc
         * @override
         */

        value: function detach() {
          this.eventsCollector_.detachAllListeners();
          _get(Object.getPrototypeOf(jspm_packages$github$alloyui$core$master$soy$SoyComponent$$SoyComponent.prototype), "detach", this).call(this);
          return this;
        }
      },
      getComponents_: {

        /**
         * Gets all nested components.
         * @return {!Array<!Component>}
         * @protected
         */

        value: function getComponents_() {
          return this.componentCollector_.getComponents();
        }
      },
      getSurfaceContent_: {

        /**
         * Overrides the default behavior so that this can automatically render
         * the appropriate soy template when one exists.
         * @param {string} surfaceId The surface id.
         * @return {Object|string} The content to be rendered.
         * @protected
         * @override
         */

        value: function getSurfaceContent_(surfaceId) {
          var surfaceTemplate = this.constructor.TEMPLATES_MERGED[surfaceId];
          if (jspm_packages$github$alloyui$core$master$core$$default.isFunction(surfaceTemplate)) {
            return this.renderTemplate_(surfaceTemplate);
          } else {
            return _get(Object.getPrototypeOf(jspm_packages$github$alloyui$core$master$soy$SoyComponent$$SoyComponent.prototype), "getSurfaceContent_", this).call(this, surfaceId);
          }
        }
      },
      handleTemplateCall_: {

        /**
         * Handles a call to the SoyComponent template.
         * @param {!Object} data The data the template was called with.
         * @return {string} The original return value of the template.
         */

        value: function handleTemplateCall_(data) {
          var callData = {
            componentName: data.componentName
          };
          callData.data = this.normalizeTemplateCallData_(data);
          this.componentsInterceptedData_[data.id] = callData;
          return jspm_packages$github$alloyui$core$master$soy$SoyComponent$$originalTemplate.apply(jspm_packages$github$alloyui$core$master$soy$SoyComponent$$originalTemplate, arguments);
        }
      },
      mergeTemplates_: {

        /**
         * Merges an array of values for the `TEMPLATES` property into a single object.
         * @param {!Array} values The values to be merged.
         * @return {!Object} The merged value.
         * @protected
         */

        value: function mergeTemplates_(values) {
          return jspm_packages$github$alloyui$core$master$object$object$$default.mixin.apply(null, [{}].concat(values.reverse()));
        }
      },
      normalizeTemplateCallData_: {

        /**
         * Normalizes a template's call data, converting special soy objects
         * into html strings. This function doesn't change the original data
         * object.
         * @param {!Object} data
         * @return {!Object}
         */

        value: function normalizeTemplateCallData_(data) {
          data = jspm_packages$github$alloyui$core$master$object$object$$default.mixin({}, data, {
            componentName: null
          });
          for (var key in data) {
            if (data[key] instanceof soydata.SanitizedHtml) {
              data[key] = data[key].content;
            }
          }
          return data;
        }
      },
      renderChildrenComponents_: {

        /**
         * Renders this component's child components, if their placeholder is found.
         * @protected
         * TODO(edu): Re-think this part.
         */

        value: function renderChildrenComponents_() {
          var placeholder = this.element.querySelector("#" + this.makeSurfaceId_("children-placeholder"));
          if (placeholder) {
            var children = this.children;
            if (this.shouldDecorateChildren_(placeholder)) {
              this.decorateChildren_(placeholder, children);
              return;
            }

            jspm_packages$github$alloyui$core$master$dom$dom$$default.removeChildren(placeholder);
            children.forEach(function (child) {
              if (child.wasRendered) {
                jspm_packages$github$alloyui$core$master$dom$dom$$default.append(placeholder, child.element);
              } else {
                child.render(placeholder);
              }
            });
          }
        }
      },
      renderInternal: {

        /**
         * Overrides the behavior of this method to automatically render the element
         * template if it's defined and to automatically attach listeners to all
         * specified events by the user in the template. Also handles any calls to
         * component templates.
         * @override
         */

        value: function renderInternal() {
          var templateContent = this.renderElementTemplate();
          if (templateContent) {
            jspm_packages$github$alloyui$core$master$dom$dom$$default.append(this.element, templateContent);
          }
        }
      },
      renderSurfaceContent: {

        /**
         * Overrides the default behavior of `renderSurfaceContent` to also
         * handle calls to component templates done by the surface's template.
         * @param {string} surfaceId The surface id.
         * @param {Object|string} content The content to be rendered.
         * @override
         */

        value: function renderSurfaceContent(surfaceId, content) {
          _get(Object.getPrototypeOf(jspm_packages$github$alloyui$core$master$soy$SoyComponent$$SoyComponent.prototype), "renderSurfaceContent", this).call(this, surfaceId, content);

          if (this.inDocument) {
            if (this.getSurface(surfaceId).cacheMiss) {
              this.componentCollector_.extractComponents(this.componentsInterceptedData_);
            }
          }
        }
      },
      renderSurfacesContent_: {

        /**
         * @inheritDoc
         */

        value: function renderSurfacesContent_(surfaces) {
          _get(Object.getPrototypeOf(jspm_packages$github$alloyui$core$master$soy$SoyComponent$$SoyComponent.prototype), "renderSurfacesContent_", this).call(this, surfaces);

          if (this.inDocument) {
            this.setComponentsAttrs_();
            this.componentsInterceptedData_ = {};
            this.attachInlineListeners_();
          }
          // TODO(edu): Moves assignment to be a getter Attribute instead.
          this.components = this.getComponents_();
        }
      },
      renderElementTemplate: {

        /**
         * Renders the main element's template.
         * @return {?string} The template's result content, or undefined if the
         *   template doesn't exist.
         */

        value: function renderElementTemplate() {
          var elementTemplate = this.constructor.TEMPLATES_MERGED.content;
          if (jspm_packages$github$alloyui$core$master$core$$default.isFunction(elementTemplate)) {
            return this.renderTemplate_(elementTemplate);
          }
        }
      },
      renderTemplate_: {

        /**
         * Renders the specified template.
         * @param {!function()} templateFn [description]
         * @return {string} The template's result content.
         */

        value: function renderTemplate_(templateFn) {
          jspm_packages$github$alloyui$core$master$component$ComponentRegistry$$default.Templates.SoyComponent.component = this.handleTemplateCall_.bind(this);
          var content = templateFn(this, null, {}).content;
          jspm_packages$github$alloyui$core$master$component$ComponentRegistry$$default.Templates.SoyComponent.component = jspm_packages$github$alloyui$core$master$soy$SoyComponent$$originalTemplate;
          return content;
        }
      },
      setComponentsAttrs_: {

        /**
         * Updates all inner components with their last template call data.
         * @protected
         */

        value: function setComponentsAttrs_() {
          var rootComponents = this.componentCollector_.getRootComponents();
          for (var id in rootComponents) {
            var data = this.componentsInterceptedData_[id];
            if (data) {
              this.componentCollector_.extractSubcomponents(data, this.componentsInterceptedData_);
              if (rootComponents[data.data.id]) {
                rootComponents[data.data.id].setAttrs(data.data);
              }
            }
          }
        }
      },
      shouldDecorateChildren_: {

        /**
         * Checks if children components should be decorated. Returns true when this
         * component is being decorated and the placeholder contents match the number
         * of children.
         * @param {!Element} placeholder Placeholder where the children should be
         *   rendered.
         * @return {boolean}
         */

        value: function shouldDecorateChildren_(placeholder) {
          return this.decorating_ && placeholder.childNodes.length > 0;
        }
      },
      syncChildren: {

        /**
         * Syncs the component according to the new value of the `children` attribute.
         */

        value: function syncChildren(newVal, prevVal) {
          if (!jspm_packages$github$alloyui$core$master$array$array$$default.equal(newVal, prevVal || [])) {
            this.renderChildrenComponents_();
          }
        }
      },
      valueElementFn_: {

        /**
         * Provides the default value for element attribute.
         * @return {Element} The element.
         * @protected
         */

        value: function valueElementFn_() {
          var templateFn = soy.$$getDelegateFn(this.constructor.NAME, "element");
          if (!templateFn) {
            return _get(Object.getPrototypeOf(jspm_packages$github$alloyui$core$master$soy$SoyComponent$$SoyComponent.prototype), "valueElementFn_", this).call(this);
          }

          var frag = jspm_packages$github$alloyui$core$master$dom$dom$$default.buildFragment(this.renderTemplate_(templateFn));
          var element = frag.childNodes[0];

          // Remove element from fragment, so it won't have a parent. Otherwise,
          // the `attach` method will think that the element has already been
          // attached.
          frag.removeChild(element);

          return element;
        }
      },
      valueIdFn_: {

        /**
         * @inheritDocs
         */

        value: function valueIdFn_() {
          if (!this.element) {
            return this.makeId_();
          }
          return _get(Object.getPrototypeOf(jspm_packages$github$alloyui$core$master$soy$SoyComponent$$SoyComponent.prototype), "valueIdFn_", this).call(this);
        }
      }
    });

    return jspm_packages$github$alloyui$core$master$soy$SoyComponent$$SoyComponent;
  })(jspm_packages$github$alloyui$core$master$component$Component$$default);

  /**
   * The soy templates for this component. Templates that have the same
   * name of a registered surface will be used for automatically rendering
   * it.
   * @type {Object<string, !function(Object):Object>}
   * @protected
   * @static
   */
  jspm_packages$github$alloyui$core$master$soy$SoyComponent$$SoyComponent.TEMPLATES = {};

  var jspm_packages$github$alloyui$core$master$soy$SoyComponent$$default = jspm_packages$github$alloyui$core$master$soy$SoyComponent$$SoyComponent;
  var lib$scripts$modal$soy$$Templates = jspm_packages$github$alloyui$core$master$component$ComponentRegistry$$default.Templates;
  // This file was automatically generated from modal.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace Templates.Modal.
   * @hassoydeltemplate {ComponentElement}
   * @hassoydeltemplate {ComponentTemplate}
   * @hassoydeltemplate {Modal}
   * @hassoydeltemplate {Modal.body}
   * @hassoydeltemplate {Modal.footer}
   * @hassoydeltemplate {Modal.header}
   * @hassoydelcall {Component}
   * @hassoydelcall {ComponentElement}
   * @hassoydelcall {Modal}
   * @hassoydelcall {Modal.body}
   * @hassoydelcall {Modal.footer}
   * @hassoydelcall {Modal.header}
   */

  if (typeof lib$scripts$modal$soy$$Templates.Modal == "undefined") {
    lib$scripts$modal$soy$$Templates.Modal = {};
  }

  /**
   * @param {Object.<string, *>=} opt_data
   * @param {(null|undefined)=} opt_ignored
   * @param {Object.<string, *>=} opt_ijData
   * @return {!soydata.SanitizedHtml}
   * @suppress {checkTypes}
   */
  lib$scripts$modal$soy$$Templates.Modal.content = function (opt_data, opt_ignored, opt_ijData) {
    return soydata.VERY_UNSAFE.ordainSanitizedHtml(soy.$$getDelegateFn(soy.$$getDelTemplateId("Modal.header"), "", true)(opt_data, null, opt_ijData) + soy.$$getDelegateFn(soy.$$getDelTemplateId("Modal.body"), "", true)(opt_data, null, opt_ijData) + soy.$$getDelegateFn(soy.$$getDelTemplateId("Modal.footer"), "", true)(opt_data, null, opt_ijData));
  };
  if (goog.DEBUG) {
    lib$scripts$modal$soy$$Templates.Modal.content.soyTemplateName = "Templates.Modal.content";
  }

  /**
   * @param {Object.<string, *>=} opt_data
   * @param {(null|undefined)=} opt_ignored
   * @param {Object.<string, *>=} opt_ijData
   * @return {!soydata.SanitizedHtml}
   * @suppress {checkTypes}
   */
  lib$scripts$modal$soy$$Templates.Modal.body = function (opt_data, opt_ignored, opt_ijData) {
    return soydata.VERY_UNSAFE.ordainSanitizedHtml(opt_data.body ? soy.$$escapeHtml(opt_data.body) : "");
  };
  if (goog.DEBUG) {
    lib$scripts$modal$soy$$Templates.Modal.body.soyTemplateName = "Templates.Modal.body";
  }

  /**
   * @param {Object.<string, *>=} opt_data
   * @param {(null|undefined)=} opt_ignored
   * @param {Object.<string, *>=} opt_ijData
   * @return {!soydata.SanitizedHtml}
   * @suppress {checkTypes}
   */
  lib$scripts$modal$soy$$Templates.Modal.footer = function (opt_data, opt_ignored, opt_ijData) {
    return soydata.VERY_UNSAFE.ordainSanitizedHtml(opt_data.footer ? soy.$$escapeHtml(opt_data.footer) : "");
  };
  if (goog.DEBUG) {
    lib$scripts$modal$soy$$Templates.Modal.footer.soyTemplateName = "Templates.Modal.footer";
  }

  /**
   * @param {Object.<string, *>=} opt_data
   * @param {(null|undefined)=} opt_ignored
   * @param {Object.<string, *>=} opt_ijData
   * @return {!soydata.SanitizedHtml}
   * @suppress {checkTypes}
   */
  lib$scripts$modal$soy$$Templates.Modal.header = function (opt_data, opt_ignored, opt_ijData) {
    return soydata.VERY_UNSAFE.ordainSanitizedHtml(opt_data.header ? "<a class=\"modal-close icon-12-close-long\" data-onclick=\"close\"></a>" + soy.$$escapeHtml(opt_data.header) : "");
  };
  if (goog.DEBUG) {
    lib$scripts$modal$soy$$Templates.Modal.header.soyTemplateName = "Templates.Modal.header";
  }

  /**
   * @param {Object.<string, *>=} opt_data
   * @param {(null|undefined)=} opt_ignored
   * @param {Object.<string, *>=} opt_ijData
   * @return {!soydata.SanitizedHtml}
   * @suppress {checkTypes}
   */
  lib$scripts$modal$soy$$Templates.Modal.__deltemplate_s19_65c2d4d4 = function (opt_data, opt_ignored, opt_ijData) {
    return soydata.VERY_UNSAFE.ordainSanitizedHtml("<section id=\"" + soy.$$escapeHtmlAttribute(opt_data.id) + "-body\">" + soy.$$escapeHtml(opt_data.elementContent) + "</section>");
  };
  if (goog.DEBUG) {
    lib$scripts$modal$soy$$Templates.Modal.__deltemplate_s19_65c2d4d4.soyTemplateName = "Templates.Modal.__deltemplate_s19_65c2d4d4";
  }
  soy.$$registerDelegateFn(soy.$$getDelTemplateId("Modal.body"), "element", 0, lib$scripts$modal$soy$$Templates.Modal.__deltemplate_s19_65c2d4d4);

  /**
   * @param {Object.<string, *>=} opt_data
   * @param {(null|undefined)=} opt_ignored
   * @param {Object.<string, *>=} opt_ijData
   * @return {!soydata.SanitizedHtml}
   * @suppress {checkTypes}
   */
  lib$scripts$modal$soy$$Templates.Modal.__deltemplate_s25_c9897a65 = function (opt_data, opt_ignored, opt_ijData) {
    return soydata.VERY_UNSAFE.ordainSanitizedHtml("<footer id=\"" + soy.$$escapeHtmlAttribute(opt_data.id) + "-footer\">" + soy.$$escapeHtml(opt_data.elementContent) + "</footer>");
  };
  if (goog.DEBUG) {
    lib$scripts$modal$soy$$Templates.Modal.__deltemplate_s25_c9897a65.soyTemplateName = "Templates.Modal.__deltemplate_s25_c9897a65";
  }
  soy.$$registerDelegateFn(soy.$$getDelTemplateId("Modal.footer"), "element", 0, lib$scripts$modal$soy$$Templates.Modal.__deltemplate_s25_c9897a65);

  /**
   * @param {Object.<string, *>=} opt_data
   * @param {(null|undefined)=} opt_ignored
   * @param {Object.<string, *>=} opt_ijData
   * @return {!soydata.SanitizedHtml}
   * @suppress {checkTypes}
   */
  lib$scripts$modal$soy$$Templates.Modal.__deltemplate_s31_499dc9aa = function (opt_data, opt_ignored, opt_ijData) {
    return soydata.VERY_UNSAFE.ordainSanitizedHtml("<header id=\"" + soy.$$escapeHtmlAttribute(opt_data.id) + "-header\">" + soy.$$escapeHtml(opt_data.elementContent) + "</header>");
  };
  if (goog.DEBUG) {
    lib$scripts$modal$soy$$Templates.Modal.__deltemplate_s31_499dc9aa.soyTemplateName = "Templates.Modal.__deltemplate_s31_499dc9aa";
  }
  soy.$$registerDelegateFn(soy.$$getDelTemplateId("Modal.header"), "element", 0, lib$scripts$modal$soy$$Templates.Modal.__deltemplate_s31_499dc9aa);

  /**
   * @param {Object.<string, *>=} opt_data
   * @param {(null|undefined)=} opt_ignored
   * @param {Object.<string, *>=} opt_ijData
   * @return {!soydata.SanitizedHtml}
   * @suppress {checkTypes}
   */
  lib$scripts$modal$soy$$Templates.Modal.__deltemplate_s37_45b138fb = function (opt_data, opt_ignored, opt_ijData) {
    return soydata.VERY_UNSAFE.ordainSanitizedHtml(soy.$$escapeHtml(soy.$$getDelegateFn(soy.$$getDelTemplateId("Component"), "", true)(soy.$$augmentMap(opt_data, { componentName: "Modal" }), null, opt_ijData)));
  };
  if (goog.DEBUG) {
    lib$scripts$modal$soy$$Templates.Modal.__deltemplate_s37_45b138fb.soyTemplateName = "Templates.Modal.__deltemplate_s37_45b138fb";
  }
  soy.$$registerDelegateFn(soy.$$getDelTemplateId("Modal"), "", 0, lib$scripts$modal$soy$$Templates.Modal.__deltemplate_s37_45b138fb);

  /**
   * @param {Object.<string, *>=} opt_data
   * @param {(null|undefined)=} opt_ignored
   * @param {Object.<string, *>=} opt_ijData
   * @return {!soydata.SanitizedHtml}
   * @suppress {checkTypes}
   */
  lib$scripts$modal$soy$$Templates.Modal.__deltemplate_s40_29e4e741 = function (opt_data, opt_ignored, opt_ijData) {
    return soydata.VERY_UNSAFE.ordainSanitizedHtml(soy.$$getDelegateFn(soy.$$getDelTemplateId("ComponentElement"), "Modal", true)(soy.$$augmentMap(opt_data, { elementContent: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks("" + lib$scripts$modal$soy$$Templates.Modal.content(opt_data, null, opt_ijData)) }), null, opt_ijData));
  };
  if (goog.DEBUG) {
    lib$scripts$modal$soy$$Templates.Modal.__deltemplate_s40_29e4e741.soyTemplateName = "Templates.Modal.__deltemplate_s40_29e4e741";
  }
  soy.$$registerDelegateFn(soy.$$getDelTemplateId("ComponentTemplate"), "Modal", 0, lib$scripts$modal$soy$$Templates.Modal.__deltemplate_s40_29e4e741);

  /**
   * @param {Object.<string, *>=} opt_data
   * @param {(null|undefined)=} opt_ignored
   * @param {Object.<string, *>=} opt_ijData
   * @return {!soydata.SanitizedHtml}
   * @suppress {checkTypes}
   */
  lib$scripts$modal$soy$$Templates.Modal.__deltemplate_s44_df8ef55a = function (opt_data, opt_ignored, opt_ijData) {
    return soydata.VERY_UNSAFE.ordainSanitizedHtml("<div id=\"" + soy.$$escapeHtmlAttribute(opt_data.id) + "\" class=\"modal " + soy.$$escapeHtmlAttribute(opt_data.elementClasses ? opt_data.elementClasses : "") + "\" data-component>" + (opt_data.elementContent ? soy.$$escapeHtml(opt_data.elementContent) : "") + "</div>");
  };
  if (goog.DEBUG) {
    lib$scripts$modal$soy$$Templates.Modal.__deltemplate_s44_df8ef55a.soyTemplateName = "Templates.Modal.__deltemplate_s44_df8ef55a";
  }
  soy.$$registerDelegateFn(soy.$$getDelTemplateId("Modal"), "element", 0, lib$scripts$modal$soy$$Templates.Modal.__deltemplate_s44_df8ef55a);

  /**
   * @param {Object.<string, *>=} opt_data
   * @param {(null|undefined)=} opt_ignored
   * @param {Object.<string, *>=} opt_ijData
   * @return {!soydata.SanitizedHtml}
   * @suppress {checkTypes}
   */
  lib$scripts$modal$soy$$Templates.Modal.__deltemplate_s54_31c78f9d = function (opt_data, opt_ignored, opt_ijData) {
    return soydata.VERY_UNSAFE.ordainSanitizedHtml(soy.$$getDelegateFn(soy.$$getDelTemplateId("Modal"), "element", true)(opt_data, null, opt_ijData));
  };
  if (goog.DEBUG) {
    lib$scripts$modal$soy$$Templates.Modal.__deltemplate_s54_31c78f9d.soyTemplateName = "Templates.Modal.__deltemplate_s54_31c78f9d";
  }
  soy.$$registerDelegateFn(soy.$$getDelTemplateId("ComponentElement"), "Modal", 0, lib$scripts$modal$soy$$Templates.Modal.__deltemplate_s54_31c78f9d);

  /**
   * @param {Object.<string, *>=} opt_data
   * @param {(null|undefined)=} opt_ignored
   * @param {Object.<string, *>=} opt_ijData
   * @return {!soydata.SanitizedHtml}
   * @suppress {checkTypes}
   */
  lib$scripts$modal$soy$$Templates.Modal.__deltemplate_s56_90747620 = function (opt_data, opt_ignored, opt_ijData) {
    return soydata.VERY_UNSAFE.ordainSanitizedHtml(soy.$$getDelegateFn(soy.$$getDelTemplateId("Modal.body"), "element", true)(soy.$$augmentMap(opt_data, { elementContent: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks("" + (opt_ijData.renderChildComponents ? lib$scripts$modal$soy$$Templates.Modal.body(opt_data, null, opt_ijData) : "")) }), null, opt_ijData));
  };
  if (goog.DEBUG) {
    lib$scripts$modal$soy$$Templates.Modal.__deltemplate_s56_90747620.soyTemplateName = "Templates.Modal.__deltemplate_s56_90747620";
  }
  soy.$$registerDelegateFn(soy.$$getDelTemplateId("Modal.body"), "", 0, lib$scripts$modal$soy$$Templates.Modal.__deltemplate_s56_90747620);

  /**
   * @param {Object.<string, *>=} opt_data
   * @param {(null|undefined)=} opt_ignored
   * @param {Object.<string, *>=} opt_ijData
   * @return {!soydata.SanitizedHtml}
   * @suppress {checkTypes}
   */
  lib$scripts$modal$soy$$Templates.Modal.__deltemplate_s62_231e36e7 = function (opt_data, opt_ignored, opt_ijData) {
    return soydata.VERY_UNSAFE.ordainSanitizedHtml(soy.$$getDelegateFn(soy.$$getDelTemplateId("Modal.footer"), "element", true)(soy.$$augmentMap(opt_data, { elementContent: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks("" + (opt_ijData.renderChildComponents ? lib$scripts$modal$soy$$Templates.Modal.footer(opt_data, null, opt_ijData) : "")) }), null, opt_ijData));
  };
  if (goog.DEBUG) {
    lib$scripts$modal$soy$$Templates.Modal.__deltemplate_s62_231e36e7.soyTemplateName = "Templates.Modal.__deltemplate_s62_231e36e7";
  }
  soy.$$registerDelegateFn(soy.$$getDelTemplateId("Modal.footer"), "", 0, lib$scripts$modal$soy$$Templates.Modal.__deltemplate_s62_231e36e7);

  /**
   * @param {Object.<string, *>=} opt_data
   * @param {(null|undefined)=} opt_ignored
   * @param {Object.<string, *>=} opt_ijData
   * @return {!soydata.SanitizedHtml}
   * @suppress {checkTypes}
   */
  lib$scripts$modal$soy$$Templates.Modal.__deltemplate_s68_b8354b7d = function (opt_data, opt_ignored, opt_ijData) {
    return soydata.VERY_UNSAFE.ordainSanitizedHtml(soy.$$getDelegateFn(soy.$$getDelTemplateId("Modal.header"), "element", true)(soy.$$augmentMap(opt_data, { elementContent: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks("" + (opt_ijData.renderChildComponents ? lib$scripts$modal$soy$$Templates.Modal.header(opt_data, null, opt_ijData) : "")) }), null, opt_ijData));
  };
  if (goog.DEBUG) {
    lib$scripts$modal$soy$$Templates.Modal.__deltemplate_s68_b8354b7d.soyTemplateName = "Templates.Modal.__deltemplate_s68_b8354b7d";
  }
  soy.$$registerDelegateFn(soy.$$getDelTemplateId("Modal.header"), "", 0, lib$scripts$modal$soy$$Templates.Modal.__deltemplate_s68_b8354b7d);

  lib$scripts$modal$soy$$Templates.Modal.body.params = ["body"];
  lib$scripts$modal$soy$$Templates.Modal.footer.params = ["footer"];
  lib$scripts$modal$soy$$Templates.Modal.header.params = ["header"];
  "use strict";

  var lib$scripts$modal$$Modal = (function (_jspm_packages$github$alloyui$core$master$soy$SoyComponent$$default) {
    function lib$scripts$modal$$Modal(opt_config) {
      _classCallCheck(this, lib$scripts$modal$$Modal);

      _get(Object.getPrototypeOf(lib$scripts$modal$$Modal.prototype), "constructor", this).call(this, opt_config);
    }

    _inherits(lib$scripts$modal$$Modal, _jspm_packages$github$alloyui$core$master$soy$SoyComponent$$default);

    _createClass(lib$scripts$modal$$Modal, {
      close: {
        value: function close() {
          this.visible = false;
        }
      },
      disposeInternal: {
        value: function disposeInternal() {
          jspm_packages$github$alloyui$core$master$dom$dom$$default.exitDocument(this.overlayElement);
          _get(Object.getPrototypeOf(lib$scripts$modal$$Modal.prototype), "disposeInternal", this).call(this);
        }
      },
      syncOverlay: {
        value: function syncOverlay(overlay) {
          jspm_packages$github$alloyui$core$master$dom$dom$$default[overlay ? "enterDocument" : "exitDocument"](this.overlayElement);
        }
      },
      syncVisible: {
        value: function syncVisible(visible) {
          this.element.style.display = visible ? null : "none";
        }
      },
      valueOverlayElementFn_: {
        value: function valueOverlayElementFn_() {
          return jspm_packages$github$alloyui$core$master$dom$dom$$default.buildFragment("<div class=\"overlay\"></div>").firstChild;
        }
      }
    });

    return lib$scripts$modal$$Modal;
  })(jspm_packages$github$alloyui$core$master$soy$SoyComponent$$default);

  lib$scripts$modal$$Modal.ELEMENT_CLASSES = "modal";

  lib$scripts$modal$$Modal.ATTRS = {
    body: {
      validator: jspm_packages$github$alloyui$core$master$core$$default.isString
    },
    elementClasses: {
      value: "centered"
    },
    footer: {
      validator: jspm_packages$github$alloyui$core$master$core$$default.isString
    },
    header: {
      validator: jspm_packages$github$alloyui$core$master$core$$default.isString
    },
    overlay: {
      validator: jspm_packages$github$alloyui$core$master$core$$default.isBoolean,
      value: true
    },
    overlayElement: {
      initOnly: true,
      valueFn: "valueOverlayElementFn_"
    },
    visible: {
      validator: jspm_packages$github$alloyui$core$master$core$$default.isBoolean,
      value: true
    }
  };

  jspm_packages$github$alloyui$core$master$component$ComponentRegistry$$default.register("Modal", lib$scripts$modal$$Modal);

  var lib$scripts$modal$$default = lib$scripts$modal$$Modal;
  this.ui = this.ui || {};
  this.ui.Modal = lib$scripts$modal$$Modal;
  this.ui.core = jspm_packages$github$alloyui$core$master$core$$core;
  this.ui.dom = jspm_packages$github$alloyui$core$master$dom$dom$$dom;
  this.ui.ComponentRegistry = jspm_packages$github$alloyui$core$master$component$ComponentRegistry$$ComponentRegistry;
  this.ui.SoyComponent = jspm_packages$github$alloyui$core$master$soy$SoyComponent$$SoyComponent;
  this.ui.object = jspm_packages$github$alloyui$core$master$object$object$$object;
  this.ui.DomEventHandle = jspm_packages$github$alloyui$core$master$events$DomEventHandle$$DomEventHandle;
  this.ui.array = jspm_packages$github$alloyui$core$master$array$array$$array;
  this.ui.html = jspm_packages$github$alloyui$core$master$html$html$$html;
  this.ui.Component = jspm_packages$github$alloyui$core$master$component$Component$$Component;
  this.ui.ComponentCollector = jspm_packages$github$alloyui$core$master$component$ComponentCollector$$ComponentCollector;
  this.ui.EventsCollector = jspm_packages$github$alloyui$core$master$component$EventsCollector$$EventsCollector;
  this.ui.EventHandle = jspm_packages$github$alloyui$core$master$events$EventHandle$$EventHandle;
  this.ui.string = jspm_packages$github$alloyui$core$master$string$string$$string;
  this.ui.features = jspm_packages$github$alloyui$core$master$dom$features$$features;
  this.ui.Attribute = jspm_packages$github$alloyui$core$master$attribute$Attribute$$Attribute;
  this.ui.EventEmitterProxy = jspm_packages$github$alloyui$core$master$events$EventEmitterProxy$$EventEmitterProxy;
  this.ui.EventHandler = jspm_packages$github$alloyui$core$master$events$EventHandler$$EventHandler;
  this.ui.Disposable = jspm_packages$github$alloyui$core$master$disposable$Disposable$$Disposable;
  this.ui.EventEmitter = jspm_packages$github$alloyui$core$master$events$EventEmitter$$EventEmitter;
  this.ui.CancellablePromise = jspm_packages$github$alloyui$core$master$promise$Promise$$CancellablePromise;
  this.ui.async = jspm_packages$github$alloyui$core$master$promise$Promise$$async;
  this.ui.WildcardTrie = jspm_packages$github$alloyui$core$master$structs$WildcardTrie$$WildcardTrie;
  this.ui.Trie = jspm_packages$github$alloyui$core$master$structs$Trie$$Trie;
}).call(this);

/** @type {CancellablePromise.CallbackEntry_} */ /** @type {!Thenable} */
//# sourceMappingURL=main.js.map