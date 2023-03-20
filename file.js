import fs from 'fs';

let name = "ryueuni";
let date = new Date();
let fileName = "./" + date.getDate() + name + ".txt"; //?getFullYear는 연도별로 -> getDay, getSeconds 등 필요에 따라 사용

fs.writeFileSync(fileName, name); //?하위 경로에 fileName.txt 파일을 만들고 그안엔 name이란 데이터가 들어간다.
fs.unlinkSync(fileName); //? 지정한 파일 삭제
//fs.unlinkSync("./2023ryueuni.txt");