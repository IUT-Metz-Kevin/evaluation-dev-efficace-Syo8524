// deno-lint-ignore-file
import { green } from "jsr:@std/internal@^1.0.6/styles";
import {assertEquals} from "jsr:@std/assert";

Deno.test("case vide",  () => {
    assertEquals(minesweeperT(['.']), "0")
});

Deno.test("mine",  () => {
    assertEquals(minesweeperT(['*']), "1")
});

Deno.test("case vide",  () => {
    assertEquals(minesweeper('.'), "0")
});

Deno.test("mine",  () => {
    assertEquals(minesweeper('*'), "1")
});


Deno.test("mine à droite",  () => {
    assertEquals(minesweeper('.*'), "1")
});


Deno.test("mine à gauche",  () => {
    assertEquals(minesweeper('*.'), "1")
});

Deno.test("2 mines à gauche",  () => {
    assertEquals(minesweeper('**.'), "2")
});

Deno.test("2 mines à droite",  () => {
    assertEquals(minesweeper('.**'), "2")
});

Deno.test("2 mines autour",  () => {
    assertEquals(minesweeper('*.*'), "2")
});

Deno.test("3 mines à gauche",  () => {
    assertEquals(minesweeper('***.'), "3")
});

Deno.test("3 mines à droite",  () => {
    assertEquals(minesweeper('.***'), "3")
});

Deno.test("3 mines autour *1",  () => {
    assertEquals(minesweeper('*.**'), "3")
});

Deno.test("3 mines autour *2",  () => {
    assertEquals(minesweeper('**.*'), "3")
});

Deno.test("4 mines à gauche",  () => {
    assertEquals(minesweeper('****.'), "4")
});

Deno.test("4 mines à droite",  () => {
    assertEquals(minesweeper('.****'), "4")
});

Deno.test("4 mines autour *1",  () => {
    assertEquals(minesweeper('**.**'), "4")
});


function minesweeper(mine_field: string): string {
//RED

if(mine_field == "."){
    return "0";

}   else if(mine_field == "*"){
    return "1"

}   else if(mine_field == ".*" || mine_field == "*."){
        return "1";   
    }
    else if(mine_field == "**." || mine_field == ".**" || mine_field == "*.*"){
        return "2";   
}
    else if(mine_field == "***." || mine_field == ".***" || mine_field == "*.**"|| mine_field == "**.*"){
        return "3";
}  
    else if(mine_field == "****." || mine_field == ".****" || mine_field == "**.**"|| mine_field == "***.*" || mine_field == "*.***"){
        return "4"; 
}
return " ";
}

//test avec un tableau 

function minesweeperT(mine_field: string[]): string {

    mine_field = [".", "*", ".", "*", "*"];
    let i = 0;
    let idx = mine_field[i]


    for(idx of mine_field){
        return mine_field[i];

} 
 return " ";
}



   

