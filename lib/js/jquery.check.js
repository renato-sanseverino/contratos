$.fn.check = function(modo) {
	var modo = modo || 'on'; // se modo n�o est� definido, use 'on' como padr�o
	return this.each(function() {
		switch(modo) {
		case 'on':
			this.checked = true;
			break;
		case 'off':
			this.checked = false;
			break;
		case 'toggle':
			this.checked = !this.checked;
			break;
		}
	});
};