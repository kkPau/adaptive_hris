import acslogo from "/Users/kwadwo/Development/React js/adaptive_hris_home/src/assets/acslogo.png";

const Company = () => {
  return (
    <div className="px-16 md:px-32 py-7 bg-gray-100">
      <p className="text-3xl mb-6">Adaptive Computer Solutions</p>
      <p className="text-sm mb-6">
        As a trusted provider of technical and project management talent, we
        empower corporate clients to achieve their software development and
        integration goals. We offer a pool of highly skilled professionals,
        including software engineers, agile scrum masters, software operations
        and support specialists, quality assurance experts, and more. Our
        resources are available to businesses within Ghana and beyond, ensuring
        they reach their corporate objectives. . Our team of passionate
        developers, designers, and project managers specialize in creating
        innovative, high-quality software solutions tailored to meet the unique
        needs of each client. With years of experience and a commitment to
        excellence, we are your trusted partner in the digital world. At
        Adaptive Computer Solutions Limited, we specialize in providing
        top-notch software development services tailored for corporate clients.
        Our offerings encompass a wide range of solutions, from outsourcing and
        customizations to integrations and packaged software development. We
        take pride in our commitment to delivering exceptional quality,
        leveraging the expertise of our highly skilled African engineers and
        project managers to meet and exceed your business needs.
      </p>
      <div className="w-[40vw] md:w-[20vw] flex rounded-full bg-primary text-white pl-3 cursor-pointer transition-transform hover:scale-110 duration-300">
        <img className="w-2/5" src={acslogo} alt="" />
        <div className="w-2/3 flex justify-center  text-center items-center bg-blue-300 rounded-r-full">
          Visit our website
        </div>
      </div>
    </div>
  );
};

export default Company;
