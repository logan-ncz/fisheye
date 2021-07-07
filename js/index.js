console.log("ça marche")

let url = "bdd/FishEyeData.json";

fetch(url)
.then( (datas) =>{
    return datas.json()
})
.then( (datas) => {

    console.log(datas)

    let photographes = datas.photographers

    console.log(photographes)

    let myHTML = ''
    photographes.forEach(element => {
        console.log(element.name)
        myHTML += `<article>
        <a href="photographers.html?id=${element.id}">
          <img src="photos/Photographers ID Photos/${element.portrait}" alt="" />
          <h2 class="name">${element.name}</h2>
        </a>
        <p class="location">${element.city}, ${element.country}</p>
        <p class="tagline">${element.tagline}</p>
        <p class="price">${element.price}/jour</p>
        <ul class="filter">${element.tags.map(tag =>
            `<li data-filter="${tag}">#${tag}</li>`).join(" ")}
        </ul>
      </article>`

      

        //Je crée mon HTML pour l'intégrer a la page
    
    });
    

    console.log(myHTML)

    document.getElementById('photographers').innerHTML = myHTML

})
.catch((err) =>{
    console.error(err)
});