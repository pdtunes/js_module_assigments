const apiUrl = "https://api.rawg.io/api/creators";

fetch(apiUrl)
  .then(response => response.json())
  .then(function(json) {
    console.log(json);
    json.results.forEach(creators => {
      console.log("\n");
      console.log(creators.name);

      creators.positions.forEach(position =>{
          console.log(position.name)
      })

      creators.games.forEach(game => {
        console.log(game.name);
        
      });
    });
  })

  .catch(error => {
    console.log(error);
  });
