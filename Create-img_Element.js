// S� h�r skapar man ett HTML element med JavaScript DOM

    let main = document.querySelector('main');
    main.innerHTML = '';

data.photos.photo.forEach(img => {  // om man h�mtar fr�n flickr s� borde det se ut s� h�r

// F�r att skapa ett img element i JS

	 if(img.farm !== 0) {  // om flickr

            let el = document.createElement('img');
            el.setAttribute('src', 'h�r l�gger man in hela URLen till bilden');  // Denna str�ng pusslas ihop med data fr�n objektet som skapas i API anropet
            el.setAttribute('alt', 'h�r l�gger man in title p� bilden'); // Fr�n API anropet


	    main.appendChild(el); // L�gger in img elementet mellan <main> </main>
	}

});