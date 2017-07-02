function Battle(attacker, defender, dod) {
	var dodge = dod;
	var attacker_o = calculatePower(attacker, defender, null); // the _defender_ can never dodge
	var defender_o = calculatePower(defender, attacker_o, dodge); //the _attacker_ is dodging, so the damage from the defender is less
	this.attacker = attacker_o;
	this.defender = defender_o;
	
	
	
	function calculatePower(attacker, defender, dodge) { //attacker and defender isnt really the attackers and defenders. the attacker is the one we're calculating power for
		var defenderDefense = defender['defense'];
		var defenderTypes = defender['type'];

		attacker['selectedFast']['damage'] = 0.5 * attacker['attack'] / defenderDefense * attacker['selectedFast']['power'];
		if(attacker['selectedFast']['type'] == attacker['type'][0]) { // stab 1
			attacker['selectedFast']['damage'] *= 1.2;
		}
		if(attacker['selectedFast']['type'] == attacker['type'][1]) { // stab 2
			attacker['selectedFast']['damage'] *= 1.2;
		}
		attacker['selectedFast']['damage'] *= data.effective[ attacker['selectedFast']['type'] ][ defenderTypes[0] ]; // effective 1
		attacker['selectedFast']['damage'] *= data.effective[ attacker['selectedFast']['type'] ][ defenderTypes[1] ]; // effective 2
		attacker['selectedFast']['damage'] = Math.floor( attacker['selectedFast']['damage'] ) + 1;

		attacker['selectedSpecial']['damage'] = 0.5 * attacker['attack'] / defenderDefense * attacker['selectedSpecial']['power'];
		if(attacker['selectedSpecial']['type'] == attacker['type'][0]) { // stab 1
			attacker['selectedSpecial']['damage'] *= 1.2;
		}
		if(attacker['selectedSpecial']['type'] == attacker['type'][1]) { // stab 2
			attacker['selectedSpecial']['damage'] *= 1.2;
		}
		attacker['selectedSpecial']['damage'] *= data.effective[ attacker['selectedSpecial']['type'] ][ defenderTypes[0] ]; // effective 1
		attacker['selectedSpecial']['damage'] *= data.effective[ attacker['selectedSpecial']['type'] ][ defenderTypes[1] ]; // effective 2
		attacker['selectedSpecial']['damage'] = Math.floor( attacker['selectedSpecial']['damage'] ) + 1;
		
		if(dodge && dodge.quick) {
			attacker['selectedFast']['damage'] = attacker['selectedFast']['damage'] / 4;
			attacker['selectedFast']['damage'] = Math.floor( attacker['selectedFast']['damage'] );
			attacker['selectedFast']['damage'] = Math.max(attacker['selectedFast']['damage'], 1);
		}

		if(dodge && dodge.charge) {
			attacker['selectedSpecial']['damage'] = attacker['selectedSpecial']['damage'] / 4;
			attacker['selectedSpecial']['damage'] = Math.floor( attacker['selectedSpecial']['damage'] );
			attacker['selectedSpecial']['damage'] = Math.max(attacker['selectedSpecial']['damage'], 1);
		}
		
		return attacker;
	};
	
	
	this.repeatBattle = function(repeats) {
		var realResult = { attacker : 0, defender : 0,  time : 0 };
		var victories = 0;
		for(var o = 0; o < repeats; o++) {
			var result = this.fight();
			realResult.attacker += result.attacker;
			realResult.defender += result.defender;
			realResult.time += result.time;
			if(result.attacker > 0) {
				victories++;
			}

		}
		realResult.attacker = realResult.attacker / repeats;
		realResult.defender = realResult.defender / repeats;
		realResult.time = realResult.time / repeats;
		realResult.victories = victories;
		return realResult;
	}
	
	
	this.fight = function() {
				//attacker, attacker_fastmove, attacker_specialmove, attacker_hp,
				 //  defender, defender_fastmove, defender_specialmove, defender_hp) {

		//  var sheet = SpreadsheetApp.getActiveSpreadsheet();
		//  var data = sheet.getDataRange().getValues();
		    
		  var attacker = {'hp' : attacker_o['fightHP'], 'energy' : 0};
		  var a_quick = {'name' : attacker_o['selectedFast']['name'], 'damage' : attacker_o['selectedFast']['damage'], 'cd' : attacker_o['selectedFast']['cooldown'], 'energy' : attacker_o['selectedFast']['energy'] };
		  var a_charge = {'name' : attacker_o['selectedSpecial']['name'], 'damage' : attacker_o['selectedSpecial']['damage'], 'cd' : attacker_o['selectedSpecial']['cooldown'], 'energy' : attacker_o['selectedSpecial']['energy'] };
		  
		  var defender = {'hp' : defender_o['fightHP'], 'energy' : 0};
		  var d_quick = {'name' : defender_o['selectedFast']['name'], 'damage' : defender_o['selectedFast']['damage'], 'cd' : defender_o['selectedFast']['cooldown'], 'energy' : defender_o['selectedFast']['energy'] };
		  var d_charge = {'name' : defender_o['selectedSpecial']['name'], 'damage' : defender_o['selectedSpecial']['damage'], 'cd' : defender_o['selectedSpecial']['cooldown'], 'energy' : defender_o['selectedSpecial']['energy'] };
		  
		  
		  //var dodge = {'quick' : data[0][12], 'charge' : data[1][12]};
		//  var dodge = {'quick' : dodgeQuick, 'charge' : dodgeCharge};
		  
		  
		  d_charge.cd -= 2000;
		  d_quick.cd -= 2000;
		  
		  
		  var a_current = a_quick;
		  var d_current = d_quick;

		  //if (data.length >= 25) { sheet.deleteRows(25, data.length-24);};
		   
		  
		//console.log([' ',' ' ,'Attacker',' ', ' ', 'Defender', ' ']);
		//console.log(['Time','HP','Energy','Move','HP','Energy','Move']);
		//console.log(['99',attacker.hp,attacker.energy,' ',defender.hp,defender.energy,' ']);
		  
		   
		  //setup first two moves because I'm bad at scripting   
		      defender.energy += d_current.energy;
		      attacker.hp -= d_current.damage;
		      attacker.energy += Math.floor( d_current.damage / 2);
		   
			    
		      if (dodge.quick && d_current.name == d_quick.name) {        
			
		//console.log([98,attacker.hp,attacker.energy,'dodge',defender.hp,defender.energy,d_current.name]);
			       
		      } else if (dodge.charge && d_current.name == d_charge.name) {       
			
		//console.log([98,attacker.hp,attacker.energy,'dodge',defender.hp,defender.energy,d_current.name]);
			
		      } else {                       
			attacker.energy +=  a_current.energy;
			defender.hp -= a_current.damage;
			defender.energy += Math.ceil( a_current.damage / 2);
				
		//console.log([98,attacker.hp,attacker.energy,a_current.name,defender.hp,defender.energy,d_current.name]);
					  
		      } 
		    
		  var c_time = 97400;
		  var d_cooldown = -1000;
		  
		   
		  
		//  while ( attacker.hp > 0 && defender.hp > 0 && c_time > 0) {
		while ( (/* attacker.hp > 0 &&  */ defender.hp > 0) && c_time > 0) {
			   
				
		    //is defender on cooldown?
		    if (d_cooldown <= 0) {
		     
		      defender.energy = Math.min(200,defender.energy + d_current.energy);
		      attacker.hp -= d_current.damage;
		      attacker.energy = Math.min(100, attacker.energy + Math.floor( d_current.damage / 2));
		      
		      
		      // todo: use random instead, and run many simulations?
		      
		      d_cooldown += d_current.cd + Math.ceil(Math.random()*1000) + 1500;
		      //d_cooldown += d_current.cd + 2000; //Math.ceil(Math.random()*1000) + 1500;
		      
			    
		      if (dodge.quick && d_current.name == d_quick.name) {        
			
		//console.log([Math.floor(c_time/1000),attacker.hp,attacker.energy,'dodge',defender.hp,defender.energy,d_current.name]);
			
			   
			c_time -= 500;
			d_cooldown -= 500;
			
		      } else if (dodge.charge && d_current.name == d_charge.name) {        
			
		  //console.log([Math.floor(c_time/1000),attacker.hp,attacker.energy,'dodge',defender.hp,defender.energy,d_current.name]);
			
			   
			c_time -= 500;
			d_cooldown -= 500;
			
		      } else {                       
		      attacker.energy =  Math.min(100,attacker.energy + a_current.energy);
		      defender.hp -= a_current.damage;
		      defender.energy = Math.min(200, defender.energy+Math.ceil( a_current.damage / 2));     
				
		//console.log([Math.floor(c_time/1000),attacker.hp,attacker.energy,a_current.name,defender.hp,defender.energy,d_current.name]);
			
			
			c_time -= a_current.cd;
			d_cooldown -= a_current.cd;
			  
		      } 
		    } else {
		      attacker.energy =  Math.min(100,attacker.energy + a_current.energy);
		      defender.hp -= a_current.damage;
		      defender.energy = Math.min(200, defender.energy+Math.ceil( a_current.damage / 2));      
			   
		      
		//console.log([Math.floor(c_time/1000),attacker.hp,attacker.energy,a_current.name,defender.hp,defender.energy,]);
		      
		      c_time -= a_current.cd;
		      d_cooldown -= a_current.cd;
		    }
		    
		    //select attacker's next attack
		    if (attacker.energy >= -a_charge.energy ) {a_current = a_charge;} else {a_current = a_quick;}
		    
		    //select defender's next attack
		    if (defender.energy >= -d_charge.energy && Math.random() > .500) {d_current = d_charge;} else {d_current = d_quick;}
		    

			
		    if(! ( (/* attacker.hp > 0 && */ defender.hp > 0) && c_time > 0)) {
				       return { attacker : attacker.hp, defender : defender.hp, time : c_time };
				       }
		    
		  }
		  
		  return { attacker : attacker.hp, defender : defender.hp, time : c_time };
		  
	};
		


};
	
