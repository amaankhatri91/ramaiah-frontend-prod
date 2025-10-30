import Header1 from "@/componets/Header/Header1";
import Header2 from "@/componets/Header/Header2";
import Image from "next/image";
import { Manrope } from "next/font/google";
import HeroSection from "@/componets/HomePage/HeroSection/HeroSection";
import Appointment from "@/componets/HomePage/Appointment/Appointment";
import MainPage from "@/componets/HomePage/MainPage/MainPage";

export async function generateMetadata() {
  // const defaults = {
  //   title: 'Best Hospital in Bangalore | Ramaiah Memorial Hospital',
  //   description:
  //     'Experience top-notch medical care at Ramaiah Memorial Hospital, your choice for the best hospital in Bangalore. Trust in our commitment to your well-being.',
  // };

  try {
    const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
    const res = await fetch(`${apiBaseUrl}/home`, {
      headers: {
        'Content-Type': 'application/json',
        'ngrok-skip-browser-warning': 'true',
      },
      next: { revalidate: 300 },
    });
    const json = await res.json();
    const data = json?.data ?? null;
    const title = data?.meta_title
    const description = data?.meta_description 
    const rawKeywords = data?.meta_keywords;
    const keywords = rawKeywords
    return {
      title,
      description,
      ...(keywords ? { keywords } : {}),
      alternates: { canonical: 'https://ramaiah-live.onrender.com/' },
      openGraph: {
        locale: 'en_US',
        title,
        description,
        url: 'https://ramaiah-live.onrender.com/',
        siteName: 'MS Ramaiah Memorial Hospital',
        type: 'website',
        images: [
          { url: '/assets/Footer.png', width: 1200, height: 630, alt: 'Medical Center' }
        ]
      },
      twitter: {
        card: 'summary_large_image',
        title,
        description,
        site: '@MSRMHOfficial',
        images: ['/assets/Footer.png']
      },
      other: {
        'article:publisher': 'https://www.facebook.com/MSRamaiahMemorialHospital',
        'article:modified_time': '2025-09-16T10:41:15+00:00'
      }
    };
  } catch (e) {
    console.log("error",e)
  }
}

export default function Home() {
  return (
    // <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
    //   <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
    //     <Image
    //       className="dark:invert"
    //       src="/next.svg"
    //       alt="Next.js logo"
    //       width={180}
    //       height={38}
    //       priority
    //     />
    //     <ol className="font-mono list-inside list-decimal text-sm/6 text-center sm:text-left">
    //       <li className="mb-2 tracking-[-.01em]">
    //         Get started by editing{" "}
    //         <code className="bg-black/[.05] dark:bg-white/[.06] font-mono font-semibold px-1 py-0.5 rounded">
    //           app/page.js
    //         </code>
    //         .
    //       </li>
    //       <li className="tracking-[-.01em]">
    //         Save and see your changes instantly.
    //       </li>
    //     </ol>

    //     <div className="flex gap-4 items-center flex-col sm:flex-row">
    //       <a
    //         className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
    //         href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         <Image
    //           className="dark:invert"
    //           src="/vercel.svg"
    //           alt="Vercel logomark"
    //           width={20}
    //           height={20}
    //         />
    //         Deploy now
    //       </a>
    //       <a
    //         className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
    //         href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         Read our docs
    //       </a>
    //     </div>
    //   </main>
    //   <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
    //     <a
    //       className="flex items-center gap-2 hover:underline hover:underline-offset-4"
    //       href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <Image
    //         aria-hidden
    //         src="/file.svg"
    //         alt="File icon"
    //         width={16}
    //         height={16}
    //       />
    //       Learn
    //     </a>
    //     <a
    //       className="flex items-center gap-2 hover:underline hover:underline-offset-4"
    //       href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <Image
    //         aria-hidden
    //         src="/window.svg"
    //         alt="Window icon"
    //         width={16}
    //         height={16}
    //       />
    //       Examples
    //     </a>
    //     <a
    //       className="flex items-center gap-2 hover:underline hover:underline-offset-4"
    //       href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <Image
    //         aria-hidden
    //         src="/globe.svg"
    //         alt="Globe icon"
    //         width={16}
    //         height={16}
    //       />
    //       Go to nextjs.org →
    //     </a>
    //   </footer>
    // </div>
    <>
      {/* <div className="pb-[100px]"> */}

      {/* <Header1 />
    <Header2 /> */}
      {/* <HeroSection />
    <Appointment /> */}
      <MainPage />
      {/* </div> */}
    </>
  );
}
