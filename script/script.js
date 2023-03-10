
//? Pantalla de carga


window.addEventListener('load',()=>{
    const containerLoader =document.querySelector('#container');
    containerLoader.style.opacity=0;
    containerLoader.style.visibility = 'hidden'
})


window.onload = function (){
    var contenedor = document.getElementById('contenedor_carga');

    contenedor.style.visibility = 'hidden';

    contenedor.style.opacity ='0';
}



let mainPrin = document.createElement('main');
document.body.appendChild(mainPrin);


let tarjeta = document.createElement('section');
tarjeta.setAttribute('id','primerSection')
mainPrin.appendChild(tarjeta);



    
    let tarjeta2 = document.createElement('section');
    tarjeta2.setAttribute('id','segundaSection')
    mainPrin.appendChild(tarjeta2);
    
    
    async function getTop() {
        const result = await fetch(`https://api.nytimes.com/svc/books/v3/lists/current/combined-print-and-e-book-nonfiction.json?api-key=d2FW1BkxI1nvgpFuUQ2c11nLDHi30dq4`);
        const database = await result.json();
        const getTops = database.results.books;
        
        for (let i = 0; i < getTops.length; i++) {
            bookContainer(getTops[i]);
        }
        
    

async function getNames() {
    //De la api recogemos la informacion que queremos traernos para pintar.
    const result = await fetch(`https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=d2FW1BkxI1nvgpFuUQ2c11nLDHi30dq4`);
    const database = await result.json();
    const recogerGenero = database.results;
//Un for para que recorra todos los titulo que necesitamos en este caso
    for (let i = 0; i < recogerGenero.length; i++) {
        containers (recogerGenero[i]);
    }
//Colocamos la funcion containers dentro del mismo async para que este a la vez que recorre el nombre de los titulos nos pinte directamente
//lo que queremos traernos de la API al DOM.
    function containers(recogerGenero) {

        let containerUno = document.createElement('article');
        tarjeta.appendChild(containerUno);
        
        let titulo = document.createElement('h4');
        titulo.setAttribute('class', 'familia');
        
        containerUno.appendChild(titulo);
        titulo.textContent = recogerGenero.list_name;

        let lastBook = document.createElement('p');
        containerUno.appendChild(lastBook);
        // Con las comillas estamos metiendo todo el texto que queramos. El simbolo de dolar y {} sirven para recoger la variable que nosotros
        //queremos que nos pasen, de esta forma podemos pintar el texto que queramos y seguir recogiendo la variable que necesitemos.

        lastBook.textContent = `Oldest:${recogerGenero.oldest_published_date}`;
        
        let newBook = document.createElement('p');
        containerUno.appendChild(newBook);
        newBook.textContent = `Newest:${recogerGenero.newest_published_date}`;

        let freqRefresh = document.createElement('p');
        containerUno.appendChild(freqRefresh);
        freqRefresh.textContent = `Updated:${recogerGenero.updated}`;


        //! A??adir evento get top
        let button = document.createElement('button'); 
        button.type = 'button'; 
        containerUno.appendChild(button)
        button.textContent = `Read more >`;
        // recogerGenero.list_name_encoded
        // getTop.addEventListener(recogerGenero.list_name_encoded);


        
        // let getLink = document.createElement('button')
        // containerUno.appendChild(getLink);
        // getLink.textContent = 

    }

}
getNames()
//? Nombre completo de la lista <---
//! Fecha del libro m??s antiguo en la listaB <---
//! Fecha del ??ltimo libro incorporado <---
//! Frecuencia de actualizaci??n <---
//! Link para poder cargar la lista
    
// console.log(lastBookIncorporated);
// console.log(lastBookOnList);
// console.log(frequency);





    //!Dentro de una lista:
    // Incluir
    // Car??tula del libro
    // Cantidad de semanas que lleva en la lista
    // Descripci??n
    // Titulo y la posici??n que ocupa en la lista ( #1 titulo.... #2 titulo....)
    // Link para poder comprar el libro en amazon (debe abrirse en otra pesta??a)

    
    let tarjeta2 = document.createElement('section');
    tarjeta2.setAttribute('id','segundaSection')
    mainPrin.appendChild(tarjeta2);
    

    async function getTop() {
        const result = await fetch(`https://api.nytimes.com/svc/books/v3/lists/current/combined-print-and-e-book-nonfiction.json?api-key=d2FW1BkxI1nvgpFuUQ2c11nLDHi30dq4`);
        const database = await result.json();
        const getTops = database.results.books;
        
        for (let i = 0; i < getTops.length; i++) {
            bookContainer(getTops[i]);
        }
        

        
        function bookContainer(bookList) {
        
            let containerDos = document.createElement('article');
            tarjeta2.appendChild(containerDos);
            
            let titulo = document.createElement('h4');
            titulo.setAttribute('class', 'familia');
            containerDos.appendChild(titulo);
            titulo.textContent = bookList.title;

            let imagen = document.createElement('img');
            imagen.setAttribute('src', `${bookList.book_image}`);
            containerDos.appendChild(imagen);
            imagen.src = bookList.book_image;
    
            let lastBook = document.createElement('p');
            containerDos.appendChild(lastBook);
            // Con las comillas estamos metiendo todo el texto que queramos. El simbolo de dolar y {} sirven para recoger la variable que nosotros
            //queremos que nos pasen, de esta forma podemos pintar el texto que queramos y seguir recogiendo la variable que necesitemos.
            
            lastBook = `${bookList.book_image}`;
            
            let newBook = document.createElement('p');
            containerDos.appendChild(newBook);
            newBook.textContent = `Newest:${bookList.weeks_on_list}`;
    
            let freqRefresh = document.createElement('p');
            containerDos.appendChild(freqRefresh);
            freqRefresh.textContent = `Description:${bookList.description}`;

        }
        // bookContainer()
    }


getTop()

