"use client"
import { Box, Button, Divider, Paper, Select, Text, TextInput } from "@mantine/core";
import Image from "next/image";
import crumb from "../../../public/crumb.png";
import blob from "../../../public/blb.webp";
import hero from "../../../public/herogirll.png";
import bg from "../../../public/background.png";
import decor from "../../../public/deco.webp";
import hero2 from "../../../public/hero2.webp";
import hero3 from "../../../public/hero3.webp";
import hero4 from "../../../public/hero4.webp";
import save from "../../../public/save.gif";
import thesis from "../../../public/thesis.gif";
import trust from "../../../public/trust.gif";
import timeline from "../../../public/timeline.gif";
import global from "../../../public/global.gif";
import checklist from "../../../public/checklist.gif";
import gradientbg from "../../../public/gradientbg.png";
import US from "../../../public/US.jpg";
import canada from "../../../public/Canada.jpg";
import sweden from "../../../public/sweden.png";
import italy from "../../../public/rome.png";
import london from "../../../public/londonpic.jpg";
import neth from "../../../public/neth.jpg";
import paris from "../../../public/par.jpg";
import rome from "../../../public/rome.png";
import austria from "../../../public/austriaa.png";
import russia from "../../../public/russia.jpg";
import start from "../../../public/start.svg";
import ApplyForm from "../_components/apply-form";
import Link from "next/link";

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
    image: thesis,
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
    image: timeline,
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
    image: checklist,
  },
];

const ourServices = [
  {
    title: "Educational Consultancy / Student Visa",
    content:
      "Navigating the vast landscape of educational opportunities can be overwhelming. Our experienced consultants are here to help you make informed decisions about your academic future. From choosing the right course and university to assisting with application processes, we ensure a seamless transition to your dream educational destination.",
    image: thesis,
  },
  {
    title: "Visa Assistance",
    content:
      "Securing a visa is a crucial step in your journey, and our team is dedicated to making this process as smooth as possible. We provide comprehensive visa assistance services, guiding you through the application process and offering support to increase your chances of success.",
    image: global,
  },
  {
    title: "Work Visa",
    content:
      "At Trust, we understand that work is an important part of your education. Our team of experts provides personalized guidance to help you navigate the challenges and opportunities that lie ahead.",
    image: timeline,
  },
  {
    title: "Counseling Services",
    content:
      "Embarking on an educational journey abroad involves more than just paperwork. Our expert counselors provide personalized guidance to address your concerns, ensuring that you are mentally prepared for the challenges and opportunities that lie ahead.",
    image: checklist,
  },
];

const destinations = [
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
      "Discover a culturally rich and diverse educational experience in Russia, where history, innovation, and warm hospitality converge. Your pathway to an extraordinary academic adventure begins here!",
  },
];

export default function Home() {
  return (
    <div>
      <Box className="flex min-h-[95dvh] items-center justify-evenly px-6 md:flex-row">
        <Box className="flex w-1/2 flex-col gap-10">
          <Image src={crumb.src} width={40} height={40} alt="crumb" />
          <p className="md:text-7xl text-6xl font-bold">
            Make<span className="text-secondary-700"> Dreams,</span> Explore
            <span className="text-primary-500"> Worlds</span> with Trust
          </p>
          <p className="md:text-lg">
            Trust Visa Consultancy is your gateway to a world of limitless
            possibilities. We are passionate about helping individuals and
            students achieve their international education and travel dreams.
          </p>
          <Box className="flex gap-6">
            <Link href={"/#apply"}>
            
            <Button className="w-fit bg-primary-700">Apply Now</Button>
            </Link>
            <Button variant="outline" className="w-fit">
              Learn More
            </Button>
          </Box>
          <Image
            src={blob.src}
            width={60}
            height={40}
            alt="blob"
            className="ml-auto"
          />
        </Box>
        <Box>
          <Image
            src={hero.src}
            width={600}
            height={500}
            alt="hero"
            className="relative z-10 border-b-4"
            priority
            quality={100}
            unoptimized={true}
          />
        </Box>
        <Box
          className="absolute right-0 top-0 min-h-[80dvh] w-full md:w-1/2 bg-cover bg-center bg-no-repeat md:bg-contain -z-10"
          style={{ backgroundImage: `url(${bg.src})` }}
        ></Box>
      </Box>
      <Box className="min-h-[90dvh]">
        <Box
          className="h-44 w-3/12 self-start"
          style={{ backgroundImage: `url(${decor.src})` }}
        />
        <Box className="md:-mt-12 flex items-center justify-evenly md:flex-row flex-col">
          <Box className="self-top flex w-1/2 flex-wrap items-center justify-center">
            <Image
              src={hero2.src}
              width={200}
              height={180}
              alt="hero2"
              className="rounded-lg -mt-24 md:mt-0"
            />
            <Image
              src={hero3.src}
              width={180}
              height={100}
              alt="hero2"
              className="-ml-6 md:mt-12 -mt-2 md:ml-0 rounded-lg"
            />
            <Image
              src={hero4.src}
              width={100}
              height={100}
              alt="hero2"
              className="md:-ml-56 -ml-72 md:mt-72 -mt-24 rounded-lg"
            />
          </Box>
          <Box className="flex md:w-1/2 flex-col md:gap-8 gap-1 p-6 md:p-0">
            <p className="md:text-6xl text-4xl font-bold text-primary-600">Who we are..</p>
            <p className="mt-4 md:text-lg text-md">
              Welcome to Trust Educational and Visa Consultancy, your premier
              destination for comprehensive overseas educational and travel
              solutions. Established in 2021 and based in Addis Ababa, Ethiopia,
              we are dedicated to empowering Ethiopian students and individuals
              with the opportunity to explore international educational
              institutions and embark on exciting journeys around the world.
            </p>
            <Button size="lg" className="mt-6 max-w-fit bg-secondary-700">
              Read More
            </Button>
          </Box>
        </Box>
        <Box
          style={{ backgroundImage: `url(${decor.src})` }}
          className="mx-auto h-44 w-[40dvw]"
        />
      </Box>
      <Box className="mt-10 flex min-h-[75dvh] flex-col justify-center bg-primary-50 py-10">
        <p className="text-center md:text-6xl text-5xl p-4 font-bold text-secondary-700">
          Why Choose Us?
        </p>
        <Box className="flex flex-col flex-wrap justify-center gap-4 pt-4 md:my-8 md:flex-row md:gap-8 md:px-8 p-4">
          {whyContent.map((item, index) => {
            return (
              <Box
                key={index}
                className="mt-4 flex md:w-[28dvw] cursor-pointer flex-col items-center rounded-md bg-white p-6 hover:bg-gray-200"
              >
                <Box
                  style={{ backgroundImage: `url(${item.image.src})` }}
                  className="mt-4 h-32 w-32 rounded-full bg-contain bg-center bg-no-repeat"
                />
                <p className="text-lg font-semibold">{item.title}</p>
                <Text mt={8} className="text-center">
                  {item.content}
                </Text>
              </Box>
            );
          })}
        </Box>
      </Box>
      <Box className="min-h-[90dvh] py-10">
        <p className="text-center text-5xl p-4 md:text-6xl font-bold" id="services">Our Services</p>
        <Box className="flex gap-4 p-4 md:flex-row flex-col md:p-8">
          {ourServices.map((item, index) => (
            <Box
              key={index}
              className="mb-2 flex cursor-pointer flex-col justify-between rounded p-5 shadow-xl md:w-[29dvw]"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.image.src}
                height={25}
                alt="Web Development"
                className="mx-auto"
              />
              <h1 className="text-center text-lg font-semibold">
                {item.title}{" "}
              </h1>
              <p className="m-2 text-center text-slate-600">{item.content}</p>
              <Button fullWidth variant="outline" className="text-center">
                More
              </Button>
            </Box>
          ))}
        </Box>
      </Box>
      <Box className="mt-10 flex min-h-[75dvh] flex-col justify-center bg-primary-50 py-10">
        <p className="text-center text-5xl p-4 md:text-6xl font-bold text-secondary-700">
          Destinations
        </p>
        <Box className="flex flex-col flex-wrap justify-center gap-4 pt-4 md:my-8 md:flex-row md:gap-8 md:px-8 p-6">
          {destinations.map((item, index) => {
            return (
              <Box
                key={index}
                className="mt-4 flex md:w-[28dvw] cursor-pointer flex-col items-center rounded-md bg-white p-6 hover:bg-gray-200"
              >
                <Box
                  style={{
                    backgroundImage: `url(${item.image.src})`,
                  }}
                  className="mt-4 h-56 w-56 transform rounded-full bg-cover bg-center bg-no-repeat transition-transform hover:scale-125"
                />
                <p className="mt-6 text-lg font-semibold">{item.title}</p>
                <Text mt={8} className="text-center">
                  {item.content}
                </Text>
              </Box>
            );
          })}
        </Box>
      </Box>
      <Box
        className="flex min-h-[90dvh] flex-col items-center bg-cover bg-center bg-no-repeat text-white"
        style={{ backgroundImage: `url(${gradientbg.src})` }}
      >
        <p className="pt-6 text-center text-5xl p-4 md:text-6xl font-bold" id="testimonials">Testimonials</p>
        <Box className="flex flex-col gap-10 md:p-24 p-6 text-center md:text-lg">
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
      </Box>
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
          <ApplyForm/>
        </Box>
      </Box>
    </div>
  );
}
