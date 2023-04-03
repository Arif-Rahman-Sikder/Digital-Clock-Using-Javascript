function showTime() {
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var ampm = h >= 12 ? 'PM' : 'AM';
    
    h = h % 12;
    h = h ? h : 12;
    m = m < 10 ? '0' + m : m;
    s = s < 10 ? '0' + s : s;
    
    var time = h + ':' + m + ':' + s + ' ' + ampm;
    
    document.getElementById('clock').innerHTML = time;
    
    setTimeout(showTime, 1000);
  }
  
  showTime();
  