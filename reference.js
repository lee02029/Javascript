<script>
    var a = {'id':1};              //원시데이터 타입에 해당(ex.string, Number, Boolean, Undefined, Null)
    function func(b){
        b = {'id':2};              //b가 가르키는 객체를 변경하는 것이기 때문에 객체 a에 영향을 주지않는다.
    }
    func(a);
    console.log(a.id);  // 1
</script>
