/*
기존 함수 선언 방식
function funcPrint(){
  console.log("외부 자바스크립트");
  console.log("버튼"+1)
}
*/

// ES6+ : 화살표 함수
const funcPrint = (n) => {
    // console.log(n); console.log("외부 자바스크립트");
    console.log(`버튼${n}`);
}
/*
//변수
//console.log(x);
const x = 10;
console.log(x);
*/

// JQuery $.document.ready 돔 연습
document.addEventListener("DOMContentLoaded", () => {
    //요소생성
    let bt = document.createElement("button")
    document
        .getElementById("bt")
        .append(bt);
    /*
  DOM이 생성되고 난 후에 요소를 CRUD해야한다
  document.addEventListener("DOMContentLoaded", 콜백함수})
  document.addEventListener("DOMContentLoaded", function(){});
  document.addEventListener("DOMContentLoaded", function()=>{});
  console.log("test"); console.log(document.getElementById("bt").innerHTML)
*/

    // htmlcolletion
    const bts1 = document.getElementsByClassName("bt1");
    console.log(bts1);

    //htmlcolletion
    const bts2 = document.getElementsByTagName("button");
    console.log(bts2);

    //node
    const bts3 = document.querySelector(".bt1");
    console.log(bts3);

    //nodelist
    const bts4 = document.querySelectorAll(".bt1");
    console.log(bts4);

    /*
    console.log(bts4[0].innerHTML);
    console.log(bts4[0].innerText);
    console.log(
      * bts4[1].textContent);

      */

    /*
     //결과 nodelist를 반복으로 가져오기 반복문 for
     for (let i = 0; i < bts4.length; i++) {
       bts4[i].innerHTML = `mybutton${i+1}`
       console.log(bts4[i].innerHTML);
      }
      */

    /*
    //반복문 for in => 키값 가지고 옴
    for(let i in bts4){
      console.log(i)
    }
    */

    /*
   // 반복문 foreach : 메소드 형식 중간에 종료할 수 없음
   bts4.forEach((item,idx) => {
     console.log(`${idx} : ${item.innerHTML}`);
    })
    */

    /*
    //반복문 forof break 가능
    for(let [idx,item] of bts4.entries()){
      console.log(`${idx} : ${item.innerHTML}`);
      break;
    }
    */

});