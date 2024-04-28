import java.util.Scanner;

public class CheckPrime {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        int input = in.nextInt();
        for (int i = 2; i < Math.sqrt(input); i++) {
            if (input % i == 0) {
                System.out.println(input + " is not a prime number");
                break;
            }

        }

    }
}
