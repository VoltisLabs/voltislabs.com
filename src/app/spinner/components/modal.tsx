// components/CustomModal.tsx
import React, { useRef } from 'react';

const CustomModal = ({
    isOpen,
    onClose,
    children,
}: {
    isOpen: Boolean;
    onClose: () => void;
    children: React.ReactNode;
}) => {
    const modalRef = useRef<HTMLDivElement>(null);

    if (!isOpen) return null;

    const handleClickOutside = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
            onClose();
        }
    };

    return (
        <div
            className="fixed inset-0 z-50 flex items-center px-4 my-6 sm:my-12 sm:px-6 justify-center bg-[#00000050] "
            onClick={handleClickOutside}
        >
            <div
                ref={modalRef}
                className=" md:w-fit w-full  max-w-[611px] relative rounded-[20px]"
                style={{
                    background: 'linear-gradient(135deg , #FF842A, #FBBC18)',
                }}
                onClick={(e) => e.stopPropagation()} // Prevent bubbling from inside clicks
            >
                {children}
            </div>
        </div>
    );
};

export default CustomModal;
