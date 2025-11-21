"use client";

import Link from "next/link";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import TagAbout from '@/components/sections/about/TagAbout';
import FeatureCardSeven from '@/components/sections/feature/FeatureCardSeven';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import FooterSocial from '@/components/sections/footer/FooterSocial';
import { Heart, Award, Star, Facebook, Twitter, Instagram } from "lucide-react";

export default function HomePage() {
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

      <div id="hero" data-section="hero">
        <HeroSplit
          title="Official BVB Fan Shop"
          description="Show your support for Borussia Dortmund with authentic merchandise, jerseys, and exclusive fan gear from the official BVB store"
          tag="Echte Liebe"
          tagIcon={Heart}
          buttons={[
            {
              text: "Shop Now",
              href: "/products"
            },
            {
              text: "View Collections",
              href: "/about"
            }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763736643053-yj8evked.jpg"
          imageAlt="BVB stadium and fans in yellow and black"
          imagePosition="right"
        />
      </div>

      <div id="about" data-section="about">
        <TagAbout
          tag="Our Story"
          description="At BVB Fan Shop, we embody the passion and dedication of the Yellow Wall. Since 1909, Borussia Dortmund has been more than just a football club – it's a way of life, a community, and a symbol of unwavering loyalty that connects fans worldwide."
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardSeven
          title="Why Choose Our Shop"
          description="Discover what makes us the premier destination for BVB merchandise"
          tag="Excellence"
          tagIcon={Award}
          textboxLayout="default"
          animationType="slide-up"
          features={[
            {
              id: 1,
              title: "Authentic Merchandise",
              description: "Official BVB products directly from the club, ensuring quality and authenticity for true supporters",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763736645260-dnzeal9h.jpg",
              imageAlt: "Official BVB jersey"
            },
            {
              id: 2,
              title: "Fast Worldwide Shipping",
              description: "Get your BVB gear delivered quickly anywhere in the world with our reliable shipping partners",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763736646458-fjsa31v6.jpg",
              imageAlt: "BVB scarf ready for shipping"
            }
          ]}
          buttons={[
            {
              text: "Browse Products",
              href: "/products"
            }
          ]}
        />
      </div>

      <div id="products" data-section="products">
        <ProductCardOne
          title="Featured Products"
          description="Discover our most popular BVB merchandise for true supporters"
          tag="Best Sellers"
          tagIcon={Star}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="scale-rotate"
          products={[
            {
              id: "1",
              name: "BVB Home Jersey 2024",
              price: "€89.95",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763736645260-dnzeal9h.jpg",
              imageAlt: "BVB home jersey 2024"
            },
            {
              id: "2",
              name: "BVB Supporter Scarf",
              price: "€24.95",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763736646458-fjsa31v6.jpg",
              imageAlt: "BVB supporter scarf"
            },
            {
              id: "3",
              name: "BVB Coffee Mug",
              price: "€14.95",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763736647743-yd535t5w.jpg",
              imageAlt: "BVB coffee mug"
            },
            {
              id: "4",
              name: "BVB Baseball Cap",
              price: "€19.95",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763736648738-mun5iwli.jpg",
              imageAlt: "BVB baseball cap"
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