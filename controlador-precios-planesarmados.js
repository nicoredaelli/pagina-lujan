//Cuando ocurre el evento página Web cargada el navegador llama a la función DocumentoCargado()
window.onload=DocumentoCargado; 

//En esta función se capturan todos los eventos requeridos por el script
function DocumentoCargado(){
   let checkboxP1 = document.getElementById("P1"); //obtiene los elementos del documento html y los asigna a variables
   let checkboxP2 = document.getElementById("P2"); 
   let checkboxP3 = document.getElementById("P3");
   let checkboxP4 = document.getElementById("P4");
   let checkboxP5 = document.getElementById("P5");
   let checkboxP6 = document.getElementById("P6");

   let cantpersonasP1 = document.getElementById("cantP1");
   let cantpersonasP2 = document.getElementById("cantP2");
   let cantpersonasP3 = document.getElementById("cantP3");
   let cantpersonasP4 = document.getElementById("cantP4");
   let cantpersonasP5 = document.getElementById("cantP5");
   let cantpersonasP6 = document.getElementById("cantP6");

   cantpersonasP1.onchange = selectp1personas; // Se ejecuta la función selectp1personas() cuando ocurre el evento
   cantpersonasP2.onchange = selectp2personas;
   cantpersonasP3.onchange = selectp3personas;
   cantpersonasP4.onchange = selectp4personas;
   cantpersonasP5.onchange = selectp5personas;
   cantpersonasP6.onchange = selectp6personas;

   checkboxP1.onclick = checkboxP1Apretado; 
   checkboxP2.onclick = checkboxP2Apretado;
   checkboxP3.onclick = checkboxP3Apretado;
   checkboxP4.onclick = checkboxP4Apretado;
   checkboxP5.onclick = checkboxP5Apretado;
   checkboxP6.onclick = checkboxP6Apretado;

   MostrarPrecioTotal(); // llama a la función 
}
//Cuando el usuario aprieta el checkbox, se debe mostrar u ocultar el objeto select

function checkboxP1Apretado()
{
   if(document.getElementById("P1").checked == true)
   {
       document.getElementById("MostrarP1").style.display = "block";
   }
   else
   {
       document.getElementById("MostrarP1").style.display = "none";
   }
   MostrarPrecioTotal();
}
function checkboxP2Apretado()
{
   if(document.getElementById("P2").checked == true)
   {
       document.getElementById("MostrarP2").style.display = "block";
   }
   else
   {
       document.getElementById("MostrarP2").style.display = "none";
   }
   MostrarPrecioTotal();
}
function checkboxP3Apretado()
{
   if(document.getElementById("P3").checked == true)
   {
       document.getElementById("MostrarP3").style.display = "block";
   }
   else
   {
       document.getElementById("MostrarP3").style.display = "none";
   }
   MostrarPrecioTotal();
}
function checkboxP4Apretado()
{
   if(document.getElementById("P4").checked == true)
   {
       document.getElementById("MostrarP4").style.display = "block";
   }
   else
   {
       document.getElementById("MostrarP4").style.display = "none";
   }
   MostrarPrecioTotal();
}
function checkboxP5Apretado()
{
   if(document.getElementById("P5").checked == true)
   {
       document.getElementById("MostrarP5").style.display = "block";
   }
   else
   {
       document.getElementById("MostrarP5").style.display = "none";
   }
   MostrarPrecioTotal();
}
function checkboxP6Apretado()
{
   if(document.getElementById("P6").checked == true)
   {
       document.getElementById("MostrarP6").style.display = "block";
   }
   else
   {
       document.getElementById("MostrarP6").style.display = "none";
   }
   MostrarPrecioTotal();
}
// En base a los checkbox y los objetos select, esta función calcula el precio total
function MostrarPrecioTotal()
{
  let precio = 0;

  if (document.getElementById("P1").checked == true)
  {
      precio += 9000 * document.getElementById("cantP1").value;
  }

  if (document.getElementById("P2").checked == true)
  {
      precio += 9900 * document.getElementById("cantP2").value;
  }
  if (document.getElementById("P3").checked == true)
  {
      precio += 9090 * document.getElementById("cantP3").value;
  }
  if (document.getElementById("P4").checked == true)
  {
      precio += 9990 * document.getElementById("cantP4").value;
  }
  if (document.getElementById("P5").checked == true)
  {
      precio += 9000 * document.getElementById("cantP5").value;
  }
  if (document.getElementById("P6").checked == true)
  {
      precio += 9000 * document.getElementById("cantP6").value;
  }
  document.getElementById("preciototal1").innerHTML= "precio: $" + precio;
}
//Se ejecuta cuando cambia el valor del select
function selectp1personas()
{
  MostrarPrecioTotal();
}
function selectp2personas()
{
  MostrarPrecioTotal();
}
function selectp3personas()
{
  MostrarPrecioTotal();
}
function selectp4personas()
{
  MostrarPrecioTotal();
}
function selectp5personas()
{
  MostrarPrecioTotal();
}
function selectp6personas()
{
  MostrarPrecioTotal();
}


