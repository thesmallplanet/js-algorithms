/**
 * Happy numbers
 *
 * Find the sum of the products of a digits of a number
 * Ex. 7 -> (7 * 7)
 * 7 -> 49 -> ...
 *
 * 36 -> (3 * 3) + (6 * 6)
 * 18 -> (1 * 1) + (8 * 8)
 *
 * 'Happy' numbers are numbers that will have a number whose pattern include
 * Ex. 7 -> 49 -> 97 -> 130 -> 10 -> 1
 *
 *
 * 'Unhappy' numbers will never include 1 in the sequence
 * Ex. 2 -> 4 -> 16 -> 37 -> 58 -> 89 -> 145 -> 42 -> 20 -> 4
 *
 * Question: Determine if a number is 'happy' or not
 */
import assert from 'assert'
import 'babel-polyfill'


/**
 * Calculate if a number is happy or unhappy
 *
 * @return boolean
 */
export default function HappyNumberChecker(number: number): boolean {
  const numbers = []
  let currentNumber = calc(number)
  let infiniteLoopPreventionLimit = 0

  while (!numbers.includes(1) && infiniteLoopPreventionLimit < 1000) {
    currentNumber = calc(currentNumber)

    if (numbers.includes(currentNumber)) {
      return false
    }

    numbers.push(currentNumber)
    infiniteLoopPreventionLimit++

    if (currentNumber === 1) {
      return true
    }
  }
}

function calc(number: number): number {
  const castedNumber = number.toString()

  let index
  let sum = 0

  for (index = 0; index < castedNumber.length; index++) {
    const int = parseInt(castedNumber[index], 10)
    const result = int * int

    sum += result
  }

  return sum
}

// Assert calc
assert(calc(36), 45)
assert(HappyNumberChecker(7), true)
assert(HappyNumberChecker(2), false)