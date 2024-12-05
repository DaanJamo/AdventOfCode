import { assertEquals } from "@std/assert";
import solve from "./part2.ts";

Deno.test({
  name: "part2 test",
  permissions: { read: true },
  fn: () => {
    assertEquals(solve("./2024/day04/part2/testCase.txt", true), 9);
  }
});
