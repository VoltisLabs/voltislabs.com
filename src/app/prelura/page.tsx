import React from "react";
import { prelura } from "../data";
import Image from "next/image";
import Title from "@/src/components/UI/Title";
import Subtitle from "@/src/components/UI/subtitle";

function page() {
  const titleClassName = "text-white font-bold text-lg";
  const paragrapghClassName =
    "text-white font-normal text-sm/4 md:text-base/5 text-wrap break-all";

  return (
    <div className=" pt-[1rem] ">
      <section className="text-center mt-10 px-4 mb-6 text-white">
        <Title className="mt-2">Dont wear it? Sell it!</Title>
        <div className="text-center px-4 sm:px-10 md:px-20  xl:px-56 mt-4 ">
          <Subtitle className="font-medium mb-8">
            Prelura makes it easy to pass on the pieces you no longer wear,
            giving them a new home while putting money back in your pocket
          </Subtitle>
          <Subtitle className="text-[#858585] font-normal ">
            Published on Monday 17th February, 2025
          </Subtitle>
        </div>
      </section>

      <section className="mb-16 md:px-[4rem] lg:px-[10rem] xl:px-[16rem] px-[2rem] ">
        <div className="flex items-center gap-6 md:flex-row flex-col">
          {prelura.map((img, index) => (
            <div
              key={index}
              className="w-full overflow-hidden rounded-[10px] md:h-[35rem] h-[23rem]"
            >
              <Image
                src={img.img}
                alt="reluraimg"
                className="w-full h-full object-cover object-top"
                width={500}
                height={500}
              />
            </div>
          ))}
        </div>
      </section>

      <div className="mb-16 md:px-[4rem] lg:px-[10rem] xl:px-[16rem] px-[2rem] ">
        <section className="text-white mb-8">
          <h1 className={titleClassName}>Hi Preluvas</h1>

          <span className={paragrapghClassName}>
            We’re excited to introduce a major update packed with new features,
            improvements, and innovations designed to make buying and selling
            preloved fashion easier, safer, and more rewarding.
          </span>
          <span className={`mb-6 $paragrapghClassName`}>
            Over the past few months, we’ve listened to your feedback and worked
            on ways to enhance your experience, ensuring that Prelura remains
            the go-to platform for discovering unique fashion while promoting a
            more sustainable way to shop. Whether you’re clearing out your
            closet, hunting for rare finds, or running a thriving second hand
            business, these updates are designed with you in mind.
          </span>
          <span className={paragrapghClassName}>
            Here’s what’s new, what’s improved, and what’s coming next:
          </span>
        </section>

        <section className="text-white mb-8">
          <h1 className={titleClassName}>
            A Smarter, More Personalized Shopping Experience
          </h1>

          <span className={paragrapghClassName}>
            AI-Powered Search & Smart Recommendations
          </span>
          <span className={paragrapghClassName}>
            Finding the perfect item has never been easier. Our improved
            AI-powered search engine now delivers more accurate results, helping
            you discover pieces that truly match your style and preferences.
          </span>
          <ul className="list-disc pl-5">
            <li>
              Refined search filters allow you to browse by brand, condition,
              size, and more.
            </li>
            <li>
              Smart recommendations curate personalized selections based on your
              past searches and purchases.
            </li>
            <li>
              Saved searches & alerts notify you when an item you’re looking for
              becomes available.
            </li>
          </ul>
        </section>

        <section className="text-white mb-8">
          <h1 className={titleClassName}>
            New Discover Feed – Follow, Favourite & Explore
          </h1>
          <span className={paragrapghClassName}>
            We’re making shopping more interactive with a dynamic discover feed
            that helps you stay ahead of trends, explore curated collections,
            and connect with sellers whose style matches yours.
          </span>
          <ul className="list-disc pl-5">
            <li>Follow sellers to get notified when they list new items.</li>
            <li>
              Daily trend highlights showcase the most sought-after pieces.
            </li>
            <li>
              Community favourites help you discover what’s trending across
              Prelura.
            </li>
          </ul>
          <span className={paragrapghClassName}>
            Shopping preloved fashion should feel like an exciting treasure
            hunt, and this new update makes the journey even more engaging.
          </span>
        </section>

        <section className="text-white mb-8">
          <h1 className={titleClassName}>
            Selling Made Simple & More Rewarding
          </h1>
          <p className="text-[#858585]">Faster Listing & Smarter Pricing</p>
          <span className={paragrapghClassName}>
            Selling on Prelura is now easier than ever with streamlined listing
            tools that help you price and present your items effectively.
          </span>
          <ul className="list-disc pl-5">
            <li>
              Auto-enhanced photos ensure your listings look professional with
              minimal effort.
            </li>
            <li>
              Smart price suggestions show you what similar items have sold for,
              so you can price competitively.
            </li>
            <li>
              Condition grading system makes it clear to buyers what they’re
              getting (New, Like New, Gently Used, Well-Loved).
            </li>
          </ul>
          <span className={paragrapghClassName}>
            With these updates, listing an item takes just seconds, and you get
            all the insights you need to sell faster.
          </span>
        </section>

        <section className="text-white mb-8">
          <h1 className={titleClassName}>
            Prelura Pro – The Ultimate Seller Toolkit
          </h1>
          <span className={paragrapghClassName}>
            For those who sell regularly or want to grow their shop, we’re
            introducing Prelura Pro, a premium toolkit with advanced seller
            features:
          </span>
          <ul>
            <li>
              Advanced shop analytics to track sales, views, and customer
              engagement.
            </li>

            <li>
              Verified seller badges highlight sellers with a strong track
              record.
            </li>
            <li>Instant refunds for items that don’t match the description.</li>
            <li>Stronger dispute resolution to quickly resolve any issues.</li>
          </ul>

          <p className="font-normal">
            Whether you’re selling casually or as a business, Prelura Pro gives
            you the tools to grow your presence and increase your earnings.
          </p>
        </section>
        <section className="text-white mb-10">
          <h1 className="font-semibold text-[16px]">
            Stronger Protections for Buyers & Sellers Verified Sellers & Secure
          </h1>
          <p className="font-normal">
            Transactions Trust is a top priority, and we’re rolling out new
            features to ensure a safe, transparent marketplace for everyone.
          </p>

          <span className={paragrapghClassName}>
            Whether you’re selling casually or as a business, Prelura Pro gives
            you the tools to grow your presence and increase your earnings.
          </span>
        </section>
        <section className="text-white mb-8">
          <h1 className={titleClassName}>
            Stronger Protections for Buyers & Sellers Verified Sellers & Secure
          </h1>
          <span className={paragrapghClassName}>
            Transactions Trust is a top priority, and we’re rolling out new
            features to ensure a safe, transparent marketplace for everyone.
          </span>
        </section>

        <section className="text-white mb-10">
          <h1 className="font-semibold text-[16px]">
            Prelura Secure Pay – A Safer Way to Transact
          </h1>
          <p className="font-normal">
            With our new in-app Prelura Secure Pay system, transactions are
            safer and more convenient.
          </p>
        </section>

        <section className="text-white mb-8">
          <h1 className={titleClassName}>
            Prelura Secure Pay – A Safer Way to Transact
          </h1>
          <span className={paragrapghClassName}>
            With our new in-app Prelura Secure Pay system, transactions are
            safer and more convenient.
          </span>

          <ul className="list-disc pl-5">
            <li>Funds are held in escrow until buyers confirm delivery. </li>
            <li>
              Faster pay-outs for sellers once transactions are completed.{" "}
            </li>
            <li>
              Multiple payment options including digital wallets and direct
              transfers.
            </li>
          </ul>
          <span className={paragrapghClassName}>
            This update ensures peace of mind for both buyers and sellers,
            making every transaction smoother and more secure.
          </span>
        </section>

        <section className="text-white mb-8">
          <h1 className={titleClassName}>Sustainability at the Core</h1>
          <h5 className="text-[#858585] font-normal">
            Eco-Friendly Shipping & Circular Fashion Initiatives
          </h5>
          <span className={paragrapghClassName}>
            We’re committed to making fashion more sustainable, and we’re
            introducing features to help our community shop and sell
            responsibly.
          </span>
          <ul className="list-disc pl-5">
            <li>
              Carbon-neutral shipping options for a more eco-conscious delivery
              process.
            </li>

            <li>
              Donation & recycling program—easily donate unsold items to
              partnered charities instead of discarding them.
            </li>
          </ul>

          <p className="font-normal">
            Together, we can extend the life of fashion and reduce waste, one
            purchase at a time.
          </p>
        </section>
        <section className="text-white mb-10">
          <h1 className="font-semibold text-[16px]"> What’s Coming Next? </h1>
          <p className="font-normal">
            This update is just the beginning! Here’s what’s on the horizon for
            Prelura:
          </p>
          <ul className="list-disc pl-5">
            <li>
              AI-powered virtual try-ons – See how items might look on you
              before buying.
            </li>
          </ul>

          <span className={paragrapghClassName}>
            Together, we can extend the life of fashion and reduce waste, one
            purchase at a time.
          </span>
        </section>
        <section className="text-white mb-8">
          <h1 className={titleClassName}> What’s Coming Next? </h1>
          <span className={paragrapghClassName}>
            This update is just the beginning! Here’s what’s on the horizon for
            Prelura:
          </span>
          <ul className="list-disc pl-5">
            <li>
              AI-powered virtual try-ons – See how items might look on you
              before buying.
            </li>

            <li>Live seller auctions – Bid in real-time for unique finds. </li>

            <li>
              Loyalty rewards – Earn points for buying and selling, redeemable
              for exclusive perks.
            </li>
          </ul>
        </section>
        <section className="text-white mb-20">
          <span className={paragrapghClassName}>
            We’re shaping the future of second-hand fashion, and your feedback
            plays a huge role in making Prelura the best it can be. Let us know
            what you think of these updates, and stay tuned for even more
            exciting features!
          </span>
          <span className={paragrapghClassName}>
            Thank you for being part of Prelura—where preloved finds a new home.
          </span>
        </section>
      </div>
    </div>
  );
}

export default page;
