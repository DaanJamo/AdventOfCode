import { parseArgs } from "jsr:@std/cli/parse-args";

const date = new Date();
const flags = parseArgs(Deno.args, {
  alias: {
    help:     "h",
    verbose:  "v",
    year:     "y",
    day:      "d",
    part:     "p",
  },
  boolean: ["help", "verbose"],
  string: ["year", "day", "part"],
  default: {
    year: date.getFullYear(),
    day: date.getDate(),
    part: 1
  }
});

if (+flags.year < 2015) {
  console.error(`I doubt AoC ${flags.year} will become available retroactively...`);
  Deno.exit(65); 
}

if (+flags.day < 0 || +flags.day > 25) {
  console.error(`day${flags.day} seems unlikely for an AoC assignment`);
  Deno.exit(65);
}

if (flags.help) {
  console.log("%cWelcome to the santa solver, run 'deno task solve -y=23 -d=3 -p=2' to solve AoC 2023 day 03 part 2", "color: green");
  console.log("%cDefault is the current day, your options are: ", "color: orange");
  console.log("%c-y/--year, -d/--day, -p/--part to select specific assignments", "color: yellow");
  console.log("%c-v/--verbose to show full console output", "color: red");
  Deno.exit(0);
}

const day = "day" + `0${flags.day}`.slice(-2);
const part = `part${flags.part}`;
if (flags.verbose) console.log("Running", `AoC ${flags.year}`, day, part);

const inputPath = `./${flags.year}/${day}/${part}/input.txt`;
const { default: solve } = await import(`../${flags.year}/${day}/${part}/${part}.ts`);

const answer = await solve(inputPath, flags.verbose);
console.log("Answer:", answer);
