let btnOne = document.getElementById("btn");
 let msg = document.getElementById("msg");
 let itms = document.getElementsByClassName("items");
 let snd = document.getElementById("sendmsg");
 let close = document.getElementById("plus");
 let dialogText = document.getElementsByClassName("mss");
 let effct = document.querySelector(".effect");
 console.log(dialogText);
 btnOne.addEventListener("click", function() {
   btnOne.classList.toggle("move");
   msg.classList.toggle("resize");
   snd.classList.toggle("send");
   close.classList.toggle("one-move");
   effct.classList.toggle("effectshow");
   for (let i = 0; i <= dialogText.length; i++) {
     dialogText[i].classList.toggle("mss-show");
     itms[i].classList.toggle("itmshow");
   }
 });
