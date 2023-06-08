function changeclas() {
    const elemento = document.querySelector('.id1');
    const elemento2 = document.querySelector('.id2');
    const elemento3 = document.querySelector('.id3');
    const elemento4 = document.querySelector('#id4');
    //const plasticeating = document.querySelector('#journey');
    const logoTri = document.querySelector('#logo');
    const mB30 = document.querySelector('.mB30');
    const img = document.querySelector('#img');
    const video = document.querySelector('#video');
    const pen_im = document.querySelector('#exit-pen-im-mobile');
    const salespartner = document.querySelector('#salespartner');
    const advancing = document.querySelector('#advancing');

    const anchoViewport = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    if(anchoViewport <= 1199){
        console.log("Entrando...");
        salespartner.classList.remove('margenBottom');
        salespartner.style.marginBottom = "-100px";
    }
    else{
        salespartner.style.marginBottom = "";
        salespartner.classList.add('margenBottom');
    }
    if (anchoViewport <= 984) {
        elemento.classList.remove('col-xs-10');
        elemento.classList.remove('col-md-5');
        elemento.classList.add('col-xs-12');
        elemento.classList.add('col-md-12');
        elemento.classList.add('width-100');

        elemento2.classList.remove('col-xs-10');
        elemento2.classList.remove('col-md-5');
        elemento2.classList.add('col-xs-12');
        elemento2.classList.add('col-md-12');
        elemento2.classList.add('width-100');

        elemento3.classList.add('width-100');
        elemento4.classList.add('width-100');
        //plasticeating.style.marginTop = "50px";
        logoTri.style.width = "65px";

        mB30.style.marginBottom = "15px";

        img.classList.remove('prelaright');
        video.classList.remove('prelaleft');

        pen_im.classList.remove('pen-im');
        
        salespartner.style.marginBottom = "";
        salespartner.classList.remove('margenBottom');

        advancing.classList.remove('width118');


    } else {
        elemento.classList.add('col-xs-10');
        elemento.classList.add('col-md-5');
        elemento.classList.remove('col-xs-12');
        elemento.classList.remove('col-md-12');
        elemento.classList.remove('width-100');

        elemento2.classList.add('col-xs-10');
        elemento2.classList.add('col-md-5');
        elemento2.classList.remove('col-xs-12');
        elemento2.classList.remove('col-md-12');
        elemento2.classList.remove('width-100');
        
        elemento3.classList.remove('width-100');
        elemento4.classList.remove('width-100');
        //plasticeating.style.marginTop = "150px";

        logoTri.style.width = "95px";

        mB30.style.marginBottom = "30px";

        img.classList.add('prelaright');
        video.classList.add('prelaleft');

        pen_im.classList.add('pen-im');

        salespartner.classList.add('margenBottom');
        advancing.classList.add('width118');
    }
    
}

// Ejecutar la función al cargar la página
//changeclas();

// Agregar un event listener para actualizar las clases cuando cambie el tamaño de la ventana
window.addEventListener('resize', changeclas);
