"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react";
import { PERSONAL_INFO } from "@/lib/constants";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for this field when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      // Send email using Web3Forms API
      const emailResponse = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: "YOUR_WEB3FORMS_ACCESS_KEY", // Replace with actual key
          from_name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: "mizairyakthar@gmail.com",
        }),
      });

      // Send to WhatsApp
      const whatsappMessage = encodeURIComponent(
        `*New Contact Form Submission*\n\n` +
          `*Name:* ${formData.name}\n` +
          `*Email:* ${formData.email}\n` +
          `*Subject:* ${formData.subject}\n` +
          `*Message:*\n${formData.message}`
      );
      const whatsappUrl = `https://wa.me/971562393573?text=${whatsappMessage}`;

      if (emailResponse.ok) {
        setSubmitStatus({
          type: "success",
          message:
            "Message sent successfully! Redirecting to WhatsApp in 2 seconds...",
        });

        // Clear form
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });

        // Redirect to WhatsApp after 2 seconds
        setTimeout(() => {
          window.open(whatsappUrl, "_blank");
        }, 2000);
      } else {
        throw new Error("Failed to send email");
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message:
          "Failed to send message. Please try again or contact directly via email.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen flex items-center justify-center py-32 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 cyber-grid opacity-20" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
        {/* Section Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-7xl font-bold neon-text mb-6">
            Get In Touch
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] mx-auto rounded-full" />
          <p className="text-xl text-gray-400 mt-8 max-w-3xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach
            out!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <h3 className="text-3xl font-bold mb-6 neon-text-secondary">
                Contact Information
              </h3>
              <p className="text-gray-400 text-lg mb-8">
                I'm always open to discussing new projects, creative ideas, or
                opportunities to be part of your vision.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-6">
              <motion.div
                className="glass p-6 rounded-lg border border-[var(--primary)]/30 hover:border-[var(--primary)] transition-all duration-300"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-[var(--primary)]/10 rounded-lg">
                    <Mail className="w-6 h-6 text-[var(--primary)]" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Email</p>
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="text-white font-medium hover:text-[var(--primary)] transition-colors"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="glass p-6 rounded-lg border border-[var(--secondary)]/30 hover:border-[var(--secondary)] transition-all duration-300"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-[var(--secondary)]/10 rounded-lg">
                    <Phone className="w-6 h-6 text-[var(--secondary)]" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Phone</p>
                    <a
                      href={`tel:${PERSONAL_INFO.phone}`}
                      className="text-white font-medium hover:text-[var(--secondary)] transition-colors"
                    >
                      {PERSONAL_INFO.phone}
                    </a>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="glass p-6 rounded-lg border border-[var(--accent)]/30 hover:border-[var(--accent)] transition-all duration-300"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-[var(--accent)]/10 rounded-lg">
                    <MapPin className="w-6 h-6 text-[var(--accent)]" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Location</p>
                    <p className="text-white font-medium">
                      {PERSONAL_INFO.location}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="glass p-8 rounded-lg border border-[var(--primary)]/30"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-300 font-medium mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-[var(--background)] border ${
                    errors.name
                      ? "border-red-500"
                      : "border-gray-700 focus:border-[var(--primary)]"
                  } rounded-lg text-white placeholder-gray-500 outline-none transition-colors`}
                  placeholder="John Doe"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
              </div>

              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-300 font-medium mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-[var(--background)] border ${
                    errors.email
                      ? "border-red-500"
                      : "border-gray-700 focus:border-[var(--primary)]"
                  } rounded-lg text-white placeholder-gray-500 outline-none transition-colors`}
                  placeholder="john@example.com"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              {/* Subject Field */}
              <div>
                <label
                  htmlFor="subject"
                  className="block text-gray-300 font-medium mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-[var(--background)] border ${
                    errors.subject
                      ? "border-red-500"
                      : "border-gray-700 focus:border-[var(--primary)]"
                  } rounded-lg text-white placeholder-gray-500 outline-none transition-colors`}
                  placeholder="Project Inquiry"
                />
                {errors.subject && (
                  <p className="text-red-500 text-sm mt-1">{errors.subject}</p>
                )}
              </div>

              {/* Message Field */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-300 font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className={`w-full px-4 py-3 bg-[var(--background)] border ${
                    errors.message
                      ? "border-red-500"
                      : "border-gray-700 focus:border-[var(--primary)]"
                  } rounded-lg text-white placeholder-gray-500 outline-none transition-colors resize-none`}
                  placeholder="Tell me about your project..."
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 bg-transparent border-2 border-[var(--primary)] text-[var(--primary)] rounded-lg font-semibold text-lg hover:bg-[var(--primary)] hover:text-black transition-all duration-300 neon-border pulse-glow disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </motion.button>

              {/* Status Message */}
              {submitStatus.type && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-4 rounded-lg ${
                    submitStatus.type === "success"
                      ? "bg-green-500/10 border border-green-500/30 text-green-400"
                      : "bg-red-500/10 border border-red-500/30 text-red-400"
                  }`}
                >
                  {submitStatus.message}
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-40 h-40 border-2 border-[var(--primary)] opacity-10 rotate-45" />
      <div className="absolute bottom-20 right-10 w-32 h-32 border-2 border-[var(--secondary)] opacity-10 rotate-12" />
    </section>
  );
}
