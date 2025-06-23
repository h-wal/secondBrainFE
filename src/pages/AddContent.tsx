import { DocsIcon } from "../icons/DocsIcon"
import { VideoIcon } from "../icons/VideoIcon"
import { TwitterIcon } from "../icons/twitterIcon"
import { Cross } from "../icons/Cross"
import { useState } from "react"
import { Backend_URL } from "../config"
import axios from "axios"

export const AddContent = ({onClose}: {
    onClose: () => void;
}) => {
    const [optionSelected , setOptionSelected] = useState<"docs" | "twitter" | "video" | null>(null);
    const [titlevalue, settitlevalue] = useState<string>("");
    const [linkvalue, setlinkvalue] = useState<string>("");
    const [bodyvalue, setbodyvalue] = useState<string>("");

    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are 0-based
    const day = String(today.getDate()).padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`;

    async function AddContenttoDB(){
        const type = optionSelected;
        const body = bodyvalue;
        const title = titlevalue;
        const links = linkvalue;
        const contentAdded = await axios.post(`${Backend_URL}/user/content`, {
            type: type,
            title: title,
            content: body,
            links: links,
            tags: type,
            date: formattedDate,
        }, {
            headers: {
                "authorization": localStorage.getItem("token")
            }
        })
        if(contentAdded){
            alert("Content Addeed");
            onClose();
        }
    }

    return(
        <div id="main" className="bg-[rgba(0,0,0,0.6)] h-screen w-screen absolute flex justify-center items-center">
                <div id="card" className="relative bg-white rounded-md w-104 h-125 opacity-100 p-8 flex flex-col justify-center items-center">
                    <div className="absolute top-4 right-4">
                        <div onClick={onClose} className="cursor-pointer">
                            <Cross></Cross>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="border border-indigo-700 rounded-sm w-78 text-sm h-9 flex flex-row ">
                            <div className="px-2 border-r w-21 flex justify-center items-center">
                                Type
                            </div>
                            <div onClick={() => optionSelected === "docs" ? setOptionSelected(null):  setOptionSelected("docs")} className={`cursor-pointer ${optionSelected === "docs"? "bg-indigo-700 text-white" : "bg-white  text-black"} px-2 border-r w-19 flex justify-center items-center`}>
                                <DocsIcon></DocsIcon>
                            </div>
                            <div onClick={() => optionSelected === "video" ? setOptionSelected(null):  setOptionSelected("video")} className={`cursor-pointer ${optionSelected === "video"? "bg-indigo-700 text-white" : "bg-white  text-black"} px-2 border-r w-19 flex justify-center items-center`}>
                                <VideoIcon></VideoIcon>
                            </div>
                            <div onClick={() => optionSelected === "twitter" ? setOptionSelected(null):  setOptionSelected("twitter")} className={`cursor-pointer ${optionSelected === "twitter"? "bg-indigo-700 text-white" : "bg-white  text-black"} px-2 roudned-4xl w-19 flex justify-center items-center`}>
                                <TwitterIcon></TwitterIcon>
                            </div>
                        </div>
                        <div>
                            <input onChange={(e) => settitlevalue(e.target.value)} className="border border-indigo-700 rounded-sm w-78 text-sm p-2" value={titlevalue} type="link" placeholder="Title" />
                        </div>
                        <div>
                            <input onChange={(e) => setlinkvalue(e.target.value)} className="border border-indigo-700 rounded-sm w-78 text-sm p-2" value={linkvalue} type="link" placeholder="Links" />
                        </div>
                        <div>
                            <input onChange={(e) => setbodyvalue(e.target.value)} className="border border-indigo-700 rounded-sm w-78 h-48 text-sm p-2 pb-42" value={bodyvalue} type="text" placeholder="Body"/>
                        </div>
                        <div onClick={() => {AddContenttoDB()}} className="bg-indigo-700 rounded-sm w-78 text-sm text-white flex justify-center p-2 wrap hover:bg-indigo-600 cursor-pointer">
                            Add Content
                        </div>
                    </div>
                </div>
        </div> 
    )
}