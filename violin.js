var util = require('util');
var events = require('events');

var violini = function() {
    this.play="violin is playing music !!!!";
}
util.inherits(violini,events.EventEmitter);

module.exports = violini;