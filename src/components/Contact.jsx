'use client';
import React, { useState , useEffect } from "react";


function Contact() {
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      message: "",
    });
    const [loading, setLoading] = useState(false);
  
    const handleInputChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      setLoading(true);
  
      try {
        const response = await fetch("/integrations/chat-gpt/conversationgpt4", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            messages: [
              {
                role: "user",
                content: `New contact form submission:
                  Name: ${formData.name}
                  Email: ${formData.email}
                  Message: ${formData.message}
                  
                  Please send this to bakerdomore@gmail.com`,
              },
            ],
          }),
        });
  
        if (response.ok) {
          setFormData({ name: "", email: "", message: "" });
        }
      } catch (error) {
        console.error("Error sending message:", error);
      } finally {
        setLoading(false);
      }
    };
  
    return (
      <section id="contact" className="w-full py-20 transform-style-preserve-3d">
        <div className="max-w-7xl mx-auto px-2 sm:px-4">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center text-[#70BA65] relative">
            Get In Touch
            <div className="absolute w-20 h-1 bg-[#70BA65] bottom-[-10px] left-1/2 transform -translate-x-1/2"></div>
          </h2>
          <div className="grid md:grid-cols-2 gap-6 sm:gap-12">
            <div className="space-y-6 sm:space-y-8">
              <div className="bg-opacity-10 bg-[#70BA65] p-4 sm:p-8 rounded-xl transform-style-preserve-3d hover:translate-z-30 transition-transform duration-300">
                {[
                  {
                    icon: "map-marker-alt",
                    title: "Location",
                    text: "Lahore, Pakistan",
                  },
                  {
                    icon: "envelope",
                    title: "Email",
                    text: "bakerdomore@gmail.com",
                  },
                  { icon: "phone", title: "Phone", text: "+92 301-5555555" },
                ].map((contact, index) => (
                  <div
                    key={index}
                    className={`flex items-center ${index !== 2 ? "mb-4 sm:mb-6" : ""}`}
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-[#70BA65] text-white">
                      <i
                        className={`fas fa-${contact.icon} text-sm sm:text-base`}
                      ></i>
                    </div>
                    <div className="ml-3 sm:ml-4">
                      <h3 className="font-bold text-lg sm:text-xl">
                        {contact.title}
                      </h3>
                      <p className="text-sm sm:text-base">{contact.text}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex justify-center space-x-4 sm:space-x-6">
                {[
                  { icon: "linkedin-in", href: "#" },
                  { icon: "github", href: "#" },
                  { icon: "twitter", href: "#" },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-[#70BA65] text-white hover:scale-110 transition-transform"
                  >
                    <i
                      className={`fab fa-${social.icon} text-sm sm:text-base`}
                    ></i>
                  </a>
                ))}
              </div>
            </div>
            <form
              onSubmit={handleSubmit}
              className="bg-opacity-10 bg-[#70BA65] p-4 sm:p-8 rounded-xl transform-style-preserve-3d hover:translate-z-30 transition-transform duration-300"
            >
              {[
                { label: "Name", type: "text", name: "name" },
                { label: "Email", type: "email", name: "email" },
              ].map((field, index) => (
                <div key={index} className="mb-4 sm:mb-6">
                  <label className="block mb-2 font-bold text-sm sm:text-base">
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleInputChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg bg-opacity-20 bg-[#70BA65] focus:outline-none focus:ring-2 focus:ring-[#70BA65] text-sm sm:text-base"
                    required
                  />
                </div>
              ))}
              <div className="mb-4 sm:mb-6">
                <label className="block mb-2 font-bold text-sm sm:text-base">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="4"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg bg-opacity-20 bg-[#70BA65] focus:outline-none focus:ring-2 focus:ring-[#70BA65] text-sm sm:text-base"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full py-2 sm:py-3 rounded-lg bg-[#70BA65] text-white font-bold hover:bg-opacity-90 transform hover:translate-z-20 transition-all text-sm sm:text-base disabled:opacity-50"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </section>
    );
  }

  export default Contact;