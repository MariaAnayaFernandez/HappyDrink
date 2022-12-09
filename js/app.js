
//Array 

let cantidad = []

let cuenta = []

//Query Elementos

const cardConteiner = document.getElementById("drinksCards")

const tablaCuenta = document.getElementById("table-cuenta")

const ordenar = document.querySelector(".orden-fianl")



//Funciones


ordenar.addEventListener('click', () =>{
    sweetAlert(  '¡Happy Drinks en preparación!',
    'En un momento los recibirás en tu mesa',)
    cuenta.length = 0
    actualizarCuenta()

})


const mandarACuenta = (e) => {
    const nombreCoctelElegido = (e.target.closest('.col').getAttribute('nombre'))
    const coctelElegido = allDrinks.find((coctel) => coctel.nombre == nombreCoctelElegido)
    const nuevoCoctelElegido ={
        name:(coctelElegido.nombre),
        price:(coctelElegido.precio),
        cantidad: 1
    }

    addDrinkCuenta(nuevoCoctelElegido)
}

function addDrinkCuenta(nuevoCoctelElegido){

    const inputCantidad=tablaCuenta.getElementsByClassName('input-cantidad')
    for(let i =0; i<cuenta.length; i++){
        if(cuenta[i].name.trim() === nuevoCoctelElegido.name.trim()){
            cuenta[i].cantidad ++;
            const inputValue = inputCantidad[i]
            inputValue.value++
            totalCuenta()
            return null;
        }
    }
    cuenta.push(nuevoCoctelElegido)
   
    //localStorage.setItem('cuenta', JSON.stringify(cuenta))
    actualizarCuenta()
}


function actualizarCuenta () {
    tablaCuenta.innerHTML= `                            
    <thead>
    <tr>
      <th scope="col">Drink</th>
      <th scope="col">Precio</th>
      <th scope="col">Cantidad</th>
    </tr>
  </thead>
  `;

    cuenta.forEach((drink) => {

        let actualizarTabla = document.createElement('tbody')
        actualizarTabla.classList.add('tableBody')
        actualizarTabla.innerHTML = `
                <tr class=tablaContenido>
                    <td class="nameCuenta">${drink.name}</td>
                    <td>$${drink.price}</td>
                    <td>
                        <input type="number" min="1" value=${drink.cantidad} class="input-cantidad">
                        <button class="w3-button delete">X</button>
                    </td>
                </tr>
                
        `
        tablaCuenta.append(actualizarTabla)

        actualizarTabla.querySelector(".delete").addEventListener('click', eliminarDrinkCuenta)
        actualizarTabla.querySelector(".input-cantidad").addEventListener('change', addCantidad)
    })
    
    totalCuenta()
}

function totalCuenta(){
    let total = 0;
    const totalDrinks = document.querySelector(".total-cuenta")
    cuenta.forEach((drink) => {
        total = total + (drink.price*drink.cantidad)
    })
    totalDrinks.innerHTML = `Total $${total}`
    addLocalStorage()
    sumar()
}
    
function eliminarDrinkCuenta(e){
    const buttonDelete = e.target
    const actualizarTabla = buttonDelete.closest(".tableBody")
    const name = actualizarTabla.querySelector('.nameCuenta').textContent;
    for(let i=0; i < cuenta.length ; i++){
  
      if(cuenta[i].name.trim() === name.trim()){
        cuenta.splice(i, 1)
      }
    }
    actualizarTabla.remove()
    totalCuenta()
    
    }

function addCantidad(e){
    const sumaDrink = e.target
    const actualizarTabla = sumaDrink.closest(".tableBody")
    const name = actualizarTabla.querySelector('.nameCuenta').textContent
    cuenta.forEach(drink => {
        if (drink.name.trim() === name){
            sumaDrink.value < 1 ? (sumaDrink.value = 1) : sumaDrink.value;
            drink.cantidad = sumaDrink.value;
            totalCuenta()
        }
    })
}



function sumar()
{
  const total = document.querySelector(".contador");
  let subtotal = 0;
  [ ...document.getElementsByClassName( "input-cantidad" ) ].forEach( function ( element ) {
    if(element.value !== '') {
      subtotal += parseFloat(element.value);
    }
  });
  total.value = subtotal;
  total.innerText = total.value
}

//Cards Menu

const menu = () =>{
    allDrinks.forEach((coctel) => {
        let nuevaCard = document.createElement('div')
        nuevaCard.classList.add('col')
        nuevaCard.setAttribute('nombre', coctel.nombre)
        nuevaCard.innerHTML = `    
        <div class="menu-div">
        <img src=${coctel.img} class="card-img-top" alt="Gin Old Fashion">
        <div class="card-body">
          <h5 class="card-title titulo-tarjeta"> ${coctel.nombre} </h5>
          <p class="card-text">${coctel.ingredientes}</p>
          <div class="ordenar">
            <p class="cantidad">$${coctel.precio}.00</p>
            <button id="${coctel.btnID}" class="btn-ordenar">Ordenar</button>
          </div>
        </div>
      </div>
        
  `
        cardConteiner.append(nuevaCard)

    })


    const ordenarButton = document.querySelectorAll(".btn-ordenar")
    ordenarButton.forEach((button) =>{
    button.addEventListener('click', mandarACuenta)
    })
}

function addLocalStorage(){
    localStorage.setItem('cuenta', JSON.stringify(cuenta))
}

window.onload = function(){
    const storage = JSON.parse(localStorage.getItem('cuenta'));
    if (storage){
        cuenta = storage;
        actualizarCuenta()
    }
}




//Ejecuciones

menu();

