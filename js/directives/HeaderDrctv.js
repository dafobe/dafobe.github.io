angular.module('GamePortfolioApp')
  .directive('portfolioheader', function HeaderDrctv () {
    'use strict';

    return {
      restrict: 'EA',
      replace: true,
      scope: true,
      templateUrl: "views/templates/header.tmpl.html",
      controllerAs: 'header',

      controller: function (NavigationFactory) {
    	  this.goToGallery = function(){
    		  NavigationFactory.renderGallery();
    	  };
    	  this.goToPortfolio = function(){
    		  NavigationFactory.renderPortfolio();
    	  };

      }
    }
  });