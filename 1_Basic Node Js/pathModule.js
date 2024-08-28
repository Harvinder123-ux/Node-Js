const path = require("path");
const fs = require("fs");
// console.log(path)
path.basename(
  "C:\\Users\\ASUS\\Documents\\Node Js\\1_Basic Node Js\\pathModule.js"
);
console.log(
  path.basename(
    "C:\\Users\\ASUS\\Documents\\Node Js\\1_Basic Node Js\\pathModule.js"
  )
);
console.log(
  path.dirname(
    "C:\\Users\\ASUS\\Documents\\Node Js\\1_Basic Node Js\\pathModule.js"
  )
);
console.log(
  path.extname(
    "C:\\Users\\ASUS\\Documents\\Node Js\\1_Basic Node Js\\pathModule.js"
  )
);

// let oldPath = path.dirname(

// // );
// let oldPath = path.basename(
//   "C:\\Users\\ASUS\\Documents\\Node Js\\1_Basic Node Js\\harvi.txt"
// );
// console.log(oldPath);

// let newPath = path.join(
//   "C:\\Users\\ASUS\\Documents\\Node Js\\1_Basic Node Js\\public",
//   "harvi.txt"
// );
// // console.log(path.relative("C:\\Users\\ASUS\\Documents\\Node Js\\1_Basic Node Js\\pathModule.js"))
// fs.renameSync(oldPath, newPath);


console.log(__filename);
console.log(__dirname)