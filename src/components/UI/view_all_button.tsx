import React from 'react';

const ViewAllButton = ({ text, link }: { text: string; link: string }) => {
    return (
        <a href={link} className="w-fit py-2 px-5 rounded-md bg-[#202020] text-white text-lg font-medium">
            {text}
        </a>
    );
};

export default ViewAllButton;
