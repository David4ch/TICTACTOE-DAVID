/**Solo falta poner color a la linea ganadora */
let tablero = document.getElementsByClassName("casilla");
let contador1 = 0;
let contador2 = 0;

let texto, texto2, vista, guion, p;
let turno = true;
vista = document.getElementsByClassName("contenedorcontadores")[0];

texto = document.createElement("p");
texto.textContent = contador1;
texto.setAttribute("class", "marcador");
vista.appendChild(texto);

guion = document.createElement("p");
guion.textContent = "-";
guion.setAttribute("class", "marcador");
vista.appendChild(guion);

texto2 = document.createElement("p");
texto2.textContent = contador2;
texto2.setAttribute("class", "marcador");
vista.appendChild(texto2);

let combinacionGanadora = [
    [3, 4, 5],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]];

for (let i = 0; i < tablero.length; i++) {
    tablero[i].setAttribute("onclick", `ponerFicha(${i})`);
}
//-----------------------------------------------------------------------------------------------------------------------------------------------------
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
//-----------------------------------------------------------------------------------------------------------------------------------------------------
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
            contador1++;
            for (let k = 0; k < combinacionGanadora[i].length; k++) {
                tablero[combinacionGanadora[i][k]].style.backgroundColor = 'red';
            }
            for (let j = 0; j < tablero.length; j++) {
                if (tablero[j].innerHTML == '') {
                    tablero[j].removeAttribute("onclick");
                }
            }
            
            alert(`Dale al boton "Enviar" para comenzar una nueva partida`);
        }
    }
}
//-----------------------------------------------------------------------------------------------------------------------------------------------------
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
            contador2++;
            for (let k = 0; k < combinacionGanadora[i].length; k++) {
                tablero[combinacionGanadora[i][k]].style.backgroundColor = 'lightgreen';
            }
            for (let j = 0; j < tablero.length; j++) {
                if (tablero[j].innerHTML == '') {
                    tablero[j].removeAttribute("onclick");
                }
            }
            alert(`Dale al boton "Enviar" para comenzar una nueva partida`);
        }
    }
}
//-----------------------------------------------------------------------------------------------------------------------------------------------------
function resetear() {
    texto.textContent = contador1;
    texto2.textContent = contador2;
    if (contador1 > contador2) {
        texto.style.color = "green";
        texto2.style.color = "red";
    } else if (contador2 > contador1) {
        texto.style.color = "red";
        texto2.style.color = "green";
    } else {
        texto.style.color = "black";
        texto2.style.color = "black";
    }
    for (let i = 0; i < tablero.length; i++) {
        if (tablero[i].innerHTML == '<p>X</p>' || tablero[i].innerHTML == '<p>O</p>') {
            tablero[i].innerHTML = null;
            tablero[i].style.backgroundColor = 'white';
        }
    }
    for (let j = 0; j < tablero.length; j++) {
        tablero[j].setAttribute("onclick", `ponerFicha(${j})`);
    }
    ponerFicha(numero);
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




