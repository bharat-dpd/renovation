var arrayList = require("../lib/JSON/arraylist.json");
module.exports = function (app) {
    app.get('/page/:name', function (req, res) {
        res.sendfile('./public/views/' + req.params.name);
    });
    /*Rest Api for DataBase Query*/
    app.get('/rest/data/arraylist',function(req,res){
        res.json({result:arrayList});
    });
    app.get('/', function(req, res) {
        res.sendfile('./public/index.html');
    });
};