// import Underline from "../Underline";
import photo from "../../assets/Rasel.jpg";
import Resume from "../../assets/Rasel-Sarker.pdf";
// import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init({
  duration: 1000, // values from 0 to 3000, with step 50ms
  easing: "ease in out", // default easing for AOS animations
});
const About = () => {
  return (
    <div id="about me" className=" py-20 w-full">
      {/* <h1 className="text-4xl text-center font-bold">About Me</h1>
            <Underline lineLength={"200"} /> */}

      <div className="md:flex  w-full  gap-10">
        <div className="md:w-1/2" data-aos="fade-right">
          <img className="w-full" src={photo} alt="" />
        </div>
        <div className="w-full mt-5 md:mt-0" data-aos="fade-top">
          <h1 className="text-5xl font-bold mb-3">About Me</h1>

          <h2 className="text-2xl font-bold mb-3 ">Backend Developer(python/Django)</h2>
          <p className="text-justify">
            This is Rasel sarker, Undergraduate Student at National University of
            Bangladesh.I am a Backend Developer(python/Django) and Newbie competive programmer.
            Programming is my passion and profession.I enjoy programming.I have proficiency in
            HTML5, CSS3, Javascript, C/C++, Python, MySQL, Sqlite, Postgresql, Django, RestAPIS, AWS, many more. I have
            completed more than 20 projects including 2 full-stack projects. I
            am a self-motivated and hard-working person. I am capable of writing
            clean and reusable code. I am qualified to adapt to new technology
            in a short time. As a Backend developer, my goal is to deliver
            outstanding project experiences that prioritize user satisfaction.
          </p>
          <button className="btn btn-primary mr-5 mt-5 text-white font-normal rounded-sm">
            <a href={Resume} download>
              Download Resume
            </a>
          </button>
          {/* <button className='btn btn-primary  text-white font-normal rounded-sm'>
                        <Link
                            to="https://drive.google.com/file/d/1Uz6lbK-EAVjkkmnKl6euoPu6103D8mcp/view?usp=sharing"
                            target='_blank'
                            className='inline-flex items-center'
                        >
                            Video
                        </Link>
                    </button> */}
        </div>
      </div>
    </div>
  );
};

export default About;
