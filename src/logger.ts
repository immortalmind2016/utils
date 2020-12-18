import log4js from "log4js"
let appenders:any={}
let categories:any={}
export const getLogger=(name,level)=>{
    appenders[name]= { type: "file", filename: `${name}.log` } 
    categories[name]={ appenders: [name], level }
    log4js.configure({
        appenders:{ "server": { type: "file", filename: `server.log` },...appenders } ,
        categories: { default: { appenders: ["server"], level:"info" },...categories }
    });
    return log4js.getLogger(name||"server");
    
}


  