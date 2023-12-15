// Animación al hacer clic en un botón
const animButton = document.getElementById('animButton');
const animatedElement = document.getElementById('animatedElement');

animButton.addEventListener('click', () => {
  animatedElement.classList.add('move-right');
});

// Cambiar color de fondo al pasar el ratón sobre el menú de navegación
const menuLinks = document.querySelectorAll('.menu a');

menuLinks.forEach(link => {
  link.addEventListener('mouseover', () => {
    link.style.backgroundColor = '#ffcc00';
  });

  link.addEventListener('mouseout', () => {
    link.style.backgroundColor = 'transparent';
  });
});

// Cambiar texto al hacer clic en un enlace de la página
const changeTextLink = document.getElementById('changeTextLink');
const textToChange = document.getElementById('textToChange');

changeTextLink.addEventListener('click', () => {
  textToChange.textContent = 'Texto cambiado al hacer clic en el enlace.';
});

//train.onload

train.onload= function() {   
  let start = Date.now();

  let timer = setInterval(function() {
    let timePassed = Date.now() - start;

    train.style.left = timePassed / 1.2 + 'px';

    if (timePassed > 1000) clearInterval(timer);

  }, 10);
}

<script src="https://youtu.be/BGOuv4gCk_Y?si=A39ZgfTFqXIL3LN_"></script>
    </body>
    </html>
    
    // Crea los copos de nieve con JavaScript

  // Función para generar un número aleatorio entre dos valores
  function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // Función para crear los copos de nieve
  function createSnowflakes() {
    // Obtener el ancho y alto de la pantalla
    var screenWidth = window.innerWidth;
    var screenHeight = window.innerHeight;
    
    // Crear varios copos de nieve
    for (var i = 0; i < 500; i++) {
      // Crear un nuevo elemento div para el copo de nieve
      var snowflake = document.createElement("div");
      snowflake.classList.add("snowflake");

      // Establecer el tamaño y la posición aleatoria del copo de nieve
      var size = random(5, 15);
      snowflake.style.width = size + "px";
      snowflake.style.height = size + "px";
      snowflake.style.left = random(0, screenWidth) + "px";
      snowflake.style.top = random(-screenHeight, 0) + "px";

      // Establecer la velocidad de caída del copo de nieve
      var speed = random(3, 9); // Modificado de 2-8 a 3-9
      snowflake.style.animationDuration = speed + "s";

      // Añadir el copo de nieve al cuerpo del documento
      document.body.appendChild(snowflake);
    }
  }

  // Llamar a la función para crear los copos de nieve al cargar la página
  window.onload = createSnowflakes;
