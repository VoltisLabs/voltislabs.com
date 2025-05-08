import React from 'react'
import { products } from '../../data'
import ArticleHeader from './articleHeader'
import ProductShowcase from './productShowcase'
import LearnMoreBtn from '@/src/components/UI/LearnMoreBtn'

const april2025 = () => {

    const points = [
        {
            title: "Strict Verification Process ",
            paragraph: "One of the ways the VModel app ensures safety is through its strict verification process. Every model and business  who signs up for the app is required to provide a government-issued ID card or passport. This process helps to prevent fraudulent behaviour, ensures the safety of all users, and ensures trust between all users. "
        },
        {
            title: "No Drug Policy",
            paragraph: "VModel has implemented a strict no drug policy. The app requires all models to accept the terms and conditions, which include a clause prohibiting the use of drugs during any jobs or events arranged through the app. Additionally, VModel has partnered with drug awareness organisations to provide information and resources to models about the dangers of drug use, further promoting a safe and healthy working environment."
        },
        {
            title: "Safety Procedures",
            paragraph: "VModel also prioritises the safety of models through the implementation of strict safety procedures. The app requires all models and clients to follow a set of guidelines designed to ensure the safety of everyone involved in the job. These guidelines cover topics such as transportation, accommodations, and on-set conduct. The app also provides access to emergency services and a resolution centre where models can report any inappropriate behaviour or issues that arise during a job."
        },
        {
            title: "Resolution Center",
            paragraph: "VModel's resolution centre is a key feature of the app, providing a safe and secure platform for models to report any issues or concerns they may have. If a model encounters any inappropriate behaviour during a job or has a problem with a client or agency, they can report it through the resolution centre. The VModel team will then investigate the issue and take appropriate action, which may include banning the offending party from the app. "
        }

    ]
    return (
        <div id='april2025'>
            {/* <h2 className='text-gray-500 font-extrabold text-base mb-6'>April 2025</h2> */}
            <ArticleHeader
                title="Empowering Models: How VModel is Changing the Game"
                author="Voltis Labs"
                date="Published on Tuesday 8th April, 2025"
                showWelcome={false}
            />

            {/* Hero Image Placeholder */}
            <div className="my-12 h-96 rounded-xl flex items-center justify-center">
                <img src='/images/april/april_first_image.png' className='rounded-md' />
            </div>

            <div className="prose lg:prose-xl">
                <p className="lead">
                    The modelling industry has a reputation for being highly exclusive and fiercely competitive,
                    with only a small percentage of aspiring models able to make it big. However, in recent
                    times, the industry has faced criticism for its lack of diversity, exploitation of models, and
                    other issues. This has resulted in a rising demand for change, with many suggesting that the
                    industry should be made more accessible and less elitist through the use of technology.
                </p>

                <p>
                    One of the biggest challenges facing models today is the lack of control they have over their
                    own careers. In the traditional modelling industry, models are often dependent on agencies
                    to book jobs for them, negotiate contracts, and manage their careers. While this can be
                    beneficial for some models, it also creates inconsistencies in income and can leave them
                    feeling powerless and undervalued.Lack of diversity is also often evident, perpetuating
                    harmful beauty standards and promoting unhealthy behaviours.
                </p>
                <br />

                <p>
                    Furthermore, drug use is a well-known issue within the modelling industry, with many models
                    reporting being offered drugs on the job. According to a 2017 survey conducted by The
                    Model Alliance, a non-profit organisation advocating for models' rights, 29.7% of models
                    reported experiencing inappropriate behaviour on the job, including being offered drugs or
                    alcohol. The survey also found that 54.7% of models did not feel comfortable reporting
                    incidents of sexual harassment or abuse. These statistics highlight the need for change
                    within the industry and the importance of creating safe and supportive working environments
                    for models.
                </p>

                <br />

                <p>
                    The VModel app aims to address some of these challenges by allowing models to take
                    control of their own careers and provides a platform for a more diverse range of models to
                    be discovered. With VModel, models can create their own profiles, showcase their portfolios,
                    and directly book jobs with clients, eliminating or reducing the need for agencies. This gives
                    models more control over their own careers and allows them to negotiate their own contracts
                    and rates, leading to a more empowered and financially stable workforce. In addition to
                    empowering models, VModel also aims to increase diversity within the industry. The app is
                    designed to be inclusive, allowing models of all body types and backgrounds to create their
                    portfolios and be discovered by clients and other interested parties.
                </p>
            </div>

            <div className="my-12 h-72 bg-gray-100 rounded-xl flex items-center justify-center overflow-hidden">
                <img src='/images/april/april_second_image.jpg' className='rounded-md object-cover  aspect-video' />
            </div>
            <div className="prose lg:prose-xl mt-16">
                <h2 className={`font-extrabold`}>This is how VModel ensures safety is a priority:  </h2>
                <br />
                {points.map(point => (
                    <div key={`${point.title}`}>
                        <h2 className={`font-extrabold`}>{point.title} </h2>
                        <p>{point.paragraph}
                        </p>
                        <br />
                    </div>
                ))}



                <p>
                    The platform prioritises safety and well-being. By addressing the problems of exploitation,
                    sexual harassment, and drug use within the modelling industry, VModel is promoting a safer,
                    healthier, and more inclusive industry. It is time for the modelling industry to embrace new
                    technologies and work towards a brighter future for all models.
                </p>

                <p>
                    If you’re a creative or business wanting to get involve sign up for updates on VModel’s
                    launch day here:
                </p>
                <div className='mx-auto w-fit my-7'>

                    <LearnMoreBtn
                        text="Visit Homepage"
                        borderColor="border-white"
                        textColor="text-white"
                        route="https://vmodel.app/"
                    />
                </div>
            </div>
        </div>
    )
}

export default april2025