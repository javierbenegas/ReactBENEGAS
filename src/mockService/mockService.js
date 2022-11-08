/* ----------BACKEND-------------*/
const itemsDB = [
    {
    "id": 1,
    "brand": "Fiat Cronos", 
    "model": 2022, 
    "km": 0, 
    "stock": 3,
    "fuel": "Nafta", 
    "price": 5000000, 
    "imgurl": "https://www.carone.com.ar/wp-content/uploads/2022/01/fiat-Cronos-SDesign-300x220.png"
},
    
    {
    "id": 2,
    "brand": "Fiat MOBI", 
    "model": 2022, 
    "km": 0, 
    "stock": 4,
    "fuel": "Nafta", 
    "price": 5000000, 
    "imgurl": "https://http2.mlstatic.com/D_NQ_NP_2X_658428-MLA49387066376_032022-F.webp"
},
    {
    "id": 3,
    "brand": "Fiat MOBI", 
    "model": 2022, 
    "km": 0, 
    "stock": 6,
    "fuel": "Nafta", 
    "price": 4300000, 
    "imgurl": "https://http2.mlstatic.com/D_NQ_NP_639275-MLA51841320493_102022-W.webp"
},
    {
    "id": 4,
    "brand": "Renault Kwid", 
    "model": 2022, 
    "km": 0, 
    "stock": 3,
    "fuel": "Nafta", 
    "price": 3900000, 
    "imgurl": "https://http2.mlstatic.com/D_NQ_NP_655941-MLA41802828717_052020-W.webp"
},
    {
    "id": 5,
    "brand": "Renault Logan", 
    "model": 2022, 
    "km": 0, 
    "stock": 3,
    "fuel": "Nafta", 
    "price": 4250000, 
    "imgurl": "https://http2.mlstatic.com/D_NQ_NP_911616-MLA52067645584_102022-W.webp"
},
    {
    "id": 6,
    "brand": "Volkswagen Gol", 
    "model": 2022, 
    "km": 0, 
    "stock": 1,
    "fuel": "Nafta", 
    "price": 4450000, 
    "imgurl": "https://http2.mlstatic.com/D_NQ_NP_608149-MLA52322161267_112022-W.webp"
}];

    export default function getItemsFromAPI(){
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(itemsDB);
            }, 500)
        });
    }

    export function getSingleItemFromAPI(){
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(itemsDB[7]);
            }, 500)
        });
    }
