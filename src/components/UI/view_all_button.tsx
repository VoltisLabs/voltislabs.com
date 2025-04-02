import React from 'react';

const ViewAllButton = ({ text }: { text: string }) => {
    return (
        <button className="w-fit py-2 px-5 rounded-md bg-[#202020] text-white text-lg font-medium">
            {text}
        </button>
    );
};

export default ViewAllButton;
