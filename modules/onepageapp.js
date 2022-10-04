const onepage = () => {
  const bookList = document.querySelector('.list-link');
  const addNew = document.querySelector('.add-new');
  const contact = document.querySelector('.contact');

  const bookSection = document.querySelector('.books-list');
  const addNewSection = document.querySelector('.form');
  const contactSection = document.querySelector('.contact-container');
  bookSection.style.display = 'none';
  bookList.addEventListener('click', () => {
    bookSection.style.display = 'block';
    addNewSection.style.display = 'none';
    contactSection.style.display = 'none';
  });
  addNew.addEventListener('click', () => {
    bookSection.style.display = 'none';
    addNewSection.style.display = 'block';
    contactSection.style.display = 'none';
  });
  contact.addEventListener('click', () => {
    bookSection.style.display = 'none';
    addNewSection.style.display = 'none';
    contactSection.style.display = 'block';
  });
};

export default onepage();
