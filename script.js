// Функція для випадкового перемішування масиву
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Масив, що містить атрибути data-pattern
const cardPatterns = ["pattern1", "pattern2", "pattern3", "pattern4", "pattern5", "pattern6", "pattern7", "pattern8", "pattern9"];

// Випадкове перемішування атрибутів data-pattern
shuffleArray(cardPatterns);

// Отримуємо всі картки і встановлюємо їм перемішані атрибути data-pattern
const cards = document.querySelectorAll('.card');
cards.forEach((card, index) => {
    card.dataset.pattern = cardPatterns[index];
    // Видаляємо текст з картки
    card.textContent = "";
});

let draggedCard = null;

document.addEventListener('dragstart', (event) => {
    if (event.target.classList.contains('card')) {
        draggedCard = event.target;
        event.dataTransfer.setData('text/plain', event.target.dataset.pattern);
    }
});

document.addEventListener('dragover', (event) => {
    event.preventDefault();
});

document.addEventListener('drop', (event) => {
    if (event.target.classList.contains('card') && draggedCard) {
        event.preventDefault();
        const pattern = event.dataTransfer.getData('text/plain');
        const targetPattern = event.target.dataset.pattern;

        // Міняємо місцями атрибути data-pattern на картках
        event.target.dataset.pattern = pattern;
        draggedCard.dataset.pattern = targetPattern;

        draggedCard = null;
    }
});
