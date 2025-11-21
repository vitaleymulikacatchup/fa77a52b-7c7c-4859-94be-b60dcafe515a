"use client";

import Link from "next/link";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import MetricCardTwo from '@/components/sections/metrics/MetricCardTwo';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import FooterSocial from '@/components/sections/footer/FooterSocial';
import { Star, TrendingUp, Handshake, Facebook, Twitter, Instagram } from "lucide-react";

export default function ProductsPage() {
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

      <div id="metrics" data-section="metrics">
        <MetricCardTwo
          title="BVB By Numbers"
          description="The impressive statistics that define our beloved club"
          tag="Statistics"
          tagIcon={TrendingUp}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="blur-reveal"
          metrics={[
            {
              id: "1",
              value: "81,365",
              description: "Stadium Capacity"
            },
            {
              id: "2",
              value: "160M+",
              description: "Global Fans"
            },
            {
              id: "3",
              value: "8",
              description: "Bundesliga Titles"
            }
          ]}
        />
      </div>

      <div id="social-proof" data-section="social-proof">
        <SocialProofOne
          title="Official Partners"
          description="Trusted by leading brands and organizations in football"
          tag="Partners"
          tagIcon={Handshake}
          textboxLayout="default"
          logos={[
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763736653628-owu1uiam.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763736654723-yf6rcs4l.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763736655919-80nc8114.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763736657111-tnuyjn4j.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763736658329-4uww8ey1.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763736659727-e8c3euua.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763736661151-7kp6whgn.jpg"
          ]}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSocial
          brandName="BVB Fan Shop"
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