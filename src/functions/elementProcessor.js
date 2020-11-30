export const setImageProperties = (image, source, ...classes) => {
  image.src = source;
  image.alt = 'restaurant page image'
  if (classes.length > 0) {
    for (let newClass of classes) {
      image.classList.add(newClass)
    }  
  }
}

