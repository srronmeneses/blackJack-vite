/**
 *
 * @param {Number} puntosAcontar Puntos totales del jugador
 * @param {Number} valorCarta Valor de la carta asignada al jugar
 * @param {HTMLElement} puntosHTML Elemento HTML que mostrara el total de los puntos
 * @returns {HTMLElement} Elemento HTML inserta los puntos totales
 */
export const contarPuntos = (puntosAcontar, valorCarta, puntosHTML) => {
   if (!valorCarta) throw new Error('valorCarta necesario para el TOTAL de puntos');
   if (!puntosHTML)
      throw new Error('elemento HTML necesario para mostrar TOTAL de puntos');
   let total = puntosAcontar + valorCarta;
   return (puntosHTML.innerText = total);
};
