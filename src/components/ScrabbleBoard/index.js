import { useState, useEffect } from "react";
import Tile from "@/components/Tile"

const initLetterDistribution = {
    A: { count: 9, value: 1 }, E: { count: 12, value: 1 }, I: { count: 9, value: 1 },
    O: { count: 8, value: 1 }, U: { count: 4, value: 1 }, L: { count: 4, value: 1 },
    N: { count: 6, value: 1 }, S: { count: 4, value: 1 }, T: { count: 6, value: 1 },
    R: { count: 6, value: 1 }, D: { count: 4, value: 2 }, G: { count: 3, value: 2 },
    B: { count: 2, value: 3 }, C: { count: 2, value: 3 }, M: { count: 2, value: 3 },
    P: { count: 2, value: 3 }, F: { count: 2, value: 4 }, H: { count: 2, value: 4 },
    V: { count: 2, value: 4 }, W: { count: 2, value: 4 }, Y: { count: 2, value: 4 },
    K: { count: 1, value: 5 }, J: { count: 1, value: 8 }, X: { count: 1, value: 8 },
    Q: { count: 1, value: 10 }, Z: { count: 1, value: 10 }
};

const ScrabbleBoard = () => {
    const [rack, setRack] = useState([])
    const [letterDistribution, setLetterDistribution] = useState(initLetterDistribution)

    const grid = Array(15).fill(null).map(() => Array(15).fill(null))






    const drawTile = () => {
        const letters = Object.keys(letterDistribution)
        const letter = letters[Math.floor(Math.random() * letters.length)]
        const value = letterDistribution[letter].value

        const updatedData = {
            ...letterDistribution,
            [letter]: {
                ...letterDistribution[letter],
                count: letterDistribution[letter].count - 1,
            }
        }

        console.log("🚀 ~ drawTile ~ updatedData:", letter, updatedData)

        setLetterDistribution(updatedData)
        return { letter, value }
    }


    useEffect(() => {
        const initialRack = Array(7).fill(null).map(() => drawTile())
        setRack(initialRack)
    }, [drawTile])




    return (
        <div className="flex flex-col items-center space-y-4">
            <div className='bg-orange-200 p-4 rounded-lg shadow-lg'>
                {grid.map((row, rowIndex) => (
                    <div key={rowIndex} className="flex">
                        {
                            row.map((_, colIndex) => (
                                <div key={colIndex} className="w-8 h-8 border border-orange-400 flex items-center justify-center" />
                            ))
                        }
                    </div>
                ))}
            </div>
            <div className='bg-wood-pattern p-2 rounded-lg shadow-md flex space-x-2'>
                {
                   rack.map((tile, index) => (
                    <Tile key={index} letter={tile.letter} value={tile.value} />
                   ))
                }
            </div>
        </div>
    )
}

export default ScrabbleBoard