let turnOnOff = document.getElementById ('turnOnOff');
let lamp = document.getElementById ('lamp');

function lampquebre () {
  return lamp.src.indexOf ('quebrada') > -1
}

function lampOn () {
  if ( !lampquebre ()) {
  lamp.src = './ligada.jpg';
}
}

function lampOff () {
  if (!lampquebre ()) {
  lamp.src = './desligada.jpg';
}
}

function lampBroken () {
  lamp.src = './quebrada.jpg';
}

function lampOnOff () {
  if (turnOnOff.textContent == 'Ligar') {
  lampOn();
  turnOnOff.textContent = 'Desligar'; 
}

else{
  lampOff();
  turnOnOff.textContent = 'Ligar';
 }
}

turnOnOff.addEventListener ('click', lampOnOff);

lamp.addEventListener ('mouseover', lampOn);
lamp.addEventListener ('mouseleave', lampOff);
lamp.addEventListener ('dblclick', lampBroken);