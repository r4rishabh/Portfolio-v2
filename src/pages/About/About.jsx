import HeroImg from "@/assets/images/myImage.jpeg";
import tcs from "@/assets/images/tcs.jpeg";

export default function About() {
  return (
    <>
      <section id="about" className="py-16 md:py-32  text-white bg-[#04081A]">
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
          <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl text-white">
            Frontend Developer
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
            <div className="relative mb-6 sm:mb-0">
              <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl p-px from-zinc-300 to-transparent">
                <img
                  src={HeroImg}
                  className="width-full height-full rounded-full shadow block"
                  alt="payments illustration"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="relative space-y-4">
              <p className="text-white">
                Hello, I&#39;m Rishabh Dev Singh, a
                {" "}
                <span className="font-bold">
                  Frontend Developer 
                </span>
                {" "}
                 committed to delivering innovative web solutions and designing intuitive user interfaces.{" "}
              </p>
              <p className="text-white">
               My focus lies in enhancing the efficiency and speed of web development. I am currently broadening my skill set to include backend development, with the aim of becoming a proficient full-stack developer capable of building seamless and robust applications.
              </p>

              <div className="pt-6">
                <blockquote className="border-l-4 border-gray-300 pl-4">
                  <p className="text-white">
                    I&#39;m a lifelong learner and innovator, driven by a desire to
                    contribute to the developer community with new ideas and
                    tools that deliver real value. 
                  </p>

                  <div className="mt-6 space-y-3">
                    <cite className="block font-medium text-white">
                      Rishabh Dev Singh
                    </cite>
                    <div className="flex items-center gap-2">
                      
                      <span className="text-white">Ex </span>
                      <img
                        className="h-5 w-fit"
                        src={tcs}
                        alt="TCS Logo"
                      />
                    </div>
                  </div>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
