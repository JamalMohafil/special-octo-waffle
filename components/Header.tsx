"use client";
import Image from "next/image";
import React, { useState } from "react";
import { IoIosNotificationsOutline } from "react-icons/io";

/**
 * Main Header component for the application
 * Displays logo, navigation menu, notifications, and user avatar
 */
export default function Header() {
  // ------------- States and Variables -------------
  // Mobile menu state
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Auth state (can be changed later based on actual user state)
  const isLoggedIn = true;

  // User avatar URL
  const userAvatarUrl =
    "https://s3-alpha-sig.figma.com/img/fab8/6af4/1df9d963aec13111c3906a338788e4c1?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=U~-WQAZJvCZ72EQrsnW4cGBZQ3tOEoHrdDARIXResWv17y5eaVJZ~DjMVNi3MF~zsFW2YZJGRtVR-ZY9IEgMJSMgjdbXvh4R8Fg96N6O-zp5mtVK31eJ9-CB-79jgBJZkOhlSF51suU6PI4nqeXmTY4IsL83XG1Nb3RMs-EprhGcVlOykavdl4bA2v4cUUNZtZkleKhG~5cITHO5coEnBEUoFjEEIVu3f-eny0GaxJaFY2FySwvdpVbeWSmwk7UJqOlLw4-6LD-a4eKMdJlGwCUNeQPcUCZVfu4O0RDC3g5x0kYlA7Q5bj3kssgJGcedNIlJOO7X6lKB72EqlMMs5Q__";

  // Logo path
  const logoPath = "/smart.jpg";

  // App name
  const appName = "المساعد الذكي";

  // Theme colors object
  const themeColors = {
    "main-color-950": "#031316",
    "main-color-900": "#07272C",
    "main-color-800": "#0D4D59",
    "main-color-700": "#147485",
    "main-color-600": "#1A9BB2",
    "main-color-500": "#3BC9E2",
    "main-color-400": "#4DCEE5",
    "main-color-300": "#7ADAEB",
    "main-color-200": "#A6E6F2",
    "main-color-100": "#D3F3F8",
    "main-color-50": "#E9F9FC",
  };

  // Navigation items
  const navItems = [
    {
      id: "home",
      label: "الرئيسية",
      href: "/",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
        />
      ),
    },
    {
      id: "search",
      label: "البحث عن دواء",
      href: "/search",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      ),
    },
    {
      id: "questions",
      label: "اسئلني",
      href: "/questions",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      ),
    },
    {
      id: "habits",
      label: "تتبع العادات اليومية",
      href: "/habits",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
        />
      ),
    },
  ];

  // CSS class constants
  const styles = {
    navLink:
      "text-white hover:text-main-color-300 transition-colors flex items-center",
    iconSpacing: {
      desktop: "ml-1",
      mobile: "ml-2",
    },
    buttonPrimary:
      "bg-main-color-600 hover:bg-main-color-500 text-white rounded-full px-6 py-2 transition-colors font-medium flex items-center",
    userButton:
      "flex items-center gap-2 hover:bg-white/10 p-1 rounded-full transition-colors duration-200",
    avatarImage: "rounded-full border-2 border-white/20",
    notificationButton:
      "p-1 rounded-full hover:bg-white/10 transition-colors duration-200",
  };

  // Toggle mobile menu function
  const toggleMobileMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className={`relative overflow-hidden z-[999] h-[${isMenuOpen ? "300px" :"100px"}]`} dir="rtl">
      {/* Header background with gradient */}
      <div className="bg-gradient-to-l fixed top-0 w-full left-0  from-main-color-800 to-main-color-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top navigation bar */}
          <div className="flex justify-between items-center py-4">
            {/* Logo and app name */}
            <div className="flex items-center space-x-4 space-x-reverse">
              <Image
                width={60}
                height={60}
                src={logoPath}
                className="rounded-lg max-sm:w-[50px]"
                alt="logo"
              />
              <div className="text-white text-2xl max-sm:text-lg font-bold">{appName}</div>
            </div>

            {/* Mobile menu button and notifications for small screens */}
            <div className="flex gap-6 flex-row-reverse items-center">
              {/* Mobile menu toggle button */}
              <div className="block lg:hidden">
                <button
                  className="text-white hover:text-main-color-300 focus:outline-none"
                  onClick={toggleMobileMenu}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    {isMenuOpen ? (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    ) : (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    )}
                  </svg>
                </button>
              </div>

              {/* Mobile notifications and avatar */}
              <div className="lg:hidden flex justify-center gap-4 items-center order-3 md:order-3">
                {/* Notification icon with indicator */}
                <div className="relative">
                  <button className={styles.notificationButton}>
                    <IoIosNotificationsOutline size={24} color="white" />
                    <span className="absolute top-1 right-1 rounded-full w-2 h-2 bg-red-500"></span>
                  </button>
                </div>

                {/* User avatar button */}
                <button className={styles.userButton}>
                  <Image
                    src={userAvatarUrl}
                    width={40}
                    className={styles.avatarImage}
                    height={40}
                    alt="User avatar"
                  />
                </button>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex flex-1 justify-center">
              <ul className="flex space-x-8 space-x-reverse">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <a href={item.href} className={styles.navLink}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`h-5 w-5 ${styles.iconSpacing.desktop}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        {item.icon}
                      </svg>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* User actions - Login button or user profile */}
            {!isLoggedIn ? (
              <div className="hidden lg:flex items-center space-x-4 space-x-reverse">
                <button className={styles.buttonPrimary}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-5 w-5 ${styles.iconSpacing.desktop}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                  تسجيل الدخول
                </button>
              </div>
            ) : (
              <>
                {/* Desktop notifications and user profile */}
                <div className="hidden lg:flex justify-end gap-4 items-center order-3 md:order-3">
                  {/* Notification icon with indicator */}
                  <div className="relative">
                    <button className={styles.notificationButton}>
                      <IoIosNotificationsOutline size={24} color="white" />
                      <span className="absolute top-1 right-1 rounded-full w-2 h-2 bg-red-500"></span>
                    </button>
                  </div>

                  {/* User avatar button */}
                  <button className={styles.userButton}>
                    <Image
                      src={userAvatarUrl}
                      width={40}
                      className={styles.avatarImage}
                      height={40}
                      alt="User avatar"
                    />
                  </button>
                </div>
              </>
            )}
          </div>

          {/* Mobile menu - collapsible */}
          {isMenuOpen && (
            <div className="lg:hidden py-4 border-t border-main-color-700">
              <ul className="gap-6 flex justify-center items-center flex-col">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <a href={item.href} className={styles.navLink}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`h-5 w-5 ${styles.iconSpacing.mobile}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        {item.icon}
                      </svg>
                      {item.label}
                    </a>
                  </li>
                ))}

                {/* Conditional login button in mobile menu */}
                {!isLoggedIn ? (
                  <li className="pt-4 border-t border-main-color-700">
                    <button className={styles.buttonPrimary}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`h-5 w-5 ${styles.iconSpacing.desktop}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                      تسجيل الدخول
                    </button>
                  </li>
                ) : null}
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
