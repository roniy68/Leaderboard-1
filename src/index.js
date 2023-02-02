import './styles.css';
import updateList from './modules/scorelist';
import { getScore, postScore } from './modules/generate_api';

const scoreBoard = document.getElementById('scoreboard');
const refreshBtn = document.getElementById('refresh-btn');
const submitForm = document.querySelector('.input-score');
const player = document.getElementById('name');
const score = document.getElementById('score');

const updateScore = async () => {
  const fetchAPI = await getScore();
  const updatedList = fetchAPI.result;
  updatedList.sort((a, b) => a.score - b.score);
  updateList(updatedList);
};

refreshBtn.addEventListener('click', async () => {
  scoreBoard.innerHTML = '';
  await updateScore();
});

submitForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const playerName = player.value;
  const playerScore = score.value;
  await postScore({ playerName, playerScore });
  player.value = '';
  score.value = '';
});