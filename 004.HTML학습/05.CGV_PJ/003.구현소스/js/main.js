// CGV PJ 추가기능 JS - main.js

// 로딩확인
console.log("나야나 로딩!");

//목표: 포스터 클릭하면 해당 영화 예고편 영상 재생

// 영화 예고편 유튜브 아이디 정보 객체////////
const 유튜브아이디 = {
    "플립":"o8j70yHzTJs",
    "케이팝데몬헌터스":"xQnsFqn44uo",
    "스파이더맨:뉴유니버스":"glgTzsYqmZk",
    "인사이드아웃2":"EiCmnIaj4u8",
    "타이타닉":"F_KNku_Xu-0",
    "원더":"gzzKHu1nVsw",
};

//1.대상선정
//1-1. 포스터 링크 이미지 a요소: 이벤트 대상
//쿼리셀렉터쓸건데 a요소가 여러개니까 all
const 링크 = document.querySelectorAll('.poster-menu-box li a');
//1-2. 영화 상영 아이프레임: 변경 대상
// 아이프레임은 한개잖아. 그 스크린에 있는거!
const 아이프레임 = document.querySelector('.screen iframe');

//2.이벤트 대상에 클릭이벤트 적용하기
//링크.forEach((요소,순번) => {});
// forEach()메서드 내부함수에 첫번째 전달값으로 순회하는 요소나 값하하나가 순서대로 전달된다
링크.forEach((요소) => {
    요소.onclick = () => {
        //3. 클릭된 a요소 자식 중 h2요소의 글자 읽기
        let 영화명 = 요소.querySelector('h2').innerText;
        console.log("클릭된 영화명:",영화명);

        //4. 아이프레임 소스 변경하기
        아이프레임.src = `https://www.youtube.com/embed/${유튜브아이디[영화명]}?autoplay=1`;
    };
});
    


//원래는 html a 요소에 직접 이벤트 속성에 코딩해서 테스트했었으나
// js파일로 코드를 분리한다!!

/* <a href="#" onclick="
// ckHwZNuV-wQ
document.querySelector('.screen iframe')
.src = `https://www.youtube.com/embed/ckHwZNuV-wQ?autoplay=1`;"
></a> */


//2. 포스터 메뉴 클릭시 클래스 on 넣기(나머지는 빼기)
//2-1. 이벤트 대상 === 변경대상(지금은 이벤트 대상과 변경 대상이 같음. )
//포스터 메뉴 a 링크가 이벤트 대상이자 변경대상
// element의 el 이 변수명이 중요한건아님 헐이라고 써도 상관없음 그러나 앞으로 el쓰자

//위에 forEach에 써도 되는데 지금은 분리해서 써봄
링크.forEach((el, idx, arr)=>{
    //(el- 각요소, idx-순번, arr-html컬렉션 유사배열)

    //2-2. 이벤트 대상 === 변경대상 -> 포스터메뉴 a링크
//el.onclick = () => {};
// 만약 이렇게 onclick 이벤트 속성으로 세팅하게 되면 이전에 세팅된 onclick 이벤트 속성값이 지워진다
//왜냐면 한 요소 안에 한개의 동일 이벤트 속성만 있기 때문!!!

    //그래서!! 이벤트 등록 전문 이벤트 addEventListener()를 사용함!
    el.addEventListener('click', ()=>{
        //(1) 모든 li에 on 클래스 제거하기- 부모인 li로 올라가야함
        arr.forEach(x => x.parentElement.classList.remove('on'));

        //(2) 포스터 a링크의 부모인 li에 on넣기 //parentElement: a링크의 부모요소인 li
        el.parentElement.classList.add('on');

    }); //addEventListener()///
        
});////forEach 메서드////



    
    //2-3.  포스터메뉴 a링크의 부모인 li에 on넣기
    
    // el.parentElement.classList.add('on');
    //-> 근데 위에 onclick있는데 여기 또 onclick 할당하면  덮어써져서 위가 날라감
    //-> add event listener  으아악 이벤트를 기존 것 덮어쓰지 않고 따로 메모리 만들어!!
    // 만약 이렇게 onclick 이벤트 속성으로 세팅하게 되면 이전에 세팅된 onclick 이벤트 속성값이 지워진다
    //왜냐면 한 요소 안에 한개의 동일 이벤트 속성만 있기 때문!!!
    //요소 안에 동일 속성 못써 예를 들면 <header class="classname1" class="classname2"></header> 이렇게 못쓰잖아 알지?


// 확인용
링크.forEach(헐=>console.log(헐));
//-> 링크를 돌면서 변수 헐에 각 요소를 순서대로 전달한다. 



// 3. 오시는길 클릭시 구글맵 보이기 ///
// 이벤트 대상 : .goMV 
// 변경 대상 : .gmap
document.querySelector('.goMV').onclick = () => {
    // 클래스 on넣기
    document.querySelector('.gmap').classList.add('on');
}

// 닫기버튼 .cbtn을 클릭시 .gmap에 클래스 on 제거하기
document.querySelector('.cbtn').onclick = () => {
    document.querySelector('.gmap').classList.remove('on');
}   
