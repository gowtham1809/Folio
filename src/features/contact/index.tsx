import { useEffect, useRef, type FormEvent } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import "./styles.scss";


interface ContactInfo {
  icon: JSX.Element;
  title: string;
  content: string;
  link?: string;
}

const contactInfo: ContactInfo[] = [
  {
    icon: <FaEnvelope />,
    title: "Email",
    content: "gowthamrajezhumalai@gmail.com",
    link: "mailto:gowthamrajezhumalai@gmail.com",
  },
  {
    icon: <FaPhone />,
    title: "Phone",
    content: "+91 9791717559",
    link: "tel:+919791717559",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Location",
    content: "Namakkal, Tamil Nadu, India",
  },
];

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;

    try {
      console.log("Sending email...");
      console.log("Form data:", new FormData(formRef.current));

      await emailjs
        .sendForm(
          import.meta.env.VITE_SERVICE_ID || "service_id",
          import.meta.env.VITE_TEMPLATE_ID || "template_id",
          formRef.current,
          import.meta.env.VITE_PUBLIC_KEY || "public_key",
        )
        .then(
          (result) => {
            console.log("Email sent successfully:", result.text);
          },
          (error) => {
            console.error("Error sending email:", error.text);
            throw new Error("Email sending failed");
          },
        );

      toast.success("Message sent successfully!");
      formRef.current.reset();
    } catch (error) {
      toast.error(
        "Message couldn’t be sent. Kindly  ‘mail to  gowthamrajezhumalai@gmail.com’  to proceed.",
      );
      console.error("Error sending email:", error);
    }
  };

  return (
    <section id="contact" className="contact" ref={sectionRef}>
      <div className="contact__container">
        <h2 className="contact__title">Get in Touch</h2>
        <div className="contact__content">
          <div className="contact__info">
            {contactInfo.map((info, index) => (
              <div key={index} className="contact__info-item">
                <div className="contact__info-icon">{info.icon}</div>
                <div className="contact__info-content">
                  <h3 className="contact__info-title">{info.title}</h3>
                  {info.link ? (
                    <a
                      href={info.link}
                      className="contact__info-text"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {info.content}
                    </a>
                  ) : (
                    <p className="contact__info-text">{info.content}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
          <form ref={formRef} className="contact__form" onSubmit={handleSubmit}>
            <div className="contact__form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="contact__input"
              />
            </div>
            <div className="contact__form-group">
              <input
                type="email"
                name="to_email"
                placeholder="Your Email"
                required
                className="contact__input"
              />
            </div>
            {/* <div className="contact__form-group">
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
                className="contact__input"
              />
            </div> */}
            <div className="contact__form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                required
                className="contact__input contact__textarea"
              ></textarea>
            </div>
            <button type="submit" className="contact__submit">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
