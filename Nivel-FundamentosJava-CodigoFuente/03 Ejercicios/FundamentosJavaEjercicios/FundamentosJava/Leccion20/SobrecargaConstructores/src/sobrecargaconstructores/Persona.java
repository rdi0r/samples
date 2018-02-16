package sobrecargaconstructores;

public class Persona {

    private int idPersona;
    private String nombre;
    private int edad;
    private static int contadorPersonas;

    //Constructor sin argumentos y privado
    //Asigna el idPersona
    private Persona() {
        this.idPersona = ++contadorPersonas;
    }

    //Constructor completo sobrecargado
    public Persona(String nombre, int edad) {
        //Se manda a llamar el constructor vacio para que se asigne el idPersona
        this();
        this.nombre = nombre;
        this.edad = edad;
    }

    @Override
    public String toString() {
        return "Persona{" + "idPersona=" + idPersona + ", nombre=" + nombre + ", edad=" + edad + '}';
    }
}
