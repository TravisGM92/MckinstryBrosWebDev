$(document).ready(function() {
  /*
      TODO: adjust trainOrTest so that this script gets
            the truth value everytime it changes
  */
  var trainOrTest = document.getElementById("tort").checked;

  // You can view this value by inspecting -> console
  console.log(trainOrTest);

  /*
      This replaces the bootstrap "hover" feature
  */
  var coll = document.getElementsByClassName("flex-item");
  for (var i=0; i < coll.length; i++) {
      // This changes the color on hover
      coll[i].addEventListener("mouseover", function () {
          this.setAttribute("style","background-color: black;")
      });
      // This changes it back when its not hover
      coll[i].addEventListener("mouseout", function () {
        this.removeAttribute("style")
      });

      // ... both (hover / not) will be useful for tracking
  }
});
