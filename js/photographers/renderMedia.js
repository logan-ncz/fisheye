function renderMedia(element) {

    const elementFactory = element;

    // Choix de l'élément en fonction de la balise du média
    function choiceElement() {
      let factory = null;
      if (this.elementFactory.hasOwnProperty('image')) {
          factory = this.createHTMLImage();
      } else if (element.hasOwnProperty('video')) {
          factory = this.createHTMLVideo();
      }
  
      return factory;
    }
  
    // Création d'un élément img
    function createHTMLImage() {
      let eltImage = document.createElement('img');
      eltImage.setAttribute('src', this.elementFactory.image);
      eltImage.setAttribute('alt', this.elementFactory.alt);
      eltImage.setAttribute('title', this.elementFactory.title);
      eltImage.setAttribute('role', 'button');
      eltImage.className = 'ph_media';
  
      return eltImage;
    }
  
    // Création d'un élément video
    function createHTMLVideo() {
      let eltVideo = document.createElement('video');
      eltVideo.setAttribute("controls", "controls")
      eltVideo.setAttribute('src', this.elementFactory.video);
      eltVideo.setAttribute('alt', this.elementFactory.title);
      eltVideo.setAttribute('title', this.elementFactory.title);
      eltVideo.setAttribute('role', 'button');
      eltVideo.className = 'ph_media';
  
      return eltVideo;
    }
  
    return {
      elementFactory,
      choiceElement,
      createHTMLImage,
      createHTMLVideo
    }
}

export default renderMedia;