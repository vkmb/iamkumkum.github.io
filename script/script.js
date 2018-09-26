window.onload=function() {
  // Month,Day,Year,Hour,Minute,Second
  upTime('sep,28,1997,00:00:00'); // ****** Change this line!
}
function upTime(countTo) {
  now = new Date();
  countTo = new Date(countTo);
  difference = (now-countTo);
  

  days=Math.floor(difference/(60*60*1000*24)*1);
  hours=Math.floor((difference%(60*60*1000*24))/(60*60*1000)*1);
  mins=Math.floor(((difference%(60*60*1000*24))%(60*60*1000))/(60*1000)*1);
  secs=Math.floor((((difference%(60*60*1000*24))%(60*60*1000))%(60*1000))/1000*1);
  secc=Math.floor(difference/(1000));
  aeon = secc * 3.17097919838  *Math.pow(10, -17);
  console.log(aeon);
  document.getElementById('secc').firstChild.nodeValue = aeon;


  clearTimeout(upTime.to);
  upTime.to=setTimeout(function(){ upTime(countTo); },1000);
}

