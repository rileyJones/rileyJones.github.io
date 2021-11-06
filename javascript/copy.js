'use strict'
var copyblock = document.querySelector('#cb1');
for(let i = 1; i < 25; i++) {
    var clone = copyblock.cloneNode(true);
    copyblock.after(clone);
}
