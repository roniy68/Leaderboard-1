const scoreList = [
  { name: 'Joshua', score: 100 },
  { name: 'Alwyn', score: 20 },
  { name: 'Chase', score: 55 },
  { name: 'Dami', score: 62 },
  { name: 'King', score: 70 },
  { name: 'Casey', score: 18 },
  { name: 'Greta', score: 44 },
  { name: 'Daphine', score: 48 },
  { name: 'Jason', score: 88 },
];

const updateList = (list, listContainer) => {
  let scoreBoardContainer = '';
  list.forEach((element) => {
    const { name, score } = element;
    scoreBoardContainer += `<li>
        <p>${name} :${score}</p>
        </li>`;
  });
  listContainer.innerHTML = scoreBoardContainer;
};

export { scoreList, updateList };