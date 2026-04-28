import java.util.Stack;

public class Pilhas {
    public static void main(String args[]){

        //inicialização da pilha

        Stack<String> pilha = new Stack<>();

        //adicionando elementos na pilha

        pilha.push("Primeiro elemento");
        pilha.push("Segundo elemento");
        pilha.push("Terceiro elemento");

        //exibindo a pilha

        System.out.println("Pilha: ");
        System.out.println(pilha);

        //tamanho da pilha

        System.out.println("Tamanho da pilha: ");
        System.out.println(pilha.size());

        //removendo o elemento do topo da pilha

        pilha.pop();
        System.out.println("Pilha após remover o elemento do topo: ");
        System.out.println(pilha);


    }
}