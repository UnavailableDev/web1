//alert(Math.random().toString().slice(2))
const data = require('./json/num.json');
const fs = require('fs')

let id = null;

while (id == null) {
    id = Math.random()*100000000
    id.toString().slice(9)
}
data[id]
fs.writeFile('./json/num.json', JSON.stringify(data), (err) =>{
    if(err)throw err;
    alert(id.toString())
})