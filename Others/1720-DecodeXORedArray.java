import java.util.ArrayList;

class Solution {
    public int[] decode(int[] encoded, int first) {
        List<Integer> arr = new ArrayList<>();
        arr.add(first);

        for (int item : encoded) {
            arr.add(arr.get(arr.size() - 1) ^ item);
        }

        return arr.stream().mapToInt(Integer::intValue).toArray();
    }
}
