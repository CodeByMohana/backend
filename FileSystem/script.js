const fs = require('fs');
const path = require('path');

let loc1 = path.join(__dirname, 'file1.txt');
let loc2 = path.join(__dirname, 'file2.txt');

function fetchData(loc){
    return new Promise((resolve,reject)=>{
        fs.readFile(loc,{encoding:'utf-8'},(err,data)=>{
            if(err){
                reject(err);
            }else{
                resolve(data);
            }
        })
    })
}

async function output(data){
    let data1 = await fetchData(loc1); // gets data in buffer format
    let data2 = await fetchData(loc2);

    let arr = [...data1.split('\r\n'),...data2.split('\r\n')]

    arr.sort((a,b)=>a-b);

    let finalData = arr.join('\r\n');
    let loc = path.join(__dirname,'final.txt');
    fs.writeFile(loc,finalData,(err)=>{
        if(err){
            console.log(err);
        } else {
        console.log("Sorted data written to final.txt");
      }
    })
}
output()