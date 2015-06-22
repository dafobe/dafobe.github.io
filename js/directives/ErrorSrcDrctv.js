angular.module('GamePortfolioApp')
  .directive('errorSrc', function HeaderDrctv () {
    'use strict';

    return {
        link: function(scope, element, attrs) {
          element.bind('error', function() {
            if (attrs.src != attrs.errorSrc) {
              attrs.$set('src', attrs.errorSrc);
            }
          });
        }
      }
  });