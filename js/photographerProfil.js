class photographerProfil {
    // Check on which page the user is located, if the position corresponds with the photographer's "id", create the photographer's 'Profile' section
    displayPhotographerProfil(data) {
        let photographersData = data.photographers;
        const id = UrlParam.get('id');
        const photographers = !id ? photographersData : photographersData.filter(photographer => photographer.id == id);
        const sectionPhotographerProfil = document.getElementById('ph_profil_header');
        const templatePhotographerProfil = `
            <article aria-label="Photographer Profil" class="ph_profil">
                <div class='ph_infos'>
                    <h2>${photographers[0].name}</h2>
                    <p class="ph_city">${photographers[0].city}, ${photographers[0].country}</p>
                    <p class="ph_tagline">${photographers[0].tagline}</p>
                    <p >${photographers[0].tags.map(tag => `<a class="ph_tags" href="index.html">#${tag}</a>`).join(" ")}</p>
                </div>
                <button id="ph_contact" title='Contact Me'>Contactez-moi</button>
                <a href='#' title='${photographers[0].alt}'><img src="photos/Photographers ID Photos/${photographers[0].portrait}" alt="${photographers[0].alt}"></a>
            </article>
            `

        sectionPhotographerProfil.innerHTML = templatePhotographerProfil;
    }
}

export default photographerProfil