//Array vacío

const bebidasEnCuenta = []



//Query Elementos

const cardConteinerCla = document.querySelector("#drinksClasicos")

const cardConteinerEs = document.querySelector("#drinksEspeciales")

const cardConteinerTemp = document.querySelector("#drinksTemporada")

const renglonNombre = document.querySelector('#renglonNombre')

const renglonPrecio = document.querySelector('#renglonPrecio')

const renglonCantidad = document.querySelector('#renglonCantidad')



//Funciones


const mandarACuenta = (e) => {
    const nombreCoctelElegido= (e.target.closest('.col').getAttribute('nombre'))
    const coctelElegido = allDrinks.find((coctel) => coctel.nombre == nombreCoctelElegido)
    localStorage.setItem(coctelElegido)
    renglonNombre.textContent = coctelElegido.nombre
    renglonPrecio.textContent = `$${coctelElegido.precio}`
    renglonCantidad.textContent = 1
    
}





const menuClasicosCard = () => {
    drinksClasicos.forEach((coctel) => {
        let nuevaCardClas = document.createElement('div')
        nuevaCardClas.classList.add('col')
        nuevaCardClas.setAttribute('nombre', coctel.nombre)
        nuevaCardClas.innerHTML = `    
        <div class="menu-div">
        <img src=${coctel.img} class="card-img-top" alt="Gin Old Fashion">
        <div class="card-body">
          <h5 class="card-title titulo-tarjeta"> ${coctel.nombre} </h5>
          <p class="card-text">${coctel.ingredientes}</p>
          <div class="ordenar">
            <p class="cantidad">$${coctel.precio}.00</p>
            <label class="cantidad">Cantidad:</label>
            <input class="inp-ordenar" type=number min="1" max="20">
            <button class="btn-ordenar">Ordenar</button>
          </div>
        </div>
      </div>
        
  `
        cardConteinerCla.append(nuevaCardClas)

    })
}


const menuEspecialesCard = () =>{

    drinksEspeciales.forEach((coctel) => {
        let nuevaCardEs = document.createElement('div')
        nuevaCardEs.classList.add('col')
        nuevaCardEs.setAttribute('nombre', coctel.nombre)
        nuevaCardEs.innerHTML = `    
        <div class="menu-div">
        <img src=${coctel.img} class="card-img-top" alt="Gin Old Fashion">
        <div class="card-body">
          <h5 class="card-title titulo-tarjeta"> ${coctel.nombre} </h5>
          <p class="card-text">${coctel.ingredientes}</p>
          <div class="ordenar">
            <p class="cantidad">$${coctel.precio}.00</p>
            <label class="cantidad">Cantidad:</label>
            <input class="inp-ordenar" type=number min="1" max="20">
            <button class="btn-ordenar">Ordenar</button>
          </div>
        </div>
      </div>
        
  `
    cardConteinerEs.append(nuevaCardEs);
    })
}

const menuTemporadaCard = () =>{
    drinksTemporada.forEach((coctel) => {
        let nuevaCardTemp = document.createElement('div')
        nuevaCardTemp.classList.add('col')
        nuevaCardTemp.setAttribute('nombre', coctel.nombre)
        nuevaCardTemp.innerHTML = `    
        <div class="menu-div">
        <img src=${coctel.img} class="card-img-top" alt="Gin Old Fashion">
        <div class="card-body">
          <h5 class="card-title titulo-tarjeta"> ${coctel.nombre} </h5>
          <p class="card-text">${coctel.ingredientes}</p>
          <div class="ordenar">
            <p class="cantidad">$${coctel.precio}.00</p>
            <label class="cantidad">Cantidad:</label>
            <input class="inp-ordenar" type=number min="1" max="20">
            <button class="btn-ordenar">Ordenar</button>
          </div>
        </div>
      </div>
        
  `
    cardConteinerTemp.append(nuevaCardTemp);
        
    })

    /*const cantidadElegida = document.querySelectorAll('.inp-prdenar')
    cantidadElegida.forEach((value)=>{
        value.addEventListener('input', cantidadDrinks)
    })*/
    
    const ordenarButton = document.querySelectorAll('.btn-ordenar')
    ordenarButton.forEach((button) =>{
    button.addEventListener('click', mandarACuenta)
})
    
}


//Ejecuciones

menuClasicosCard();

menuEspecialesCard();

menuTemporadaCard();


//*************** Código de tareas anteriores ***************** 



/*

//Funciones:

function casosClasicos(){
    let clasicos = prompt ("Los Happy Drinks Clásicos son: " + (menuClasicos) + "Digita el número que deseas ordenar")
switch (clasicos){ //menú de casos
    case "1":
        alert ("Ha pedido un " + menuClasicos[0]);
        break;
    case "2":
        alert ("Ha pedido un " + menuClasicos[1]);
        break;
    case "3":
        alert ("Ha pedido un " + menuClasicos[2]);
        break;
    case "4":
        alert ("Ha pedido un " + menuClasicos[3]);
        break;
    case "5":
        alert ("Ha pedido un " + menuClasicos[4]);
        break;
    case "6":
        alert ("Ha pedido un " + menuClasicos[5]);
        break;
    default:
        alert ("Valor incorrecto")
    }
};

function casosEspecialidades(){
    let especialidades = prompt ("Los Happy Drinks de la casa son: " + (menuEpecialidades) + "Digita el número que deseas ordenar")
switch (especialidades){ //menú de casos
    case "1":
        alert ("Ha pedido un " + menuEpecialidades[0]);
        break;
    case "2":
        alert ("Ha pedido un " + menuEpecialidades[1]);
        break;
    case "3":
        alert ("Ha pedido un " + menuEpecialidades[2]);
        break;
    case "4":
        alert ("Ha pedido un " + menuEpecialidades[3]);
        break;
    case "5":
        alert ("Ha pedido un " + menuEpecialidades[4]);
        break;
    case "6":
        alert ("Ha pedido un " + menuEpecialidades[5]);
        break;
    default:
        alert ("Valor incorrecto")
    }
};

function casosDeTemporada(){
    let temporada = prompt ("Los Happy Drinks de la casa son: " + (menuTemporada) + "Digita el número que deseas ordenar")
switch (temporada){ //menú de casos
    case "1":
        alert ("Ha pedido un " + menuTemporada[0]);
        break;
    case "2":
        alert ("Ha pedido un " + menuTemporada[1]);
        break;
    case "3":
        alert ("Ha pedido un " + menuTemporada[2]);
        break;
    case "4":
        alert ("Ha pedido un " + menuTemporada[3]);
        break;
    case "5":
        alert ("Ha pedido un " + menuTemporada[4]);
        break;
    case "6":
        alert ("Ha pedido un " + menuTemporada[5]);
        break;
    default:
        alert ("Valor incorrecto")
    }
};

function menuPrincipal(){
    let tipomenu = prompt ("Selecciona una opción de menú: 'Clásicos', 'Especialidades', o 'De temporada'").toLowerCase();
    if(tipomenu == 'clasicos'){
         casosClasicos();
     } else if (tipomenu == 'especialidades'){
         casosEspecialidades();
     } else if (tipomenu == 'de temporada'){
         casosDeTemporada();
     } else{alert("Valor incorrecto")}
}

function agregarBebidas(){
    let repetirMenu = prompt ("¿Desea otro Happy Drink? 1-sí , 2-no").toLowerCase();
    if (repetirMenu == '1'){
        menuPrincipal();
    } else if (repetirMenu == '2'){
        alert ("¡Gracias por su compra!")
    } else {
        alert ("Valor incorrecto")
    }
};


//Ingreso restringido a mayores de edad:

let edad = prompt("Digita tu edad");

if (edad >= 18) {
    alert ("¡Bienvenid@ a Happy Drink!")

    menuPrincipal();

    agregarBebidas();

    alert ('Algunos de nuestros precios')
    coctel1.mostrarPrecio()
    coctel9.mostrarPrecio()
    coctel15.mostrarPrecio()

}else alert ("Lo sentimos, Happy Drink sólo es para mayores de edad."); */


