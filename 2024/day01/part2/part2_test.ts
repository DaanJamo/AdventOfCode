import { assertEquals } from "@std/assert";
import solve from "./part2.ts";

Deno.test({
  name: "Similarity test",
  permissions: { read: true },
  fn: () => {
    assertEquals(solve("./2024/day01/part2/testCase.txt", true), 31);
  }
});
