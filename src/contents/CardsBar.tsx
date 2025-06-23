import { Card } from "../components/card"
const userTags = ["productivity", "idea"]

export const Contents = () => {
    return(
       <div id="CardsBar" className='p-8 flex gap-4'> 
          <Card type="yt" title="Project Ideas" tags = {userTags} dateAdded="10/03/2025"></Card>
          <Card type="tweet" title="Card 2 Second Brain" tags = {userTags} dateAdded="10/03/2025"></Card>
          <Card type="doc" title="Project Ideas" tags = {userTags} dateAdded="10/03/2025"></Card>
        </div>
    )
}