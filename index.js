//Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

let num = [2,3,6,7,9]

function twoSum (num, target){
    for(let i = 0; i < num.length; i++){
        if(num[i] + num[i+1] == target){
            return [i, i+1]
        }
    }
}
console.log(twoSum(num, 5))
