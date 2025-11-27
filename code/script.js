// Código JavaScript para Sweetsholy
// Pode adicionar funcionalidades interativas futuramente

// Menu ativo conforme a rolagem
document.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('.container');
  const links = document.querySelectorAll('nav a');

  let index = sections.length;

  while(--index && window.scrollY + 120 < sections[index].offsetTop) {}

  links.forEach(link => link.classList.remove('active'));
  links[index].classList.add('active');
});

// Botão voltar ao topo
const topBtn = document.createElement('button');
topBtn.textContent = '↑';
topBtn.id = 'topBtn';
document.body.appendChild(topBtn);

topBtn.style.position = 'fixed';
topBtn.style.bottom = '30px';
topBtn.style.right = '30px';
topBtn.style.padding = '10px 14px';
topBtn.style.fontSize = '22px';
topBtn.style.background = '#4b2a74';
topBtn.style.color = '#fff';
topBtn.style.border = 'none';
topBtn.style.borderRadius = '50%';
topBtn.style.cursor = 'pointer';
topBtn.style.display = 'none';
topBtn.style.boxShadow = '0 4px 10px rgba(0,0,0,0.2)';

topBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

document.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    topBtn.style.display = 'block';
  } else {
    topBtn.style.display = 'none';
  }
});
const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');


hamburger.addEventListener('click', () => {
  menu.classList.toggle('show');
});



console.log("Sweetsholy carregado com sucesso!");
