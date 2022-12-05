const btnPedir = document.querySelector('#btnPedir'),
   btnDetener = document.querySelector('#btnDetener');
export const desactivarBtn = () => {
   btnPedir.disabled = true;
   btnDetener.disabled = true;
};
export const activarBtn = () => {
   btnPedir.disabled = false;
   btnDetener.disabled = false;
};
