const colors = require("colors");
console.log(".........................................".bgMagenta);
// Callback and promises

/*
1.register
2.login
3.email
4.getData
5.displayData
*/

const register = (cb) => {
  setTimeout(() => {
    console.log("user registered.");
    cb();
  }, 1000);
};

const login = (cb) => {
  setTimeout(() => {
    console.log("user login.");
    cb();
  }, 1000);
};

const email = (cb) => {
  setTimeout(() => {
    console.log("user email.");
    cb();
  }, 1000);
};

const getData = (cb) => {
  setTimeout(() => {
    console.log("Get data form web.");
    cb();
  }, 1000);
};

const displayData = () => {
  setTimeout(() => {
    console.log("Display data.");
  }, 1000);
};
// callback hell
register(() => {
  login(() => {
    email(() => {
      getData(() => {
        displayData();
      });
    });
  });
});

console.log("Run other data.");

// console.log(".........................................".bgMagenta);
