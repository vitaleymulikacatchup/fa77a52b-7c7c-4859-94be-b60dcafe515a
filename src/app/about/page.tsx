"use client";

import Link from "next/link";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import TeamCardOne from '@/components/sections/team/TeamCardOne';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import BlogCardOne from '@/components/sections/blog/BlogCardOne';
import FaqBase from '@/components/sections/faq/FaqBase';
import FooterSocial from '@/components/sections/footer/FooterSocial';
import { Users, MessageSquare, Newspaper, HelpCircle, Facebook, Twitter, Instagram } from "lucide-react";

export default function AboutPage() {
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

      <div id="team" data-section="team">
        <TeamCardOne
          title="Our Team"
          description="Meet the passionate people behind BVB Fan Shop"
          tag="Team"
          tagIcon={Users}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="opacity"
          members={[
            {
              id: "1",
              name: "Marcus K.",
              role: "Store Manager",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763736649722-fh1r3iou.jpg",
              imageAlt: "Marcus K. store manager"
            },
            {
              id: "2",
              name: "Sarah M.",
              role: "Product Specialist",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763736650582-d6sa4ddv.jpg",
              imageAlt: "Sarah M. product specialist"
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          title="What Our Fans Say"
          description="Hear from fellow BVB supporters about their shopping experience"
          tag="Reviews"
          tagIcon={MessageSquare}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          testimonials={[
            {
              id: "1",
              name: "Michael Weber",
              role: "Season Ticket Holder",
              company: "Dortmund",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763736649722-fh1r3iou.jpg",
              imageAlt: "Michael Weber BVB fan"
            },
            {
              id: "2",
              name: "Anna Schmidt",
              role: "BVB Supporter",
              company: "Berlin",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763736650582-d6sa4ddv.jpg",
              imageAlt: "Anna Schmidt BVB fan"
            },
            {
              id: "3",
              name: "Thomas Mueller",
              role: "Fan Club President",
              company: "Munich",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763736651534-m6mux8o5.jpg",
              imageAlt: "Thomas Mueller BVB fan"
            },
            {
              id: "4",
              name: "Lisa Hoffmann",
              role: "BVB Enthusiast",
              company: "Hamburg",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763736652581-qboyrlq2.jpg",
              imageAlt: "Lisa Hoffmann BVB fan"
            }
          ]}
        />
      </div>

      <div id="blog" data-section="blog">
        <BlogCardOne
          title="Latest News"
          description="Stay updated with BVB news and fan shop updates"
          tag="Blog"
          tagIcon={Newspaper}
          textboxLayout="default"
          animationType="scale-rotate"
          blogs={[
            {
              id: "1",
              category: "Club News",
              title: "New Season Jersey Launch",
              excerpt: "Discover the new 2024 BVB home jersey with innovative design and sustainable materials",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763736645260-dnzeal9h.jpg",
              imageAlt: "New BVB jersey 2024",
              authorName: "BVB Shop Team",
              authorAvatar: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763736649722-fh1r3iou.jpg",
              date: "15 Jan 2024"
            },
            {
              id: "2",
              category: "Match Day",
              title: "Stadium Merchandise Guide",
              excerpt: "Everything you need to know about purchasing merchandise at Signal Iduna Park",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763736643053-yj8evked.jpg",
              imageAlt: "Signal Iduna Park stadium",
              authorName: "Marcus Weber",
              authorAvatar: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763736650582-d6sa4ddv.jpg",
              date: "10 Jan 2024"
            }
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqBase
          title="Frequently Asked Questions"
          description="Find answers to common questions about our products and services"
          tag="Support"
          tagIcon={HelpCircle}
          textboxLayout="default"
          faqs={[
            {
              id: "1",
              title: "Is all merchandise officially licensed?",
              content: "Yes, all our products are officially licensed BVB merchandise, ensuring authenticity and quality for our supporters."
            },
            {
              id: "2",
              title: "Do you ship internationally?",
              content: "Absolutely! We ship BVB merchandise worldwide to bring the passion of Borussia Dortmund to fans everywhere."
            },
            {
              id: "3",
              title: "What is your return policy?",
              content: "We offer a 30-day return policy for unused items in original condition. Customer satisfaction is our priority."
            },
            {
              id: "4",
              title: "How can I track my order?",
              content: "Once your order ships, you'll receive a tracking number via email to monitor your package's progress."
            }
          ]}
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