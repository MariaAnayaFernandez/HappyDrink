
//*************** INICIO *****************

//Arrays

    const menuClasicos =[ '(1) Gin Old Fashion ', ' (2) Aperol Spritz ', ' (3) Cherry Baby ', '(4) Espresso Martini ', '(5) Fresh Mint ', '(6) Grapefruit Fizz '];

    const menuEpecialidades =['(1) Garibaldi', '(2) Blue Lady', '(3) Apricot Sunrise', '(4) Watermelon Dream', '(5) Tropical Blackberry', '(6) Singapore Sling'];

    const menuTemporada =['(1) Little Spring', ' (2)Club Floral', '(3) Purple Martini', '(4) Cosmo Valentine', '(5) Gin Wild Berry', '(6) Purple Horizon'];

//Constructores y métodos

function Cocteles(nombre, precio, menu, ingredientes) {
    this.nombre = nombre;
    this.precio = precio;
    this.menu = menu;
    this.ingredientes = ingredientes;
    this.mostrarPrecio = function(){alert ("El precio de " + this.nombre +" es: " + this.precio + "mnx" )}
    
}


//Objetos

const  coctel1 = new Cocteles(menuClasicos[0], 75, "clasicos", "Gin, Sugar Syrup, Angostura Bitters y Orange Bitters");
const  coctel2 = new Cocteles(menuClasicos[1], 75, "clasicos", "Proseco, Aperol, Soda");
const  coctel3 = new Cocteles(menuClasicos[2], 75, "clasicos", "Gin, Amaro, Licor de Cereza, Jugo de Limón");
const  coctel4 = new Cocteles(menuClasicos[3], 75, "clasicos", "Vodka, Licor de Café, Freshly Brewed Espresso, Jarabe de Azúcar");
const  coctel5 = new Cocteles(menuClasicos[4], 75, "clasicos", "Gin, Jugo de limón, Hojas de Menta, Agua Mineral");
const  coctel6 = new Cocteles(menuClasicos[5], 75, "clasicos", "Gin, Jugo de Toronja, Agua Tónica, Jarabe de Romero");
const  coctel7 = new Cocteles(menuEpecialidades[0], 80, "especialidades", "Gin, Camparim jugo de naranja");
const  coctel8 = new Cocteles(menuEpecialidades[1], 80, "especialidades", "Gin, Curacao, Juego de Lima, Huevo");
const  coctel9 = new Cocteles(menuEpecialidades[2], 80, "especialidades", "Gin, Juego de Limón, Naranja, Apricot");
const  coctel10 = new Cocteles(menuEpecialidades[3], 80, "especialidades", "Gin, Champari, Juego de Lima, Sandía");
const  coctel11 = new Cocteles(menuEpecialidades[4], 80, "especialidades", "Gin, Chambord, Juego de Piña, Juego de Lima, Bkackberries");
const  coctel12= new Cocteles(menuEpecialidades[5], 80, "especialidades", "Gin, Licor de Cereza, Jugo de Piña, Jugo de Limón, Granadina, D.O.M Bénédictine");
const  coctel13= new Cocteles(menuTemporada[0], 85, "temporada", "Gin, Limoncelo, Crema de Coco, Jugo de Limón, Lavanda.");
const  coctel14= new Cocteles(menuTemporada[0], 85, "temporada", "Gin, Creama de Violetas, Jugo de Lima, Jarabe de Lavanda, Gin, Vermouth.");
const  coctel15= new Cocteles(menuTemporada[0], 85, "temporada", "Gin, Vermouth, Naranja.");
const  coctel16= new Cocteles(menuTemporada[0], 85, "temporada", "Gin, Chambord, Juego de Limón, Fresas.");
const  coctel17= new Cocteles(menuTemporada[0], 85, "temporada", "Gin, Juego de Limón, Limonada de Frutos Salvajes, Berries");
const  coctel18= new Cocteles(menuTemporada[0], 85, "temporada", "Gin, Jugo de Limón, Chambord, Black Gin, Huevo.");



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

}else alert ("Lo sentimos, Happy Drink sólo es para mayores de edad."); 

//Método






