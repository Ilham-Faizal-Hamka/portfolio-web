"use client";
import React, { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FaWhatsapp, FaEnvelope, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import ParticlesComponent from "../components/sub/ParticlesComponent";
import emailjs from "@emailjs/browser";

const info = [
  { icon: <FaWhatsapp />, label: "Whatsapp", value: "(+62) 813-3786-3325" },
  {
    icon: <FaEnvelope />,
    label: "Email",
    value: "faizalhamka45.dev@gmail.com",
  },
  { icon: <FaLinkedin />, label: "LinkedIn", value: "Ilham Faizal Hamka" },
];

const Contact = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    if (!formRef.current) {
      console.error("Form reference is null.");
      setLoading(false);
      return;
    }

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "";
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "";
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? "";

    try {
      await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey);
      setSuccess(true);
      formRef.current.reset();
    } catch (error) {
      console.error("Gagal mengirim email:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6 relative"
    >
      <div className="absolute h-full w-full z-[-1]">
        <ParticlesComponent />
      </div>
      <div className="container mx-auto mt-36">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:h-[54%] order-2 xl:order-none">
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="flex flex-col xl:min-w-[800px] gap-6 p-10 bg-[#27272c] rounded-xl"
            >
              <h3 className="text-4xl text-[#9ffeff]">
                Let&apos;s Work Together
              </h3>
              <p className="text-white/60">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit,
                ea!
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
                <Input
                  name="firstname"
                  type="text"
                  placeholder="First Name"
                  required
                />
                <Input
                  name="lastname"
                  type="text"
                  placeholder="Last Name"
                  required
                />
                <Input
                  name="email"
                  type="email"
                  placeholder="Email Address"
                  required
                />
                <Input
                  name="phone"
                  type="tel"
                  placeholder="Phone Number"
                  required
                />
              </div>
              <Select name="service">
                <SelectTrigger className="w-full text-white">
                  <SelectValue placeholder="Select a Service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a Service</SelectLabel>
                    <SelectItem value="Consulting">Consulting</SelectItem>
                    <SelectItem value="Frontend">
                      Front-End Development
                    </SelectItem>
                    <SelectItem value="Backend">
                      Back-End Development
                    </SelectItem>
                    <SelectItem value="Fullstack">
                      Fullstack Development
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Textarea
                name="message"
                className="h-[200px] text-white"
                placeholder="Type your message here..."
                required
              />
              <Button
                type="submit"
                size="md"
                className="max-w-40"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Message"}
              </Button>
              {success && (
                <p className="text-green-500">Message sent successfully!</p>
              )}
            </form>
          </div>
          <div className="flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10 ">
              {info.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-6 p-5 hover:bg-[#9ffeff] group rounded-lg"
                >
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-[#9ffeff] rounded-md flex items-center justify-center">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60 group-hover:text-[#27272c]">
                      {item.label}
                    </p>
                    <h3 className="text-xl text-[#9ffeff] group-hover:text-[#27272c]">
                      {item.value}
                    </h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
