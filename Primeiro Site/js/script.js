document.addEventListener('DOMContentLoaded', () => {
  // alerta no inicio 
  alert('Bem-vindo A Vida e Paz');
// alerta formulario parte que falta preencher
 const form = document.querySelector('.form-container form');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
   const email = form.querySelector('input[type="email"]').value.trim();
    const telefone = form.querySelector('input[type="tel"]').value.trim();
    const cpf = form.querySelector('input[type="text"]').value.trim();
    if (email && telefone && cpf) 
      {alert('Cadastro Feito com Sucesso.');
      form.reset(); } 
      else {alert('Por favor, preencha todos os campos antes de enviar.');} });  
  // efeito youtube 3:45 parte de baixo arrumada pelo gpt nao esquecer pontos, (fechamento e abertura)
  const topics = document.querySelectorAll('.topic');
    topics.forEach((topic) => {
    topic.addEventListener('mouseenter', () => {
      topic.style.transform = 'scale(1.05)';
      topic.style.transition = 'transform 0.3s ease'; });
    topic.addEventListener('mouseleave', () => {
      topic.style.transform = 'scale(1)';
    });
  });
});
