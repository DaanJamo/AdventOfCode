import { assertEquals } from "@std/assert";
import { parseWords, parseNumbers, parseTextFileWords, parseTextFileNumbers } from "./parse.ts";
import { sum, product } from "utils/array.ts";

Deno.test({
  name: "Sum test",
  fn: () => {
    assertEquals(sum([-6, 1, 2, 3]), 0);
  }
});

Deno.test({
  name: "Product test",
  fn: () => {
    assertEquals(product([-1, -1, 1, 2, 3]), 6);
  }
});

const words_actual = 
`The quick brown fox
 jumped over
 the lazy dog
`;

const words_expected = 
[["The", "quick", "brown", "fox"], 
["jumped", "over"], 
["the", "lazy", "dog"]];


const numbers_actual =
`1 23
 123  & 3
&4 321 and 1 e2
`;

const numbers_expected = [[1, 23], [123, 3], [4, 321, 1, 2]];

Deno.test({
  name: "Word parsing test",
  fn: () => {
    assertEquals(parseWords(words_actual), words_expected);
  }
});

Deno.test({
  name: "Word parsing from text file test",
  permissions: { read: true, write: true},
  fn: () => {
    Deno.writeTextFileSync("./Words.txt", words_actual);
    assertEquals(parseTextFileWords("./Words.txt"), words_expected);
    Deno.removeSync("./Words.txt")
  }
});

Deno.test({
  name: "Number parsing test",
  fn: () => {
    assertEquals(parseNumbers(numbers_actual), numbers_expected);
  }
});

Deno.test({
  name: "Number parsing from text file test",
  permissions: { read: true, write: true},
  fn: () => {
    Deno.writeTextFileSync("./Numbers.txt", numbers_actual);
    assertEquals(parseTextFileNumbers("./Numbers.txt"), numbers_expected);
    Deno.removeSync("./Numbers.txt");
  }
});
