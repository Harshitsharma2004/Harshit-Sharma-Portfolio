import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, GitHub, Linkedin, Instagram, MessageCircle } from "react-feather";

const Contact = () => {
  return (
    <motion.section
      id="contact"
      className="container py-5 text-center"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h2
        className="fw-bold mb-4"
        style={{
          background: "linear-gradient(90deg, #ff8a00, #e52e71)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Let's Connect! 🚀
      </h2>

      <motion.div
        className="card p-4"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
        style={{
          background: "rgba(255, 255, 255, 0.2)",
          backdropFilter: "blur(10px)",
          borderRadius: "15px",
          boxShadow: "0 8px 32px rgba(31, 38, 135, 0.37)",
          border: "1px solid rgba(255, 255, 255, 0.18)",
          maxWidth: "500px",
          margin: "auto",
          padding: "20px",
        }}
      >
        <div className="d-flex flex-column align-items-center">
          {/* Email */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginBottom: "15px",
            }}
          >
            <Mail size={40} style={{ color: "#007bff", marginBottom: "5px" }} />
            <p style={{ fontSize: "18px", fontWeight: "500" }}>heman12852@gmail.com</p>
          </motion.div>

          {/* Phone */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginBottom: "15px",
            }}
          >
            <Phone size={40} style={{ color: "#28a745", marginBottom: "5px" }} />
            <p style={{ fontSize: "18px", fontWeight: "500" }}>+91 6378700323</p>
          </motion.div>

          {/* Social Icons */}
          <div style={{ marginTop: "20px", display: "flex", gap: "20px" }}>
            <motion.a
              href="https://www.linkedin.com/in/harshit-sharma-303a36276"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.3 }}
            >
              <Linkedin size={40} style={{ color: "#0077b5" }} />
            </motion.a>

            <motion.a
              href="https://github.com/Harshitsharma2004"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.3 }}
            >
              <GitHub size={40} style={{ color: "#333" }} />
            </motion.a>

            <motion.a
              href="https://instagram.com/mr.sharma.2004"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.3 }}
            >
              <Instagram size={40} style={{ color: "#E1306C" }} />
            </motion.a>

            <motion.a
              href="https://wa.me/916378700323"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.3 }}
            >
              <MessageCircle size={40} style={{ color: "#25D366" }} />
            </motion.a>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Contact;
