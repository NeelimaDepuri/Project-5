function validateForm() {
    var un=document.myform.uname.value;
    var ps=document.myform.pass.value;
    if(un==null||un==""){
        alert("name cant't be blank");
        return false;
    }
    else if(ps.length<6){
        alert("password must be 6 letters");
        return false;
    } 
    var countryDropdown = document.getElementById("Age").value
    // Check if a country is selected (not the default value)
    if (countryDropdown == "") {
      alert("Please select your age.");
      return false;
    }
    var rb=document.getElementsByName("gender")
    let cb=false
    for(var i=0;i<rb.length;i++){
        if(rb[i].checked){
            cb=true
            break
        }
    }
    if(!cb){
        alert("Please select a Gender")
        return false
    }
    var countryDropdown = document.getElementById("dropdownForm").value
    // Check if a country is selected (not the default value)
    if (countryDropdown == "") {
      alert("Please select a Language.");
      return false;
    }
    return true;
  }