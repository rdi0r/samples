
package ejemplofecha;

public class Fecha {

    private int dia;
    private int mes;
    private int anio;

    //Constructor crea los objetos  --> esto anula los setters
    public Fecha(int d, int m, int a) {
        this.dia = d;
        this.mes = m;
        this.anio = a;

    }

    public int getDia() {
        return dia;
    }

    public void setDia(int dia) {
        this.dia = dia;
    }

    public int getMes() {
        return this.mes;
    }

    public void setMes(int mes) {
        this.mes = mes;
    }

    public int getAnio() {
        return anio;
    }

    public void setAnio(int anio) {
        this.anio = anio;
    }

    @Override
    public int hashCode() {
        int hash = 3;
        hash = 97 * hash + this.dia;
        hash = 97 * hash + this.mes;
        hash = 97 * hash + this.anio;
        return hash;
    }

    @Override
    public boolean equals(Object obj) {
        if (obj == null) {
            return false;
        }
        if (getClass() != obj.getClass()) {
            return false;
        }
        final Fecha other = (Fecha) obj;
        if (this.dia != other.dia) {
            return false;
        }
        if (this.mes != other.mes) {
            return false;
        }
        if (this.anio != other.anio) {
            return false;
        }
        return true;
    }

    
    
}
