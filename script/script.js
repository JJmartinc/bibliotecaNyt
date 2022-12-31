//? Nombre completo de la lista
//! Fecha del libro más antiguo en la listaB <---
//! Fecha del último libro incorporado
//! Frecuencia de actualización
//! Link para poder cargar la lista











//! LISTA BEST SELLERS DE LOS TITULOS

const bestSellersList = [];
async function bestSellers() {
    const result = await fetch (`https://api.nytimes.com/svc/books/v3/lists/best-sellers/history.json?api-key=d2FW1BkxI1nvgpFuUQ2c11nLDHi30dq4`);
    const database = await result.json();
    const bestSellersList1 = database.results;


    for (let i = 0; i < bestSellersList1.length; i++) {
        bestSellersList.push(bestSellersList1[i].title);
        
    }

    console.log(bestSellersList);
}
bestSellers();



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



const lastBookOnList = [];
const lastBookIncorporated = [];
const listFullName = [];
const frequency = [];

async function getNames() {
    const result = await fetch(`https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=d2FW1BkxI1nvgpFuUQ2c11nLDHi30dq4`);
    const database = await result.json();
    const getLastBook = database.results;

    for (let i = 0; i < getLastBook.length; i++) {
        listFullName.push(getLastBook[i].list_name);
        lastBookOnList.push(getLastBook[i].oldest_published_date);
        lastBookIncorporated.push(getLastBook[i].newest_published_date);
        frequency.push(getLastBook[i].updated);
    }

console.log(lastBookIncorporated);
console.log(lastBookOnList);
console.log(frequency);
console.log(listFullName);

}
getNames()




// async function getLastBook() {

//     let resultado = await fetch(``)
//     const database = await resultado.json();
//     const lastBook = 

// }


let newHeader = document.createElement('header');
let newH2 = document.createElement('h2');
newH2.textContent = " New York Times";
newHeader.appendChild(newH2)
let newH1 = document.createElement('h1');
newH1.textContent = "Best Sellers";
document.body.appendChild(newHeader);
newHeader.appendChild(newH1)

for (let i = 0; i < .length; i++) {
    const element = array[i];
    
}

let newDiv = document.createElement('div');
document.body.appendChild(newDiv);
newDiv.textContent = ""