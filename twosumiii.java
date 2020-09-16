//Java Solution

class TwoSum {

    Map<Integer, Integer> map = new HashMap<>();
    /** Initialize your data structure here. */
    public TwoSum() {
        this.map = new HashMap<Integer, Integer>();
    }
    
    /** Add the number to an internal data structure.. */
    public void add(int number) {
        if (this.map.containsKey(number)) {
            this.map.put(number, this.map.get(number) + 1);
        } else {
            this.map.put(number, 1);
        }
    }
    
    /** Find if there exists any pair of numbers which sum is equal to the value. */
    public boolean find(int value) {
        for (int val : this.map.keySet()) {
            int complement = value - val;
            
            if (complement == val) {
                if (this.map.get(complement) > 1) {
                    return true;
                } else {
                    continue;
                }
            } else {
                if (this.map.containsKey(complement)) {
                    return true;
                }
            }
        }
        
        return false;
    }
}