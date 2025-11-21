"use client";

import Link from "next/link";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import ContactCenterForm from '@/components/sections/contact/ContactCenterForm';
import FooterSocial from '@/components/sections/footer/FooterSocial';
import { Facebook, Twitter, Instagram } from "lucide-react";

export default function ContactPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-bubble"
      defaultTextAnimation="reveal-blur"
      borderRadius="rounded"
      contentWidth="large"
      sizing="small"
      background="dotGrid"
      cardStyle="glass-depth"
      primaryButtonStyle="diagonal-gradient"
      secondaryButtonStyle="minimal"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          navItems={[
            { name: "Home", id: "/" },
            { name: "Products", id: "/products" },
            { name: "About", id: "/about" },
            { name: "Contact", id: "/contact" }
          ]}
          brandName="BVB Fan Shop"
          button={{
            text: "Shop Now",
            href: "/products"
          }}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenterForm
          title="Get in Touch"
          description="Have questions about our products or need support? We're here to help every BVB supporter."
          buttonText="Send Message"
          inputs={[
            {
              name: "name",
              type: "text",
              placeholder: "Your Name",
              required: true
            },
            {
              name: "email",
              type: "email",
              placeholder: "Your Email",
              required: true
            }
          ]}
          textarea={{
            name: "message",
            placeholder: "How can we help you?",
            rows: 5,
            required: true
          }}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSocial
          logoText="BVB Fan Shop"
          copyrightText="© 2024 BVB Fan Shop. Echte Liebe."
          columns={[
            {
              title: "Shop",
              items: [
                { label: "Jerseys", href: "/products" },
                { label: "Accessories", href: "/products" },
                { label: "Home & Gifts", href: "/products" }
              ]
            },
            {
              title: "Support",
              items: [
                { label: "Contact Us", href: "/contact" },
                { label: "FAQ", href: "/about" },
                { label: "Shipping Info", href: "/contact" }
              ]
            },
            {
              title: "Club",
              items: [
                { label: "About BVB", href: "/about" },
                { label: "Stadium Tours", href: "https://www.bvb.de" },
                { label: "Official Site", href: "https://www.bvb.de" }
              ]
            }
          ]}
          socialLinks={[
            {
              icon: Facebook,
              href: "https://facebook.com/bvb",
              ariaLabel: "Follow BVB on Facebook"
            },
            {
              icon: Twitter,
              href: "https://twitter.com/bvb",
              ariaLabel: "Follow BVB on Twitter"
            },
            {
              icon: Instagram,
              href: "https://instagram.com/bvb",
              ariaLabel: "Follow BVB on Instagram"
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}