
 var User = Backbone.Model.extend({
	
	defaults: {
		name: "",
		age: 0
	},

	validate: function(attrs) {
		if (attrs.age < 0) {
			return "age must be 0 or greater."
		}
		if (attrs.name === "") {
			return "must have a name."
		}
	}

 });