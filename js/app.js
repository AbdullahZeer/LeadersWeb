
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
