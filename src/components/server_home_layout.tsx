
import Image from "next/image";
import Link from "next/link";

const ServerHomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="bg-[#6b6ea5] w-full flex p-4 md:p-12 gap-4 items-center font-main flex-col text-white min-h-screen justify-center">
      <Image
        src="/logo.png"
        className="w-24 -translate-y-2"
        alt="Mother of Invention - AI Baby Name generator"
        width={50}
        height={50}
      />

      {children}

      <p className="capitalize font-sub font-medium flex items-center gap-0">
        <Image
          src="/favicon_moi.png"
          alt="Mother of Invention - AI Baby Name generator"
          className="w-5 h-5"
          width={10}
          height={10}
        />
        &nbsp;
        <Link
          href="https://motherofinvention.com/"
          target="_blank"
          className="-translate-x-2 underline"
        >
          Mother of Invention - Innovative Baby Products
        </Link>
      </p>
    </main>
  );
};

export default ServerHomeLayout;
