"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import ProductCardThree from '@/components/sections/product/ProductCardThree';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-shift"
        defaultTextAnimation="background-highlight"
        borderRadius="pill"
        contentWidth="compact"
        sizing="largeSizeMediumTitles"
        background="noise"
        cardStyle="solid"
        primaryButtonStyle="shadow"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="semibold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleFullscreen
      navItems={[
        {
          name: "Home",
          id: "/",
        },
        {
          name: "Shop",
          id: "/shop",
        },
        {
          name: "Contact",
          id: "/contact",
        },
      ]}
      brandName="EYE™"
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardFour
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        {
          id: "p1",
          name: "Signature Tee",
          price: "$85",
          variant: "Black",
          imageSrc: "http://img.b2bpic.net/free-photo/stacked-aesthetic-objects-still-life_23-2150230645.jpg",
        },
        {
          id: "p2",
          name: "Archive Hoodie",
          price: "$240",
          variant: "Graphite",
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-cool-woman-chair-indoors_23-2149359823.jpg",
        },
        {
          id: "p3",
          name: "Logo Cap",
          price: "$65",
          variant: "Black",
          imageSrc: "http://img.b2bpic.net/free-photo/side-view-woman-with-graphic-eye-makeup_23-2150723149.jpg",
        },
        {
          id: "p4",
          name: "Tailored Trousers",
          price: "$320",
          variant: "Midnight",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-woman-holding-skateboard_23-2148436057.jpg",
        },
        {
          id: "p5",
          name: "Leather Trainer",
          price: "$450",
          variant: "Black",
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-boxer-trainer-posing-gym_23-2148426233.jpg",
        },
        {
          id: "p6",
          name: "Canvas Jacket",
          price: "$520",
          variant: "Obsidian",
          imageSrc: "http://img.b2bpic.net/free-photo/fashion-portrait-blonde-caucasian-stylish-woman-french-cap-blazer-shorts-outdoor-outside-villa_343596-2189.jpg",
        },
      ]}
      title="The Shop"
      description="Curated essentials for the modern wardrobe."
    />
  </div>

  <div id="product" data-section="product">
      <ProductCardThree
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      title="Latest Arrivals"
      description="New releases from the archive."
      products={[
        {
          id: "p7",
          name: "Essential Knit",
          price: "$120",
          imageSrc: "http://img.b2bpic.net/free-photo/fashionable-fedora-hat-studio_23-2150737118.jpg",
        },
        {
          id: "p8",
          name: "Street Jogger",
          price: "$180",
          imageSrc: "http://img.b2bpic.net/free-photo/stacked-aesthetic-objects-still-life_23-2150230644.jpg",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoEmphasis
      columns={[
        {
          items: [
            {
              label: "Shop",
              href: "/shop",
            },
            {
              label: "Contact",
              href: "/contact",
            },
          ],
        },
        {
          items: [
            {
              label: "Privacy",
              href: "#",
            },
            {
              label: "Terms",
              href: "#",
            },
          ],
        },
      ]}
      logoText="EYE™"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
