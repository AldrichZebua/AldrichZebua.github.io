import Image from "next/image";

export const Linkedin = () => {
  return (
    <a
      href="https://www.linkedin.com/in/aldrich-deril-christian-zebua-690692330"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Image
        src={"image/logo/LinkedInIcon.png"}
        alt={"profil"}
        width={30}
        height={30}
      />
    </a>
  );
};

export const Instagram = () => {
  return (
    <a
      href="https://www.instagram.com/aldrichze03"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Image
        src={"image/logo/InstagramIcon.png"}
        alt={"profil"}
        width={30}
        height={30}
      />
    </a>
  );
};

export const Github = () => {
  return (
    <a
      href="https://github.com/AldrichZebua"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Image
        src={"image/logo/GithubIcon.png"}
        alt={"profil"}
        width={30}
        height={30}
      />
    </a>
  );
};
