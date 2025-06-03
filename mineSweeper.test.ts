import {assertEquals} from "jsr:@std/assert";

Deno.test("case vide",  () => {
    assertEquals(minesweeper('.'), "0")
});

function minesweeper(mine_field: string): string {
   return "";
}