import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../styles.js";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import Lottie from "lottie-react";
import Send from "../assets/Send.json";
import Swal from "sweetalert2";

// template_jowaeq3 - Template ID
// service_iaa07q7 - Service ID
// 7cUljP2FVNy3NffHy - Public key

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading();
    emailjs
      .send(
        "service_iaa07q7",
        "template_jowaeq3",
        {
          from_name: form.name,
          to_name: "Mohiuddin",
          from_email: form.email,
          to_email: "mohiuddin.niddu@gmail.com",
          message: form.message,
        },
        "7cUljP2FVNy3NffHy"
      )
      .then(
        () => {
          setLoading(false);
          Swal.fire(
            'Good job!',
            'I will get back to you soon',
            'success'
          )
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.log(error.message);
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: `${error.message}`,
          });
        }
      );
  };
  return (
    <>
      <div className="xl:mt-12 lg:flex lg:flex-row items-center gap-10 overflow-hidden">
        <motion.div
          className=" bg-primary lg:w-1/2 p-8 rounded-2xl"
          variants={slideIn("left", "tween", 0.2, 1)}
        >
          <p className={styles.sectionSubText}>Get In Touch</p>
          <h3 className={styles.sectionHeadText}>Contact.</h3>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col gap-8"
          >
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's your name?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What's your Email?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Message</span>
              <textarea
                rows="7"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What do you want to say?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>
            <button
              type="submit"
              className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-secondary rounded-xl"
            >
              {" "}
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </motion.div>
        <div>
          <div className="">
            <Lottie className="" animationData={Send} />
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Contact, "contact");
