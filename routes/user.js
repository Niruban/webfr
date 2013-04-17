
/*
 * GET users listing.
 */

exports.list = function(req, res){
  res.send("respond with a resource");
};
exports.about = function(req, res){
	res.render('about', {title: 'About'});
};
exports.login = function(req, res){
	res.render('login', { title: 'LogIn'});
};
