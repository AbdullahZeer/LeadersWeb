
  document.getElementById("Boyplus").addEventListener("click", function() {
    console.log("Boyplus ");
    
        document.getElementById("Boyinput").value++;

     
  });
  document.getElementById("Boyminus").addEventListener("click", function() {
    console.log("Boyminus ");
    if(document.getElementById("Boyinput").value != 0){
        document.getElementById("Boyinput").value--;
    }
     

  });
  document.getElementById("girlplus").addEventListener("click", function() {
    console.log("girlplus ");
    
        document.getElementById("girlsinput").value++;
         

  });
  document.getElementById("girlminus").addEventListener("click", function() {
    console.log("girlminus ");
    if(document.getElementById("girlsinput").value  != 0){
        document.getElementById("girlsinput").value --;
    }
    

  });

  function handleChange(checkbox) {
    if(checkbox.checked == true){
      $(".flex-container").removeClass("hide");
    }else{
      $(".flex-container").addClass("hide");
   }
}

$('a[href*=#]:not([href=#])').click(function() {
  if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
      || location.hostname == this.hostname) {

      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
         if (target.length) {
           $('html,body').animate({
               scrollTop: target.offset().top
          }, 1000);
          return false;
      }
  }
});

