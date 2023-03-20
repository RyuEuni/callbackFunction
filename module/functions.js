function one(){
  return 1;
}

function twoReturnString(){
  return "1"; 
}

function isthree(){
  return true; //type이 boolean이면 함수명 앞에 is를 써준다. (개발자끼리의 약속)
}

function four(){
  return {
    a: 1,
    b: "2",
    c: true
  }
}

function five(){
  let a = 1 + 1; //리턴이 없고 동작만을 위한 함수. -> 실행함수라고 함. ex)for문
}