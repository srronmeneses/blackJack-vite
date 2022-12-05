/**
 * Muestra la img de la carte en el HTML
 * @param {String} carta Nombre de la carta para crear
 * @returns {HTMLImageElement} Elemento HTML
 */
export const crearCartaHTML = (carta) => {
   if (!carta) throw new Error('El nombre de la carta es requerido');
   const imgCarta = document.createElement('img');
   imgCarta.src = `assets/cartas/${carta}.png`; //3H, JD
   imgCarta.classList.add('carta');
   return imgCarta;
};
