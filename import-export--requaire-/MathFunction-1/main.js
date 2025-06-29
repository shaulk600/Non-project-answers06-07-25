// זה הדרך הישנה 
// const a = require("./mathOps.js") // common js שיטת ה-

// דוגמא מינהלתית  לזה הוא
// const varName = require(locationName);

// הדוגמא היותר נפוצה לזה היא :
import {multiply as m , divide as d} from "./mathOps.js";

console.log( m(5,3) );
console.log( d(20,4) );