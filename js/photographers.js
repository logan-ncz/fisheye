let url = "bdd/FishEyeData.json";

fetch(url)
.then( (datas) =>{
    return datas.json()
})
.then( (datas) => {

    let photographersData = datas.photographers;

    const id = window.location.search.split("id=")[1];

    const photographers = !id ? photographersData : photographersData.filter(photographer => photographer.id == id);

    const myHTML = `<article class="ph_profil">
        <div class="ph_infos">
          <h2>${photographers[0].name}</h2>
          <p class="ph_city">${photographers[0].city}, ${photographers[0].country}</p>
          <p class="ph_tagline">${photographers[0].tagline}</p>
          <ul class="filter ph-filter">${photographers[0].tags.map(tag =>
            `<li data-filter="${tag}">#${tag}</li>`).join(" ")}
          </ul>
        </div>
        <button>Contactez-moi</button>
        <img src="photos/Photographers ID Photos/${photographers[0].portrait}" alt="" />
      </article>`

        //Je crée mon HTML pour l'intégrer a la page
  

    document.getElementById('ph_profil_header').innerHTML = myHTML;

})
.catch((err) =>{
    console.error(err)
});