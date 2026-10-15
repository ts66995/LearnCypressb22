public class vowelsCount {
    public static void main(String[] args) {
        String str = "Automation Testing";
        System.out.println("Vowels in the string:");
        int count = 0;
        for (int i = 0; i < str.length(); i++) {
            char ch = Character.toLowerCase(str.charAt(i));
            if (ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u') {
                System.out.print(ch + " ");
                count++;
            }
        }
        System.out.println("Number of vowels: " + count);
    }
}
/*
"I iterate through each character of the string using charAt(). I convert each character 
to lowercase so that the logic works for both uppercase and lowercase vowels. Then I 
check whether the character is a, e, i, o, or u. If it is a vowel, I print it and increment the count."
*/