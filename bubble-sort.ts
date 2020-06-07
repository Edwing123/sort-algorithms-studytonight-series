/**
 * Learning about bubble sort algorithm by following this post:
 * https://www.studytonight.com/data-structures/bubble-sort
 */

const log = console.log.bind(console)
const getRandom = (min: number, max: number): number => Math.floor(Math.random() * (max - min + 1) + 1)


function bubbleSort<T>(arr: T[], len: number, verbose = false): T[] {
  /**
   * we introduce a flag to optimize this algorithm 
   * why ?
   * Sometimes the arr passed will be almost sorted, e.g [1, 2, 3, 5, 4],
   * just the last element needs to be swapt, but the for loop will iterate
   * even if the arr is already sorted
   */
  let i: number, j: number, temp: T, flag = 0

  for (i = 0; i < len; i++) {
    for (j = 0; j < (len - i - 1); j++) {
      verbose && log(`is ${arr[j]} > ${arr[j + 1]} ?`)

      if (arr[j] > arr[j + 1]) {
        verbose && log("Yes, It is")
        verbose && log("Swapping values")

        temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp

        // turning flag to 1
        flag = 1

        verbose && log("Values Swapt")
      } else {
        verbose && log("No, It is no")
      }
    }

    if (flag === 0) break
  }

  return arr
}


// Testing area
function main(): void {
  let numbers = []
  let count = 1
  let min = 0
  let max = 4

  while (count <= max) {
    let randomNumber = getRandom(min, max)
    numbers.push(randomNumber)
    count++
  }

  const BUBBLE_SORT_LABEL = "Bubble sort algorithm"

  log(numbers)
  console.time(BUBBLE_SORT_LABEL)
  let sortedNumbers = bubbleSort(numbers, numbers.length, true)
  console.timeEnd(BUBBLE_SORT_LABEL)

  log(sortedNumbers)
}

main()