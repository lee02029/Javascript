<script>
    var arr = []
    for(var i=0;i<5;i++){
        arr[i] = function(id){
            return function(){
                return id;  //외부함수에서 내부함수로 호출
            }
        }(i);
    }
    for(var index in arr) {
    console.log(arr[index]());
}
</script>
