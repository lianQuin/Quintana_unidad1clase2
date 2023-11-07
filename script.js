//Agrega a la pantalla el valor que toquemos en la calculadora
function agregar(valor){
   document.getElementById ('pantalla').value += valor 
}
//Esta acción limpia la pantalla

function borrarcalcula2(){
    document.getElementById('pantalla').value =''
    
}

function borrarcalcula1(){
    document.getElementById('operando1').value =''
    document.getElementById('operando2').value =''
    document.getElementById('resultado').value =''
}
/*Con estas funciones logro que sólo se ingresen números y un sólo decimal si se ingresa más de uno se convierte en cero*/


function limitDecimalPlaces(e, count) {
    if (e.target.value.indexOf('.') == -1) { return; }
    if ((e.target.value.length - e.target.value.indexOf('.')) > count) {
      e.target.value = parseFloat(e.target.value).toFixed(count);
    }
  }
  
function isNumberKey(evt) {
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode != 46 && charCode > 31 &&
      (charCode < 48 || charCode > 57))
      return false;
  
    return true;
  } 


//Esta función calcula los elementos y los muestra en pantalla 
function calcular(){
    const valorPantalla = document.getElementById('pantalla').value
    const resultado=eval(valorPantalla)
    document.getElementById('pantalla').value=resultado
} 

/*esta acción calcula= la función eval() recibe un string y lo ejecuta como una sentencia Javascript.
 En este caso va a recibir un número que concatenado a una operación y otro número será siempre una
 expresión aritmética que eval() solucionará.*/
function calcula(operacion){ 
   	let operando1 = document.calc.operando1.value; 
   	let operando2 = document.calc.operando2.value; 
   	let result = eval(operando1 + operacion + operando2); 
   	document.calc.resultado.value = result; 
} 
