<script>
    function Person(name){
    this.name = name;
    }
    Person.prototype.name=null;
    Person.prototype.introduce = function(){
        return 'My name is '+this.name; 
    }
 
    function Programmer(name){
        this.name = name;
    }
    Programmer.prototype = new Person();
    Programmer.prototype.coding = function(){
        return "hello world";
    }
 
    var p1 = new Programmer('egoing');
    document.write(p1.introduce()+"<br />");
    document.write(p1.coding()+"<br />");
</script>
