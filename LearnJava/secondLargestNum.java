public class secondLargestNum {
    public static void main(String[] args) {
        int[] numbers = {10, 25, 5, 40, 30, 40};
        int largest = Integer.MIN_VALUE;
        int secondLargest = Integer.MIN_VALUE;
        for (int num : numbers) {
            if (num > largest) {
                secondLargest = largest;
                largest = num;
            }
            else if (num > secondLargest && num < largest) {
                secondLargest = num;
            }
        }
        System.out.println("Largest: " + largest);
        System.out.println("Second largest: " + secondLargest);
    }
}

// o/p: Largest: 40 Second largest: 30