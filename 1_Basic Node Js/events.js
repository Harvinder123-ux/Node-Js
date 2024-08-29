import { EventEmitter } from "node:events";
// https://nodejs.org/docs/latest/api/events.html

class MyEmitter extends EventEmitter {}

//this code creating the new event than listening it
const myEmitter = new MyEmitter();
myEmitter.on("lightsOff", () => {
  console.log("Turn On The Generator");
  setTimeout(() => {
    console.log("Pleast Turn On the Generator");
  }, 4000);
});
console.log("script is running")
myEmitter.emit('lightsOff');
console.log("script still running")
