var inputemail=document.getElementById("inputemail");
console.log(inputemail)
var inputpassword=document.getElementById("inputpassword");



var email=document.getElementById("email");
console.log(email);

var passwords=document.getElementById("passwords");
console.log(passwords);


var logbtn=document.getElementById("logbtn");

                //local-storage
var localemail=localStorage.getItem("email")
console.log(localemail);

var localpassword=localStorage.getItem ("password")
console.log(localpassword);



    logbtn.addEventListener("click", function (){

       
    
        var a=inputemail.value;
        console.log(a);
        var b=inputpassword.value;
        console.log(b);

    if(a!==localemail){
          alert("Your Email Dows Not Mach");
    }
    else{
        passwords.innerHTML="";
    }
     
     if(b!==localpassword){
        alert("Your password Dows Not Mach");
    }
    else{
        location.href="wep-card-js/index.html";
    }
     
    //  if(){
    //     location.href="wep-card-js/index.html";
    // }

})
