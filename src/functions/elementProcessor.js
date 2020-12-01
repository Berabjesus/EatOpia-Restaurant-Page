export const setImageProperties = (image, source, ...classes) => {
  image.src = source;
  image.alt = 'restaurant page image'
  if (classes.length > 0) {
    for (let newClass of classes) {
      image.classList.add(newClass)
    }  
  }
}

export const appendOnScroll = (parentElement, referenceElement, ...childElements) => {
  let iswindowScrolled = false
  window.addEventListener("scroll", function() {
    if (window.scrollY > (referenceElement.offsetTop / 2) && !iswindowScrolled){
      for (const child of childElements) {
        parentElement.append(child)
      }
      iswindowScrolled = true
    }
  })
}

export const addClassOnScroll = (element, referenceElementClass, ...classesToAdd) => {
  let iswindowScrolled = false
  const referenceElement = document.getElementsByClassName(referenceElementClass)
  
  window.addEventListener("scroll", function() {
    // console.log(window.scrollY);
    // console.log(referenceElement[0].offsetTop);
    // console.log(referenceElement[0].offsetHeight);
     if (window.scrollY > (referenceElement) && !iswindowScrolled){
      for (const newClass of classesToAdd) {
        element.classList.add(newClass)        
      }  
      iswindowScrolled = true
    }
  })
}

