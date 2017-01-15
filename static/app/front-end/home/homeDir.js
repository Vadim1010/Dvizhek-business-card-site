import angular from "angular";

import {app} from '../../app.js';
import  '../../mainCtrl';
import home_template from './template/homeDir.html';

app.directive("home", function () {

	return {
		restrict: "A",
		replase: false,
		template: home_template,
		link: function (scope, element, attributes) {
			scope.data = scope[attributes["home"]];
		}

	}
});