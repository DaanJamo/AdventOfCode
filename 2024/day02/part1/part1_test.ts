import { assertEquals } from "@std/assert";
import solve from "./part1.ts";

Deno.test({
  name: "Level safety test",
  permissions: { read: true },
  fn: () => {
    assertEquals(solve("./2024/day02/part1/testCase.txt", true), 2);
  }
});
