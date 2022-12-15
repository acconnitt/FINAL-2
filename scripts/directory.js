const requestFile = 'scripts/data.json';
const cards = document.querySelector('.cards');

// More robust way 
async function getBusinessCard() {
    const response = await fetch(requestFile);
    //Convert to json 
    const jsonObject = await response.json();
    const business = jsonObject['businessCards'];
    // console.log(business);
    // console.table(jsonObject);
    business.forEach(displayBusinesses);
}

function displayBusinesses(business) {

    let card = document.createElement('section');
    let portrait = document.createElement('img');
    let title = document.createElement('h2');
    let phone = document.createElement('p');
    let address = document.createElement('p');
    let website = document.createElement('p');
    

    [title, phone, address, website].forEach((element) => {
        element.classList.add('caption');
    })

    
    title.textContent = `${business.name}`;
    phone.textContent = `${business.phone}`
    website.textContent = `${business.website}`
    address.textContent = `${business.address}`;


    // Build the image attributes by using the setAttribute method for the src, alt, 
    // and loading attribute values. (Fill in the blank with the appropriate variable).
    portrait.setAttribute('src', business.imageurl);
    portrait.setAttribute('alt', `Portait of ${business.name} ${business.lastname}`);
    portrait.setAttribute('loading', 'lazy');

    // Add/append the existing HTML div with the cards class with the section(card)
    card.append(title, portrait, phone, address, website);

    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('div.cards').appendChild(card);
}

getBusinessCard();

