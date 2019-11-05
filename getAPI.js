// Exempel API JavaScript

// Anropa denna function med Await // Varför
async function getImages(){

 
    const apiKey = ''; // En nyckel för att APIet ska kunna hålla reda på vem som gör requests
    let method = ''; // Instruktion till APIet att söka på foton 
    let text = '' // Det som står i inputfältet
    const baseUrl = ''; // Addressen till APIet

    let url = `${baseUrl}?api_key=${apiKey}&method=${method}&text=${text}&page=${currentPage}&format=json&nojsoncallback=1`;

    try {  
        
        let resp = await fetch(url); // Anropar fetch med den URLn
        // Behöver inte använda ".then"
       
        let data = await resp.json(); // Gör om datan från JSON till ett JavaScript-Objekt, behöver inte använda JSON.parse() 
        console.log(data);
        return data; // // Återvänder till där du anropade getImages() och returnerar objektet
     }
    catch(err) {
        console.error(err);
    }

}