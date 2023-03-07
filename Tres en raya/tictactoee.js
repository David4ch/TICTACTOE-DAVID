let jugadorX = [];
let jugadorO = [];
let combinacionGanadora = [[3, 4, 5], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
let tablero = document.getElementsByClassName("casilla");

for (let i = 0; i < tablero.length; i++) {
    tablero[i].setAttribute("onclick", `ponerFicha(${i})`);
}

let turno = true;
let p;
//Faltar saber el div q selecciona el jugador
function ponerFicha(numero) {
    if (!turno) {
        //Crear elemento p
        p = document.createElement("p");
        p.textContent = 'X';
        jugadorX.push(tablero[numero]);
        tablero[numero].appendChild(p);
        ganador();
    } else {
        p = document.createElement("p");
        p.textContent = 'O';
        jugadorX.push(tablero[numero]);
        tablero[numero].appendChild(p);
        ganador();
    }
    turno = !turno;
    tablero[numero].removeAttribute("onclick");

    /**
     * Añadir contador de tiempo para cambiar turno si se agota el tiempo
     */


}
/**
 * Si hay ganador:
 * No poner mas fichas
 * Contador de puntuancion por equipo
 * Reinicio tablero para volver a jugar
 * Mostrar color linea ganadora
 */

function ganador() {
    for (let i = 0; i < combinacionGanadora.length; i++) {
        if (i<9) {
            alert("Ganan las X");
        } else if (i<5) {
            alert("Ganan las O");
        }
    }
}



