import { Link } from "react-router-dom";
import type { FooterSection } from "@/type/movie-name";

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
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
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