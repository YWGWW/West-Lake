import {MSG} from './util'
import dog from './img/dog.jpg'
require('./test.css')
require('./less.less')
let student=require('./student.json')
document.write(MSG+"--->"+student.name)

let img=document.createElement("img");
console.log(dog);
img.src=dog
document.getElementById("id").appendChild(img)
