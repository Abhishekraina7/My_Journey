import java.util.Scanner;

public class Randompractice {

    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int T = input.nextInt();
        int N = input.nextInt();
        input.close();
        while (T-- > 0) {
            if (N == 1) {
                System.out.println("YES");
            } else if (N == 2) {
                System.out.println("YES");
            } else if (N == 3) {
                System.out.println("NO");
            } else if (N == 4) {
                System.out.println("YES");
            }
        }
    }
}
