package personas;

class Persona {

    //Atributos de una clase
    String nombre;
    String apellidoPaterno;
    String apellidoMaterno;

    //Metodos de la clase
    public void desplegarNombre() {
        System.out.println("Nombre : " + nombre);
        System.out.println("Apellido Paterno : " + apellidoPaterno);
        System.out.println("Apellido Materno : " + apellidoMaterno);
    }

}
