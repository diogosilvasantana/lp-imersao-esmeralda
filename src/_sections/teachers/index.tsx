import { teachersData } from "./_data/teachersData";
import TeacherInfo from "./_components/teacher-info";
import { Section, TeacherData, Divider } from "./styles";

const TeachersSection = () => {
  return (
    <Section>
      <h1>Nossos Professores</h1>

      <TeacherData>
        {teachersData.map((teacher, index) => (
          <div key={index}>
            <TeacherInfo {...teacher} />
            {index < teachersData.length - 1 && <Divider />}
          </div>
        ))}
      </TeacherData>
    </Section>
  );
};

export default TeachersSection;
