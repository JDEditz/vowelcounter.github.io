document.addEventListener('DOMContentLoaded', () => {
  const wordInput = document.getElementById('wordInput');
  const countButton = document.getElementById('countButton');
  const result = document.getElementById('result');

  function countVowels(word) {
    const vowels = 'aeiouAEIOU';
    return word.split('').filter(char => vowels.includes(char)).length;
  }

  function updateResult(word) {
    const vowelCount = countVowels(word);
    result.textContent = `Number of vowels: ${vowelCount}`;
    result.style.animation = 'none';
    result.offsetHeight; // Trigger reflow
    result.style.animation = 'pulse 0.3s ease';
  }

  countButton.addEventListener('click', () => {
    updateResult(wordInput.value);
  });

  wordInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      updateResult(wordInput.value);
    }
  });

  // Auto-focus input on page load
  wordInput.focus();
});