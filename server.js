var http = require('http')
var ecstatic = require('ecstatic')(__dirname + '/static')
var server = http.createServer(ecstatic)

var DiceRoller = require('standardice')

var roller = new DiceRoller()

server.listen(8180)

