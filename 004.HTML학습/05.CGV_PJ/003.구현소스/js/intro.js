// CGV PJ 인트로 JS - intro.js

// 로고 누르면 문 열리고 극장으로 이동하기

/*
<h1 id="enter">
        <a href="#"
        onclick="document.body.classList.add('on')">
            <img src="./images/logo_cgv.png" alt="CGV로고">
            <span>Click Here!</span>
        </a>
    </h1>
*/
document.querySelector("#enter a").addEventListener("click", function(){
    document.body.classList.add('on');
});


//3초후 main.html 페이지로 이동하기

setTimeout(()=>{
    location.href = "main.html";
}, 3000);