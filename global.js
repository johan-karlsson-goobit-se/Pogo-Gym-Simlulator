data = new Dataset();
$(document).ready(function() {
//	(new Form()).mostEffective('defender').appendTo('body');
//	(new Form()).mostEffective('attacker').appendTo('body');
//	(new Form()).bestMoveset().appendTo('body');
//	(new Form()).bestPokemon().appendTo('body');
//	(new Form()).pairPokemon().appendTo('body');
//	(new Form()).bestAgainst().appendTo('body');
	
	(new Form()).showMaxEffectiveLevel().appendTo('body');
	(new Form()).bestRaiders().appendTo('body');
	
	
	/*
	$('<div style="color: blue; clear: both;">[info]</a>').appendTo('body').on('click', function() {
		$(".infoBox").slideToggle();
	});
	var infoBox = $("<div>").addClass("infoBox").hide().appendTo('body');
	$("<p>This tool is in alpha state. This means that, although I HOPE it gives reasonable results (and the results have been useful for me in battle), there may be bugs and errors. Don't make any decisions or draw any conclutions based on the output of this tool.</p>").appendTo(infoBox);
	$("<p>Do not, for the love of everything that is holy, try to run these simulations on a phone or tablet! It uses more battery and generates more heat than PoGo itself! Use a proper computer, preferably a desktop and make sure your computer wont overheat. (Any computer that can play games should do just fine.)</p>").appendTo(infoBox);
	$("<p>This tool is primarilly bult to analyze attacker performance for prestiging gyms. Your pokemon will always have half the CP of the defending pokemons. As a result of this, you will very likely want to select a low level, else you won't get any results. (Eg, a level 25 Dragonite wont give any results, as there isn't any 5000 CP pokemons it can beat.)</p>").appendTo(infoBox);	
	$("<p>Used HP and Remaining HP% always refers to the pokemon selected above, while the other stats (unless specifically noted) belong to the pokemon listed on that row.</p>").appendTo(infoBox);
	$("<p>There are forms of randomness built into this tool, so the results may differ for different times you run the simulations. You have the option to run multiple simulations of each battle and average the results. If you get results that are unbelivable, its most likely because they are. Try to re-run the simulation and see if the new result differs.</p>").appendTo(infoBox)
	$("<p style='clear: both;'><strong>Tie cut of: </strong> If the result of a battle is within this percentage of the most commonly 'best' move set, ignore the winning battle and pretend that the move set that have won the most battles was most effective against this defender as well. This is useful if you want a list of move sets that is <i>good enough</i> instead of perfect.</p>").appendTo(infoBox);
	$("<p style='clear: both;'><strong>Optimize for: </strong> Decides what to optimze for. Usually 'battles won' gives the most reasonable results, but the other options may be interesting if you want to find out if your mons are good in some special way.</p>").appendTo(infoBox);
	*/
});

function getBestMoveSet(name, level, dodge, tie, optimize_for, repeatBattle, weakAgainst, forcedDefenderMinCP) {
	var attackerCP = Pokemon.newAttacker(name, data.pokemon[name]['fastMoves'][0], data.pokemon[name]['specialMoves'][0], level).CP;
	var results = {};
	
	// for every pokemon there is
	for(var i in data.pokemon) {
		results[i] = {};
		for(var j in data.pokemon[i]['fastMoves']) {
			results[i][j] = {};
			for(var k in data.pokemon[i]['specialMoves']) {
				results[i][j][k] = [];

				var defenderCP = forcedDefenderMinCP ? forcedDefenderMinCP : attackerCP * 2;
				var defender = Pokemon.newDefenderWithMinCP(data.pokemon[i]['name'], data.pokemon[i]['fastMoves'][j], data.pokemon[i]['specialMoves'][k], defenderCP);

				if(!defender) {
					continue;
				}
				

				if ( weakAgainst != 'Any' &&  ! (data.effective[ weakAgainst ][ defender.type[0] ] * data.effective[ weakAgainst ][ defender.type[1] ] > 1.1 )) {
					continue;
				}
				

				// let them have a match with every possible combo of our pokemon with different moves
				for(var m in data.pokemon[name]['fastMoves']) {
					for(var n in data.pokemon[name]['specialMoves']) {
						var attacker = Pokemon.newAttacker(name, data.pokemon[name]['fastMoves'][m], data.pokemon[name]['specialMoves'][n], level);
						if( ! attacker ) {
							continue;
						}
						var result = (new Battle(attacker, defender, dodge)).repeatBattle(repeatBattle);

						if(result.time <= 0 || result.attacker <= 0) {
							continue;
						}
						
						// we store a copy of the result and the defender in the attacker
						attacker['result'] = result;
						attacker['defender'] = defender;
						// key is defender - defenders quick move - defenders charge move
						results[i][j][k].push(attacker);
					}
				}
			}
		}
	}

	// we go through all the results to find most effective move set for our pokemon
	var winners = {};
	for(var i in results) {
		for(var j in results[i]) {
			for(var k in results[i][j]) {
				if(!results[i][j][k].length) {
					continue; // our 'mon never won against this defender :(
				}
				
				// we compare all our move sets to find the best one
				var max = null;
				for(var r in results[i][j][k]) {
					if(!max) {
						max = results[i][j][k][r];
						continue;
					}
					if(optimize_for == 'hp') {
						if(results[i][j][k][r]['result']['attacker'] > max['result']['attacker']) {
							max = results[i][j][k][r];
						}
					} else if(optimize_for == 'battles_won') {
						if(results[i][j][k][r]['result']['victories'] > max['result']['victories']) {
							max = results[i][j][k][r];
						// if we have a draw (our mons are op and always wins), lets default to looking at hp percentage instead
						} else if(results[i][j][k][r]['result']['victories'] == max['result']['victories']) {
							if(results[i][j][k][r]['result']['attacker'] / results[i][j][k][r]['HP'] > max['result']['attacker'] / max['HP'] ) {
								max = results[i][j][k][r];
							}							
						}
					} else if(optimize_for == 'hp_percent') {
						if(results[i][j][k][r]['result']['attacker'] / results[i][j][k][r]['HP'] > max['result']['attacker'] / max['HP'] ) {
							max = results[i][j][k][r];
						}
					} else if(optimize_for == 'quick') {
						if(results[i][j][k][r]['result']['time'] > max['result']['time']) {
							max = results[i][j][k][r];
						}
					} else {
						console.error("Error: optimizing for invalid setting: " + optimize_for);
					}
				}
				
				// if there are ties, lets keep these, to deal with them later
				var ties = [];
				var multi = tie / 100;
				if(tie != 100) {
//					console.log(multi);
					for(var r in results[i][j][k]) {
						if(optimize_for == 'hp') {
							if(results[i][j][k][r]['result']['attacker'] >= max['result']['attacker'] * multi) {
								ties.push(results[i][j][k][r]);
							}
						} else if(optimize_for == 'battles_won') {
							if(results[i][j][k][r]['result']['victories'] >= max['result']['victories'] * multi) {
								ties.push(results[i][j][k][r]);
							// if we have a draw (our mons are op and always wins), lets default to looking at hp percentage instead
							} else if(results[i][j][k][r]['result']['victories'] == max['result']['victories'] * multi) {
								if(results[i][j][k][r]['result']['attacker'] / results[i][j][k][r]['HP'] >= max['result']['attacker'] / max['HP']  * multi ) {
									ties.push(results[i][j][k][r]);
								}
							}
						} else if(optimize_for == 'hp_percent') {
							if(results[i][j][k][r]['result']['attacker'] / results[i][j][k][r]['HP'] >= max['result']['attacker'] / max['HP']  * multi ) {
								ties.push(results[i][j][k][r]);
							}
						} else if(optimize_for == 'quick') {
							if(results[i][j][k][r]['result']['time'] >= max['result']['time'] * multi) {
								ties.push(results[i][j][k][r]);
							}
						} else {
							console.error("Error: optimizing for invalid setting: " + optimize_for);
						}
						
					}
				}
				if(ties.length > 1) {
					results[i][j][k] = ties;
//					for(var a in ties) {
//					}
					continue; // we dont want to display the winning result if there is a tie
				}
						
				// for all non-ties, lets simply add these to an array with (our) fastmove - chargemove as key
				var quick = max['selectedFast']['name'];
				var charge = max['selectedSpecial']['name'];
				if(! winners[quick] ) {
					winners[quick] = {};
				}
				if(! winners[quick][charge] ) {
					winners[quick][charge] = [];
				}
				winners[quick][charge].push(max);
				results[i][j][k] = []; // we need to empty this, as we're reusing the data structure for ties
			}
		}
	}
	
	// now, lets deal with the ties
	// lets start with finding out what of the other move sets that won the most often
	var popularityContest = [];
	for(var quick in winners) {
		for(var charge in winners[quick]) {
			if(! popularityContest[ winners[quick][charge].length ] ) {
				popularityContest[ winners[quick][charge].length ] = [];
			}
			popularityContest[ winners[quick][charge].length ].push(winners[quick][charge]);
		}
	}
	// and sort the result
	var popularityContestSorted = [];
	for(var i = popularityContest.length; i >= 0; i--) {
		if(popularityContest[i]) {
			for(var j in popularityContest[i]) {
				popularityContestSorted.push(popularityContest[i][j]);
			}
		}
	}

	// and now, lets to through the remaning mons and put them in the right pile.
	// the O of this actually isnt bad as it seems as i * j * k * r = n
	for(var p in popularityContestSorted) {
		for(var i in results) {
			for(var j in results[i]) {
				for(var k in results[i][j]) {
					if(!results[i][j][k].length) {
						continue; // our 'mon never won against this defender (or we have already sorted out where to place the defender)
					}
					
					for(var r in results[i][j][k]) {
						if(results[i][j][k][r]['selectedFast']['name'] == popularityContestSorted[p][0]['selectedFast']['name'] && results[i][j][k][r]['selectedSpecial']['name'] == popularityContestSorted[p][0]['selectedSpecial']['name']) {
							winners[ results[i][j][k][r]['selectedFast']['name'] ][ results[i][j][k][r]['selectedSpecial']['name'] ].push(results[i][j][k][r]); // we sort it into the correct pile of winners
							results[i][j][k] = []; // we clear this type of mon, as we now have placed him in the right pile
							break;
						}
					}
				}
			}
		}
	}
	
	return winners;
};

function showBestAgainst(dodge, optimize_for, repeatBattle, weakAgainst) {
	var winners = {};
	var defenders = {};
	var defendersExists = {};
	
	// for all the pokemons there is, we're going to use organize a battle
	// these are the attackers
	for(var pokemonName in data.pokemon) {

		//if our attacker doesn't have the right type, we wont do this
		if(!(data.pokemon[pokemonName]['type'][0] == weakAgainst || data.pokemon[pokemonName]['type'][1] == weakAgainst)) {
			continue;
		}
		// we find all move sets of our mon
		var totalMovesTested = 0;
		for(var j in data.pokemon[pokemonName]['fastMoves']) {
			for(var k in data.pokemon[pokemonName]['specialMoves']) {
				var quickMove = data.pokemon[pokemonName]['fastMoves'][j];
				var cinematicMove = data.pokemon[pokemonName]['specialMoves'][k];
				var moveKey = data.pokemon[pokemonName]['fastMoves'][j] + '-' + data.pokemon[pokemonName]['specialMoves'][k];
				var monKey = pokemonName + '-' + moveKey;
				if(data.pokemon[pokemonName]['newMoves'].indexOf(moveKey) != -1) {
					// all is fine
				} else if(data.pokemon[pokemonName]['legacyMoves'].indexOf(moveKey) != -1) {
					// legacy move
				} else {
					// this mon cant exist!
					continue;
				}
				
				totalMovesTested++;
				
				// we play matches for all these cp levels
				var cps = [400, 500, 600, 700, 800, 900, 1000, 1150, 1300, 1500];
				for(var cp in cps) {
					if(!winners[cps[cp]]) {
						winners[cps[cp]] = {};
					}
					if(!winners[cps[cp]][monKey]) {
						winners[cps[cp]][monKey] = [];
					}

					var attacker = Pokemon.newAttackerWithMaxCP(pokemonName, quickMove, cinematicMove, cps[cp]);
					if(attacker.level > 30) {
						continue;
					}
					var totalNumberOfMoves = data.pokemon[pokemonName]['newMoves'].length + data.pokemon[pokemonName]['legacyMoves'].length;					
					$('title').text('Mon: ' + data.pokemon[pokemonName]['number'] + ' (' + data.pokemon[pokemonName]['name'] + ') Move: ' + totalMovesTested + '/' + totalNumberOfMoves + ' Step: ' + cps[cp] + ' cp');
					
					// lets go through all defenders
					for(var def_i in data.pokemon) {
						var shouldbreak = false;
						for(var def_j in data.pokemon[def_i]['fastMoves']) {
							if(shouldbreak) {
								break;
							}
							for(var def_k in data.pokemon[def_i]['specialMoves']) {
								var defenderCP = cps[cp] * 2;
								var defender = null;
								if( defendersExists[ data.pokemon[def_i]['name'] + data.pokemon[def_i]['fastMoves'][def_j] + data.pokemon[def_i]['specialMoves'][def_k] + defenderCP ] ) {
									defender = defenders[ data.pokemon[def_i]['name'] + data.pokemon[def_i]['fastMoves'][def_j] + data.pokemon[def_i]['specialMoves'][def_k] + defenderCP ];
								} else {
									defender = Pokemon.newDefenderWithMinCP(data.pokemon[def_i]['name'], data.pokemon[def_i]['fastMoves'][def_j], data.pokemon[def_i]['specialMoves'][def_k], defenderCP);
									defenders[ data.pokemon[def_i]['name'] + data.pokemon[def_i]['fastMoves'][def_j] + data.pokemon[def_i]['specialMoves'][def_k] + defenderCP ] = defender;
									defendersExists[ data.pokemon[def_i]['name'] + data.pokemon[def_i]['fastMoves'][def_j] + data.pokemon[def_i]['specialMoves'][def_k] + defenderCP ] = true;
								}
								if(!defender) {
									continue;
								}
						
								if ( weakAgainst != 'Any' &&  ! (data.effective[ weakAgainst ][ defender.type[0] ] * data.effective[ weakAgainst ][ defender.type[1] ] > 1.1 )) {
									shouldbreak = true;
									break;
								}
						
								var result = (new Battle(attacker, defender, dodge)).repeatBattle(repeatBattle);
								if(result.time <= 0 || result.attacker <= 0 || result.victories <= repeatBattle * 0.99) {
									continue;
								}
								
								// we store a copy of the result and the defender in the attacker
								attacker['result'] = result;
								attacker['defender'] = defender;
								winners[cps[cp]][monKey].push(attacker);
							}
						}
					}
				}
			}
		}
	}
	
	console.log('winners');
	console.log(winners);
	var results = {};
	
	for(var cp in winners) {
		results[cp] = [];
		for(var monKey in winners[cp]) {
			var listOfWinsForMon = winners[cp][monKey];
			var victories = listOfWinsForMon.length;
			if(victories == 0) {
				continue;
			}
			if(!results[cp][victories]) {
				results[cp][victories] = [];
			}
			results[cp][victories].push(listOfWinsForMon);
		}
		results[cp] = results[cp].reverse();
	}
	console.log('results');
	console.log(results);
	
	var results1 = {};
	for(var cp in results) {
		results1[cp] = [];
		for(var numberOfVictories in results[cp]) {
			var ties = results[cp][numberOfVictories];

			var tieBreaker = [];
			for(var i in results[cp][numberOfVictories]) {
				var avgHP = 0;
				for(var j in results[cp][numberOfVictories][i]) {
					avgHP += results[cp][numberOfVictories][i][j].result['attacker'];
				}
				avgHP = Math.round(100 *  (results[cp][numberOfVictories][i][j]['HP'] - (avgHP / results[cp][numberOfVictories][i].length))) / 100;
				var avgHPPercentage = Math.round(100 * avgHP / results[cp][numberOfVictories][i][j]['HP']);
				
				if(! tieBreaker[avgHPPercentage]) {
					tieBreaker[avgHPPercentage] = [];
				}
				tieBreaker[avgHPPercentage].push(results[cp][numberOfVictories][i]);
			}
			for(var i in tieBreaker) {
				for(var j in tieBreaker[i]) {
					results1[cp].push(tieBreaker[i][j]);
				}
			}
		}
	}
	console.log('results1');
	console.log(results1);

	var resultsView = new ResultsView();
	var description = "Best attacker of type " + weakAgainst + " against attackers weak against " + weakAgainst;
	resultsView.addDescription(description, null);

	var header = [];
	header.push("#");
	for(var cp in results1) {
		header.push(cp);
	}
	resultsView.addHeader(header);

	var i = 0;
	var rows = [];
	foundMon = true;
	while(foundMon) {
		rows[i] = [];
		rows[i].push(i+1);
		foundMon = false;
		for(var cp in results1) {
			var mon = results1[cp].shift();
			if(typeof mon == 'undefined') {
				rows[i].push("&nbsp;");
				continue;
			}
			foundMon = true;
			
			var infodiv = $('<div>').addClass('infodiv');
			$('<strong>').text(mon[0]['name']).appendTo(infodiv);
			
			var avgHP = 0;
			var avgTime = 0;
			for(var j in mon) {
				avgHP += mon[j].result['attacker'];
				avgTime += mon[j].result['time'];
			}
			avgHP = Math.round(100 *  (mon[j]['HP'] - (avgHP / mon.length))) / 100;
			avgTime = Math.round((100000 - avgTime / mon.length) / 10) / 100;
			var avgHPPercentage = Math.round(100 * avgHP / mon[j]['HP']) + '%';
			
			
			$('<div>').addClass('smallFont').html(
				'Legacy: ' + ( mon[0]['legacy'] == '' ? 'No' : 'Yes' ) + '<br>' + 
				'Quick mv: ' + mon[0]['selectedFast']['name'] + '<br>' + 
				'Charge mv: ' + mon[0]['selectedSpecial']['name'] + '<br>' +
				'Battles won: ' + mon.length + '<br>' +
				'Avg remaning time: ' + avgTime + '<br>' +
				'Avg used HP %: ' + avgHPPercentage + '<br>' +
				'Avg used HP: ' + avgHP
			).appendTo(infodiv);
			rows[i].push( $('<div>').append(infodiv).html() );
		}
		//rows[i].pop();
		i++;
	}

	var resultsStore = {};
	resultsStore['header'] = header;
	resultsStore['rows'] = [];
	resultsStore['title'] = weakAgainst;
	resultsStore['description'] = description;
	
	for(var i in rows) {
		resultsView.addRow(rows[i]);
		resultsStore['rows'].push(rows[i]);
	}
	var localstoragename = 'showBestAgainst' + window.location.search + JSON.stringify(dodge) + optimize_for + repeatBattle + weakAgainst;
	localStorage.setItem(localstoragename, JSON.stringify(resultsStore));
	
	$('title').text(weakAgainst);
	resultsView.outputResults();


	return;
	/*

			var maxVictories = 0;
			
			// we figure out the most effective move set, and store that data
			// (and the original battle data for that move set)
			// and some more data that is also useful
			for(var quick in bestMoveSet) {
				for(var charge in bestMoveSet[quick]) {
					for(var battle in bestMoveSet[quick][charge]) {
						//if we can't win consistently, we don't consider this a vitory at all
						if(bestMoveSet[quick][charge][battle]['result']['victories'] < repeatBattle * 0.8) {
							bestMoveSet[quick][charge].splice(battle, 1);
						}
					}
					
					
					if(bestMoveSet[quick][charge].length > maxVictories) {
						maxVictories = bestMoveSet[quick][charge].length;
						bestMoves[cps[cp]][pokemonName]['quick'] = quick;
						bestMoves[cps[cp]][pokemonName]['charge'] = charge;
						bestMoves[cps[cp]][pokemonName]['victories'] = bestMoveSet[quick][charge].length;
						bestMoves[cps[cp]][pokemonName]['level'] = attacker.level;
						bestMoves[cps[cp]][pokemonName]['fights'] = bestMoveSet[quick][charge];
						
						var totalTime = 0;
						var totalHPRemaining = 0;
						for(var j in bestMoves[cps[cp]][pokemonName]['fights']) {
							var res = bestMoves[cps[cp]][pokemonName]['fights'][j]['result'];
							totalTime += res['time'];
							totalHPRemaining += res['attacker'];
						}

						var victories = bestMoves[cps[cp]][pokemonName]['victories'];
						var totalHP = null;
						for(var k in bestMoves[cps[cp]][pokemonName]['fights']) {
							totalHP = bestMoves[cps[cp]][pokemonName]['fights'][k]['HP'];
							break;
						}
						
						bestMoves[cps[cp]][pokemonName]['avgRemaningTime'] = parseFloat((totalTime / victories / 1000).toFixed(1));
						bestMoves[cps[cp]][pokemonName]['avgUsedHP'] = parseFloat((totalHP - (totalHPRemaining / victories)).toFixed(2));
						bestMoves[cps[cp]][pokemonName]['avgUsedHPPercentage'] = Math.round( 100 * (totalHP - (totalHPRemaining / victories)) / totalHP   ) + "%";
					}
				}
			}
		}
	}
//	console.log(bestMoves);
	
	// we create a data structure to figure out what defenders anyone have won over
	var wonOver = {};
	for(var cp in bestMoves) {
		for(var name in bestMoves[cp]) {
			for(var i in bestMoves[cp][name]['fights']) {
				if(!wonOver[cp]) {
					wonOver[cp] = {};
					}
				var defender = bestMoves[cp][name]['fights'][i]['defender'];
				if(!wonOver[cp][defender['name']]) {
					wonOver[cp][defender['name']] = {};
				}
				if(  ! wonOver[cp][defender['name']][defender['selectedFast']['name']]  ) {
					wonOver[cp][defender['name']][defender['selectedFast']['name']] = {};
				}
				
				wonOver[cp][defender['name']][defender['selectedFast']['name']][defender['selectedSpecial']['name']] = true;
			}
		}
	}

	var bestMonsPerCP = [];
	for(var cp in bestMoves) {
//		console.log("==============================" + cp + "======================================");
		var bestMons = [];
		for(var attacker1Name in bestMoves[ cp ]) {
			// if there isnt any one in the stack yet, we are the best
			if(bestMons.length == 0) {
				bestMons.push(attacker1Name);
//				console.log(attacker1Name + " is the first mon we compare with");
				continue;
			}
			// we go through all the already sorted mons to see if we're better than it
			// if we're not, we should sort ourself in below it
			for(var attacker2Index in bestMons) {
				var attacker2Name = bestMons[attacker2Index];
			//	console.log(attacker1Name + " vs " + attacker2Name);
				var attacker1WonFights = 0;
				var attacker2WonFights = 0;
				
//				console.log("------------------------- " + attacker1Name + ' vs ' + attacker2Name + " ------------------------");
				
				// for every defender someone have won over
				for(var name in wonOver[cp]) {
					// with every specific move set
					for(var quick in wonOver[cp][name]) {
						for(var charge in wonOver[cp][name][quick]) {
							// we shall now check if the attacker1 and attacker2 have won over this defender
							var result1 = null;
							var result2 = null;
							var attacker1 = null;
							var attacker2 = null;
							
							// we pull out the result of the match for attacker 1
							for(var i in bestMoves[ cp ][ attacker1Name ]['fights']) {
								if( bestMoves[ cp ][ attacker1Name ]['fights'][i]['defender']['name'] == name 
									&& bestMoves[ cp ][ attacker1Name ]['fights'][i]['defender']['selectedFast']['name'] == quick
									&& bestMoves[ cp ][ attacker1Name ]['fights'][i]['defender']['selectedSpecial']['name'] == charge )
								{
									result1 = bestMoves[ cp ][ attacker1Name ]['fights'][i]['result'];
									attacker1 = bestMoves[ cp ][ attacker1Name ]['fights'][i];

								}
							}
							
							// we pull out the result of the match for attacker 2
							for(var i in bestMoves[ cp ][ attacker2Name ]['fights']) {
								if( bestMoves[ cp ][ attacker2Name ]['fights'][i]['defender']['name'] == name 
									&& bestMoves[ cp ][ attacker2Name ]['fights'][i]['defender']['selectedFast']['name'] == quick
									&& bestMoves[ cp ][ attacker2Name ]['fights'][i]['defender']['selectedSpecial']['name'] == charge )
								{
									result2 = bestMoves[ cp ][ attacker2Name ]['fights'][i]['result'];
									attacker2 = bestMoves[ cp ][ attacker2Name ]['fights'][i];
								}
							}
//							console.log(name + " " + quick + " " + charge + " ------->");
							// if no one has won, we wont give any points for this
							if(!result1 && !result2) {
//								console.log("No one won");
								continue;
							}
							
							// only attacker1 won
							if(result1 && !result2) {
								attacker1WonFights++;
//								console.log(attacker1Name + " won");
								continue;
							}
							
							// only attacker2 won
							if(!result1 && result2) {
								attacker2WonFights++;
//								console.log(attacker2Name + " won");
								continue;
							}
							
							// both won their matches, so we need to compare the results
							var attacker1isTheWinner = false;

							if(optimize_for == 'hp') {
								if((attacker1['HP'] - result1['attacker']) < (attacker2['HP'] - result2['attacker'])) {
									if(result1['attacker'] > 0) {
										attacker1isTheWinner = true;
									}
								}
							} else if(optimize_for == 'battles_won') {
								if(result1['victories'] > result2['victories']) {
//									console.log(attacker1Name + " wins more consistently than " +attacker2Name);
									attacker1WonFights++;
									continue;
								// if we have a draw (our mons are op and always wins), we needs to handle this in a special way
								} else if(result1['victories'] == result2['victories']) {
									attacker1WonFights++;
									attacker2WonFights++;
//									console.log("Both win");
									continue;
								} else {
									attacker2WonFights++;
//									console.log(attacker2Name + " wins more consistently than " +attacker1Name);
									continue;
								}
							} else if(optimize_for == 'hp_percent') {
								if((attacker1['HP'] / result1['attacker']) < (attacker2['HP'] / result2['attacker'])) {
									if(result1['attacker'] > 0) {
										attacker1isTheWinner = true;
									}
								}
							} else if(optimize_for == 'quick') {
								if(result1.time > result2.time) {
									if(result1.time > 0) {
										attacker1isTheWinner = true;
									}
								}
							} else {
								console.error("Error: optimizing for invalid setting: " + optimize_for);
								return;
							}
							if(attacker1isTheWinner) {
								attacker1WonFights++;
							} else {
								attacker2WonFights++;
							}
						}
					}
				}

				if(attacker2WonFights > attacker1WonFights) {
					//attacker2 is the already sorted attacker
					//if he is better than us, we should
					//sort ourselfs in below him
					bestMons.splice(attacker2Index, 0, attacker1Name);
					break;
				} else {
					// we are better than the the attacker we are currently comparing against
					// so we need to check against the next one as well
				}
				
				// now what? We have compared ourselfs with
				// everyone already sorted
				if(attacker2Index == bestMons.length -1) {
					// so we must actually be best
					// ie, we should add ourselfs last
					bestMons.push(attacker1Name);
					break;
				}
			}
		}
		
		//console.log(bestMons);
		bestMonsPerCP[cp] = bestMons;
	}
//	console.log(bestMonsPerCP);
	
	var winnersPerCP = {};
	for(var cp in bestMonsPerCP) {
		var list = bestMonsPerCP[cp];
		var winners = [];
		for(var i in list) {
			var name = list[i];
				
			// we suck, we never won this
			if(typeof bestMoves[cp][name]['quick'] == 'undefined') {
				continue;
			}
			
			var mon = {};
			mon['name'] = name;
			mon['quick'] = bestMoves[cp][name]['quick'];
			mon['charge'] = bestMoves[cp][name]['charge'];
			mon['victories'] = bestMoves[cp][name]['victories'];
			mon['legacy'] = bestMoves[cp][name]['legacy'] == '' ? "No" : "Yes";
			
			mon['avgRemaningTime']  = bestMoves[cp][name]['avgRemaningTime'];
			mon['avgUsedHP']  = bestMoves[cp][name]['avgUsedHP'] ;
			mon['avgUsedHPPercentage'] = bestMoves[cp][name]['avgUsedHPPercentage'];
				
			winners.splice(0, 0, mon);
		}

		
		winnersPerCP[cp] = winners;
	}
	
	console.log(bestMoves);
	console.log(bestMonsPerCP);
	console.log(winnersPerCP);
	
	
	
	var resultsView = new ResultsView();
	var description = "Best attacker of type " + weakAgainst + " against attackers weak against " + weakAgainst;
	resultsView.addDescription(description, null);
	
	var header = [];
	header.push("#");
	var rows = [];
	var max = 0;
	for(var cp in winnersPerCP) {
		header.push(cp);
		if(winnersPerCP[cp].length > max) {
			max = winnersPerCP[cp].length;
		}
	}
	
	for(var i = 0; i < max; i++) {
		rows[i] = [];
		rows[i].push(i+1);
		for(var cp in winnersPerCP) {
			if(typeof winnersPerCP[cp][i] != 'undefined') {
				var infodiv = $('<div>').addClass('infodiv');
				$('<strong>').text(winnersPerCP[cp][i]['name']).appendTo(infodiv);
				$('<div>').addClass('smallFont').html(
					'Legacy: ' + winnersPerCP[cp][i]['legacy'] + '<br>' + 
					'Quick mv: ' + winnersPerCP[cp][i]['quick'] + '<br>' + 
					'Charge mv: ' + winnersPerCP[cp][i]['charge'] + '<br>' +
					'Battles won: ' + winnersPerCP[cp][i]['victories'] + '<br>' +
					'Avg remaning time: ' + winnersPerCP[cp][i]['avgRemaningTime'] + '<br>' +
					'Avg used HP %: ' + winnersPerCP[cp][i]['avgUsedHPPercentage'] + '<br>' +
					'Avg used HP: ' + winnersPerCP[cp][i]['avgUsedHP']
				).appendTo(infodiv);
				rows[i].push( $('<div>').append(infodiv).html() );
			} else {
				rows[i].push("&nbsp;");
			}
		}
	}
	
	resultsView.addHeader(header);

	var results = {};
	results['header'] = header;
	results['rows'] = [];
	results['title'] = weakAgainst;
	results['description'] = description;
	
	for(var i in rows) {
		resultsView.addRow(rows[i]);
		results['rows'].push(rows[i]);
	}
	var localstoragename = 'showBestAgainst' + window.location.search + JSON.stringify(dodge) + optimize_for + repeatBattle + weakAgainst;
	localStorage.setItem(localstoragename, JSON.stringify(results));
	
	$('title').text(weakAgainst);
	resultsView.outputResults();
	
	//console.log(wonOver);
	*/
	/*
	var attacker1 = Pokemon.newAttackerWithMaxCP(name1, quickmove1, chargemove1, maxCP);
	var attacker2 = Pokemon.newAttackerWithMaxCP(name2, quickmove2, chargemove2, maxCP);
	
	for(var i in data.pokemon) {
		for(var j in data.pokemon[i]['fastMoves']) {
			for(var k in data.pokemon[i]['specialMoves']) {
				var defender = Pokemon.newDefenderWithMinCP(data.pokemon[i]['name'], data.pokemon[i]['fastMoves'][j], data.pokemon[i]['specialMoves'][k], maxCP * 2);
				if(!defender) {
					continue;
				}
				
				if ( weakAgainst != 'Any' &&  ! (data.effective[ weakAgainst ][ defender.type[0] ] * data.effective[ weakAgainst ][ defender.type[1] ] > 1.1 )) {
					continue;
				}
				
				var result1 = (new Battle(attacker1, defender, dodge)).repeatBattle(repeats);
				var result2 = (new Battle(attacker2, defender, dodge)).repeatBattle(repeats);
				
				if((result1.time <= 0 || result1.attacker <= 0) && (result1.time <= 0 || result1.attacker <= 0)) {
					continue;
				}
				
				var attacker1isTheWinner = false;
				
				if(optimize_for == 'hp') {
					if(result2['attacker'] <= 0) {
						attacker1isTheWinner = true;
					}
					if((attacker1['HP'] - result1['attacker']) < (attacker2['HP'] - result2['attacker'])) {
						if(result1['attacker'] > 0) {
							attacker1isTheWinner = true;
						}
					}
				} else if(optimize_for == 'hp_percent') {
					if(result2['attacker'] <= 0) {
						attacker1isTheWinner = true;
					}
					if((attacker1['HP'] / result1['attacker']) < (attacker2['HP'] / result2['attacker'])) {
						if(result1['attacker'] > 0) {
							attacker1isTheWinner = true;
						}
					}
				} else if(optimize_for == 'quick') {
					if(result2['time'] <= 0) {
						attacker1isTheWinner = true;
					}
					if(result1.time > result2.time) {
						if(result1.time > 0) {
							attacker1isTheWinner = true;
						}
					}
				} else {
					console.error("Error: optimizing for invalid setting: " + optimize_for);
					return
				}
				
				if(attacker1isTheWinner) {
					resultsView1.addRow([
						defender['number'],
						defender['name'],
						resultsView1.formatMove(defender, attacker1, defender['selectedFast']),
						resultsView1.formatMove(defender, attacker1, defender['selectedSpecial']),
						defender['level'],
						defender['CP'],
						defender['HP'],
						parseFloat((attacker1['HP'] - result1['attacker']).toFixed(2)),
						Math.round( 100 * result1['attacker'] / attacker1['HP']),
						Math.round(99 - result1['time'] / 1000),
					
						"(" + parseFloat((attacker2['HP'] - result2['attacker']).toFixed(2)) + ")",
						"(" + Math.round( 100 * result2['attacker'] / attacker2['HP']) + ")",
						"(" + Math.round(99 - result2['time'] / 1000) + ")"
					]);
				} else {
					resultsView2.addRow([
						defender['number'],
						defender['name'],
						resultsView1.formatMove(defender, attacker2, defender['selectedFast']),
						resultsView1.formatMove(defender, attacker2, defender['selectedSpecial']),
						defender['level'],
						defender['CP'],
						defender['HP'],
						parseFloat((attacker2['HP'] - result2['attacker']).toFixed(2)),
						Math.round( 100 * result2['attacker'] / attacker2['HP']),
						Math.round(99 - result2['time'] / 1000),
					
						"(" + parseFloat((attacker1['HP'] - result1['attacker']).toFixed(2)) + ")",
						"(" + Math.round( 100 * result1['attacker'] / attacker1['HP']) + ")",
						"(" + Math.round(99 - result1['time'] / 1000) + ")"
					]);					
				}
			}
		}
	}
	*/
};

function showBestMoveSet(name, level, dodge, tie, optimize_for, repeatBattle, weakAgainst) {
	var winners = getBestMoveSet(name, level, dodge, tie, optimize_for, repeatBattle, weakAgainst);
	
	var dontClear = false;
	for(var quick in winners) {
		for(var charge in winners[quick]) {
			var resultsView = new ResultsView();
			resultsView.addDescription("<br><br><hr><br><br><br>Most effective move set; Defenders with less than half the CP", winners[quick][charge][0]);
			resultsView.addHeader(['#', 'Name', 'Defenders<br>Quick Attack', 'Defenders<br>Special Attack', 'Our Quick<br>Attack', 'Our Special<br>Attack', 'Level', 'CP', 'HP', 'Used<br>HP', 'Remaining<br>HP %', 'Time<br>Needed', 'Victories']);
			for(var i in winners[quick][charge]) {
				var attacker = winners[quick][charge][i];
				var defender = attacker['defender'];
				resultsView.addRow([
					defender['number'],
					defender['name'] + defender['legacy'],
					resultsView.formatMove(defender, attacker, defender['selectedFast']),
					resultsView.formatMove(defender, attacker, defender['selectedSpecial']),
					resultsView.formatMove(attacker, attacker['defender'], attacker['selectedFast']),
					resultsView.formatMove(attacker, attacker['defender'], attacker['selectedSpecial']),
					defender['level'],
					defender['CP'],
					defender['HP'],
					parseFloat((attacker['HP'] - attacker.result['attacker']).toFixed(5)),
					Math.round( 100 * attacker.result['attacker'] / attacker['HP']),
					Math.round(99 - attacker.result['time'] / 1000),
					attacker.result.victories
				]);
			}
			resultsView.outputResults(dontClear);
			dontClear = true;

		}
	}
};

// this is crazy and didnt really turn out well....
/*
function showBestPokemon(cp, dodge, tie, optimize_for, repeatBattle, weakAgainst) {
	var results = {};
	
	// for every pokemon there is
	for(var i in data.pokemon) {
		results[i] = {};
		for(var j in data.pokemon[i]['fastMoves']) {
			results[i][ data.pokemon[i]['fastMoves'][j] ] = {};
			for(var k in data.pokemon[i]['specialMoves']) {
				results[i][ data.pokemon[i]['fastMoves'][j] ][ data.pokemon[i]['specialMoves'][k] ] = [];

				var defender = Pokemon.newDefenderWithMinCP(data.pokemon[i]['name'], data.pokemon[i]['fastMoves'][j], data.pokemon[i]['specialMoves'][k], cp * 2);

				if(!defender) {
					continue;
				}
				

				if ( weakAgainst != 'Any' &&  ! (data.effective[ weakAgainst ][ defender.type[0] ] * data.effective[ weakAgainst ][ defender.type[1] ] > 1.1 )) {
					continue;
				}
				

				// let them have a match with every possible combo of all pokemon with different moves
				for(var name in data.pokemon) {
					for(var m in data.pokemon[name]['fastMoves']) {
						for(var n in data.pokemon[name]['specialMoves']) {
							var attacker = Pokemon.newAttackerWithMaxCP(name, data.pokemon[name]['fastMoves'][m], data.pokemon[name]['specialMoves'][n], cp);
							var result = (new Battle(attacker, defender, dodge)).repeatBattle(repeatBattle);

							if(result.time <= 0 || result.attacker <= 0) {
								continue;
							}
							
							// we store a copy of the result and the defender in the attacker
							attacker['result'] = result;
							attacker['defender'] = defender;
							// key is defender - defenders quick move - defenders charge move
							results[i][ data.pokemon[i]['fastMoves'][j] ][ data.pokemon[i]['specialMoves'][k] ].push(attacker);

						}
					}
				}
			}
		}
	}

	// we go through all the results to find most effective move set against our pokemon
	var winners = {};
	for(var i in results) {
		for(var j in results[i]) {
			for(var k in results[i][j]) {
				if(!results[i][j][k].length) {
					continue; // our 'mons never won against this defender :(
				}
				
				// we compare all our move sets to find the best one
				var max = null;
				for(var r in results[i][j][k]) {
					if(!max) {
						max = results[i][j][k][r];
						continue;
					}
					if(optimize_for == 'hp') {
//						console.log(results[i][j][k][r]['name'] + " HP: " + results[i][j][k][r]['HP'] + " Remaning: " + results[i][j][k][r]['result']['attacker'] + " Max: " + max['name'] + " HP: " + max['HP'] + " Remaning: " + max['result']['attacker'] + "    Math:  " +  (results[i][j][k][r]['HP'] - results[i][j][k][r]['result']['attacker']) + "     " + (max['HP'] - max['result']['attacker']) + " Result:   " + ((results[i][j][k][r]['HP'] - results[i][j][k][r]['result']['attacker']) < (max['HP'] - max['result']['attacker'])) );
						if((results[i][j][k][r]['HP'] - results[i][j][k][r]['result']['attacker']) < (max['HP'] - max['result']['attacker'])) {
//							console.log('Better');
							max = results[i][j][k][r];
						}
					} else if(optimize_for == 'hp_percent') {
						if(results[i][j][k][r]['result']['attacker'] / results[i][j][k][r]['HP'] > max['result']['attacker'] / max['HP'] ) {
							max = results[i][j][k][r];
						}
					} else if(optimize_for == 'quick') {
						if(results[i][j][k][r]['result']['time'] > max['result']['time']) {
							max = results[i][j][k][r];
						}
					} else {
						console.error("Error: optimizing for invalid setting: " + optimize_for);
					}
				}
				
				// if there are ties, lets keep these, to deal with them later
				var ties = [];
				var multi = tie / 100;
				for(var r in results[i][j][k]) { // results[i][j][k][r] is the attacker
					if(optimize_for == 'hp') {
						if((results[i][j][k][r]['HP'] - results[i][j][k][r]['result']['attacker']) <= (max['HP'] - max['result']['attacker']) / multi) {
							ties.push(results[i][j][k][r]);
						}
					} else if(optimize_for == 'hp_percent') {
						if(results[i][j][k][r]['result']['attacker'] / results[i][j][k][r]['HP'] >= max['result']['attacker'] / max['HP']  * multi ) {
							ties.push(results[i][j][k][r]);
						}
					} else if(optimize_for == 'quick') {
						if(results[i][j][k][r]['result']['time'] >= max['result']['time'] * multi) {
							ties.push(results[i][j][k][r]);
						}
					} else {
						console.error("Error: optimizing for invalid setting: " + optimize_for);
					}
					
				}
				if(ties.length > 1) {
					results[i][j][k] = ties;
					console.log(ties);
//					for(var a in ties) {
//					}
					continue; // we dont want to display the winning result if there is a tie
				}
						
				// for all non-ties, lets simply add these to an array with attacker name - attacker fastmove - attacker chargemove as key
				// so we lump all things a mon w/ moves have won together
				var bestMon = max['name'];
				var quick = max['selectedFast']['name'];
				var charge = max['selectedSpecial']['name'];
				if(! winners[bestMon] ) {
					winners[bestMon] = {};
				}
				if(! winners[bestMon][quick] ) {
					winners[bestMon][quick] = {};
				}
				if(! winners[bestMon][quick][charge] ) {
					winners[bestMon][quick][charge] = [];
				}
				winners[bestMon][quick][charge].push(max);
				results[i][j][k] = []; // we need to empty this, as we're reusing the data structure for ties
			}
		}
	}
//	console.log(winners);
	
	// now, lets deal with the ties
	// lets start with finding out what of the other move sets that won the most often
	var popularityContest = [];
	for(var bestMon in winners) {
		for(var quick in winners[bestMon]) {
			for(var charge in winners[bestMon][quick]) {
				if(! popularityContest[ winners[bestMon][quick][charge].length ] ) {
					popularityContest[ winners[bestMon][quick][charge].length ] = [];
				}
				// we create an array with [# of battles won for an attacker; mon w/ specific move set] as index, and in that array, we store mons that have made that many victories
				popularityContest[ winners[bestMon][quick][charge].length ].push(winners[bestMon][quick][charge]);
			}
		}
	}
	// and sort the result
	var popularityContestSorted = [];
	for(var i = popularityContest.length; i >= 0; i--) {
		if(popularityContest[i]) {
			for(var j in popularityContest[i]) {
				popularityContestSorted.push(popularityContest[i][j]);
			}
		}
	}

	// and now, lets to through the remaning mons and put them in the right pile.
	// the O of this actually isnt bad as it seems as name * i * j * k * r = n
	// but please kill me anyway, this is indeeed horrible
	console.log(popularityContestSorted);
	console.log(results);
	for(var p in popularityContestSorted) {
//		console.log(" p: " + p);
//		for(var name in results) {
//			console.log(" name: " + name);
			for(var i in results) {
//				console.log(" i: " + i);
				for(var j in results[i]) {
//					console.log(" j: " + j);
					for(var k in results[i][j]) {
//						console.log(" k: " + k);
						if(!results[i][j][k].length) {
							continue; // our 'mon never won against this defender (or we have already sorted out where to place the defender)
						}
						console.log("after");
						for(var r in results[i][j][k]) {
							console.log(results[i][j][k][r]['name'] +" and "+ popularityContestSorted[p][0]['name'] + ' vs ' +  results[i][j][k][r]['selectedFast']['name'] + ' and  ' + popularityContestSorted[p][0]['selectedFast']['name'] + ' vs ' + results[i][j][k][r]['selectedSpecial']['name'] + ' and ' +  popularityContestSorted[p][0]['selectedSpecial']['name']);
							if(results[i][j][k][r]['name'] == popularityContestSorted[p][0]['name'] &&  results[i][j][k][r]['selectedFast']['name'] == popularityContestSorted[p][0]['selectedFast']['name'] && results[i][j][k][r]['selectedSpecial']['name'] == popularityContestSorted[p][0]['selectedSpecial']['name']) {
								winners[ results[i][j][k][r]['name'] ][ results[i][j][k][r]['selectedFast']['name'] ][ results[i][j][k][r]['selectedSpecial']['name'] ].push(results[i][j][k][r]); // we sort it into the correct pile of winners
								console.log(results[i][j][k][r]['name'] + " with " + results[i][j][k][r]['selectedFast']['name'] + " and " + results[i][j][k][r]['selectedSpecial']['name'] +" added as a winner against " + results[i][j][k][r]['defender']['name']);
								results[i][j][k] = []; // we clear this type of mon, as we now have placed him in the right pile
								break;
							}
						}
					}
				}
			}
//		}
	}
	
	var dontClear = false;
	for(var name in winners) {
		for(var quick in winners[name]) {
			for(var charge in winners[name][quick]) {
				var resultsView = new ResultsView();
				resultsView.addDescription("<br><br><hr><br><br><br>Most effective pokemon with specific move set; Defenders with less than half the CP", winners[name][quick][charge][0]);
				resultsView.addHeader(['#', 'Name', 'Defenders<br>Quick Attack', 'Defenders<br>Special Attack', 'Our Quick<br>Attack', 'Our Pokemon', 'Our Special<br>Attack', 'Level', 'CP', 'HP', 'Used<br>HP', 'Remaining<br>HP %', 'Time<br>Needed', 'Victories']);
				for(var i in winners[name][quick][charge]) {
					attacker = winners[name][quick][charge][i];
					defender = attacker['defender'];
					resultsView.addRow([
						defender['number'],
						defender['name']  + defender['legacy'],
						resultsView.formatMove(defender, attacker, defender['selectedFast']),
						resultsView.formatMove(defender, attacker, defender['selectedSpecial']),
						attacker['name'],
						resultsView.formatMove(attacker, attacker['defender'], attacker['selectedFast']),
						resultsView.formatMove(attacker, attacker['defender'], attacker['selectedSpecial']),
						defender['level'],
						defender['CP'],
						defender['HP'],
						parseFloat((attacker['HP'] - attacker.result['attacker']).toFixed(5)),
						Math.round( 100 * attacker.result['attacker'] / attacker['HP']),
						Math.round(99 - attacker.result['time'] / 1000),
						attacker.result.victories
					]);
				}
				resultsView.outputResults(dontClear);
				dontClear = true;

			}
		}
	}
};
*/

function showPairTwoPokemons(name1, quickmove1, chargemove1, name2, quickmove2, chargemove2, maxCP, dodge, optimize_for, repeats, weakAgainst) {
	var attacker1 = Pokemon.newAttackerWithMaxCP(name1, quickmove1, chargemove1, maxCP);
	var attacker2 = Pokemon.newAttackerWithMaxCP(name2, quickmove2, chargemove2, maxCP);
	
	
	var resultsView1 = new ResultsView();
	resultsView1.addDescription("Cases where the " + attacker1['name'] + " with " + quickmove1 + "/" + chargemove1 + " is the most effective attacker. Results for " + attacker2['name'] + " with " + quickmove2 + "/" + chargemove2 + " in paranthesis. Defenders (with double CP)", attacker1);
	resultsView1.addHeader(['#', 'Name', 'Quick Attack', 'Special Attack', 'Level', 'CP', 'HP', 'Used<br>HP', 'Remaining<br>HP %', 'Time<br>Needed', '(Used<br>HP)', '(Remaining<br>HP %)', '(Time<br>Needed)']);

	var resultsView2 = new ResultsView();
	resultsView2.addDescription("Cases where the " + attacker2['name'] + " with " + quickmove2 + "/" + chargemove2 + " is the most effective attacker. Results for " + attacker1['name'] + " with " + quickmove1 + "/" + chargemove1 + " in paranthesis. Defenders (with double CP)", attacker2);
	resultsView2.addHeader(['#', 'Name', 'Quick Attack', 'Special Attack', 'Level', 'CP', 'HP', 'Used<br>HP', 'Remaining<br>HP %', 'Time<br>Needed', '(Used<br>HP)', '(Remaining<br>HP %)', '(Time<br>Needed)']);
	
	for(var i in data.pokemon) {
		for(var j in data.pokemon[i]['fastMoves']) {
			for(var k in data.pokemon[i]['specialMoves']) {
				var defender = Pokemon.newDefenderWithMinCP(data.pokemon[i]['name'], data.pokemon[i]['fastMoves'][j], data.pokemon[i]['specialMoves'][k], maxCP * 2);
				if(!defender) {
					continue;
				}
				
				if ( weakAgainst != 'Any' &&  ! (data.effective[ weakAgainst ][ defender.type[0] ] * data.effective[ weakAgainst ][ defender.type[1] ] > 1.1 )) {
					continue;
				}
				
				var result1 = (new Battle(attacker1, defender, dodge)).repeatBattle(repeats);
				var result2 = (new Battle(attacker2, defender, dodge)).repeatBattle(repeats);
				
				if((result1.time <= 0 || result1.attacker <= 0) && (result1.time <= 0 || result1.attacker <= 0)) {
					continue;
				}
				
				var attacker1isTheWinner = false;
					if(optimize_for == 'battles_won') {
						if(result2['attacker'] <= 0) {
							attacker1isTheWinner = true;
						}
						
						if(result1['victories'] > result2['victories']) {
							attacker1isTheWinner = true;
						}
				
					} else if(optimize_for == 'hp') {
					if(result2['attacker'] <= 0) {
						attacker1isTheWinner = true;
					}
					if((attacker1['HP'] - result1['attacker']) < (attacker2['HP'] - result2['attacker'])) {
						if(result1['attacker'] > 0) {
							attacker1isTheWinner = true;
						}
					}
				} else if(optimize_for == 'hp_percent') {
					if(result2['attacker'] <= 0) {
						attacker1isTheWinner = true;
					}
					if((attacker1['HP'] / result1['attacker']) < (attacker2['HP'] / result2['attacker'])) {
						if(result1['attacker'] > 0) {
							attacker1isTheWinner = true;
						}
					}
				} else if(optimize_for == 'quick') {
					if(result2['time'] <= 0) {
						attacker1isTheWinner = true;
					}
					if(result1.time > result2.time) {
						if(result1.time > 0) {
							attacker1isTheWinner = true;
						}
					}
				} else {
					console.error("Error: optimizing for invalid setting: " + optimize_for);
					return
				}
				
				if(attacker1isTheWinner) {
					resultsView1.addRow([
						defender['number'],
						defender['name'] + defender['legacy'],
						resultsView1.formatMove(defender, attacker1, defender['selectedFast']),
						resultsView1.formatMove(defender, attacker1, defender['selectedSpecial']),
						defender['level'],
						defender['CP'],
						defender['HP'],
						parseFloat((attacker1['HP'] - result1['attacker']).toFixed(2)),
						Math.round( 100 * result1['attacker'] / attacker1['HP']),
						Math.round(99 - result1['time'] / 1000),
					
						"(" + parseFloat((attacker2['HP'] - result2['attacker']).toFixed(2)) + ")",
						"(" + Math.round( 100 * result2['attacker'] / attacker2['HP']) + ")",
						"(" + Math.round(99 - result2['time'] / 1000) + ")"
					]);
				} else {
					resultsView2.addRow([
						defender['number'],
						defender['name'] + defender['legacy'],
						resultsView1.formatMove(defender, attacker2, defender['selectedFast']),
						resultsView1.formatMove(defender, attacker2, defender['selectedSpecial']),
						defender['level'],
						defender['CP'],
						defender['HP'],
						parseFloat((attacker2['HP'] - result2['attacker']).toFixed(2)),
						Math.round( 100 * result2['attacker'] / attacker2['HP']),
						Math.round(99 - result2['time'] / 1000),
					
						"(" + parseFloat((attacker1['HP'] - result1['attacker']).toFixed(2)) + ")",
						"(" + Math.round( 100 * result1['attacker'] / attacker1['HP']) + ")",
						"(" + Math.round(99 - result1['time'] / 1000) + ")"
					]);					
				}
			}
		}
	}
	resultsView1.outputResults();
	resultsView2.outputResults(true);
};


function showMostEffectiveAttackers(defender, dodge, repeats) {
	if(!defender) {
		alert('Selected defender cannot exist!');
		return;
	}
	var resultsView = new ResultsView();
	resultsView.addDescription("Most effective attackers (with less than half the CP)", defender);
	resultsView.addHeader(['#', 'Name', 'Quick Attack', 'Special Attack', 'Level', 'CP', 'HP', 'Used<br>HP', 'Remaining<br>HP %', 'Time<br>Needed', 'Victories']);

	for(var i in data.pokemon) {
		for(var j in data.pokemon[i]['fastMoves']) {
			for(var k in data.pokemon[i]['specialMoves']) {
				var attacker = Pokemon.newAttackerWithMaxCP(data.pokemon[i]['name'], data.pokemon[i]['fastMoves'][j], data.pokemon[i]['specialMoves'][k], defender['CP'] / 2);
				if( ! attacker ) {
					continue;
				}
				//var result = (new Battle(attacker, defender, dodge)).fight();
				var result = (new Battle(attacker, defender, dodge)).repeatBattle(repeats);

				if(result.time <= 0 || result.attacker <= 0) {
					continue;
				}
				
				resultsView.addRow([
					attacker['number'],
					attacker['name'] + attacker['legacy'],
					resultsView.formatMove(attacker, defender, attacker['selectedFast']),
					resultsView.formatMove(attacker, defender, attacker['selectedSpecial']),
					attacker['level'],
					attacker['CP'],
					attacker['HP'],
					Math.round(100 * (attacker['HP'] - result['attacker'])) / 100,
					Math.round( 100 * result['attacker'] / attacker['HP']),
					Math.round(99 - result['time'] / 1000),
					result['victories'],
				]);
			}
		}
	}
	resultsView.outputResults();
};

function showLeastEffectiveDefender(attacker, dodge, repeats) {
	var resultsView = new ResultsView();
	resultsView.addDescription("Least effective defenders (with more than double the CP)", attacker);
	resultsView.addHeader(['#', 'Name', 'Quick Attack', 'Special Attack', 'Level', 'CP', 'HP', 'Used<br>HP', 'Remaining<br>HP %', 'Time<br>Needed', 'Victories']);

	for(var i in data.pokemon) {
		for(var j in data.pokemon[i]['fastMoves']) {
			for(var k in data.pokemon[i]['specialMoves']) {
				var defender = Pokemon.newDefenderWithMinCP(data.pokemon[i]['name'], data.pokemon[i]['fastMoves'][j], data.pokemon[i]['specialMoves'][k], attacker['CP'] * 2);
				if(!defender) {
					continue;
				}
				var result = (new Battle(attacker, defender, dodge)).repeatBattle(repeats);
				//var result = (new Battle(attacker, defender, dodge)).fight();

				if(result.time <= 0 || result.attacker <= 0) {
					continue;
				}

				resultsView.addRow([
					defender['number'],
					defender['name'] + defender['legacy'],
					resultsView.formatMove(defender, attacker, defender['selectedFast']),
					resultsView.formatMove(defender, attacker, defender['selectedSpecial']),
					defender['level'],
					defender['CP'],
					defender['HP'],
					Math.round( 100 * (attacker['HP'] - result['attacker'])) / 100,
					Math.round( 100 * result['attacker'] / attacker['HP']),
					Math.round(99 - result['time'] / 1000),
					result['victories'],
				]);
			}
		}
	}
	resultsView.outputResults();
};


function getBattleTimerFromRaidDefenderName(defenderName) {
	
	var lvl1Mons = ['Magikarp', 'Bayleef', 'Quilava', 'Croconaw'];
	var lvl2Mons = ['Muk', 'Exeggutor', 'Weezing', 'Electabuzz', 'Magmar'];
	var lvl3Mons = ['Arcanine', 'Alakazam', 'Machamp', 'Gengar', 'Vaporeon', 'Jolteon', 'Flareon'];
	var lvl4Mons = ['Venusaur', 'Charizard', 'Blastoise', 'Rhydon', 'Lapras', 'Snorlax', 'Tyranitar'];
	var lvl5Mons = ['Lugia', 'Articuno', 'Zapdos', 'Moltres', 'Mewtwo', 'Mew', 'Raikou', 'Entei', 'Ho-Oh', 'Suicune', 'Celebi', 'Mewtwo', 'Entei', 'Raikou', 'Suicune'];
	
	if(lvl5Mons.indexOf(defenderName) == -1) {
		return 180;
	} else {
		return 300;
	}
}

function getHPfromRaidDefenderName(defenderName) {
	// this is ugly as hell, but quick copypasta is tasty copypasta.
	var lvl1Mons = ['Magikarp', 'Bayleef', 'Quilava', 'Croconaw'];
	var lvl2Mons = ['Muk', 'Exeggutor', 'Weezing', 'Electabuzz', 'Magmar'];
	var lvl3Mons = ['Arcanine', 'Alakazam', 'Machamp', 'Gengar', 'Vaporeon', 'Jolteon', 'Flareon'];
	var lvl4Mons = ['Venusaur', 'Charizard', 'Blastoise', 'Rhydon', 'Lapras', 'Snorlax', 'Tyranitar'];
	var lvl5Mons = ['Lugia', 'Articuno', 'Zapdos', 'Moltres', 'Mewtwo', 'Mew', 'Raikou', 'Entei', 'Ho-Oh', 'Suicune', 'Celebi', 'Mewtwo', 'Entei', 'Raikou', 'Suicune'];

	if(lvl5Mons.indexOf(defenderName) != -1) {
		return 12500;
	} else if(lvl4Mons.indexOf(defenderName) != -1) {
		return 7500;
	} else if(lvl3Mons.indexOf(defenderName) != -1) {
		return 3000;
	} else if(lvl2Mons.indexOf(defenderName) != -1) {
		return 1800;
	} else if(lvl1Mons.indexOf(defenderName) != -1) {
		return 600;
	} else {
		return 0;
	}
}

function showMaxEffectiveLevel(attacker, raidDefender, attackIV, showAll) {
	var battleTimer = getBattleTimerFromRaidDefenderName(raidDefender);
	var defenderHP = getHPfromRaidDefenderName(raidDefender);
	
	var resultsView = new ResultsView();
	resultsView.addDescription("How far it is useful to power up your " + attacker.name + " if you are going to use to fight a Raid " + raidDefender + ". Weave DPS is how much HP your " + attacker.name + " will remove from the Raid " + raidDefender + " per second. Thats the interesting number in this table. :) ");
	resultsView.addHeader(['Name', 'Level', 'Quick Move', 'Charge Move', 'Weave<br>DPS', 'Min #<br>trainers', '# of '+ attacker.name +'<br>needed']);

	for(var i in data.pokemon) {
		if(data.pokemon[i].name != raidDefender) {
			continue;
		}

		var j = 0;
		var k = 0;
		
		var lastQuickDamage = 0;
		for(var level = 1; level <= 39; level += 0.5) {
			var newAttacker = Pokemon.newAttacker(attacker['name'], attacker['selectedFast']['name'], attacker['selectedSpecial']['name'], level, attackIV);
			var defender = Pokemon.newDefender(data.pokemon[i]['name'], data.pokemon[i]['fastMoves'][j], data.pokemon[i]['specialMoves'][k], 40);
			
			if(!defender) {
				continue;
			}
			
			var battle = new Battle(newAttacker, defender, 'none');

			if(showAll != 'yes' && lastQuickDamage == battle.attacker.selectedFast.damage && battle.attacker.level != 39) {
				continue;
			}			
			
			var showBold = (showAll == 'yes' && lastQuickDamage != battle.attacker.selectedFast.damage);
			
			lastQuickDamage = battle.attacker.selectedFast.damage;
			
			// for the attacker
			var numberOfTimesQuickMoveIsNeeded = - battle.attacker.selectedSpecial.energy / battle.attacker.selectedFast.energy;
			var totalTimeNeeded = battle.attacker.selectedFast.cooldown / 1000 * numberOfTimesQuickMoveIsNeeded + battle.attacker.selectedSpecial.cooldown / 1000;
			var totalDamage = numberOfTimesQuickMoveIsNeeded * battle.attacker.selectedFast.damage + battle.attacker.selectedSpecial.damage;
			var weaveDPS = (totalDamage / totalTimeNeeded).toFixed(2);
			
			
			// for the defender
			var numberOfTimesQuickMoveIsNeededDefender = - battle.defender.selectedSpecial.energy / battle.defender.selectedFast.energy;
			var totalTimeNeededDefender = battle.defender.selectedFast.cooldown / 1000 * numberOfTimesQuickMoveIsNeededDefender + battle.defender.selectedSpecial.cooldown / 1000;
			var totalDamageDefender = numberOfTimesQuickMoveIsNeeded * battle.defender.selectedFast.damage + battle.defender.selectedSpecial.damage;
			var weaveDPSDefender = (totalDamageDefender / totalTimeNeededDefender).toFixed(2);
			
			var timeToKillAttacker = battle.attacker.HP / weaveDPSDefender;
			console.log(battle);
			console.log("time to kill attacker: " + timeToKillAttacker);
			
			var timeNeededToKillDefender = defenderHP / weaveDPS;
			
			
			console.log("time to kill defender: " + timeNeededToKillDefender);
			
			
			var timePassed = 0;
			var damageDone = 0;
			var attackersUsed = 0;
			do {
				var multi = 1;
				if(timeToKillAttacker > (battleTimer - timePassed)) { // we can't fight a whole fight before timeout
					multi = (battleTimer - timePassed) / timeToKillAttacker;
				}
				damageDone += weaveDPS * timeToKillAttacker * multi;
				console.log(weaveDPS * timeToKillAttacker * multi);
				var timeForPokemonSwap = 4;
				timePassed += timeToKillAttacker + timeForPokemonSwap;
				attackersUsed++;
				if(attackersUsed % 6 == 0) {
					var timeToSelectNewPokemons = 15;
					timePassed += timeToSelectNewPokemons; // select new pokemons
				}
			} while ( timePassed < battleTimer );
			console.log("Damage done: " + damageDone);
			var trainersNeeded = defenderHP / damageDone;
			
			var totalAttackersNeeded = attackersUsed * trainersNeeded;

			resultsView.addRow(
				[
					battle.attacker.name,
					battle.attacker.level,
					battle.attacker.selectedFast.name,
					battle.attacker.selectedSpecial.name,
					'<b>' + weaveDPS + '</b>',
					trainersNeeded.toFixed(2),
					Math.ceil(totalAttackersNeeded)
				], showBold
			);

		}
	}
	resultsView.outputResults();
};

function getBestRaiders(raidDefender) {
	if(!confirm("This simulation will take a long time. If you run it on a phone, it may take up to 10 minutes. Are you sure?")) {
		return false;
	}
	
	
	var battleTimer = getBattleTimerFromRaidDefenderName(raidDefender);
	var defenderHP = getHPfromRaidDefenderName(raidDefender);
	var resultsView = new ResultsView();
	resultsView.addDescription("This view shows how the different pokemons compare to each other in a fight against a Raid " + raidDefender + ". It is assumed that your attacker have an attack IV of 15. If it doesn't, use the \"The most useful level to power up to\" function to find how much further you need to power up your attacker to get comparable results. Weave DPS is how much HP your " + "todo" + " will remove from the Raid " + raidDefender + " per second. Thats the interesting number in this table. :) ");
	resultsView.addHeader(['Rank', 'Name', 'Level', 'Attack<br>IV', 'Quick Move', 'Charge Move', 'Weave<br>DPS', 'Min #<br>trainers', '# of '+ "attackers" +'<br>needed']);

	for(var i in data.pokemon) {
		if(data.pokemon[i].name != raidDefender) {
			continue;
		}
		var j = 0;
		var k = 0;
		var defender = Pokemon.newDefender(data.pokemon[i]['name'], data.pokemon[i]['fastMoves'][j], data.pokemon[i]['specialMoves'][k], 40);
		var results = [];
		
		for(var m in data.pokemon) {
			$('title').text('PoGo Gym Sim - Simulating ' + data.pokemon[m].number + '/251');
//			if(data.pokemon[m].number  > 20) {
//				continue;
//			}
			for(var n in data.pokemon[m].fastMoves) {
				for(var p in data.pokemon[m].specialMoves) {

					var lastQuickDamage = 0;
					for(var level = 1; level <= 39; level += 0.5) {
						var attackIV = 15;
						var newAttacker = Pokemon.newAttacker(data.pokemon[m]['name'], data.pokemon[m]['fastMoves'][n], data.pokemon[m]['specialMoves'][p], level, attackIV);

						
						if(!defender) {
							console.error("No defender found");
							continue;
						}


						var battle = new Battle(newAttacker, defender, 'none');

						// todo: make sure we show the next level 1 pokemon as well
						if(lastQuickDamage == battle.attacker.selectedFast.damage && battle.attacker.level != 39) {
							continue;
						}			
						
						var showBold = false; //(showAll == 'yes' && lastQuickDamage != battle.attacker.selectedFast.damage);
						
						lastQuickDamage = battle.attacker.selectedFast.damage;
						
						// for the attacker
						var numberOfTimesQuickMoveIsNeeded = - battle.attacker.selectedSpecial.energy / battle.attacker.selectedFast.energy;
						var totalTimeNeeded = battle.attacker.selectedFast.cooldown / 1000 * numberOfTimesQuickMoveIsNeeded + battle.attacker.selectedSpecial.cooldown / 1000;
						var totalDamage = numberOfTimesQuickMoveIsNeeded * battle.attacker.selectedFast.damage + battle.attacker.selectedSpecial.damage;
						var weaveDPS = (totalDamage / totalTimeNeeded).toFixed(2);
						
						
						// for the defender
						var numberOfTimesQuickMoveIsNeededDefender = - battle.defender.selectedSpecial.energy / battle.defender.selectedFast.energy;
						var totalTimeNeededDefender = battle.defender.selectedFast.cooldown / 1000 * numberOfTimesQuickMoveIsNeededDefender + battle.defender.selectedSpecial.cooldown / 1000;
						var totalDamageDefender = numberOfTimesQuickMoveIsNeeded * battle.defender.selectedFast.damage + battle.defender.selectedSpecial.damage;
						var weaveDPSDefender = (totalDamageDefender / totalTimeNeededDefender).toFixed(2);
						
						var timeToKillAttacker = battle.attacker.HP / weaveDPSDefender;
						//console.log("time to kill attacker: " + timeToKillAttacker);
						
						var timeNeededToKillDefender = defenderHP / weaveDPS;
						
						
						//console.log("time to kill defender: " + timeNeededToKillDefender);
						
						
						var timePassed = 0;
						var damageDone = 0;
						var attackersUsed = 0;
						do {
							var multi = 1;
							if(timeToKillAttacker > (battleTimer - timePassed)) { // we can't fight a whole fight before timeout
								multi = (battleTimer - timePassed) / timeToKillAttacker;
							}
							damageDone += weaveDPS * timeToKillAttacker * multi;
							//console.log(weaveDPS * timeToKillAttacker * multi);
							var timeForPokemonSwap = 4;
							timePassed += timeToKillAttacker + timeForPokemonSwap;
							attackersUsed++;
							if(attackersUsed % 6 == 0) {
								var timeToSelectNewPokemons = 15;
								timePassed += timeToSelectNewPokemons; // select new pokemons
							}
						} while ( timePassed < battleTimer );
						//console.log("Damage done: " + damageDone);
						var trainersNeeded = defenderHP / damageDone;
						
						var totalAttackersNeeded = attackersUsed * trainersNeeded;
						
						results.push([
							battle.attacker.name,
							battle.attacker.level,
							attackIV,
							battle.attacker.selectedFast.name,
							battle.attacker.selectedSpecial.name,
							'<b>' + weaveDPS + '</b>',
							trainersNeeded.toFixed(2),
							Math.ceil(totalAttackersNeeded)
						]);
					}
				}
			}
		}
		
	}
	
	results.sort(function(a,b) { 
		// I really want to go and catch some unowns and cant remember how to do this properly..
		key_a = parseFloat(a[5].replace('>','').replace('>','').replace('<','').replace('<','').replace('b','').replace('b','').replace('/',''));
		key_b = parseFloat(b[5].replace('>','').replace('>','').replace('<','').replace('<','').replace('b','').replace('b','').replace('/',''));

		if(key_a > key_b) {
			return -1;
		}
		if(key_a < key_b) {
			return 1;
		}		

		return 0;
	
	});
	
	$('title').text('PoGo Gym Sim - Please wait while sorting results');

	for(var res in results) {
		results[res].unshift(parseInt(res)+1); // res is a counter. Unshift puts it at the beginning of the array.
		resultsView.addRow(results[res], false);
	}
	resultsView.outputResults();
	$('title').text('PoGo Gym Sim');
};