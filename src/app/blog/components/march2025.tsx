import LearnMoreBtn from '@/src/components/UI/LearnMoreBtn'
import React from 'react'
import ArticleHeader from './articleHeader'

const March2025 = () => {
    return (
        <div id='march2025'>
            {/* <h2 className='text-gray-500 font-extrabold text-base mb-6'>April 2025</h2> */}
            <ArticleHeader
                title="Built for Speed, Designed for Clarity: The Spinnersonic Story"
                author="Voltis Labs"
                date="Published on Saturday 8th March, 2025"
                showWelcome={false}
            />

            {/* Hero Image Placeholder */}
            <div className="my-12 h-96 rounded-xl overflow-hidden">
                <img src='/images/march/march_first_image.png' className='rounded-md object-contain object-top  aspect-video' />
            </div>

            <div className="prose lg:prose-xl">
                <p className="lead">
                    Gaming has always been seen as a form of escape-but what if it could be more than
                    that? What if a game could actually sharpen your attention, build rhythm, and support
                    the way your mind works?
                </p>
                <br />
                <p>
                    Meet Spinnersonic - a competitive mobile game built for speed, strategy, and mental
                    clarity. It’s fast. It’s fun. And yes, it’s designed with ADHD players in mind.
                </p>
                <br />
                <h2 className={`font-extrabold`}>A Game That Moves With You </h2>

                <p>
                    Spinnersonic isn’t just another tap-and-win mobile game. It’s engineered to create a
                    feedback loop between focus and motion, helping players train their attention span
                    through high-energy, rhythm-based mechanics.
                </p>

                <br />

                <p>
                    Where traditional games might flood you with distractions, Spinnersonic guides your
                    focus through sound, pace, and visual patterning. The result? A dynamic experience
                    that rewards consistency, timing, and control-not mindless swiping.
                </p>
                <br />
                <p>
                    This isn’t just a game that holds your attention-it teaches you how to manage it.
                </p>
            </div>

            <div className="my-12 h-96  rounded-xl  overflow-hidden">
                <img src='/images/march/march_second_image.png' className='rounded-md object-contain object-top  aspect-video' />
            </div>
            <div className="prose lg:prose-xl mt-16">
                <h2 className={`font-extrabold`}>Why Build a Game Like This?  </h2>

                <p>
                    Spinnersonic was born out of a simple but powerful idea: games can help people thrive
                    not just pass time.
                </p>
                <br />
                <p>
                    At Voltis Labs, we’ve spoken with creators, neurodivergent users, and educators who
                    all asked for the same thing-something stimulating, competitive, but purposeful.
                    Something that didn’t feel like just another dopamine trap.
                </p>
                <br />
                <p>
                    So, we built a game that turns play into practice:
                </p>
                <ul className='list-disc list-inside pl-3'>
                    <li>
                        Fast-paced rounds to improve short-term focus
                    </li>
                    <li>
                        Rhythmic movement to support timing and mental flow
                    </li>
                    <li>
                        Cognitive alignment tools built into the gameplay structure
                    </li>
                </ul>
                <br />
                <p>
                    And the best part? It’s genuinely fun. Because focus shouldn’t feel like a chore-it should
                    feel like momentum.
                </p>
                <br />
            </div>
            <div className="my-12 h-96 rounded-xl flex items-center justify-center overflow-hidden">
                <img src='/images/march/march_third_image.jpg' className='rounded-md object-contain object-top pt-10   ' />
            </div>
            <div className="prose lg:prose-xl">
                <h2 className={`font-extrabold`}>Made With ADHD in Mind, Built for Everyone </h2>

                <p className="lead">
                    Spinnersonic is inclusive by design. While its cognitive rhythm-based flow is especially
                    useful for ADHD players, its mechanics are universal. Anyone can enjoy the intensity,
                    the strategy, the head-to-head gameplay-and the sense of achievement that comes
                    with mastering your own mind.
                </p>
                <br />
                <p>
                    We’re not claiming it’s a clinical tool. But we are proud that Spinnersonic is being used
                    as a supportive, accessible space for people who want to train attention through
                    action.
                </p>
                <br />
                <h2 className={`font-extrabold`}>The Future of Focused Play </h2>

                <p>
                    Spinnersonic is more than just a product. It’s part of a movement to reimagine how
                    games can serve us-not just stimulate us.
                </p>

                <br />
                <ul className='list-disc list-inside pl-3'>
                    <li>
                        Multiplayer modes
                    </li>
                    <li>
                        Focus challenges & leaderboard events
                    </li>
                    <li>
                        A fun-filled shop full of collectable spinners
                    </li>
                </ul>
                <br />
                <p>
                    If you’re someone who wants to compete and improve - Spinnersonic is for you.
                </p>
                <p>
                    Ready to spin?
                </p>
            </div>
            <div className='mx-auto w-fit my-7'>

                <LearnMoreBtn
                    text="Visit Homepage"
                    borderColor="border-white"
                    textColor="text-white"
                    route="https://spinnersonic.com/"
                />
            </div>
        </div>
    )
}

export default March2025