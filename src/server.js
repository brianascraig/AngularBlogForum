const express = require('express'), path = require('path'), bodyParser = require('body-parser'),
  mongo = require("mongoose"), db = mongo.connect("mongodb://localhost:27017/AngularCRUD", function (err, response) {
    if (err) {
      console.log(err);
    } else {
      console.log('Connected to ' + db, ' + ', response);
    }
  }), app = express();

app.use(bodyParser());
app.use(bodyParser.json({limit: '5mb'}));
app.use(bodyParser.urlencoded({extended:true}));

app.use(function (req, res, next){
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

const Schema = mongo.Schema;
const MemberSchema = new Schema({
  username: {type: String},
  password: {type: String},
  email: {type: String},
},{versionKey: false});

const model = mongo.model('member', MemberSchema, 'member');

app.post("/api/SaveUser", function(req,res){
  const mod = new model(req.body);
  if(req.body.mode === "Save"){
    mod.save(function(err,data){
      if(err){
        res.send(err);
      }
      else{
        res.send({data:"Record has been inserted.."});
      }
    });
  }
  else {
    model.findByIdAndUpdate(req.body.id, { username: req.body.username, password: req.body.password, email: req.body.email },
      function(err,data){
      if (err) {
        res.send(err);
      }
      else{
        res.send({data: "Record has been updated.."});
      }
      });
  }
});

app.post("/api/deleteMember", function(req,res){
  model.remove({ _id: req.body.id }, function(err){
    if(err){
      res.send(err);
    }
    else{
      res.send({data:"Record has been Deleted.."});
    }
  });
});

app.get("/api/getUser", function(req,res){
  model.find( function(err,data){
    if(err){
      res.send(err);
    }
    else{
      res.send(data);
    }
  });
});

app.listen(8080, function () {
  console.log('Forum app listening on port 8080!')
});
