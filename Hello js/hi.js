const lorenzo = 1;
const sarah = 28;
const vincenzo = 36;
const marcel = 22;
const davide = 28;
const vito = 62;
const mina = 59;
const gerry = 53;
const martina = 50;


let ageCalculator = (age) => {
    let difference = age - lorenzo;
    console.log(`Quando Lorenzo avrà ${age} anni, voi avrete:
    Sarah - ${sarah + difference}
    Vincenzo - ${vincenzo + difference}
    Zio Marcel - ${marcel + difference}
    Zio Davide - ${davide + difference}
    Nonno Vito - ${vito + difference}
    Nonna Mina - ${mina + difference}
    Nonno Gerry - ${gerry + difference}
    Nonna Martina - ${martina + difference}
    `);
}


ageCalculator(22);
