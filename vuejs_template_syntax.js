// in this example we will biding real html to the view with a textview
// who is biding the param rawHtmlMsg with v-model
var rawHtml = new Vue({
	el: '#rawHtmlExample',
	data: {
		rawHtmlMsg: 'Insertar </br> Mensaje'
	}
});

var dynamicIds = new Vue({
	el: '#dynamic-ids-container',
	data: {
		dynamicFirstId: 'firstId',
		dynamicSecondId: 'secondId',
		changed: false
	},
	methods: {
		changeIds: function(){
			if(this.changed){ this.dynamicFirstId = 'firstId'; this.dynamicSecondId = 'secondId'; this.changed = false;}
			else{ this.dynamicFirstId = 'secondId'; this.dynamicSecondId = 'firstId'; this.changed = true;}
		}
	},
	updated: function () {
		var firstId = new Vue({
			el: '#firstId',
			data: {
				title: 'Reverse Msg',
				msg:   '¡Reverse Me!',
				btnMsg: 'reverse'
			},
			methods: {
				msgMethod: function(){
					this.msg = this.msg.split('').reverse().join('');
				}
			}
		});

		var secondId = new Vue({
			el: '#secondId',
			data: {
				title: 'Capitalize msg',
				msg:   '¡Capitalize me!',
				btnMsg: 'Capitalize'
			},
			methods: {
				msgMethod: function(){
					this.msg = this.msg.split('').toUpperCase().join('');
				}
			}
		});	
	}
});

