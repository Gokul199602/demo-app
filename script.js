var j = null;

var elem = document.getElementById("elementpage");

$('document').keydown(function(e){
  alert(e.which);
  if(e.which === 27){
     alert('Congradulations you pressed escape');
  }
});

var a;
$.getJSON( "appData.json", function( data ) {
  console.log(data);
  a = data;
  j = data.appId;
  
  for(var i =0;i<a.events[0].tabs[3].agenda[0].detail.length;i++)
  {
      var k = a.events[0].tabs[3].agenda[0].detail[i].topic;
      $('#mydrop').append("<a class='dropdown-item' id='"+i+"' href='#' onclick='eventMaking("+i+")'>"+k+"</a>");
  }


});

var socket = io.connect('http://104.131.76.15:3030/socket/con');
    socket.on('connection', function (data) {
    console.log(data);
    // socket.emit('my other event', { my: 'data' });
});

socket.on('report_data', function(data) {
  console.log('conreportnected',data);
  // socket.emit('my other event', { my: 'data' });
});

socket.on('confirm_connection', function (data) {
    console.log('connected',data);
    socket.emit('polling_report',a.appId,'Event Feedback','global',0)
    // socket.emit('my other event', { my: 'data' });
});

var a = $('#mydrop')



  function openFullscreen()
  {
    $('.mycontainer').css("margin-top","60px");
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
      } else if (elem.mozRequestFullScreen) { /* Firefox */
        elem.mozRequestFullScreen();
      } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
        elem.webkitRequestFullscreen();
      } else if (elem.msRequestFullscreen) { /* IE/Edge */
        elem.msRequestFullscreen();
      }
    console.log('hello');
  }

  function eventMaking(i)
  {
    console.log(i);
    a = $('#'+i).text();
    console.log(a);
    $('#myTopic').text(' '+a);
  }

  $(document).keypress(function(e) { 
    if (e.keyCode === 27)
    {
      console.log('hello');
      window.location.reload(false);
    }
});






