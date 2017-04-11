
    // Message
	var message = new Vue({
	  el: '#message',
	  data: {
	    message: 'Hello Vue!'
	  }
	});

	// Loop, Seen and Methods
	var loop = new Vue({
	  el: '#loop',
	  data: {
	  	seen: true,
	    list: [
	      { text: 'Lavadora' },
	      { text: 'Aspiradora' },
	      { text: 'Refrigerador' }
	    ],
	    showing: 'home_stuff',
	    btnToggleListTxt: 'Electronicos',
	    btnToggleSeenTxt: 'Esconder'
	  },
	  methods: { // methods on app vue js
	    newList: function () {
	      if(this.showing == 'home_stuff'){
		    this.list = [
							{ text: 'Tablet' },
							{ text: 'Celular' },
						    { text: 'Computador'}
					    ]; 

			this.showing = 'tech_stuff';
			this.btnToggleListTxt = 'Casa Hogar'
	      }else{
		    this.list = [
					      { text: 'Lavadora' },
					      { text: 'Aspiradora' },
					      { text: 'Refrigerador' }
					    ];

			this.showing = 'home_stuff';
			this.btnToggleListTxt = 'Electronicos'

	      }     
	    },
	    seenToggle: function(){
	    	if(this.seen){ this.seen = false; this.btnToggleSeenTxt = "Mostrar"; }
	    	else{ this.seen = true; this.btnToggleSeenTxt = "Esconder"; }
	    }

	  }
	});

	// Input handling
	var input_handling = new Vue({
		el: '#input-handling',
		data: {
			inputMessage: 'Escribe'
		},
		methods: {
			clearInput: function(){
				this.inputMessage = '';
			}
		}
	})

	// Custom Components
	Vue.component('list-items', {
		// props are the custom attributes that can be passed to the component
		// this can be an array of them so you can add so much as you wants
		// in this example we will add a tittle with the list so we can see how it works
		// templates can only has 1 root element so we will create a container for all this
		// elements
		props: ['list', 'tittle'], 
		template: '<div class="container-list-items">' +    
					'<h1> {{ tittle }} </h1>' +
					'<ol>' +
					  	'<li v-for="item in list"> {{ item.text }} </li>' +
					'</ol>' +
				  '</div>'
	});

	var custom_components = new Vue({
		el: '#custom-components',
		data: { 
				list: [
						{ text: 'Im a in a custom component' },
						{ text: 'Called list-items'},
						{ text: 'That it also has a tittle'}
				],
				tittle: 'This is a tittle for the list-items'
		}
	});
