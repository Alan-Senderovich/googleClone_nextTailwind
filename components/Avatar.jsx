import React from "react";
import Image from "next/image";

const Avatar = ({ url, className }) => {
  return (
    <Image
      className={`w-12 rounded-full cursor-pointer transition duration-150 transform hover:scale-110 ${className}`}
      loading="lazy"
      src={url}
      alt="profile-pic"
    />
  );
};

export default Avatar;
