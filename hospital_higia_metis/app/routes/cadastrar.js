module.exports = function(app){
	app.get('/cadastrar', function(req,res){
		app.app.controllers.inserir.cadastrar(app, req, res);
	});
	app.post('/inserir', function(req, res){
		app.app.controllers.inserir.inserir(app, req, res);
	})
}