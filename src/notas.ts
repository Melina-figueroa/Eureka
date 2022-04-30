let clave: string;
let intentos: number = 1;
const eureka: string;
while (intentos <= 3 && clave != "eureka") {
  clave = prompt("ingresar clave");
  if (clave === "eureka") {
    console.log("Bienvenido");
  } else {
    console.log("La clave ingresada es incorrecta");
  }
  intentos++;
}
