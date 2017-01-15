import angular from "angular";

import {app} from '../../app.js';
// import  '../feCtrl.js';
import portfolio_template1 from './template/portfolioDir.html'

app.directive('portfolio', function(){
	return {
		restrict: "A",
		replase: false,
		template: portfolio_template1,
		link: function (scope, element, attributes) {
			scope.data = scope[attributes["portfolio"]];
		}
	}
})