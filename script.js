//Mejoras para el script
//Sacar la parte de la comprobación de la estación actual en una función diferente
//Para sacar los meses: getMonth!!
//if (goalDate.getTime() < current.getTime()){
//goalDate.setFullYear(currentDate.getFullYear()+1);
//}

let daysElement = document.getElementById('days');
let hoursElement = document.getElementById('hours');
let minutesElement = document.getElementById('minutes');
let secondsElement = document.getElementById('seconds');

let currentDate = new Date();
let birthday = new Date(2024, 0, 26, 0, 0, 0); // Cumpleaños a las 00:00h


let autumn = new Date(2023, 8, 23);
let winter = new Date(2023, 11, 22);
let spring = new Date(2024, 2, 20);
let summer = new Date(2024, 5, 20);

let autumnImage = 'url(./img/autumn.jpg)';
let winterImage = 'url(./img/winter.jpg)';
let springImage = 'url(./img/spring.jpg)';
let summerImage = 'url(./img/summer.jpg)';
let currentSeasonImage;

let days, hours, minutes, seconds;

// La función de la cuenta atrás se irá llamando con el intervalo
let countdownInterval = setInterval(countdown, 1000); // Actualizaremos cada segundo

countdown();

// Función de la cuenta atrás
function countdown() {
//currentDate = new Date(2024, 0, 28); // Prueba de invierno
//currentDate = new Date(2024, 2, 27); // Prueba de primavera 
//currentDate = new Date(2024, 5, 27); // Prueba de verano
//currentDate = new Date(2024, 10, 1); // Prueba de otoño 
//currentDate = birthday; // Prueba de cumpleaños
  
  currentDate = new Date();

  // Comprobamos si el cumpleaños de este año ya ha pasado
  if (currentDate > birthday) {
    // Ajustamos la fecha de cumpleaños al próximo año 
    birthday = new Date(currentDate.getFullYear() + 1, 0, 26, 7, 0, 0);
  } 
  
  // Calculamos la diferencia entre la fecha actual y el próximo cumpleaños
  let timeDifference = birthday - currentDate;

  // Calculamos días, horas, minutos y segundos
  days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  // Actualizamos los elementos en el documento
  daysElement.textContent = days;
  hoursElement.textContent = hours;
  minutesElement.textContent = minutes;
  secondsElement.textContent = seconds;

  // Obtenemos la estación del año según la fecha actual
  if ((currentDate >= autumn && currentDate <= winter) || (currentDate.getMonth() === 11 && currentDate.getDate() <= 22)) {
    currentSeasonImage = autumnImage; // Otoño
  } else if (currentDate >= winter && currentDate < spring) {
    currentSeasonImage = winterImage; // Invierno
  } else if (currentDate >= spring && currentDate < summer) {
    currentSeasonImage = springImage; // Primavera
  } else if (currentDate >= summer && currentDate < new Date(2024, 8, 23)) {
    currentSeasonImage = summerImage; // Verano
  }  else{currentSeasonImage = autumnImage; 
  }

  // Aplicamos el estilo de la estación del año
  document.body.style.backgroundImage = currentSeasonImage;

  
  // Comprobamos si es el día de mi cumpleaños y si lo es, llamamos a la función showBirthday
  if (currentDate.getDate() === birthday.getDate() && currentDate.getMonth() === birthday.getMonth()) {
    showBirthday();
  }
}

//Función que muestra el estilo del cumpleaños
function showBirthday() {
  //Ocultaremos el div que contiene el contador y "Mi cumpleaños en"
  const todoTextoDiv = document.querySelector('.todoTexto');
  todoTextoDiv.style.display = 'none';

  //Aplicamos el fondo de la estación del año que corresponda
  document.body.style.backgroundImage = currentSeasonImage;

  //Mostraremos el div "felizCumpleanhos" que contiene un mensaje de felicidades y una imagen
  const felizCumpleanhosDiv = document.getElementById('felizCumpleanhos');
  felizCumpleanhosDiv.classList.remove('noColorImage');

  //Detendremos el contador
  clearInterval(countdownInterval);
}

//Llamamos a la función countdown para iniciar de nuevo la cuenta atrás
countdown();

