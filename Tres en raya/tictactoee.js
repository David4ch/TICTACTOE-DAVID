/**Solo falta poner color a la linea ganadora */
let tablero = document.getElementsByClassName("casilla");

let body = document.getElementsByTagName("body")[0];
body.addEventListener("load", updateClock());

let contador1 = 0;
let contador2 = 0;
let contador3 = 0;

var totalTime = 10;

let turno = true;

let texto, texto2, vista, guion, p, posicion, p2;
posicion = document.getElementsByClassName("turnos")[0];
vista = document.getElementsByClassName("contenedorcontadores")[0];
p2 = document.createElement("p");

texto = document.createElement("p");
texto.textContent = contador1;
texto.style.height = "90px"
texto.setAttribute("class", "marcador");
vista.appendChild(texto);

guion = document.createElement("p");
guion.textContent = "-";
guion.style.height = "90px"
guion.setAttribute("class", "marcador");
vista.appendChild(guion);

texto2 = document.createElement("p");
texto2.textContent = contador2;
texto2.style.height = "90px"
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
function updateClock() {
    document.getElementById('countdown').innerHTML = totalTime

    if (totalTime == 0) {
        alert('Has tardado mucho tiempo, cambio de turno');
        turno = !turno;
        if (p2.textContent == "Turno O") {
            p2.textContent = "Turno X";
            p2.style.color = "red";
            p2.style.fontSize = "20px";
            p2.style.fontfamily = "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif";

        } else {
            p2.textContent = "Turno 0";
            p2.style.color = "green";
            p2.style.fontSize = "20px";
            p2.style.fontfamily = "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif";

        }
        totalTime = 10;
        setTimeout("updateClock()", 1000);
    } else {
        totalTime -= 1;
        setTimeout("updateClock()", 1000);
    }
}
//-----------------------------------------------------------------------------------------------------------------------------------------------------
function ponerFicha(numero) {

    if (!turno) {
        p = document.createElement("p");
        p.textContent = 'X';
        tablero[numero].appendChild(p);
        GANAR_X();
        totalTime = 10;
        p2.textContent = "Turno 0";
        p2.style.color = "green";
        p2.style.fontSize = "20px";
        p2.style.fontfamily = "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif";
        posicion.appendChild(p2);
        contador3++;
    } else {
        p = document.createElement("p");
        p.textContent = 'O';
        tablero[numero].appendChild(p);
        GANAR_O();
        totalTime = 10;
        p2.textContent = "Turno X";
        p2.style.color = "red";
        p2.style.fontSize = "20px";
        p2.style.fontfamily = "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif";
        posicion.appendChild(p2);
        contador3++;
    }
    turno = !turno;
    tablero[numero].removeAttribute("onclick");
    if (contador3 == 9) {
        alert(`¡Empate! Dale al botón "Nueva partida" para volver a jugar!`);
        document.getElementById('countdown').style.color = "rgb(225, 214, 214)";
        totalTime = -1;
    }
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
            document.getElementById('countdown').style.color = "rgb(225, 214, 214)";
            totalTime = -1;
            alert(`Dale al boton "Nueva Partida" para comenzar una nueva partida`);
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
            document.getElementById('countdown').style.color = "rgb(225, 214, 214)";
            totalTime = -1;
            alert(`Dale al boton "Nueva Partida" para comenzar una nueva partida`);
        }
    }
}
//-----------------------------------------------------------------------------------------------------------------------------------------------------
function resetear() {
    document.getElementById('countdown').style.color = "black";
    totalTime = 10;
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
            tablero[i].innerHTML = "";
            tablero[i].style.backgroundColor = 'white';
        }
    }
    for (let j = 0; j < tablero.length; j++) {
        tablero[j].setAttribute("onclick", `ponerFicha(${j})`);

    }
}
/**
* Añadir contador de tiempo para cambiar turno si se agota el tiempo
 * Si hay ganador:
 * No poner mas fichas
 * Contador de puntuancion por equipo
 * Reinicio tablero para volver a jugar
 * Mostrar color linea ganadora
 */

