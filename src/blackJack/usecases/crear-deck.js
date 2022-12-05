// * importamos todos los metodos que underscore trajo mediante la instalacion de npm
import _ from 'underscore';

// * Esto es una exportacion individual, se pone export a la funcion o variable
// * que se desea exportar en este caso nombre
// export const nombre = 'ronald';

// !AGREGAMOS DOCUMENTACION SOBRE LA FUNCION CREARDECK
/**
 * Crea un nuevo deck
 * @param {Array<String>} tiposDeCarta Ejm: ['C', 'D', 'H', 'S']
 * @param {Array<String>} tiposEspeciales Ejm: ['A', 'J', 'Q', 'K']
 * @returns{Array<String>} Retorna un nuevo deck de cartas
 */
export const crearDeck = (tiposDeCarta, tiposEspeciales) => {
   console.clear();
   // !VALIDADORES A LOS DOS ARGUMENTOS QUE NECESITA LA FUNCION CREARDECK
   if (!tiposDeCarta || tiposDeCarta.length === 0)
      throw new Error(`tiposDeCarta es obligatorio como un arreglo de String`);
   if (!tiposEspeciales || tiposEspeciales.length === 0)
      throw new Error(`tiposEspeciales es obligatorio como un arreglo de String`);

   let deck = [];
   for (let i = 2; i <= 10; i++) {
      for (let tipo of tiposDeCarta) {
         deck.push(i + tipo);
      }
   }

   for (let tipo of tiposDeCarta) {
      for (let esp of tiposEspeciales) {
         deck.push(esp + tipo);
      }
   }
   deck = _.shuffle(deck);
   return deck;
};
// * Esta es una exportacion por defecto
// * Al importar se le puede poner cualquier nombre
// export default crearDeck;
