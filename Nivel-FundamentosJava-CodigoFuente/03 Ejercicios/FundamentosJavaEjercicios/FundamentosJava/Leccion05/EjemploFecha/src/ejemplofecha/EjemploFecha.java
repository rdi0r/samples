package ejemplofecha;

import java.util.Scanner;

public class EjemploFecha {

    public static void main(String[] args) {

        Scanner ftext = new Scanner(System.in);

        System.out.print("Ingrese Dia, Mes, Año: ");
        int dia = ftext.nextInt();
        int mes = ftext.nextInt();
        int anio = ftext.nextInt();
        Fecha f1 = new Fecha(dia, mes, anio);

        System.out.print("Ingrese Dia, Mes, Año: ");
        dia = ftext.nextInt();
        mes = ftext.nextInt();
        anio = ftext.nextInt();
        Fecha f2 = new Fecha(dia, mes, anio);

        //System.out.println("La Fecha1 es: "+f1.toString());
        //System.out.println("La Fecha2 es: "+f2.toString());
        if (f1.equals(f2)) {
            System.out.println("Son igules");

        } else {
            System.out.println("Son diferentes");
        }

        System.out.println(f1);
        System.out.println(f2);

    }

}
