<script>
    function sum(){   //매개변수 X
        var i,_sum=0;
        for(i = 0; i < arguments.length; i++){   //arguments = 유사배열
        document.write(i+' : '+arguments[i]+'<br />');
        _sum += arguments[i];
    }   
    return _sum;
}
document.write('result : ' + sum(1,2,3,4));   //인자 정의
</script>
