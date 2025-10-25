"use client";

export default function Button({children}) {
  return (
    <div>
        <button className="mx-0 px-3 py-2 bg-blue-600" onClick={() => console.log("Button is Clicked")}>
            {children}
        </button>
    </div>
  )
}
