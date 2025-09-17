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