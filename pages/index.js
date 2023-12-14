import Head from "next/head";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/react-splide/css';
import Link from "next/link";
export default function Home() {
  return (
    <>
      <Head>
        <title>Distro</title>
      </Head>
      <div className="mx-auto">
      <div className="mx-auto">
      <Splide options={{ rewind: true, autoplay: true  }} aria-label="React Splide Example">
          <SplideSlide>
            <img src="landing.jpg" className="mx-auto rounded-md" alt="Image 1" />
          </SplideSlide>
          <SplideSlide>
            <img src="logo.svg" className="max-h-[40%] mx-auto max-w-[40%]" alt="Image 2" />
          </SplideSlide>
        </Splide>
      </div>
      <div className="mx-4 my-4 md:items-center md:mx-10 lg:mx-20 text-justify bg-black p-4 rounded-lg">
        <h1 className="text-xl my-2">Linux Distros</h1>
        <p>Linux distributions, often referred to as "distros," are different versions of the Linux operating system. They consist of the Linux kernel, system utilities, libraries, and often a package management system and a desktop environment or window manager. Here are some popular Linux distributions.</p>
        <div className="md:grid md:grid-cols-2">
        <Link href='/distro/debian'>
              <div className="w-full mx-auto  my-8 max-w-sm rounded-lg bg-[#343333]">
                <div className="flex flex-col items-center pb-10">
                  <img
                    className="w-24 h-24 mb-3 rounded-full shadow-lg my-4"
                    src='logo.svg'
                    alt="Bonnie image"
                  />
                  <h5 className="mb-1 text-xl font-medium ">Ubuntu</h5>
                </div>
              </div>
            </Link>
            <Link href='/distro/debian'>
              <div className="w-full mx-auto  my-8 max-w-sm rounded-lg bg-[#343333]">
                <div className="flex flex-col items-center pb-10">
                  <img
                    className="w-24 h-24 mb-3 rounded-full shadow-lg my-4"
                    src='logo.svg'
                    alt="Bonnie image"
                  />
                  <h5 className="mb-1 text-xl font-medium ">Ubuntu</h5>
                </div>
              </div>
            </Link>
            <Link href='/distro/debian'>
              <div className="w-full mx-auto  my-8 max-w-sm rounded-lg bg-[#343333]">
                <div className="flex flex-col items-center pb-10">
                  <img
                    className="w-24 h-24 mb-3 rounded-full shadow-lg my-4"
                    src='logo.svg'
                    alt="Bonnie image"
                  />
                  <h5 className="mb-1 text-xl font-medium ">Ubuntu</h5>
                </div>
              </div>
            </Link>
            <Link href='/distro/debian'>
              <div className="w-full mx-auto  my-8 max-w-sm rounded-lg bg-[#343333]">
                <div className="flex flex-col items-center pb-10">
                  <img
                    className="w-24 h-24 mb-3 rounded-full shadow-lg my-4"
                    src='logo.svg'
                    alt="Bonnie image"
                  />
                  <h5 className="mb-1 text-xl font-medium ">Ubuntu</h5>
                </div>
              </div>
            </Link>
            <Link href='/distro/debian'>
              <div className="w-full mx-auto  my-8 max-w-sm rounded-lg bg-[#343333]">
                <div className="flex flex-col items-center pb-10">
                  <img
                    className="w-24 h-24 mb-3 rounded-full shadow-lg my-4"
                    src='logo.svg'
                    alt="Bonnie image"
                  />
                  <h5 className="mb-1 text-xl font-medium ">Ubuntu</h5>
                </div>
              </div>
            </Link>
            <Link href='/distro/debian'>
              <div className="w-full mx-auto  my-8 max-w-sm rounded-lg bg-[#343333]">
                <div className="flex flex-col items-center pb-10">
                  <img
                    className="w-24 h-24 mb-3 rounded-full shadow-lg my-4"
                    src='logo.svg'
                    alt="Bonnie image"
                  />
                  <h5 className="mb-1 text-xl font-medium ">Ubuntu</h5>
                </div>
              </div>
            </Link>
        </div>
        <Link href='/distros'><h1 className="text-center">See other distros</h1></Link>
      </div>
      </div>
    </>
  );
}
