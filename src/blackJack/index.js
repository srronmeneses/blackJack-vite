// * A esto se llama una exportacion indipendiente ya que trae
// * una funcion espesifica
// import { nombre } from './usecases/crear-deck';
// * tambien se puede porner un alias a la funcion importada con 'as nuevoNombre'
// import { nombre as nuevoNombre } from './usecases/crear-deck';
// * Importar una funcion que fue exportada por defecto
// * se le puede llamar por el mismo nombre o cambiar de nombre
// import { crearDeck } from './usecases/crear-deck';
// import { pedirCarta } from './usecases/pedir-carta';
// import { valorCarta } from './usecases/valor-carta';
// * A esto se conoce como archivos de barril por que tomamos todos los export
// * del archivo index USECASES
import {
   crearDeck,
   pedirCarta,
   valorCarta,
   turnoComputadora,
   crearCartaHTML,
   contarPuntos,
   desactivarBtn,
   activarBtn,
} from './usecases';

/**
 * 2C = Two of Clubs
 * 2D = Two of Diamonds
 * 2H = Two of Hearts
 * 2S = Two of Spades
 */

let deck = [];

const tipos = ['C', 'D', 'H', 'S'],
   especiales = ['A', 'J', 'Q', 'K'];

let puntosJugador = 0;

// Referencias del HTML
const btnNuevo = document.querySelector('#btnNuevo'),
   divCartasJugador = document.querySelector('#jugador-cartas'),
   divCartasComputadora = document.querySelector('#computadora-cartas'),
   puntosHTML = document.querySelectorAll('small');

deck = crearDeck(tipos, especiales);

// Eventos
btnPedir.addEventListener('click', () => {
   const carta = pedirCarta(deck);
   puntosJugador = contarPuntos(puntosJugador, valorCarta(carta), puntosHTML[0]);
   const imgCarta = crearCartaHTML(carta);
   divCartasJugador.append(imgCarta);

   if (puntosJugador > 21) {
      console.warn('Lo siento mucho, perdiste');
      desactivarBtn();
      turnoComputadora(puntosJugador, puntosHTML[1], divCartasComputadora, deck);
   } else if (puntosJugador === 21) {
      console.warn('21, genial!');
      desactivarBtn();
      turnoComputadora(puntosJugador, puntosHTML[1], divCartasComputadora, deck);
   }
});

btnDetener.addEventListener('click', () => {
   desactivarBtn();
   turnoComputadora(puntosJugador, puntosHTML[1], divCartasComputadora, deck);
});

btnNuevo.addEventListener('click', () => {
   // console.clear();
   deck = [];
   deck = crearDeck(tipos, especiales);
   puntosJugador = 0;
   puntosHTML[0].innerText = 0;
   puntosHTML[1].innerText = 0;
   divCartasComputadora.innerHTML = '';
   divCartasJugador.innerHTML = '';
   activarBtn();
});
