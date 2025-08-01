const modal = document.getElementById('modal');
const closeModal = document.getElementById('closeModal');
const viewButtons = document.querySelectorAll('.view-details');

viewButtons.forEach(btn => {
  btn.addEventListener('click', (e) => {
    const card = e.target.closest('.pokemon-card');
    const name = card.dataset.name;
    const id = card.dataset.id;
    const img = card.dataset.img;
    const types = card.dataset.types.split(',');

    document.getElementById('modalName').textContent = `#${id.padStart(3, '0')} ${capitalize(name)}`;
    document.getElementById('modalImg').src = img;

    // Types
    const typeContainer = document.getElementById('modalTypes');
    typeContainer.innerHTML = '';
    types.forEach(type => {
      const span = document.createElement('span');
      span.textContent = capitalize(type);
      span.className = `type-${type}`;
      span.style.backgroundColor = getTypeColor(type);
      typeContainer.appendChild(span);
    });

    modal.classList.remove('hidden');
  });
});

closeModal.addEventListener('click', () => {
  modal.classList.add('hidden');
});

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function getTypeColor(type) {
  const colors = {
    grass: '#78C850',
    poison: '#A040A0',
    fire: '#F08030',
    water: '#6890F0',
    bug: '#A8B820',
    flying: '#A890F0'
  };
  return colors[type] || '#777';
}
