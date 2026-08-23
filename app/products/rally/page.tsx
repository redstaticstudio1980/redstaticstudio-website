import Image from "next/image";

export default function RallyPage() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* HERO */}
      <section className="mx-auto max-w-6xl px-8 py-24">

        <div className="text-center">

          <Image
            src="/images/rally.png"
            alt="Rally"
            width={180}
            height={180}
            className="mx-auto mb-8 rounded-3xl shadow-2xl"
          />

          <h1 className="mb-6 text-6xl font-black uppercase">
            Rally
          </h1>

          <p className="mx-auto mb-10 max-w-3xl text-xl text-gray-400 leading-relaxed">
            Rally transforms everyday life into real-world adventures.
            Complete daily missions, build streaks, compete with friends,
            discover hidden places, and create unforgettable memories—
            one challenge at a time.
          </p>

          <button className="rounded-full bg-red-600 px-10 py-4 text-lg font-semibold hover:bg-red-500 transition">
            Coming Soon
          </button>

        </div>

      </section>

      {/* FEATURES */}

      <section className="bg-zinc-950 py-24">

        <div className="mx-auto max-w-6xl px-8">

          <h2 className="mb-16 text-center text-5xl font-black uppercase">
            Features
          </h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

            <div className="rounded-2xl border border-red-600/30 bg-black p-8">
              <h3 className="mb-4 text-2xl font-bold">
                Daily Missions
              </h3>

              <p className="text-gray-400">
                Every day unlocks a brand-new challenge designed to
                get people off their phones and into the real world.
              </p>
            </div>

            <div className="rounded-2xl border border-red-600/30 bg-black p-8">
              <h3 className="mb-4 text-2xl font-bold">
                Squads
              </h3>

              <p className="text-gray-400">
                Invite friends into private squads, compete together,
                vote on submissions, level up, and build memories.
              </p>
            </div>

            <div className="rounded-2xl border border-red-600/30 bg-black p-8">
              <h3 className="mb-4 text-2xl font-bold">
                XP & Achievements
              </h3>

              <p className="text-gray-400">
                Complete missions, unlock achievements,
                earn badges, and build your streak.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* COMMUNITY RALLIES */}

      <section className="py-24">

        <div className="mx-auto max-w-6xl px-8">

          <h2 className="mb-8 text-center text-5xl font-black uppercase">
            Community Rallies
          </h2>

          <p className="mx-auto mb-16 max-w-3xl text-center text-gray-400 text-lg">
            Join city-wide and nationwide events where thousands of
            players complete the same challenge. Explore local businesses,
            landmarks, parks, festivals and seasonal adventures while
            competing with the Rally community.
          </p>

          <div className="grid gap-6 md:grid-cols-2">

            <div className="rounded-2xl border border-red-600/30 bg-zinc-900 p-8">
              🍕 Boston Pizza Rally
            </div>

            <div className="rounded-2xl border border-red-600/30 bg-zinc-900 p-8">
              🎃 Halloween Rally
            </div>

            <div className="rounded-2xl border border-red-600/30 bg-zinc-900 p-8">
              🌲 National Park Rally
            </div>

            <div className="rounded-2xl border border-red-600/30 bg-zinc-900 p-8">
              🌅 Sunrise Challenge
            </div>

          </div>

        </div>

      </section>

      {/* FEATURED PARTNERS */}

      <section className="bg-zinc-950 py-24">

        <div className="mx-auto max-w-5xl px-8 text-center">

          <h2 className="mb-8 text-5xl font-black uppercase">
            Featured Partners
          </h2>

          <p className="mx-auto mb-10 max-w-3xl text-lg text-gray-400">
            Businesses can sponsor Community Rallies and purchase
            Featured Partner placements for seven days, driving players
            directly to their locations through exclusive missions,
            promotions and rewards.
          </p>

          <button className="rounded-full bg-red-600 px-10 py-4 font-semibold hover:bg-red-500 transition">
            Become a Featured Partner
          </button>

        </div>

      </section>

      {/* SCREENSHOTS */}

      <section className="py-24">

        <div className="mx-auto max-w-6xl px-8">

          <h2 className="mb-16 text-center text-5xl font-black uppercase">
            Screenshots
          </h2>

          <div className="grid gap-8 md:grid-cols-3">

            <div className="aspect-[9/19] rounded-3xl border-2 border-dashed border-red-600/40"></div>

            <div className="aspect-[9/19] rounded-3xl border-2 border-dashed border-red-600/40"></div>

            <div className="aspect-[9/19] rounded-3xl border-2 border-dashed border-red-600/40"></div>

          </div>

        </div>

      </section>

      {/* FAQ */}

      <section className="bg-zinc-950 py-24">

        <div className="mx-auto max-w-4xl px-8">

          <h2 className="mb-12 text-center text-5xl font-black uppercase">
            FAQ
          </h2>

          <div className="space-y-8">

            <div>
              <h3 className="font-bold text-xl">
                Is Rally free?
              </h3>

              <p className="text-gray-400">
                Yes. Rally will offer a free experience with optional premium features.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-xl">
                Can I play solo?
              </h3>

              <p className="text-gray-400">
                Absolutely. Solo missions, Squads and Community Rallies are all supported.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-xl">
                When does Rally launch?
              </h3>

              <p className="text-gray-400">
                Development is underway. Join the waitlist to be notified first.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="py-28 text-center">

        <h2 className="mb-6 text-5xl font-black uppercase">
          Ready to Rally?
        </h2>

        <p className="mb-10 text-gray-400">
          Join the waitlist and be first to experience Rally.
        </p>

        <button className="rounded-full bg-red-600 px-12 py-5 text-xl font-semibold hover:bg-red-500 transition">
          Join Waitlist
        </button>

      </section>

    </main>
  );
}