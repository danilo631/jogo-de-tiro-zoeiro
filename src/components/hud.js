const updateHUD = (score, health) => {
  const scoreElement = document.getElementById("score");
  const healthElement = document.getElementById("health");

  scoreElement.textContent = `Pontos: ${score}`;
  healthElement.textContent = `Saúde: ${health}%`;
};

document.addEventListener("DOMContentLoaded", () => {
  updateHUD(100, 85); // Exemplo de pontuação e saúde
});
