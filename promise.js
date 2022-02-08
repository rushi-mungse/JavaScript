const colors = require("colors");
console.log(".........................................".bgMagenta);
// Promises

/*
1.register
2.login
3.email
4.getData
5.displayData
*/

const register = () => {
  return new Promise((reserve, reject) => {
    setTimeout(() => {
      console.log("user registered.");
      reserve("It's ok");
    }, 5000);
  });
};

const login = () => {
  return new Promise((reserve, reject) => {
    setTimeout(() => {
      console.log("user login.");
      reserve("It's ok");
    }, 1000);
  });
};

const email = () => {
  return new Promise((reserve, reject) => {
    setTimeout(() => {
      console.log("user email.");
      reserve();
    }, 1000);
  });
};

const getData = () => {
  return new Promise((reserve, reject) => {
    setTimeout(() => {
      //   return reject("Some error are accured!");
      console.log("Get data form web.");
      reserve("It's ok");
    }, 1000);
  });
};

const displayData = () => {
  return new Promise((reserve, reject) => {
    setTimeout(() => {
      console.log("Display data.");
      reserve("It's ok");
    }, 1000);
  });
};

//Promises
// register()
//   .then(login)
//   .then(email)
//   .then(getData)
//   .then(displayData)
//   .catch((err) => {
//     console.log(err);
//   });

// async and await
const authenticate = async () => {
  try {
    await register();
    await login();
    await email();
    await getData();
    await displayData();
  } catch (error) {
    console.log(error);
  }
};

authenticate().catch((err) => {
  console.log(err);
});

console.log("Run other data.");

// console.log(".........................................".bgMagenta);
