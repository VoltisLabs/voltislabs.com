import React, { useState } from "react";

interface ProfilePictureListProps {
  pictures: string[];
}

const ProfilePictureList: React.FC<ProfilePictureListProps> = ({
  pictures,
}) => {
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [pictureList, setPictureList] = useState<string[]>(pictures);
  const fileInputRef = React.useRef<HTMLInputElement | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const newImage = reader.result as string;
        setProfileImage(newImage);
        setPictureList((prev) => [newImage, ...prev]);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAvatarClick = (avatar: string) => {
    setProfileImage(avatar);
  };

  return (
    <>
      <div className="flex flex-col items-center">
        <div
          onClick={() => fileInputRef.current?.click()}
          className={`w-[120px] sm:w-[160px] h-[120px] sm:h-[160px] text-center text-[16px] sm:text-[20px] rounded-full flex items-center justify-center cursor-pointer ${
            profileImage ? "" : "border-4 border-white border-opacity-60"
          }`}
          style={{
            borderColor: profileImage
              ? "transparent"
              : "rgba(255, 255, 255, 0.6)",
          }}
        >
          {profileImage ? (
            <img
              src={profileImage}
              alt="Profile Preview"
              className="w-full h-full object-cover rounded-full"
            />
          ) : (
            <span
              style={{ fontFamily: "var(--font-hammersmith-one)" }}
              className="text-center p-2 text-black"
            >
              UPLOAD
              <br /> OR <br />
              REPLACE
            </span>
          )}
        </div>

        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          onChange={handleImageChange}
          className="hidden"
        />
      </div>

      <div className="flex gap-[1.5rem] p-5 mt-6 overflow-x-auto w-[10rem] md:w-max mx-auto">
        {pictureList.map((picture, index) => (
          <img
            key={index}
            src={picture}
            onClick={() => handleAvatarClick(picture)}
            alt={`Profile ${index + 1}`}
            className={`w-[53px] h-[53px] rounded-full cursor-pointer transition-transform duration-200 ${
              profileImage === picture && "border-blue-500 scale-110"
            }`}
          />
        ))}
      </div>
    </>
  );
};

export default ProfilePictureList;
