'use client'

import Link from "next/link"

export default function Home() {
  return (  
    <div className="p-16 grid grid-cols-2">
      <div className="">
        Image
      </div>
      <div className="px-16 text-2xl">
        <h1 className="text-6xl pb-8">We can plan and organize the future.</h1>
	<p className="py-4">As inequality rises globally, and as we continue to exceed critcial climate
       	thresholds, a coordinated approach to economic planning and development becomes 
	increasingly difficult to sideline. Accordingly, a need to systematize existing theory, 
	practice, and strategy, and to open and democratize the process of scientific discovery is made apparent.</p>
	<p className="py-4">It is with this in mind that we seek to establish an educational community centered 
	around building the future that is both necessary for human survival and human flourishing. We reject the 
	pessimism of the liberal project and put forward a practical, scientific and justifiably optimistic 
	alternative to shaping the future of human society.</p>
	<Link href="/login" className="transition-colors hover:text-amber-100">
	  <span className="transition-all pr-4 hover:pr-8">
	    Join us
          </span>
          <span className="transition-all hover:pl-4">
	    →
	  </span>
	</Link>
      </div>
    </div>
  )
}
