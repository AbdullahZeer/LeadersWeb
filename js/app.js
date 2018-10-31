
  document.getElementById("Boyplus").addEventListener("click", function() {
    console.log("Boyplus ");
    document.getElementById("Boyinput").value ++;
  });
  document.getElementById("Boyminus").addEventListener("click", function() {
    console.log("Boyminus ");
    document.getElementById("Boyinput").value --;

  });
  document.getElementById("girlplus").addEventListener("click", function() {
    console.log("girlplus ");
    document.getElementById("girlsinput").value ++;

  });
  document.getElementById("girlminus").addEventListener("click", function() {
    console.log("girlminus ");
    document.getElementById("girlsinput").value --;

  });

  function handleChange(checkbox) {
    if(checkbox.checked == true){
      $(".flex-container").removeClass("hide");
    }else{
      $(".flex-container").addClass("hide");
   }
}

