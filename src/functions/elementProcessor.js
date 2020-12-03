/* eslint-disable no-restricted-syntax */

export const setImageProperties = (image, source, ...classes) => {
  image.src = source;
  image.alt = 'restaurant page image';
  if (classes.length > 0) {
    for (const newClass of classes) {
      image.classList.add(newClass);
    }
  }
};

export const appendOnScroll = (parentElement, referenceElementClass, index, ...childElements) => {
  let iswindowScrolled = false;
  let referenceElement = document.getElementsByClassName(referenceElementClass)[index];
  window.addEventListener('scroll', () => {
    if (referenceElement === undefined) {
      referenceElement = document.getElementsByClassName(referenceElementClass)[index];
    }
    /* eslint-disable max-len */
    if (referenceElement !== undefined && window.scrollY > (referenceElement.offsetTop / 2) && !iswindowScrolled) {
      for (const child of childElements) {
        parentElement.append(child);
      }
      iswindowScrolled = true;
    }
    /* eslint-enable max-len */
  });
};

export const setPagedivider = (text) => {
  const divider = document.createElement('h5');
  divider.innerText = text;
  divider.classList.add('align-self-center', 'divider-line');
  return divider;
};
