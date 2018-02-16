package palabranull;

public class PalabraNull { //Clase1

    public static void main(String[] args) {
        Persona p1 = new Persona("Juan");
        //Marca error, 
        //no se puede acceder directamente un atributo privado desde otra clase 
        //p1.nombre = "Pedro";
        //Si es posible accederlo
        p1.obtenerNombre();
    }
}

class Persona {

    private String nombre; //Uso de private

    public Persona(String nombre) {
        this.nombre = nombre;
    }

    public String obtenerNombre() {
        return this.nombre; //Uso opcional de this
    }
}
