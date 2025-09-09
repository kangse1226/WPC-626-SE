// JS3-1.제어문 JS /////////

// 본 파일 로딩확인
console.log("나, 제어문 테스트!");

// 1. if문 처리를 위한 함수 만들기 //////
/************************************** 
    함수명 : 점수보여줘
    기능 : 점수에 따른 평가를 출력함
        1. 점수에 따른 메시지 출력
        2. 점수에 따른 메시지 글자색변경
        3. 점수에 따른 칭찬스티커 보이기
**************************************/
// 이름있는 함수를 선언적 함수라고함!

function 점수보여줘() {
  // 1. 함수호출확인
  console.log("내 점수 보여줘 함수야!");

  //2. 대상 선정
  //2-1. 점수입력박스
  var 내점수 = document.getElementById("jumsu");
  //입력창 input의 값은 value속성으로 읽을수 있다!

  // 2-2. 출력박스
  var 출력박스 = document.querySelector(".jexp");

  // querySelector() 메서드는 선택자(클래스, 아이디, 태그) 모두 가능함!
  //하나만 선택하여 가져온다!

  //querySelectorAll() 메서드는 선택자(클래스, 아이디, 태그) 모두 가능하며
  //여러개를 선택하여 가져온다! -> 순번필요! -> item(순번) 사용!

  //get어쩌구점어쩌구 불편하니까 이걸로 쓴다

  // queuery :
  // selector :
  // all : 0부터 다

  console.log("내점수:", 내점수.value, "출력박스:", 출력박스);

    // 2-3. 칭찬스티커 박스
 var 칭찬스티커 = document.querySelector(".jshow");


   // 3. 점수에 따른 if문 처리하기 /////

    if(내점수.value >= 90){
        //90점 이상
        출력박스.innerHTML = "아주 대단해요!";
        출력박스.style.color = "green";
        칭찬스티커.style.backgroundPosition = "50% 50%";
        
    }
    else if(내점수.value >= 80){
        //80점 이상
        출력박스.innerHTML = "제법이네요!";
        출력박스.style.color = "skyblue";
        칭찬스티커.style.backgroundPosition = "50% 0%";
    }
    else if(내점수.value >= 70){
        //70점 이상
        출력박스.innerHTML = "정진하세요!";
        출력박스.style.color = "orange";
        칭찬스티커.style.backgroundPosition = "0% 0%";
    }
    else if(내점수.value >= 60){
        //60점 이상
        출력박스.innerHTML = "공부 방법을 바꿔보세요!";
        출력박스.style.color = "black";
        칭찬스티커.style.backgroundPosition = "100% 0%";
    }
    else {
        //60점 미만
        출력박스.innerHTML = "재수강하세요!";
        출력박스.style.color = "red";
        칭찬스티커.style.backgroundPosition = "0% 100%";
    }
//위에서 else if가 아니라 if라고 쓰면 99점이라도 밑에 계속 검사해서 60점 이상으로 출력되는 것

} //점수보여줘 함수의 끝

/*************************************** 
     [ if문 ]
    - 조건문을 검사하여 true이면
    중괄호안의 코드가 실행되는 제어문

    - 조건문이란 
    결과가 true / false 로 나오는 구문
    (조건문: 비교연산자, 논리연산자)

    ((구문))
    ____________________________

    if(조건문){
        실행코드
    }
    else if(조건문){
        실행코드
    }
    ...
    else{
        실행코드
    }
    ______________________________

    ((구문해석))
    1. if문은 단독으로 따로 사용가능

    2. else if문은 if문 뒤에 또는 else if문 뒤에
    만 사용가능함!(else if로 시작못함!)
    -> 하나의 조건에 걸리면 다른 조건문엔 안들어감!
    -> 단독으로 else if문 사용불가!

    3. else문은 모든 조건에 해당없을때
    무조건 실행할 코드가 있을 경우 사용한다!
    -> if문 가장 끝에 사용한다!
    -> 단독으로 else문만 사용불가!

    ※ 참고 : if문의 실행문이 하나이면 중괄호생략가능
    예) 
        if(aa>10){
            my = "ㅎㅎㅎ";
        }

        -> 위와 같음

        if(aa>10) my = "ㅎㅎㅎ";
    ***************************************/
