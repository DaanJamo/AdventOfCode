import { parseArgs } from "jsr:@std/cli/parse-args";

const template = `import { parseTextFileNumbers } from "utils";

export default function solve(path: string, verbose: boolean = false): number {
  return 0;
}`;

const test_template = (y: string, d: string, p: string) =>
  `import { assertEquals } from "@std/assert";
import solve from "./${p}.ts";

Deno.test({
  name: "${p} test",
  permissions: { read: true },
  fn: () => {
    assertEquals(solve("./${y}/${d}/${p}/testCase.txt", true), 11);
  }
});`;

const date = new Date();
const flags = parseArgs(Deno.args, {
  alias: {
    year: "y",
    day: "d",
    parts: "p",
  },
  string: ["year", "day", "parts"],
  default: {
    year: date.getFullYear(),
    day: date.getDate(),
    parts: 2,
  },
});

if (+flags.year < 2015) {
  console.error(
    `I doubt AoC ${flags.year} will become available retroactively...`,
  );
  Deno.exit(65);
}

if (+flags.day < 0 || +flags.day > 25) {
  console.error(`day${flags.day} seems unlikely for an AoC assignment`);
  Deno.exit(65);
}

const day = "day" + `0${flags.day}`.slice(-2);
console.log(
  "Setting up",
  `AoC ${flags.year}`,
  day,
  `with ${flags.parts} parts`,
);

for (let p = 1; p <= +flags.parts; p++) {
  setUpPart(flags.year.toString(), day, `part${p}`);
}

function setUpPart(
  year: string,
  day: string,
  part: string,
) {
  try {
    Deno.mkdirSync(`./${year}/${day}/${part}`, { recursive: true });
    Deno.writeTextFileSync(`./${year}/${day}/${part}/${part}.ts`, template, {
      createNew: true,
    });
    Deno.writeTextFileSync(
      `./${year}/${day}/${part}/${part}_test.ts`,
      test_template(year, day, part),
      { createNew: true },
    );
    Deno.writeTextFileSync(`./${year}/${day}/${part}/input.txt`, "", {
      createNew: true,
    });
    Deno.writeTextFileSync(`./${year}/${day}/${part}/testCase.txt`, "", {
      createNew: true,
    });
  } catch {
    console.log(`AoC ${year}`, day, `${part} already exists!`);
  }
}
