//! common js방식의 모듈 export
/*
module.exports = {
  a: "이것은 a 데이터",
}
*/
//또는
/*
const a = {
  a: "이것은 a 데이터",
}
module.exports = a;
*/

//!esm방식의 모듈 export
const a = {
  a: "이것은 a 데이터",
}
export default a;