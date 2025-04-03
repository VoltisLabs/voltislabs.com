import React from 'react'
import ButtonWithBackground from './button_with_background'
import ButtonWithGradientText from './button_with_gradient_text'
import GameCard from './game_card'
import { games } from "../data"

const FourthSection = () => {
    return (
        <section className='flex flex-col lg:items-center'>
            <span className='text-3xl lg:text-6xl font-extrabold text-white uppercase mb-12 '>welcome to the top </span>

            {/* Scrollable buttons */}
            <div className='flex gap-4 mb-20 overflow-x-auto no-scrollbar'>
                <ButtonWithBackground text="Newest Games" />
                <ButtonWithGradientText text="LATEST Games" />
                <ButtonWithGradientText text="FIGHT Games" />
                <ButtonWithGradientText text="SPORT Games" />
            </div>

            {/* Scrollable game cards */}
            <div className='flex lg:grid grid-cols-3 gap-7 mb-10 overflow-x-auto  no-scrollbar '>
                {games.map((game, index) => (
                    <div key={`key-card-${index}`} className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-full">
                        <GameCard key={`key-card-${index}`} profilepicture={game.profilePicture} name={game.name} brand={game.brand} image={game.image} />
                    </div>
                ))}
            </div>
        </section>
    )
}

export default FourthSection
