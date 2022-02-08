// asyncronous

function greet(name) {
  let settled = false;
  let i = 0;
  while (i < 3) {
    const interval = setTimeout(() => {
      console.log(`Hello ${name}`);
      settled = false;
      i++;
    }, 3000);
  }
  settled ? clearInterval(interval) : null;
}
greet("Rushikesh");

// call-stack web-apis  callback
