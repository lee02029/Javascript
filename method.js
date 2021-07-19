<script>
    function cal(func, num){
    return func(num)
}
function increase(num){
    return num+1
}
function decrease(num){
    return num-1
}
alert(cal(increase, 1));
alert(cal(decrease, 1));
// first-class citizen : 변수,매개변수,리턴값활용
</script>

