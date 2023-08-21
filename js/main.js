var firstname=document.getElementById("first-name");
console.log(firstname);
var regemail=document.getElementById("reg-email");
var regpassword=document.getElementById("reg-password");
var lastname=document.getElementById("last-name");
var regphone=document.getElementById("reg-phone");
var regconfirmpassword=document.getElementById("reg-confirmpassword");


var croratname=document.getElementById("croratname");
console.log(croratname);
var firstnames=document.getElementById("firstnames");
var croratemail=document.getElementById("croratemail");
var croratnumber=document.getElementById("croratnumber");
var coreatpassword=document.getElementById("coreatpassword");
var samepassword=document.getElementById("samepassword");



var ganter=document.forms["form-name"]["Gender"]
console.log(ganter);
var gentercoreat=document.getElementById("gentercoreat");





// Form.addEventListener("submit",e=>{
        
// })
function nameoffun(e){
    

                        /*First Name*/
    if(firstname.value===""){
        croratname.innerHTML="Place Enter Your First Name";
       
    }
    else if(firstname.value>="1"){
        croratname.innerHTML="";  
    }

                    /*Lsat name*/
     if(lastname.value===""){
        firstnames.innerHTML="Place Enter Your Last Name"; 
    }
    else if(lastname.value>="1"){
        firstnames.innerHTML="";
    }
    
                    /*Email*/
    if(regemail.value===""){
        croratemail.innerHTML="Place Enter Your Email";
    }
    
    else if(regemail.value.length>=1){
        spild1 = regemail.value;
        spild2 = spild1.split("")
          
        let=count=0;
        for(i=0;i<spild2.length;i++){
            if(spild2[i]=="@")
            {
                count=1;
            }
            else{
                console.log("one");
            }
            if(count==1){
                croratemail.innerHTML="";
            }
            else{
                croratemail.innerHTML="Enter Valid Email";
            }
        }

    }



                /* phonumber*/
    if(regphone.value===""){
        croratnumber.innerHTML="Place Enter Your Phonumber";
    } 
    else if(regphone.value.length!=10){
        croratnumber.innerHTML="Place Enter Your Correct Phonumber";
     } 
    //  else if(regphone.value !== string){
    //     croratnumber.innerHTML="only numbres";
    //  }
     else {
        croratnumber.innerHTML="";
     } 
      
                /* password*/
    if(regpassword.value===""){
        coreatpassword.innerHTML="Place Enter Your Password";
    }  
    else if(regpassword.value.length<=8){

        coreatpassword.innerHTML="Password Minmam 8 Digite";
    }
    
    else if (regpassword.value.length>=8){
        spild1=regpassword.value;
        spild2=spild1.split("");
        console.log(spild2);

        if(spild2.includes(" ")){
            coreatpassword.innerHTML="password space not a value";
        }
        else{

        coreatpassword.innerHTML="";
    }
    
}
         /*same password*/
    if(regconfirmpassword.value===""){
        samepassword.innerHTML="Place Enter Your Password"; 
    } 
   
               
     else if(regconfirmpassword.value != regpassword.value){
        samepassword.innerHTML="Password Dows Not Macth";
    }
    else{
        samepassword.innerHTML="";
    }


                /*ganter*/

       if( ganter.value ===""){
        gentercoreat.innerHTML="Enter The Genter"; 
       }
       else{
        gentercoreat.innerHTML=""; 
       }
       
       


    
       /* Local storage */
   localStorage.setItem ("firstname",firstname.value);  
   localStorage.setItem("lastname",lastname.value);
   localStorage.setItem ("email",regemail.value);
   localStorage.setItem("phonumber",regphone.value);  
   localStorage.setItem ("password",regpassword.value); 
   localStorage.setItem("conformpassword",regconfirmpassword.value); 


  
    gotoLogin=document.querySelector("#fn-btn");


// if(e.value == localStorage.value ){
    
//     location.href="login-form/index.html";
// }
       
}

var gotoLogin=document.querySelector("#fn-btn");


function logfunction(){
    
    location.href="login-form/index.html";
}
                

// var validatetemail=(email)=>{
//     return String(email)
//     .toLowerCase()
//     .match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
    
// };




                