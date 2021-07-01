const fs = require('fs');
const { exec } = require("child_process");
try {
  datetime = new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '').replace(':', '-').replace(':', '-').replace(' ', '-')
  const url = fs.readFileSync(__dirname+"/../data/lastURL", "utf8");
  console.log(url);
  console.log(datetime);
  exec(__dirname+'/youtube-dl.exe --restrict-filenames -f 136+140 -o "'+__dirname+'/'+datetime+'" '+url, (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
  });
  //var waitTill = new Date(new Date().getTime() + 3 * 1000);
  //while(waitTill > new Date()){}
} catch (err) {
  console.error(err)
}
