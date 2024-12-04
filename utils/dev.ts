import { parseArgs } from "jsr:@std/cli/parse-args";
import "utils"

const date = new Date();
const flags = parseArgs(Deno.args, {
  alias: {
    year: "y",
    day: "d"
  },
  string: ["year", "day"],
  default: {
    year: date.getFullYear(),
    day: date.getDate()
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
  "Have fun solving",
  `AoC ${flags.year}`,
  `day ${flags.day}!`
);

// TODO: set up correct test output passing
const command = new Deno.Command(Deno.execPath(), {
  args: ["test", "-A", "--watch", `${flags.year}/${day}`
  ],
  stdin: "piped",
  stdout: "piped",
  });
command.spawn();
