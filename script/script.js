//? Nombre completo de la lista
//! Fecha del libro más antiguo en la listaB <---
//! Fecha del último libro incorporado
//! Frecuencia de actualización
//! Link para poder cargar la lista

//? Pantalla de carga

// window.addEventListener('load',()=>{
//     const containerLoader =document.querySelector('#container');
//     containerLoader.style.opacity=0;
//     containerLoader.style.visibility = 'hidden'
// })

//estructura de la pagina creada con DOM;










//! LISTA BEST SELLERS DE LOS TITULOS

// const bestSellersList = [];
// async function bestSellers() {
//     const result = await fetch (`https://api.nytimes.com/svc/books/v3/lists/best-sellers/history.json?api-key=d2FW1BkxI1nvgpFuUQ2c11nLDHi30dq4`);
//     const database = await result.json();
//     const bestSellersList1 = database.results;


//     for (let i = 0; i < bestSellersList1.length; i++) {
//         bestSellersList.push(bestSellersList1[i].title);
        
//     }

//     console.log(bestSellersList);
// }
// bestSellers();



//! ESTA FULLOVERVIEW RECOGE TODOS LOS NOMBRE DE LAS LISTAS



// async function fullOverView () {
//     const result = await fetch (`https://api.nytimes.com/svc/books/v3/lists/full-overview.json?api-key=d2FW1BkxI1nvgpFuUQ2c11nLDHi30dq4`);
//     const database = await result.json();
//     const fullOverView = database.results.lists

//     for (let i = 0; i < fullOverView.length; i++) {
//         listFullName.push(fullOverView[i].list_name);
        
//     }

//     console.log(listFullName);


// }
// fullOverView()



let mainPrin = document.createElement('main');
document.body.appendChild(mainPrin);

let tarjeta = document.createElement('section');
tarjeta.setAttribute('id','primerSection')
mainPrin.appendChild(tarjeta);





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


        //! Añadir evento get top
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
//! Fecha del libro más antiguo en la listaB <---
//! Fecha del último libro incorporado <---
//! Frecuencia de actualización <---
//! Link para poder cargar la lista
    
// console.log(lastBookIncorporated);
// console.log(lastBookOnList);
// console.log(frequency);





    //!Dentro de una lista:
    // Incluir
    // Carátula del libro
    // Cantidad de semanas que lleva en la lista
    // Descripción
    // Titulo y la posición que ocupa en la lista ( #1 titulo.... #2 titulo....)
    // Link para poder comprar el libro en amazon (debe abrirse en otra pestaña)

    
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
