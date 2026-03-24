public class Tipos_Variavel{
    byte MeuByte = 52;
// O tipo byte é um tipo de dado inteiro que ocupa 8 bits de memória. Ele pode armazenar valores inteiros que variam de -128 a 127. O byte é frequentemente usado para economizar espaço em situações onde os valores não precisam ser muito grandes, como em arrays de bytes ou para representar caracteres em algumas codificações.

    short MeuShort = 2500;
// O tipo short é um tipo de dado inteiro que ocupa 16 bits de memória. Ele pode armazenar valores inteiros que variam de -32.768 a 32.767. É usado quando o int é muito grande, mas ainda assim precisa de mais espaço que o byte.

    int MeuInteiro = 70000;
// O tipo int é um tipo de dado inteiro que ocupa 32 bits de memória. Ele pode armazenar valores inteiros que variam de -2.147.483.648 a 2.147.483.647. É o tipo inteiro mais comum em Java.

    long MeuLong = 420000000;
// O tipo long é um tipo de dado inteiro que ocupa 64 bits de memória. Ele pode armazenar valores inteiros que variam de -9.223.372.036.854.775.808 a 9.223.372.036.854.775.807. É usado para números muito grandes.

    float MeuFloat = 3.20f;
// O tipo float é um tipo de dado de ponto flutuante que ocupa 32 bits de memória. Ele pode armazenar números decimais com precisão simples. Deve ser seguido por 'f' para indicar que é um float.

    double MeuDouble = 3.14132;
// O tipo double é um tipo de dado de ponto flutuante que ocupa 64 bits de memória. Ele pode armazenar números decimais com precisão dupla. É o tipo padrão para números decimais em Java.

    boolean MeuBoolean = true;
// O tipo boolean é um tipo de dado lógico que pode armazenar apenas dois valores: true (verdadeiro) ou false (falso). É usado para expressões condicionais e controle de fluxo.

    char MeuChar = 'J';
// O tipo char é um tipo de dado que representa um único caractere Unicode. Ele ocupa 16 bits de memória e pode armazenar qualquer caractere, como letras, números ou símbolos.

    String Nome = "Josivan";
// O tipo String é uma classe em Java que representa uma sequência de caracteres. Não é um tipo primitivo, mas é amplamente usado para manipular texto. Strings são imutáveis em Java.

    public static void main(String[] args) {
        Tipos_Variavel exemplo = new Tipos_Variavel();
        
        System.out.println("Exemplo de tipos de variáveis em Java:");
        System.out.println("byte: " + exemplo.MeuByte);
        System.out.println("short: " + exemplo.MeuShort);
        System.out.println("int: " + exemplo.MeuInteiro);
        System.out.println("long: " + exemplo.MeuLong);
        System.out.println("float: " + exemplo.MeuFloat);
        System.out.println("double: " + exemplo.MeuDouble);
        System.out.println("boolean: " + exemplo.MeuBoolean);
        System.out.println("char: " + exemplo.MeuChar);
        System.out.println("String: " + exemplo.Nome);
    }
}