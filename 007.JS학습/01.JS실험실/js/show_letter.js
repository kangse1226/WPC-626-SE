//글자 등장1 JS - show_letter.js

//나의 함수 가져오기 
import myFn from "./my_function.js";
// js 확장자를 생략가능한 것은 node.js에서만 가능함. 브라우저는 확장자를 꼭 써줘야함!

// 함수호출하기
console.log(myFn);

/************************************************ 
[ 요구사항 분석하기 ]
 1. 글자가 한글자씩 화면에 등장하기 위한 셋팅은?
 2. 등장할 글자를 배열에 미리 셋팅한다.
 3. 각 박스를 돌면서 글자를 넣어준다.
 4. 글자는 한글자씩 잘라서 span태그로 감싼다.
 5. span은 트랜지션 지연시간을 셋팅한다.
 6. 해당 등장 스타일 클래스를 넣어준다.
 7. 글자 등장 시점에 해당 스타일 클래스에 
    on 클래스를 더해준다!
************************************************/

// 2. 등장할 글자를 배열에 미리 셋팅한다.
const myText = [
"🌸화산귀환🌸",
"✨데뷔 못하면 죽는 병 걸림🎤",
"👻괴담에 떨어져도 출근을 해야 하는구나😱",
"🐕극한 견주🦮"
];

// 박스 대상 : .stage-letters
const stage = myFn.qsa(".stage-letters");
console.log(stage);

// 3. 각 박스를 돌면서 글자를 넣어준다.
stage.forEach((el,idx)=>{
    //el-각 박스요소, idx-순번
    // 순번은 배열의 글자 순번으로 사용하려고!
    console.log(el,idx);
    // 각 박스에 글자넣기
     el.innerHTML = wrapSpan(myText[idx]);
    //찍어보고 주석처리 console.log(wrapSpan(myText[idx]));
   
   // 6. 해당 등장 스타일 클래스를 넣어준다.
    // 순서대로 .style1, .style2, .style3
    el.classList.add(`style${idx+1}`); 

    // 7. 글자 등장 시점에 해당 스타일 클래스에
    // on 클래스를 더해준다!
    // setTimeout(함수, 시간)
    setTimeout(()=>{
        el.classList.add("on");
    }, 1000 * (idx+1)); //1,2,3초
});//forEach///

// 4. 글자는 한글자씩 잘라서 span태그로 감싼다.
// 5. span은 트랜지션 지연시간을 셋팅한다.
// 글자를 span으로 감싸는 함수 ////
function wrapSpan(txt){
    // 함수호출확인 및 전달값 확인
    console.log("함수호출!", txt);
    // 글자를 잘라서 span태그로 감싸기
    //결과 변수: 리턴할 값을 담을 변수
    // 문자형으로 바로 만드는 거.. 스트링리터럴//
    let result = "";

    // 지연시간변수 : 트랜지션 지연시간
    //숫자형으로 바로 만드는거..넘버리터럴//
    let delayTime = 0;


    // for of문으로 글자 자르기
    // span으로 감쌀때 트랜지션 지연시간도 같이 넣기
    for(let x of txt){
        // 띄어쓰기 공백문자일 경우 b태그로 처리
      
        if(x === " "){result += `<b></b>`;}  //  if
        // 그밖에는 span태그로 감싸기
        else{
            result += `
            <span style="transition-delay: ${delayTime*0.08}s"
            >${x}</span>
            `;
              // 지연시간 0.08초씩 증가하기
            delayTime++;
        }//else
    }//for of문///

    //결과값 리턴하기 -> 호출한 곳으로 값을 돌려보냄@@@@
    return result;
}//wrapSpan 함수///
 
