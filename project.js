[1:47 pm, 21/10/2024] Dev 719: Yea
[2:26 pm, 21/10/2024] Dev 719: const languageCards = document.querySelectorAll('.language-card');

languageCards.forEach(card => {
  card.addEventListener('mouseover', () => {
    card.style.transform = 'scale(1.1) rotateY(5deg)';
    card.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.3)';
  });

  card.addEventListener('mouseout', () => {
    card.style.transform = 'scale(1) rotateY(0deg)';
    card.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.1)';
  }})