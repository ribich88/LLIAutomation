"use strict";
var assert = require('assert');

describe('LLI Landing Page', function() {

	describe('Page Elements', function () {
		before(function (done) {
	      this.browser.get(link)
	      .deleteAllCookies()
	      .then(function(){ done() });
	    });

		it('Should have Login Form', function (done) {
	      this.browser.hasElementByName('member-login').then(function(hasField){
	        assert(hasField);
	      }).then(done, done);
	    });

		it('Should have LLI Logo', function (done) {
	      this.browser.hasElementByName('member-login').then(function(hasField){
	        assert(hasField);
	      }).then(done, done);
	    });


	});
});