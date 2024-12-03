import { assertEquals } from "@std/assert";
import solve from "./part1.ts";

Deno.test({
  name: "Distance test",
  permissions: { read: true },
  fn: () => {
    assertEquals(solve("./2024/day01/part1/testCase.txt", true), 11);
  }
});
