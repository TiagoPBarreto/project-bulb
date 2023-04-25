const turnOnOff = document.getElementById('turnOnOff');
const lamp = document.getElementById('lamp');

function isLampBroken(){
    return lamp.src.indexOf('quebrada') > -1
}

function lampOn(){
    if(!isLampBroken()){
        lamp.src = './img/ligada.jpg';
    }
    
}
function lampOff(){
    if(!isLampBroken()){
        lamp.src = './img/desligada.jpg';
    }
    
}
function lampBroken(){
    lamp.src = './img/quebrada.jpg';
}

function lampOnOff(){
    if( turnOnOff.textContent == 'Ligar' ){
        lampOn();
        turnOnOff.textContent = 'Desligar';
    }
    else{
        lampOff();
        turnOnOff.textContent = 'Ligar';
    }
}

//Acender Lampada
turnOnOff.addEventListener('click', lampOnOff);

//Ligar ao passar o mouse
lamp.addEventListener('mouseover', lampOn);

lamp.addEventListener('mouseleave', lampOff);

//duplo click quebrar a lampada
lamp.addEventListener('dblclick', lampBroken)