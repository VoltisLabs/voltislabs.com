import React from 'react';

const ViewAllButton = ({ text, link, onClick }: { text: string; link?: string, onClick?: () => void }) => {
    return (
        <a onClick={onClick} href={link} className="flex w-fit cursor-pointer flex-col justify-center rounded-full bg-vl-brown px-6 py-2.5 text-[18px] font-semibold capitalize tracking-wide text-vl-cream hover:bg-vl-brown-dark">
            {text}
        </a>
    );
};

export default ViewAllButton;
