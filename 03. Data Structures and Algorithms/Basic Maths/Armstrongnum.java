import java.util.Scanner;

public class Armstrongnum {

    public static void main ( String [] args)
    {
     Scanner input = new Scanner(System.in);
     int num = input.nextInt();
     int original = num;
     int sum=0;
     input.close();
     
     while(num>0)
     {
       int lastnum = num%10;
       sum = sum + (lastnum*lastnum*lastnum);
       lastnum = lastnum/10;

     }
     if(sum==original)
     {
        System.out.println("Is Armstrong");

     }
     else{
        System.out.println("Not Armstrong");
     }
    }
    
}
