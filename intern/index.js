//npm install mongodb
//var mongo = require('mongodb');

//node js mongodb create database
// var MongoClient =require('mongodb').MongoClient;
// var url="mongodb://localhost:27017/mydb";

// MongoClient.connect(url, {useUnifiedTopology :true},function(err ,db){
//     if (err) throw err;
//     console.log("Database Created!");
//     db.close();
// });

//node js mongodb create collections
// var MongoClient=require('mongodb').MongoClient;
// var url="mongodb://localhost:27017/";

// MongoClient.connect(url,{useUnifiedTopology:true}, function(err ,db ){
//     if(err) throw err;
//     var dbo=db.db('mydb');
//     dbo.createCollection("customers", function(err,res){
//         if(err) throw err;
//         console.log("Collection Created!");
//         db.close();
//     });
// });
   
//node js mongodb insert one document

// var MongoClient=require('mongodb').MongoClient;
// var url="mongodb://localhost:27017/";

// MongoClient.connect(url,{useUnifiedTopology:true}, function(err,db){
//     if (err) throw err;
//     var dbo=db.db("mydb");
//     var myobj={name:"Company Inc", address:"Highway 37"};
//     dbo.collection("customers").insertOne(myobj, function(err,res){
//         if(err) throw err;
//         console.log("1 document inserted!");
//         db.close();
//     });
// });

//node js mongodb insert many document
var MongoClient=require('mongodb').MongoClient;
var url="mongodb://localhost:27017/";

MongoClient.connect(url,{useUnifiedTopology:true}, function(err,db){
    if (err) throw err;
    var dbo=db.db("mydb");
    var myobj=[
            { name: 'John', address: 'Highway 71'},
            { name: 'Peter', address: 'Lowstreet 4'},
            { name: 'Amy', address: 'Apple st 652'},
            { name: 'Hannah', address: 'Mountain 21'},
            { name: 'Michael', address: 'Valley 345'},
            { name: 'Sandy', address: 'Ocean blvd 2'},
            { name: 'Betty', address: 'Green Grass 1'},
            { name: 'Richard', address: 'Sky st 331'},
            { name: 'Susan', address: 'One way 98'},
            { name: 'Vicky', address: 'Yellow Garden 2'},
            { name: 'Ben', address: 'Park Lane 38'},
            { name: 'William', address: 'Central st 954'},
            { name: 'Chuck', address: 'Main Road 989'},
            { name: 'Viola', address: 'Sideway 1633'}
          ];
    dbo.collection("customers").insertMany(myobj, function(err,res){
        if(err) throw err;
        console.log("Number of documents inserted:"+ ' '+res.insertedCount);
        db.close();
    });
});

//node js id field
// var MongoClient=require('mongodb').MongoClient;
// var url="mongodb://localhost:27017/";

// MongoClient.connect(url, {useUnifiedTopology: true}, function(err, db){
//     if(err) throw err;
//     var dbo=db.db("mydb");
//     var myobj=[
//         {_id:154, name:'Chocolate Heaven'},
//         {_id:155, name:'Tasty Lemon'},
//         {_id:156, name:'VAnilla Dream'}
//     ];
//     dbo.collection("customers").insertMany(myobj, function(err,res){
//         if(err) throw err;
//         console.log(res);
//         db.close();
//     });
// });

//node js mongodb Find(read) One
// var MongoClient=require('mongodb').MongoClient;
// var url="mongodb://localhost:27017/";

// MongoClient.connect(url , {useUnifiedTopology: true}, function(err,db){
//     if(err) throw err;
//     var dbo=db.db("mydb");
//     dbo.collection("customers").findOne({}, function(err, res){
//         if(err) throw err;
//         console.log(res.name);
//         db.close();
//     });
// });

//node js mongodb Find(read) all
// var MongoClient=require('mongodb').MongoClient;
// var url="mongodb://localhost:27017/";

// MongoClient.connect(url, {useUnifiedTopology:true},function(err,db){
//     if(err) throw err;
//     var dbo=db.db("mydb");
//     dbo.collection("customers").find({}).toArray(function(err, res){
//         if (err) throw err;
//         console.log(res, res.length);
//         db.close();
//     });
// });

//node js mongodb find some
// var MongoClient=require('mongodb').MongoClient;
// var url="mongodb://localhost:27017/";

// MongoClient.connect(url, {useUnifiedTopology:true},function(err,db){
//     if(err) throw err;
//     var dbo=db.db("mydb");
//     dbo.collection("customers").find({},{projection:{_id: 0 ,name : 1, address : 1}}).toArray(function(err, res){
//         if (err) throw err;
//        // console.log(res, res.length);
//         console.log(res[2].address);
//         db.close();
//     });
// });

//node js mongodb find query(filter)
// var MongoClient=require('mongodb').MongoClient;
// var url="mongodb://localhost:27017/";

// MongoClient.connect(url ,{useUnifiedTopology:true} , function(err, db){
//     if (err ) throw err;
//     var dbo=db.db("mydb");
//     var query = {address: "Park Lane 38"};
//     dbo.collection("customers").find(query).toArray(function(err, res){
//         if (err) throw err;
//         console.log(res);
//         db.close();
//     });
// });

//node js mongodb find regular expression
// var MongoClient=require('mongodb').MongoClient;
// var url="mongodb://localhost:27017/";

// MongoClient.connect(url ,{useUnifiedTopology:true} , function(err, db){
//     if (err ) throw err;
//     var dbo=db.db("mydb");
//     var query = {address : /^S/};
//     dbo.collection("customers").find(query).toArray(function(err, res){
//         if (err) throw err;
//         console.log(res);
//         db.close();
//     });
// });



//node js mongodb Sort method(ascending)
// var MongoClient=require('mongodb').MongoClient;
// var url="mongodb://localhost:27017/";

// MongoClient.connect(url ,{useUnifiedTopology:true} , function(err, db){
//     if (err ) throw err;
//     var dbo=db.db("mydb");
//     var sort = {name : 1};
//     dbo.collection("customers").find().sort(sort).toArray(function(err, res){
//         if (err) throw err;
//         console.log(res);
//         db.close();
//     });
// });

//node js mongodb sort descending
// var MongoClient=require('mongodb').MongoClient;
// var url="mongodb://localhost:27017/";

// MongoClient.connect(url ,{useUnifiedTopology:true} , function(err, db){
//     if (err ) throw err;
//     var dbo=db.db("mydb");
//     var sort = {name : -1};
//     dbo.collection("customers").find().sort(sort).toArray(function(err, res){
//         if (err) throw err;
//         console.log(res);
//         db.close();
//     });
// });

//node js mongodb delete one
// var MongoClient=require('mongodb').MongoClient;
// var url="mongodb://localhost:27017/";

// MongoClient.connect(url ,{useUnifiedTopology:true} , function(err, db){
//     if (err ) throw err;
//     var dbo=db.db("mydb");
//     var query={address: 'Mountain 21'};
//     dbo.collection("customers").deleteOne(query, function(err, res){
//         if (err) throw err;
//         console.log('1 document deteted!');
//         db.close();
//     });
// });

//node js mongodb delete many
// var MongoClient=require('mongodb').MongoClient;
// var url="mongodb://localhost:27017/";

// MongoClient.connect(url ,{useUnifiedTopology:true} , function(err, db){
//     if (err ) throw err;
//     var dbo=db.db("mydb");
//     var query={address: /^O/};
//     dbo.collection("customers").deleteMany(query, function(err, obj){
//         if (err) throw err;
//         console.log(obj.result.n +'document(s) deleted!');
//         db.close();
//     });
// });

//node js mongodb delete table(collection) => Drop Method
// var MongoClient=require('mongodb').MongoClient;
// var url="mongodb://localhost:27017/";

// MongoClient.connect(url ,{useUnifiedTopology:true} , function(err, db){
//     if (err ) throw err;
//     var dbo=db.db("mydb");
//     dbo.collection("customers").drop(function(err, delOK){
//         if(err) throw err;
//         if(delOK) console.log("Collection deleted!");
//         db.close();
//     })
// });

//node js mongodb delete collection => dropcollection using
// var MongoClient=require('mongodb').MongoClient;
// var url="mongodb://localhost:27017/";

// MongoClient.connect(url ,{useUnifiedTopology:true} , function(err, db){
//     if (err ) throw err;
//     var dbo=db.db("mydb");
//     dbo.dropCollection("products",function(err, delOK){
//         if(err) throw err;
//         if(delOK) console.log("Collection deleted!");
//         db.close();
//     })
// });

//node js mongodb update one document
// var MongoClient=require('mongodb').MongoClient;
// var url="mongodb://localhost:27017/";

// MongoClient.connect(url ,{useUnifiedTopology:true} , function(err, db){
//     if (err ) throw err;
//     var dbo=db.db("mydb");
//     var myquery ={address:"Highway 71"};
//     var newvalue={$set :{address:"Canyon 2345"}};
//     dbo.collection("customers").updateOne(myquery,newvalue,function(err, updateOk){
//         if(err) throw err;
//         if(updateOk) console.log(updateOk.result.nModified+"collection updated.");
//         db.close();
//     })
// });

//node js mongodb update all document
// var MongoClient=require('mongodb').MongoClient;
// var url="mongodb://localhost:27017/";

// MongoClient.connect(url ,{useUnifiedTopology:true} , function(err, db){
//     if (err ) throw err;
//     var dbo=db.db("mydb");
//     var myquery ={address:/^O/};
//     var newvalue={$set :{address:"Canyon 2345"}};
//     dbo.collection("customers").updateMany(myquery,newvalue,function(err, updateOk){
//         if(err) throw err;
//         if(updateOk) console.log(updateOk.result.nModified+"collection updated.");
//         db.close();
//     });
// });

//node js mongodb find limit using regular expression
// var MongoClient=require('mongodb').MongoClient;
// var url="mongodb://localhost:27017/";

// MongoClient.connect(url ,{useUnifiedTopology:true} , function(err, db){
//     if (err ) throw err;
//     var dbo=db.db("mydb");
//     dbo.collection("customers").find().limit(5).toArray(function(err,res){
//         if(err) throw err;
//         console.log(res,res.length);
//         db.close();
//     })
// });

