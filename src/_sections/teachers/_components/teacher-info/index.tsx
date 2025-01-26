import React from "react";
import Image, { StaticImageData } from "next/image";
import {
  Teacher,
  TeacherBio,
  TeacherInfoData,
  TeacherPhoto,
  TeacherHeader,
  TeacherTitle,
  TeacherSpecialty,
} from "./styles";
import { useMediaQuery } from "../../../../hooks/useMediaQuery";

type TeacherInfoProps = {
  photo: StaticImageData | string;
  photoMobile?: StaticImageData | string;
  alt: string;
  name: string;
  specialty: string;
  notDrt?: boolean;
  drt?: string;
  bio: string[];
};

const TeacherInfo: React.FC<TeacherInfoProps> = ({
  photo,
  photoMobile,
  alt,
  name,
  specialty,
  notDrt = false,
  drt,
  bio,
}) => {
  const isMobile = useMediaQuery("(max-width: 1024px)"); // Usa o hook para detectar telas menores

  const currentPhoto = isMobile && photoMobile ? photoMobile : photo;

  return (
    <Teacher>
      <TeacherPhoto>
        <Image src={currentPhoto} alt={alt} />
      </TeacherPhoto>

      <TeacherInfoData>
        <TeacherHeader>
          <TeacherTitle>{name}</TeacherTitle>
          <TeacherSpecialty>
            <strong>Especialidade: {specialty}</strong>
            {!notDrt && <span>DRT: {drt}</span>}
          </TeacherSpecialty>
        </TeacherHeader>

        <TeacherBio>
          {bio.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </TeacherBio>
      </TeacherInfoData>
    </Teacher>
  );
};

export default TeacherInfo;
