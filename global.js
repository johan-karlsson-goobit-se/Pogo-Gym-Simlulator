data = new Dataset();
$(document).ready(function() {	
	(new Form()).mostEffective('defender').appendTo('body');
	(new Form()).mostEffective('attacker').appendTo('body');
	(new Form()).bestMoveset().appendTo('body');
	$("<p style='clear: both;'><strong>Tie cut of: </strong> If the result of a battle differs with less than this percentage, ignore the winning battle and pretend that the move set that have won the most battles was most effective against this defender as well. This is useful if you want a list of move sets that is <i>good enough</i> instead of perfect.</p>").appendTo('body');
	$("<p>This tool is primarilly bult to analyze attacker performance for prestiging gyms. Your pokemon will always have half the CP of the defending pokemons. As a result of this, you will very likely want to select a low level, else you won't get any results. (Eg, a level 25 Dragonite wont give any results, as there isn't any 5000 CP pokemons it can beat.)</p>").appendTo('body');	
	$("<p>Used HP and Remaining HP% always refers to the pokemon selected on page 1, while the other stats (unless specifically noted) belong to the pokemon listed on that row.</p>").appendTo('body');
	$("<p>This tool is in alpha state. This means that, although I HOPE it gives reasonable results, there may be bugs and errors. Don't make any decisions or draw any conclutions based on the output of this tool.</p>").appendTo('body');
	$("<p>There are forms of randomness built into this tool, so the results may differ for different times you run the simulations. It currently only runs each battle once, but a future version will run multiple simulations and average the results. If you get results that are unbelivable, its most likely because they are. Try to re-run the simulation and see if the new result differs.</p>").appendTo('body');
});

function showBestMoveSet(name, level, dodge, tie, optimize_for) {
	var attackerCP = Pokemon.newAttacker(name, data.pokemon[name]['fastMoves'][0], data.pokemon[name]['specialMoves'][0], level).CP;
	var results = {};
	
	// for every pokemon there is
	for(var i in data.pokemon) {
		results[i] = {};
		for(var j in data.pokemon[i]['fastMoves']) {
			results[i][j] = {};
			for(var k in data.pokemon[i]['specialMoves']) {
				results[i][j][k] = [];

				var defender = Pokemon.newDefenderWithMinCP(data.pokemon[i]['name'], data.pokemon[i]['fastMoves'][j], data.pokemon[i]['specialMoves'][k], attackerCP * 2);
				
				if(!defender) {
					continue;
				}
				// let them have a match with every possible combo of our pokemon with different moves
				for(var m in data.pokemon[name]['fastMoves']) {
					for(var n in data.pokemon[name]['specialMoves']) {
						var attacker = Pokemon.newAttacker(name, data.pokemon[name]['fastMoves'][m], data.pokemon[name]['specialMoves'][n], level);
						var result = (new Battle(attacker, defender, dodge)).fight();

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
					} else if(optimize_for == 'hp_percentage') {
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
				for(var r in results[i][j][k]) {
					if(optimize_for == 'hp') {
						if(results[i][j][k][r]['result']['attacker'] > max['result']['attacker'] * multi) {
							ties.push(results[i][j][k][r]);
						}
					} else if(optimize_for == 'hp_percentage') {
						if(results[i][j][k][r]['result']['attacker'] / results[i][j][k][r]['HP'] > max['result']['attacker'] / max['HP']  * multi ) {
							ties.push(results[i][j][k][r]);
						}
					} else if(optimize_for == 'quick') {
						if(results[i][j][k][r]['result']['time'] > max['result']['time'] * multi) {
							ties.push(results[i][j][k][r]);
						}
					} else {
						console.error("Error: optimizing for invalid setting: " + optimize_for);
					}
					
				}
				if(ties.length > 1) {
					results[i][j][k] = ties;
					for(var a in ties) {
					}
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
	
	
	var dontClear = false;
	for(var quick in winners) {
		for(var charge in winners[quick]) {
			var resultsView = new ResultsView();
			resultsView.addDescription("<br><br><hr><br><br><br>Most effective move set; Defenders with less than half the CP", winners[quick][charge][0]);
			resultsView.addHeader(['#', 'Name', 'Defenders Quick Attack', 'Defenders Special Attack', 'Our Quick Attack', 'Our Special Attack', 'Level', 'CP', 'HP', 'Used<br>HP', 'Remaining<br>HP %', 'Time<br>Needed']);
			for(var i in winners[quick][charge]) {
				attacker = winners[quick][charge][i];
				defender = attacker['defender'];
				resultsView.addRow([
					defender['number'],
					defender['name'],
					resultsView.formatMove(defender, attacker, defender['selectedFast']),
					resultsView.formatMove(defender, attacker, defender['selectedSpecial']),
					resultsView.formatMove(attacker, attacker['defender'], attacker['selectedFast']),
					resultsView.formatMove(attacker, attacker['defender'], attacker['selectedSpecial']),
					defender['level'],
					defender['CP'],
					defender['HP'],
					attacker['HP'] - attacker.result['attacker'],
					Math.round( 100 * attacker.result['attacker'] / attacker['HP']),
					Math.round(99 - attacker.result['time'] / 1000),
				]);
			}
			resultsView.outputResults(dontClear);
			dontClear = true;

		}
	}
};

function showMostEffectiveAttackers(defender, dodge) {
	var resultsView = new ResultsView();
	resultsView.addDescription("Most effective attackers (with less than half the CP)", defender);
	resultsView.addHeader(['#', 'Name', 'Quick Attack', 'Special Attack', 'Level', 'CP', 'HP', 'Used<br>HP', 'Remaining<br>HP %', 'Time<br>Needed']);

	for(var i in data.pokemon) {
		for(var j in data.pokemon[i]['fastMoves']) {
			for(var k in data.pokemon[i]['specialMoves']) {
				var attacker = Pokemon.newAttackerWithMaxCP(data.pokemon[i]['name'], data.pokemon[i]['fastMoves'][j], data.pokemon[i]['specialMoves'][k], defender['CP'] / 2);
				var result = (new Battle(attacker, defender, dodge)).fight();

				if(result.time <= 0 || result.attacker <= 0) {
					continue;
				}
				
				resultsView.addRow([
					attacker['number'],
					attacker['name'],
					resultsView.formatMove(attacker, defender, attacker['selectedFast']),
					resultsView.formatMove(attacker, defender, attacker['selectedSpecial']),
					attacker['level'],
					attacker['CP'],
					attacker['HP'],
					attacker['HP'] - result['attacker'],
					Math.round( 100 * result['attacker'] / attacker['HP']),
					Math.round(99 - result['time'] / 1000),
				]);
			}
		}
	}
	resultsView.outputResults();
};

function showLeastEffectiveDefender(attacker, dodge) {
	var resultsView = new ResultsView();
	resultsView.addDescription("Least effective defenders (with more than double the CP)", attacker);
	resultsView.addHeader(['#', 'Name', 'Quick Attack', 'Special Attack', 'Level', 'CP', 'HP', 'Used<br>HP', 'Remaining<br>HP %', 'Time<br>Needed']);

	for(var i in data.pokemon) {
		for(var j in data.pokemon[i]['fastMoves']) {
			for(var k in data.pokemon[i]['specialMoves']) {
				var defender = Pokemon.newDefenderWithMinCP(data.pokemon[i]['name'], data.pokemon[i]['fastMoves'][j], data.pokemon[i]['specialMoves'][k], attacker['CP'] * 2);
				if(!defender) {
					continue;
				}
				var result = (new Battle(attacker, defender, dodge)).fight();

				if(result.time <= 0 || result.attacker <= 0) {
					continue;
				}

				resultsView.addRow([
					defender['number'],
					defender['name'],
					resultsView.formatMove(defender, attacker, defender['selectedFast']),
					resultsView.formatMove(defender, attacker, defender['selectedSpecial']),
					defender['level'],
					defender['CP'],
					defender['HP'],
					attacker['HP'] - result['attacker'],
					Math.round( 100 * result['attacker'] / attacker['HP']),
					Math.round(99 - result['time'] / 1000),
				]);
			}
		}
	}
	resultsView.outputResults();
};