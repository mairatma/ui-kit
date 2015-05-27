'use strict';

import async from 'bower:metaljs/src/async/async';
import dom from 'bower:metaljs/src/dom/dom';
import Switcher from '../../scripts/Switcher';

var switcher;

describe('Switcher', function() {
	afterEach(function() {
		if (switcher) {
			switcher.dispose();
		}
	});

	it('should switcher turn on when checked attribute is true', function () {
		switcher = new Switcher({ checked: true }).render();
		assert.ok(dom.hasClass(switcher.element, 'switcher-on'));
	});

	it('should switcher turn off when checked attribute is false', function () {
		switcher = new Switcher({ checked: false }).render();
		assert.ok(!dom.hasClass(switcher.element, 'switcher-on'));
	});

	it('should switcher toggle on click', function (done) {
		switcher = new Switcher().render();
		dom.triggerEvent(switcher.element, 'click');
		async.nextTick(function() {
			assert.ok(dom.hasClass(switcher.element, 'switcher-on'));
			dom.triggerEvent(switcher.element, 'click');
			async.nextTick(function() {
				assert.ok(!dom.hasClass(switcher.element, 'switcher-on'));
				done();
			});
		});
	});

	it('should decorate', function() {
	  var markup = soy.$$getDelegateFn('Switcher')({
	    id: 'switcher'
	  }, null);

	  dom.append(document.body, markup.content);
	  var outerHTML = document.getElementById('switcher').outerHTML;

	  switcher = new Switcher({
	    element: '#switcher'
	  }).decorate();

	  assert.strictEqual(switcher.element.outerHTML, outerHTML);
	});
});
