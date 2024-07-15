import readline from "node:readline";
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.question("hello?", (name) => {
  console.log(name);
  rl.close;
});
