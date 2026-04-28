"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import HeroOverlayTestimonial from '@/components/sections/hero/HeroOverlayTestimonial';
import MetricCardSeven from '@/components/sections/metrics/MetricCardSeven';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import TeamCardSix from '@/components/sections/team/TeamCardSix';
import ProductCardFour from '@/components/sections/product/ProductCardFour';

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
              { name: "Home", id: "/" },
              { name: "Shop", id: "/shop" },
              { name: "Contact", id: "/contact" },
            ]}
            brandName="EYE™"
          />
        </div>

        <div id="hero" data-section="hero">
          <HeroOverlayTestimonial
            title="EYE™ ARCHIVE"
            description="Defined by vision. Crafted for the future."
            testimonials={[
              { name: "Marcus V.", handle: "@m.v", testimonial: "Quality unmatched.", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-man-wearing-sunglasses_23-2149409711.jpg?_wi=1", imageAlt: "model fashion streetwear photography" },
              { name: "Elena S.", handle: "@e.s", testimonial: "The vision is clear.", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/stacked-aesthetic-objects-still-life_23-2150230645.jpg?_wi=1", imageAlt: "model fashion streetwear photography" },
              { name: "James L.", handle: "@j.l", testimonial: "Premium weight and fit.", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-cool-woman-chair-indoors_23-2149359823.jpg?_wi=1", imageAlt: "model fashion streetwear photography" },
              { name: "Sofia R.", handle: "@s.r", testimonial: "My new favorite brand.", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/side-view-woman-with-graphic-eye-makeup_23-2150723149.jpg?_wi=1", imageAlt: "model fashion streetwear photography" },
              { name: "Alex P.", handle: "@a.p", testimonial: "Exquisite attention to detail.", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/close-up-woman-holding-skateboard_23-2148436057.jpg", imageAlt: "model fashion streetwear photography" },
            ]}
            imageSrc="http://img.b2bpic.net/free-photo/medium-shot-man-wearing-sunglasses_23-2149409711.jpg?_wi=2"
            imageAlt="EYE Brand Campaign"
          />
        </div>

        <div id="metric" data-section="metric">
          <MetricCardSeven
            metrics={[
              { id: "m1", value: "100%", title: "Quality Assurance", items: [] },
              { id: "m2", value: "Apex", title: "Design Excellence", items: [] }
            ]}
            title="Performance"
            description="Standards that define us."
            animationType="slide-up"
            textboxLayout="default"
            useInvertedBackground={false}
          />
        </div>

        <div id="ecommerce" data-section="ecommerce">
          <ProductCardFour
            title="Featured"
            description="Our latest releases."
            gridVariant="three-columns-all-equal-width"
            animationType="slide-up"
            textboxLayout="split-actions"
            useInvertedBackground={false}
            buttons={[{ text: "View Full Catalog", href: "/shop" }]}
            products={[
              { id: "1", name: "Tee", price: "$50", variant: "Black", imageSrc: "http://img.b2bpic.net/free-photo/stacked-aesthetic-objects-still-life_23-2150230645.jpg?_wi=2" },
              { id: "2", name: "Hoodie", price: "$150", variant: "Black", imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-cool-woman-chair-indoors_23-2149359823.jpg?_wi=2" },
              { id: "3", name: "Cap", price: "$30", variant: "Black", imageSrc: "http://img.b2bpic.net/free-photo/side-view-woman-with-graphic-eye-makeup_23-2150723149.jpg?_wi=2" }
            ]}
          />
        </div>

        <div id="team" data-section="team">
          <TeamCardSix
            members={[{ id: "1", name: "Alice", role: "Director", imageSrc: "http://img.b2bpic.net/free-photo/side-view-woman-posing-night-with-flash_23-2150204451.jpg" }, { id: "2", name: "Bob", role: "Design", imageSrc: "http://img.b2bpic.net/free-photo/young-handsome-african-american-man-posing-outdoors-paris-happy-smile-fashion-style-lights-evening-cafes_1321-3400.jpg" }]}
            title="Team"
            description="The people behind the vision."
            animationType="slide-up"
            textboxLayout="default"
            gridVariant="uniform-all-items-equal"
            useInvertedBackground={false}
          />
        </div>

        <div id="footer" data-section="footer">
          <FooterLogoEmphasis
            columns={[
              { items: [{ label: "Shop", href: "/shop" }, { label: "Contact", href: "/contact" }] },
              { items: [{ label: "Privacy", href: "#" }, { label: "Terms", href: "#" }] },
            ]}
            logoText="EYE™"
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}