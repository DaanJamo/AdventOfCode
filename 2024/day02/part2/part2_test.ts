import { assertEquals } from "@std/assert";
import solve from "./part2.ts";

Deno.test({
  name: "Dampen safety test",
  permissions: { read: true },
  fn: () => {
    assertEquals(solve("./2024/day02/part2/testCase.txt", true), 4);
  }
});

Deno.test({
  name: "Dampen safety edge cases test",
  permissions: { read: true, write: true },
  fn: () => {
    Deno.writeTextFileSync("./2024/day02/part2/edgeCases.txt", 
      `2 1 2 3 4
       1 2 3 4 3
       1 7 8 9
       9 8 7 1
       54, 52, 53, 56, 57, 58
       82, 85, 87, 88, 91, 93, 97, 94`);
    assertEquals(solve("./2024/day02/part2/edgeCases.txt", true), 6);
    Deno.removeSync("./2024/day02/part2/edgeCases.txt");
  }
});

