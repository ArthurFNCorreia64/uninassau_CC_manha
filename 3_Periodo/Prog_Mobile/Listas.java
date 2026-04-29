import java.util.ArrayList;
import java.util.Scanner;

public class Listas {

    //inicialização da lista
    public static void main(String args[]){
        // prepara a leitura de dados do teclado
        Scanner entrada = new Scanner(System.in);
        // cria uma lista onde os números serão guardados
        ArrayList<Integer> lista = new ArrayList<>();
        // inicializa a variável que guarda o valor digitado
        int numero =-1;

        // repete enquanto o usuário não digitar 0
        while (numero !=0){
            System.out.print("Digite um número (0 para sair): ");
            // lê o texto digitado e transforma em número
            numero = Integer.parseInt(entrada.nextLine());
            // só adiciona à lista se não for o valor de saída
            if (numero != 0){
                lista.add(numero);
            }
        }

        System.out.println("Números digitados: ");
        // percorre a lista e imprime cada número
        for (int i = 0; i < lista.size(); i++){
            System.out.println(lista.get(i));
        }
        // fecha o scanner no final
        entrada.close();
    }
}
