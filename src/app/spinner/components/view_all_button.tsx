import React from 'react';

const ViewAllButton = ({ text, link, onClick }: { text: string; link?: string, onClick?: () => void }) => {
    return (
        <a onClick={onClick} href={link} className="w-fit py-2 px-5 rounded-md bg-white text-[#FF552A] text-[18px] flex flex-col justify-center font-medium capitalize cursor-pointer">
            {text}
        </a>
    );
};

export default ViewAllButton;
