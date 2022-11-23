import { bets } from "../database/db-bet.js";

console.log('Hi!!!!!');

const dbBets = bets;

dbBets.forEach(element => {
    console.log(element);
});