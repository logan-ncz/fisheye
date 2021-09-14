function renderMedia(element) {

    const elementFactory = element;
    
    function choiceElement() {
      let factory = null;
      // console.log(this.elementFactory)
      if (this.elementFactory.hasOwnProperty('image')) {
          factory = this.createHTMLImage();
      } else if (element.hasOwnProperty('video')) {
          factory = this.createHTMLVideo();
      }
  
      return factory;
    }
  
    function createHTMLImage() {
      let eltImage = document.createElement('img');
      eltImage.setAttribute('src', this.elementFactory.image);
      eltImage.setAttribute('alt', this.elementFactory.title);
      eltImage.setAttribute('title', this.elementFactory.title);
      eltImage.setAttribute('role', 'button');
      eltImage.className = 'ph_media';
  
      return eltImage;
    }
  
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