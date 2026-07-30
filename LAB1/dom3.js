import {EventEmitter} from "events";

const button = new EventEmitter();

button.on("click",(uname) => {
  console.log(`button clicked by ${uname}`);
}); 

button.emit("click", "Abu");
button.emit("click", "Zaid") ; 
button.emit("click", "Javed");
button.emit("click", "Jazlaan");
button.emit("click") ; 