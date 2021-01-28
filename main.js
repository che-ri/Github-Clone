//즉시실행함수 //window,document를 모듈화
(function (window, document){
    'use strict' //엄격모드

    const $toggles = document.querySelectorAll('.toggle'); //querySelectorAll을 사용하면 nodeList라는 유사배열이 된다.
    //요소를 담고있을땐, 상수이름앞에 $표시를 붙여주자. (관습인듯..)
    //toggle이 두개니까, all을 붙이는거야. 
    //왜냐하면 querySelector만 쓰면 노드의 첫번째 자식만 반환하니까! 
    
    const $toggleBtn = document.getElementById('toggle-btn');
    //토클 버튼을 정의한다.

    $toggleBtn.addEventListener('click', function(){
        toggleElements();
    });
    //토글버튼을 클릭하는 이벤트를 정의한다.
    //click 이벤트가 실행되면! function이 실행된다.

    window.addEventListener('resize', function(){
        if(window.innerWidth > 1024) {
            offElements();
        }
    });
    //window는 브라우저를 의미한다.
    //브라우저가 resize 되고 있고, 만약 넓이가 1024보다 크다면 offElements라는 함수를 실행시키는 함수를 실행한다.




    function toggleElements(){
        [].forEach.call($toggles, function(toggle){
            toggle.classList.toggle('on');
        });
    }
    //$toggles에 하나의 toggle을 찾고, 그 안에 classList라는 속성이 있고, 그야말로 toggle을 할 것이다.    
       //classList는 class선택자를 제어해주는 속성이다. 그 class선택자를 토글하겠다.
       //'on'이라는 클래스선택자를 토글해주겠다.
       //따라서 toggleElements라는 함수가 실행되면 on이라는 토글이 $toggles에 실행된다.
      //[]배열을 forEach함수로 반복시킨다.
      //대괄호를 이용하여 반복하는 이유는? 유사배열을 반복하기 위해서! 
      //$toggles로 직접 반복도 가능하지만, $toggles는 정확하게는 유사배열이다.
      //$toggles이라는 유사배열을 call 메서드로 연결시켜준다.
      //유사배열을 반복할때마다 실행할 함수를 정의한다. 
      //$toggles를 반복하는 이유는? 
      //지금은 html에 toggle이 2개지만, 작성하다보면 toggle이 3,4개 더 늘어날 수 있기때문에, 반복을 통해서 모든 toggle을 긁어오기위해 반복시킨다. 
      //function에 사용될 toggle을 인자로 삼는다.

    function offElements() {
        [].forEach.call($toggles, function(toggle){
            toggle.classList.remove('on');
        });
    } //toggle의 'on' 클래스를 지우는 역활! 
    //why? on클래스가 없어야 display none이 되면서 메뉴들을 안보이게 할 수 있음!   
    
}) (window, document)
