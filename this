<script>
    var funcThis = null; 
 
 function Func(){
     funcThis = this;         
 }
 var o1 = Func();
 if(funcThis === window){
     document.write('window <br />');
 }
  
 var o2 = new Func();
 if(funcThis === o2){
     document.write('o2 <br />');
 }
</script>
//생성자내에서 this는 생성자가 만든 객체를 지칭한다.

window내에서 this는 window, 생성자내에서의 this는 생성될 객체(호출후 객체생성)
mothod 에서 this는 mothod 가 소속된 객체지칭한다.
