function hello() {
    setTimeout(() => {
      const start = Date.now();
      for (let i = 0; i < 100000000; i++) {}
      const end = Date.now();
      console.log(end - start + `ms`);
    }, 0);
  }
  
  console.log("작업시작");
  hello();
  console.log("다음 작업");