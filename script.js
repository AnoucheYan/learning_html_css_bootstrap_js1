window.onload=function() {
  // Getting onload useful elements
  var moreLessBtn = document.getElementById("moreLessBtn");
  var moreTeam = document.getElementById("more");
  //

  
  moreLessBtn.onclick = function() {

    if (moreTeam.className === "d-none") {

      // Show element
      moreTeam.className="d-block";
      //

      // Changing button`s content when element is shown
      var str = document.getElementById("moreLessBtn").innerHTML; 
      var res = str.replace("MORE", "LESS");
      document.getElementById("moreLessBtn").innerHTML = res;
      //
    
      // Changing icons when element is shown
      var rightic = document.getElementById("right");
      var leftic = document.getElementById("left");
      rightic.className = "d-none";
      leftic.className="d-inline-block"
      //
    
    } else {

      // Hide element
      moreTeam.className="d-none";
      //

      // Changing button`s content when element is hidden
      var str = document.getElementById("moreLessBtn").innerHTML; 
      var res = str.replace("LESS", "MORE");
      document.getElementById("moreLessBtn").innerHTML = res;

      // Changing icons when element is hidden
      var rightIc = document.getElementById("right");
      var leftic = document.getElementById("left");
      rightIc.className= "d-inline-block";
      leftic.className = "d-none";
      //

    };

  };

};  
