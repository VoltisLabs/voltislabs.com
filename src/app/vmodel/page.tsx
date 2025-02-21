"use client";

import Subtitle from "@/src/components/UI/subtitle";
import Title from "@/src/components/UI/Title";
import React, { useState } from "react";
import { paragrapghClassName, titleClassName } from "../data";
import Sidebar from "@/src/components/UI/SideBar";

function Vmodel() {
  const menuItems = [
    { name: "Home", route: "#", Icon:'' },
    { name: "Tab1", route: "#", Icon: '' },
    { name: "Tab2", route: "#", Icon: '' },
    { name: "Tab3", route: "#", Icon: '' },
    { name: "Tab4", route: "#", Icon: '' },
   

  ];
  
  return (
    <div className="pt-[1rem] text-white ">
        <Sidebar tbList={menuItems} />
      <div className="text-center mt-10 px-4 mb-6 ">
        <Title className="mt-2">A New Era for Creators</Title>
        <div className="text-center px-4 sm:px-10 md:px-20  xl:px-56 mt-4 ">
          <Subtitle className="font-medium mb-8">
            Exciting updates are here for VModel! Enjoy a fresh UI, AI job
            matching, real-time messaging, an enhanced portfolio, and easier
            payments. More to come soon!
          </Subtitle>
          <Subtitle className="text-[#858585] font-normal ">
            Published on Monday 17th February, 2025
          </Subtitle>
        </div>
      </div>

      <div className="mb-16 mx-auto max-w-xl px-[2rem] md:px-0">
        <div className="mb-8 font-normal">
          <h1 className={titleClassName}>Hello, VModel community! ✨</h1>
          <br />
          <br />
          <span className={paragrapghClassName}>
            We’re thrilled to announce a major update to the VModel app! After
            months of planning, developing, and incorporating your invaluable
            feedback, we are excited to share an array of new features designed
            to enhance your experience and elevate your creative career. This
            update brings meaningful improvements across the board, making it
            easier than ever to connect, collaborate, and thrive on VModel.
          </span>
          <br />
          <span className={paragrapghClassName}>
            We know how important it is to feel empowered, inspired, and ready
            to take your work to the next level. Whether you’re a seasoned pro
            or just starting out, we’re committed to giving you the best
            platform to showcase your talent and unlock new opportunities.
            Here’s a deeper dive into the most exciting updates that will
            reshape the way you use VModel.
          </span>
        </div>

        <div className="mb-8 ">
          <h1 className={titleClassName}>
            A Refined, Sleek User Interface for Effortless Navigation
          </h1>
          <span className={paragrapghClassName}>
            Our design overhaul is here, and it’s all about streamlining your
            journey through the app. We’ve completely redesigned the user
            interface to make navigation as intuitive and efficient as possible.
            From the moment you open VModel, you’ll notice a cleaner, more
            modern look—everything is easier to find and access.
          </span>
          <br />
          <br />
          <span className={paragrapghClassName}>
            The new layout ensures that every interaction feels smooth and
            natural. You can now quickly navigate between job opportunities,
            creator services, and your profile with just a few taps. We’ve
            reduced the clutter, so every button, link, and menu serves a clear
            purpose. The “quick-access” dashboard provides you with a snapshot
            of your most important notifications, pending job applications, and
            service requests all in one place. This allows you to jump right
            into action without losing any time.
          </span>
          <br />
          <span className={paragrapghClassName}>
            The improvements don’t just focus on aesthetics; we’ve made sure
            that functionality remains our top priority. Whether you’re in the
            app for a quick check-in or ready to dive deep into a project, the
            streamlined experience ensures that you can work efficiently and
            focus on your creative endeavors.
          </span>
        </div>

        <div className="mb-8 font-normal">
          <h1 className={titleClassName}>
            Personalized Job Matching – Tailored Opportunities, Just for You
          </h1>
          <span className={paragrapghClassName}>
            We know that finding the right job opportunities is a priority for
            creators, so we’ve upgraded our job matching algorithm to make the
            process even easier. Thanks to the power of artificial intelligence,
            we’ve made job recommendations more personalized than ever before.
          </span>
          <br />
          <span className={paragrapghClassName}>
            When you log into VModel, the new matching algorithm takes a close
            look at your profile—considering your past activity, skills,
            interests, and preferences—to suggest jobs that are most relevant to
            your expertise. Whether you’re a photographer looking for a gig or a
            content creator seeking new collaborations, VModel now prioritizes
            opportunities that fit your unique profile.
          </span>
          <br />
          <br />
          <span className={paragrapghClassName}>
            This algorithm isn’t static—it learns as you interact with the app.
            Each job you apply for and each service you offer teaches the system
            more about what works for you. Over time, this means that the
            suggestions you receive will become more tailored and aligned with
            the types of work you’re best suited for. It’s all about reducing
            the noise and delivering the opportunities that matter.
          </span>
          <br />
          <span className={paragrapghClassName}>
            And the best part? Applying for these jobs has never been easier.
            With the new features, you can apply to multiple opportunities at
            once without having to fill out the same information repeatedly.
            Everything you need is synced to your profile, saving you valuable
            time and energy.
          </span>
        </div>

        <div className="mb-8">
          <h1 className={titleClassName}>
            Instant Messaging & Real-Time Collaboration – Connect and Create
            Together
          </h1>
          <span className={paragrapghClassName}>
            Collaboration is at the heart of what we do on VModel. Whether
            you’re working with a client, collaborating with another creator, or
            brainstorming ideas with a team, communication should be quick and
            seamless. That’s why we’ve introduced real-time messaging and
            collaboration tools within the app.
          </span>
          <span className={paragrapghClassName}>
            With real-time chat, you can now communicate instantly with anyone
            on the platform. No more waiting for emails or jumping between apps.
            You can send text messages, share media, and even create group chats
            specific to the projects you’re working on. This keeps everything
            organized in one place and eliminates the need to manage multiple
            conversations on different platforms.
          </span>
          <span className={paragrapghClassName}>
            To take collaboration even further, we’ve added real-time editing
            and sharing options, making it easy to review documents, give
            feedback, or share resources on the fly. Need to collaborate on a
            design project with a colleague? Want to tweak a contract before
            finalizing a deal with a client? You can do all of this directly
            within VModel, keeping the creative momentum going without the
            interruptions of back-and-forth emails or slow file transfers.
          </span>
          <br />
          <br />
          <span className={paragrapghClassName}>
            This feature fosters a more transparent and efficient workflow,
            enabling creators and clients to work together in real-time,
            wherever they are. Your creative projects will progress faster and
            with more clarity, thanks to this powerful new tool.
          </span>
        </div>

        <div className="mb-8 font-normal">
          <h1 className={titleClassName}>
            A Portfolio That Truly Represents You
          </h1>
          <span className={paragrapghClassName}>
            Your portfolio is your opportunity to showcase your work, and we
            want to make sure it’s doing everything it can to highlight your
            talent. That’s why we’ve redesigned the creator portfolio to help
            you present your projects in the most dynamic, visually appealing
            way possible.
          </span>

          <span className={paragrapghClassName}>
            With the new updates, you can now add more diverse content types to
            your portfolio, including high-quality images, videos, detailed
            descriptions, and even process notes. You can organize your work
            into categories, allowing clients to easily navigate your
            expertise—whether it’s photography, design, writing, or something
            else entirely.
          </span>
          <br />
          <br />
          <span className={paragrapghClassName}>
            This is more than just a showcase of finished work—it’s an
            opportunity to tell the story behind the project. You can share your
            creative process, explain your inspiration, and show how you solved
            problems during the project’s development. The more detailed and
            personalized your portfolio is, the more it will resonate with
            potential clients.
          </span>
          <span className={paragrapghClassName}>
            Plus, you can now track portfolio performance with new analytics.
            This feature allows you to see how many views your work is getting,
            what’s attracting the most attention, and which projects are driving
            the most engagement. With these insights, you can fine-tune your
            portfolio to make it even more compelling.
          </span>
        </div>

        <div className="mb-8 ">
          <h1 className={titleClassName}>
            Streamlined Payment System & Enhanced Security
          </h1>
          <span className={paragrapghClassName}>
            Getting paid for your work should be a seamless process. That’s why
            we’ve simplified the payment system within VModel. Now, you can
            receive payments directly through the app, with multiple payment
            options available for your convenience.
          </span>
          <br />
          <span className={paragrapghClassName}>
            In addition, we’ve enhanced the security of all transactions,
            ensuring that both creators and clients feel confident and protected
            when conducting business. Our new secure payment system makes sure
            that funds are transferred quickly and safely, so you can focus on
            your creative projects without worrying about logistics.
          </span>
        </div>

        <div className="mb-8 font-normal">
          <h1 className={titleClassName}>Looking Ahead – What's Next?</h1>
          <span className={paragrapghClassName}>
            The updates you see today are just the beginning. We’re continuously
            working on new features and improvements to make VModel even better.
            Your feedback has been instrumental in shaping this update, and
            we’re eager to hear what you think as you begin exploring these new
            tools.
          </span>
          <br />
          <span className={paragrapghClassName}>
            As we look ahead, we’re excited to continue expanding the
            possibilities for creators and clients alike. Our mission is to
            provide a platform that not only helps you connect with new
            opportunities but also fosters collaboration, growth, and
            creativity.
          </span>
          <br />
          <span className={paragrapghClassName}>
            Thank you for being part of the VModel community. We can’t wait to
            see the amazing things you’ll create next!
          </span>
          <br />
          <span className={paragrapghClassName}>
            With passion and innovation,
          </span>
          <br />
          <br />
          <span className={paragrapghClassName}> The VModel Team ✨</span>
        </div>
      </div>
    </div>
  );
}

export default Vmodel;
