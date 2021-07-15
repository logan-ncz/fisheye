function MaFactoryMethode(name){
   
    let mavariable = name

    function affiche(){
        console.log(this.mavariable)
    }

    return {
        mavariable,
        affiche
    }
};

export default class Filter {

    filterTags() {
        let filtres = document.querySelector('ul');
        let articles = document.querySelector('articlePh');
    
        filtres.addEventListener('click', event => {
            let classValue = event.target.classList.value;
    
            if (-1 === classValue.indexOf('activated')) {
                event.target.classList.add('activated')
            } else {
                event.target.classList.remove('activated')
            }
    
            this.sortDomArticle(articles);
        });
    }

    getActiveFilters() {
        let currentFilters = document.querySelectorAll('ul li.activated');
        let filterSelected = []

        currentFilters.forEach(function (currentFilter) {
            filterSelected.push(currentFilter.getAttribute("data-filter"));
        });

        return filterSelected;
    }

    ownAllFilters(article) {
        let filters = this.getActiveFilters();
        let classValue = article.classList.value;
        let classes = classValue.split(' ');
        let intersection = filters.filter(
            x => classes.includes(x)
        );

        return filters.length == intersection.length;
    }

    sortDomArticle(articles) {
        articles.forEach((article) => {
            if (this.ownAllFilters(article)) {
                article.style.display = 'block';
            } else {
                article.style.display = 'none';
            }
        });
    }
}

