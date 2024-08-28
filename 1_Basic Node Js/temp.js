//esma module - ecma script module
// const harvi = {
//     nam : "Harvinder",
//     favCar: "Mustang",
//     favNum: 10,
//     isDev: true
// }

// export default harvi;


//module wrapper functionn
// (function (exports, require, module, __filename, __dirname){

    
//common js module
    // export default harvi;
    harvi = {
        nam : "Harvinder",
        favCar: "Mustang",
        favNum: 10,
        isDev: true
    }

    console.log("this is the export " , exports, "this is require" , require, "this is module" , module,"this is filename", __filename,"this is dirname", __dirname)
    
    module.exports =  harvi;
// })

