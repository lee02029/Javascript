<script>
    function Ultra(){}
    Ultra.prototype.ultraProp = true;

    function Super(){}
    Super.prototype = new Ultra();

    function Sub(){}
    Sub.prototype = new Super();
    Sub.prototype.ultraProp = 2;

    var o = new Sub();
    console.log(o.ultraProp);
</script>
