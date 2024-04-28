import java.util.Scanner;
import java.util.ArrayList;
import java.util.Collections;



public class Printalldivisors {

   public static void main(String[] args) {
     Scanner input = new Scanner(System.in);
     int num = input.nextInt();
     ArrayList<Integer> numbers = new ArrayList<>();
     input.close();

     for(int i=1; i<=Math.sqrt(num);i++)
     {
      if(num%i==0)
      {
         numbers.add(i);
         

      }
      if((num/i)!=i)
      {
         numbers.add(num/i);
         
      }
     
     }
     Collections.sort(numbers);
     for( int element:numbers)
     {
      System.out.print(element);
     }
   }
  
  
  }



  
  




   

    
