function Pokemon(name) {
	this.that = this;
	$.extend(true, this, data.pokemon[ name ]);
};


Pokemon.newDefender = function(name, fastMove, specialMove, level) {
	var me = Pokemon.newAttacker(name, fastMove, specialMove, level);
	me['fightHP'] = Math.max(me['HP'] * 2, 20);
	me['selectedSpecial']['cooldown'] = me['selectedSpecial']['cooldown'] + 2000;
	me['selectedFast']['cooldown'] = me['selectedFast']['cooldown'] + 2000;
	return me;
}

Pokemon.newAttackerWithMaxCP = function(name, fastMove, specialMove, maxCP) {
	var level = 40;
	do {
		var attacker = Pokemon.newAttacker(name,  fastMove, specialMove, level);
		level = level - 0.5;
		level = parseFloat(parseFloat(level).toFixed(1));
	} while(maxCP < attacker['CP']  && attacker['level'] > 1);
	return attacker;
}

Pokemon.newDefenderWithMinCP = function(name, fastMove, specialMove, minCP) {
	var level = 1;
	do {
		var defender = Pokemon.newDefender(name,  fastMove, specialMove, level);
		level = level + 0.5;
		level = parseFloat(parseFloat(level).toFixed(1));
		if(level > 40) {
			defender = null;
			break;
		}
	} while(minCP > defender['CP']);
	return defender;
}

Pokemon.newAttacker = function(name, fastMove, specialMove, level) {
	var me = new Pokemon(name);

	me['selectedFast'] = [];
	me['selectedFast']['name'] = fastMove;
	me['selectedSpecial'] = [];
	me['selectedSpecial']['name'] = specialMove;
	
	me['level'] = level;
	me['attackIV'] = 15;
	me['defenseIV'] = 15;
	me['staminaIV'] = 15;

	me['attack'] = (me['baseAtk'] + me['attackIV'] ) * data.cpm[ me['level'] ];
	me['defense'] = (me['baseDef'] + me['defenseIV'] ) * data.cpm[ me['level'] ];
	me['HP'] = Math.floor( (me['baseSta'] + me['staminaIV'] ) * data.cpm[ me['level'] ] );
	me['fightHP'] = Math.max(10, me['HP']);

	me['selectedFast']['type'] = data.moves[ me['selectedFast']['name'] ]['type'];
	me['selectedFast']['power'] = data.moves[ me['selectedFast']['name'] ]['power'];
	me['selectedFast']['cooldown'] = data.moves[ me['selectedFast']['name'] ]['duration'];
	me['selectedFast']['energy'] = data.moves[ me['selectedFast']['name'] ]['energy'];

	me['selectedSpecial']['type'] = data.moves[ me['selectedSpecial']['name'] ]['type'];
	me['selectedSpecial']['power'] = data.moves[ me['selectedSpecial']['name'] ]['power'];
	me['selectedSpecial']['cooldown'] = data.moves[ me['selectedSpecial']['name'] ]['duration'];
	me['selectedSpecial']['energy'] = data.moves[ me['selectedSpecial']['name'] ]['energy'];
	
	me['CP'] = Math.max( Math.floor(Math.pow(me['HP'], 0.5) * Math.pow(me['defense'], 0.5) * me['attack'] / 10), 10);
	
	
	return me;
}