import java.util.LinkedList;
import java.util.Queue;

public class Filas{
    public static void main(String args[]){

        //inicialização da fila

        Queue<String> fila = new LinkedList<>();

        //adicionando elementos na fila

        fila.add("Primeiro elemento");
        fila.add("Segundo elemento");
        fila.add("Terceiro elemento");

        //exibindo a fila

        System.out.println("Fila: ");
        System.out.println(fila);

        //tamanho da fila

        System.out.println("Tamanho da fila: ");
        System.out.println(fila.size());

        //removendo o elemento do início da fila

        fila.remove();
        System.out.println("Fila após remover o elemento do início: ");
        System.out.println(fila);
    }
}