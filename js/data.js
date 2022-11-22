//Arrays 



const menuClasicos =[ 'Gin Old Fashion', 'Aperol Spritz', 'Cherry Baby', 'Espresso Martini', 'Fresh Mint', 'Grapefruit Fizz'];

const menuEpecialidades =['Garibaldi', 'Blue Lady', 'Apricot Sunrise', 'Watermelon Dream', 'Tropical Blackberry', 'Singapore Sling'];

const menuTemporada =['Little Spring', 'Club Floral', 'Purple Martini', 'Cosmo Valentine', 'Gin Wild Berry', 'Purple Horizon'];

//Constructores y métodos

class Clasicos  {
    constructor (nombre, precio, menu, ingredientes,img, dataId){
        this.nombre = nombre;
        this.precio = precio;
        this.menu = menu;
        this.ingredientes = ingredientes;
        this.img = img;
        this.dataId=dataId;

}

}

class Especiales  {
    constructor (nombre, precio, menu, ingredientes,img, dataId){
        this.nombre = nombre;
        this.precio = precio;
        this.menu = menu;
        this.ingredientes = ingredientes;
        this.img = img;
        this.dataId=dataId;
    
    }
    
    }

    class Temporada {
        constructor (nombre, precio, menu, ingredientes,img, dataId){
            this.nombre = nombre;
            this.precio = precio;
            this.menu = menu;
            this.ingredientes = ingredientes;
            this.img = img;
            this.dataId=dataId;
        
        }
        
        }


//Objetos

const  coctel1 = new Clasicos(menuClasicos[0], 75, "clasicos", "Gin, Sugar Syrup, Angostura Bitters y Orange Bitters", "../Imagenes/ginoldfashion.png",1);
const  coctel2 = new Clasicos(menuClasicos[1], 75, "clasicos", "Proseco, Aperol, Soda", "../Imagenes/aperolspritz.png",2);
const  coctel3 = new Clasicos(menuClasicos[2], 75, "clasicos", "Gin, Amaro, Licor de Cereza, Jugo de Limón", "../Imagenes/cherrybaby.png",3);
const  coctel4 = new Clasicos(menuClasicos[3], 75, "clasicos", "Vodka, Licor de Café, Freshly Brewed Espresso, Jarabe de Azúcar", "../Imagenes/espressomartini.png",4);
const  coctel5 = new Clasicos(menuClasicos[4], 75, "clasicos", "Gin, Jugo de limón, Hojas de Menta, Agua Mineral", "../Imagenes/freshmint.png",5);
const  coctel6 = new Clasicos(menuClasicos[5], 75, "clasicos", "Gin, Jugo de Toronja, Agua Tónica, Jarabe de Romero", "../Imagenes/grapefruitfizz.png",6);
const drinksClasicos = [coctel1, coctel2, coctel3, coctel4, coctel5, coctel6]


const  coctel7 = new Especiales(menuEpecialidades[0], 80, "especialidades", "Gin, Camparim jugo de naranja", "../Imagenes/garibaldi.png",7);
const  coctel8 = new Especiales(menuEpecialidades[1], 80, "especialidades", "Gin, Curacao, Juego de Lima, Huevo", "../Imagenes/bluelady.png",8);
const  coctel9 = new Especiales(menuEpecialidades[2], 80, "especialidades", "Gin, Juego de Limón, Naranja, Apricot", "../Imagenes/apricotsunrise.png", 9);
const  coctel10 = new Especiales(menuEpecialidades[3], 80, "especialidades", "Gin, Champari, Juego de Lima, Sandía","../Imagenes/watermelondream.png",10);
const  coctel11 = new Especiales(menuEpecialidades[4], 80, "especialidades", "Gin, Chambord, Juego de Piña, Juego de Lima, Bkackberries", "../Imagenes/tropicalblackberry.png",11);
const  coctel12= new Especiales(menuEpecialidades[5], 80, "especialidades", "Gin, Licor de Cereza, Jugo de Piña, Jugo de Limón, Granadina, D.O.M Bénédictine", "../Imagenes/singaporesling.png",012);
const drinksEspeciales = [coctel7, coctel8, coctel9, coctel10, coctel11, coctel12]

const  coctel13= new Temporada(menuTemporada[0], 85, "temporada", "Gin, Limoncelo, Crema de Coco, Jugo de Limón, Lavanda.","../Imagenes/littlespring.png",13 );
const  coctel14= new Temporada(menuTemporada[1], 85, "temporada", "Gin, Creama de Violetas, Jugo de Lima, Jarabe de Lavanda, Gin, Vermouth.", "../Imagenes/clubfloral.png",14);
const  coctel15= new Temporada(menuTemporada[2], 85, "temporada", "Gin, Vermouth, Naranja.","../Imagenes/pirplemartini.png" ,15);
const  coctel16= new Temporada(menuTemporada[3], 85, "temporada", "Gin, Chambord, Juego de Limón, Fresas.", "../Imagenes/valentinecosmo.png",16 );
const  coctel17= new Temporada(menuTemporada[4], 85, "temporada", "Gin, Juego de Limón, Limonada de Frutos Salvajes, Berries", "../Imagenes/ginwild.png",17);
const  coctel18= new Temporada(menuTemporada[5], 85, "temporada", "Gin, Jugo de Limón, Chambord, Black Gin, Huevo.","../Imagenes/purplehorizon.png",18 );
const drinksTemporada = [coctel13, coctel14, coctel15, coctel16, coctel17, coctel18]

const allDrinks = [coctel1, coctel2, coctel3, coctel4, coctel5, coctel6, coctel7, coctel8, coctel9, coctel10, coctel11, coctel12, coctel13, coctel14, coctel15, coctel16, coctel17, coctel18]

