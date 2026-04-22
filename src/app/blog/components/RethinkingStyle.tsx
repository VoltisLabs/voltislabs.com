import React from 'react';
import { products } from '../../data';
import ArticleHeader from './articleHeader';
import ProductShowcase from './productShowcase';
import LearnMoreBtn from '@/src/components/UI/LearnMoreBtn';

const RethinkingStyle = () => {
  const points = [
    {
      title: 'Clean, curated listings',
      paragraph: 'No clutter. Just clear photos, quality pieces, and easy navigation.',
    },
    {
      title: 'Social-style galleries',
      paragraph: 'Because your digital closet should be as expressive as your real one',
    },
    {
      title: 'Modern, mobile-first design',
      paragraph: 'Built to look and feel like a lifestyle app, not a Second - hand swap meet.',
    },
  ];
  return (
    <div id="april2025">
      {/* <h2 className='text-gray-500 font-extrabold text-base mb-6'>April 2025</h2> */}
      <ArticleHeader
        title="Rethinking Style: How Wearhouse Is Making Resale Fashion Feel Like First Choice"
        author="Voltis Labs"
        date="Published on Tuesday 8th April, 2025"
        showWelcome={false}
      />

      {/* Hero Image Placeholder */}
      <div className="my-12 h-36 overflow-hidden rounded-xl md:h-96">
        <img src="/icons/primary-logo.svg" className="aspect-video size-full rounded-md object-contain p-6" />
      </div>

      <div className="prose lg:prose-xl">
        <p className="lead">
          Second - hand fashion has never looked more relevant. But let’s be honest-it hasn’t always
          felt intuitive.
        </p>
        <br />
        <p>
          Scrolling endless listings. Confusing sizing. Clunky interfaces that make the resale
          experience feel like a chore instead of a choice. That’s what Wearhouse is here to change
        </p>
        <br />
        <h2 className={`font-extrabold`}>This is how VModel ensures safety is a priority: </h2>
        <p>At Wearhouse, our mission is simple:</p>
        <p>Make re-loved fashion the instinctive, stylish, and smart first choice.</p>
        <p>
          Because choosing second-hand shouldn’t feel like a compromise-it should feel like a
          statement. A way to shop that reflects personal taste, environmental values, and a desire
          to buy with more intention.
        </p>
        <p>We believe in making that process seamless. Beautiful. Joyful, even.</p>
        <br />
        <h2 className={`font-extrabold`}>This is how VModel ensures safety is a priority: </h2>

        <p>
          Wearhouse isn’t just a resale platform. It’s a fashion space designed for people who want
          their wardrobe to have a story, not just a price tag.
        </p>
        <div className="my-12 grid h-auto grid-cols-1 gap-4 overflow-hidden rounded-xl md:grid-cols-2">
          <img
            src="/blog/prelura1.jpg"
            className="aspect-video h-36 w-full rounded-md object-cover object-bottom md:h-72"
          />
          <img
            src="/blog/prelura2.jpg"
            className="aspect-video h-36 w-full rounded-md object-cover object-bottom md:h-72"
          />
        </div>

        <br />
        <h2 className={`font-extrabold`}>Here’s how we’re elevating the experience:</h2>

        <ul className="list-outside list-disc pl-6">
          <li>
            Clean, curated listings - No clutter. Just clear photos, quality pieces, and easy
            navigation.
          </li>
          <li>
            Social-style galleries - Because your digital closet should be as expressive as your
            real one.
          </li>
          <li>
            Modern, mobile-first design - Built to look and feel like a lifestyle app, not a Second
            - hand swap meet.
          </li>
        </ul>
        <br />
        <p>
          We’re rethinking every step-from listing to discovery-to make sure Wearhouse works for real
          people, not algorithms.
        </p>
        <br />
        <h2 className={`font-extrabold`}>Why Second - hand Matters More Than Ever</h2>
        <p>
          We’re living through a major shift in how people think about clothes. Fast fashion is
          being questioned. Sustainability is no longer a niche conversation. And Gen Z? They’re
          leading the charge, choosing authenticity, affordability, and individuality over mass
          production
        </p>
        <br />
        <h2 className={`font-extrabold`}>
          Wearhouse is here for that shift. Not to ride the trend-but to support the transformation.
        </h2>
        <p>
          Because buying better doesn’t have to mean buying new. And fashion should never come at
          the cost of the planet-or your personal style. I’m glad you liked it! Here are two
          additional paragraphs to expand the piece, continuing the tone and message seamlessly:
        </p>
        <br />
        <h2 className={`font-extrabold`}>Where Style Meets Sustainability</h2>
        <p>
          Wearhouse isn’t just about resale-it’s about redefining our relationship with fashion. Every
          item listed carries a history, and every purchase helps extend the lifecycle of something
          beautiful. It’s a way to participate in sustainability that feels personal, creative, and
          accessible. By keeping clothes in circulation, we reduce waste and slow down the endless
          churn of fast fashion.
        </p>
        <br />
        <p>
          But we also know that sustainable choices need to be convenient to become common. That’s
          why Wearhouse puts usability at the forefront-from intuitive listing tools to a scrollworthy
          discovery feed that feels more like your favourite fashion app than a marketplace. Because
          doing good should feel just as good.
        </p>
        <br />
        <h2 className={`font-extrabold`}>Join the Movement</h2>
        <p>
          Whether you’re cleaning out your closet or discovering your next favourite look, Wearhouse
          is your space to buy and sell with confidence, clarity, and community. This isn’t about
          guilt. It’s about better options. About being more thoughtful-without losing the thrill of
          a great find. Second - hand doesn’t mean second-best
        </p>
        <br />

        <h2 className={`font-extrabold`}>
          With Wearhouse, it means first-class, first-choice, and forever evolving.
        </h2>
        <div className="mx-auto my-7 w-fit">
          <LearnMoreBtn
            text="Start exploring"
            borderColor="border-white"
            textColor="text-white"
            route="/wearhouse"
          />
        </div>
      </div>
    </div>
  );
};

export default RethinkingStyle;
