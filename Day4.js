//rigger./fire event and on("emit param",callback) is a listener that will for register
emit() and on()
require("events")
const EventEmitter=require("Events");
const event=new EventEmitter();
event.emit("")
event.om("greet",()=>{
    console.log("this is event emitter");

})
event.emit("green");
event.once("greet");
event.emit("green");
event.emit("green");
event.emit("green");
event.emit("green");