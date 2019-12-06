module.exports = function(app){
	app.post('/paciente', function(req,res){
		app.app.controllers.paciente.mostrar(app, req, res);
	});
}