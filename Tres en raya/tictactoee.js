let tablero = document.getElementsByClassName("casilla");

let body = document.getElementsByTagName("body")[0];
body.addEventListener("load", CuentaAtras());

let contador1 = 0;
let contador2 = 0;
let contador3 = 0;

var tiempo = 10;

let turno = true;

let texto, texto2, vista, guion, p, posicion, p2;
posicion = document.getElementsByClassName("turnos")[0];
vista = document.getElementsByClassName("contenedorcontadores")[0];

p2 = document.createElement("p");
p2.textContent = "Turno 0";
p2.style.color = "green";
p2.style.fontSize = "20px";
p2.style.fontfamily = "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif";

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
/**
 * Función solo para el contador que se inicializa con el evento onload y sirve para cuadno llegue a 0 cambiar el turno
 */
function CuentaAtras() {
    document.getElementById('countdown').innerHTML = tiempo

    if (tiempo == 0) {
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
        tiempo = 10;
        setTimeout("CuentaAtras()", 1000);
    } else {
        tiempo -= 1;
        setTimeout("CuentaAtras()", 1000);
    }
}
/**
 * @param numero
 * Funcion que pone la ficha en la posicion indicada, dependiendo del turno hace una cosa y otra, restablece la cuenta atras de los segundos
 * y cambia el texto que dice el turno, el contador3 sirve para comprobar cuando hay empate, cada vez se comprueba si hay ganador
 */
function ponerFicha(numero) {
    if (!turno) {
        p = document.createElement("p");
        p.textContent = 'X';
        tablero[numero].appendChild(p);
        Ganador();
        tiempo = 10;
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
        Ganador();
        tiempo = 10;
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
        tiempo = 1000;
    }
}
/**
 * Dependiendo del turno se comprueba si hay ganador, recorre todo el tablero y si hay una X o una O se mete la posicion en un array actual, luego
 * en otro for se comprueba si ese "actual" es igual q alguno de la combinacionGanadora, si es asi hay ganador, sale el alert, se suma 1 al contador de
 * marcadores, le pintamos la linea ganadora, ocultamos el tiempo y lo ponemos a 1000 para que no haga nada mas hasta que le den al botón "Nueva partida",
 * quitamos el atributo "onclick" a las casillas vacias para no poder seguir poniendo fichas despues de dar el ganador  
 */

function Ganador() {
    if (!turno) {
        let actual1 = [];
        for (let i = 0; i < tablero.length; i++) {
            if (tablero[i].innerHTML == '<p>X</p>') {
                actual1.push(i);
            }
        }
        for (let i = 0; i < combinacionGanadora.length; i++) {
            if (actual1.includes(combinacionGanadora[i][0]) && actual1.includes(combinacionGanadora[i][1]) && actual1.includes(combinacionGanadora[i][2])) {
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
                tiempo = 1000;
                alert(`Dale al boton "Nueva Partida" para comenzar una nueva partida`);
                document.getElementById('countdown').style.color = "rgb(225, 214, 214)";
            }
        }

    } else {
        let actual2 = [];
        for (let i = 0; i < tablero.length; i++) {
            if (tablero[i].innerHTML == '<p>O</p>') {
                actual2.push(i);
            }
        }
        for (let i = 0; i < combinacionGanadora.length; i++) {
            if (actual2.includes(combinacionGanadora[i][0]) && actual2.includes(combinacionGanadora[i][1]) && actual2.includes(combinacionGanadora[i][2])) {
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
                tiempo = 1000;
                alert(`Dale al boton "Nueva Partida" para comenzar una nueva partida`);
            }
        }
    }
}
/**
 * Funcion la cual se activa cuando pulsan el boton "Nueva Partida": reinicia la cuenta atrás a 10, compara contadores para ver quien sumó un punto
 * y así ponerle un color diferente cuando uno va ganando, empatando o perdiendo. Recorre el tablero y comprueba lo que hay dentro, para pintarlo de blanco
 * y que desaparezcan las X y O, por último vuelve a ponerle el atributo onclick a cada casilla.
 */
function resetear() {
    contador3 = 0;
    document.getElementById('countdown').style.color = "black";
    tiempo = 10;
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

