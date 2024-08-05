function valid(){
    var un=document.myform1.uname.value;
    var ps=document.myform1.pass.value;
    if(un==null||un==""){
        alert("name cant't be blank");
        return false;
    }
    else if(ps.length<6){
        alert("password must be 6 letters");
        return false;
    } 
    return true
}