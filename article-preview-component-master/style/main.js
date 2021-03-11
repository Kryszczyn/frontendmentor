let shareBtn = document.querySelector('.share-btn');
let tooltip = document.querySelector('.tooltip');
shareBtn.classList.remove('share-mobile-btn')
shareBtn.addEventListener('click', () => {
    tooltip.classList.toggle('show');
    shareBtn.classList.toggle('active');
});