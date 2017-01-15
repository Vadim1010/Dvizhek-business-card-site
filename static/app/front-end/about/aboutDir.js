import angular from "angular";

import {app} from '../../app.js';
import  '../../mainCtrl';
import about_template from './template/about.html';

app.directive('about', function(){
	return{
		restrict: 'A',
		replase: false,
		template: about_template,
		link: function (scope, element, attribytes) {
			scope.data = scope[attribytes['about']];
		}
	}
	
});