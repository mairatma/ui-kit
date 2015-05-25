'use strict';

import dom from 'metaljs/src/dom/dom';
import AutoCompleteBase from '../../scripts/AutoCompleteBase';

var component;
var input;

describe('AutoCompleteBase', function() {
	afterEach(function() {
		if (component) {
			component.dispose();
		}
		if (input) {
			dom.exitDocument(input);
		}
	});

	beforeEach(function(){
		input = document.createElement('div');
		dom.enterDocument(input);
	});

	it('should wrap data value in a function', function() {
		var data = [];
		component = new AutoCompleteBase({ data: data, inputElement: input }).render();
		assert.isFunction(component.data);
		assert.strictEqual(data, component.data());
	});

	it('should not wrap data value in a function if it is already a function', function() {
		var items = [];
		var data = function() {
			return items;
		};
		component = new AutoCompleteBase({ data: data, inputElement: input }).render();
		assert.strictEqual(items, component.data());
		assert.strictEqual(data, component.data);
	});

	it('should not throw exception if inputElement is not specified', function() {
		assert.doesNotThrow(function() {
			component = new AutoCompleteBase().render();
		});
	});

	it('should invoke deferred data handler passing the user input as query', function(done) {
		var data = function(query) {
			assert.strictEqual('foo', query);
			done();
		};
		component = new AutoCompleteBase({ data: data, inputElement: input }).render();
		input.value = 'foo';
		dom.triggerEvent(input, 'input');
	});

	it('should invoke deferred data handler passing the query as argument', function(done) {
		var data = function(query) {
			assert.strictEqual('foo', query);
			done();
		};
		component = new AutoCompleteBase({ data: data, inputElement: input }).render();
		component.request('foo');
	});

	it('should cancel pending request', function(done) {
		component = new AutoCompleteBase({ data: [], inputElement: input }).render();
		component.request().catch(function(reason) {
			assert.strictEqual('Cancelled by another request', reason.message);
			done();
		});
		component.request();
	});

	it('should format data items', function(done) {
		var formatter = function(item) {
			return item + 1;
		};
		component = new AutoCompleteBase({ data: [1, 2], inputElement: input, format: formatter }).render();
		component.request().then(function(data) {
			assert.deepEqual([2, 3], data);
			done();
		});
	});

	it('should default select function set value and focus input element', function() {
		component = new AutoCompleteBase({ data: [], inputElement: input }).render();
		component.emit('select', { textPrimary: 'foo' });
		assert.strictEqual('foo', input.value);
	});

});
