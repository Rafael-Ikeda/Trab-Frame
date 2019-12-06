module.exports.index = function(app, req, res) {
	var MongoClient = require('mongodb').MongoClient;
	var url = "mongodb://localhost:27017/"; 

	MongoClient.connect(url, {useNewUrlParser: true},
		function(err,db){
			if(err) {throw err;}
			var dbo = db.db("baseHospital");
			dbo.collection('pacientes').find().toArray 
			(function(err, result){
				res.render('home/index', {pacientes: result});
			});

	});
}
module.exports.excluir = function(app, req, res){
	var MongoClient = require('mongodb').MongoClient;
	var url = "mongodb://localhost:27017/"; 
	
	MongoClient.connect(url, {useNewUrlParser: true},
		function(err, db){
			if(err){
				throw err;
			}
			var dbo = db.db('baseHospital');
			var collection = dbo.collection('pacientes');
			collection.find().toArray(function(err, result){
				if(err){
					throw err;
				}
				var find = req.body.id_clienteApagar;
				var ObjectID = require('mongodb').ObjectID; 
				var o_id = ObjectID(find);
	
				collection.deleteOne({_id: o_id}, function(err, result){
					if(err){
						throw err;
					}
					console.log('Documento apagado do banco de dados');
					res.redirect('index')
				});
			});
	});
}
module.exports.editar = function(app, req, res) {
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
					res.render('editar/editar', {pacientes: result});
				});
		});
}