"use client";
import {
  Box,
  Button,
  Divider,
  Paper,
  Select,
  Text,
  TextInput,
} from "@mantine/core";
import "./page.module.css";
import Image from "next/image";
import crumb from "../../../public/crumb.svg";
import blob from "../../../public/blb.webp";
import hero from "../../../public/herogirll.png";
import bg from "../../../public/background.png";
import decor from "../../../public/deco.webp";
import hero2 from "../../../public/hero2.webp";
import hero3 from "../../../public/hero3.webp";
import hero4 from "../../../public/hero4.webp";
import save from "../../../public/save.gif";
import experience from "../../../public/Certification.gif";
import trust from "../../../public/trusted.gif";
import punctual from "../../../public/timeline.gif";
import global from "../../../public/worldwide.gif";
import personal from "../../../public/personal.gif";
//import gradientbg from "../../../public/gradientbg.png";
import US from "../../../public/US.jpg";
import canada from "../../../public/Canada.jpg";
import sweden from "../../../public/sweden.png";
import italy from "../../../public/rome.png";
import london from "../../../public/londonpic.jpg";
import neth from "../../../public/neth.jpg";
import paris from "../../../public/par.jpg";
//import rome from "../../../public/rome.png";
import austria from "../../../public/austriaa.png";
import russia from "../../../public/russia.jpg";
import start from "../../../public/start.svg";
import ApplyForm from "../_components/apply-form";
import Link from "next/link";
import { Carousel } from "@mantine/carousel";
//import { useRef } from "react";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { MantineProvider } from "@mantine/core";
//import Autoplay from "embla-carousel-autoplay";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const packages = [
  {
    title: "USA",
    image: US,
    content:
      "Home to many prestigious universities and colleges, attracting students from around the world.",
  },
  {
    title: "Canda",
    image: canada,
    content:
      "Known for its welcoming environment for international students and diverse academic programs and research opportunities.",
  },
  {
    title: "Italy",
    image: italy,
    content:
      "Home to some of the oldest and prestigious universities in the world, such as the University of Bologna and Sapienza University of Rome.",
  },
  {
    title: "Sweden",
    image: sweden,
    content:
      "Known for its innovative and research-oriented education system. Offers a wide range of academic programs and scholarships for international students.",
  },
  {
    title: "Austria",
    image: austria,
    content:
      "Renowned for its high-quality education system with world-class universities and research institutions.",
  },
  {
    title: "UK",
    image: london,
    content:
      "The UK is a global education hub, hosting renowned institutions like the University of Oxford, Cambridge University.",
  },
  {
    title: "France",
    image: paris,
    content:
      "France is renowned for its prestigious universities and research institutions like Sorbonne University and École Normale Supérieure.",
  },
  {
    title: "Netherlands",
    image: neth,
    content:
      "Known for its high-quality education system and strong in fields like engineering, economics, and social sciences.",
  },
  {
    title: "Russia",
    image: russia,
    content:
      "Discover a culturally rich and diverse educational experience in Russia, where history, innovation, and warm hospitality converge.",
  },
];
const whyContent = [
  {
    title: "Affordable",
    content:
      "Navigating international education can be costly, but at Trust, we believe in making quality education accessible. Our consultancy services are designed to be affordable without compromising on the quality of guidance and support.",
    image: save,
  },
  {
    title: "Experienced",
    content:
      "With years of experience in the industry, our team of dedicated professionals possesses the knowledge and expertise to guide you through every step of the process.",
    image: experience,
  },
  {
    title: "Trusted",
    content:
      "Trust is more than just a part of our name; it's the foundation of our consultancy. Over the years, we have earned the trust of countless students and families by delivering on our promises.",
    image: trust,
  },
  {
    title: "Punctual",
    content:
      "In the dynamic realm of international education, Trust recognizes the significance of time. Our dedicated team ensures precision and promptness in completing your applications, documentation, and visa processes. Your time is invaluable, and at Trust, we prioritize it every step of the way.",
    image: punctual,
  },
  {
    title: "Global Network",
    content:
      "Partnering with renowned universities and institutions worldwide, Trust Educational and Visa Consultancy opens doors to a vast array of educational opportunities, giving you access to the best programs and resources.",
    image: global,
  },
  {
    title: "Personalized Approach",
    content:
      "We understand that every student is unique. Our personalized approach ensures that your individual needs and aspirations are taken into account, providing tailored solutions for your educational and visa requirements.",
    image: personal,
  },
];
const office1LatLng = { lat: 37.7749, lng: -122.4194 };
const office2LatLng = { lat: 40.7128, lng: -74.006 };

export default function Home() {
  return (
    <MantineProvider>
      <div>
        <section className="mt-[150px] flex h-[400px] items-center justify-center sm:mt-0 sm:h-screen lg:mb-0 lg:bg-[#F6F8FF]">
          <div className="justify-center md:flex lg:items-center lg:pl-8">
            <div className=" mb-[10px] mt-8 flex flex-col px-[10px] md:mt-0 lg:w-1/2 lg:pr-[50px] ">
              <Image
                src={crumb}
                alt="Hero Image"
                width={20}
                height={40}
                quality={100}
                className="relative top-10 mb-[80px] hidden md:block lg:h-[50px] lg:w-[50px] "
              />
              <span className="mb-4 px-10 text-5xl font-bold text-[#394032] lg:px-0 lg:text-7xl ">
                Make <span className="text-[#37CA16]"> Dreams, </span> Explore{" "}
                <span className="text-primary-700">Worlds</span> with
                <span className="text-[#37CA16]"> Trust </span>
              </span>
              <p className="mb-8 px-12 text-justify text-lg lg:px-0 ">
                Trust Visa Consultancy is your gateway to a world of limitless
                possibilities. We are passionate about helping individuals and
                students achieve their international education and travel
                dreams.
              </p>
              <div className="mt-4 w-auto px-12 text-left lg:px-0 ">
                <Link href="#contact">
                  <span className="inline-block rounded-[5px] bg-primary-700 px-10 py-3 text-lg font-semibold text-white hover:bg-[#37CA16] lg:ml-0">
                    Contact Us
                  </span>
                </Link>
              </div>
              <Image
                src={blob}
                alt="Hero Image"
                width={80}
                height={100}
                quality={100}
                className="relative top-[50px] ml-[450px] "
              />
            </div>
            <div
              className="justify-auto ml-[40px] hidden h-screen items-center bg-cover md:flex lg:w-1/2 "
              style={{ backgroundImage: `url(${bg.src})` }}
            >
              <Image
                src={hero}
                alt="Hero Image"
                width={550}
                height={550}
                quality={100}
                className=" md:mr-[100px] md:mt-[-150px] lg:ml-[100px] lg:mr-0 lg:mt-0 lg:h-[550px] lg:w-[550px] lg:rounded-[210px]"
              />
            </div>
          </div>
        </section>
        <section id="about" className="h-auto bg-white text-black lg:h-screen ">
          <div className="bg-red mx-auto">
            <div className="flex h-auto w-full flex-wrap items-center rounded-[30px] bg-[#ffffff] py-9 text-black">
              <div className="mt-2 hidden w-1/2 md:mt-[180px] md:flex ">
                <div>
                  <Image
                    src={decor}
                    alt="Hero Image"
                    className="relative bottom-10 hidden lg:mt-[-100px] lg:block"
                    width={200}
                    height={300}
                    quality={100}
                  />
                  <Image
                    src={hero2}
                    alt="Hero Image"
                    className=" relative bottom-[100px] ml-[100px] mt-[-70px] hidden rounded-[40px] lg:block lg:h-[360px] lg:w-[250px]"
                    width={250}
                    height={360}
                    quality={100}
                  />
                </div>
                <div className="flex flex-col">
                  <Image
                    src={hero3}
                    alt="Hero Image"
                    className="mb-[30px] ml-[30px] mt-[35px] hidden rounded-[20px] lg:block lg:h-[160px] lg:w-[200px]"
                    width={200}
                    height={160}
                    quality={100}
                  />
                  <Image
                    src={hero4}
                    alt="Hero Image"
                    className="ml-[30px] hidden rounded-[20px] lg:block lg:h-[140px] lg:w-[120px]"
                    width={120}
                    height={140}
                    quality={100}
                  />
                  <Image
                    src={decor}
                    alt="Hero Image"
                    className="hidden lg:ml-[200px] lg:mt-[10px]  lg:block"
                    width={150}
                    height={150}
                    quality={100}
                  />
                </div>
              </div>
              <div className=" mb-[10px] mt-8 flex flex-col px-[15px] md:mt-0 lg:w-1/2 lg:pr-[50px] ">
                <h2 className="mb-8 text-left text-4xl font-bold  text-[#394032] lg:text-7xl ">
                  Who we are..
                </h2>
                <p className="text-white-700 mb-10 text-justify text-lg sm:mb-4">
                  Welcome to Trust Educational and Visa Consultancy, your
                  premier destination for comprehensive overseas educational and
                  travel solutions. Established in 2021 and based in Addis
                  Ababa, Ethiopia, we are dedicated to empowering Ethiopian
                  students and individuals with the opportunity to explore
                  international educational institutions and embark on exciting
                  journeys around the world.
                </p>
                <div className="mt-7 w-auto text-left">
                  <a
                    href="#contact"
                    className="inline-block rounded-[5px] bg-[#37CA16] px-10 py-3 text-lg font-semibold text-white hover:bg-green-700"
                  >
                    Read More
                  </a>
                </div>

                {/* <PopUpSection /> */}
              </div>
            </div>
          </div>
        </section>
        <div className="mt-[50px] bg-slate-200 px-10 pb-8 pt-[50px] md:pb-[100px] lg:mt-[100px]">
          <p className="mb-6 text-center text-4xl font-bold text-[#37CA16]  md:text-6xl">
            Why choose Us?
          </p>
          <div className="grid grid-cols-1 text-[#686568] md:grid-cols-2 lg:grid-cols-3">
            {whyContent.map((item, index) => {
              return (
                <div
                  key={index}
                  className="mx-auto my-8 flex flex-col items-center rounded-md bg-white  p-6 hover:bg-black/30 lg:w-[430px]"
                >
                  <div
                    style={{ backgroundImage: `url(${item.image.src})` }}
                    className="mb-4 mt-8 h-32 w-32 rounded-full bg-contain bg-center bg-no-repeat "
                  />
                  <p className="text-center text-xl font-semibold text-black">
                    {item.title}
                  </p>
                  <p mt-8 className="text-center font-light">
                    {item.content}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <Box className=" flex h-[500px] bg-[url('/images/grouppic.png')] bg-contain bg-center sm:h-screen">
          <Carousel
            withIndicators
            loop
            dragFree
            height="100%"
            className="h-full w-full flex-1"
            nextControlIcon={
              <IconArrowRight
                style={{ width: "2rem", height: "2rem" }}
                color="white"
              />
            }
            previousControlIcon={
              <IconArrowLeft
                style={{ width: "2rem", height: "2rem" }}
                color="white"
              />
            }
          >
            <Carousel.Slide className="z-50 flex w-full items-center ">
              <section className={`item`}>
                <div
                  className={`gradient-bg flex h-full w-full items-center justify-center`}
                >
                  <h1 className=" text-[38px] font-bold text-white lg:text-[70px]">
                    Our Services . . .
                  </h1>
                </div>
              </section>
            </Carousel.Slide>
            <Carousel.Slide className="flex w-full items-center">
              <section className={`item`}>
                <div
                  className={`gradient-bg1 flex h-auto w-full flex-col items-center justify-center `}
                >
                  <h1 className="mb-4 px-[15px] text-center text-[30px] font-bold text-white sm:mb-[40px] lg:text-[50px]">
                    Country/University and Course Selection
                  </h1>
                  <p className="font-semi-bold px-[15px] text-justify text-white lg:px-[300px] lg:text-[20px] ">
                    Taking into consideration your academic strengths and
                    weaknesses, financial capabilities, subjects of interest and
                    future plans, UEC will help you in identifying the right
                    course in the right college/university.
                  </p>
                </div>
              </section>
            </Carousel.Slide>
            <Carousel.Slide className="flex w-full items-center">
              <section className={`item`}>
                <div
                  className={`gradient-bg2 flex h-full w-full flex-col items-center justify-center `}
                >
                  <h1 className="mb-4 px-[15px] text-center text-[30px] font-bold text-white sm:mb-[40px] lg:text-[50px]">
                    Application Processing
                  </h1>
                  <p className="font-semi-bold px-[15px] text-justify text-white lg:px-[300px] lg:text-[20px] ">
                    Assistance in preparing the application letter and required
                    documents such as transcripts, letter of recommendations,
                    essays (Statement of Purpose) etc. is given on the basis of
                    a successful strategy to maximize the chance of admissions.
                  </p>
                </div>
              </section>
            </Carousel.Slide>
            <Carousel.Slide className="flex w-full items-center">
              <section className={`item`}>
                <div
                  className={`gradient-bg3 flex h-full w-full flex-col items-center justify-center `}
                >
                  <h1 className="mb-4 px-[15px] text-center text-[30px] font-bold text-white sm:mb-[40px] lg:text-[50px]">
                    Visa Guidance
                  </h1>
                  <p className="font-semi-bold px-[15px] text-justify text-white lg:px-[300px] lg:text-[20px] ">
                    UEC provides the guidance in preparing your visa application
                    and necessary documentation enabling you to put in
                    conclusive proof in terms of establishing your academic
                    genuineness, financial stability and roots back to Ethiopia.
                    We have an unbeatable success rate of over 90% in securing
                    student visas to even the toughest places in the world like
                    USA due to our systematic guidance and professional
                    approach.
                  </p>
                </div>
              </section>
            </Carousel.Slide>
          </Carousel>
        </Box>

        <div className="flex h-auto flex-col items-center justify-center pt-[100px] ">
          <h2 className="mb-16 text-center text-4xl font-bold text-[#394032] ">
            Our Top Destinations
          </h2>
          <div className="mb-6 flex flex-wrap justify-center">
            {packages.map((item, index) => (
              <div
                key={index} // Move the key prop to the outermost wrapper div
                className="mx-8 mb-10 flex flex-col justify-center lg:mb-20"
              >
                <div
                  className="h-[335px] w-[250px] rounded-[140px] bg-cover bg-center shadow-xl transition-transform duration-300 hover:scale-110 lg:ml-[25px] lg:h-[310px] lg:w-[210px] lg:items-center"
                  style={{
                    backgroundImage: `url(${item.image.src})`,
                  }}
                ></div>
                <div className="relative -z-10 mb-auto mt-[-115px] flex w-[250px] flex-col items-center rounded-2xl bg-white  p-4 pt-[125px] shadow-xl lg:h-[255px] lg:w-[260px]">
                  <p className="text-lg font-bold">{item.title}</p>
                  <p className="mb-[8px] text-center text-[13px]">
                    {item.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* <Box
        className="flex min-h-[90dvh] flex-col items-center bg-cover bg-center bg-no-repeat text-white"
        style={{ backgroundImage: `url(${gradientbg.src})` }}
      >
        <p
          className="p-4 pt-6 text-center text-5xl font-bold md:text-6xl"
          id="testimonials"
        >
          Testimonials
        </p>
        <Box className="flex flex-col gap-10 p-6 text-center md:p-24 md:text-lg">
          <p>
            "Trust Educational and Visa Consultancy exceeded my expectations.
            Their team's dedication ensured my application process was smooth
            and stress-free. I am now pursuing my dream degree abroad, and it
            wouldn't have been possible without Trust. Highly recommended!"
            <br /> — Sarah M., Successful Student
          </p>
          <p>
            "Choosing Trust was the best decision I made for my education
            abroad. Their affordable services, timely responses, and transparent
            guidance made the entire process seamless. Grateful for their
            unwavering support." <br />— Kaleab D., Happy Client
          </p>
          <p>
            "I was impressed by the level of trustworthiness and professionalism
            at Trust Educational and Visa Consultancy. They not only helped with
            my visa process but also provided valuable insights into my chosen
            field of study. Truly a reliable partner!"
            <br /> — Abel W., Satisfied Applicant
          </p>
          <p>
            "Time was of the essence for me, and Trust delivered. Their
            punctuality and efficiency were impressive. I felt confident
            throughout the process, knowing I had a dedicated team ensuring
            everything was on track. Thank you, Trust!"
            <br /> — Melat K., Successful Visa Applicant
          </p>
        </Box>
      </Box> */}

        <Box id="apply" className="my-10 flex min-h-[90dvh] flex-col">
          <p className="text-center text-6xl font-bold text-primary-700">
            Apply<span className="text-secondary-700"> Now</span>
          </p>
          <Box className="mt-12 flex flex-col p-4 lg:flex-row">
            <Image
              /* eslint-disable-next-line @typescript-eslint/no-unsafe-member-access */
              src={start.src as string}
              alt="Apply Now"
              width={500}
              height={100}
            />
            <ApplyForm />
          </Box>
        </Box>
        <div className="bg-slate-200 py-12">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              <div className="rounded-lg bg-white p-8">
                <h2 className="mb-4 text-2xl font-bold">Office 1</h2>
                <p className="mb-4">123 Main Street, City, State, Country</p>
                <div className="h-64">
                  <LoadScript googleMapsApiKey="YOUR_API_KEY">
                    <GoogleMap
                      mapContainerStyle={{ height: "100%" }}
                      center={office1LatLng}
                      zoom={15}
                    >
                      <Marker position={office1LatLng} />
                    </GoogleMap>
                  </LoadScript>
                </div>
              </div>
              <div className="rounded-lg bg-white p-8">
                <h2 className="mb-4 text-2xl font-bold">Office 2</h2>
                <p className="mb-4">456 Main Street, City, State, Country</p>
                <div className="h-64">
                  <LoadScript googleMapsApiKey="YOUR_API_KEY">
                    <GoogleMap
                      mapContainerStyle={{ height: "100%" }}
                      center={office2LatLng}
                      zoom={15}
                    >
                      <Marker position={office2LatLng} />
                    </GoogleMap>
                  </LoadScript>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MantineProvider>
  );
}
