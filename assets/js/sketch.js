//Mosaico Alexx
let backgroundColor;
let remixA, remixB, remixC;

function setup() {
  // displayWidth/Height hará que el patrón se acople a cualquier medida de pantalla.
  createCanvas(displayWidth, displayHeight);

  //Estos serán los tres argumentos aplicados al Background. Como consecuencia el fondo cambia de color cada vez que presionamos 'start'.
  backgroundColor = (random(10, 255), random(30, 220), random(0, 255));

  // Por otra parte, estos son los colores de cada figura, son tres grupos porque al aplicar uno a todas las figuras cambiaban todas al mismo color (parece obvio pero no lo és), de esta manera cambian de color de forma independiente.
  remixA = color(random(255), random(255), random(255));
  remixB = color(random(255), random(255), random(255));
  remixC = color(random(255), random(255), random(255));
}

function draw() {
  background(backgroundColor);

  // Son los bucles que hacen que el patrón se repita, como la segunda expresión indica el patrón se repetirá las veces que sea necesario hasta abarcar todo el canvas.
  for (posY = 0; posY < displayHeight; posY = posY + 60) {
    for (posX = 0; posX < displayWidth; posX = posX + 100) {
   
      //Es el llamado de la función que contiene la figura base del patrón. Tiene posX y posY = -13, funciona perfectamente en 0,0 o cualquier otra coordenada, pero me agradó más como se ve de está forma.
      patron(posX - 13, posY - 13);
    }
  }

  //Es la función que contiene la figura base del patrón, en este caso formada por otras 5 formas, cuatro de ellas primitivas (cuadrado, triángulo, círculo y línea) y un beginShape.
  // Se rellenan de colores aleatorios usando las variantes antes mencionadas.
  function patron(posX, posY) {
    fill(remixA);
    beginShape();
    vertex(posX + 10, posY + 40);
    vertex(posX + 40, posY + 10);
    vertex(posX + 60, posY + 30);
    vertex(posX + 80, posY + 10);
    vertex(posX + 110, posY + 40);
    vertex(posX + 80, posY + 70);
    vertex(posX + 60, posY + 50);
    vertex(posX + 40, posY + 70);
    vertex(posX + 10, posY + 40);
    endShape(CLOSE);

    fill(remixB);
    quad(
      posX + 50,
      posY + 70,
      posX + 60,
      posY + 60,
      posX + 70,
      posY + 70,
      posX + 60,
      posY + 80
    );

    fill(remixB);
    circle(posX + 10, posY + 70, 20);

    fill(remixC);
    triangle(posX + 20, posY + 40, posX + 40, posY + 20, posX + 40, posY + 60);
    triangle(posX + 80, posY + 20, posX + 100, posY + 40, posX + 80, posY + 60);

    line(posX + 50, posY + 40, posX + 70, posY + 40);
  }
}
