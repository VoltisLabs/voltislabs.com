import React from "react";
import { prelura } from "../data";
import Image from "next/image";

function page() {
  return (
    <div className="px-8">
      <section className="text-white my-8  mb-10">
        <div className="text-center px-4 mt-10 mb-6">
          <h1 className="font-medium md:text-[2.5rem] mt-2 cursor-pointer ">
            Dont wear it? Sell it!
          </h1>
          <div className="text-center  sm:px-10   mt-4  ">
            <h4 className="font-normal text-base sm:text-lg md:text-lg mb-3">
              Prelura makes it easy to pass on the pieces you no longer wear,
              giving them a new home while putting money back in your pocket
            </h4>
            <h5 className="text-[#858585] font-normal">
              Published on Monday 17th February, 2025
            </h5>
          </div>
        </div>
        <div className="flex gap-4  flex-wrap sm:px-0 md:px-24 justify-center">
          {prelura.map((img, index) => (
            <div key={index} className="flex flex-wrap w-full h-full sm:w-1/2 md:w-1/3 ">
              <img
                src={img.img}
                alt="reluraimg"
                className="w-[100%] h-auto rounded-lg"
              />
            </div>
          ))}
        </div>






        {/*

        <div className="flex flex-col md:flex-row gap-4 px-4 md:px-12 lg:px-24">
  <div className="space-y-2">
    <div className="flex gap-1 items-center text-sm md:text-base">
      <div className="bg-white rounded-lg w-2 h-2"></div>
      <span>Refined search filters allow you to browse by brand, condition, size, and more.</span>
    </div>
    <div className="flex gap-1 items-center text-sm md:text-base">
      <div className="bg-white rounded-lg w-2 h-2"></div>
      <span>Smart recommendations curate personalized selections based on your past searches and purchases.</span>
    </div>
    <div >
      <div className="bg-white rounded-lg w-2 h-2"></div>
      <span>Saved searches & alerts notify you when an item you’re looking for becomes available.</span>
    </div>
  </div>
</div>

 */}
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
        <div>
          <div className="flex gap-1 text-center items-center ">
            <div className="bg-white rounded-lg w-2 h-2 "></div>Refined search
            filters allow you to browse by brand, condition, size, and more.
          </div>
          <div className="flex gap-1 text-center items-center">
            <div className="bg-white rounded-lg w-2 h-2 "></div>Smart
            recommendations curate personalized selections based on your past
            searches and purchases.
          </div>
          <div className="flex gap-1 text-center items-center">
            <div className="bg-white rounded-lg w-2 h-2 "></div>Saved searches &
            alerts notify you when an item you’re looking for becomes available.
          </div>
        </div>
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
        <div>
          <div className="flex gap-1 text-center items-center">
            <div className="bg-white rounded-lg w-2 h-2 "></div>Follow sellers
            to get notified when they list new items.
          </div>
          <div className="flex gap-1 text-center items-center">
            <div className="bg-white rounded-lg w-2 h-2 "></div>Daily trend
            highlights showcase the most sought-after pieces.
          </div>
          <div className="flex gap-1 text-center items-center">
            <div className="bg-white rounded-lg w-2 h-2 "></div>Community
            favourites help you discover what’s trending across Prelura.
          </div>
        </div>
        <p>
          Shopping preloved fashion should feel like an exciting treasure hunt,
          and this new update makes the journey even more engaging.
        </p>
      </section>

      <section className="text-white mb-10">
        <h1 className="font-normal text-[18px]"> Selling Made Simple & More Rewarding</h1>
        <p className="text-[#858585]">Faster Listing & Smarter Pricing</p>
        <p>
          Selling on Prelura is now easier than ever with streamlined listing
          tools that help you price and present your items effectively.
        </p>
        <div>
          <div className="flex gap-1 text-center items-center">
            <div className="bg-white rounded-lg w-2 h-2 "></div> Auto-enhanced
            photos ensure your listings look professional with minimal effort.
          </div>
          <div className="flex gap-1 text-center items-center">
            <div className="bg-white rounded-lg w-2 h-2 "></div>Smart price
            suggestions show you what similar items have sold for, so you can
            price competitively.
          </div>
          <div className="flex gap-1 text-center items-center">
            <div className="bg-white rounded-lg w-2 h-2 "></div>Condition
            grading system makes it clear to buyers what they’re getting (New,
            Like New, Gently Used, Well-Loved).
          </div>
        </div>
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
        <div>


          
          <div className="flex gap-1 text-center items-center">
            <div className="bg-white rounded-lg w-2 h-2 "></div>Bulk listing & auto-relist for
        high-volume sellers.</div>
        
         
        
          <div className="flex gap-1 text-center items-center">
            <div className="bg-white rounded-lg w-2 h-2 "></div>Advanced shop analytics to track sales, views, and
        customer engagement.</div>
       
          <div className="flex gap-1 text-center items-center">
            <div className="bg-white rounded-lg w-2 h-2 "></div> Exclusive seller badges to boost credibility and
        attract more buyers.</div>
        
        </div>
       
        <p> Whether you’re selling casually or as a business,
        Prelura Pro gives you the tools to grow your presence and increase your
        earnings.</p>
      </section>
      <section className="text-white mb-10">
      <h1 className="font-normal text-[18px]">Stronger Protections for Buyers & Sellers Verified Sellers & Secure</h1>
       <p> Transactions Trust is a top priority, and we’re rolling out new features
        to ensure a safe, transparent marketplace for everyone.</p>
        
        
        <div>
        <div className="flex gap-1 text-center items-center">
            <div className="bg-white rounded-lg w-2 h-2 "></div>
         Verified seller
        badges highlight sellers with a strong track record.</div>
        <div className="flex gap-1 text-center items-center">
            <div className="bg-white rounded-lg w-2 h-2 "></div> Instant refunds for
        items that don’t match the description.</div>
        <div className="flex gap-1 text-center items-center">
            <div className="bg-white rounded-lg w-2 h-2 "></div> Stronger dispute resolution to
        quickly resolve any issues.</div></div>
      </section>

      <section className="text-white mb-10">
      <h1 className="font-normal text-[18px]"> Prelura Secure Pay – A Safer Way to Transact</h1>
      <p> With our new in-app Prelura
        Secure Pay system, transactions are safer and more convenient.</p>

        <div> <div className="flex gap-1 text-center items-center">
        <div className="bg-white rounded-lg w-2 h-2 "></div> Funds are
        held in escrow until buyers confirm delivery. </div>
        <div className="flex gap-1 text-center items-center">
        <div className="bg-white rounded-lg w-2 h-2 "></div>
        Faster pay-outs for
        sellers once transactions are completed. </div>
        <div className="flex gap-1 text-center items-center">
        <div className="bg-white rounded-lg w-2 h-2 "></div>
        Multiple payment options
        including digital wallets and direct transfers.</div></div>
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
        <div>
          <div className="flex gap-1 text-center items-center">
            <div className="bg-white rounded-lg w-2 h-2 "></div> 
         Carbon-neutral shipping options for a more eco-conscious
        delivery process. </div>
        
       
          <div className="flex gap-1 text-center items-center">
            <div className="bg-white rounded-lg w-2 h-2 "></div> 
        Rewards for sustainable packaging—sellers who ship in
        reusable or eco-friendly materials will get special recognition.</div>
       
          <div className="flex gap-1 text-center items-center">
            <div className="bg-white rounded-lg w-2 h-2 "></div> 
        Donation & recycling program—easily donate unsold items to partnered
        charities instead of discarding them. </div></div>
        
        
        <p>Together, we can extend the life
        of fashion and reduce waste, one purchase at a time.</p>
      </section>
      <section className="text-white mb-10">
      <h1 className="font-medium text-[18px]"> What’s Coming Next? </h1>
      <p>This update is just the beginning! Here’s what’s on
        the horizon for Prelura:</p>
        <div>
          <div className="flex gap-1 text-center items-center">
            <div className="bg-white rounded-lg w-2 h-2 "></div>
         AI-powered virtual try-ons – See how items
        might look on you before buying. </div>
       
          <div className="flex gap-1 text-center items-center">
            <div className="bg-white rounded-lg w-2 h-2 "></div>
        Live seller auctions – Bid in real-time
        for unique finds. </div>
        
        
          <div className="flex gap-1 text-center items-center">
            <div className="bg-white rounded-lg w-2 h-2 "></div>
        Loyalty rewards – Earn points for buying and selling,
        redeemable for exclusive perks.</div></div>
      </section>
      <section className="text-white mb-20">
       <p> We’re shaping the future of second-hand fashion, and your feedback plays
        a huge role in making Prelura the best it can be. Let us know what you
        think of these updates, and stay tuned for even more exciting features!</p>
        <p>Thank you for being part of Prelura—where preloved finds a new home.</p>
      </section>



      
    </div>
  );
}

export default page;
