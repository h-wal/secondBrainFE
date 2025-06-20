import type { ReactElement } from "react";

interface sideBarItemPropsInterface{
    icon: ReactElement;
    title: string
}

export const SideBarItem = (props: sideBarItemPropsInterface): ReactElement => {
    return(
        <div className="flex items-center gap-3 py-3 px-6">
            <div>
                {props.icon}
            </div>
            <div className="text-gray-500 text-md">
                {props.title}
            </div>
        </div>
    )
}