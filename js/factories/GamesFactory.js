angular.module('GamePortfolioApp')
.factory('GamesFactory', function GamesFactory($q, $http, $location) {
	'use strict';
	var _games = [],
		_allGames = [],
		_gameDetails = {},
		remove,
		generateURL,
		gameEntry = function(id, name, url){this.id = id;
											this.name = name;
											this.url = url;
											this.images = {};
											this.isInPortfolio = false;};
	
	//Setup private functions
	gameEntry.prototype.setup = function(){
		this.images['60x60'] = generateURL('60x60',this.id);
		this.images['81x46'] = generateURL('81x46',this.id);
		this.images['170x80'] = generateURL('170x80',this.id);
		this.images['764x260'] = generateURL('764x260',this.id);
		this.images['screenshot'] = generateURL('screenshot',this.id);
	}
		//allowed remove from gallery or from portfolio or details 
		remove = function(game){
			var i = 0,
				end = _games.length,
				id = game['id'] || game['short'];
			
			for(;i<end;i++){
				if(_games[i]['id'] === id){
					_games.splice(i,1);
					break
				}
			}
		};
		
		generateURL = function(type /*String*/, name/*String*/){
			var url = '',
				gameName = name || _gameDetails['short'];
			
			if(gameName){
				switch(type){
					case '60x60': 	url = 'http://i1.midasplayer.com/images/games/'+gameName+'/'+gameName+'_60x60.gif';
									break;
					case '81x46': 	url = 'http://i1.midasplayer.com/images/games/'+gameName+'/'+gameName+'_81x46.gif';	
									break;
					case '170x80': 	url = 'http://i1.midasplayer.com/images/games/'+gameName+'/'+gameName+'_170x80.gif';
									break;
					case '764x260': url = 'http://i2.midasplayer.com/images/games/'+gameName+'/tournamentPage/'+gameName+'_764x260.jpg';
									break;
					case 'screenshot': url = 'http://i1.midasplayer.com/images/games/'+gameName+'/dumps/screen_'+gameName+'.gif';
										break;
					default : 		url = 'http://i1.midasplayer.com/images/games/'+gameName+'/'+gameName+'_60x60.gif';
				}
			}
			
			return url;
		};
		
	//Return public interface
	return {
		getAllGames : function () {
			var deferred = $q.defer();
			//Only retrieve games first time, otherwise return already set array
			if(!_allGames.length){
				$http.get('json/games.json')
				.success(function (data) {
					for(var r in data.games){
						var game = data.games[r]
						var entry = new gameEntry(game.short, game.name, game.url);
						entry.setup();
						_allGames.push(entry);
					}
					deferred.resolve(_allGames);
				})
				.error(function (data) {
					deferred.reject(data);
				});
				
			}else{
				deferred.resolve(_allGames)
			}
			
			return deferred.promise;
		},
		getGames : function(){
			console.log('--- retrieving games : ', _games);
			return _games;
		},
		addGame : function(game /*Object game entity*/){
			var entry = new gameEntry(game.id, game.name, game.url);
			entry.setup();
			_games.push(entry);
			console.log('--- added game : ',entry);
		},
		removeGame : function(game /*Object*/){
			remove(game);
		},
		getGameDetails : function(){
			return _gameDetails;
		},
		setGameDetails : function(game /*Object game Entry*/){
			_gameDetails = game;
		}
	};
});