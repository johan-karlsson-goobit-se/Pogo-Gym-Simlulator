function ResultsView() {
	this.table = $('<table>');
	this.description = "";
	
	this.addDescription = function(text, defender) {
		if(defender) {
			this.description = text + " against a level " + defender.level + " " + defender.name + " with " + defender.selectedFast.name + " and " + defender.selectedSpecial.name + ".<br>CP: " + defender.CP + " HP: " + defender.HP + " attack: " + defender.attack.toFixed(4) + " defense: " + defender.defense.toFixed(4) + "<br>All pokemons have IV 15/15/15<br><br><br>";
		} else {
			this.description = text;
		}
	};
	
	this.addHeader = function(cols) {
		var thead = $('<thead>').appendTo(this.table);
		var tr = $('<tr>').appendTo(thead);
		for(var i in cols) {
			$('<th>').html(cols[i]).appendTo(tr);
		}
	};
	this.addRow = function(cols) {
		var tr = $('<tr>').appendTo(this.table);
		for(var i in cols) {
			$('<td>').html(cols[i]).appendTo(tr);
		}
	};
	this.outputResults = function(doNotClear) {
		if($('.resultsFrame').length == 0) {
			$('<div>').addClass('resultsFrame').appendTo('body');
		}
		if(!doNotClear) {
			$('.resultsFrame').empty();
		}
		$("<div>").html(this.description).appendTo('.resultsFrame');
		this.table.appendTo('.resultsFrame').DataTable();
	};
	this.formatMove = function(attacker, defender, move) {
		var td = $('<td>').text(move['name']);
		// stab?
		if(move['type'] == attacker['type'][0] || move['type'] == attacker['type'][1]) {
			td.css("font-weight", "bold");
		}
		
		// super effective?
		var effectiveness = data.effective[ move['type'] ][ defender['type'][0] ];
		effectiveness *= data.effective[ move['type'] ][ defender['type'][1] ];
		if(effectiveness > 1.1) {
			td.css("font-style", "italic");
			td.css("color", "blue");
		}
		return td;
	};
};
