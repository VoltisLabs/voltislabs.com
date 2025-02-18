import React from "react";
import { prelura } from "../data";
import Image from "next/image";

function page() {
  return (
    <div className="md:px-8 px-5 pt-[.1rem] ">
      <section className="text-white my-8  mb-10">
        <div className="text-center px-4 mt-10 mb-6">
          <h1 className="font-medium md:text-[2.5rem] text-[1.5rem] mt-2 cursor-pointer ">
            Dont wear it? Sell it!
          </h1>
          <div className="text-center  sm:px-6 mt-4">
            <h4 className="font-normal text-base sm:text-lg md:text-lg !text-[.9rem] mb-3">
              Prelura makes it easy to pass on the pieces you no longer wear,
              giving them a new home while putting money back in your pocket
            </h4>
            <small className="text-[#858585] font-normal">
              Published on Monday 17th February, 2025
            </small>
          </div>
        </div>

       






        <div className="flex flex-wrap gap-4 px-4 sm:px-0 md:px-24 justify-center">
  {prelura.map((img, index) => (
    <div key={index} className="w-full sm:w-1/2 md:w-[32%] ">
      <Image
        src={img.img}
        alt="reluraimg"
        className=" rounded-lg object-cover"
        width={500}
        height={500}
      />
    </div>
  ))}
</div>

      </section>
      <section className="text-white mb-10">
        <h1 className="font-medium text-[18px]">Hi Preluvas</h1>

        <p>
          We’re excited to introduce a major update packed with new features,
          improvements, and innovations designed to make buying and selling
          preloved fashion easier, safer, and more rewarding.
        </p>
        <p className="mb-6">
          Over the past few months, we’ve listened to your feedback and worked
          on ways to enhance your experience, ensuring that Prelura remains the
          go-to platform for discovering unique fashion while promoting a more
          sustainable way to shop. Whether you’re clearing out your closet,
          hunting for rare finds, or running a thriving second hand business,
          these updates are designed with you in mind.
        </p>
        <p>Here’s what’s new, what’s improved, and what’s coming next:</p>
      </section>

      <section className="text-white mb-10">
        <h1 className="font-normal text-[18px]">
          A Smarter, More Personalized Shopping Experience
        </h1>

        <p>AI-Powered Search & Smart Recommendations</p>
        <p>
          Finding the perfect item has never been easier. Our improved
          AI-powered search engine now delivers more accurate results, helping
          you discover pieces that truly match your style and preferences.
        </p>
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

      <section className="text-white mb-10">
        <h1 className="font-normal text-[18px]">
          New Discover Feed – Follow, Favourite & Explore
        </h1>
        <p>
          We’re making shopping more interactive with a dynamic discover feed
          that helps you stay ahead of trends, explore curated collections, and
          connect with sellers whose style matches yours.
        </p>
        <ul className="list-disc pl-5">
          <li>Follow sellers to get notified when they list new items.</li>
          <li>Daily trend highlights showcase the most sought-after pieces.</li>
          <li>
            Community favourites help you discover what’s trending across
            Prelura.
          </li>
        </ul>
        <p>
          Shopping preloved fashion should feel like an exciting treasure hunt,
          and this new update makes the journey even more engaging.
        </p>
      </section>

      <section className="text-white mb-10">
        <h1 className="font-normal text-[18px]">
          {" "}
          Selling Made Simple & More Rewarding
        </h1>
        <p className="text-[#858585]">Faster Listing & Smarter Pricing</p>
        <p>
          Selling on Prelura is now easier than ever with streamlined listing
          tools that help you price and present your items effectively.
        </p>
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
        <p>
          With these updates, listing an item takes just seconds, and you get
          all the insights you need to sell faster.
        </p>
      </section>

      <section className="text-white mb-10">
        <h1 className="font-normal text-[18px]">Prelura Pro – The Ultimate Seller Toolkit </h1>
         <p> For those who sell regularly
        or want to grow their shop, we’re introducing Prelura Pro, a premium
        toolkit with advanced seller features:</p>
       
       
        <ul className="list-disc pl-5">   
          <li>
          Bulk listing & auto-relist for
        high-volume sellers.</li>
        
         
        
          <li>
           Advanced shop analytics to track sales, views, and
        customer engagement.</li>
       
          <li>
            Verified seller badges highlight sellers with a strong track record.
          </li>
          <li>Instant refunds for items that don’t match the description.</li>
          <li>Stronger dispute resolution to quickly resolve any issues.</li>
        </ul>
       
        <p> Whether you’re selling casually or as a business,
        Prelura Pro gives you the tools to grow your presence and increase your
        earnings.</p>
      </section>
      <section className="text-white mb-10">
      <h1 className="font-normal text-[18px]">Stronger Protections for Buyers & Sellers Verified Sellers & Secure</h1>
       <p> Transactions Trust is a top priority, and we’re rolling out new features
        to ensure a safe, transparent marketplace for everyone.</p>
        
        
        <ul className="list-disc pl-5">
        <li>
         
         Verified seller
        badges highlight sellers with a strong track record.</li>
        <li >
           Instant refunds for
        items that don’t match the description.</li>
        <li>
          Stronger dispute resolution to
        quickly resolve any issues.</li></ul>

      </section>

      <section className="text-white mb-10">
        <h1 className="font-normal text-[18px]">
          {" "}
          Prelura Secure Pay – A Safer Way to Transact
        </h1>
        <p>
          {" "}
          With our new in-app Prelura Secure Pay system, transactions are safer
          and more convenient.
        </p>

        <ul className="list-disc pl-5"> 
          <li>
         Funds are
        held in escrow until buyers confirm delivery. </li>
        <li>
       
        Faster pay-outs for
        sellers once transactions are completed. </li>
        <li >
      
        Multiple payment options
        including digital wallets and direct transfers.</li></ul>
        <p> This update ensures
        peace of mind for both buyers and sellers, making every transaction
        smoother and more secure.</p>
      </section>

      <section className="text-white mb-10">
      <h1 className="font-normal text-[18px]"> Sustainability at the Core</h1>
      <h5 className="text-[#858585] font-normal"> Eco-Friendly Shipping & Circular Fashion
        Initiatives</h5>
        <p> We’re committed to making fashion more sustainable, and
        we’re introducing features to help our community shop and sell
        responsibly.</p>
        <ul className="list-disc pl-5">
          <li>
            
         Carbon-neutral shipping options for a more eco-conscious
        delivery process. </li>
        
       
          <li>
          
        Rewards for sustainable packaging—sellers who ship in
        reusable or eco-friendly materials will get special recognition.</li>
       
          <li> 
        Donation & recycling program—easily donate unsold items to partnered
        charities instead of discarding them. </li></ul>
        
        
        <p>Together, we can extend the life
        of fashion and reduce waste, one purchase at a time.</p>
      </section>
      <section className="text-white mb-10">
      <h1 className="font-medium text-[18px]"> What’s Coming Next? </h1>
      <p>This update is just the beginning! Here’s what’s on
        the horizon for Prelura:</p>
        <ul className="list-disc pl-5">
          <li >
         AI-powered virtual try-ons – See how items
        might look on you before buying. </li>
       
          <li >
        Live seller auctions – Bid in real-time
        for unique finds. </li>
        
        
          <li>
        Loyalty rewards – Earn points for buying and selling,
        redeemable for exclusive perks.</li></ul>
      </section>
      <section className="text-white mb-20">
       <p > We’re shaping the future of second-hand fashion, and your feedback plays
        a huge role in making Prelura the best it can be. Let us know what you
        think of these updates, and stay tuned for even more exciting features!</p>
        <p>Thank you for being part of Prelura—where preloved finds a new home.</p>
      </section>

      
    </div>
  );
}

export default page;
