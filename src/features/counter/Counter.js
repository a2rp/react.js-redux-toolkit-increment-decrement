import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './counterSlice'

export function Counter() {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

    return (
        <div style={{ height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ height: "50px", backgroundColor: "#fff", display: "flex", justifyContent: "center", alignment: "center", borderRadius: "15px", overflow: "hidden", boxShadow: "0 0 30px 1px #000" }}>
                <button
                    style={{ backgroundColor: "#ddd", border: "none", width: "30px" }}
                    aria-label="Increment value"
                    onClick={() => dispatch(increment())}
                >
                    +
                </button>
                <span style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100px", textAlign: "center" }}>{count}</span>
                <button
                    style={{ backgroundColor: "#ddd", border: "none", width: "30px" }}
                    aria-label="Decrement value"
                    onClick={() => dispatch(decrement())}
                >
                    -
                </button>
            </div>
        </div>
    )
}