'use strict';

import async from 'metaljs/src/async/async';
import AutoComplete from '../../scripts/AutoComplete';
import dom from 'metaljs/src/dom/dom';

var component;
var input;

var filterData = function(query) {
	return [ 'Alabama', 'Alaska' ].filter(function(item) {
		return item.toLowerCase().indexOf(query.toLowerCase()) === 0;
	});
};

describe('AutoComplete', function() {
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

	it('should process valid query and display element', function(done) {
		component = new AutoComplete({
			data: filterData,
			inputElement: input
		}).render();

		component.request('a').then(function() {
			async.nextTick(function() {
				assert.ok(component.visible);
				assert.strictEqual(2, component.element.querySelectorAll('li').length);
				done();
			});
		});
	});

	it('should process invalid query and hide element', function(done) {
		component = new AutoComplete({
			data: filterData,
			inputElement: input
		}).render();

		component.request('asparagus').then(function() {
			async.nextTick(function() {
				assert.ok(!component.visible);
				assert.strictEqual(0, component.element.querySelectorAll('li').length);
				done();
			});
		});
	});

	it('should process query null data and hide element', function(done) {
		component = new AutoComplete({
			data: null,
			inputElement: input
		}).render();

		component.request('asparagus').then(function() {
			async.nextTick(function() {
				assert.ok(!component.visible);
				assert.strictEqual(0, component.element.querySelectorAll('li').length);
				done();
			});
		});
	});

	it('should throws error with malformed data structure', function(done) {
		component = new AutoComplete({
			data: [1],
			inputElement: input
		}).render();

		component.request('query').catch(function(reason) {
			assert.strictEqual('AutoComplete item must be an object', reason.message);
			done();
		});
	});

	it('should throws error with malformed data object structure', function(done) {
		component = new AutoComplete({
			data: [{foo:'foo'}],
			inputElement: input
		}).render();

		component.request('query').catch(function(reason) {
			assert.strictEqual('AutoComplete item must be an object with \'textPrimary\' key', reason.message);
			done();
		});
	});

	it('should hide element when select item', function(done) {
		component = new AutoComplete({
			data: filterData,
			inputElement: input
		}).render();

		component.request('a').then(function() {
			async.nextTick(function() {
				component.once('select', function(value) {
					assert.deepEqual({ 'textPrimary': 'Alabama' }, value);
					async.nextTick(function() {
						assert.ok(!component.visible);
						done();
					});
				});
				dom.triggerEvent(component.element.querySelectorAll('li')[0], 'click');
			});
		});
	});

	it('should hide element when click outside', function(done) {
		component = new AutoComplete({
			data: filterData,
			inputElement: input
		}).render();

		component.request('a').then(function() {
			async.nextTick(function() {
				async.nextTick(function() {
					assert.ok(!component.visible);
					done();
				});
				assert.ok(component.visible);
				dom.triggerEvent(document, 'click');
			});
		});
	});

	it('should show element when focus input', function(done) {
		component = new AutoComplete({
			data: filterData,
			inputElement: input,
			visible: false
		}).render();

		dom.triggerEvent(input, 'focus');

		async.nextTick(function() {
			assert.ok(component.visible);
			done();
		});
	});
});
