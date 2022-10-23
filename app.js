
//*************** INICIO *****************

//Ingreso restringido a mayores de edad:

let edad = prompt("Digita tu edad");

if (edad >= 18) {
    alert ("¡Bienvenid@ a Happy Drink!")

    //se crea función para utilizarla varias veces
    function MenuTequila(){
        let tequila = prompt ("Selecciona una opción de nuestra lista: Tequila Sunrise, Acapulco de Noche, Paloma, Margarita, Mora Breeze, Agua de Rancho ó Cosmic Paloma").toLowerCase();   
        switch (tequila){ //menú de casos
            case "tequila sunrise":
                alert ("Ha pedido un Tequila Sunrise");
                break;
            case "acapulco de noche":
                alert ("Ha pedido un Acapulco de Noche");
                break;
            case "paloma":
                alert ("Ha pedido una Paloma");
                break;
            case "margarita":
                alert ("Ha pedido una Margarita");
                break;
            case "mora breeze":
                alert ("Ha pedido un Mora Breeze");
                break;
            case "agua de rancho":
                alert ("Ha pedido un Agua de Rancho");
                break;
            case "cosmic paloma":
                alert ("Ha pedido un Cosmic Paloma");
                break;
            default:
                alert ("Valor incorrecto")
        }
        let agregar = prompt ("¿desea otra bebida? 1=si / 2=no");
        if (agregar == "1"){
            MenuTequila(); //se utiliza de nuevo la función
        } else{alert("Gracias por su compra");} 
        
    }

    MenuTequila(); //se lla a la función


} else alert ("Lo sentimos, Happy Drink sólo es para mayores de edad."); //si el usuario es menor de edad no se muestra el menú


