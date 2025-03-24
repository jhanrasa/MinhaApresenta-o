document.addEventListener('DOMContentLoaded', () => {
    console.log("Bem-vindo ao meu site!");
});

// Lógica para o Quiz
function checkQuizAnswer() {
    const correctAnswer = "b"; // Resposta correta: Brasília
    const selectedAnswer = document.querySelector('input[name="quiz-answer"]:checked');
    const resultElement = document.getElementById('quiz-result');

    if (!selectedAnswer) {
        resultElement.textContent = "Por favor, selecione uma resposta!";
        resultElement.style.color = "#6a1b9a";
        return;
    }

    if (selectedAnswer.value === correctAnswer) {
        resultElement.textContent = "Parabéns! Você acertou! 🌟";
        resultElement.style.color = "#2e7d32";
    } else {
        resultElement.textContent = "Ops! A resposta correta é: b) Brasília";
        resultElement.style.color = "#6a1b9a";
    }
}

// Lógica para o Inverte String
function inverteString() {
    const input = document.getElementById('string-input').value;
    const originalElement = document.getElementById('string-original');
    const invertidaElement = document.getElementById('string-invertida');

    if (!input) {
        originalElement.textContent = "Nenhuma string fornecida!";
        invertidaElement.textContent = "";
        return;
    }

    // Inverte a string (replicando o método Java)
    let invertida = '';
    for (let i = input.length - 1; i >= 0; i--) {
        invertida += input.charAt(i);
    }

    // Exibe os resultados
    originalElement.textContent = input;
    invertidaElement.textContent = invertida;
}