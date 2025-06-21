import type { ReactElement } from "react";

interface sideBarItemPropsInterface{
    icon: ReactElement,
    title: string,
}

export const SideBarItem = (props: sideBarItemPropsInterface): ReactElement => {
    return(
        <div className="flex items-center gap-2 py-3 px-6 text-gray-500 cursor-pointer hover:bg-gray-200 transition-all duration-150">
            <div>
                {props.icon}
            </div>
            <div className="text-gray-500 text-md">
                {props.title}
            </div>
        </div>
    )
}