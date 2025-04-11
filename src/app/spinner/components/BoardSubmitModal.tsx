import React, { useEffect, useState } from "react";
import ButtonWithBackground from "./button_with_background";
import ProfilePictureList from "./ProfilePicture";

interface BoardSubmitModalProps {
  show: boolean;
  maxRpm: number;
  setMaxRpm: (newMaxRpm: number) => void;
  onClose: () => void;
  onretry: () => void;
  onSubmit: (data: { title: string; description: string }) => void;
}

const BoardSubmitModal: React.FC<BoardSubmitModalProps> = ({
  show,
  onClose,
  maxRpm,
  onretry,
  setMaxRpm,
  onSubmit,
}) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [showSaveSection, setShowSaveSection] = useState(false); // State to toggle the save section
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const fileInputRef = React.useRef<HTMLInputElement | null>(null);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [usernameFocused, setUsernameFocused] = useState(false);
  const [emailFocused, setEmailFocused] = useState(false);
  const [isLoggedInUser, setIsLoggedUser] = useState(false)


  useEffect(() => {
    if (show) {
      setShowSaveSection(false);
      setIsLoggedUser(false);
      setTitle("");
      setDescription("");
      setUsername("");
      setEmail("");
      setProfileImage(null);
      setUsernameFocused(false);
      setEmailFocused(false);
    }
  }, [show]);


  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = () => {
    onSubmit({ title, description });
    setTitle("");
    setDescription("");
    onClose();
  };

  const handleUsernameFocus = () => {
    setUsernameFocused(true);
  };

  const handleUsernameBlur = () => {
    if (username === "") {
      setUsernameFocused(false);
    }
  };

  const handleEmailFocus = () => {
    setEmailFocused(true);
  };

  const handleEmailBlur = () => {
    if (email === "") {
      setEmailFocused(false);
    }
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4 sm:px-6 overflow-y-auto bg-[#00000050]">
      <div className="bg-gradient-to-r from-[#FF842A] to-[#FF5722] bg-opacity-90 rounded-lg shadow-lg w-full  max-w-[611px] p-4 sm:p-6 my-6 sm:my-12">
        {!showSaveSection ? (
          <>
            <div
              style={{ fontFamily: "var(--font-comix-loud)" }}
              className="text-[20px] mt-5 text-center text-white"
            >
              COMPLETE
            </div>
            <p
              style={{ fontFamily: "var(--font-titan-one)" }}
              className="text-[18px] sm:text-[20px] mt-5 text-center font-bold text-white"
            >
              You finished with a top RPM score of
            </p>
            <p
              style={{ fontFamily: "var(--font-titan-one)" }}
              className="text-[40px] sm:text-[50px] mt-5 text-center font-bold text-white"
            >
              {parseInt(maxRpm.toString())}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 mt-12 sm:mt-28 justify-center items-center">
              <ButtonWithBackground
                onClick={onretry}
                width="118"
                isWhite
                text="RETRY"
              />
              <ButtonWithBackground
                isWhite
                width="163"
                text="SAVE"
                onClick={() => setShowSaveSection(true)}
              />
              <ButtonWithBackground
                onClick={onClose}
                width="126"
                isWhite
                text="EXIT"
              />
            </div>
          </>
        ) : isLoggedInUser ? (
          <div className="mt-6 sm:mt-10">
            <ProfilePictureList
              pictures={[
                "/images/avatars/av1.png",
                "/images/avatars/av2.png",
                "/images/avatars/av3.png",
                "/images/avatars/av4.png",
                "/images/avatars/av5.png",
                "/images/avatars/av6.png",
                "/images/avatars/av7.png",
              ]}
            />

            <div className="mt-6 flex flex-col items-center space-y-4 px-4">
              {/* Wrapper to limit max width on larger screens */}
              <div className="w-full max-w-[477px] relative h-[65px]">
                <input
                  id="usernameInput"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  onFocus={handleUsernameFocus}
                  onBlur={handleUsernameBlur}
                  style={{
                    textTransform: "uppercase",
                    lineHeight: "70px",
                    fontFamily: "var(--font-comix-loud)",
                    fontSize: 20,
                  }}
                  className="w-full h-full px-4 text-white text-[20px] rounded-[10px] border-4 border-white focus:outline-none"
                />
                {!usernameFocused && username === "" && (
                  <span
                    className="absolute top-2 left-4 text-white text-[20px] uppercase"
                    style={{
                      fontFamily: "var(--font-comix-loud)",
                      lineHeight: "50px",
                      opacity: 0.6,
                      pointerEvents: "auto",
                    }}
                    onClick={() =>
                      document.getElementById("usernameInput")?.focus()
                    }
                  >
                    USERNAME
                  </span>
                )}
              </div>

              <div className="w-full max-w-[477px] relative h-[65px]">
                <input
                  type="text"
                  id="emailInput"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onFocus={handleEmailFocus}
                  onBlur={handleEmailBlur}
                  style={{
                    textTransform: "uppercase",
                    lineHeight: "70px",
                    fontFamily: "var(--font-comix-loud)",
                    fontSize: 20,
                  }}
                  className="w-full h-full px-4 text-white text-[20px] rounded-[10px] border-4 border-white focus:outline-none"
                />
                {!emailFocused && email === "" && (
                  <span
                    className="absolute top-2 left-4 text-white text-[20px] uppercase"
                    style={{
                      fontFamily: "var(--font-comix-loud)",
                      lineHeight: "50px",
                      opacity: 0.6,
                      pointerEvents: "auto",
                    }}
                    onClick={() =>
                      document.getElementById("emailInput")?.focus()
                    }
                  >
                    EMAIL
                  </span>
                )}
              </div>
            </div>

            <div className="flex  sm:flex-row gap-4 sm:gap-8 mt-8 justify-center items-center">
              <ButtonWithBackground
                onClick={onretry}
                width="118"
                isWhite
                text="RETRY"
              />
              <ButtonWithBackground
                isWhite
                width="163"
                text="SAVE"
              // onClick={() => setShowSaveSection(true)}
              />
              <ButtonWithBackground
                onClick={() => {
                  setShowSaveSection(false);
                  onClose();
                }}
                width="126"
                isWhite
                text="EXIT"
              />
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-3">
            <p className="text-center uppercase font-bold text-xl ">Save your score</p>
            {/* <div style={{ fontFamily: 'var(--font-comix-loud)' }} className=" cursor-pointer text-left uppercase text-white text-xs border border-[#FF842A] p-2.5 px-3 rounded-[10px]" onClick={() => setIsLoggedUser(true)}>SIGN UP</div> */}
            <div className="grid-cols-2 grid gap-4 ">

              <div className="grid w-fit grid-cols-1 gap-3">
                <div style={{ fontFamily: 'var(--font-comix-loud)' }} className="cursor-pointer  text-left uppercase text-white text-wrap text-xs border border-[#FF842A] p-2.5 px-3 rounded-[10px]" onClick={() => setIsLoggedUser(true)}>LOGIN</div>
                <div style={{ fontFamily: 'var(--font-comix-loud)' }} className="cursor-pointer leading-6  text-left uppercase text-white text-wrap text-xs border border-[#FF842A] p-2.5 px-3 rounded-[10px]" >LOGIN with facebook</div>
                <div style={{ fontFamily: 'var(--font-comix-loud)' }} className="cursor-pointer leading-6 text-left uppercase text-white text-wrap text-xs border border-[#FF842A] p-2.5 px-3 rounded-[10px]" >LOGIN with google</div>
              </div>
              <div className="grid w-fit grid-cols-1 gap-3">
                <div style={{ fontFamily: 'var(--font-comix-loud)' }} className="cursor-pointer leading-6 text-left uppercase text-white text-wrap text-xs border border-[#FF842A] p-2.5 px-3 rounded-[10px]" onClick={() => setIsLoggedUser(true)}>SIGN UP</div>
                <div style={{ fontFamily: 'var(--font-comix-loud)' }} className="cursor-pointer leading-6 text-left uppercase text-white text-wrap text-xs border border-[#FF842A] p-2.5 px-3 rounded-[10px]" >SIGN UP with facebook</div>
                <div style={{ fontFamily: 'var(--font-comix-loud)' }} className="cursor-pointer leading-6 text-left uppercase text-white text-wrap text-xs border border-[#FF842A] p-2.5 px-3 rounded-[10px]" >SIGN UP with google</div>
              </div>
            </div>
            <div style={{ fontFamily: 'var(--font-comix-loud)' }} className="cursor-pointer text-center uppercase text-white text-xs border border-[#FF842A] p-2.5 px-3 rounded-[10px] mt-auto" onClick={() => {
              onClose();
              setShowSaveSection(false)
            }}>Exit</div>

          </div>
        )}
      </div>
    </div>
  );
};

export default BoardSubmitModal;
