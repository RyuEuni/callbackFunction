function six(number, append){
    return number + append;
}

function seven(number, append){
  return number - append;
}

function eight(number, append, callback){
  let a = number + 1;
  let b = append + 2;
  return callback(a, b);
}

console.log(eight(1, 2, function(a, b){
  return a + b;
}))

console.log(eight(3, 4, seven));

//* 동기방식의 콜백 함수 사용.