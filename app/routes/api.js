var Cargo       = require('../models/cargo');
var Func       = require('../models/func');

module.exports = function (app, express)
{
  var apiRouter = express.Router();


//Lista todos os cargos
  apiRouter.get('/cargo', function(req, res) {

    Cargo.find({}, function(err, cargo){

      if (err) {
        console.log("erro na leitura da colecao Cargos ...", err);
        res.json({err: err});
      } else{
        res.json({dados: cargo});
      };

    });

  });

//Lista o cargo pelo código
  apiRouter.get('/cargo/:cod', function(req, res) {

      Cargo.findOne({ cod: req.params.cod }, function(err, cargo){

        if (err) {
          console.log("erro na leitura da colecao Cargos ...", err);
          res.json({err: err});
        } else{
          res.json({dados: cargo});
        };

      });

  });

//Lista todos os funcionários
  apiRouter.get('/func', function(req, res) {

    Func.find({}, function(err, funcionarios){

      if (err) {
        console.log("erro na leitura da colecao Funcs ...", err);
        res.json({err: err});
      } else{
        res.json({dados: funcionarios});
      };

    });

  });

//Lista o funcionario pelo código
  apiRouter.get('/func/:cod', function(req, res) {

      Func.findOne({ cod: req.params.cod }, function(err, funcionarios){

        if (err) {
          console.log("erro na leitura da colecao Funcs ...", err);
          res.json({err: err});
        } else{
          res.json({dados: funcionarios});
        };

      });

  });

  return apiRouter;
};