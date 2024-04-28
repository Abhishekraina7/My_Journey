import java.util.Scanner;
// import java.lang.Math;

public class HCF {
  public static void main(String[] args) {
    Scanner input = new Scanner(System.in);
     int n1= input.nextInt();
     int n2= input.nextInt();
     input.close();
     while(n1>0 && n2>0)
     {
      if(n1>n2)
      {
        n1 = n1%n2;
       System.out.println("One factor is"+n1);
      }
      else{
        n2 = n2%n1;
        System.out.println("One factor is"+n2);
      }
     }
     if(n1==0)
     {
      System.out.println("But the GCD is"+n2);
     }
  
    
    
}
}










//    int min = Math.min(n2, n1);
  //    input.close();

  //    for(int i=1;i<=min;i++)
  //    {
  //      if(n1%i==0 && n2%i==0)
  //      {
  //       System.out.println("HCF is"+i);
  //      }
  //    }
    
  // }
