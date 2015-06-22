/**
 * Controller: GalleryCtrl
 * Manage King's games gallery 
 */
angular.module('GamePortfolioApp')
  .controller('GameDetailsCtrl',
    function GameDetailsCtrl ($window, GamesFactory, NavigationFactory) {
      'use strict';
      var game = GamesFactory.getGameDetails() || {};
     
      this.name = game['name'];
      this.url = game['url'];
      this.image = game['images']?game['images']['60x60']:'';
      this.imageBig = game['images']?game['images']['764x260']:'';
      this.screenshot = game['images']?game['images']['screenshot']:'';
      
      this.removeGame = function(game){
    	  GamesFactory.removeGame(game);
      };
      
      this.playGame = function(){
    	 $window.alert('Yeah!! Have fun playing game ' + this.name);
      }
      this.showGallery = function(){
    	  NavigationFactory.renderGallery();
      }
    });