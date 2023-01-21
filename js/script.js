$(function() {
    $(".navbar a, footer a").on("click", function(event) {
        event.preventDefault();
        var hash = this.hash();
        $('body').animate({scrollTo: $(hash).top}, 900, function(){
            window.location.hash = hash;
        });
    });
});
//Pour afficher le contenu de bienvenue
$(document).ready(function(){
    $("#flip").click(function(){
      $("#panel").slideToggle("slow");
    });
});
