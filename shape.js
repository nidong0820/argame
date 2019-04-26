function handleOrientation(event) {
    alert(1);
    
    var beta     = event.beta;
    var gamma    = event.gamma;
    var alpha    = event.alpha;
    let ins1 = document.getElementById("instruction");
    let ins2 = document.getElementById("instruction2");
    let ins3 = document.getElementById("instruction3");
    let shape1 = document.getElementById("shape");
    let shape2 = document.getElementById("shape2");
    let shape3 = document.getElementById("shape3");
    let found1 = false;
    let found2 = false;
    let found3 = false;
    
    //console.log(beta);
    
    if (10<alpha && alpha<60) {
        ins1.style.display = "none";
        shape1.style.display = "block";
        found1 = true;
    } else {
        found1 = false;
        if(!found2 && !found3) {
            ins1.style.display = "block";    
        } else {
            ins1.style.display = "none";    
        }
        
        shape1.style.display = "none";
    }
    
    if (100<alpha && alpha<160 && ) {
        ins2.style.display = "none";
        shape2.style.display = "block";
        found2 = true;
    } else {
        found2 = false;
        if(!found1 && !found3 ) {
            ins2.style.display = "block";
        } else {
            ins2.style.display = "none";
        }
        
        shape2.style.display = "none";
    }
    
    if (200<alpha && alpha<260) {
        ins3.style.display = "none";    
        shape3.style.display = "block";
        found3 = true;
    } else {
        found3 = false;
        if(!found1 && !found2 ) {
            ins3.style.display = "block";
        } else {
            ins3.style.display = "none";
        }
        shape3.style.display = "none";
    }
    
}





document.getElementById('shape').addEventListener('click', (event) => {
    document.getElementById('shape').classList.add('animateLarge');
    //debugger;
   doAction(); 
});
function doAction(){
    let shape = document.getElementById('shape-text');
    shape.innerHTML = "Inhale";
    
    setTimeout(() => {
        shape.innerHTML = "Exhale";
    }, 3000);
    setTimeout( () => {
        document.getElementById('shape').classList.remove('animateLarge');
    }, 6000);
}


window.addEventListener('deviceorientation', handleOrientation,true);


