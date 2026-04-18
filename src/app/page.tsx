"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FeatureCardTwentyThree from '@/components/sections/feature/FeatureCardTwentyThree';
import FooterCard from '@/components/sections/footer/FooterCard';
import HeroCentered from '@/components/sections/hero/HeroCentered';
import MetricCardSeven from '@/components/sections/metrics/MetricCardSeven';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import TestimonialCardFive from '@/components/sections/testimonial/TestimonialCardFive';
import { Globe, Headphones, Lock, ShieldCheck, Truck } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="expand-hover"
        defaultTextAnimation="reveal-blur"
        borderRadius="soft"
        contentWidth="mediumLarge"
        sizing="large"
        background="none"
        cardStyle="layered-gradient"
        primaryButtonStyle="diagonal-gradient"
        secondaryButtonStyle="solid"
        headingFontWeight="semibold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleCentered
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "Electronics",
          id: "electronics",
        },
        {
          name: "Lifestyle",
          id: "lifestyle",
        },
        {
          name: "Trending",
          id: "trending",
        },
      ]}
      brandName="Nexus Luxe"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroCentered
      background={{
        variant: "gradient-bars",
      }}
      title="Nexus Luxe: Where Innovation Meets Elegance"
      description="Discover a curated collection of cutting-edge electronics and premium lifestyle accessories. Elevate your daily routine with gadgets and fashion essentials crafted for the modern individual."
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/beautiful-mature-woman-having-fun-time_23-2149232850.jpg",
          alt: "Customer",
        },
        {
          src: "http://img.b2bpic.net/free-photo/smiling-happy-europnean-woman-sunglasses-is-resting-sunny-street-with-palms-looking-aside-portrait-model-woman-with-smile-face-holds-hat-with-hands-wears-sunglasses_291650-2669.jpg",
          alt: "Customer",
        },
        {
          src: "http://img.b2bpic.net/free-photo/bike-shop-with-shop-assistant_23-2148138822.jpg",
          alt: "Customer",
        },
        {
          src: "http://img.b2bpic.net/free-photo/beauty-vlogger-adjusting-camera_23-2148916349.jpg",
          alt: "Customer",
        },
        {
          src: "http://img.b2bpic.net/free-photo/woman-video-blogger-filming-new-vlog_1303-18380.jpg",
          alt: "Customer",
        },
      ]}
      buttons={[
        {
          text: "Shop Electronics",
          href: "#electronics",
        },
        {
          text: "Explore Lifestyle",
          href: "#lifestyle",
        },
      ]}
      marqueeItems={[
        {
          type: "text-icon",
          text: "Premium Quality",
          icon: ShieldCheck,
        },
        {
          type: "text-icon",
          text: "Fast Shipping",
          icon: Truck,
        },
        {
          type: "text-icon",
          text: "24/7 Support",
          icon: Headphones,
        },
        {
          type: "text-icon",
          text: "Secure Payments",
          icon: Lock,
        },
        {
          type: "text-icon",
          text: "Global Warranty",
          icon: Globe,
        },
      ]}
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwentyThree
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          id: "f1",
          title: "Cutting-Edge Tech",
          tags: [
            "Innovation",
            "Premium",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/laptop-cup-coffee-vase-full-flowers-indoors_181624-31176.jpg?_wi=1",
        },
        {
          id: "f2",
          title: "Premium Audio",
          tags: [
            "Performance",
            "Lifestyle",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/wireless-headphones_93675-128034.jpg?_wi=1",
        },
        {
          id: "f3",
          title: "Curated Elegance",
          tags: [
            "Style",
            "Fashion",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/view-elegant-luxurious-wedding-stationery-planner-resources_23-2150166947.jpg?_wi=1",
        },
      ]}
      title="Unrivaled Quality"
      description="We blend the latest technology with lifestyle sophistication to bring you a hand-picked range of products that define modern quality and style."
    />
  </div>

  <div id="electronics" data-section="electronics">
      <ProductCardTwo
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="four-items-2x2-equal-grid"
      useInvertedBackground={false}
      products={[
        {
          id: "p1",
          brand: "Nexus Tech",
          name: "Iphone  15-17 pro max",
          price: "$999",
          rating: 5,
          reviewCount: "1.2k",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CWKvsU38B31EdepSGqePAOXZHl/uploaded-1776496745468-jc06tms8.png",
        },
        {
          id: "p2",
          brand: "Nexus Tech",
          name: "Pro Slim Laptop",
          price: "$1,499",
          rating: 5,
          reviewCount: "890",
          imageSrc: "http://img.b2bpic.net/free-photo/modern-laptop-computer-with-blank-white-screen_9975-133528.jpg",
        },
        {
          id: "p3",
          brand: "Nexus Tech",
          name: "Smart Watch",
          price: "$399",
          rating: 4,
          reviewCount: "450",
          imageSrc: "http://img.b2bpic.net/free-photo/still-life-tech-device_23-2150722612.jpg",
        },
        {
          id: "p4",
          brand: "Nexus Tech",
          name: "Wireless Pro",
          price: "$299",
          rating: 5,
          reviewCount: "720",
          imageSrc: "http://img.b2bpic.net/free-photo/black-cup-with-black-headphones-light-background_185193-163944.jpg",
        },
        {
          id: "p5",
          brand: "Nexus Tech",
          name: "Tech Tablet",
          price: "$699",
          rating: 4,
          reviewCount: "320",
          imageSrc: "http://img.b2bpic.net/free-photo/modern-stationary-collection-arrangement_23-2149309635.jpg",
        },
        {
          id: "p6",
          brand: "Nexus Tech",
          name: "AirPods Pro 3 ",
          price: "$89",
          rating: 5,
          reviewCount: "210",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CWKvsU38B31EdepSGqePAOXZHl/uploaded-1776496670120-9wttt2x0.jpg",
        },
      ]}
      title="Electronics Collection"
      description="Power your day with our high-performance smartphones, laptops, and wearables designed for speed and style."
    />
  </div>

  <div id="lifestyle" data-section="lifestyle">
      <ProductCardTwo
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="four-items-2x2-equal-grid"
      useInvertedBackground={false}
      products={[
        {
          id: "l1",
          brand: "Luxe Aura",
          name: "Noir Essence Perfume",
          price: "$150",
          rating: 5,
          reviewCount: "250",
          imageSrc: "http://img.b2bpic.net/free-photo/cosmetic-care-with-copy-space_23-2148328682.jpg",
        },
        {
          id: "l2",
          brand: "Luxe Aura",
          name: "Gold Minimalist Ring",
          price: "$250",
          rating: 5,
          reviewCount: "180",
          imageSrc: "http://img.b2bpic.net/free-photo/happy-father-s-day-composition-father-s-day-top-view_185193-109773.jpg",
        },
        {
          id: "l3",
          brand: "Luxe Aura",
          name: "Designer Sunwear",
          price: "$200",
          rating: 4,
          reviewCount: "130",
          imageSrc: "http://img.b2bpic.net/free-photo/glasses-near-coffee-sugar-hearts_23-2147738633.jpg",
        },
        {
          id: "l4",
          brand: "Luxe Aura",
          name: "Sterling Silver Cuff",
          price: "$320",
          rating: 5,
          reviewCount: "90",
          imageSrc: "http://img.b2bpic.net/free-photo/expensive-golden-ring-with-white-powder-background_23-2150347029.jpg",
        },
        {
          id: "l5",
          brand: "Luxe Aura",
          name: "Amber Rose Fragrance",
          price: "$180",
          rating: 5,
          reviewCount: "150",
          imageSrc: "http://img.b2bpic.net/free-photo/ceremonial-wedding-candles-with-white-ribbons-engagement-ring-perfume-wooden-floor_8353-10520.jpg",
        },
        {
          id: "l6",
          brand: "Luxe Aura",
          name: "Classic Leather Belt",
          price: "$110",
          rating: 4,
          reviewCount: "70",
          imageSrc: "http://img.b2bpic.net/free-photo/summer-spring-break-holiday-vacation-leisure-concept_53876-31829.jpg",
        },
      ]}
      title="Lifestyle Accessories"
      description="Refine your persona with designer fragrances, luxury jewelry, and premium accessories that make a statement."
    />
  </div>

  <div id="trending" data-section="trending">
      <MetricCardSeven
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      metrics={[
        {
          id: "m1",
          value: "10K+",
          title: "Smart Devices Sold",
          items: [
            "Fast Shipping",
            "Tech Support",
            "Secure Payment",
          ],
        },
        {
          id: "m2",
          value: "95%",
          title: "Happy Clients",
          items: [
            "Quality Assurance",
            "Design Excellence",
            "Modern Appeal",
          ],
        },
        {
          id: "m3",
          value: "500+",
          title: "5-Star Reviews",
          items: [
            "Authentic Feedback",
            "Trusted Brand",
            "Global Reach",
          ],
        },
      ]}
      title="Trending Gadgets"
      description="See why our customers are obsessed with these top-tier tech lifestyle items."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardFive
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          name: "Sarah J.",
          date: "Jan 2025",
          title: "Tech Savvy",
          quote: "The laptop and headphones combo is perfect for my workflow.",
          tag: "Verified Buyer",
          avatarSrc: "http://img.b2bpic.net/free-photo/elderly-business-woman-grey-suit-using-phone-outdoors_1303-29566.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/female-couch-holding-her-phone-mug-sitting-front-table-with-gadgets_181624-56360.jpg",
          imageAlt: "portrait happy customer modern tech",
        },
        {
          id: "2",
          name: "Michael R.",
          date: "Feb 2025",
          title: "Lifestyle Fan",
          quote: "Nexus Luxe has the best selection of accessories I've found.",
          tag: "Verified Buyer",
          avatarSrc: "http://img.b2bpic.net/free-photo/horizontal-shot-pretty-young-woman-with-hair-buns-applies-blue-eyeliner-dressed-green-costume-boots-focused-into-distance-daytime-considers-something-people-fashion-style-concept_273609-57101.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/laptop-cup-coffee-vase-full-flowers-indoors_181624-31176.jpg?_wi=2",
          imageAlt: "portrait happy customer modern tech",
        },
        {
          id: "3",
          name: "Emily K.",
          date: "Mar 2025",
          title: "Perfume Enthusiast",
          quote: "Absolutely obsessed with their perfume collection quality.",
          tag: "Verified Buyer",
          avatarSrc: "http://img.b2bpic.net/free-photo/handsome-young-guy-dressed-black-t-shirt-holds-tablet-computer-isolated-dark-background_613910-18713.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/wireless-headphones_93675-128034.jpg?_wi=2",
          imageAlt: "portrait happy customer modern tech",
        },
        {
          id: "4",
          name: "David L.",
          date: "Mar 2025",
          title: "Gadget Lover",
          quote: "Fast shipping and amazing product durability.",
          tag: "Verified Buyer",
          avatarSrc: "http://img.b2bpic.net/free-photo/close-up-woman-taking-mirror-photo_23-2149241372.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/view-elegant-luxurious-wedding-stationery-planner-resources_23-2150166947.jpg?_wi=2",
          imageAlt: "portrait happy customer modern tech",
        },
        {
          id: "5",
          name: "Jessica M.",
          date: "Apr 2025",
          title: "Fashion Forward",
          quote: "Quality and style meet perfectly here. Highly recommend.",
          tag: "Verified Buyer",
          avatarSrc: "http://img.b2bpic.net/free-photo/portrait-beautiful-woman-posing-turtleneck-with-flower_23-2149020762.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/phone-filming-live-shop_23-2149947474.jpg?_wi=2",
          imageAlt: "portrait happy customer modern tech",
        },
      ]}
      title="What They Say"
      description="Hear from our community of tech enthusiasts and lifestyle seekers."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCTA
      useInvertedBackground={false}
      background={{
        variant: "radial-gradient",
      }}
      tag="Get in Touch"
      title="Have Questions?"
      description="Our experts are here to help you choose the best electronics and lifestyle products tailored to your needs."
      buttons={[
        {
          text: "Contact Support",
          href: "#",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterCard
      logoText="Nexus Luxe"
      copyrightText="© 2025 Nexus Luxe Electronics. All rights reserved."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
