var csv = require('csv'),
    request = require('request'),
    clr = require('colors'),
    util = require('util'),
    url = "http://apathy.cartercole.com/test/maxip.txt",
    key = "";

//http://geoip3.maxmind.com/f?l=xxxxxxx&i=64.233.183.104

exports.lookup = function (ip,cb){
request({uri: url}, function (error, response, body){
csv().from(body,{columns: ['country', 'region', 'city', 'postal', 'lat', 'lon', 'metro_code', 'area_code', 'isp', 'org', 'err']})
.on('data',function(data,index){
cb(data);
});
});
}

geo(null,function(res){console.log(res)});
