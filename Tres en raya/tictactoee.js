let jugadorX = [];
let jugadorO = [];
let combinacionGanadora = [
    [3, 4, 5],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

let turno = true;
let contador=0;

function ponerFicha() {
    let tablero, p;
        tablero = document.getElementsByClassName("casilla")[contador];
        p = document.createElement("p");
        if (!turno) {
            p.textContent = "X";
            turno = true;
            tablero.removeAttribute("onclick");
            jugadorX.push(tablero[contador]);
            ganador();
            contador++;
            
        } else {
            p.textContent = "O";
            turno = false;
            tablero.removeAttribute("onclick");
            jugadorO.push(tablero[ contador]);
            ganador();
            contador++;
        }
        tablero.appendChild(p);
    


}
function ganador() {
    for (let i = 0; i < combinacionGanadora.length; i++) {
        if (jugadorX.includes(combinacionGanadora[i][0]) && jugadorX.includes(combinacionGanadora[i][1]) && jugadorX.includes(combinacionGanadora[i][2])) {
            alert("Ganan las X");
        } else if (jugadorO.includes(combinacionGanadora[i][0]) && jugadorO.includes(combinacionGanadora[i][1]) && jugadorO.includes(combinacionGanadora[i][2])) {
            alert("Ganan las O");
        }
    }
}



