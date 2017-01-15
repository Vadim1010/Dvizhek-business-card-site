import angular from "angular";

import {app} from '../app.js';
import  '../mainCtrl';
import adminTpl from './template/adminDir.html';

app.directive('admin', function(){
	return{
		restrict: 'A',
		replase: false,
		template: adminTpl,
		link: function (scope, element, attribytes) {
			scope.data = scope[attribytes['admin']];
		}
	}

});