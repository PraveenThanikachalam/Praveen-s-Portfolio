// @ts-nocheck
"use client";
import Image from "next/image";
import profileImg from "@/public/my_Self.jpg";
import EntryRight from "./Motions/EntryRight";
import TypeWriter from "./Motions/TypeWriting";
import EntryTop from "./Motions/EntryTop";
import EntryBottom from "./Motions/EntryBottom";
import { motion } from "framer-motion";
import { toast } from "react-hot-toast";
import { useState } from "react";
import { sendMail, sendmail2 } from "./_actions";
import { redirect } from "next/navigation";
import { Github } from "lucide-react";
import mmd_bg from "@/public/mmd_bg.svg";
import jokeapp_bg from "@/public/jokeapp_bg.svg";
import resume from "@/public/resume.png";
import { usePathname } from "next/navigation";

export default function Home() {
  const pathname = usePathname();
  console.log(pathname);

  const variants = {
    hidden: { opacity: 0, y: 200, x: 0 },
    enter: { opacity: 1, y: 0, x: 0 },
  };

  const [error, setError] = useState<string>("");
  const onSubmit = async (data: FormData) => {
    const res = await sendMail(data);
    if (res?.statusCode === 403) {
      setError("Try again later");
    } else {
      toast.success("Message sent successfully.", {
        style: {
          padding: "16px",
          color: "#fb923c",
          background: "black",
        },
        iconTheme: {
          primary: "#fb923c",
          secondary: "#111827",
        },
      });
      redirect("/");
    }
  };
  const onSubmitres = async (data: FormData) => {
    const res = await sendmail2(data);
    if (res?.statusCode === 403) {
      setError("Try again later");
    } else {
      toast.success("Redirecting to resume.pdf", {
        style: {
          padding: "16px",
          color: "#fb923c",
          background: "black",
        },
        iconTheme: {
          primary: "#fb923c",
          secondary: "#111827",
        },
      });
      redirect(
        "https://drive.google.com/file/d/1Aohoootubrw8-BUPHVrYlq3C2xC7ybkO/view?usp=sharing"
      );
    }
  };
  return (
    <div className="  sm:pb-2 md:p-5 ease-linear w-full h-full  ">
      <section className="" id="home">
        <dialog id="my_modal_3" className=" modal">
          <div className=" modal-box">
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </form>
            <div className="flex flex-col ">
              <div className="w-full">
                <h3 className="font-bold text-lg">Hello Folks!</h3>
                <p className="py-1">Download my resume here</p>

                <div className="sm:p-1  md:p-10 blur-sm">
                  <Image src={resume} alt="resume"></Image>
                </div>
                <form
                  className="mt-3 flex gap-y-2 flex-col"
                  action={onSubmitres}
                >
                  <input
                    type="email"
                    name="Email"
                    required
                    placeholder="Your Email"
                    className="input input-bordered input-ghost focus:border-transparent focus:ring-0 input-md   input-success w-full  "
                  />
                  <button type="submit" className="btn w-full btn-outline ">
                    {" "}
                    <a href="https://drive.google.com/file/d/1Aohoootubrw8-BUPHVrYlq3C2xC7ybkO/view?usp=sharing">
                      Submit{" "}
                    </a>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </dialog>
        <div className=" flex md:flex-row  sm:flex-col-reverse md:justify-center md:items-center md:gap-x-10 md:p-10">
          <div className="md:w-[800px]  md:mt-24 justify-center sm:mt-5 sm:items-center  md:h-[500px] ">
            <div>
              <TypeWriter text=" Welcome to my Portfolio 👋" />
            </div>
            <div className="md:mt-10  sm:mt-5">
              <TypeWriter text=" Hi, I'm Praveen Thanikachalam, currently a student and a freelance software engineer. I have a passion for coding and building robots. I find joy in exploring the realms of technology and constantly expanding my knowledge in the field." />
            </div>
            <EntryRight>
              <div
                onClick={() =>
                  document.getElementById("my_modal_3").showModal()
                }
                className="ml-0 right-7 md:w-full pr-4 "
              >
                <button className="btn  text-gray-300 m-2 mt-4 w-full glass">
                  My Resume//{" "}
                </button>
              </div>
            </EntryRight>
          </div>

          <div className="  md:w-[500px] md:mt-10 md:h-[500px] ">
            <EntryRight>
              <div className="relative">
                <Image
                  placeholder="blur"
                  className="border-dashed border-4 md:p-1 rounded-lg self-end "
                  src={profileImg}
                  alt={"Praveen"}
                />
                <div className="bottom-left md:relative md:mt-10 lg:absolute sm:absolute bottom-[8px] left-[16px]">
                  <span className="text-6xl  text-orange-100">Im,</span>
                  <br />
                  <span className="text-6xl  text-orange-100"> Praveen</span>
                  <br />
                  <span className="text-2xl  text-orange-100">
                    {" "}
                    Robotics and Software DEV
                  </span>
                </div>
              </div>
            </EntryRight>
          </div>
        </div>
      </section>

      <EntryTop>
        <div className="  text-orange-100 divider">Skills</div>
      </EntryTop>
      <section
        className="sm:p-1 p-10 md:p-0 overflow-hidden"
        id="skills"
      >
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
      <EntryTop>
        <div className=" text-orange-100 divider">Projects</div>
      </EntryTop>

      <motion.section
        id="projects"
        variants={variants}
        initial={variants.hidden}
        whileInView={variants.enter}
        className="lg:flex p-5 lg:justify-center gap-3 md:items-center  sm:pt-10 grid grid-cols-2 flex-col lg:gap-10 md:flex-row"
        transition={{ duration: 0.5 }}
      >
        {" "}
        <div className=" lg:w-[500px] flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <Image
                src={mmd_bg}
                className=" brightness-75 absolute rounded-[1rem] -z-10 object-cover w-full h-full"
                alt=""
              />
              <p className="title ">MMD APP</p>
              <p className="font-mono  text-orange-100">
                An app for film makers
              </p>
            </div>
            <div className="flex flex-col sm:p-2 justify-center items-center gap-3 flip-card-back">
              <p className="  title">Tech stack</p>
              <p className="  sm:overflow-scroll md:overflow-hidden text-zinc-100">
                Next_14, Typescript, NextAuth, Shadcn, Tailwindcss, Prisma,
                Mongodb
              </p>
              <a className="bg-black p-2 rounded-lg" href="https://github.com/PraveenThanikachalam/mmdApp.git">
                {" "}
                <Github />
              </a>
            </div>
          </div>
        </div>
        <div className=" lg:w-[500px] flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <Image
                src={jokeapp_bg}
                className=" brightness-75 absolute rounded-[1rem] -z-10 object-cover w-full h-full"
                alt=""
              />
              <p className="title">JOKE APP</p>
              <p className="font-mono text-orange-100">
                Generate joke in selected category
              </p>
            </div>
            <div className="flex flex-col sm:p-2 justify-center items-center gap-3 flip-card-back">
              <p className="title">Tech stack</p>
              <p className="   sm:overflow-scroll md:overflow-hidden text-zinc-100">
                EJS, Javascript, CSS, Bootstrap, JokeApi
              </p>
              <a className=" bg-black p-2 rounded-lg" href="https://github.com/PraveenThanikachalam/JokeAPI_WebApp.git">
                {" "}
                <Github />
              </a>
            </div>
          </div>
        </div>
        {/* <div className="lg:w-[500px] flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <p className="title">MMD APP</p>
              <p className="font-mono text-orange-100">
                An app for film makers
              </p>
            </div>
            <div className="flip-card-back">
              <p className="title">BACK</p>
              <p>Leave Me</p>
            </div>
          </div>
        </div>
        <div className="lg:w-[500px] flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <p className="title">MMD APP</p>
              <p className="font-mono text-gray-700">An app for film makers</p>
            </div>
            <div className="flip-card-back">
              <p className="title">BACK</p>
              <p>Leave Me</p>
            </div>
          </div>
        </div>
        <div className="lg:w-[500px] flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <p className="title">JOKE APP</p>
              <p className="font-mono text-gray-700">An app for film makers</p>
            </div>
            <div className="flip-card-back">
              <p className="title">BACK</p>
              <p>Leave Me</p>
            </div>
          </div>
        </div> */}
      </motion.section>
      <EntryTop>
        <div className="text-orange-100 divider">Contact</div>
      </EntryTop>
      <motion.section
        variants={variants}
        initial={variants.hidden}
        whileInView={variants.enter}
        transition={{ duration: 0.5 }}
        className=" flex flex-col  items-center"
        id="contact"
      >
        <form
          className="flex flex-col sm:w-80 md:gap-y-10 md:w-[500px] sm:m-32 md:mt-36 justify-center gap-6 items-start"
          action={onSubmit}
        >
          {" "}
          <p className="font-mono text-red-500">{error}</p>
          <input
            type="email"
            name="Email"
            required
            placeholder="Your Email"
            className="input input-bordered input-ghost focus:border-transparent focus:ring-0 input-lg sm:input-md md:input-lg input-success w-full  "
          />
          <input
            type="text"
            required
            name="Subject"
            placeholder="Subject"
            className="input input-bordered input-ghost  md:w-full focus:border-transparent focus:ring-0 sm:input-md md:input-lg input-lg input-warning w-full  "
          />
          <textarea
            placeholder="Message"
            name="Message"
            required
            minLength={50}
            className="textarea textarea-error input-ghost  text-[16px] md:textarea-lg sm:textarea-md w-full "
          ></textarea>
          <motion.button
            whileTap={{ scale: 0.85 }}
            className="btn self-center btn-active"
          >
            Submit
          </motion.button>
        </form>
        <div className="text-lg sm:mb-5 md:mb-0 text-orange-100 flex gap-5 justify-center text-center ">
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
      </motion.section>
    </div>
  );
}
