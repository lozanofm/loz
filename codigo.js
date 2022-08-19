 
//  //usuario ya regitrado debe ingresar sus credenciales para ingresar a la APP de compras
// function inicio(){
//     let clave=1234;
//     let usuario="fernando";
//     //una vez que acepto el ingreso le muestra al usuario los productos disponibles a continuacion
//     const listaBox=["Chalecos","Calleras","Muñqueras","Cinturones","Magnesio",];
        

//     if (document.form.password.value==clave && document.form.login.value==usuario){
//         alert("Bienvenido a Clean Crossfit "+usuario);
//         alert(listaBox);
//         window.location="ingreso.html";
//     }else{
//         alert("Usuario o Password incorrectos, intente nuevamente:");
//     }

// }

//APLICAMOS DOM
let titulo=document.getElementById("titulo");//Accedo a titulo a traves de getElementById
titulo.style.font="bold 40px monospace";//cambie la fuente y el tamaño 
titulo.style.textAlign="center"; //Centre el titulo
titulo.innerText="C L E A N - C  R  O  S  S  F  I  T";//aca modificamos el texto de titulo
document.write(Date()); //Agregamos la fecha y hora en la seccion de Ingreso

let parrafos=document.getElementsByTagName("p"); //aca tomamos la etiqueta p(parrafo)
parrafos[0].innerText=new Date().toLocaleString(); //aca le remplazo texto del primer parrafo por fecha y hora




//usuario ingresa lo que quiere comprar a traves de la funcion reservar
function reservar(){ 

    let articulos=prompt("INGRESA LOS PRODUCTOS QUE DESEAS COMPRAR:\nCHALECO\nCALLERAS\nMUÑEQUERAS\nCINTURON\nMAGNESIO\n(s-para salir)");
    let cantidad=0;
    let medida;
    let precio=0;
    
    
    while(articulos!="s" && articulos!="S"){
        switch(articulos){
            case "chaleco":
            case "CHALECO":
                medida=prompt("INGRESE EL TALLE: \nA-SMALL\nB-MEDIUM\nC-LARGE\n(s-para salir) ")
                chalec1.mostrarChalec();
                alert("SELECCIONO CHALECO)");
                cantidad=cantidad+1;
                precio=precio+36000;            
                break;
            case "calleras":
            case "CALLERAS":
                medida=prompt("INGRESE EL TALLE: \nA-SMALL\nB-MEDIUM\nC-LARGE\n(s-para salir) ")
                callera1.mostrarCalleras();
                alert("SELECCIONO CALLERAS");
                cantidad=cantidad+1;
                precio=precio+7000;
                break;
            case "muñequeras":
            case "MUÑEQUERAS":  
                medida=prompt("INGRESE EL TALLE: \nA-SMALL\nB-MEDIUM\nC-LARGE\n(s-para salir) ")
                munequera1.mostrarMunequera();
                alert("SELECCIONO MUÑEQUERAS");
                cantidad=cantidad+1;
                precio=precio+5000;
                break;
            case "cinturon":
            case "CINTURON":
                medida=prompt("INGRESE EL TALLE: \nA-SMALL\nB-MEDIUM\nC-LARGE\n(s-para salir) ")
                cinturon1.mostrarCinturon();
                alert("SELECCIONO CINTURON");
                cantidad=cantidad+1;
                precio=precio+46000;
                break;
            case "magnesio":
            case "MAGNESIO":
                medida=prompt("INGRESE LOS KG: \nA-1KG\nB-2KG\nC-3 KG\n(s-para salir) ")
                magnesio1.mostrarMagnesio();
                alert("SELECCIONO MAGNESIO");
                cantidad=cantidad+1;
                precio=precio+2000;
                break;
            default:
                alert("NO CORRESPONDE A UN PRODUCTO DE CROSSFIT");
                break;
        }
        articulos=prompt("SI QUIERES SUMAR OTRO PRODUCTO SELLECIONALO: \nCHALECO\nCALLERAS\nMUÑEQUERAS\nCINTURON\nMAGNESIO (s-para salir)");
    }
    alert("CANTIDAD DE PRODUCTOS SELECCIONADOS: "+cantidad);
    alert("Total a pagar $"+precio);
    //MOSTRAMOS LAS REMERAS QUE LA TIENDA TIENE EN PROMOCION
    alert("Antes de retirarse, lo invitamos a mirar nuestras remeras");
    encontrado=prompt("Ingrese la remera que desea buscar");
    
    }
    
    //MOSTRAMOS EL DETALLE DE LOS PRODUCTOS
   
    class Chalec{
        //constructor de objetos de tipo Chalecos
        constructor(tipo,color,modelo, precio){
            this.tipo=tipo;
            this.color=color;
            this.modelo=modelo;
            this.precio=precio;
        }
        //metodo de los objetos de la clase Chalec
            mostrarChalec(){
            alert("Tipo: "+this.tipo+"\nColor: "+this.color+"\nModelo: "+this.modelo+"\nPrecio: "+this.precio);
        }
    }
    
    const chalec1=new Chalec("Chaleco","Camuflado","S-3","$ 36000");
    const chalec2=new Chalec("Chaleco","Negro","K-2","$ 14800");
    
    
    //Muestra el detalle de Objeto calleras
    class Calleras{
        //constructor de objetos de tipo Calleras
        constructor(tipo,color,modelo, precio){
            this.tipo=tipo;
            this.color=color;
            this.modelo=modelo;
            this.precio=precio;
        }
        //metodo de los objetos de la clase Calleras
            mostrarCalleras(){
            alert("Tipo: "+this.tipo+"\nColor: "+this.color+"\nModelo: "+this.modelo+"\nPrecio: "+this.precio);
        }
    }
    
    const callera1=new Calleras("Calleras","Gris","S-3","$ 7000");
    const callera2=new Calleras("Calleras","Negro","K-2","$ 7000");
    
    //Muestra el detalle de Objeto muñequeras
    class Munequera{
        //constructor de objetos de tipo Muñqueras
        constructor(tipo,color,modelo, precio){
            this.tipo=tipo;
            this.color=color;
            this.modelo=modelo;
            this.precio=precio;
        }
        //metodo de los objetos de la clase Muñequeras
            mostrarMunequera(){
            alert("Tipo: "+this.tipo+"\nColor: "+this.color+"\nModelo: "+this.modelo+"\nPrecio: "+this.precio);
        }
    }
    
    const munequera1=new Munequera("Muñequeras","Roja","S-3","$ 5000");
    const munequera2=new Munequera("Muñequeras","Verde","K-2","$ 5000");
    
    //Muestra el detalle de Objeto Cinturon
    class Cinturon{
        //constructor de objetos de tipo Cinturon
        constructor(tipo,color,modelo, precio){
            this.tipo=tipo;
            this.color=color;
            this.modelo=modelo;
            this.precio=precio;
        }
        //metodo de los objetos de la clase Cinturon
            mostrarCinturon(){
            alert("Tipo: "+this.tipo+"\nColor: "+this.color+"\nModelo: "+this.modelo+"\nPrecio: "+this.precio);
        }
    }
    
    const cinturon1=new Cinturon("Cinturon","Marron","S-3","$ 46000");
    const cinturon2=new Cinturon("Cinturon","Violeta","K-2","$ 46000");
    
    //Muestra el detalle de Objeto Magnesio
    class Magnesio{
        //constructor de objetos de tipo Magnesio
        constructor(tipo,color,modelo, precio){
            this.tipo=tipo;
            this.color=color;
            this.modelo=modelo;
            this.precio=precio;
        }
        //metodo de los objetos de la clase Magnesio
            mostrarMagnesio(){
            alert("Tipo: "+this.tipo+"\nColor: "+this.color+"\nModelo: "+this.modelo+"\nPrecio: "+this.precio);
        }
    }
    
    const magnesio1=new Magnesio("Magnesio","blanco","S-3","$ 2000");
    const magnesio2=new Magnesio("Magnesio","blanco","K-2","$ 2000");
    
    const remeras=[
        {
            codigo:"9345123",
            modelo:"Nobull",
            precio:230
        },
        {
            codigo:"7345124",
            modelo:"Reebok",
            precio:300
        },
        {
            codigo:"3345125",
            modelo:"Nike",
            precio:400
        },
        {
            codigo:"1345126",
            modelo:"Adidas",
            precio:420
        },
    ];
    
    
    // Muestro los modelos de remeras disponibles
    remeras.forEach((remera)=>console.log(remera.modelo));
    
    
    //Usuario busca la remera Adidas
    let encontrado=remeras.find((remera)=>remera.modelo=="Adidas");
    console.log(encontrado);
    
    
    //Si Adidas esta disponible o no se muestra el cartel a continuacion
    if(encontrado != undefined){
        console.log("La remera se encuentra disponible");
        console.log(encontrado);
    }else{
        console.log("No esta disponible!");
    }
    
    
    //filtro las remeras con precio menor a 300
    const oferta=remeras.filter((remera)=>remera.precio<300);
    console.log(oferta);
    
   
const productos = [
{  id: 1,  nombre: "chalecos", precio: 36000 },
{  id: 2,  nombre: "Calleras", precio: 7000 },
{  id: 3,  nombre: "Munequera"  , precio: 5000},
{  id: 4,  nombre: "Cinturon"  , precio: 46000},
{  id: 5,  nombre: "Magnesio" , precio: 2000}
];

//JSON (guardo en localStorage el array de objetos "productos" a traves de Json pasandolo a string con stringify)
const productosAjson = JSON.stringify(productos);
localStorage.setItem("prodCross", productosAjson);//clave: prodCross, valor: productosAjson
console.log(productosAjson);//lo muestro por consola

let prodDeJson = localStorage.getItem("prodCross");//vuelvo a pasar a objeto lo que estaba en JSON
console.log (productosAjson);
const prodJsonAobjeto= JSON.parse(prodDeJson);
console.log(prodJsonAobjeto);

//campos de texto
let campoFiltro=document.getElementById("filtrar");
let campoCantidad=document.getElementById("cantidad");
campoFiltro.value="Ingrese filtro"; //value permite asignar un dato en el campo Filtrar
campoCantidad.value=productos.length; //ingreso con length el stock que tiene (cantidad) Viene de la funcion de arriba de productos por eso me dice 5 en cantidad. Hay 5 productos.
campoCantidad.onkeydown=()=>{alert("Presionaste una tecla")};//avisamos que presiono una tecla
campoCantidad.onkeyup=()=>{alert("Soltaste una tecla")};//avisamos que solto una tecla

//comprando chaleco negro
let miBoton=document.getElementById("miBoton"); 
miBoton.addEventListener("click",interactuar);
function interactuar(){
    alert("Agregaste 1 producto al carrito");
}

//comprando chaleco verde y lo guardo en LOCAL_STORAGE
let miBoton2=document.getElementById("miBoton2"); 
miBoton2.addEventListener("click",interactuar);
localStorage.setItem("chale","ChalecoVerde"); //guardo en Storage el chaleco verde que compra el cliente
let chalecoActual= localStorage.getItem("chale");//aca accedo al chalecoActual
console.log(chalecoActual);
function interactuar(){
    alert("Agregaste 1 producto al carrito");
    alert(chalecoActual);

}



