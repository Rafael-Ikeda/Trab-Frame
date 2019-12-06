module.exports.mostrar = function(app, req, res) {
	var MongoClient = require('mongodb').MongoClient;
	var url = "mongodb://localhost:27017/";

	MongoClient.connect(url, {useNewUrlParser: true},
		function(err, db){
			if(err) {throw err;}
				var dbo = db.db("baseHospital");
				var find = req.body.id_clienteEditar;
				console.log(find);
				var ObjectID = require('mongodb').ObjectID;
				var o_id = ObjectID(find);
				console.log(o_id);
				dbo.collection('pacientes').find({_id: o_id}).toArray(function(err, result){
					console.log(result);
					res.render('paciente/paciente', {pacientes: result});
				});
		});
}