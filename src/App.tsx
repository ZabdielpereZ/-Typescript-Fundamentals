import React, { useState } from 'react';
import ColorList from './components/ColorList';
import UserList from './components/UserList';

// Declaring Variable string type
const greeting: string = "Hello, TypeScript!"
console.log(greeting)

// Declaring Variables with Array [] of numbers 
const numberList: number[] = [5, 10,15]
console.log(numberList)

// Defining a function with two parameters a (number) and b (number) 
const calculateSum = (a: number, b: number): number => {
  return a + b
}
console.log(calculateSum(4, 20))

// typescript function that takes an array of numbers and returns a new array containing only even numbers
const filterNumber = (numbers: number[]): number[] => {
  return numbers.filter(number => number % 2 == 0);
};

const App: React.FC = () => {
  const [numbers, setNumbers] = useState<number[]>([1,2,3,4,5,6,7,8,9,10])
  const evenNumbers = filterNumber(numbers)

  return (
    <>
    <h1>{greeting}</h1>
    <ul>
      {numberList.map((number, index) => (
        <li key={index}>{number}</li>
      ))}
    </ul>
    <h2>Sum Calculation</h2>
    <p>Sum of 4 and 20 is: {calculateSum(4, 20)}</p>
    <ColorList />
    <h2>Even Numbers</h2>
    <ul>
      {evenNumbers.map((number, index) => (
        <li key={index}>{number}</li>
      ))}
    </ul>
    <UserList />
     
    </>
  )
}

export default App
