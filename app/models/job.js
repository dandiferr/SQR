// grab the mongoose module
var mongoose = require('mongoose');

// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('Job', {
	name : {type : String, default: ''},
	facebook: {type : String, default: ''},
	twitter: {type : String, default: ''},
	linkedin: {type : String, default: ''},
	instagram: {type : String, default: ''},
	fb_token: {type : String, default: ''}
});
