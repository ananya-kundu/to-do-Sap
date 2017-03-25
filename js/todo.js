var User=function(firstName,lastName,email,password,birthDate,country){
  this.firstName=firstName;
  this.lastName=lastName;
  this.email=email;
  this.password=password;
  this.birthDate=birthDate;
  this.country=country;
};
// value takes by user
$(document).ready(function(){
  $(document).on("click","#signinBtn",function(){
      var firstName=$("#firstName").val();
      console.log(firstName);
      var lastName=$("#lastName").val();
      console.log(lastName);
      var email=$("#email").val();
      console.log(email);

      //validation checking
      var emailRegex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      if(!emailRegex.test(email))
      {
        // console.log("hiiiiii");
        alert("Plz provide valid mail-id..!!!");
      }
      var firstNameRegex = /^[a-zA-Z]+$/;
      if(!firstNameRegex.test(firstName))
      {
        alert("Plz provide valid first name..!!!");
      }

      var password=$("#password").val();
      console.log(password);
      var birthDate=$("#birthDate").val();
      console.log(birthDate);
      var country=$("#country").val();
      console.log(country);
      var temp;

      try {
        temp = JSON.parse(sessionStorage.getItem('user')) || [];
      } catch (e) {
        temp = [];
      }
      var userObj = new User(firstName,lastName,email,password,birthDate,country);
      temp.push(userObj);
      var updatedObj = JSON.stringify(temp);
      sessionStorage.setItem("user",updatedObj);

    });

});

$(document).ready(function(){
  $(document).on("click","#fetchUser",function(){
    var userNewObj=sessionStorage.getItem("user");
    var arrPos=JSON.parse(userNewObj);
    console.log(arrPos);
    var rslt=false;
    for(var i in arrPos){
      console.log(arrPos[i]);
      if(arrPos[i].firstName===$("#exampleInputEmaillog").val() && arrPos[i].password===$("#loginPassword").val() ){
        console.log("hiiiiiiiii.........");
        rslt = true;
      }
    }
    // if name and password are right,then go to welcome page.
    if (rslt) {
    $.ajax({
      url: "welcome.html",
      datatype:"text",
      type:"GET",
      success: function(result){
        console.log("this is result");
        $("#body").html(result);
      }
    });

    } else {
      alert("log in unsccess..PLease provide valid user-name and password");
    }
});
});
