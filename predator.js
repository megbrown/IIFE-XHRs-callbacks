var Predator = (function(oldPredator){
	var carnivoresArr = [];
	var herbivoresArr = [];

  return {
    loadCarnivores: function (callbackToInvoke) {
      var loader = new XMLHttpRequest();
      loader.addEventListener("load", function () {
        carnivoresArr = JSON.parse(this.responseText).carnivores;
        callbackToInvoke(carnivoresArr)
      });
      loader.open("GET", "data/carnivores.json");
      loader.send();
    },
    loadHerbivores: function (callbackToInvoke) {
      var loader = new XMLHttpRequest();
      loader.addEventListener("load", function () {
        herbivoresArr = JSON.parse(this.responseText).herbivores;
        callbackToInvoke(herbivoresArr)
      });
      loader.open("GET", "data/herbivores.json");
     loader.send();
    }
  }
})();