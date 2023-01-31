const gameScoreUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/RpJOyfVRNXw0MDhVPK99/scores/';
const userName = document.getElementById('name');
const score = document.getElementById('score');

const getScore = async () => {
  const scores = await fetch(gameScoreUrl, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  return scores.json();
};

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