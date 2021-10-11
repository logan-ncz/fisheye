export default function FilterFactory() {
    let articles = [];
    
    function filterTags() {
        let filtres = document.querySelectorAll('.phFilter');
        articles = document.querySelectorAll('.articlePh');

        filtres.forEach( filtre => {
            filtre.addEventListener('click', event => {
                let classValue = event.target.classList.value;
                let myTEst = event.target.getAttribute("data-filter")
        
                if (-1 === classValue.indexOf('activated')) {
                    event.target.className = "activated phFilter"
                   
                    this.activedAdd(myTEst)
                } else {
                    event.target.classList.remove('activated')
                    this.activedRemove(myTEst)
                }

                this.sortDomArticle(articles);
            });
        })
    }

    //Fonction pour rendre tout les mêmes filtres en rouge
    function activedAdd(test){
        let filtres = document.querySelectorAll('.phFilter');

        filtres.forEach( filtre => {
            let classValue = filtre.classList.value;
            if (-1 === classValue.indexOf('activated') && filtre.getAttribute("data-filter") === test ) {
                filtre.className = "activated phFilter"
            }
        })
    }

    function activedRemove(test){
        let filtres = document.querySelectorAll('.phFilter');

        filtres.forEach( filtre => {
            let classValue = filtre.classList.value;
            if (0 === classValue.indexOf('activated') && filtre.getAttribute("data-filter") === test ) {
                filtre.classList.remove('activated')
            }
        })
    }

    function getActiveFilters() {
        let currentFilters = document.querySelectorAll('.phFilter.activated');
        let filterSelected = [];

        currentFilters.forEach(function (currentFilter) {
            filterSelected.push(currentFilter.getAttribute("data-filter"));
            
        });

        return filterSelected;
    }

    function ownAllFilters(article) {
        let filters = this.getActiveFilters();
        let classValue = article.classList.value;
        let classes = classValue.split(' ');
        let intersection = filters.filter(
            x => classes.includes(x)
        );

        return filters.length == intersection.length;
    }

    function sortDomArticle(articles) {
        articles.forEach((article) => {
            if (this.ownAllFilters(article)) {
                article.style.display = 'flex';
            } else {
                article.style.display = 'none';
            }
        });
    }

    return {
        articles,
        filterTags,
        activedAdd,
        activedRemove,
        getActiveFilters,
        ownAllFilters,
        sortDomArticle,
    }
}