angular.module('GamePortfolioApp')
.factory('NavigationFactory', function GamesFactory($location, $rootScope) {
	'use strict';
		
	//Return public interface
	return {
		renderPortfolio : function renderPortfolio() {
			console.log('---- rendering Portfolio ----');
			$rootScope.currentView = 'portfolio';
			$location.path('portfolio/');
		},
		renderGallery : function renderGallery() {
			console.log('---- rendering Gallery ----');
			$rootScope.currentView = 'gallery';
			$location.path('gallery/');
		},
		renderGameDetails : function renderGameDetails(id) {
			console.log('---- rendering Game details ----' + id);
			$rootScope.currentView = 'game';
			$location.path('/portfolio/game/'+id);
		}
	};
});