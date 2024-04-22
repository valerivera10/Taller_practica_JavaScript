let menu = "1. Ejercicio1\n2. Ejercicio2\n3. Ejercicio3\n4. Ejercicio4\n5. Ejercicio5\n6. Ejercicio6\n7. Ejercicio7\n8. Ejercicio8\n9.Ejercicio#9\n10. Ejercicio10\n11. Ejercicio11\n12. Ejercicio12\n13. Ejercicio13\n14. Ejercicio14\n15. Ejercicio15\n16. Ejercicio16\n17. Ejercicio17\n18. Salir"

do{

    opcion = parseInt(prompt(menu))
    switch(opcion){
        case 1:
            pasword = prompt('Ingrese su contraseña')

            function contrasenaValida (pasword){
                if ((pasword === "2Fj(jjbFsuj") || (pasword === "eoZiugBf&g9")){
                    return true
                }
                else {
                    return false
                }
            }

            console.log(contrasenaValida(pasword));
            break;

        case 2:
            Edad = prompt('Ingrese la edad: ')
            Ingresos = prompt('Ingrese los ingresos: ')
            
            function CalcularImpuestos (Edad, Ingresos) {
                if ((Edad >= 18) && (Ingresos>=1000)) {
                    console.log(Ingresos * 0.4)
                    return 
                }
                else {
                    return
                }
            }

            console.log(CalcularImpuestos (Edad, Ingresos))
            break;

        case 3:
            Peso =prompt('Ingrese su peso: ')
            Altura =prompt('Ingrese su altura: ')
            BMI = Peso/ Altura**2
            console.log(BMI)

            function IMC (Peso, Altura) {
                if (BMI < 18.5) {
                console.log('Bajo peso')
                }

                else if ((BMI >= 18.5) && (BMI <= 24.9)) {
                console.log('Normal')
                }

                else if ((BMI>= 25) && (BMI<=29.9)) {
                console.log('Soprepeso')
                }

                else if (BMI>= 30) {
                console.log('Obeso')
                }

            }

        case 4:
            
            console.log(IMC (Peso, Altura))
            break
    }
}while (opcion != 18)
alert('Gracias')