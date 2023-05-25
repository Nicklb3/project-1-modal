// variables
const openBtn = document.querySelector('.open');
const modalContainer = document.querySelector('.modal-container');
const closeBtn = document.querySelector('.modal-btn');

// Grabbed our open button and added our dymanic .show class to it  
openBtn.addEventListener('click', function () {
    modalContainer.classList.add('show');    
});

// Grabbed our close button and removed our dymanic .show class from it
closeBtn.addEventListener('click', function () {
    modalContainer.classList.remove('show');    
});

