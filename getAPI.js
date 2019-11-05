// Exempel API JavaScript

// Anropa denna function med Await // Varf�r
async function getImages(){

 
    const apiKey = ''; // En nyckel f�r att APIet ska kunna h�lla reda p� vem som g�r requests
    let method = ''; // Instruktion till APIet att s�ka p� foton 
    let text = '' // Det som st�r i inputf�ltet
    const baseUrl = ''; // Addressen till APIet

    let url = `${baseUrl}?api_key=${apiKey}&method=${method}&text=${text}&page=${currentPage}&format=json&nojsoncallback=1`;

    try {  
        
        let resp = await fetch(url); // Anropar fetch med den URLn
        // Beh�ver inte anv�nda ".then"
       
        let data = await resp.json(); // G�r om datan fr�n JSON till ett JavaScript-Objekt, beh�ver inte anv�nda JSON.parse() 
        console.log(data);
        return data; // // �terv�nder till d�r du anropade getImages() och returnerar objektet
     }
    catch(err) {
        console.error(err);
    }

}