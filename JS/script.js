var shiftColor = function () {
	var currentClassName = document.getElementById
			('JSdiv').className;
	if (currentClassName == 'JSdiv') {
			document.getElementById('JSdiv').className 
			= 'JSdiv white';
		} else {
			document.getElementById('JSdiv').className = 'JSdiv';
		}
};


/* var bass = {
					brand: 'epiphone',
					model: 'thunderbird',
					color: 'white',
					isActive: false,
					isPluggedIn: false,
					numberOfStrings: 4,
					strings: [
						'string1', 
						'string2', 
						'string3', 
						'string4'
					],
					plugIn: function () {
						this.isPluggedIn = true;
					},
					plugOut: function () {
						this.isPluggedIn = false,
						alert('you plugged out the bass, dude!');
					},	
					listen: function (allGood) {
						// console.log ('i can listen bass ' + allGood)
						;
						if (allGood == true) {
							console.log ('i listen bass');
							this.isPluggedIn = true,
							alert('you plugged in the bass!');
						} else {
							console.log ('no bass here');
							this.isPluggedIn = false;
						}

					}



				};


				console.log('javascript')
*/