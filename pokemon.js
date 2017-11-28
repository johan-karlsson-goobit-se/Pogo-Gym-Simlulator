function Pokemon(name) {
	this.that = this;
	$.extend(true, this, data.pokemon[ name ]);
};


Pokemon.newDefender = function(name, fastMove, specialMove, level, isRaidBoss) {
	var attackIV = 15;
	if(typeof isRadiBoss != undefined && isRaidBoss == -1) {
		attackIV = -1;
	}
	var me = Pokemon.newAttacker(name, fastMove, specialMove, level, attackIV);
	if( !me ) {
		return null;
	}
	me['fightHP'] = Math.max(me['HP'] * 2, 20);
	me['selectedSpecial']['cooldown'] = me['selectedSpecial']['cooldown'] + 2000;
	me['selectedFast']['cooldown'] = me['selectedFast']['cooldown'] + 2000;
	return me;
}

Pokemon.newAttackerWithMaxCP = function(name, fastMove, specialMove, maxCP) {
	var level = 40;
	do {
		var attackIV = 15;
		var attacker = Pokemon.newAttacker(name,  fastMove, specialMove, level, attackIV);
		if( !attacker ) {
			return null;
		}
		level = level - 0.5;
		level = parseFloat(parseFloat(level).toFixed(1));
	} while(maxCP < attacker['CP']  && attacker['level'] > 1);
	return attacker;
}

Pokemon.newDefenderWithMinCP = function(name, fastMove, specialMove, minCP) {
	var level = 1;
	do {
		var attackIV = 15;
		var defender = Pokemon.newDefender(name,  fastMove, specialMove, level, attackIV);
		if( !defender ) {
			return null;
		}
		level = level + 0.5;
		level = parseFloat(parseFloat(level).toFixed(1));
		if(level > 40) {
			defender = null;
			break;
		}
	} while(minCP > defender['CP']);
	return defender;
}

Pokemon.newAttacker = function(name, fastMove, specialMove, level, attackIV) {
	var me = new Pokemon(name);
	
	var moveKey = fastMove + '-' + specialMove;
	if(me['newMoves'].indexOf(moveKey) != -1) {
		// all is fine
		me['legacy'] = '';
	} else if(me['legacyMoves'].indexOf(moveKey) != -1) {
		// legacy move
		me['legacy'] = ' <span style="font-size: 7px;">Legacy<span>';
	} else {
		// this mon cant exist!
//		return null;
		me['legacy'] = ' <span style="font-size: 7px;">Legacy TM<span>';
	}

	me['selectedFast'] = [];
	me['selectedFast']['name'] = fastMove;
	me['selectedSpecial'] = [];
	me['selectedSpecial']['name'] = specialMove;
	
	// ugly raid boss hack
	if(parseInt(attackIV) == -1) {
		me['level'] = 40;
		me['attackIV'] = 15;
	} else {
		me['level'] = level;
		me['attackIV'] = parseInt(attackIV);
	}
	me['defenseIV'] = 15;
	me['staminaIV'] = 15;

	// ugly raid boss hack
	if(parseInt(attackIV) == -1) {  // level is actually the cpm in this case
		console.log('raid boss');
		console.log(level);
		me['attack'] = (me['baseAtk'] + me['attackIV'] ) * level;
		me['defense'] = (me['baseDef'] + me['defenseIV'] ) * level;
		me['HP'] = Math.floor( (me['baseSta'] + me['staminaIV'] ) * level );
	} else {
		me['attack'] = (me['baseAtk'] + me['attackIV'] ) * data.cpm[ me['level'] ];
		me['defense'] = (me['baseDef'] + me['defenseIV'] ) * data.cpm[ me['level'] ];
		me['HP'] = Math.floor( (me['baseSta'] + me['staminaIV'] ) * data.cpm[ me['level'] ] );
	}
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