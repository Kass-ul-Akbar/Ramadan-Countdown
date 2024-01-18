var a= new Date("March 10, 2024 14:40:15").getTime();

var b=setInterval(function(){


  var c = new Date().getTime();

  var d = a - c;

  var Days = Math.floor(d/(1000*60*60*24));
  var Hours = Math.floor((d % (1000*60*60*24)) / (1000*60*60));
  var Minutes = Math.floor((d % (1000*60*60)) / (1000*60));
  var Seconds = Math.floor((d % (1000*60)) / (1000));

  document.getElementById("Countdown").innerHTML = Days + "d:" + Hours + "h:"
  + Minutes + "m:" + Seconds + "s";

  
  if(d<0){
    clearInterval(b)
    document.getElementById("Countdown").innerHTML = "EXPIRED";
  }

}, 1000)