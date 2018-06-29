var violinnote = require('./violin');

var violinplaying = new violinnote();

violinplaying.on('musicnote',function(){
    console.log('violin is playing music:');
});

setInterval(()=> {
    violinplaying.emit('musicnote');
},1000);