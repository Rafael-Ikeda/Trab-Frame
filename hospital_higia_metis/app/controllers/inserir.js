module.exports.cadastrar = function(app, req, res) {
	res.render('cadastro/cadastrar')
}
module.exports.inserir = function(app, req, res) {


	var MongoClient = require('mongodb').MongoClient;
	var url = "mongodb://localhost:27017/"; 
	
 	MongoClient.connect(url, {useNewUrlParser: true},
	function(err, db){
		if(err) {throw err;}
		var dbo = db.db('baseHospital'); 

		var nome = req.body.nome; 
		var idade = req.body.idade; 
		var telefone = req.body.telefone;
		var ferimento = req.body.ferimento;
		var plano = req.body.plano;
		var file = req.files.uploaded_image;
		var img_name=file.name;
		console.log(req.body);

		file.mv('app/public/upload_de_arquivos/upload_images/'+img_name, function(err){
			dbo.collection('pacientes').save( 
				{
					nome:nome,
					idade:idade,
					telefone:telefone,
					ferimento:ferimento,
					plano:plano,
					img_name:img_name
				}, function(err, result){
					if(err) {throw err;}
					console.log('Documento inserido');
				});
				res.redirect('index');
		 });
	});
}