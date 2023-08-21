var head = [
   {
      id: 1,
      hed: "Bike Showroom",
      allbtn:"All",
      kavabtn: "KAWASAKI",
      royalbtn: "ROYAL ENFIELD",
      yamakabtn: "YAMAHA",
},
]



var detells =
   [
      {

         id: 1,
         image: "img/imgkk1.avif",
         title: "Kawasaki Z900",
         para: "₹ 9,10,986",
         but: "More Details",
         icons: '<i class="fa fa-long-arrow-right" aria-hidden="true"></i>',
         addbut:"Add",
         addicon:'<i class="fa fa-plus" aria-hidden="true"></i>',
      },
      {
         id: 2,
         image: "img/imgrr1.jpg",
         title: "Royal Enfield Himalayan",
         para: "Rs. 2.15 - 2.28 Lakh",
         but: "More Details",
         icons: '<i class="fa fa-long-arrow-right" aria-hidden="true"></i>',
      },

      {
         id: 3,
         image: "img/imgyy1.webp",
         title: "Yamaha FZS 25",
         para: "Rs.1.54 Lakh",
         but: "More Details",
         icons: '<i class="fa fa-long-arrow-right" aria-hidden="true"></i>',
      },
      {
         id: 4,
         image: "img/imgkk2.jpg",
         title: "Kawasaki Ninja 400",
         para: "₹ 5,18,992",
         but: "More Details",
         icons: '<i class="fa fa-long-arrow-right" aria-hidden="true"></i>',
      },
      {
         id: 5,
         image: "img/imgyy2.jpg",
         title: "Yamaha R15 V4",
         para: "Rs.1.82 - 1.95 Lakh",
         but: "More Details",
         icons: '<i class="fa fa-long-arrow-right" aria-hidden="true"></i>',
      },



      {
         id: 6,
         image: "img/imgrr2.jpg",
         title: "Royal Enfield Hunter 350",
         para: "Rs.1.50 - 1.75 Lakh",
         but: "More Details",
         icons: '<i class="fa fa-long-arrow-right" aria-hidden="true"></i>',
      },
      {
         id: 7,
         image: "img/imgkk3.jpg",
         title: "Kawasaki Ninja H2",
         para: "₹ 35,00,000 - ₹ 36,00,000 ",
         but: "More Details",
         icons: '<i class="fa fa-long-arrow-right" aria-hidden="true"></i>',
      },
      {
         id: 8,
         image: "img/imgyy3.avif",
         title: "Yamaha MT 15 V2",
         para: "Rs.1.66 - 1.71 Lakh",
         but: "More Details",
         icons: '<i class="fa fa-long-arrow-right" aria-hidden="true"></i>',
      },

      {
         id: 9,
         image: "img/imgrr4.jpg",
         title: "Royal Enfield  GT 650",
         para: "₹ 3.19 - 3.45 Lakh ",
         but: "More Details",
         icons: '<i class="fa fa-long-arrow-right" aria-hidden="true"></i>',
      },
]

   



var cardsection = document.getElementById("card-sec");

/*contaner*/
var div1 = document.createElement("div");
div1.classList.add("contaner");
cardsection.appendChild(div1);

//heading function
head.forEach(function (e) {
   //headig 
   var div6 = document.createElement("div");
   div6.classList.add("card-heading");
   div1.appendChild(div6);

   //div in button
   var heading = document.createElement("h1");
   div6.appendChild(heading);
   heading.innerHTML = e.hed;

   var but4=document.createElement("button");
   div6.appendChild(but4);
   but4.innerHTML =e. allbtn;

   var but1 = document.createElement("button");
   but1.classList.add("but1");
   div6.appendChild(but1);
   but1.innerHTML = e.kavabtn;

   var but2 = document.createElement("button");
   div6.appendChild(but2);
   but2.classList.add("but2");
   but2.innerHTML = e.royalbtn;

   var but3 = document.createElement("button");
   div6.appendChild(but3);
   but3.classList.add("but3");
   but3.innerHTML = e.yamakabtn;
})



/*card-row*/
var div2 = document.createElement("div");
div2.classList.add("card-row");
div1.appendChild(div2);







detells.forEach(function (e) {

   /*card-col*/
   var div3 = document.createElement("div");
   div3.classList.add("card-col");
   div2.appendChild(div3);

   /*card*/
   var div4 = document.createElement("div");
   div4.classList.add("card");
   div3.appendChild(div4);


   /*img*/
   var pictiure = document.createElement("img");
   div4.appendChild(pictiure);
   pictiure.setAttribute("src", e.image);

   //heading
   var heading = document.createElement("h2");
   div4.appendChild(heading);
   heading.innerHTML = e.title;

   //price
   var para = document.createElement("p");
   div4.appendChild(para);
   para.innerHTML = e.para;

   ///button-div

   var btndiv = document.createElement("div");
   div4.appendChild(btndiv);
   btndiv.classList.add("card-btn")
   //button  
   var btn = document.createElement("button");
   // btn.setAttribute("onClick",bike())
   btndiv.appendChild(btn);
   btn.innerHTML = e.but;

   //icon
   var icon = document.createElement("i");
   btn.appendChild(icon);
   icon.innerHTML = e.icons;

   //add btn
   var addbtn=document.createElement("button");
   btndiv.appendChild( addbtn);
   addbtn.innerHTML=e. addbut;

   //addbtn-icon
   var addicon=document.createElement("i");
   addbtn.appendChild(addicon);
   addicon.innerHTML=e. addicon;
   
})



/*button-list*/
var button1 = document.getElementsByClassName("card-btn");
console.log(button1);




button1[0].addEventListener("click", function(){
   location.href = "./kavasaki-Z900/index.html";
      // console.log("hii");
})


button1[1].addEventListener("click", function(){

   location.href = "./Himalayan/index.html";
})

button1[2].addEventListener("click", function(){
 
   location.href = "./Yamaha FZS 25/index.html";
})

button1[3].addEventListener("click", function(){
 
   location.href = "./Kawasaki Ninja 400/index.html";
})

button1[4].addEventListener("click", function(){

   location.href = "./Yamaha-R15-V4/index.html";
})

button1[5].addEventListener("click", function(){

   location.href = "./Royal-Enfield-Hunter/index.html";
})

button1[6].addEventListener("click", function(){

   location.href = "./Kawasaki-Ninja-H2/index.html";
})

button1[7].addEventListener("click",function(){
   location.href = "./Yamaha-MT-15/index.html";
})

button1[8].addEventListener("click", butFunc)
function butFunc() {
   location.href = "./Royal-Enfield-GT-650/index.html";
}


