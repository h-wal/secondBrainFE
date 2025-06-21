import type { ReactElement } from "react"
import { BrainLogo } from "../icons/brainlogo"

export const Logo = (): ReactElement => {
    return(
        <div id="logo" className='flex items-center gap-3 p-4 '>
            <div>
            <BrainLogo></BrainLogo>
            </div>
            <div className="font-bold text-xl">
                Second Brain
            </div>
        </div>
    )
}