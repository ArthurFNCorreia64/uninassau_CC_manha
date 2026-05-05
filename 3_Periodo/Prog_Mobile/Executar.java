// Classe de execução que inicia o programa
public class Executar {

    // Método principal que o Java chama ao iniciar o programa
    public static void main (String args []){

        // Cria um objeto Pessoa com nome e idade
        Pessoa pessoa = new Pessoa("Pedro", 28);

        // Chama o método imprimenome para exibir os dados da pessoa no console
        pessoa.imprimenome();

    }
}
