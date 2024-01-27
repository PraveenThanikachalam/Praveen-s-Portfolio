"use client";
import Image from "next/image";
import profileImg from "@/public/my_Self.jpg";
import EntryRight from "./Motions/EntryRight";
import TypeWriter from "./Motions/TypeWriting";
import { motion } from "framer-motion";
import EntryTop from "./Motions/EntryTop";
import EntryBottom from "./Motions/EntryBottom";

export default function Home({ children }: { children: React.ReactNode }) {
  return (
    <motion.div className=" transition sm:pb-2 md:p-5 ease-linear w-full h-full  ">
      <section id="home">
        <div className="flex md:flex-row  sm:flex-col-reverse md:justify-center md:items-center md:gap-x-10 md:p-10">
          <div className="md:w-[800px] md:mt-24  sm:mt-5 sm:items-center  md:h-[500px] ">
            <div>
              <TypeWriter text=" Welcome to my Portfolio 😊 " />
            </div>
            <div className="md:mt-10 sm:mt-5">
              <TypeWriter text=" Hi, I'm Praveen Thanikachalam, currently a student and a freelance software engineer. I have a passion for coding and building robots. I find joy in exploring the realms of technology and constantly expanding my knowledge in the field." />
            </div>
          </div>

          <div className="  md:w-[500px] md:mt-10 md:h-[500px] ">
            
            <EntryRight>
              <Image
                className=" rounded-lg self-end "
                src={profileImg}
                alt={"Praveen"}
              />
            </EntryRight>
            <div className="  mb-1 ml-4 md:mt-4 sm:top-80 md:top-[500px]  absolute ">
              <EntryRight duration={2}>
                <h1 className="text-6xl    font-sans text-orange-100">Im,</h1>{" "}
                <h1 className="text-6xl mb-1 font-sans text-orange-100">
                  Praveen
                </h1>
              </EntryRight>
              <EntryRight duration={2.5}>
                <span className="text-lg text-orange-100  ml-1 font-semibold">
                  {" "}
                  Robotics and Software DEV
                </span>
              </EntryRight>
            </div>
          </div>
        </div>
      </section>
      <EntryTop>
        <div className="divider">Skills</div>
      </EntryTop>
      <section id="skills">
        <EntryBottom>
          <div className="mockup-code">
            <pre data-prefix="$">
              <code className="underline underline-offset-4">Languages</code>
            </pre>
            <pre data-prefix=">" className=" mt-1 text-warning">
              <code>Javascript</code>
            </pre>
            <pre data-prefix=">" className="text-success">
              <code>Typescript</code>
            </pre>
            <pre data-prefix=">" className="text-grey-400">
              <code>Python</code>
            </pre>
            <pre data-prefix=">" className="text-blue-400">
              <code>C</code>
            </pre>
          </div>

          <div className="mockup-code">
            <pre data-prefix="$">
              <code className="underline underline-offset-4">Frontend</code>
            </pre>
            <pre data-prefix=">" className="mt-1 text-orange-400">
              <code>HTML</code>
            </pre>
            <pre data-prefix=">" className="text-blue-400">
              <code>CSS</code>
            </pre>
            <pre data-prefix=">" className="text-grey-400">
              <code>Tailwind CSS</code>
            </pre>
            <pre data-prefix=">" className="text-teal-500">
              <code>React JS</code>
            </pre>
            <pre data-prefix=">" className="text-blue-400">
              <code>Next Js</code>
            </pre>
          </div>

          <div className="mockup-code">
            <pre data-prefix="$">
              <code className="underline underline-offset-4">Backend</code>
            </pre>
            <pre data-prefix=">" className="mt-1 text-success">
              <code>Node Js</code>
            </pre>
            <pre data-prefix=">" className="text-blue-400">
              <code>Express Js</code>
            </pre>
            <pre data-prefix=">" className="text-grey-400">
              <code>Next Auth</code>
            </pre>
          </div>

          <div className="mockup-code">
            <pre data-prefix="$">
              <code className="underline underline-offset-4">Database</code>
            </pre>
            <pre data-prefix=">" className="mt-1 text-warning">
              <code>MySql</code>
            </pre>
            <pre data-prefix=">" className="text-green-400">
              <code>MongoDB</code>
            </pre>
            <pre data-prefix=">" className="text-yellow-400">
              <code>PostgresSQL</code>
            </pre>
            <pre data-prefix=">" className="text-violet-400">
              <code>Prisma</code>
            </pre>
          </div>

          <div className="mockup-code">
            <pre data-prefix="$">
              <code className="underline underline-offset-4">Devops</code>
            </pre>
            <pre data-prefix=">" className="mt-1 text-orange-300">
              <code>GIT</code>
            </pre>
            <pre data-prefix=">" className="text-violet-400">
              <code>AWS</code>
            </pre>
          </div>

          <div className="mockup-code">
            <pre data-prefix="$">
              <code className="underline underline-offset-4">Robotics</code>
            </pre>
            <pre data-prefix=">" className="mt-1 text-orange-500">
              <code>ROS - Robot Operating System</code>
            </pre>
            <pre data-prefix=">" className="text-grey-400">
              <code>Machine Learning</code>
            </pre>
            <pre data-prefix=">" className="text-warning">
              <code>Localization and Navigation</code>
            </pre>
            <pre data-prefix=">" className="text-success">
              <code>Simulation - [ Gazebo, Rviz, Unity ]</code>
            </pre>
            <pre data-prefix=">" className="text-yellow">
              <code>Moveit</code>
            </pre>
          </div>
        </EntryBottom>
      </section>

      <section id="projects"></section>
      <EntryTop>
        <div className="divider">Social Media</div>
      </EntryTop>
      <div className="text-lg text-orange-100 flex gap-5 justify-center text-center ">
        <a href="https://www.instagram.com/_.prxveen._01?igsh=bXN0cDFnNzd3MTI2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#b5179e"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-instagram"
          >
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
          </svg>
        </a>
        <a href="https://github.com/PraveenThanikachalam">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#2a9d8f"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-github"
          >
            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
            <path d="M9 18c-4.51 2-5-2-7-2"></path>
          </svg>
        </a>
        <a href="https://www.linkedin.com/in/praveen-thanikachalam/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#0277b5"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-linkedin"
          >
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
            <rect width="4" height="12" x="2" y="9"></rect>
            <circle cx="4" cy="4" r="2"></circle>
          </svg>
        </a>
      </div>
    </motion.div>
  );
}
