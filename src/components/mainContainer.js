const mainContainer = () => {
  const container = document.getElementById('content');
  container.classList.add('d-flex', 'flex-column', 'px-5', 'py-4');

  let child = container.lastElementChild;
  while (child) {
    container.removeChild(child);
    child = container.lastElementChild;
  }
  return container;
};

export default mainContainer;