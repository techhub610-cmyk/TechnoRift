import React from 'react';
import { IoPhonePortraitOutline } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { FaMapPin } from "react-icons/fa";
import { FaLinkedin, FaFacebookF, FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";

import video from "../Assets/map.mp4";

export default function ContactSection() {
    return (
        <section className="flex flex-col md:flex-row items-center justify-between px-16 py-32 bg-[radial-gradient(circle_at_right,_#02B4D8_0%,_#0a0a0a_60%,_black_100%)]">

            {/* LEFT SIDE */}
            <div className="md:w-1/2 space-y-8 pl-4">
                <h2 className="text-[53px] leading-tight font-extrabold text-white">
                    Contact <span className="text-[#02B4D8]">Us</span>{' '}
                </h2>
                <p className="text-[20px] text-white leading-relaxed">
                    Get in Touch with Our Expert Team for Tailored Digital Marketing Solutions
                </p>

                <div className="space-y-4 text-[18px] text-white">
                    <div className="flex items-center space-x-2">
                        <IoPhonePortraitOutline className="text-[22px]" />
                        <p>+923171708491</p>
                    </div>
                    <div className='flex items-center space-x-2'>
                        <IoMdMail />
                        <p>info@technorifts.com</p>
                    </div>
                    <div className='flex items-center space-x-2'>
                        <FaMapPin />
                        <p>Amir Plaza College Road, Kohinoor City Faisalabad</p>
                    </div>
                </div>

                {/* Social Icons */}
                <div className="flex space-x-10 mt-6 text-xl ml-5">
                    <a href="https://www.linkedin.com/company/technorift/" className="text-gray-500 hover:text-blue-600"><FaLinkedin /></a>
                    <a href="https://www.facebook.com/share/1CYyH5zVnc/?mibextid=wwXIfr" className="text-gray-500 hover:text-blue-600"><FaFacebookF /></a>
                    <a href="https://www.instagram.com/technorift600/profilecard/?igsh=dnphNnlrcW11cnc0" className="text-gray-500 hover:text-[rgb(213,86,83)]"><FaInstagram /></a>
                    <a href="#" className="text-gray-500 hover:text-green-500"><FaWhatsapp /></a>
                    <a href="https://www.tiktok.com/@techhub41?_t=ZN-8yH5F7HK2Y2&_r=1" className="text-gray-500 hover:text-[#1db4aa]"><FaTiktok /></a>
                </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
                <video
                    className="w-full max-w-md rounded-lg shadow-lg"
                    src={video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    controls={false}
                    disablePictureInPicture
                    controlsList="nodownload nofullscreen noremoteplayback"
                />
            </div>
        </section>
    );
}
