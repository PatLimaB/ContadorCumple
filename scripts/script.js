let daysElement = document.getElementById('days');
let hoursElement = document.getElementById('hours');
let minutesElement = document.getElementById('minutes');
let secondsElement = document.getElementById('seconds');
let birthdayImage = document.getElementById('birthdayImage');

let currentDate = new Date();
let birthday = new Date(2024, 0, 26, 7, 0, 0); // Cumpleaños a las 7:00 AM

let autumn = new Date(2023, 8, 23);
let winter = new Date(2023, 11, 22);
let spring = new Date(2024, 2, 20);
let summer = new Date(2024, 5, 20);

let autumnImage = 'url(./img/autumn.jpg)';
let winterImage = 'url(./img/winter.jpg)';
let springImage = 'url(./img/spring.jpg)';
let summerImage = 'url(./img/summer.jpg)';

let days, hours, minutes, seconds;

// La función de la cuenta atrás se irá llamando con el intervalo
let countdownInterval = setInterval(countdown, 1000); // Actualizar cada segundo
countdown();

// Función de la cuenta atrás
function countdown() {
  //currentDate = new Date(2024, 0, 28); //prueba invierno
  //currentDate = new Date(2024, 5, 27); //prueba primavera
  //currentDate = new Date(2024, 8, 27); //prueba verano
  currentDate = birthday; //prueba cumple

  //currentDate = new Date();
  let timeDifference = birthday - currentDate;

  // Cuando el tiempo llegue a 0, se llamará a la función showBirthday y se pondrá a cero el contador
  if (
    currentDate.getDate() === birthday.getDate() &&
    currentDate.getMonth() === birthday.getMonth() &&
    currentDate.getFullYear() === birthday.getFullYear()
  ) {
    showBirthday();
    return;
  }

  days = Math.floor(timeDifference / (24 * 60 * 60 * 1000)); // Días restantes
  hours = Math.floor((timeDifference % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000)); // Horas restantes
  minutes = Math.floor((timeDifference % (60 * 60 * 1000)) / (60 * 1000)); // Minutos restantes
  seconds = Math.floor((timeDifference % (60 * 1000)) / 1000); // Segundos restantes

  daysElement.innerHTML = days;
  hoursElement.innerHTML = hours;
  minutesElement.innerHTML = minutes;
  secondsElement.innerHTML = seconds;

  //Cambiaremos el estilo según la estación
  if (currentDate >= summer && currentDate < autumn) {
    document.body.style.backgroundImage = summerImage; //Verano
  } else if (currentDate >= autumn && currentDate < winter) {
    document.body.style.backgroundImage = autumnImage; // Otoño
  } else if (currentDate >= winter && currentDate < spring) {
    document.body.style.backgroundImage = winterImage; // Invierno
  } else if (currentDate >= spring && currentDate < summer) {
    document.body.style.backgroundImage = springImage; // Primavera
  }
}

// Mostrar cumpleaños
function showBirthday() {
  birthdayImage.classList.remove('noColorImage');
  clearInterval(countdownInterval);
}
