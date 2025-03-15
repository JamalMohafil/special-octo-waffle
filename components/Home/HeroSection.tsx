"use client";

import Image from "next/image";
import { Cross, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function ArabicHealthAI() {
  return (
    <div className="  bg-white relative">
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Right side - Content */}
          <div className="sm:flex gap-3 md:9/12 lg:w-7/12 text-center lg:text-right">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-3xl md:text-4xl font-bold text-main-color-800 leading-tight">
                  حقق أهدافك الصحية
                </h1>
                <h2 className="max-xl:text-4xl max-xl:gap-7 gap-3 text-5xl md:text-[3.5rem] flex max-xl:flex-col font-bold text-main-color-800">
                  بمساعدة{" "}
                  <span className="text-main-color-600 ">
                    {" "}
                    الذكاء الاصطناعي{" "}
                  </span>
                </h2>
              </div>

              <p className="text-lg text-black max-w-lg ml-auto">
                ابحث عن الأدوية، احصل على نصائح مخصصة وتابع صحتك بسهولة باستخدام
                الذكاء الاصطناعي
              </p>

              {/* Search bar */}
              <div className="mt-8 max-lg:mx-auto max-w-lg sm:w-[80%] ml-auto">
                <div className="relative">
                  <Input
                    type="text"
                    placeholder="البحث عن دواء (مثال: ليفوفوكس)"
                    className="w-full pl-12 pr-4 py-6 rounded-lg border-main-color-50 bg-white shadow-md text-right"
                  />
                  <Button className="absolute left-1 top-1 h-10 w-10 rounded-md bg-main-color-50 hover:bg-main-color-200">
                    <Search className="h-5 w-5 text-main-color-700" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
          {/* Left side - Image */}

          <div className="md:w-1/2 max-lg:hidden lg:w-5/12">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="https://s3-alpha-sig.figma.com/img/5379/c4bc/2c4b80750e4b5ab543c33f7d306c85bf?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ZTMULU0QdPU2l4-39OPxFXhTC0fKj-pkks0v5ZnywRF~8v~ti7hfhU96-BqvRtyMMgR2i~Ndny8UJBsMwc-pwsBeb4BfhgtxO-SFjM0a3hGCJhMqN9VwMlxItBm2EpQaNzu~7-XXMSn~wVfFmpy52kE1khV0rYnkq74qBW-Hrz2q4-mYnFemjJgr0bRJd9vtXjfGeW9ch1VZG-njY7u9xrlBXdUMytf-AhkF7XP9Gt~e5LlcB~VUC747CJypZ8qTJQ6XCSpkoA8G0phn8oslAeLAkxO6DcxdiK~N7RMmrPWXf5UXhqFKICA7MXkXUQMM54Zh76xKp~eKnKkUMWTQEA__"
                  alt="Doctor with medical supplies"
                  width={560}
                  height={827}
                  className="w-[630px] object-center h-[627px] object-cover"
                />
              </div>

              {/* Floating info box */}
              <div
                className="absolute bottom-[30%] -right-24 bg-main-color-100
               text-main-color-900 p-3 rounded-lg shadow-md max-w-[350px] rtl-text"
              >
                <div className="flex items-center gap-2">
                  <div className="mt-1">
                    <Cross size={24} />
                  </div>
                  <p className="text-lg font-medium text-right">
                    حقق أهدافك الصحية <br />
                    بنصائح وأدلة مدعومة بذكاء يتبع الفريق
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom wave
      <div className="absolute bottom-0 left-0 right-0 z-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="w-full"
        >
          <path
            fill="#e0f7fa"
            fillOpacity="0.5"
            d="M0,224L80,213.3C160,203,320,181,480,181.3C640,181,800,203,960,202.7C1120,203,1280,181,1360,170.7L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
      </div> */}

      {/* Hexagonal pattern background */}
      <div className="absolute inset-1 z-0">
        <div className="w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXR0ZXJuIGlkPSJoZXhhZ29ucyIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxNzMuMiIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgcGF0dGVyblRyYW5zZm9ybT0ic2NhbGUoMC41KSI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idHJhbnNwYXJlbnQiLz48cG9seWdvbiBwb2ludHM9IjAsMCAxMDAsMCAxMDAsMTczLjIgMCwxNzMuMiIgZmlsbD0idHJhbnNwYXJlbnQiIHN0cm9rZT0iI2UwZjdmYSIgc3Ryb2tlLXdpZHRoPSIxIi8+PGNpcmNsZSBjeD0iMCIgY3k9IjAiIHI9IjEwIiBmaWxsPSIjYTdlOGVkIiBvcGFjaXR5PSIwLjMiLz48Y2lyY2xlIGN4PSIxMDAiIGN5PSIwIiByPSIxMCIgZmlsbD0iI2E3ZThlZCIgb3BhY2l0eT0iMC4zIi8+PGNpcmNsZSBjeD0iNTAiIGN5PSI4Ni42IiByPSIxMCIgZmlsbD0iI2E3ZThlZCIgb3BhY2l0eT0iMC4zIi8+PGNpcmNsZSBjeD0iMCIgY3k9IjE3My4yIiByPSIxMCIgZmlsbD0iI2E3ZThlZCIgb3BhY2l0eT0iMC4zIi8+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTczLjIiIHI9IjEwIiBmaWxsPSIjYTdlOGVkIiBvcGFjaXR5PSIwLjMiLz48L3BhdHRlcm4+PHJlY3QgZmlsbD0idXJsKCNoZXhhZ29ucykiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiLz48L3N2Zz4=')]"></div>
      </div>
    </div>
  );
}
