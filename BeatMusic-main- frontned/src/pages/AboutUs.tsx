import BeatMusicLogo from "@/AppComponants/BeatMusicLogo";
import { UserShieldIcon } from "lucide-react";

const headerBg = "file:///C:/Users/Lenovo/.gemini/antigravity-ide/brain/b122c62c-61e6-453b-a989-f688ee3470b7/about_header_illustration_1787715599355.jpg";

const AboutUs = () => {
  return (
    <div className="bg-gray-900 text-gray-200 font-sans min-h-screen">
      {/* Header with dark neon background */}
      <header className="relative flex items-center justify-between max-w-7xl mx-auto px-6 py-8 border-b border-gray-700">
        <div className="absolute inset-0 bg-cover bg-center opacity-70" style={{ backgroundImage: `url(${headerBg})` }} />
        <div className="relative flex items-center gap-3 z-10">
          <BeatMusicLogo className="h-10 w-10 text-purple-400" />
          <h1 className="text-3xl font-bold text-purple-300">BeatMusic</h1>
        </div>
        <nav className="relative flex gap-6 text-sm z-10">
          <a href="/" className="hover:text-purple-200 transition-colors">Premium Plans</a>
          <a href="/support" className="hover:text-purple-200 transition-colors">Support</a>
          <a href="/download" className="hover:text-purple-200 transition-colors">Download</a>
          <UserShieldIcon className="w-5 h-5 text-purple-400" />
        </nav>
      </header>

      <main className="max-w-7xl mx-auto py-12 px-6 space-y-12">
        {/* About */}
        <section className="space-y-4">
          <h2 className="text-4xl font-extrabold text-purple-300">About us</h2>
          <p className="text-lg leading-relaxed">
            With BeatMusic, it’s easy to find the right music or podcast for every moment – on your phone, your computer, your tablet and more.
          </p>
          <p className="text-lg leading-relaxed">
            There are millions of tracks and episodes on BeatMusic. Whether you’re behind the wheel, working out, partying or relaxing, the right music or podcast is always at your fingertips. Choose what you want to listen to, or let BeatMusic surprise you.
          </p>
          <p className="text-lg leading-relaxed">
            You can also browse collections of friends, artists, and celebrities, or create a radio station and just sit back.
          </p>
          <p className="text-lg leading-relaxed">
            Soundtrack your life with BeatMusic. Subscribe or listen for free.
          </p>
        </section>

        {/* Support */}
        <section className="space-y-4">
          <h2 className="text-4xl font-extrabold text-purple-300">Customer Service & Support</h2>
          <ol className="list-decimal list-inside space-y-2 text-lg">
            <li>Help site – check out our help site for answers and learn how to get the most out of BeatMusic.</li>
            <li>Community – get fast support from expert BeatMusic users. Post questions, vote on ideas, and suggest new features.</li>
            <li>Contact us – reach Customer Support if you can’t find a solution.</li>
          </ol>
        </section>

        {/* Topics */}
        <section className="space-y-4">
          <h2 className="text-4xl font-extrabold text-purple-300">Or pick a topic</h2>
          <ul className="list-disc list-inside space-y-1 text-lg">
            <li>Advertising on BeatMusic? – Advertisers section</li>
            <li>Press query? – Press section</li>
            <li>Applying for a job? – Jobs section</li>
          </ul>
        </section>

        {/* Legal */}
        <section className="bg-gray-800 p-6 rounded-lg">
          <p className="mb-2">BeatMusic USA, Inc. provides the BeatMusic service to users in the United States.</p>
          <p>BeatMusic AB provides the BeatMusic service to users in all other markets.</p>
        </section>

        {/* Offices */}
        <section className="space-y-6">
          <h2 className="text-4xl font-extrabold text-purple-300">Our Offices</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="border border-gray-600 p-6 rounded-lg bg-gray-800 hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-semibold mb-2 text-purple-200">BeatMusic AB</h3>
              <p className="font-medium mb-2">Sweden</p>
              <p className="text-sm">Regeringsgatan 19</p>
              <p className="text-sm">SE-111 53 Stockholm</p>
              <p className="text-sm">Sweden</p>
              <p className="text-sm text-purple-300">office@beatmusic.com</p>
            </div>
            <div className="border border-gray-600 p-4 rounded-lg bg-gray-800 hover:shadow-lg transition-shadow">
              <h3 className="font-semibold text-purple-200">BeatMusic Belgium</h3>
              <p className="text-sm">Square de Meeus 37</p>
              <p className="text-sm">4th floor</p>
              <p className="text-sm">1000 Brussels</p>
              <p className="text-sm">Belgium</p>
              <p className="text-sm text-purple-300">office@beatmusic.com</p>
            </div>
            {/* Additional office cards can be added here */}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 px-6">
          <div>
            <h3 className="font-bold mb-4 text-purple-300">COMPANY</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/about" className="hover:underline">About</a></li>
              <li><a href="/jobs" className="hover:underline">Jobs</a></li>
              <li><a href="/record" className="hover:underline">For the Record</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4 text-purple-300">COMMUNITY</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/artists" className="hover:underline">For the Artists</a></li>
              <li><a href="/developers" className="hover:underline">Developers</a></li>
              <li><a href="/advertising" className="hover:underline">Advertising</a></li>
              <li><a href="/investors" className="hover:underline">Investors</a></li>
              <li><a href="/vendors" className="hover:underline">Vendors</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4 text-purple-300">USEFUL LINKS</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/support" className="hover:underline">Support</a></li>
              <li><a href="/player" className="hover:underline">Web Player</a></li>
              <li><a href="/mobile" className="hover:underline">Free Mobile App</a></li>
              <li><a href="/import" className="hover:underline">Import your Music</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4 text-purple-300">BEATMUSIC PLANS</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/plans/standard" className="hover:underline">Premium Standard</a></li>
              <li><a href="/plans/platinum" className="hover:underline">Premium Platinum</a></li>
              <li><a href="/plans/student" className="hover:underline">Premium Student</a></li>
              <li><a href="/plans/free" className="hover:underline">BeatMusic Free</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4 text-purple-300">FOLLOW US</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="https://instagram.com/beatmusic" className="hover:underline">Instagram</a></li>
              <li><a href="https://twitter.com/beatmusic" className="hover:underline">Twitter</a></li>
              <li><a href="https://facebook.com/beatmusic" className="hover:underline">Facebook</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} BeatMusic. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default AboutUs;
