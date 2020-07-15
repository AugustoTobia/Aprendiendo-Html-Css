var x,y;
x = 2;
y = 11;

alert (x + y); //muestra "13"
alert (y - x); //muestra "9"
alert (x * y); //muestra "22"
alert (y / x); // muestra "5,5"
alert (++x); // muestra "3"
alert (--y); //muestra "10"
alert (++y); // muestra "11" 

var anio = 365, diasTotales=4563 ,edad=parseInt(diasTotales/anio), dias= ( diasTotales % anio);

alert("tengo" + " " + edad + " " + "años" + " " +"y" + " " + dias + " " + "dias");

var meses =["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
alert (meses[5] + " " + meses[11]); //muestra los valores 5 y 11 es decir julio y diciembre
alert (meses[4] + " " + meses[10]); //muestra los meses 5 y 11, es decir mayo  y noviembre

var valores = [true, false, 0, "hola", "adios", 4, 2];

alert (valores[5] + valores[6]); // muestra 6
alert (valores[5] - valores[6]); // muestra 2
alert (valores[5] * valores[6]); // muestra 8
alert (valores[5] / valores[6]); // muestra 2
alert (valores[5] % valores[6]); // muestra 0

alert (valores[1] == valores[2]); //muestra true
alert (valores[1] === valores[2]); //muestra false

alert (valores [0] && valores[1]); // muestra false
alert (valores[0] || valores[1]); //muestra true