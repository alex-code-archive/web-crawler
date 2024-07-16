import { argv } from "node:process";
import { crawlPage } from "./crawl.js";
function main() {
  if (argv.length < 3) {
    console.log("Error: not enough CLI arguments");
    return;
  } else if (argv.length > 3) {
    console.log("Error: Too many arguments passed, there should only be one.");
    return;
  } else if (argv.length === 3) {
    console.log(`Crawler is starting at ${argv[2]}`);
  }
  const baseURL = argv[2];
  crawlPage(baseURL);
}
main();
