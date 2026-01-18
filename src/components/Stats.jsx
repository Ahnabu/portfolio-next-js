'use client'
import React from 'react';
import CountUp from 'react-countup';

const stats =[
    {
        num: "1100+",
        text:"hours of coding experience."
    },
    {
        num: "16+",
        text:"Projects completed."
    },
    {
        num: "15+",
        text:"Technologies mastered."
    },
    {
        num: "1100+",
        text:"Code commits."
    },
]
const Stats = () => {
    return (
        <section className='pt-4 pb-12 xl:pt-0 xl:pb-0'>
            <div className="container mx-auto">
                <div className='flex flex-wrap flex-col justify-start text-start md:flex-row gap-6 max-w-[80vw] mx-auto xl:max-w-none '>
                    {
                        stats.map((item, index) => {
                            return (
                                <div key={index} className='flex-1 flex flex-col md:flex-row gap-4 items-center justify-center '>
                                    <CountUp end={item.num} duration={5} delay={2} className="text-4xl xl:text-6cl font-extrabold" />
                                    <p className={`md:${item.text.length<15? 'max-w-[100px] ':"max-w-[150px]"} leading-snug text-white/80 `}>
                                        {item.text}
                                    </p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    );
};

export default Stats;