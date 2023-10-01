let y = 0;
let x = 0;

let colisionador

let personaje = document.getElementById('personaje');

function mover(event){

   
    if(event.key === 'd' || event.key === 'D'){
        x += 10;
        personaje.style.left = x + 'px';
        personaje.src = 'personaje/p-right.png'
    }
    if(event.key === 'a' || event.key === 'A'){
        x -= 10;
        personaje.style.left = x + 'px'
        personaje.src = 'personaje/p-left.png'
    }     
    if(event.key === 'w' || event.key === 'W'){
        y += 50;
        personaje.style.top = (-y) + 'px';
    }
    if(event.key === 's' || event.key === 'S'){
        y -= 50;
        personaje.style.top = (-y) + 'px';
    }
    //APARICIÓN DEL BLOQUE COLISIONADOR
    if(x == 150 || x ==400 || x == 750 || y <0){
        const colisionador = document.getElementById('bloque') 
        colisionador.innerHTML = '<img id="cajon" style="height: 100px; width: 100px; left= 150px" src="personaje/cajon.webp">'
       }
    
    //COLISIONES
    console.log(y)

    if(x ==510 && y == 0){//COLISIÓN IZQUIERDA - DERECHA
        x=450
        personaje.style.left = x + 'px';
        const colisionador = document.getElementById('bloque') 
        colisionador.innerHTML = '<img id="EXPLOSION" style="height: 100px; width: 100px; left= 150px" src="personaje/explosion.png">'
        if(y <0){
            x=510
            personaje.style.left = x + 'px';
        }
    }
    if(x==680 && y == 0){//COLISIÓN DERECHA - IZQUIERDA
        x=710
        personaje.style.left = x + 'px'
        const colisionador = document.getElementById('bloque') 
        colisionador.innerHTML = '<img id="EXPLOSION" style="height: 100px; width: 100px; left= 150px" src="personaje/explosion.png">'
        if(y <0){
            x=680
            personaje.style.left = x + 'px';
        }
    }

}

window.onkeydown = mover