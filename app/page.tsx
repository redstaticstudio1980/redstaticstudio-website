import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">



      {/* Navigation */}
      <nav className="border-b border-red-600/30">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5">

          <div className="flex items-center gap-3">
            <Image
              src="/images/logo.png"
              alt="Red Static Studio"
              width={48}
              height={48}
              className="h-12 w-auto"
            />

            <span className="text-2xl font-bold tracking-wider">
              RED STATIC STUDIO
            </span>
          </div>

          <div className="flex gap-8 text-sm uppercase tracking-widest">

            <a href="#">Home</a>

            <a href="#">Our Products</a>

            <a href="#">About</a>

            <a href="#">Contact</a>

          </div>

        </div>
      </nav>

      {/* Hero */}

      <section className="mx-auto flex max-w-7xl flex-col items-center py-28 text-center">

        <Image
          src="/images/logo.png"
          alt="RSS"
          width={224}
          height={224}
          className="mb-8 w-56 h-auto"
        />

        <h1 className="mb-6 text-6xl font-black uppercase tracking-wider">

          Build.
          <br />
          Launch.
          <br />
          Inspire.

        </h1>

        <p className="max-w-2xl text-lg text-gray-400">

          Red Static Studio creates memorable apps and digital
          experiences that bring people together through
          creativity, technology, and real-world engagement.

        </p><div className="mt-10 flex gap-4">
          <button className="rounded-full bg-red-600 px-8 py-4 font-semibold hover:bg-red-500 transition">
            View Our Products
          </button>

          <button className="rounded-full border border-red-600 px-8 py-4 font-semibold hover:bg-red-600 transition">
            Start a Project
          </button>
        </div>

      </section>


      {/* OUR PRODUCTS */}

      <section className="bg-zinc-950 py-24">
        <div className="mx-auto max-w-7xl px-8">

          <h2 className="mb-4 text-center text-5xl font-black uppercase">
            Our Products
          </h2>

          <p className="mb-16 text-center text-gray-400">
            Every product we build is designed to create memorable experiences.
          </p>

          <div className="mx-auto max-w-2xl">

            {/* Rally */}

            <div className="rounded-3xl border border-red-500/30 bg-gradient-to-b from-zinc-900 to-black p-12 transition duration-300 hover:scale-[1.02] hover:border-red-500 hover:shadow-2xl hover:shadow-red-600/30">

              <span className="mb-4 inline-block rounded-full bg-red-600 px-4 py-1 text-xs font-bold uppercase tracking-widest text-white">
                Now Available
              </span>
              <Image
                src="/images/rally.png"
                alt="Rally"
                width={120}
                height={120}
                className="mb-6 mx-auto rounded-2xl"
              />

              <h3 className="mb-4 text-3xl font-bold">
                Rally
              </h3>

              <p className="mb-8 text-gray-400">
                Real-world adventures with friends through daily missions,
                squads, and unforgettable experiences.
              </p>

              <a
  href="/products/rally"
  className="group mt-2 inline-flex items-center rounded-full bg-red-600 px-8 py-4 text-lg font-semibold transition-all duration-300 hover:bg-red-500 hover:shadow-lg hover:shadow-red-600/40"
>
  Learn More →
</a>

            </div>





          </div>

        </div>



      </section>



    </main>
  );
}