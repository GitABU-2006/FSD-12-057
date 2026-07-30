import {EventEmitter} from "events";

const form = new EventEmitter();

form.on("submit" , (uname, password) =>{
    console.log("form sunmitted") ;
    console.log(`user name: ${uname}`);
    console.log(`user password: ${password}`);
});

form.emit("submit", "abc@abc.com" ,"12221222");