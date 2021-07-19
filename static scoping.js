<script>
    var i = 5;  //전역 변수
 
    function a(){
        var i = 10;
        b();
    }
  
    function b(){   //변수가 정의 되는 시점에서 아용 -> 정적 유효범위
        document.write(i);  //지역 변수가 없으므로 전역 변수 선언(a함수에 b값이 선언이 되어도 전역이 우선) 
    }
  
    a();
</script>
