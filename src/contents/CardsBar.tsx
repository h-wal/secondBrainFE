import React, {useEffect ,useState} from "react"
import { Card } from "../components/card"
import { Backend_URL } from "../config"
import axios from "axios"


export const Contents = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        async function getUserData(){
            const response = await axios.get(`${Backend_URL}/user/content`, {
                headers: {
                    "authorization": localStorage.getItem("token")
                }
            });
            setData(response.data)
        }
        getUserData();
    }, [])

    return(
       <div id="CardsBar" className='p-8 flex gap-4'> 
            {data.map((item: any,index) => (
                <Card
                    key={index}
                    type={item.type} 
                    title={item.title} 
                    content={item.content}
                    tags = {item.tags} 
                    dateAdded={item.date}>
                </Card>
            ))}
        </div>
    )
}