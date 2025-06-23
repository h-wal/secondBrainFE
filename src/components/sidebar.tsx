import { LinksIcon } from '../icons/Links'
import { HashTag } from '../icons/HashTag'
import { BrainLogo } from '../icons/brainlogo'
import { SideBarItem } from '../components/sideBarItem'
import { TwitterIcon } from '../icons/twitterIcon'
import { VideoIcon } from '../icons/VideoIcon'
import { DocsIcon } from '../icons/DocsIcon'

export const SideBar = () => {
    return(
        <div id="sideBar">
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
    )

}