// 요구사항 - 내가 만들 사이트도 요구사항을 상세히 정리해놓기

/*요구사항 정리
    1. 버튼을 클릭시 기존 이미지가 왼쪽으로 사라짐
    -> 클래스 off를 이미지에 주면 왼쪽으로 사라짐!
     2. 이미지가 오른쪽 바깥으로 들어올 준비함
    -> 클래스 on를 이미지에 주면 오른쪽 바깥쪽으로 이미지를 이동함!
    3. 이때 이미지를 변경함
    4. 이미지가 변경된 후 중앙으로 등장함
    -> 클래스 on를 제거하면 중앙으로 등장!
    
    */

    // 이벤트를 이곳에서 바로 설정할 수 있다!
    // 원래는 태그에 이벤트 속성을 사용하여 함수 호출을 했지만...
    //여기서 이벤트를 직접 걸어줄 수 있다. 
    //-> HTML에서 JS 코드를 분리함!!!!!!!!

    //1. 대상선정: 버튼, 이미지
    // ()안에 . # > 이런 CSS선택자 문법 지켜야함
    var 버튼들 = document.querySelectorAll('.btns');
    var 이미지 = document.querySelector('.photo img');

//     querySelector 메서드가 아니면 아래처럼 복잡하게 써야하뮤ㅠ
//     ㅎㅎㅎ = document
// .getElementsByClassName('photo')
// .item(0).getElementsByTagName('img').item(0)

    console.log(버튼들, 이미지);

    //2. 함수 만들기
    var 실행해 = function(){
        //2-1. 함수호출확인
        console.log("버튼클릭!", this);
        // this 쓰면 뭘 클릭하는지 나옴
        //this는 클릭된 버튼 자신!
        // this는 이벤트가 걸린 요소를 가리킨다

        //2-2. 클릭된 대상의 버튼 글자 읽어오기
        var 버튼글자 = this.innerText;

        console.log('버튼글자',버튼글자);

        //2-3. 버튼글자에 따라 if문으로 이미지 변경하기
      if(버튼글자 === '포스터'){
        이미지.src = './images/ala1.jpg';
    } /// if ////
    else if(버튼글자 === '장면1'){
        이미지.src = './images/ala4.jpg';
    } /// else if ////
    else if(버튼글자 === '장면2'){   
        이미지.src = './images/ala3.jpg';
    } /// else if ////
    else if(버튼글자 === '장면3'){
        이미지.src = './images/ala2.jpg';
    } /// else if ////
    
    }; //////실행해 함수의 끝

    //3. 버튼에 클릭이벤트 설정하기
    //-> 할당형함수는 만든 후 아래쪽에서 호출해야함. 
    //선언형 함수는 한번에 읽고 할당형함수는 나중에 읽는닫고???????으아앙아아유ㅠㅇ유유엉엉엉

    버튼들.item(0).onclick = 실행해;
    버튼들.item(1).onclick = 실행해;
    버튼들.item(2).onclick = 실행해;
    버튼들.item(3).onclick = 실행해;

    //실행해 함수를 소괄호 없이 할당한 이유는?
    // 소괄호를 여기서 하면 바로 실행되기 때문
    // 소괄호 없이 함수명만 쓰면 클릭시 실행됨!
  
