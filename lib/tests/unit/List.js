'use strict';

import dom from 'bower:metaljs/src/dom/dom';
import SoyComponent from 'bower:metaljs/src/soy/SoyComponent';
import List from '../../scripts/List';

var list;

describe('List', function() {
	afterEach(function() {
		if (list) {
			list.dispose();
		}
	});

	it('should render with empty items by default', function() {
		list = new List().render();
		assert.strictEqual(0, list.element.querySelectorAll('li').length);
	});

	it('should only accept arrays as the value of the "items" attribute', function() {
		list = new List({items: 2});
		assert.deepEqual([], list.items);

		list.items = 'My items';
		assert.deepEqual([], list.items);

		list.items = [{}];
		assert.deepEqual([{}], list.items);
	});

	it('should render the image of given items', function() {
		list = new List({
			items: [{
				avatar: {content: SoyComponent.sanitizeHtml('<img src="myImageSrc">'), class: 'myImageClass'}
			}]
		}).render();

		var imgNode = list.element.querySelector('li img');
		assert.ok(imgNode);
		assert.strictEqual('/myImageSrc', imgNode.src.substr(imgNode.src.length - 11));
		assert.ok(dom.hasClass(imgNode.parentNode, 'myImageClass'));
	});

	it('should not render image tag if image was not specified', function() {
		list = new List({
			items: [{}]
		}).render();

		var imgNode = list.element.querySelector('li img');
		assert.ok(!imgNode);
	});

	it('should render the text primary of given items', function() {
		list = new List({
			items: [{textPrimary: 'Item 1'}, {textPrimary: 'Item 2'}]
		}).render();

		var contents = list.element.querySelectorAll('li .list-text-primary');
		assert.strictEqual('Item 1', contents[0].textContent);
		assert.strictEqual('Item 2', contents[1].textContent);
	});

	it('should render the text secondary of given items', function() {
		list = new List({
			items: [{textSecondary: 'Help 1'}, {textSecondary: 'Help 2'}]
		}).render();

		var helpNodes = list.element.querySelectorAll('li .list-text-secondary');
		assert.strictEqual('Help 1', helpNodes[0].textContent);
		assert.strictEqual('Help 2', helpNodes[1].textContent);
	});

	it('should render the icons of given items', function() {
		list = new List({
			items: [{icons: ['icon1']}, {icons: ['icon2', 'icon3']}]
		}).render();

		var iconNodes = list.element.querySelectorAll('li .list-icons');
		assert.ok(iconNodes[0].querySelector('.icon1'));
		assert.ok(iconNodes[1].querySelector('.icon2'));
		assert.ok(iconNodes[1].querySelector('.icon3'));
	});

	it('should render new items when the attribute is updated', function(done) {
		list = new List({
			items: [{textPrimary: 'Item 1'}, {textPrimary: 'Item 2'}]
		}).render();

		list.items = [{textPrimary: 'New Item 1'}, {textPrimary: 'New Item 2'}];
		list.once('attrsChanged', function() {
			var contents = list.element.querySelectorAll('li .list-text-primary');
			assert.strictEqual('New Item 1', contents[0].textContent);
			assert.strictEqual('New Item 2', contents[1].textContent);
			done();
		});
	});

	it('should fire an "itemSelected" event when item is selected', function() {
		list = new List({
			items: [{textPrimary: 'Item 1'}, {textPrimary: 'Item 2'}, {textPrimary: 'Item 3'}]
		}).render();

		var elements = list.element.querySelectorAll('li');

		list.on('itemSelected', function(item) {
			var itemIndex = item.getAttribute('data-index');

			assert.strictEqual(1, parseInt(itemIndex, 10));
		});

		dom.triggerEvent(elements[1], 'click');
	});
});
