function crearElementosHeader (){

    const contenPadreDiv=document.createElement('div');
    contenPadreDiv.class=("container");
    //Codigo para crear un header
    const header=document.createElement('header');
    header.id=("cabeza");
    header.textContent=("Elementos creados con J-S.");

    //Codigo para crear un section...
    const sect=document.createElement('section');
    //Codigo para crear un nav
    const nav=document.createElement('nav');
    //Codigo para crear un -ul-
    var ul=document.createElement('ul'); 

    //Codigo para crear li(*2)...
    var li1=document.createElement('li');
    li1.textContent=("Inicio");
    var li2=document.createElement('li');
    li2.textContent=("Acciones");

    contenPadreDiv.appendChild(header);
    header.appendChild(sect);
    sect.appendChild(nav);
    nav.appendChild(ul);
    ul.appendChild(li1);
    ul.appendChild(li2);
    // Codigo para agregar el header al body...
    document.body.appendChild(contenPadreDiv);

    console.log(contenPadreDiv);

}

crearElementosHeader ()

var crearElementosMenu=()=>{
    var menu=document.createElement('main');
    menu.textContent=("Se ha creado el main");

    // Codigo para crear un h1.
    var h1=document.createElement('h1');
    h1.textContent=("Pagina de practica con el instructor Pablo!.");

    var imagen=document.createElement('img');
    imagen.src=("https://st.depositphotos.com/1438688/3547/i/450/depositphotos_35476539-stock-photo-codejavascript-in-text-editor.jpg");

    var articulo1=document.createElement('article');
    articulo1.textContent=("Primer articulo");
    var articulo2=document.createElement('article');
    articulo2.textContent=("Segundo articulo");
    
    menu.appendChild(h1); //Agrego el h1 al menu...
    menu.appendChild(imagen);
    menu.appendChild(articulo1); //Agrego los articulos al menu
    menu.appendChild(articulo2);
    document.body.appendChild(menu); // Agrego el menu al cuerpo del HTML..

}
crearElementosMenu ()

var creaFooter=()=>{
    var creaFooter=document.createElement('footer');
    creaFooter.id=("foot");
    creaFooter.textContent=("Contactos")
    var parrafo=document.createElement('p');
    parrafo.textContent=("Redes sociales");

    creaFooter.appendChild(parrafo);
    document.body.appendChild(creaFooter);
    console.log(creaFooter);
}
creaFooter()
 
