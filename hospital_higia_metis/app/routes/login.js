module.exports = function(app){
	app.get('/', function(req,res){
		app.app.controllers.login.entrar(app, req, res);
	});
}