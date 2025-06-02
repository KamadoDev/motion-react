import React from 'react'
import slack from '../assets/slack.png'
import amazon from '../assets/amazon.png'
import woocommerce from '../assets/woocommerce.png'
import meundies from '../assets/meundies.png'
import sitepoint from '../assets/sitepoint.png'

const CompanyLogo = () => {
    const logos = [slack, amazon, woocommerce, meundies, sitepoint]
    return (
        <div className="w-full overflow-hidden container mx-auto gap-8 py-20 flex sm:flex-row flex-col sm:items-center items-start">
            <div className="w-[300px] shrink-0 px-5 text-gray-600 border-l-4 border-blue-500 bg-white py-2 z-10 sm:text-base text-xl font-semibold text-left">
                Proud partner at <br /> Hubspot & Segment
            </div>

            {/* Wrapper fixed width */}
            <div className="relative w-full overflow-hidden">
                {/* Moving container */}
                <div className="flex animate-marquee whitespace-nowrap">
                    {[...logos, ...logos].map((logo, index) => (
                        <img
                            key={index}
                            src={logo}
                            alt="company logo"
                            className="mx-12 h-8 object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all"
                        />
                    ))}
                </div>
            </div>
        </div>

    )
}

export default CompanyLogo