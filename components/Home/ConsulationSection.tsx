/**
 * ConsultationSection Component
 *
 * A responsive section that showcases AI-powered medical consultation services
 * with visual elements and Arabic content. Features decorative wave SVGs,
 * hexagonal background patterns, and strategically positioned images.
 *
 * @component
 * @returns {JSX.Element} The rendered consultation section
 */
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

/**
 * ConsultationSection component displays information about AI medical consultation
 * services with a visually appealing layout including waves, patterns, and images.
 */
export default function ConsultationSection() {
  // Feature benefits to display in the list
  const features = [
    "تحدث مع الذكاء الصناعي، شارك صورك، واحصل على إجابات دقيقة مع مقاطع فيديو تعليمية",
    "استفسر الآن، شارك الصور، واكتشف فيديوهات تساعدك على فهم حالتك الصحية",
    "دردشة تفاعلية مع الذكاء الصناعي، اسأل، شارك صور، واحصل على محتوى فيديو مخصص",
  ];

  return (
    <div className="relative overflow-hidden bg-main-color-100 py-14">
      {/* Top decorative wave - creates smooth transition from previous section */}
      <div className="absolute top-0 left-0 w-full z-10">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full h-16 sm:h-24 lg:h-32"
        >
          <path
            d="M0,64L60,69.3C120,75,240,85,360,90.7C480,96,600,96,720,85.3C840,75,960,53,1080,48C1200,43,1320,53,1380,58.7L1440,64L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
            fill="white"
          />
        </svg>
      </div>

      {/* Bottom decorative wave - creates smooth transition to next section */}
      <div className="absolute bottom-0 left-0 w-full z-10">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full h-16 sm:h-24 lg:h-32"
        >
          <path
            d="M0,64L60,53.3C120,43,240,21,360,21.3C480,21,600,43,720,53.3C840,64,960,64,1080,58.7C1200,53,1320,43,1380,37.3L1440,32L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z"
            fill="white"
          />
        </svg>
      </div>

      {/* Hexagonal pattern background - adds visual interest and depth */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXR0ZXJuIGlkPSJoZXhhZ29ucyIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxNzMuMiIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgcGF0dGVyblRyYW5zZm9ybT0ic2NhbGUoMC41KSI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idHJhbnNwYXJlbnQiLz48cG9seWdvbiBwb2ludHM9IjAsMCAxMDAsMCAxMDAsMTczLjIgMCwxNzMuMiIgZmlsbD0idHJhbnNwYXJlbnQiIHN0cm9rZT0iI2UwZjdmYSIgc3Ryb2tlLXdpZHRoPSIxIi8+PGNpcmNsZSBjeD0iMCIgY3k9IjAiIHI9IjEwIiBmaWxsPSIjYTdlOGVkIiBvcGFjaXR5PSIwLjMiLz48Y2lyY2xlIGN4PSIxMDAiIGN5PSIwIiByPSIxMCIgZmlsbD0iI2E3ZThlZCIgb3BhY2l0eT0iMC4zIi8+PGNpcmNsZSBjeD0iNTAiIGN5PSI4Ni42IiByPSIxMCIgZmlsbD0iI2E3ZThlZCIgb3BhY2l0eT0iMC4zIi8+PGNpcmNsZSBjeD0iMCIgY3k9IjE3My4yIiByPSIxMCIgZmlsbD0iI2E3ZThlZCIgb3BhY2l0eT0iMC4zIi8+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTczLjIiIHI9IjEwIiBmaWxsPSIjYTdlOGVkIiBvcGFjaXR5PSIwLjMiLz48L3BhdHRlcm4+PHJlY3QgZmlsbD0idXJsKCNoZXhhZ29ucykiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiLz48L3N2Zz4=')]"></div>
      </div>

      {/* Main content container */}
      <div className="py-16 md:py-24 flex items-center justify-center">
        <div className="xl:max-w-[1800px] mx-auto px-16 max-sm:px-4 max-lg:px-8 z-20 w-full">
          <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8 lg:gap-12">
            {/* Right side - Text content (appears on left in RTL languages) */}
            <div className="lg:w-3/5 text-right max-lg:text-center">
              <div className="space-y-6 md:space-y-8">
                {/* Main headings with emoji accents */}
                <div className="space-y-6 max-sm:space-y-0">
                  <h2 className="text-2xl sm:text-2xl md:text-3xl lg:text-[40px] font-bold text-main-color-800 leading-tight">
                    استشر الذكاء الاصطناعي!
                  </h2>
                  <div className="flex items-center justify-start max-sm:flex-col max-lg:justify-center gap-2 text-4xl sm:text-3xl md:text-4xl lg:text-[52px] font-bold text-main-color-600">
                    <span className="leading-[56px]">طبيبك الذكي في خدمتك</span>
                    <span className="flex gap-1">
                      <span role="img" aria-label="robot">
                        🤖
                      </span>
                      <span role="img" aria-label="lightbulb">
                        💡
                      </span>
                    </span>
                  </div>
                </div>

                {/* Feature list with bullet points */}
                <ul className="space-y-4 text-sm sm:text-lg w-[96%] md:text-xl text-main-color-800 list-none">
                  {features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex flex-row items-center gap-2"
                    >
                      {/* Visual bullet point (hidden on mobile) */}
                      <span className="w-2 h-2 max-md:hidden rounded-full bg-main-color-800"></span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link href="/your-target-url" className=" mx-auto">
                  <Button className="max-w-[200px] bg-main-color-600 hover:bg-main-color-700 text-white px-6 py-5 md:px-8 md:py-6 text-base md:text-lg rounded-xl shadow-lg transition-all duration-300">
                    <ArrowLeft className="ml-2 h-5 w-5" />
                  الان جرب
                  </Button>
                </Link>
              </div>
            </div>

            {/* Left side - Image gallery (appears on right in RTL languages) */}
            <div className="lg:w-2/5 max-sm:hidden relative">
              <div className="relative w-full lg:h-[450px]">
                {/* Main central image */}
                <div className="lg:absolute top-1/2 left-1/2 lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2 w-full max-w-lg lg:max-w-2xl">
                  <Image
                    src="https://www.figma.com/file/ptBbfSwq4R0aYT8nSZRMgP/image/f12edd1eb0c8d69d9f1e9fa6ad5b32639512840d"
                    alt="Medical interface"
                    width={800}
                    height={323}
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg=="
                    className="object-cover w-full max-h-[380px] rounded-xl shadow-lg"
                    priority={true} // Prioritize loading for better LCP metrics
                  />
                </div>

                {/* Top-left floating image - doctor consultation */}
                <div className="absolute max-lg:hidden -top-16 lg:-top-24 left-0 sm:-left-12 z-50 w-1/3 sm:w-auto">
                  <Image
                    src="https://www.figma.com/file/ptBbfSwq4R0aYT8nSZRMgP/image/239db1b821335135370d29fb990e336feaaf6753"
                    alt="Doctor consultation"
                    width={221}
                    height={353}
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg=="
                    className="object-cover w-full h-[353px] max-lg:h-[200px] sm:w-[180px] md:w-[200px] lg:w-[221px] rounded-xl shadow-lg"
                  />
                </div>

                {/* Bottom-right floating image - patient using device */}
                <div className="absolute max-lg:hidden -bottom-12 lg:-bottom-20 right-0 sm:-right-20 z-50 w-1/3 sm:w-auto">
                  <Image
                    src="https://www.figma.com/file/ptBbfSwq4R0aYT8nSZRMgP/image/d0d0694e56ded9b54bcf7dee267541c30e3368d9"
                    alt="Patient using device"
                    width={209}
                    height={283}
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg=="
                    className="object-cover h-[283px] max-lg:h-[200px] w-full sm:w-[160px] md:w-[180px] lg:w-[209px] rounded-xl shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
