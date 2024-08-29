// const simple = require("./module2.js")
// simple();

// //it will hit only the default function - no matter whats the name of the function other side
// import simple from "./esmaModule.mjs"
// // console.log(simple)\
// simple()

//but will show error coz i cant export a default function as name here is what i'm doing
// //it will hit the default and other function but check the function names or values is it inside their exporting or not
// import {hola, radhe} from "./esmaModule.mjs"
// // console.log(simple)\
// hola();
// radhe();


// Option 1: Import Default and Named Exports Separately
// Importing the named export
import { hola } from "./esmaModule.mjs";

// Importing the default export
import radhe from "./esmaModule.mjs";

// Use the functions
hola(); // Logs: "hello guys how are you"
radhe(); // Logs: "Radhe Radhe Guys"



// Option 2: Import Everything Together
// Alternatively, you can import everything from the module as an object:
import * as myModule from "./esmaModule.mjs";

// Use the functions
myModule.hola(); // Logs: "hello guys how are you"
myModule.default(); // Logs: "Radhe Radhe Guys"
