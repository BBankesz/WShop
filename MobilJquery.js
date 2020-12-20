$(document).ready(function(){
    $(".icon").slideDown(1000);
});
$("#slide > div:gt(0)").hide();

setInterval(function() { 
  $('#slide > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slide');
},  3000);


$(document).ready(function(){
  $("#tdDecor1").click(function(){
    $("#modalShow1").modal();
  });
});

$(document).ready(function(){
  $("#tdDecor2").click(function(){
    $("#modalShow2").modal();
  });
});

$(document).ready(function(){
  $("#tdDecor3").click(function(){
    $("#modalShow3").modal();
  });
});

$(document).ready(function(){
  $("#tdDecor4").click(function(){
    $("#modalShow4").modal();
  });
});

$(document).ready(function(){
  $("#tdDecor5").click(function(){
    $("#modalShow5").modal();
  });
});

$(document).ready(function(){
  $("#tdDecor6").click(function(){
    $("#modalShow6").modal();
  });
});

$(document).ready(function(){
  $("#tdDecor7").click(function(){
    $("#modalShow7").modal();
  });
});

$(document).ready(function(){
  $("#tdDecor8").click(function(){
    $("#modalShow8").modal();
  });
});

$(document).ready(function(){
  $("#tdDecor9").click(function(){
    $("#modalShow9").modal();
  });
});

$(document).ready(function(){
  $("#tdDecor10").click(function(){
    $("#modalShow10").modal();
  });
});

$(document).ready(function(){
  $("#tdDecor11").click(function(){
    $("#modalShow11").modal();
  });
});

$(document).ready(function(){
  $("#tdDecor12").click(function(){
    $("#modalShow12").modal();
  });
});

$(document).ready(function(){
  $("#tdDecor13").click(function(){
    $("#modalShow13").modal();
  });
});

$(document).ready(function(){
  $("#tdDecor14").click(function(){
    $("#modalShow14").modal();
  });
});

$(document).ready(function(){
  $("#tdDecor15").click(function(){
    $("#modalShow15").modal();
  });
});

$(document).ready(function(){
  $("#tdDecor16").click(function(){
    $("#modalShow16").modal();
  });
});

$(document).ready(function(){
  $("#tdDecor17").click(function(){
    $("#modalShow17").modal();
  });
});

$(document).ready(function(){
  $("#tdDecor18").click(function(){
    $("#modalShow18").modal();
  });
});