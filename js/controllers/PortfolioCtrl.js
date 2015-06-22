/**
 * Controller: GalleryCtrl
 * Manage King's games gallery 
 */
angular.module('GamePortfolioApp')
  .controller('PortfolioCtrl',
    function PortfolioCtrl (GamesFactory, NavigationFactory) {
      'use strict';
      var ctrl = this;
      this.games = GamesFactory.getGames();
      
      this.removeGame = function(game){
    	  GamesFactory.removeGame(game);
    	  ctrl.refresh();
      };
      
      this.refresh = function(){
    	  ctrl.games = GamesFactory.getGames();
      };
      
      this.showDetails = function(game){
    	  GamesFactory.setGameDetails(game);
    	  NavigationFactory.renderGameDetails(game.id);
      }
      this.showGallery = function(){
    	  NavigationFactory.renderGallery();
      }
    });