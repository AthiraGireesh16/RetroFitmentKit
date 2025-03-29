import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";


// Import images
import background from "../assets/background.jpg";
import easyInstallation from "../assets/easy-installation.png";
import certificate from "../assets/certificate.png";
import cost from "../assets/cost.png";
import maintenance from "../assets/maintenance.png";
import kitIntro from "../assets/kit-intro.png";
import howItWorks from "../assets/how-it-works.png";
import image3 from "../assets/image3.png";
import nif from '../assets/nif.avif';
import nationalAward from '../assets/national-award.jpg';
import sristi from '../assets/SRISTI.gif';
import patent from '../assets/patent.jpg';
import arai from '../assets/arai.png';
import keralagovt from '../assets/keralagovt.png';



const revealVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const scrollToHome = () => {
    document.getElementById("home").scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    window.scrollToAbout = scrollToHome;
  }, []);

  const scrollToAbout = () => {
    document.getElementById("about").scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    window.scrollToAbout = scrollToAbout;
  }, []);


  const scrollToContact = () => {
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
  };
  
  useEffect(() => {
    window.scrollToContact = scrollToContact;
  }, []);
  

  return (
    <div
      className="relative h-full w-full min-h-screen flex flex-col items-center justify-center bg-cover bg-center bg-fixed overflow-y-auto px-4 sm:px-8"
      style={{ backgroundImage: `url(${background})` }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-white opacity-60"></div>

      {/* Centered Content */}
      <motion.div
        className="relative z-10 max-w-4xl w-full text-center pt-10 sm:pt-20"
        variants={revealVariant}
        initial="hidden"
        animate="visible"
      >
        <h1 className="text-3xl sm:text-5xl font-bold mb-6 text-gray-900">
          Retrofitment Kit
        </h1>
        <p className="text-lg sm:text-xl font-light leading-relaxed text-gray-700">
          A portable device that lets physically disabled persons control the brake, clutch, and accelerator by hand.
        </p>
        <motion.button
          className="mt-6 px-6 py-3 bg-blue-500 cursor-pointer text-white text-base font-medium rounded-lg shadow-md hover:bg-blue-700 transition duration-300 w-full sm:w-auto mb-20"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollToAbout}
        >
          Know More
        </motion.button>
      </motion.div>

      {/* Feature Cards */}
      <motion.div
        className="relative z-10 flex flex-wrap justify-center gap-6 px-4 py-12 w-full"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
        }}
      >
        {[  
          { title: "Easy Installation", img: easyInstallation, description: "Fits any vehicle with power steering & power brakes." },
          { title: "ARAI Certified", img: certificate, description: "Ensures compliance with CMVR safety standards." },
          { title: "Affordable", img: cost, description: "Cost ranges from Rs 15,000 to Rs 40,000." },
          { title: "Low Maintenance", img: maintenance, description: "Requires periodic inspection every 10,000 km." },
        ].map((feature, index) => (
          <motion.div
            key={index}
            className="bg-white p-5 rounded-lg shadow-lg text-center transition hover:scale-105 w-72 sm:w-80"
            variants={revealVariant}
          >
            <img src={feature.img} alt={feature.title} className="w-16 h-16 mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
            <p className="text-gray-600 text-sm">{feature.description}</p>
          </motion.div>
        ))}
      </motion.div>

{/* About Section with Images & Read More Feature */}
<motion.div
  id="about"
  className="relative z-10 max-w-3xl w-full text-center py-12 mt-12"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.3 }}
  variants={revealVariant}
>
  <h2 className="text-2xl font-bold text-gray-900 mb-4">About Retrofitment Kit</h2>

  {/* Two Images with Summary */}
  <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
    <img src={kitIntro} alt="Retrofitment Kit"  className="w-80 h-auto rounded-lg cursor-pointer shadow-lg transition-transform duration-300 transform hover:scale-120" />
    <p className="text-lg text-gray-700 leading-relaxed text-left">
      The Retrofitment Kit is a revolutionary device designed to empower individuals with physical disabilities, allowing them to drive vehicles safely and efficiently using hand controls. This innovative system enables users to control the brake, clutch, and accelerator without relying on their legs. Designed with universal compatibility, the kit can be installed in a wide range of vehicles without the need for permanent modifications, ensuring that users can drive with ease and confidence.
    </p>
  </div>

  <div className="mt-6 flex flex-col sm:flex-row-reverse justify-center items-center gap-6">
    <img src={howItWorks} alt="Hydraulic System"  className="w-80 h-auto rounded-lg cursor-pointer shadow-lg transition-transform duration-300 transform hover:scale-120" />
    <p className="text-lg text-gray-700 leading-relaxed text-left">
      The system incorporates hydraulic assistance, making it effortless for users to operate the controls with minimal physical exertion. This advanced technology ensures a smooth and comfortable driving experience, significantly reducing fatigue during long journeys. The kit is also certified under CMVR (Central Motor Vehicle Rules) and ARAI (Automotive Research Association of India), making it a safe and reliable choice for individuals seeking greater independence and mobility.
    </p>
  </div>

  {/* Read More Button */}
  {!isExpanded ? (
    <button
      onClick={() => setIsExpanded(true)}
      className="mt-6 px-6 py-3 bg-blue-500 text-white text-base font-medium rounded-lg cursor-pointer shadow-md hover:bg-blue-700 transition duration-300"
    >
      Read More
    </button>
  ) : (
    <>
      {/* Full Content Revealed on Click */}
      <motion.div
        className="text-lg text-gray-700 leading-relaxed mt-6 text-left"
        initial="hidden"
        animate="visible"
        variants={revealVariant}
      >
        <p>
          One of the standout features of the Retrofitment Kit is its affordability, with pricing ranging between ₹15,000 and ₹40,000. Unlike other expensive vehicle modification systems, this kit provides an economical solution without compromising on quality and safety. Its low maintenance requirement further adds to its appeal, with only periodic inspections needed every 10,000 kilometers to ensure optimal performance.
        </p>

        <div className="mt-6 flex flex-col sm:flex-row-reverse justify-center items-center gap-6">
        <img src={image3} alt="Hydraulic System"  className="w-80 h-auto rounded-lg cursor-pointer shadow-lg transition-transform duration-300 transform hover:scale-120" />
        <p className="mt-4">
          The installation process is straightforward and hassle-free, requiring no permanent alterations to the vehicle. The control lever is securely mounted near the steering wheel and connected to the vehicle’s existing brake, clutch, and accelerator systems. Once installed, users can effortlessly control their vehicle using their hands, ensuring a safe and responsive driving experience.
        </p>
        </div>

        <p className="mt-4">
          Beyond functionality, the Retrofitment Kit is a game-changer for individuals with disabilities, offering them freedom, independence, and confidence on the road. By breaking barriers and making driving more accessible, it empowers users to lead self-reliant lives. Whether for daily commuting, long-distance travel, or professional use, this kit provides a seamless driving experience without limitations.
        </p>

        <p className="mt-4">
          The technology behind the kit is continuously evolving, incorporating advanced ergonomics and safety features to further enhance user comfort. With a commitment to innovation and inclusivity, the Retrofitment Kit is not just a product—it's a movement towards accessible mobility for all.
        </p>

        {/* Collapse Button */}
        <button
          onClick={() => setIsExpanded(false)}
          className="mt-6 px-6 py-3 bg-gray-500 text-white text-base font-medium rounded-lg shadow-md hover:bg-gray-700 transition duration-300"
        >
          Show Less
        </button>
      </motion.div>
    </>
  )}
</motion.div>

{/* Achievements Section */}
<motion.div
  id="achievements"
  className="relative z-10 max-w-6xl w-full text-center py-12 mt-12"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.3 }}
  variants={revealVariant}
>
  {/* Section Heading */}
  <h2 className="text-2xl font-bold text-gray-900 mb-6">Achievements</h2>

  {/* Scrollable Cards Container */}
  <div className="relative overflow-hidden max-w-[1200px] mx-auto">
    
    {/* Navigation Buttons (Placed Outside Scrollable Area) */}
    <button 
      onClick={() => document.querySelector('.scroll-container').scrollBy({ left: -300, behavior: 'smooth' })}
      className="absolute left-0 top-1/2 cursor-pointer transform -translate-y-1/2 bg-white text-blue-500 p-3 rounded-full shadow-md z-20">
      ◀
    </button>

    <button 
      onClick={() => document.querySelector('.scroll-container').scrollBy({ left: 300, behavior: 'smooth' })}
      className="absolute right-0 top-1/2 cursor-pointer transform -translate-y-1/2 bg-white text-blue-500 p-3 rounded-full shadow-md z-20">
      ▶
    </button>

    {/* Scrollable Row */}
    <div className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory px-4 scroll-container"
         style={{ scrollbarWidth: "none", WebkitOverflowScrolling: "touch" }}>

      {/* Achievement Cards */}
      {[
        {
          img: nif,
          title: "National Innovation Foundation Award (2007)",
          desc: "Presented by Dr. A.P.J. Abdul Kalam for outstanding innovation."
        },
        {
          img: nationalAward,
          title: "National Award for The Empowerment of Persons With Disabilities (2011)",
          desc: "Presented by Smt. Pratibha Devisingh Patil, awarded by the Ministry of Social Justice & Empowerment."
        },
        {
          img: sristi,
          title: "SRISTI Award in Craftsmanship",
          desc: "Presented by Padmashree Prof. Anil K. Gupta for innovation in craftsmanship."
        },
        {
          img: patent,
          title: "Patent for Accessible Vehicle Control System",
          desc: 'Patent for "Manually Controlled Operating System for Physically Challenged Persons to Control Four-Wheel Vehicles."'
        },
        {
          img: arai,
          title: "Certification by ARAI",
          desc: "Certified by The Automotive Research Association of India (ARAI) under Govt. of India standards."
        },
        {
          img: keralagovt,
          title: "Government Authorization for Vehicle Modifications",
          desc: "Issued by the Transport Department of Kerala to modify vehicles for persons with disabilities."
        }
      ].map((achievement, index) => (
        <motion.div key={index} className="w-[270px] flex-shrink-0 bg-white shadow-lg rounded-lg p-6 snap-center"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}>
          <img src={achievement.img} alt={achievement.title}
               className="w-full h-40 object-contain rounded-lg mb-4"/>
          <h3 className="text-lg font-semibold text-gray-800">{achievement.title}</h3>
          <p className="text-gray-600">{achievement.desc}</p>
        </motion.div>
      ))}

    </div>

  </div>
</motion.div>


<motion.div
  id="founder"
  className="relative z-10 max-w-3xl w-full bg-white shadow-2xl rounded-xl p-8 flex flex-col md:flex-row items-center gap-6 py-12 my-12"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.3 }}
  variants={revealVariant}
>
  {/* Left Side - Founder Image */}
  <div className="w-full md:w-1/3 flex justify-center">
  <img
    src="/src/assets/founder.png"
    alt="Founder"
    className="w-36 h-36 md:w-44 md:h-44 rounded-full shadow-lg object-cover object-right"
  />
</div>



  {/* Right Side - Founder Message */}
  <div className="w-full md:w-2/3 text-center md:text-left">
    <h3 className="text-2xl font-bold text-gray-900 mb-3">Meet the Founder</h3>
    <p className="text-gray-700 text-base italic leading-relaxed">
      "Mobility should be a right, not a privilege. Our **retro fitment kit** empowers 
      physically disabled individuals to drive with ease, independence, and confidence. 
      We strive to make freedom accessible for everyone."
    </p>
  </div>
</motion.div>

{/* Adding Space Before Contact Section */}
<motion.div
  id="contact"
  className="relative z-10 max-w-3xl w-full bg-white shadow-lg rounded-xl p-6 flex flex-col items-center gap-6 py-12 my-12"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.3 }}
  variants={revealVariant}
>
  {/* Centered Heading Above Both Sections */}
  <div className="w-full">
    <h2 className="text-xl font-bold text-gray-900 text-center w-full mb-4">
      Contact Us
    </h2>
  </div>

  {/* Content Wrapper - Two Column Layout */}
  <div className="w-full flex flex-col md:flex-row items-center gap-6">
    {/* Left Side - Illustration with Message Above */}
    <div className="hidden md:flex flex-col w-1/2 items-center">
      <p className="text-gray-700 text-base font-semibold mb-3 text-center">
        Got questions? We’re just a message away! Contact us for any assistance or inquiries.
      </p>
      <img
        src="/src/assets/contact.jpg"
        alt="Contact Illustration"
        className="w-full h-auto"
      />
    </div>

    {/* Right Side - Contact Form */}
    <div className="w-full md:w-1/2">
      <form
        action="https://formspree.io/f/mjkyegjb"
        method="POST"
        className="flex flex-col space-y-3"
      >
        <label className="text-gray-700 font-medium">
          Name
          <input
            type="text"
            name="name"
            required
            className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </label>

        <label className="text-gray-700 font-medium">
          Email
          <input
            type="email"
            name="email"
            required
            className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </label>

        <label className="text-gray-700 font-medium">
          Message
          <textarea
            name="message"
            required
            rows="3"
            className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          ></textarea>
        </label>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
        >
          Send Message
        </button>
      </form>
    </div>
  </div>
</motion.div>






</div>
  );
};

export default Home;
