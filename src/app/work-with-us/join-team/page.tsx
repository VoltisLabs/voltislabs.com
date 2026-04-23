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
    <div className="flex min-h-screen flex-col items-center bg-transparent px-4 py-20 text-vl-ink">
      <div className="relative w-full max-w-4xl rounded-2xl border border-vl-brown/20 bg-vl-cream-deep/90 p-8 pb-10 shadow-sm backdrop-blur-sm">
        <h1 className="mb-2 text-center text-3xl font-bold text-vl-brown-dark">
          Join the Team{" "}
          <span className="text-xl font-normal text-vl-ink-muted">(Talent Recruitment Form)</span>
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
            label="Email Address"
            id="email"
            name="email"
            placeholder="Your Name"
            value={form.email}
            onChange={handleInputChange}
            required
          />
          <InputField
            surface="light"
            label="Location and time zone"
            id="location"
            name="location"
            placeholder="Your Email"
            value={form.location}
            onChange={handleInputChange}
            required
          />
          <InputField
            surface="light"
            label="Github link"
            id="github"
            name="github"
            placeholder="https://"
            value={form.github}
            onChange={handleInputChange}
          />
          <InputField
            surface="light"
            label="Linkedin link"
            id="linkedin"
            name="linkedin"
            placeholder="https://"
            value={form.linkedin}
            onChange={handleInputChange}
          />
          <div>
            <Label htmlFor="role" surface="light">
              Role you&apos;re applying for
            </Label>
            <select
              id="role"
              name="role"
              value={form.role}
              onChange={handleInputChange}
              className="w-full rounded-lg border border-vl-brown/25 bg-white py-3 px-4 text-vl-ink transition focus:border-vl-brown/40 focus:outline-none focus:ring-2 focus:ring-vl-brown/25"
              required
            >
              <option value="">Select a role</option>
              {ROLES.map((role) => (
                <option key={role} value={role}>{role}</option>
              ))}
            </select>
          </div>
          <InputField
            surface="light"
            label="Website or Portfolio (Optional)"
            id="website"
            name="website"
            placeholder="https://"
            value={form.website}
            onChange={handleInputChange}
          />
          <div className="mt-6">
            <Label htmlFor="workType" surface="light" className="mb-2">
              Are you open to full-time or part-time?{" "}
              <span className="text-xs text-vl-ink-muted">Select all that apply.</span>
            </Label>
            <div className="mt-2 flex gap-4">
              {["Full time", "Part-time"].map((type) => (
                <CardButton
                  surface="light"
                  key={type}
                  title={type}
                  expanded={workType.includes(type)}
                  onClick={() => handleWorkTypeToggle(type)}
                  className={`px-8 py-2 text-sm ${workType.includes(type) ? "border-2 border-vl-brown" : ""}`}
                  animationProps={{ style: { minWidth: "120px", maxWidth: "220px" } }}
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
                <div className="mt-6 flex w-full flex-col items-start">
                  <Label htmlFor="availability" surface="light">
                    Availability to start
                  </Label>
                  <div className="flex w-full flex-col items-center">
                    <div
                      className="mx-auto w-[320px] rounded-[12px] border border-vl-brown/20 bg-white p-0 pb-4 pt-2 shadow-md"
                      style={{ boxShadow: "0 2px 12px 0 rgba(60, 48, 40, 0.12)" }}
                    >
                      <div className="mb-2 flex items-center justify-between px-6">
                        <button
                          type="button"
                          onClick={handlePrevMonth}
                          className="px-2 text-xl font-bold text-[#C94A4A] focus:outline-none"
                        >
                          &#60;
                        </button>
                        <span className="text-base font-semibold text-vl-ink">
                          {new Date(calendarYear, calendarMonth).toLocaleString("default", {
                            month: "long",
                            year: "numeric",
                          })}
                        </span>
                        <button
                          type="button"
                          onClick={handleNextMonth}
                          className="px-2 text-xl font-bold text-[#C94A4A] focus:outline-none"
                        >
                          &#62;
                        </button>
                        <span className="ml-4 text-sm font-normal text-vl-ink-muted">TUE</span>
                      </div>
                      <div className="mb-2 grid grid-cols-7 gap-1 px-6">
                        {weekDays.map((d) => (
                          <span key={d} className="text-center text-xs font-medium text-vl-ink-muted opacity-90">
                            {d}
                          </span>
                        ))}
                      </div>
                      <div className="grid grid-cols-7 gap-1 px-6">
                        {/* Previous month's days (not clickable, gray) */}
                        {Array.from({ length: firstDayOfCalendar }).map((_, i) => (
                          <span key={i} className="select-none text-center text-xs text-vl-ink-muted opacity-40">
                            {prevMonthDays - firstDayOfCalendar + i + 1}
                          </span>
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
                              className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold transition ${
                                isSelected
                                  ? "bg-[#C94A4A] text-white"
                                  : "text-vl-ink hover:bg-vl-cream-muted"
                              }`}
                              style={{ margin: "0 auto" }}
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
                            <span key={i} className="select-none text-center text-xs text-vl-ink-muted opacity-40">
                              {i + 1}
                            </span>
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
            <Label htmlFor="cv" surface="light">
              Upload a CV
            </Label>
            <Upload surface="light" fileName={fileName} handleFileChange={handleFileChange} />
          </div>
          <LinkButton surface="light" title="Submit" />
        </form>
      </div>
    </div>
  );
};

export default JoinTeam; 