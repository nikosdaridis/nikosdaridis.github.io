import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [messageResult, setMessageResult] = useState("");

  const form = useRef();

  var timeout = null;

  function handleSubmit(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_csks0d8",
        "template_l4aoenf",
        form.current,
        "tkKxnFTTTampSyr3G",
      )
      .then((result) => {
        setMessageResult(
          result.status === 200
            ? "Message sent successfully"
            : "There was an error. Try again later",
        );

        clearTimeout(timeout);
        timeout = setTimeout(() => {
          setMessageResult("");
        }, 5000);
      });
  }

  return (
    <section
      name="contact"
      className="flex h-max min-h-screen w-full items-center justify-center bg-gradient-to-b from-secondary to-primary p-4 text-center"
    >
      {/* Container */}
      <form
        className="max-w-fit text-center"
        ref={form}
        onSubmit={(e) => handleSubmit(e)}
      >
        <h2 className="inline text-4xl font-bold text-text lg:text-6xl">
          Contact <span className="text-highlight">Me</span>
        </h2>

        {/* Name and Email */}
        <div className="mb-3 mt-20 flex flex-wrap justify-between">
          <input
            className="w-[49%] rounded-lg border-2 border-highlight bg-primary p-4 text-text duration-300 focus:border-text focus:outline-none focus:ring-0"
            type="text"
            placeholder="Name"
            name="name"
            required
          />
          <input
            className="w-[49%] rounded-lg border-2 border-highlight bg-primary p-4 text-text duration-300 focus:border-text focus:outline-none focus:ring-0"
            type="email"
            placeholder="Email"
            name="email"
            required
          />
        </div>

        {/* Message */}
        <textarea
          className="w-full rounded-lg border-2 border-highlight bg-primary p-4 text-text duration-300 focus:border-text focus:outline-none focus:ring-0"
          placeholder="Message"
          name="message"
          cols="70"
          rows="10"
          required
        />

        <p
          className={
            messageResult.includes("successfully")
              ? "mb-[-1rem] mt-4 text-green-500"
              : "mb-[-1rem] mt-4 text-red-500"
          }
        >
          {messageResult}
        </p>

        {/* Button */}
        <button
          className={
            messageResult
              ? "hidden"
              : "mx-auto my-8 flex items-center rounded-lg border-2 border-highlight px-4 py-3 text-text hover:bg-highlight"
          }
          type="submit"
          value="Send"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
