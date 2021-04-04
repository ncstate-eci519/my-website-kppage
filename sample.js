$(document).ready(function(){
    $("#down").click(function(){
        $("#down").hide(function(){
            $("#up").show(function(){
                $("#up").removeClass("hidden");
            });
        });
    });
});

$(document).ready(function(){
    $("#up").click(function(){
        $("#up").hide(function(){
            $("#down").show();
        });
    });
});

$(document).ready(function(){
    $("#down").click(function(){
        $(".card-body").show(function(){
            $(".card-body").removeClass("hidden");
        });
    });
});

$(document).ready(function(){
    $("#up").click(function(){
        $(".card-body").hide();
    });
});

var edtechtool = {};
  edtechtool['gsuite'] = 0;
  edtechtool['flipgrid'] = 0;
  edtechtool['seesaw'] = 0;
  edtechtool['nearpod'] = 0;
$(document).ready(function(){
  
  drawChart();
  
  $("#submit").click(function(){
      if($("#edtechtool").val()=="gsuite"){
        edtechtool['gsuite']++;
      }
      if($("#edtechtool").val()=="flipgrid"){
          edtechtool['flipgrid']++;
       }
       if($("#edtechtool").val()=="seesaw"){
        edtechtool['seesaw']++;
     }
     if($("#edtechtool").val()=="nearpod"){
        edtechtool['nearpod']++;
     }
    drawChart();
  });
  
  function drawChart(){
    var ctx = $('#myChart');
    var myChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['GSuite', 'Flipgrid', 'Seesaw', 'Nearpod'],
            datasets: [{
                label: '# of Votes',
                data: [edtechtool['gsuite'], edtechtool['flipgrid'], edtechtool['seesaw'], edtechtool['nearpod']],
              backgroundColor:[
                'red',
                'orange',
                'yellow',
                'green',
              ]
            }]
            }
        });
  }
  });