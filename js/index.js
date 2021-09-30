import apiFishEye from './apiFishEye.js';
import FilterFactory from './filtre_ph.js'
import Scroll from './scrollBtn.js'

// let url = "bdd/FishEyeData.json";


new apiFishEye().getDataFishEye().then( (datas) => {


    let photographes = datas.photographers;

    

    let myHTML = '';

    photographes.forEach(element => {

        let sectionPhotographers = document.getElementById('photographers');

        let articlePhotographers = document.createElement('article');

        articlePhotographers.className = element.tags.join(' ') + ' articlePh';

        myHTML = `
        <a href="photographers.html?id=${element.id}" alt="${element.name}">
          <img src="photos/Photographers ID Photos/${element.portrait}" alt="" />
          <h2 class="name">${element.name}</h2>
        </a>
        <p class="location">${element.city}, ${element.country}</p>
        <p class="tagline">${element.tagline}</p>
        <p class="price">${element.price}€/jour</p>
        <nav>${element.tags.map(tag =>
            `<span class="phFilter" data-filter="${tag}" alt="tag">#${tag}</span>`).join(" ")}
        </nav>`

      

        //Je crée mon HTML pour l'intégrer a la page
    
        sectionPhotographers.appendChild(articlePhotographers);

        articlePhotographers.innerHTML = myHTML;
    });
    

    

    const MonObjectFilterFactory = FilterFactory();
    // console.log(MonObjectFilterFactory);
    MonObjectFilterFactory.filterTags();

    const scroll = new Scroll
    scroll.scrollButton()
})

.catch((err) =>{
    console.error(err)
});