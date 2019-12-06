module.exports = function(app){
	app.post('/atualizar', function(req, res){
		app.app.controllers.editar.atualizar(app, req, res);
	})
}