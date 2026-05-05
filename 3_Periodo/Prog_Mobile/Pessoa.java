// Classe que representa uma pessoa com nome e idade
public class Pessoa {

    // Atributo que guarda o nome da pessoa
    public String nome;

    // Atributo que guarda a idade da pessoa
    public int idade;

    // Construtor que inicializa apenas o nome
    public Pessoa(String n) {
        nome = n;
    }

    // Construtor que inicializa nome e idade
    public Pessoa(String n, int i) {
        nome = n;
        idade = i;
    }

    // Método que imprime no console o nome e a idade da pessoa
    void imprimenome() {
        System.out.println("O nome dessa pessoa é: " + nome + "\nE sua idade é: " + idade + " anos.");
    }
}