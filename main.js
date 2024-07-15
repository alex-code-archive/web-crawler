import { argv } from "node:process";

argv.forEach((val, index) => {
  console.log(`${val}: ${index}`);
});
