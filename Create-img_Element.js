// Så här skapar man ett HTML element med JavaScript DOM

    let main = document.querySelector('main');
    main.innerHTML = '';

data.photos.photo.forEach(img => {  // om man hämtar från flickr så borde det se ut så här

// För att skapa ett img element i JS

	 if(img.farm !== 0) {  // om flickr

            let el = document.createElement('img');
            el.setAttribute('src', 'här lägger man in hela URLen till bilden');  // Denna sträng pusslas ihop med data från objektet som skapas i API anropet
            el.setAttribute('alt', 'här lägger man in title på bilden'); // Från API anropet


	    main.appendChild(el); // Lägger in img elementet mellan <main> </main>
	}

});