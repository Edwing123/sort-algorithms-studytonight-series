const binarySearch = <T>(arr: T[], len: number, target: T) => {
  let max = len - 1
  let min = 0

  let guess: number
  let step = 0

  while (max >= min) {
    guess = Math.ceil((max + min) / 2)
    step = step + 1

    if (target === arr[guess]) {
      console.log(step)
      return guess
    } else if (target > arr[guess]) {
      min = guess + 1
    } else {
      max = guess - 1
    }
  }

  return -1
}

const linearSearch = <T>(arr: T[], len: number, target: T) => {
  for (let i = 0; i < len; i++) {
    if (arr[i] === target) {
      return i
    }
  }

  return -1
}


function main(): void {
  let numbers = []

  for (let i = 1; i <= 2097152; i++) {
    numbers.push(i)
  }

  let target = 100
  let len = numbers.length
  
  console.time("Binary search")
  let result = binarySearch(numbers, len, target) 
  console.timeEnd("Binary search")

  console.time("Linear Search")
  linearSearch(numbers, len, target) 
  console.timeEnd("Linear Search")

  if (result > -1) {
    console.log(`${numbers[result]} found in the index ${result}`)
  } else {
    console.log("Number not found")
  }

}

main()