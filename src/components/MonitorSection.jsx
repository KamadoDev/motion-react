import React from 'react'
import { IoIosArrowRoundForward } from 'react-icons/io'
import monitorImage from '../assets/monitor-card.webp'

const MonitorSection = () => {
    return (
        <section className='max-w-7xl mx-auto px-4 py-16 md:py-24'>
            <div className='flex flex-col-reverse md:flex-row-reverse items-center justify-between gap-12 md:gap-24'>
                {/* left */}
                <div className='md:w-1/2 w-full'>
                    <img src={monitorImage} alt="monitor image" className='w-full h-auto' />
                </div>

                {/* right */}
                <div className='md:w-1/2 w-full'>
                    <p className='text-green-500 font-semibold'>MONITOR </p>
                    <h2 className='text-3xl md:text-4xl font-bold text-neutral-900 mt-4 mb-6 md:w-4/5'>
                        Introducing best mobile carousels
                    </h2>
                    <p className='text-gray-600 mb-8'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga quasi provident modi et numquam laboriosam porro architecto nemo, id, iure dicta error nam? Voluptatem repellendus laboriosam perspiciatis deserunt earum impedit.
                    </p>
                    <a href="#" className='flex items-center gap-2 hover:gap-4 transition-all text-blue-500 font-semibold'>
                        Explore schedule features
                        <IoIosArrowRoundForward className='size-8' />
                    </a>
                </div>

            </div>
        </section>
    )
}

export default MonitorSection