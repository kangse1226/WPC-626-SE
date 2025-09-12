// 롤링큐브 JS 파일 /////
// defer로 호출해서 이 파일은 html 로딩후 실행함

////////////////////////////////////////////////////////////////
//[1] 큐브 크기 변경 버튼 기능 구현하기./////////////////////////
////////////////////////////////////////////////////////////////

// 1. 요소선택하기

//사이즈 변경 버튼 요소 선택하기
const 사이즈버튼들 = document.querySelectorAll(".btn-size");

// 이파일이 불러와졌는지 확인하기
console.log(사이즈버튼들);

//2. 요소 컬렉션 개수만큼 반복처리하기
// forEach() 메서드는 여러개를 수집하는 컬렉션 이어서 사용하면 
// 개수만큼 자동으로 반복처리한다!!!
//자기자신을 갖고들어옴
//forEach(하나씩변수=>{여기서 하나씩 처리})

사이즈버튼들.forEach(버튼이야=>{
console.log(버튼이야);

//3. 이벤트함수 설정하기
버튼이야.onclick = ()=>{

  // 버튼요소의 글자 읽어오기. 
  console.log(버튼이야.innerText);

  // css의 변수값을js에서 변경하고있음
  // document.documentElement.style.setProperty(css변수명, 변수값);  
  document.documentElement.style.setProperty('--cube-size', `${버튼이야.innerText}`);  

};//onclick 이벤트함수 ///////////
}); //forEach 메서드////////////////////////


//////////////////////////////////////////
//[2] 큐브에 마우스 오버/아웃시 그림자 제어하기
//////////////////////////////////////////

//1. 대상요소 선택하기
//1-1. 큐브요소 선택하기
const 큐브 = document.querySelector(".cube");

//1-2. 그림자요소 선택하기
const 그림자 = document.querySelector(".shadow");

console.log(큐브, 그림자);

//2. 이벤트함수 설정하기
//2-1. 큐브에 마우스오버 이벤트 함수 설정하기
큐브.onmouseover = () => {
    
    // 그림자 제어하기
    그림자.style.animationPlayState = "paused";
}

//2-2. 큐브에 마우스아웃시 이벤트 함수 설정하기
큐브.onmouseout = () => {
    
    // 그림자 제어하기
    그림자.style.animationPlayState = "running";
}   


/* html에 넣엇던 소스를 js로 바꾸는중: 이걸 읽고 위에 2-1, 2-2 만들어줌
 onmouseover="
    document.querySelector('.shadow').style.animationPlayState='paused';
    " onmouseout="document.querySelector('.shadow').style.animationPlayState='running';"
*/ 


