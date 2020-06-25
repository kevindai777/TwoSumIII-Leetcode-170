//Objective is to design a data structure that has two methods: 'add' and 'find'
//'Add' will add values to the set
//'Find' will check whether two values in the set can add up to the given value


//For this design we use a hashmap to keep the frequencies of each added number.

class TwoSum {
    constructor() {
        this.map = {}
    }

    add(value) {
        if (this.map[value] == undefined) {
            this.map[value] = 1
        } else {
            this.map[value]++
        }
    }

    //If the complement is equal to the iterated value...
    //Check if the frequency is more than one to see whether 
    //we can use the given value twice
    find(value) {
        for (let num of Object.keys(this.map)) {
            let complement = value - num
            if (complement == num) {
                if (this.map[complement] > 1) {
                    return true
                } else {
                    continue
                }
            } else if (this.map[complement] !== undefined) {
                return true
            }
        }

        return false
    }
}

let newMap = new TwoSum()
newMap.add(2)
newMap.add(7)
return newMap.find(9)