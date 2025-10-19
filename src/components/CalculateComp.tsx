import { useState } from "react"


interface CalculateCompProps {
  length?: number
  width?: number
}
const CalculateComp = ({ length = 1, width = 1 }: CalculateCompProps) => {
  const [Length, setLength] = useState(length)
  const [Width, setWidth] = useState(width)
  const [result, setResult] = useState(1)


  const findarea = (length: number, width: number): void => {
    const result = setResult(length * width)
    return result
  }

  const findPerimeter = (length: number, width: number): void => {
    const result = setResult(2 * (length + width));
    return result
  }

  return (
    <>
      <div className="flex flex-col gap-4 w-70 ">
        <p>Result:{result}</p>
        <input onChange={(e) => setLength(Number(e.target.value))} type="text" value={Length} placeholder="Enter your length" className="border " />
        <input onChange={(e) => setWidth(Number(e.target.value))} type="text" value={Width} placeholder="Enter Your Width" className="border " />
        <button onClick={() => findarea(length, width)} className="bg-teal-600 h-10">Calculate Area</button>
        <button onClick={() => findPerimeter(length, width)} className="bg-teal-600 h-10">Calculate Parameter</button>
      </div>




    </>
  )
}

export default CalculateComp
