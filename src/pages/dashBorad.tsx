import { Button } from '../components/button'
import { PlusIcon } from '../icons/PlusIcon'
import { ShareIcon } from '../icons/ShareButton'
import { Card } from '../components/card'
import { SideBarItem } from '../components/sideBarItem'
import { TwitterIcon } from '../icons/twitterIcon'
import { VideoIcon } from '../icons/VideoIcon'
import { DocsIcon } from '../icons/DocsIcon'
import { LinksIcon } from '../icons/Links'
import { HashTag } from '../icons/HashTag'
import { BrainLogo } from '../icons/brainlogo'
const userTags = ["productivity", "idea"]

function Dashboard() {

  return (
    <div className='flex w-full'>
      <div id="sideBar" className='flex-3/12 border-r border-gray-200'>
        <div id="logo" className='flex items-center gap-3 p-4 '>
          <div>
           <BrainLogo></BrainLogo>
          </div>
          <div className="font-bold text-xl">
            Second Brain
          </div>
        </div>
        <div id="menu" className='py-4'>
          <SideBarItem icon={<TwitterIcon></TwitterIcon>} title="Tweets"></SideBarItem>
          <SideBarItem icon={<VideoIcon></VideoIcon>} title="Videos"></SideBarItem>
          <SideBarItem icon={<DocsIcon></DocsIcon>} title="Documents"></SideBarItem>
          <SideBarItem icon={<LinksIcon></LinksIcon>} title="Links"></SideBarItem>
          <SideBarItem icon={<HashTag></HashTag>} title="Tags"></SideBarItem>
        </div>
      </div>
      <div id="contents" className='flex-9/12 bg-gray-100 h-screen'>
        <div id="TopBar" className='px-8 pt-8 items-center flex justify-between'>
          <div className='text-2xl font-bold'>
            All Notes
          </div>
          <div className='flex justify-end gap-4'>
            <Button 
                variant="secondary"
                size="lg"
                text="Share Brain"
                startIcon={<ShareIcon size={6}></ShareIcon>}
            ></Button>
            <Button 
                variant="primary"
                size="lg"
                text="Add Content"
                startIcon={<PlusIcon size={6}></PlusIcon>}
            ></Button>
          </div>  
        </div>
        <div id="CardsBar" className='p-8 flex gap-4'> 
          <Card icon={<DocsIcon></DocsIcon>} title="Project Ideas" tags = {userTags} dateAdded="10/03/2025"></Card>
          <Card icon={<DocsIcon></DocsIcon>} title="Card 2 Second Brain" tags = {userTags} dateAdded="10/03/2025"></Card>
          <Card icon={<DocsIcon></DocsIcon>} title="Project Ideas" tags = {userTags} dateAdded="10/03/2025"></Card>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
