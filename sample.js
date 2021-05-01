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



