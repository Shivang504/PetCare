const { existsSync } = require("fs");
const { execSync } = require("child_process");

if (existsSync(".git")) {
  execSync("lefthook install", { stdio: "inherit" });
}
