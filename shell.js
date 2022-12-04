const { exec } = require("child_process");
const process = require('process');
 function getdata(){
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
 
var t=process.cwd()
  readline.question(`${t}> `, name => {
    
    exec(`${name}`, (error, stdout, stderr) => {
        if (error) {
            console.log(`${error.message}`);
            getdata();
        }
        // if (stderr) {
        //     console.log(`${stderr}`);
        //     getdata();
        // }
      if(name.slice(0,2) =="cd")
        {
            process.chdir(`${name.slice(3)}`)
            console.log("done")
            t=name.slice(3);
            console.log(t)

        }
       t=process.cwd()
        if(name==="exit")
        return;
        console.log(`${stdout}`);
        getdata()
    });
    readline.close();
  })};
  getdata();
 