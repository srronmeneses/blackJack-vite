/**
 *
 * @param {Number} puntosComp Puntos de la computadora
 * @param {Number} puntosMinimos Puntos del jugador
 */
export const mostrarGanador = (puntosComp, puntosMinimos) => {
   setTimeout(() => {
      if (puntosComp === puntosMinimos) {
         alert('Nadie gana :(');
      } else if (puntosMinimos > 21) {
         alert('Computadora gana');
      } else if (puntosComp > 21) {
         alert('Jugador Gana');
      } else {
         alert('Computadora Gana');
      }
   }, 100);
};
