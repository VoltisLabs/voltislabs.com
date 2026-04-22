import React from 'react';

const ViewAllButton = ({ text, link, onClick }: { text: string; link?: string, onClick?: () => void }) => {
    return (
        <a onClick={onClick} href={link} className="flex w-fit cursor-pointer flex-col justify-center rounded-md bg-vl-brown px-5 py-2 text-[18px] font-medium capitalize text-vl-cream hover:bg-vl-brown-dark">
            {text}
        </a>
    );
};

export default ViewAllButton;
