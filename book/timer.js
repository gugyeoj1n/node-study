const timeout = setTimeout(() => {
    console.log("TIMER");
  }, 1500);
  
  const interval = setInterval(() => {
    console.log("INTERVAL");
  }, 1000);
  
  const timeout2 = setTimeout(() => {
    console.log("NONONONONONONONO");
  });
  
  setTimeout(() => {
    clearTimeout(timeout2);
    clearInterval(interval);
  }, 2500);
  
  const immediate = setImmediate(() => {
    console.log("RIGHT NOW");
  });
  
  const immediate2 = setImmediate(() => {
    console.log("NONONONONONONONONONONONONO");
  });
  
  clearImmediate(immediate2);
  