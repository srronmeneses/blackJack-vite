// turno de la computadora
import {
   pedirCarta,
   valorCarta,
   crearCartaHTML,
   contarPuntos,
   mostrarGanador,
} from './';
/**
 *
 * @param {Number} puntosMinimos Puntos que la computadora necesita para ganar
 * @param {HTMLElement} puntosHTML Elementeo HTML para mostrar los puntos
 * @param {HTMLElement} divCartasComputadora Elemento HTML para mostrar cartas
 * @param {Array<string} deck Arreglo con cartas para asignar
 */
export const turnoComputadora = (
   puntosMinimos,
   puntosHTML,
   divCartasComputadora,
   deck = []
) => {
   // if (!puntosMinimos) throw new Error('Puntos minimos son necesarios');
   if (!puntosHTML) throw new Error('Argumento necesarios para mostrar los puntos');

   let puntosComp = 0;
   do {
      const carta = pedirCarta(deck);
      puntosComp = contarPuntos(puntosComp, valorCarta(carta), puntosHTML);
      const imgCarta = crearCartaHTML(carta);
      divCartasComputadora.append(imgCarta);
   } while (puntosComp < puntosMinimos && puntosMinimos <= 21);
   mostrarGanador(puntosComp, puntosMinimos);
};
