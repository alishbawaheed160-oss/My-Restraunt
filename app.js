
document.addEventListener('DOMContentLoaded', () => {

    // Mobile navigation
    const toggle = document.getElementById('menuToggle');
    const nav = document.getElementById('mainNav');

    if (toggle && nav) {

        toggle.addEventListener('click', () => {
            nav.classList.toggle('open');
        });

        nav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('open');
            });
        });
    }

    // Automatic current year
    const year = document.getElementById('year');

    if (year) {
        year.textContent = new Date().getFullYear();
    }

    // Booking form
    const bookingForm = document.getElementById('bookingForm');

    if (bookingForm) {

        const dateInput = bookingForm.querySelector('input[type="date"]');

        if (dateInput) {

            const today = new Date();

            const localToday = new Date(
                today.getTime() - today.getTimezoneOffset() * 60000
            ).toISOString().split('T')[0];

            dateInput.min = localToday;
        }

        bookingForm.addEventListener('submit', event => {

            event.preventDefault();

            const data = new FormData(bookingForm);

            const message = document.getElementById('formMessage');

            message.textContent =
                `Thank you, ${data.get('name')}! Your table request has been received. We will contact you to confirm.`;

            bookingForm.reset();
        });
    }

});
