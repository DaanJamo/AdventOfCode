import { assertEquals } from "@std/assert";
import solve from "./part1.ts";

Deno.test({
  name: "part1 test",
  permissions: { read: true },
  fn: () => {
    assertEquals(solve("./2024/day04/part1/testCase.txt", true), 18);
  }
});
