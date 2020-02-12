console.log("synchronous: hi")

setTimeout(function() {
  console.log("Asynchronous result");
}, 5000);


console.log("synchronous: goodbye");