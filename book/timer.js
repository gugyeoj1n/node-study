const timeout = setTimeout(() => {
    console.log("TIMER");
  }, 1500);
  
  const interval = setInterval(() => {
    console.log("INTERVAL");
  }, 1000);
  
  const timeout2 = setTimeout(() => {
    console.log("NONONONONONONONO");
  }, 3000);

  const timeout3 = setTimeout(() => {
    console.log("0 !! NOT IMMEDIATE")
  }, 0)
  
  setTimeout(() => {
    clearTimeout(timeout2);
    clearInterval(interval);
  }, 2500);
  
  const immediate = setImmediate(() => {
    console.log("RIGHT NOW");
  });

  process.nextTick(() => {
    console.log("PROCESS FIRST")
  })
  
  const immediate2 = setImmediate(() => {
    console.log("NONONONONONONONONONONONONO");
  });
  
  clearImmediate(immediate2);
  

  // 1.5초 뒤에 TIMER
  // 1초마다 INTERVAL
  // timeout3 가 immediate 보다 빠를 때도 있고 느릴 때도 있네 ?
  // 3초 뒤에 timeout2인데 2.5초 뒤에 clearTimeout 하니까 안 나옴
  // 2.5초 뒤에 INTERVAL 끝 (2번 실행)
  // immediate 바로 실행
  // process.nextTick() 이 제일 빨리 실행 -> 얘랑 프로미스는 microtask 로 구분
  // immediate2 clear 되니까 안 나옴