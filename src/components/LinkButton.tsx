import { ArrowRight } from 'lucide-react'
import React from 'react'

const LinkButton = ({title} : {title: string}) => {
  return (
    <div>
        <div className="ml-5 md:ml-8 px-2 absolute hover:bg-[#0D1117] bottom-0 md:-bottom-10 left-0 xl:bottom-0 flex items-center gap-1 rounded border-white border text-white ">
          <button
            type="submit"
            className=" py-2 px-2 rounded-lg font-bold text-lg transition shadow-lg"
          >
            {title}
          </button>
          <ArrowRight />
        </div>
    </div>
  )
}

export default LinkButton