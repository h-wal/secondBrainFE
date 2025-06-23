import type { ReactElement } from "react"

interface ButttonProps {
    variant: "primary" | "secondary",
    size: "sm" | "md" | "lg",
    text: string,
    startIcon?: ReactElement,
    endIcon?: ReactElement,
    onClick?: () => void
}

let variantName = {
    "primary": "bg-indigo-700 text-white text-font-large",
    "secondary": "bg-indigo-100 text-indigo-700"
}

let sizeName = {
    "lg": "px-4 py-2 text-xl rounded-md",
    "md": "px-4 py-2 text-md rounded-md",
    "sm": "px-2 py-1 text-sm rounded-sm"
}

export const Button = (props : ButttonProps): ReactElement => {
    const Image = props.startIcon
    return(
        <button onClick={props.onClick} className={`hover:scale-110 transition-all duration-300 font-sans text-[13px] cursor-pointer ${variantName[props.variant]} ${sizeName[props.size]}`}>
            <div className="flex gap-2 justify-center items-center ">
                <div>{Image}</div>
                <div>{props.text}</div>
            </div>
        </button>
    )
}
