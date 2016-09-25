function Form() {
	var form = $('<form>');
	var that = this;
	
	function addPokemonController() {
		$("<strong>Pokemon: </strong>").appendTo(form);
		var select = $("<select>").appendTo(form);
		for(var i in data.pokemon) {
			$("<option value='"+i+"'>"+i+"</option>").appendTo(select);
		}
		$('<br>').appendTo(form);
		that.pokemonController = select;
		
		return select;
	};
	
	function getPokemon() {
		return that.pokemonController.val();
	};
	
	function addLevelController() {
		$("<strong>Level: </strong>").appendTo(form);
		var selectlevel = $("<select>").appendTo(form);
		for(var i = 1; i <= 40; i = i + 0.5) {
			$("<option value='"+i+"'>"+i+"</option>").appendTo(selectlevel);
		}
		$('<br>').appendTo(form);
		
		that.levelController = selectlevel;
		return selectlevel;
	};
	
	function getLevel() {
		return that.levelController.val();
	};
	
	function addQuickMoveController(pokemonController) {
		$("<strong>Quick Move: </strong>").appendTo(form);
		var fastMoveContainer = $('<span>').appendTo(form);
		$('<br>').appendTo(form);

		pokemonController.on('change', function() {
			fastMoveContainer.empty();

			var selectquick = $("<select class='quick'>").appendTo(fastMoveContainer);
			var selectedPokemon = pokemonController.val() ? pokemonController.val() : 'Bulbasaur';
			for(var i in data.pokemon[ selectedPokemon ]['fastMoves']) {
				$("<option value='"+ data.pokemon[ selectedPokemon ]['fastMoves'][i] +"'>"+ data.pokemon[ selectedPokemon ]['fastMoves'][i] +"</option>").appendTo(selectquick);
			}
		});
		pokemonController.trigger('change');
	};
	
	function getQuickMove() {
		return form.find('.quick').val();
	};
	
	function addChargeMoveController(pokemonController) {
		$("<strong>Charge Move: </strong>").appendTo(form);
		var fastMoveContainer = $('<span>').appendTo(form);
		$('<br>').appendTo(form);

		pokemonController.on('change', function() {
			fastMoveContainer.empty();

			var selectquick = $("<select class='charge'>").appendTo(fastMoveContainer);
			var selectedPokemon = pokemonController.val() ? pokemonController.val() : 'Bulbasaur';
			for(var i in data.pokemon[ selectedPokemon ]['specialMoves']) {
				$("<option value='"+ data.pokemon[ selectedPokemon ]['specialMoves'][i] +"'>"+ data.pokemon[ selectedPokemon ]['specialMoves'][i] +"</option>").appendTo(selectquick);
			}
		});
		pokemonController.trigger('change');
	};
	
	function getChargeMove() {
		return form.find('.charge').val();
	};
	
	function addDodgeController() {
		$("<strong>Dodge: </strong>").appendTo(form);
		var dodge = $("<select><option value='none'>None</option><option value='quick'>Quick moves</option><option value='charge'>Charge moves</option><option value='both'>Both</option></select>").appendTo(form);
		$('<br>').appendTo(form);
		
		that.dodgeController = dodge;
	};
	
	function getDodge() {
		var dodge = that.dodgeController.val();
		
		var dodgeQuick = false;
		var dodgeCharge = false;
		if(dodge == "both") {
			dodgeQuick = true;
			dodgeCharge = true;	
		} else if(dodge == "quick") {
			dodgeQuick = true;
		} else if(dodge == "charge") {
			dodgeCharge = true;
		}
		return {'quick' : dodgeQuick, 'charge' : dodgeCharge};
	};
	
	function addTieController() {
		$("<strong>Tie cut of: </strong>").appendTo(form);
		var select = $("<select>").appendTo(form);
		for(var i = 100; i >= 1; i = i - 1) {
			$("<option value='"+i+"'>"+i+"%</option>").appendTo(select);
		}
		$('<br>').appendTo(form);
		
		that.tieController = select;
		return select;
	};
	
	function getTie() {
		return that.tieController.val();
	};
	function addOptimizeForController() {
		$("<strong>Optimize: </strong>").appendTo(form);
		var select = $("<select><option value='quick'>Quick battle</option><option value='hp'>Use little HP</option><option value='hp_percent'>Use little HP %</option></select>").appendTo(form);
		$('<br>').appendTo(form);
		
		that.optimizeForController = select;
		return select;
	};
	
	function getOptimizeFor() {
		return that.optimizeForController.val();
	};
	
	function addGoButton(callback, config) {
		$('<button>Go!</button>').appendTo(form).on('click', function(ev) {
			ev.preventDefault();
			ev.stopPropagation();
			callback(form, config);
		});
		$('<br>').appendTo(form);
	};
	
	this.mostEffective = function(forWhat) {
		var pokemonController = addPokemonController();
		addLevelController();
		addQuickMoveController(pokemonController);
		addChargeMoveController(pokemonController);
		addDodgeController();
		addGoButton(function(form, config) {
			if(config.forWhat == 'defender') {
				var defender = Pokemon.newDefender(getPokemon(), getQuickMove(), getChargeMove(), getLevel());
				showMostEffectiveAttackers(defender, getDodge());
			} else {
				var attacker = Pokemon.newAttacker(getPokemon(), getQuickMove(), getChargeMove(), getLevel());
				showLeastEffectiveDefender(attacker, getDodge());
			}
			
		}, { forWhat : forWhat });

		var text = forWhat == 'attacker' ? 'Find out what your attacker is good at' : 'Find the most effective attacker against a specific defender';
		return $("<div>").text(text).addClass("settingsBox").append(form);
	};
	
	this.bestMoveset = function() {
		addPokemonController();
		addLevelController();
		addDodgeController();
		addTieController();
		addOptimizeForController();
		addGoButton(function(form) {
			showBestMoveSet(getPokemon(), getLevel(), getDodge(), getTie(), getOptimizeFor());
		});

		var text = 'Find the most effective moveset of a pokemon';
		return $("<div>").text(text).addClass("settingsBox").append(form);
	};
};
