import type { ReactElement } from "react";

interface PlusIconInterface {
  size: number
}

export function PlusIcon(props: PlusIconInterface): ReactElement {
  console.log(props.size)
  return(
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className={`size-${props.size}`}>
      <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
      </svg>
    </div>
  )
  
}
