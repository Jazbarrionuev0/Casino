
let tu_numero = undefined;
let tu_apuesta = undefined;

let tu_dinero = 100;

let dinero_iner = document.querySelector(".dineroIner");

dinero_iner.innerHTML = tu_dinero;


function remover(n1,n2,n3,n4,n5){
    n1.classList.remove("elegido");
    n2.classList.remove("elegido");
    n3.classList.remove("elegido");
    n4.classList.remove("elegido");
    n5.classList.remove("elegido");
}

let premio = document.querySelector(".premio")

let apuesta_100 = document.querySelector(".a100");
let apuesta_500 = document.querySelector(".a500");
let apuesta_1000 = document.querySelector(".a1000");

apuesta_100.addEventListener("click",apostar100);
apuesta_500.addEventListener("click",apostar500);
apuesta_1000.addEventListener("click",apostar1000);

function apostar100(){
    if(tu_dinero >= 100){
        tu_apuesta = 100;

        apuesta_500.classList.remove("elegido");
        apuesta_1000.classList.remove("elegido");
    
        apuesta_100.classList.add("elegido");
    }
}
function apostar500(){
    if(tu_dinero >= 500){
        tu_apuesta = 500;

        apuesta_100.classList.remove("elegido");
        apuesta_1000.classList.remove("elegido");
    
        apuesta_500.classList.add("elegido");
    }
}
function apostar1000(){
    if(tu_dinero >= 1000){
        tu_apuesta = 1000;

        apuesta_100.classList.remove("elegido");
        apuesta_500.classList.remove("elegido");
    
        apuesta_1000.classList.add("elegido");
    }    
}


let elegiste_1 = document.querySelector(".n1");
let elegiste_2 = document.querySelector(".n2");
let elegiste_3 = document.querySelector(".n3");
let elegiste_4 = document.querySelector(".n4");
let elegiste_5 = document.querySelector(".n5");
let elegiste_6 = document.querySelector(".n6");


elegiste_1.addEventListener("click",elegir1);
elegiste_2.addEventListener("click",elegir2);
elegiste_3.addEventListener("click",elegir3);
elegiste_4.addEventListener("click",elegir4);
elegiste_5.addEventListener("click",elegir5);
elegiste_6.addEventListener("click",elegir6);

let dado = document.querySelector(".dado");




function elegir1(){
    tu_numero = 1;
    remover(elegiste_2,elegiste_3,elegiste_4,elegiste_5,elegiste_6);

    elegiste_1.classList.add("elegido");
}
function elegir2(){
    tu_numero = 2;
    remover(elegiste_1,elegiste_3,elegiste_4,elegiste_5,elegiste_6);

    elegiste_2.classList.add("elegido");
}
function elegir3(){
    tu_numero = 3;
    remover(elegiste_1,elegiste_2,elegiste_4,elegiste_5,elegiste_6);

    elegiste_3.classList.add("elegido");
}
function elegir4(){
    tu_numero = 4;

    remover(elegiste_1,elegiste_2,elegiste_3,elegiste_5,elegiste_6);

    elegiste_4.classList.add("elegido");
}

function elegir5(){
    tu_numero = 5;

    remover(elegiste_1,elegiste_2,elegiste_3,elegiste_4,elegiste_6);

    elegiste_5.classList.add("elegido");
}
function elegir6(){
    tu_numero = 6;

    remover(elegiste_1,elegiste_2,elegiste_3,elegiste_4,elegiste_5);

    elegiste_6.classList.add("elegido");
}

dado.addEventListener("click",tirar_dados_function);

let resultado = document.querySelector(".resultado");

function tirar_dados_function(){

    if(tu_apuesta != undefined){

        if(tu_numero != undefined){


            let numero_random = Math.trunc(Math.random()*6 + 1);

            if(numero_random == 1){
                dado.src = "dado1.png";
            }else if(numero_random == 2){
                dado.src = "dado2.png";
            }else if(numero_random == 3){
                dado.src = "dado3.png";
            }else if(numero_random == 4){
                dado.src = "dado4.png";
            }else if(numero_random == 5){
                dado.src = "dado5.png";
            }else{
                dado.src = "dado6.png";
            }
            
            if(tu_numero == numero_random){
                resultado.innerHTML = "GANASTE!";
                if(tu_apuesta == 100){
                    premio.innerHTML = "+100";
                    tu_dinero += 100;
                }else if(tu_apuesta == 500){
                    premio.innerHTML = "+550";
                    tu_dinero += 550;
                }else{
                    premio.innerHTML = "+1100";
                    tu_dinero += 1100;
                }
                
            }else{
                resultado.innerHTML = "PERDISTE!";
                if(tu_apuesta == 100){
                    premio.innerHTML = "-100";
                    tu_dinero -= 100;
                }else if(tu_apuesta == 500){
                    premio.innerHTML = "-100";
                    tu_dinero -= 500;
                }else{
                    premio.innerHTML = "-1000";
                    tu_dinero -= 1000;
                }
            }
            dinero_iner.innerHTML = tu_dinero;
            tu_apuesta = undefined;
            apuesta_100.classList.remove("elegido");
            apuesta_500.classList.remove("elegido");
            apuesta_1000.classList.remove("elegido");

        }else{
            resultado.innerHTML = "NO HAZ SELECCIONADO NINGUN NUMERO AUN"
        }

    }else{
        resultado.innerHTML = "NO HAZ SELECCIONADO NINGUN MONTO PARA LA APUESTA"
    }
    

}