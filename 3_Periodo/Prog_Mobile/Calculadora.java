public class Calculadora {
public int Num1;
public int Num2;

public Calculadora (int NumA, int NumB){
    Num1 = NumA;
    Num2 = NumB;
}

void Adicionar (){
    int Soma = Num1 + Num2;
    System.out.println(Soma);
}

void Subtrair(){
    int Subtracao = Num1 - Num2;
    System.out.println(Subtracao);
}  
}