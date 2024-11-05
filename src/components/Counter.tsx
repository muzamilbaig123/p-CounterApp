"use client"
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { decrement, increment } from "@/lib/slices/counter";

export default function Counter () {
    const value = useAppSelector((state) => state.countApp.value);
    const dispatch = useAppDispatch();

    const addNum = () => {
        dispatch(increment())
    }

    const minusNum = () => {
        dispatch(decrement())
    }
    

    const customeStyle = {
        border: "2px solid #fff", width: '100px', fontSize: "22px", padding: "10px", borderRadius: "8px",
    }

    return (
        <>
            <div className="bg-black text-white flex flex-col justify-center items-center w-[100%] h-screen">
                <h1 className="text-4xl">Counter App</h1>
                <h2 className="text-3xl underline mt-4 text-blue-500">{value}</h2>
                <button style={customeStyle} className="mt-4 mb-4" onClick={addNum}>Add</button>
                <button style={customeStyle} className="mt-4 mb-4" onClick={minusNum}>Minus</button>
            </div>
        </>
    )
}