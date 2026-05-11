document.getElementById('year').textContent = new Date().getFullYear();

const memorySelect = document.getElementById('memorySelect');
const memoryInput = document.getElementById('memoryInput');
const shapeSelect = document.getElementById('shapeSelect');
const expressionSelect = document.getElementById('expressionSelect');
const metalSelect = document.getElementById('metalSelect');
const stoneSelect = document.getElementById('stoneSelect');
const settingSelect = document.getElementById('settingSelect');

const conceptTitle = document.getElementById('conceptTitle');
const conceptDetails = document.getElementById('conceptDetails');
const conceptEngraving = document.getElementById('conceptEngraving');
const memoryMark = document.getElementById('memoryMark');
const previewRing = document.querySelector('.preview-ring');
const previewStone = document.querySelector('.preview-stone');
const whatsappLink = document.getElementById('whatsappLink');

function updateConcept() {
  const memoryType = memorySelect.value;
  const memoryValue = memoryInput.value || 'To be added';
  const shape = shapeSelect.value;
  const expression = expressionSelect.value;
  const metal = metalSelect.value;
  const stone = stoneSelect.value;
  const setting = settingSelect.value;

  conceptTitle.textContent = `${memoryType} shaped into a ${shape}`;
  conceptDetails.textContent = `The memory will appear as ${expression.toLowerCase()} on a ${metal} ring with ${stone.toLowerCase()} and a ${setting.toLowerCase()} direction.`;
  conceptEngraving.textContent = `Memory detail: ${memoryValue}`;

  memoryMark.textContent = memoryValue.substring(0, 2).toUpperCase();

  previewRing.classList.remove('organic', 'signet', 'band');

  if (shape.includes('Organic')) {
    previewRing.classList.add('organic');
  } else if (shape.includes('Signet')) {
    previewRing.classList.add('signet');
  } else {
    previewRing.classList.add('band');
  }

  if (stone === 'No stone') {
    previewStone.classList.add('hidden');
  } else {
    previewStone.classList.remove('hidden');
  }

  let message = `Hello Markus Aerin,%0A%0AI would like to begin a bespoke piece.%0A%0AMemory Type: ${memoryType}%0AMemory Detail: ${memoryValue}%0ARing Form: ${shape}%0AExpression: ${expression}%0AMetal: ${metal}%0AStone: ${stone}%0ASetting: ${setting}`;

  whatsappLink.href = `https://wa.me/?text=${message}`;
}

[
  memorySelect,
  memoryInput,
  shapeSelect,
  expressionSelect,
  metalSelect,
  stoneSelect,
  settingSelect
].forEach(element => {
  element.addEventListener('input', updateConcept);
});

updateConcept();
