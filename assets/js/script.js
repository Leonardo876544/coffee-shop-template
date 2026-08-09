/* =======================
Gallery Filter
========================== */

const buttons = document.querySelectorAll('.filter-btn');
const galleryCards = document.querySelectorAll('.gallery-card');

buttons.forEach(button => {

button.addEventListener('click', () => {

    buttons.forEach(btn => {
    btn.classList.remove('active');

});

        button.classList.add('active');

        const filterValue = button.dataset.filter;

        galleryCards.forEach(card => {

            const cardCategory = card.dataset.category;

            if (filterValue === 'all' || filterValue === cardCategory) {
                card.classList.remove('hide');
            } else {
                card.classList.add('hide');
            }

        });

    });

});
