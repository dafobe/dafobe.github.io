angular.module('GamePortfolioApp')
.factory('NavigationFactory', function GamesFactory($location, $rootScope) {
	'use strict';
		
	//Return public interface
	return {
		renderPortfolio : function renderPortfolio() {
			$rootScope.currentView = 'portfolio';
			$location.path('portfolio/');
		},
		renderGallery : function renderGallery() {
			$rootScope.currentView = 'gallery';
			$location.path('gallery/');
		},
		renderGameDetails : function renderGameDetails(id) {
			$rootScope.currentView = 'game';
			$location.path('/portfolio/game/'+id);
		}
	};
});