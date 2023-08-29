const { MongoClient }=require("mongodb");
const Db=process.env.ATLAS_URI;
const client=new MongoClient(Db,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
var _dbConnection;
module.exports={
    connectTodb:function(cb){
        client.connect(function(err,db){
            if(db){
               _dbConnection=db.db("cv");
                console.log("Success!");
            }
            return cb(err);
        });
     },
    getDb: function (){
        return _dbConnection;
    },
}
