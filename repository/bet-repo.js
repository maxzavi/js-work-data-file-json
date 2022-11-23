import { bets } from "../database/db-bet.js";

export const betFindById = (id) => {
    return bets.find(element => element.id == id);
};