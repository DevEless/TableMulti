    let nombre = prompt("t'insere LA T'INSERE !!!!")
    let table  = ""
    for (let i = 1; i <= nombre; i++) {
    table += $[i];
    }
    table += "\n";
    //passage a la ligne//
    for (let i = 1; i <= nombre; i++) {
        table += $[i];
        for (let j = 1; i <= nombre; j++) 
        table += `${i*j}`
    }
    table += "\n";
