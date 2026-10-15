import java.util.*;
//o/p: Array after removing duplicates: [10, 20, 30, 40]
//using collections -LinkedHashSet
public class removeDuplicatesFromArray {
    public static void main(String[] args) {
        int[] arr = {10, 20, 10, 30, 20, 40, 30};
        Set<Integer> unique = new LinkedHashSet<>();
        for (int num : arr) {
            unique.add(num);
        }
        System.out.println("Array after removing duplicates: " + unique);
    }
}

public class removeDuplicatesFromArray {
    public static void main(String[] args) {
        List<Integer> numbers = Arrays.asList(10, 20, 10, 30, 20, 40, 30);
        Set<Integer> uniqueNumbers =  new LinkedHashSet<>(numbers);
        System.out.println(uniqueNumbers);
    }
}
//Without using Set — Logic-based approach
public class removeDuplicatesFromArray {
    public static void main(String[] args) {
        int[] arr = {10, 20, 10, 30, 20, 40, 30};
        System.out.println("Array after removing duplicates:");
        for (int i = 0; i < arr.length; i++) {
            boolean duplicate = false;
            for (int j = 0; j < i; j++) {
                if (arr[i] == arr[j]) {
                    duplicate = true;
                    break;
                }
            }
            if (!duplicate) {
                System.out.print(arr[i] + " ");
            }
        }
    }
}