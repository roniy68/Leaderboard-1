const gameScoreUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Qc8Crttfp6u4HrkOhxwH/scores';
const userName = document.getElementById('name');
const score = document.getElementById('score');

// GET to get a list of scores for the given game
const getScore = async () => {
  const scores = await fetch(gameScoreUrl, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  return scores.json();
};
// POST to create a new score for the given game
const postScore = async () => {
  const postScores = await fetch(gameScoreUrl, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify(
      {
        user: userName.value,
        score: score.value,
      },
    ),

  });
  return postScores.json();
};

export { getScore, postScore };