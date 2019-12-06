module.exports = function(app){
	app.get('/index', function(req,res){
		app.app.controllers.index.index(app, req, res);
	});
	app.post('/excluir', function(req, res){
		app.app.controllers.index.excluir(app, req, res);
	})
	app.post('/editar', function(req, res){
		app.app.controllers.index.editar(app, req, res);
	})
}