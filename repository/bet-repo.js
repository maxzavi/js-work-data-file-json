import { bets } from "../database/db-bet.js";

export const betFindById = (id) => {
    return bets.find(element => element.id == id);
};

export const usersAll = ()=>{
    const users =[];
    let userName='';
    let gol1=0;
    bets.forEach(bet=>{
        if (userName!=bet.Participante){
            if (userName!=''){
                users.push ({
                    userName:userName,
                    sumGoles1:gol1
                });                
            }
            /*
            users.push ({
                userName:bet.Participante,
                sumGoles1:gol1
            });*/
            userName=bet.Participante;
            gol1=0;
        }
        gol1+=bet.Goles1;
    });
    users.push ({
        userName:userName,
        sumGoles1:gol1
    });  
    return users;
}