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
    <div className="min-h-screen bg-black text-white flex flex-col pb-40 items-center pt-20 px-10">
      <div className="w-full max-w-4xl rounded-xl shadow-lg p-8 relative pb-24">
        <h1 className="text-2xl font-bold mb-2 text-center">Partner With Us <span className="text-[#667085] text-2xl font-normal">(Client Form)</span></h1>
        <form className="mt-8 space-y-4">
          <InputField
            label="Full Name"
            id="fullName"
            name="fullName"
            placeholder="Your Name"
            value={form.fullName}
            onChange={handleInputChange}
            required
          />
          <InputField
            label="Company name (Optional)"
            id="companyName"
            name="companyName"
            placeholder="Your Company Name"
            value={form.companyName}
            onChange={handleInputChange}
          />
          <InputField
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
            label="Phone Number"
            id="phone"
            name="phone"
            placeholder="Your Phone Number"
            value={form.phone}
            onChange={handleInputChange}
            required
          />
          <InputField
            label="Website or Portfolio (Optional)"
            id="website"
            name="website"
            placeholder="Your Website or Portfolio"
            value={form.website}
            onChange={handleInputChange}
          />
          <div className="mt-6">
            <Label htmlFor="services" className="mb-2">Which service are you interested in? <span className="text-xs text-gray-400">Select all that apply.</span></Label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-2">
              {SERVICES.map((service) => (
                <CardButton
                  key={service}
                  title={service}
                  expanded={selectedServices.includes(service)}
                  onClick={() => handleServiceToggle(service)}
                  className={`text-sm px-2 py-4 ${selectedServices.includes(service) ? 'border-[#90BEFF] border-2' : ''}`}
                  animationProps={{ style: { minHeight: '60px', minWidth: '120px', maxWidth: '220px' } }}
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
                  <Label htmlFor="idea">Tell us more about your idea/project.</Label>
                  <textarea
                    id="idea"
                    name="idea"
                    placeholder="Describe what you're building or what problem you're solving."
                    value={form.idea}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full bg-[#0D1117] text-white border border-gray-700 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-[#90BEFF] transition mb-4"
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
                    <Label htmlFor="file">Upload Deck / Files <span className="text-xs text-gray-400">(Optional)</span></Label>
                    <Upload fileName={fileName} handleFileChange={handleFileChange} />
                  </div>
                  
                </div>
              </motion.div>
        </form>
        <LinkButton title='Send Message' />
      </div>
    </div>
  );
};

export default Page; 