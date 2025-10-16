// 1. sayHello라는 이름으로 함수를 하나 만들거야. 아무 입력도 필요없고, 실행하면 "안녕!"을 출력해!

const sayHello = () => {
    console.log("안녕!");
};

sayHello(); //함수 호출

//2. sayYourName라는 이름으로 함수를 하나 만들거야. 
const sayYourName = (name) => {
    console.log("안녕, 나는 "+name+"(이)야.");
};

sayYourName("박문대");
sayYourName("김솔음"); //함수 호출

//파라미터(Parameter)란?

//**함수를 정의할 때 전달받는 값을 담는 ‘변수’**입니다.

//쉽게 말하면 함수 안으로 들어오는 입력값을 이름 붙인 것이에요.

//코드를 읽는 사람(자신 포함)이 이해하기 쉽도록 의미 있는 이름을 쓰는 것이 좋습니다.

//파라미터 이름과 내부 참조가 일치해야 하는 이유

//함수 안에서 값을 참조할 때 파라미터 이름과 정확히 동일하게 써야 JS가 그 값을 찾을 수 있습니다.

//만약 다르게 쓰면 JS는 정의되지 않은 변수라고 오류를 내요.


//3. 최애 출력하기
const showFavorite = (favorite) => {
    console.log("내 동년배들 다 ",favorite," 좋아한다.");       
};

showFavorite("테스타"); // 함수 호출

//4. 숫자 더해보기->계산 후 바로 콘솔에 보여주기
const addNumbers = (num1, num2) => {
    console.log(num1+num2);
};

addNumbers(7,4); //함수 호출

//5. 결과를 돌려주는 함수!!!->계산 결과를 변수나 다른 계산에 활용가능
const addNumberss = (a, b, c) => {
    return a+b+c;   
};

const result = addNumberss(7,4,10);
console.log(result);//함수 호출
//return을 사용 → 계산 결과를 함수 밖으로 돌려줌

//이제 다른 변수에 저장하거나, 다른 연산에 바로 활용 가능

//콘솔 출력은 선택 사항 → console.log(result)처럼 밖에서 찍을 수 있음

//console.log → 보여주기용

// return → 돌려주기용


