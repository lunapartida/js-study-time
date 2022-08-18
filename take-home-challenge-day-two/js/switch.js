///***** Switch Statements *****///
///***** Switch Statements *****///
///***** Switch Statements *****///
/*
switch is a statement that evaluates a value or expressions
and the matches that value to many case clauses
more efficent that else if statements
if you do not break it will execute everything
*/

var grade = “A”
switch(grade){
    case “A”:
        console.log(“Very Good”);
        break;
    case “B”:
        console.log(“Good”);
        break;
    case “C”:
        console.log(“Meh”);
        break;
    case “D”:
       console.log(“WTF”);
        break;
    case “F”:
        console.log(“Very Good!!!“);
        window.alert(“yay!“)
         break;
    default:
        console.log(grade,“is not a letter grade”);
}