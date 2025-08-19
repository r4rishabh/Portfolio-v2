import github from "../../assets/images/github.png";
import linkedin from "../../assets/images/linkedin.png";
const Footer = () => {
  return (
    <div className="bg-[#04081A] py-4">
         <hr className="border-t border-gray-800 mb-4 width-full  max-w-7xl mx-auto" />
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4 px-4">
        <p className="text-white text-center md:text-left">
          © 2025 RDS All rights reserved.
        </p>
        <div className="flex space-x-4">
          <a
            href="https://github.com/r4rishabh"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={github} alt="GitHub" className="h-8 w-8" />
          </a>
          <a
            href="https://linkedin.com/in/rds1333"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedin} alt="LinkedIn" className="h-8 w-8" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
