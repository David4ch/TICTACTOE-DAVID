let tablero = document.getElementsByClassName("casilla");

let combinacionGanadora = [
    [3, 4, 5],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]];

function GANAR_X() {
    let actual = [];
    for (let i = 0; i < tablero.length; i++) {
        if (tablero[i].innerHTML == '<p>X</p>') {
            actual.push(i);
        }
    }
    for (let i = 0; i < combinacionGanadora.length; i++) {
        if (actual.includes(combinacionGanadora[i][0]) && actual.includes(combinacionGanadora[i][1]) && actual.includes(combinacionGanadora[i][2])) {
            alert('GANAN LAS X');
            for (let i = 0; i < tablero.length; i++) {
                if (tablero[i].innerHTML == '<p>X</p>') {
                    tablero[i].style.backgroundColor = 'lightgreen';
                }
            }
        }
    }

}

function GANAR_O() {
    let actual = [];
    for (let i = 0; i < tablero.length; i++) {
        if (tablero[i].innerHTML == '<p>O</p>') {
            actual.push(i);
        }
    }
    for (let i = 0; i < combinacionGanadora.length; i++) {
        if (actual.includes(combinacionGanadora[i][0]) && actual.includes(combinacionGanadora[i][1]) && actual.includes(combinacionGanadora[i][2])) {
            alert('GANAN LAS O');
            for (let i = 0; i < tablero.length; i++) {
                if (tablero[i].innerHTML == '<p>O</p>') {
                    tablero[i].style.backgroundColor = 'red';
                }
            }
        }
    }
}

for (let i = 0; i < tablero.length; i++) {
    tablero[i].setAttribute("onclick", `ponerFicha(${i})`);
}

let turno = true;
let p;
function ponerFicha(numero) {
    if (!turno) {
        p = document.createElement("p");
        p.textContent = 'X';
        tablero[numero].appendChild(p);
        GANAR_X();
    } else {
        p = document.createElement("p");
        p.textContent = 'O';
        tablero[numero].appendChild(p);
        GANAR_O()
    }
    turno = !turno;
    tablero[numero].removeAttribute("onclick");
}
function resetear() {
    for (let i = 0; i < tablero.length; i++) {
        if (tablero[i].innerHTML == '<p>X</p>' || tablero[i].innerHTML == '<p>O</p>') {
            tablero[i].innerHTML = "";
            tablero[i].style.backgroundColor = 'white';
            for (let i = 0; i < tablero.length; i++) {
                tablero[i].setAttribute("onclick", `ponerFicha(${i})`);
            }
        }
    }
    for (let i = 0; i < tablero.length; i++) {
        tablero[i].setAttribute("onclick", `ponerFicha(${i})`);
    }
    ponerFicha();
}
/**
* Añadir contador de tiempo para cambiar turno si se agota el tiempo
 */
/**
 * Si hay ganador:
 * No poner mas fichas
 * Contador de puntuancion por equipo
 * Reinicio tablero para volver a jugar
 * Mostrar color linea ganadora
 */




