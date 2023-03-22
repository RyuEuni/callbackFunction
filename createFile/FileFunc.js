import fs from 'fs';

const fileFunc = {
makeFile: function (name, data){
  const makeFile = "./" + name + ".js";
  fs.writeFileSync(makeFile, data);
},

removeFile: function (name){
  const removeFile = "./" + name + ".js";
  fs.unlinkSync(removeFile);
}
}
export default fileFunc;