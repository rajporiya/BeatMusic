import { Link } from "react-router-dom";
import type { FooterSection } from "@/type/movie-name";
import { PhoneIncoming } from "lucide-react";

const Footer = () => {
  const footerSections: FooterSection[] = [
    {
      title: "Company",
      links: ["About", "Jobs", "For the Record"],
      to: ["/AboutUs", "/jobs", "/for_the_record"],
    },
    {
      title: "Communities",
      links: [
        "For Artists",
        "Developers",
        "Advertising",
        "Investors",
        "Vendors",
      ],
      to: [
        "/artists",
        "/developers",
        "/advertising",
        "/investors",
        "/vendors",
      ],
    },
    {
      title: "Useful Links",
      links: [
        "Support",
        "Free Mobile App",
        "Popular by Country",
        "Import your music",
      ],
      to: [
        "/support",
        "/mobile-app",
        "/country",
        "/import-music",
      ],
    },
    {
      title: "Beat Music Plans",
      links: [
        "Premium Standard",
        "Premium Platinum",
        "Premium Student",
        "Beat Music Free",
      ],
      to: [
        "/premium-standard",
        "/premium-platinum",
        "/premium-student",
        "/free",
      ],
    },
  ];

  return (
    <footer className="mt-16 w-full select-none">
      <div className="border-t border-[#292929] pt-12 pb-16 flex flex-wrap justify-between gap-x-12 gap-y-8 px-2">
        {/* Sections */}
        <div className="flex flex-wrap gap-x-16 gap-y-8">
          {footerSections.map((section) => (
            <div key={section.title} className="flex flex-col gap-3.5">
              <h5 className="font-extrabold text-white text-sm tracking-wide">
                {section.title}
              </h5>
              <ul className="flex flex-col gap-2.5">
                {section.links.map((link, index) => (
                  <li key={link}>
                    <Link
                      to={section.to?.[index] || "#"}
                      className="text-[#a7a7a7] hover:text-white text-sm font-semibold transition-colors duration-200"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social Icons Placeholder */}
        <div className="flex gap-4">
          <button
            type="button"
            title="Instagram"
            className="h-10 w-10 rounded-full bg-[#292929] hover:bg-[#727272] text-white flex items-center justify-center transition-colors duration-200 cursor-pointer"
          >
            <PhoneIncoming />
          </button>

          <button
            type="button"
            title="Twitter"
            className="h-10 w-10 rounded-full bg-[#292929] hover:bg-[#727272] text-white flex items-center justify-center transition-colors duration-200 cursor-pointer"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </button>

          <button
            type="button"
            title="Facebook"
            className="h-10 w-10 rounded-full bg-[#292929] hover:bg-[#727272] text-white flex items-center justify-center transition-colors duration-200 cursor-pointer"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Copyright Line */}
      <div className="border-t border-[#292929] pt-8 flex justify-between items-center text-xs text-[#a7a7a7] font-semibold flex-wrap gap-4 px-2">
        <div className="flex gap-4">
          <span className="hover:text-white cursor-pointer">Legal</span>
          <span className="hover:text-white cursor-pointer">Safety & Privacy Center</span>
          <span className="hover:text-white cursor-pointer">Privacy Policy</span>
          <span className="hover:text-white cursor-pointer">Cookies</span>
          <span className="hover:text-white cursor-pointer">About Ads</span>
          <span className="hover:text-white cursor-pointer">Accessibility</span>
        </div>
        <span>© 2026 BeatMusic AB</span>
      </div>
    </footer>
  );
};

export default Footer;