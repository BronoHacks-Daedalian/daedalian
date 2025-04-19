import Image from "next/image";
import Footer from '../app/footer';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className=" flex flex-col gap-[32px] row-start-2 items-center">
        <Image
          src="/accountabuddylogo.png"
          alt="Accountabuddy Logo"
          width={180}
          height={38}
          priority
        />
        <p className="font-[family-name:var(--font-geist-mono)] text-5xl bold leading-tight">Accountabuddy</p>
        <p className="font-[family-name:var(--font-geist-mono)] leading-none italic">Seize the Reins to Your Life</p>
        <Link href="/todo">    
        <button className="font-[family-name:var(--font-geist-mono)] text-2xl border border-black px-5 py-3 bg-yellow-500 text-white rounded hover:bg-white hover:text-black transition-colors
        duration-200 ease-in-out active:bg-orange-500">
          Begin</button>
        </Link> 
        <Footer />
        </main>
        
    </div>
    

  );
}
