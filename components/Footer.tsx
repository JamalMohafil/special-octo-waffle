/**
 * Footer Component
 *
 * A responsive footer with logo, quick links, contact information,
 * social media links, and copyright information.
 */
import Image from "next/image";

export default function Footer() {
  // Company information
  const companyInfo = {
    name: "المساعد الذكي",
    logo: "/smart.jpg",
    description:
      "نسعى لتقديم أفضل تجربة ممكنة للمستخدمين في مجال الرعاية الصحية والتتبع الدوائي. هدفنا هو تسهيل حياتك وتحسين صحتك.",
    email: "contact@smartmd.com",
    phone: "+90 505 578 13 00",
    location: "اسطنبول , تركيا",
    copyright: "© 2025 المساعد الذكي - جميع الحقوق محفوظة",
    year: 2025,
  };

  // Navigation links
  const quickLinks = [
    { title: "الرئيسية", href: "/" },
    { title: "البحث عن دواء", href: "/search" },
    { title: "اسئلني", href: "/questions" },
    { title: "تتبع العادات اليومية", href: "/habits" },
  ];

  // Legal pages
  const legalLinks = [
    { title: "شروط الاستخدام", href: "/terms" },
    { title: "سياسة الخصوصية", href: "/privacy" },
    { title: "سياسة ملفات تعريف الارتباط", href: "/cookies" },
  ];

  // Social media links with icons
  const socialLinks = [
    {
      name: "Twitter",
      href: "#",
      icon: "M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z",
    },
    {
      name: "Instagram",
      href: "#",
      icon: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",
    },
    {
      name: "Facebook",
      href: "#",
      icon: "M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z",
    },
    {
      name: "LinkedIn",
      href: "#",
      icon: "M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z",
    },
  ];

  // Contact icons
  const contactIcons = {
    email:
      "M14.243 5.757a6 6 0 10-.986 9.284 1 1 0 111.087 1.678A8 8 0 1118 10a3 3 0 01-4.8 2.401A4 4 0 1114 10a1 1 0 102 0c0-1.537-.586-3.07-1.757-4.243zM12 10a2 2 0 10-4 0 2 2 0 004 0z",
    phone:
      "M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z",
    location:
      "M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z",
  };

  // Arrow icon for quick links
  const arrowIcon =
    "M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z";

  return (
    <footer
      className="relative mt-10 bg-gradient-to-r from-main-color-800 to-main-color-700"
      dir="rtl"
    >
      {/* Main Footer Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between mb-12">
          {/* Logo & About */}
          <div className="mb-8 md:mb-0 md:w-1/3">
            <div className="flex items-center mb-4">
              <Image
                className="rounded-lg"
                width={60}
                height={60}
                src={companyInfo.logo}
                alt={`${companyInfo.name} Logo`}
              />
              <h2 className="text-2xl font-bold text-white mr-2">
                {companyInfo.name}
              </h2>
            </div>
            <p className="text-main-color-100 leading-relaxed">
              {companyInfo.description}
            </p>
          </div>

          {/* Quick Links */}
          <div className="mb-8 md:mb-0 md:w-1/3">
            <h3 className="text-xl font-bold text-white mb-4">روابط سريعة</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-main-color-100 hover:text-white transition-colors flex items-center"
                  >
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d={arrowIcon}
                        clipRule="evenodd"
                      />
                    </svg>
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:w-1/3">
            <h3 className="text-xl font-bold text-white mb-4">تواصل معنا</h3>
            <ul className="space-y-3">
              <li className="flex items-center text-main-color-100">
                <svg
                  className="w-5 h-5 ml-2 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d={contactIcons.email}
                    clipRule="evenodd"
                  />
                </svg>
                <a href={`mailto:${companyInfo.email}`}>{companyInfo.email}</a>
              </li>
              <li className="flex items-center text-main-color-100">
                <svg
                  className="w-5 h-5 ml-2 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d={contactIcons.phone} />
                </svg>
                <a
                  href={`tel:${companyInfo.phone.replace(/\s+/g, "")}`}
                  dir="ltr"
                >
                  {companyInfo.phone}
                </a>
              </li>
              <li className="flex items-center text-main-color-100">
                <svg
                  className="w-5 h-5 ml-2 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d={contactIcons.location}
                    clipRule="evenodd"
                  />
                </svg>
                <span>{companyInfo.location}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media */}
        <div className="border-t border-main-color-600 pt-8">
          <div className="flex justify-center space-x-4 space-x-reverse">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="bg-main-color-900 p-3 rounded-full text-main-color-100 hover:bg-main-color-800 hover:text-white transition-colors"
                aria-label={social.name}
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d={social.icon} />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-main-color-900 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-main-color-200 mb-4 md:mb-0">
              {companyInfo.copyright}
            </div>
            <div className="flex flex-wrap justify-center md:justify-end gap-4 text-sm">
              {legalLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-main-color-200 hover:text-white transition-colors"
                >
                  {link.title}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
