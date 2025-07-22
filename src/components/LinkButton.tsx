import { ArrowRight } from 'lucide-react'
import React from 'react'

const LinkButton = ({title} : {title: string}) => {
  return (
    <div>
        <div className="ml-8 px-2 absolute hover:bg-[#0D1117]  left-0 bottom-0 flex items-center gap-1 rounded border-white border text-white ">
          <button
            type="submit"
            className=" py-1 px-2 rounded-lg font-bold text-lg transition shadow-lg"
          >
            {title}
          </button>
          <ArrowRight />
        </div>
    </div>
  )
}

export default LinkButton