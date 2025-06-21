import type { ReactElement } from "react"
import { CardShareIcon } from "../icons/CardShareIcon"
import { CardDeleteIcon } from "../icons/CareDeleteIcon"

interface CardProps{
    title: string,
    tags: string[],
    dateAdded: string,
    icon: ReactElement
}

export const Card = (props: CardProps):ReactElement => {
    const tags = props.tags;
    
    return(
        <div id="Card" className="flex flex-col w-86a bg-white rounded-lg p-4 gap-y-4 border border-gray-200">
            <div >
                <div id="TopBar" className="flex items-center gap-4 justify-between">
                    <div className="flex items-center gap-2">
                        <div id="StartIcon">{props.icon}</div>
                        <div id="CardTitle">{props.title}</div>
                    </div>
                    <div id="CardIcons" className="flex gap-3">
                        <CardShareIcon></CardShareIcon>
                        <CardDeleteIcon></CardDeleteIcon>
                    </div>
                </div>
            </div>
            <div id="content" className="p-2">
                this is the conteajhsd
                adjhfskjld
                asdfjkhds
                adfhkjasdf
                sdf
                {/* //Conditional Rendering dependent on BE */}
            </div>
            <div id="tagsBar flex">
                {
                    tags.map((tag)=> {
                        return (
                            <span className="bg-indigo-100 text-indigo-700 text-xs px-2 py-1 mr-1 rounded-2xl"> 
                                #{tag}
                            </span>
                        )
                    })
                }
            </div>
            <div id="DateAdded" className="text-xs text-gray-400">
                Added on {props.dateAdded}
            </div>
        </div>
    )

}