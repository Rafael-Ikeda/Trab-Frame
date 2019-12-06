module.exports.atualizar = function(app, req, res) {
	var MongoClient = require('mongodb').MongoClient;
	var url = "mongodb://localhost:27017/"; 

    MongoClient.connect(url, {useNewUrlParser: true} ,
    function(err, db){
        if(err) {throw err;}
        var dbo = db.db('baseHospital');
        var collection = dbo.collection('pacientes');
        collection.find().toArray(function(err, result){
            if(err){
                throw err;
            }
            var find = req.body.id_atualizar;
            var ObjectID = require('mongodb').ObjectID;
            var o_id = ObjectID(find);
            var file = req.files.uploaded_image;
            var img_name=file.name;
            
            file.mv('app/public/upload_de_arquivos/upload_images/'+img_name, function(err){
                collection.updateOne(
                    {_id: o_id},
                    {$set: {
                        nome: req.body.nome,
                        idade: req.body.idade,
                        telefone: req.body.telefone,
                        ferimento: req.body.ferimento,
                        plano: req.body.plano,
                        img_name: img_name} 
                    }, function(err, result){
                        if(err) {throw err;}
                        console.log('Documento atualizado');
                    });
                res.redirect('index');
            });
        });
    });
}