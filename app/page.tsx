import Image from "next/image";

export default function Home() {
  return (
    <main className="h-screen overflow-hidden relative">
      <Image
        className="paralax w-screen h-screen absolute top-0 left-0"
        src="/images/bg/bg.png"
        alt="Background image"
        width={100000}
        height={100000}
        quality={100}
      />
      <Image
        className="paralax w-screen h-screen"
        src="/images/bg/1.png"
        alt="Background image"
        width={100000}
        height={100000}
        quality={100}
      />
      <Image
        className="paralax w-screen h-screen"
        src="/images/bg/2.png"
        alt="Background image"
        width={100000}
        height={100000}
        quality={100}
      />
      <Image
        className="paralax w-screen h-screen"
        src="/images/bg/3.png"
        alt="Background image"
        width={100000}
        height={100000}
        quality={100}
      />
      <div className="paralax">
        <h2>
          MADEBY
          <br />
          KISSFIU
        </h2>
      </div>
      <Image
        className="paralax w-screen h-screen"
        src="/images/bg/4.png"
        alt="Background image"
        width={100000}
        height={100000}
        quality={100}
      />
      <Image
        className="paralax w-screen h-screen"
        src="/images/bg/5.png"
        alt="Background image"
        width={100000}
        height={100000}
        quality={100}
      />
      <Image
        className="paralax w-screen h-screen"
        src="/images/bg/6.png"
        alt="Background image"
        width={100000}
        height={100000}
        quality={100}
      />
    </main>
  );
}
