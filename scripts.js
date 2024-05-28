let app = document.getElementById('tituloSerie');
 
let titulo = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
titulo
  .pauseFor(2500)
  .typeString('Descubre porqué FRIENDS es mi serie favorita')
  .pauseFor(100)
  .deleteChars(10)
  .start();