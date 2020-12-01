export const setImageProperties = (image, source, ...classes) => {
  image.src = source;
  image.alt = 'restaurant page image'
  if (classes.length > 0) {
    for (let newClass of classes) {
      image.classList.add(newClass)
    }  
  }
}

export const appendOnScroll = (parentElement, referenceElementClass,index,bool, ...childElements) => {
  let iswindowScrolled = false
  let referenceElement = document.getElementsByClassName(referenceElementClass)[index]
  window.addEventListener("scroll", function() {
    if (referenceElement === undefined) {
      referenceElement = document.getElementsByClassName(referenceElementClass)[index]
    }
    if ( referenceElement !== undefined && window.scrollY > (referenceElement.offsetTop/2) && !iswindowScrolled){
      for (const child of childElements) {
        parentElement.append(child)
      }
      iswindowScrolled = true
    }
  })
}

export const setPagedivider = (text) => {
  let divider = document.createElement('h5')
  divider.innerText = text
  divider.classList.add('align-self-center','divider-line')
  return divider
}
