
//o/p: Longest consecutive subsequence: 1 2 3 4 5 6 
public class LongestConsecutiveSubsequence {
    public static void main(String[] args) {
        int[] numbers = {2, 4, 1, 2, 3, 4, 5, 6, 8, 9, 5, 6, 7, 8};
        int currentStart = 0;
        int currentLength = 1;
        int longestStart = 0;
        int longestLength = 1;
        for (int i = 1; i < numbers.length; i++) {
            if (numbers[i] == numbers[i - 1] + 1) {
                currentLength++;
            } else {
                currentStart = i;
                currentLength = 1;
            }
            if (currentLength > longestLength) {
                longestLength = currentLength;
                longestStart = currentStart;
            }
        }
        System.out.print("Java----------Longest consecutive subsequence: ");
        for (int i = longestStart; i < longestStart + longestLength;i++) {
            System.out.print(numbers[i] + " ");
        }
    }
}

/*
How the logic works

The important condition is:

numbers[i] == numbers[i - 1] + 1

For your array:

2, 4, 1, 2, 3, 4, 5, 6, 8, 9, 5, 6, 7, 8
   ↑

When we reach:

1 → 2 → 3 → 4 → 5 → 6

each number is exactly 1 greater than the previous number, so the sequence length keeps increasing.

Then:

6 → 8

Since:

8 != 6 + 1

the consecutive sequence breaks.

So we get:

[1, 2, 3, 4, 5, 6]
Interview explanation

You can say:

"I traverse the array once and compare each element with the previous element. If the current element
 is exactly one greater than the previous element, I continue the current sequence. Otherwise, I reset 
 the sequence. At every step, I keep track of the longest sequence's starting index and length."*/