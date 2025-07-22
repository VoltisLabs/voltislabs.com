'use client'
import React, { useState } from 'react';
import InputField from '@/src/components/UI/InputField';
import CardButton from '@/src/components/UI/CardButton';
import Label from '@/src/components/UI/Label';
import { motion, AnimatePresence } from 'framer-motion';
import Upload from '@/src/components/Upload';
import LinkButton from '@/src/components/LinkButton';

const ROLES = [
  'Frontend Developer',
  'Backend Developer',
  'UI/UX Designer',
  'Product Manager',
  'QA Engineer',
  'Other',
];

const JoinTeam = () => {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    location: '',
    github: '',
    linkedin: '',
    role: '',
    website: '',
    availability: '',
    cv: null as File | null,
    excitement: '',
  });
  const [workType, setWorkType] = useState<string[]>([]);
  const [showDate, setShowDate] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [fileName, setFileName] = useState('');

  // Calendar logic
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();

  const [calendarMonth, setCalendarMonth] = useState(month);
  const [calendarYear, setCalendarYear] = useState(year);

  const daysInCalendarMonth = new Date(calendarYear, calendarMonth + 1, 0).getDate();
  const firstDayOfCalendar = new Date(calendarYear, calendarMonth, 1).getDay();
  const prevMonthDays = new Date(calendarYear, calendarMonth, 0).getDate();

  const handlePrevMonth = () => {
    if (calendarMonth === 0) {
      setCalendarMonth(11);
      setCalendarYear(calendarYear - 1);
    } else {
      setCalendarMonth(calendarMonth - 1);
    }
  };
  const handleNextMonth = () => {
    if (calendarMonth === 11) {
      setCalendarMonth(0);
      setCalendarYear(calendarYear + 1);
    } else {
      setCalendarMonth(calendarMonth + 1);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleWorkTypeToggle = (type: string) => {
    setWorkType((prev) => {
      const updated = prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type];
      setShowDate(updated.includes('Part-time'));
      return updated;
    });
  };

  const handleDateClick = (date: Date) => {
    setSelectedDate(date);
    setForm({ ...form, availability: date.toISOString().split('T')[0] });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setForm({ ...form, cv: e.target.files[0] });
      setFileName(e.target.files[0].name);
    }
  };

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDay = new Date(year, month, 1).getDay();
  const weekDays = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center py-20 px-4">
      <div className="w-full max-w-4xl rounded-xl shadow-lg p-8 relative pb-10">
        <h1 className="text-3xl font-bold mb-2 text-center">Join the Team <span className="text-[#90BEFF] text-xl font-normal">(Talent Recruitment Form)</span></h1>
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
            label="Email Address"
            id="email"
            name="email"
            placeholder="Your Name"
            value={form.email}
            onChange={handleInputChange}
            required
          />
          <InputField
            label="Location and time zone"
            id="location"
            name="location"
            placeholder="Your Email"
            value={form.location}
            onChange={handleInputChange}
            required
          />
          <InputField
            label="Github link"
            id="github"
            name="github"
            placeholder="https://"
            value={form.github}
            onChange={handleInputChange}
          />
          <InputField
            label="Linkedin link"
            id="linkedin"
            name="linkedin"
            placeholder="https://"
            value={form.linkedin}
            onChange={handleInputChange}
          />
          <div>
            <Label htmlFor="role">Role you're applying for</Label>
            <select
              id="role"
              name="role"
              value={form.role}
              onChange={handleInputChange}
              className="w-full bg-[#0D1117] text-white border border-gray-700 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-[#90BEFF] transition"
              required
            >
              <option value="">Select a role</option>
              {ROLES.map((role) => (
                <option key={role} value={role}>{role}</option>
              ))}
            </select>
          </div>
          <InputField
            label="Website or Portfolio (Optional)"
            id="website"
            name="website"
            placeholder="https://"
            value={form.website}
            onChange={handleInputChange}
          />
          <div className="mt-6">
            <Label htmlFor="workType" className="mb-2">Are you open to full-time or part-time? <span className="text-xs text-gray-400">Select all that apply.</span></Label>
            <div className="flex gap-4 mt-2">
              {['Full time', 'Part-time'].map((type) => (
                <CardButton
                  key={type}
                  title={type}
                  expanded={workType.includes(type)}
                  onClick={() => handleWorkTypeToggle(type)}
                  className={`text-sm px-8 py-2 ${workType.includes(type) ? 'border-[#90BEFF] border-2' : ''}`}
                  animationProps={{ style: { minWidth: '120px', maxWidth: '220px' } }}
                />
              ))}
            </div>
          </div>
          <AnimatePresence>
            {showDate && (
              <motion.div
                key="date-picker"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4 }}
                className="overflow-hidden"
              >
                <div className="mt-6 flex flex-col items-start w-full">
                  <Label htmlFor="availability">Availability to start</Label>
                  <div className="flex flex-col items-center w-full">
                    <div className=" rounded-[12px] border border-[#374151] shadow-md w-[320px] mx-auto p-0 pt-2 pb-4" style={{boxShadow:'0 2px 12px 0 #0008'}}>
                      <div className="flex items-center justify-between px-6 mb-2">
                        <button type="button" onClick={handlePrevMonth} className="text-[#C94A4A] text-xl font-bold px-2 focus:outline-none">&#60;</button>
                        <span className="text-white font-semibold text-base">{new Date(calendarYear, calendarMonth).toLocaleString('default', { month: 'long', year: 'numeric' })}</span>
                        <button type="button" onClick={handleNextMonth} className="text-[#C94A4A] text-xl font-bold px-2 focus:outline-none">&#62;</button>
                        <span className="text-white ml-4 text-sm font-normal">TUE</span>
                      </div>
                      <div className="grid grid-cols-7 gap-1 px-6 mb-2">
                        {weekDays.map((d) => (
                          <span key={d} className="text-xs text-white text-center opacity-80 font-medium">{d}</span>
                        ))}
                      </div>
                      <div className="grid grid-cols-7 gap-1 px-6">
                        {/* Previous month's days (not clickable, gray) */}
                        {Array.from({ length: firstDayOfCalendar }).map((_, i) => (
                          <span key={i} className="text-xs text-gray-600 text-center opacity-40 select-none">{prevMonthDays - firstDayOfCalendar + i + 1}</span>
                        ))}
                        {/* Current month's days */}
                        {Array.from({ length: daysInCalendarMonth }).map((_, i) => {
                          const date = new Date(calendarYear, calendarMonth, i + 1);
                          const isSelected = selectedDate && date.toDateString() === selectedDate.toDateString();
                          return (
                            <button
                              key={i + 1}
                              type="button"
                              onClick={() => handleDateClick(date)}
                              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm transition font-semibold
                                ${isSelected ? 'bg-[#C94A4A] text-white' : 'text-white hover:bg-[#232323]'}
                              `}
                              style={{margin:'0 auto'}}
                            >
                              {i + 1}
                            </button>
                          );
                        })}
                        {/* Next month's days (fill grid, not clickable, gray) */}
                        {(() => {
                          const totalCells = firstDayOfCalendar + daysInCalendarMonth;
                          const nextMonthDays = totalCells % 7 === 0 ? 0 : 7 - (totalCells % 7);
                          return Array.from({ length: nextMonthDays }).map((_, i) => (
                            <span key={i} className="text-xs text-gray-600 text-center opacity-40 select-none">{i + 1}</span>
                          ));
                        })()}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          <div className="my-10">
            <Label htmlFor="cv">Upload a CV</Label>
            <Upload fileName={fileName} handleFileChange={handleFileChange} />
          </div>
          <LinkButton title='Submit' />
        </form>
      </div>
    </div>
  );
};

export default JoinTeam; 