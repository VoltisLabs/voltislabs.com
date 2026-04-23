'use client'
import React, { useState } from 'react';
import InputField from '@/src/components/UI/InputField';
import CardButton from '@/src/components/UI/CardButton';
import Label from '@/src/components/UI/Label';
import { motion, AnimatePresence } from 'framer-motion';
import Upload from '@/src/components/Upload';
import LinkButton from '@/src/components/LinkButton';
import SelectField from '@/src/components/UI/SelectField';

const SERVICES = [
  'App development',
  'Web Development',
  'Product Design & Branding',
  'Creator Platforms',
  'Game Development',
  'AI Integrations',
  'Something Else',
];

const Page = () => {
  const [form, setForm] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    website: '',
    idea: '',
    timeline: '',
    hearAbout: '',
    file: null as File | null,
  });
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [fileName, setFileName] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleServiceToggle = (service: string) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setForm({ ...form, file: e.target.files[0] });
      setFileName(e.target.files[0].name);
    }
  };

  const showExtraFields = selectedServices.includes('Something Else');

  const handleSelectChange = (e: { target: { name: string; value: string } }) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex min-h-screen flex-col items-center bg-transparent pb-40 pt-20 text-vl-ink md:px-10">
      <div className="relative w-full rounded-2xl border border-vl-brown/20 bg-vl-cream-deep/90 p-5 shadow-sm md:max-w-4xl md:p-8 pb-24 backdrop-blur-sm">
        <h1 className="mb-2 text-center text-2xl font-bold text-vl-brown-dark">
          Partner With Us <span className="text-2xl font-normal text-vl-ink-muted">(Client Form)</span>
        </h1>
        <form className="mt-8 space-y-4">
          <InputField
            surface="light"
            label="Full Name"
            id="fullName"
            name="fullName"
            placeholder="Your Name"
            value={form.fullName}
            onChange={handleInputChange}
            required
          />
          <InputField
            surface="light"
            label="Company name (Optional)"
            id="companyName"
            name="companyName"
            placeholder="Your Company Name"
            value={form.companyName}
            onChange={handleInputChange}
          />
          <InputField
            surface="light"
            label="Email Address"
            id="email"
            name="email"
            type="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleInputChange}
            required
          />
          <InputField
            surface="light"
            label="Phone Number"
            id="phone"
            name="phone"
            placeholder="Your Phone Number"
            value={form.phone}
            onChange={handleInputChange}
            required
          />
          <InputField
            surface="light"
            label="Website or Portfolio (Optional)"
            id="website"
            name="website"
            placeholder="Your Website or Portfolio"
            value={form.website}
            onChange={handleInputChange}
          />
          <div className="mt-6">
            <Label htmlFor="services" surface="light" className="mb-2">
              Which service are you interested in?{" "}
              <span className="text-xs text-vl-ink-muted">Select all that apply.</span>
            </Label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-2">
              {SERVICES.map((service) => (
                <CardButton
                  surface="light"
                  key={service}
                  title={service}
                  expanded={selectedServices.includes(service)}
                  onClick={() => handleServiceToggle(service)}
                  className={`px-2 py-4 text-sm ${selectedServices.includes(service) ? "border-2 border-vl-brown" : ""}`}
                  animationProps={{ style: { minHeight: "60px", minWidth: "120px", maxWidth: "220px" } }}
                />
              ))}
            </div>
          </div>

          <AnimatePresence>
            {showExtraFields && (
              <motion.div
                key="extra-fields"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4 }}
                className=""
              >
                <div className="mt-6">
                  <Label htmlFor="idea" surface="light">
                    Tell us more about your idea/project.
                  </Label>
                  <textarea
                    id="idea"
                    name="idea"
                    placeholder="Describe what you're building or what problem you're solving."
                    value={form.idea}
                    onChange={handleInputChange}
                    rows={4}
                    className="mb-4 w-full rounded-lg border border-vl-brown/25 bg-white px-4 py-3 text-vl-ink transition focus:border-vl-brown/40 focus:outline-none focus:ring-2 focus:ring-vl-brown/25"
                  />
                
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          

              <motion.div
                key="extra-fields"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4 }}
                className="overflow-hidden"
              >
                <div className="mt-6">
              <SelectField
                surface="light"
                label="What's your ideal timeline?"
                id="timeline"
                name="timeline"
                value={form.timeline}
                onChange={handleSelectChange}
                options={[
                  'ASAP',
                  'Within 1 month',
                  '1 - 3 months',
                  '3 - 6 months',
                  '6 - 12 months',
                  "I'm Flexible"
                ]}
              />

              <SelectField
                surface="light"
                label="How did you hear about us?"
                id="hearAbout"
                name="hearAbout"
                value={form.hearAbout}
                onChange={handleSelectChange}
                options={[
                  'Google',
                  'Friend',
                  'Social Media',
                  'Event',
                  'Newsletter',
                  'Other'
                ]}
              />
                      
                  <div className="mt-4 ">
                    <Label htmlFor="file" surface="light">
                      Upload Deck / Files <span className="text-xs text-vl-ink-muted">(Optional)</span>
                    </Label>
                    <Upload surface="light" fileName={fileName} handleFileChange={handleFileChange} />
                  </div>
                  
                </div>
              </motion.div>
        </form>
        <LinkButton surface="light" title="Send Message" />
      </div>
    </div>
  );
};

export default Page; 