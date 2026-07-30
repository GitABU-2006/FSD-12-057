import {EventEmitter} from "events";

const button = new EventEmitter();

button.on("click",(uname) => {
  console.log(`button clicked by ${uname}`);
}); 

button.emit("click", "abu");
button.emit("click", "zaid") ; 
button.emit("click", "javed");
button.emit("click", "jazlaan");
button.emit("click") ; 