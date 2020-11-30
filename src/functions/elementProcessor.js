export const setImageProperties = (image, source, ...classes) => {
  image.src = source;
  image.alt = 'restaurant page image'
  if (classes.length > 0) {
    for (let newClass of classes) {
      image.classList.add(newClass)
    }  
  }
}

export const renderOnScroll = (parentElement, childElement, referenceElement) => {
  let iswindowScrolled = false
  window.onscroll = () => {
    if (window.scrollY > (referenceElement.offsetTop / 2) && !iswindowScrolled){
      parentElement.append(childElement)
      iswindowScrolled = true
    }
  }
}