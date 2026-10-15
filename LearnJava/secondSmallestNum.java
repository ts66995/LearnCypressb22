public class secondSmallestNum {
    public static void main(String[] args) {
        int[] numbers = {10, 25, 5, 40, 30, 5};
        int smallest = Integer.MAX_VALUE;
        int secondSmallest = Integer.MAX_VALUE;
        for (int num : numbers) {
            if (num < smallest) {
                secondSmallest = smallest;
                smallest = num;
            }
            else if (num < secondSmallest && num > smallest) {
                secondSmallest = num;
            }
        }

        System.out.println("Smallest: " + smallest);
        System.out.println("Second smallest: " + secondSmallest);
    }
}
// o/p: Smallest: 5   Second smallest: 10