//Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

let num = [2,3,6,7,9]

function twoSum (num, target){
    let newArr = []
    for(let i = 0; i < num.length; i++){
        for(let j = i+1; j < num.length; j++){
            if(num[i] + num[j] === target){
                newArr.push(i)
                newArr.push(j)   
            }
            }         
        }
        return newArr
    
    }
console.log(twoSum(num, 8))


//Given an integer x, return true if x is palindrome integer.
//An integer is a palindrome when it reads the same backward as forward.

// let x = 121

