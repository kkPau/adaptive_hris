import Company from "../components/About/Company";
import GroupImage from "../components/About/GroupImage";
import HRIS from "../components/About/HRIS";
import RequestDemo from "../components/Home/RequestDemo";

const About = () => {
  return (
    <div>
      <GroupImage />
      <Company />
      <HRIS />
      <RequestDemo />
    </div>
  );
};

export default About;
