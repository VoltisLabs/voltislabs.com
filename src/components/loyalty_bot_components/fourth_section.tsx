import React from 'react'

const FourthSection = () => {
    return (
        <section id="loyalty-features" className='w-full min-h-screen md:pt-0 md:h-screen 2xl:h-auto flex gap-10 flex-nowrap items-start justify-center pt-16'>
            <div className=' md:w-3/4 2xl:w-1/3 flex flex-col justify-start items-start gap-7 text-balance mx-auto' >
                <h1 className='text-white text-2xl md:text-3xl font-extrabold uppercase text-wrap'>
                    KEY features
                </h1>

                <span className='text-white text-[18.6px] font-light leading-8 whitespace-normal break-normal'>
                    <span className='font-bold'>
                        ⏱ Break Time Monitoring<br />

                    </span>
                    Track when team members go on break and how long they stay away.
                    <br />
                    <br />

                    <span className='font-bold'>
                        🚨 Lateness Detection
                    </span> <br />
                    Automatically flags team members who clock in late or overstay breaks.
                    <br />
                    <br />
                    <span className='font-bold'>
                        💸 Custom Penalties
                    </span>
                    <br />
                    Trigger custom consequences like logged infractions, salary deductions, or admin alerts.
                    <br />
                    <br />
                    <span className='font-bold'>
                        📊 Insight Logs<br />

                    </span>
                    See time stats per user to identify trends, consistency, or problem patterns.
                    <br />
                    <br />

                    <span className='font-bold'>
                        ⚙️ Fully Configurable Rules
                    </span> <br />
                    Set break limits, grace periods, time zones, notification preferences and more.
                    <br />
                    <br />

                    <span className='font-bold'>
                        📢 Alerts & Reminders
                    </span> <br />
                    Remind users of upcoming breaks, end times, or return-to-work nudges.
                    <br />
                    <br />
                </span>
            </div>

        </section>
    )
}

export default FourthSection