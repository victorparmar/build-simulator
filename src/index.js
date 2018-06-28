const ProgressBar = require("progress");

const bar = new ProgressBar(":bar", { total: 100 });

console.log("Installing packages, this might take some time");

const timer = setInterval(function() {
  bar.tick();
  if (bar.complete) {
    console.log("Installation done");
    clearInterval(timer);
  }
}, 3000);

const install = () => {};
