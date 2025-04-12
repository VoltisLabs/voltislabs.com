import React, { useState } from 'react';
import CustomModal from './modal';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import ButtonWithBackground from './button_with_background';
import { defaultPadding } from '../data';

const leaderboardData = [
    { rank: 1, username: 'jonathanross', rpm: 31345 },
    { rank: 1, username: 'jonathanross', rpm: 29367 },
    { rank: 1, username: 'jonathanross', rpm: 27074 },
    { rank: 1, username: 'jonathanross', rpm: 15000 },
    { rank: 1, username: 'jonathanross', rpm: 14799 },
    { rank: 1, username: 'jonathanross', rpm: 13545 },
    { rank: 1, username: 'jonathanross', rpm: 13125 },
    { rank: 1, username: 'jonathanross', rpm: 12342 },
    { rank: 1, username: 'jonathanross', rpm: 12132 },
    { rank: 15, username: 'jonathanross', rpm: 10345 },
];

const pageSize = 4;

const LeaderboardModal = ({ isOpen, onClose }: {
    onClose: () => void;
    isOpen: boolean;
}) => {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(leaderboardData.length / pageSize);

    const handlePageChange = (page: number) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    const paginatedData = leaderboardData.slice(
        (currentPage - 1) * pageSize,
        currentPage * pageSize
    );

    return (
        <CustomModal isOpen={isOpen} onClose={onClose}>
            <div className={`flex flex-col items-center ${defaultPadding} !pb-4 !gap-0`}>
                <h2
                    className="text-xl md:text-2xl font-bold text-black uppercase mb-6"
                    style={{ fontFamily: 'var(--font-comfortaa)' }}
                >
                    Leaderboards (Web)
                </h2>

                <div style={{ fontFamily: 'var(--font-comfortaa)' }} className="grid grid-cols-6 text-center  items-center font-medium  border-[6px] border-b-[3px] text-xl border-[#f2f2f220] rounded-t-[10px] uppercase">
                    <div className="px-4 py-3 border-r-[6px] border-[#f2f2f230]">#</div>
                    <div className="px-4 py-3 border-r-[6px] col-span-3 md:col-span-4 border-[#f2f2f230] text-start text-sm md:text-base">Username</div>
                    <div className="text-center col-span-2 md:col-span-1 text-sm md:text-base">Top RPM</div>
                </div>

                {paginatedData.map((entry, index) => (
                    <div
                        key={index}
                        className="grid grid-cols-6  items-center border-b-[3px] border-x-[6px]  border-[#f2f2f230]"
                    >
                        <span className="px-4 py-4 font-normal text-black text-sm text-center border-r-[6px] border-[#f2f2f230]" style={{ fontFamily: 'var(--font-comix-loud)' }}>{entry.rank}</span>
                        <div className="px-4 py-4 flex items-center justify-start text-start gap-2 col-span-3 md:col-span-4  border-r-[6px] border-[#f2f2f230] overflow-hidden">
                            <img
                                src="/svgs/loyal_user.svg"
                                alt="avatar"
                                className="w-6 h-6 rounded-full"
                            />
                            <span className="w-full overflow-hidden font-normal text-black text-ellipsis text-wrap break-words whitespace-nowrap text-xs leading-6 p md:text-sm uppercase " style={{ fontFamily: 'var(--font-comix-loud)' }}>
                                {entry.username}
                            </span>
                        </div>
                        <span style={{ fontFamily: 'var(--font-comix-loud)' }} className="w-full overflow-hidden text-ellipsis whitespace-nowrap col-span-2 md:col-span-1 px-1 md:px-4 py-4 font-normal text-black text-xs md:text-sm border-r-[6px] border-[#f2f2f230]">{entry.rpm}</span>
                    </div>
                ))}
                <div className='flex w-full justify-center my-4 px-2 relative'>

                    <div className='w-fit flex gap-4 '>

                        <button
                            onClick={() => handlePageChange(currentPage - 1)}
                            className="w-6 h-6 text-black bg-[#FF842A] flex items-center justify-center rounded-[10px]"
                        >
                            <FaChevronLeft size={12} />
                        </button>
                        <button
                            onClick={() => handlePageChange(currentPage + 1)}
                            className="w-6 h-6 text-black bg-[#FF842A] flex items-center justify-center rounded-[10px]"
                        >
                            <FaChevronRight size={12} />
                        </button>
                    </div>


                    <div className="flex items-center gap-2 ml-auto absolute top-0 right-0">
                        {[...Array(totalPages)].map((_, i) => (
                            <button
                                key={i}
                                style={{ fontFamily: 'var(--font-comix-loud)' }}
                                onClick={() => handlePageChange(i + 1)}
                                className={`text-xs font-normal ${currentPage === i + 1 ? 'text-black' : 'text-[#00000070]'
                                    }`}
                            >
                                {i + 1}
                            </button>
                        ))}
                    </div>
                </div>





                <div className="mt-4">
                    <ButtonWithBackground text="Close" width="180" onClick={onClose} />
                </div>
            </div>
        </CustomModal>
    );
};

export default LeaderboardModal;
