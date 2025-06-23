import { Button } from '../components/button'
import { PlusIcon } from '../icons/PlusIcon'
import { ShareIcon } from '../icons/ShareButton'
import { SideBar } from '../components/sidebar'
import { Contents } from '../contents/CardsBar'
import { AddContent } from './AddContent'
import { useState } from 'react'

function Dashboard() {
    const [addContentmodal, setaddContentmodal] = useState(false);

  return (
    <div className='flex w-full realtive'>
        {addContentmodal && <AddContent onClose={() => setaddContentmodal(false)} />}
      <div className='flex-3/12 border-r border-gray-200'>   
        <SideBar />
      </div>
      <div id="RightPane" className='flex-9/12 bg-gray-100 h-screen'>
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
                onClick={() => setaddContentmodal(true)}
            ></Button>
          </div>  
        </div>
        <Contents></Contents>
      </div>
    </div>
  )
}

export default Dashboard
