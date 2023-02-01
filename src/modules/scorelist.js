const updateList = (result) => {
  const scoreBoard = document.getElementById('scoreboard');
  let scoreBoardContainer = '';
  result.forEach((element) => {
    const { user, score } = element;
    scoreBoardContainer += `<li>
      <p>${user} :${score}</p>
      </li>`;
  });
  scoreBoard.innerHTML = scoreBoardContainer;
};

export default updateList;