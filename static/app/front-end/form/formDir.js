
import angular from "angular";

import {app} from '../../app.js';
import  '../../mainCtrl';
import form_template from './template/homeDir.html';

app.directive("form", function () {

    return {
        restrict: "A",
        replase: false,
        template: form_template,
        link: function (scope, element, attributes) {
            scope.data = scope[attributes["form"]];
        }

    }
})