import $ from 'jquery';
import angular from "angular";
import {app} from './app.js';
import {users} from '../js/users';
import slider from '../js/slider';

app.run(function(editableOptions) {
    editableOptions.theme = 'bs3'; // bootstrap3 theme. Can be also 'bs2', 'default'
});

app.controller('mainCtrl', function($scope, $filter){
    
    $scope.changeClick = 'home';
    $scope.changeDir = (dir)=>{
        $scope.changeClick = dir;
           };
    $scope.user = users;

    // login
    $scope.pass = function (login, pass) {
       if(login == $scope.user.authentication.first && pass == $scope.user.authentication.second){
           $scope.admin = 'admin';
           $scope.changeClick = 'home';
       }else{
           $scope.error = 'true';
       }
    };
    // reLogin
    $scope.exitAdmin =function () {
        $scope.admin = ' ';
        $scope.changeClick = 'home';
    };
    
    // about

                // Education
    $scope.removeEducation = function(item) {
        $scope.user.about.education.school.splice($scope.user.about.education.school.indexOf(item), 1);
    };
    $scope.addEducation = function(newSchoolName, newSpecialty) {
        $scope.user.about.education.school.push({schoolName: newSchoolName, specialty: newSpecialty});
    };
                    // Skill
    $scope.removeSkill = function(item) {
        $scope.user.about.skills.splice($scope.user.about.skills.indexOf(item), 1);
    };
    $scope.addSkill = function(newSkill, newLvl) {
        $scope.user.about.skills.push({skill: newSkill, lvl: newLvl});
    };

    // portfolio
    $scope.removePortfolio = function(item) {
        $scope.user.portfolio.items.splice($scope.user.portfolio.items.indexOf(item), 1);
    };
    $scope.addPortfolio = function(newSrc, newDescription, newLink) {
        $scope.user.portfolio.items.push({src: newSrc, description: newDescription, link: newLink});
    };
    
    
    
    // colorNav
    
    $scope.changeColorBg = (colorBg)=>{
      $scope.user.nav.background.background = colorBg;
    };
    
    // color text
    $scope.changeColor = (colorText)=>{
      $scope.user.colorText.color = colorText;
    };
    
    
    //bg body
    $scope.changeBgBody = (url)=>{
        $scope.user.backgroundBody.photo = url;
    };
    
});

