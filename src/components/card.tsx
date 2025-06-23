import type { ReactElement } from "react"
import { CardShareIcon } from "../icons/CardShareIcon"
import { CardDeleteIcon } from "../icons/CareDeleteIcon"
import { DocsIcon } from "../icons/DocsIcon"
import { TwitterIcon } from "../icons/twitterIcon"
import { VideoIcon } from "../icons/VideoIcon"

interface CardProps{
    type: "doc" | "tweet" | "yt",
    title: string,
    tags: string[],
    dateAdded: string,
    content: string
}

let cardIcon:any = {
    "doc" : DocsIcon,
    "tweet" : TwitterIcon,
    "yt" : VideoIcon
}

export const Card = (props: CardProps):ReactElement => {
    const tags = props.tags;
    const StartIcon = cardIcon[props.type];
    return(
        <div id="Card" className="hover:scale-101 hover:transition-all hover:duration-100 flex flex-col w-86a bg-white rounded-lg p-4 gap-y-4 border border-gray-200">
            <div >
                <div id="TopBar" className="flex items-center gap-4 justify-between">
                    <div className="flex items-center gap-2">
                        <div id="StartIcon">{StartIcon}</div>
                        <div id="CardTitle">{props.title}</div>
                    </div>
                    <div id="CardIcons" className="flex gap-3">
                        <div>
                            <CardShareIcon></CardShareIcon>
                        </div>
                        <div className="cursor-pointer">
                            <CardDeleteIcon></CardDeleteIcon>
                        </div>
                    </div>
                </div>
            </div>
            <div id="content" className="p-2">
                {props.content}
            </div>
            <div id="tagsBar flex">
                {
                    tags.map((tag, index)=> {
                        return (
                            <span key={index} className="bg-indigo-100 text-indigo-700 text-xs px-2 py-1 mr-1 rounded-2xl"> 
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

