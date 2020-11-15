function sudokuSolver(puzzle){
    var nonPossibilities = {},impossibleNumbers, emptySpaces =81;   
    while (emptySpaces > 0) {                                     //loop continues until all zero numbers filled 
          emptySpaces = 0;
    for(var vert = 0; vert < puzzle.length; vert++){        //to itirate the coloums
        for(var horz = 0; horz < puzzle.length; horz++){    //to itirate through rows
            if (puzzle[vert][horz] === 0) {                  // if any number in the puzzle equals to 0 
                nonPossibilities = {};                          // created array for non possible numbers for that place
                for(var i = 0; i < 9; i++) {                      //   loop for all 9 places in rows and then coloumns
                    if (puzzle[vert][i] > 0) {                                   //same way the coloumn will be checked 
                        nonPossibilities[puzzle[vert][i]] = true;                 // number will be added in that nonpossiblities array 
                    }
                    if (puzzle[i][horz] > 0) {                                   // the other row elemts will be checked and added to the nonpossibles
                        nonPossibilities[puzzle[i][horz]] = true;
                    }
                }
                for(var vertBox = Math.floor(vert / 3) * 3; vertBox < Math.floor(vert / 3) * 3 + 3; vertBox++){  // 3 times itirates
                    for(var horzBox = Math.floor(horz / 3) * 3; horzBox < Math.floor(horz / 3) * 3 + 3; horzBox++){   // 3 times itirates
                        if (puzzle[vertBox][horzBox]) {
                            nonPossibilities[puzzle[vertBox][horzBox]] = true;              // this is for checking the cell i.e 3 cross 3 grid
                        }
                    }
                }
                impossibleNumbers = Object.keys(nonPossibilities);                        // assigning the whole array keys to impposiblenumbers 
                if (impossibleNumbers.length === 8){                                        // only one possible number is available 
                    for(var i = 0; i < 10; i++) {
                        if (impossibleNumbers.indexOf(i.toString()) < 0) {  // it returns -1 to i only the number which is not there in nonpossible keys 
                            puzzle[vert][horz] = i;                                    // so the i is assined to the 0th number
                        }
                    } 
                }
                else {
                    emptySpaces++;                                                       // ittirated inside while loop to fill all the oth places
                }
            }
        }
    }
}
    return puzzle;
}
//-----------------------------------------------------------------------given unsolved grid-------------------------
var puzzle = [
    [5, 3, 0, 0, 7, 0, 0, 0, 0],
    [6, 0, 0, 1, 9, 5, 0, 0, 0],
    [0, 9, 8, 0, 0, 0, 0, 6, 0],
    [8, 0, 0, 0, 6, 0, 0, 0, 3],
    [4, 0, 0, 8, 0, 3, 0, 0, 1],
    [7, 0, 0, 0, 2, 0, 0, 0, 6],
    [0, 6, 0, 0, 0, 0, 2, 8, 0],
    [0, 0, 0, 4, 1, 9, 0, 0, 5],
    [0, 0, 0, 0, 8, 0, 0, 7, 9]];

console.log(sudokuSolver(puzzle));
console.log('fully solved sudoko');

// index               0         1          2       3        4        5          6        7

/// nonpossible = { 1:true , 3: true , 4 : true , 5: true , 6:true, 7:true, 8: true , 9: true }