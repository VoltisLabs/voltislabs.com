"use client";

import React, { useState } from "react";
import { FiMapPin, FiMail, FiPhone, FiArrowRight } from "react-icons/fi";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

const inputClass =
  "w-full rounded-lg border border-vl-brown/25 bg-vl-cream px-4 py-3 text-vl-ink placeholder:text-vl-ink-muted shadow-sm focus:border-vl-brown focus:outline-none focus:ring-2 focus:ring-vl-brown/30";

const ContactUs = () => {
  const [formStatus, setFormStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    try {
      const formData = new FormData(form);
      const response = await fetch("https://formspree.io/f/mnqezyab", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setFormStatus("success");
        form.reset();
      } else {
        setFormStatus("error");
      }
    } catch {
      setFormStatus("error");
    }
  };

  return (
    <div className="contact-page mx-auto w-full max-w-5xl px-4 pb-20 pt-28 text-vl-ink md:px-8 md:pt-32">
      <section id="contact-home" className="text-center">
        <h1 className="text-3xl font-semibold text-vl-brown-dark md:text-4xl">We are Voltis Labs</h1>
        <p className="mt-2 text-xl font-medium text-vl-brown md:text-2xl">Contact Us</p>
        <p className="mx-auto mt-4 max-w-2xl text-sm text-vl-ink-muted md:text-base">
          Have questions or want to collaborate? We&apos;d love to hear from you.
        </p>
      </section>

      <section className="form-section mt-12">
        <div className="rounded-xl border border-vl-brown/20 bg-vl-cream-deep/90 p-6 shadow-sm md:p-10">
          <motion.h2
            className="mb-6 text-center text-2xl font-semibold text-vl-brown-dark md:text-3xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
          >
            Get in Touch
          </motion.h2>

          {formStatus === "success" && (
            <motion.div
              className="mb-6 text-center text-sm font-medium text-green-700"
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={0}
            >
              Thank you! Your message has been sent successfully.
            </motion.div>
          )}

          {formStatus === "error" && (
            <motion.div
              className="mb-6 text-center text-sm font-medium text-red-600"
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={0}
            >
              Something went wrong. Please try again.
            </motion.div>
          )}

          <motion.form
            onSubmit={handleSubmit}
            className="space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeUp} custom={1}>
              <label htmlFor="name" className="mb-2 block text-sm font-medium text-vl-ink">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your name"
                required
                className={inputClass}
              />
            </motion.div>

            <motion.div variants={fadeUp} custom={2}>
              <label htmlFor="email" className="mb-2 block text-sm font-medium text-vl-ink">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="you@example.com"
                required
                className={inputClass}
              />
            </motion.div>

            <motion.div variants={fadeUp} custom={3}>
              <label htmlFor="message" className="mb-2 block text-sm font-medium text-vl-ink">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Your message"
                rows={5}
                required
                className={inputClass}
              />
            </motion.div>

            <motion.div className="text-center" variants={fadeUp} custom={4}>
              <button
                type="submit"
                className="inline-flex min-w-[9rem] items-center justify-center gap-2 rounded-full border border-vl-brown bg-vl-brown px-6 py-2.5 text-sm font-medium text-vl-cream transition-colors hover:bg-vl-brown-dark"
              >
                Send Message
                <FiArrowRight size={18} />
              </button>
            </motion.div>
          </motion.form>
        </div>
      </section>

      <section className="contact-details mt-16 border-t border-vl-brown/15 pt-12">
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
          <motion.div
            className="text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={1}
          >
            <FiMapPin size={36} className="mx-auto mb-3 text-vl-brown" />
            <h3 className="mb-2 text-lg font-semibold text-vl-brown-dark">Our Address</h3>
            <p className="text-sm text-vl-ink-muted">London, UK</p>
          </motion.div>

          <motion.div
            className="text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={2}
          >
            <FiMail size={36} className="mx-auto mb-3 text-vl-brown" />
            <h3 className="mb-2 text-lg font-semibold text-vl-brown-dark">Email Us</h3>
            <a
              href="mailto:contact@voltislabs.com"
              className="text-sm text-vl-brown underline hover:text-vl-brown-dark"
            >
              contact@voltislabs.com
            </a>
          </motion.div>

          <motion.div
            className="text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={3}
          >
            <FiPhone size={36} className="mx-auto mb-3 text-vl-brown" />
            <h3 className="mb-2 text-lg font-semibold text-vl-brown-dark">Call Us</h3>
            <a
              href="tel:+442039479699"
              className="text-sm text-vl-brown underline hover:text-vl-brown-dark"
            >
              +44 20 3947 9699
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
