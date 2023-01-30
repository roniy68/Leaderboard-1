import './styles.css';
import { scoreList, updateList } from './modules/scorelist';

const scoreBoard = document.getElementById('scoreboard');

updateList(scoreList, scoreBoard);