import fs from 'fs';

function makeFile(name, data){
  const makeFile = "./" + name + ".js";
  fs.writeFileSync(makeFile, data);
}

export default makeFile;