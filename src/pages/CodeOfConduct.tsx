import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { siteConfig } from "../data/site"
import { Heart, Shield, Users, MessageSquare, AlertTriangle, Gavel, MapPin, CheckCircle } from "lucide-react"

export default function CodeOfConduct() {
  return (
    <div className="min-h-screen w-full bg-valley-cream flex flex-col font-sans text-valley-brown">
      <Navbar />
      <div className="flex-grow pt-24 pb-12 px-4 md:px-6">
        <div className="max-w-4xl mx-auto space-y-8 md:space-y-12">
          
          {/* Header */}
          <div className="text-center space-y-4 md:space-y-6">
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-valley-gold drop-shadow-sm uppercase tracking-wider leading-relaxed font-pixel">
              Tech(Hack) Code of Conduct
            </h1>
            <p className="text-valley-brown/80 text-sm md:text-lg max-w-2xl mx-auto leading-relaxed px-2 font-medium">
              We are committed to providing a safe and inclusive environment for everyone to grow, learn, and harvest ideas together.
            </p>
          </div>

          {/* Main Content Card - Mobile Optimized */}
          <div className="bg-white border-2 md:border-4 border-valley-brown rounded-lg md:rounded-xl p-5 md:p-12 shadow-lg space-y-8 md:space-y-10 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
              <Shield className="w-32 h-32 md:w-64 md:h-64 text-valley-gold" />
            </div>

            {/* 1. Purpose */}
            <section className="relative z-10">
              <div className="flex items-center gap-3 mb-3 md:mb-4">
                <Heart className="w-6 h-6 md:w-8 md:h-8 text-red-500 animate-pulse shrink-0" />
                <h2 className="text-lg md:text-2xl font-bold text-valley-brown uppercase leading-tight font-pixel">1. Purpose</h2>
              </div>
              <div className="space-y-3 md:space-y-4 text-valley-brown/90 text-sm md:text-base lg:text-lg text-justify leading-relaxed">
                <p>
                  This hackathon is a student-run, in-person event dedicated to building innovative gaming-related and gaming-adjacent solutions. Our goal is to create a space that is welcoming, inclusive, respectful, and collaborative for everyone involved.
                </p>
                <p>
                  All participants deserve to feel safe and supported. Harassment, discrimination, or disruptive behavior will not be tolerated.
                </p>
                <p>
                  This Code of Conduct applies to all attendees, including participants, organizers, mentors, judges, sponsors, volunteers, and guests.
                </p>
              </div>
            </section>

            {/* 2. Eligibility */}
            <section className="relative z-10">
              <div className="flex items-center gap-3 mb-3 md:mb-4">
                <Users className="w-6 h-6 md:w-8 md:h-8 text-valley-green shrink-0" />
                <h2 className="text-lg md:text-2xl font-bold text-valley-brown uppercase leading-tight font-pixel">2. Eligibility</h2>
              </div>
              <p className="text-valley-brown/90 leading-relaxed text-sm md:text-base lg:text-lg mb-2">
                To participate in this hackathon, all attendees must:
              </p>
              <ul className="space-y-2 md:space-y-3 text-valley-brown/90 list-disc list-outside ml-5 text-sm md:text-base lg:text-lg marker:text-valley-gold">
                <li>Be 18 years of age or older at the time of the event</li>
                <li>Be a currently enrolled student at an accredited high school, college, or university</li>
              </ul>
              <p className="text-valley-brown/90 leading-relaxed text-sm md:text-base lg:text-lg mt-3">
                By registering and attending, you confirm that you meet these eligibility requirements.
              </p>
            </section>

            {/* 3. Expected Behavior */}
            <section className="relative z-10">
              <div className="flex items-center gap-3 mb-3 md:mb-4">
                <Users className="w-6 h-6 md:w-8 md:h-8 text-valley-blue shrink-0" />
                <h2 className="text-lg md:text-2xl font-bold text-valley-brown uppercase leading-tight font-pixel">3. Expected Behavior</h2>
              </div>
              <p className="text-valley-brown/90 leading-relaxed text-sm md:text-base lg:text-lg mb-2">
                All participants are expected to:
              </p>
              <ul className="space-y-2 md:space-y-3 text-valley-brown/90 list-disc list-outside ml-5 text-sm md:text-base lg:text-lg marker:text-valley-blue">
                <li>Treat others with respect, kindness, and professionalism</li>
                <li>Be inclusive and considerate of different backgrounds, identities, and experiences</li>
                <li>Communicate constructively and collaborate in good faith</li>
                <li>Respect shared spaces, equipment, and event resources</li>
                <li>Follow all event rules and instructions provided by organizers</li>
              </ul>
              <p className="text-valley-brown/90 leading-relaxed text-sm md:text-base lg:text-lg mt-3 font-medium italic border-l-4 border-valley-blue/30 pl-4 py-1">
                "Gaming culture thrives on creativity and competition — we encourage enthusiasm and passion, not hostility or disrespect."
              </p>
            </section>

             {/* 4. Unacceptable Behavior */}
             <section className="relative z-10">
              <div className="flex items-center gap-3 mb-3 md:mb-4">
                <AlertTriangle className="w-6 h-6 md:w-8 md:h-8 text-orange-500 shrink-0" />
                <h2 className="text-lg md:text-2xl font-bold text-valley-brown uppercase leading-tight font-pixel">4. Unacceptable Behavior</h2>
              </div>
              <p className="text-valley-brown/90 leading-relaxed text-sm md:text-base lg:text-lg mb-3 md:mb-4 font-medium">
                The following behaviors are not acceptable at any time during the hackathon:
              </p>
              <ul className="space-y-2 md:space-y-3 text-valley-brown/90 list-disc list-outside ml-5 text-sm md:text-base lg:text-lg marker:text-orange-500">
                 <li>Harassment, intimidation, or discrimination of any kind</li>
                 <li>Offensive or derogatory comments related to gender, gender identity, sexual orientation, race, ethnicity, nationality, religion, disability, age, or appearance</li>
                 <li>Sexual harassment or unwelcome sexual attention</li>
                 <li>Threats, stalking, bullying, or deliberate intimidation</li>
                 <li>Disruptive behavior that interferes with others’ ability to participate</li>
                 <li>Cheating, plagiarism, or misrepresenting work as your own</li>
                 <li>Sabotaging other teams, projects, or event infrastructure</li>
                 <li>Theft, vandalism, or misuse of venue property</li>
                 <li>Being intoxicated or under the influence in a way that disrupts the event or others</li>
              </ul>
            </section>

            {/* 5. Project Integrity & Fair Play */}
            <section className="relative z-10">
              <div className="flex items-center gap-3 mb-3 md:mb-4">
                <Shield className="w-6 h-6 md:w-8 md:h-8 text-valley-gold shrink-0" />
                <h2 className="text-lg md:text-2xl font-bold text-valley-brown uppercase leading-tight font-pixel">5. Project Integrity & Fair Play</h2>
              </div>
              <p className="text-valley-brown/90 leading-relaxed text-sm md:text-base lg:text-lg mb-2">
                To ensure a fair and meaningful experience:
              </p>
              <ul className="space-y-2 md:space-y-3 text-valley-brown/90 list-disc list-outside ml-5 text-sm md:text-base lg:text-lg marker:text-valley-gold">
                <li>Projects should align with the hackathon’s gaming-focused theme</li>
                <li>Teams must follow all competition rules and submission requirements</li>
                <li>Any use of pre-existing code, assets, or frameworks must be disclosed if required by event rules</li>
                <li>Judges’ decisions are final</li>
              </ul>
              <p className="text-valley-brown/90 leading-relaxed text-sm md:text-base lg:text-lg mt-3 font-bold text-red-500/80">
                Violations may result in disqualification.
              </p>
            </section>

            {/* 6. Reporting Issues */}
            <section className="relative z-10 bg-valley-brown/5 p-4 md:p-6 rounded-lg border border-valley-brown/20">
              <div className="flex items-center gap-3 mb-3 md:mb-4">
                <MessageSquare className="w-6 h-6 md:w-8 md:h-8 text-blue-500 shrink-0" />
                <h2 className="text-lg md:text-2xl font-bold text-valley-brown uppercase leading-tight font-pixel">6. Reporting Issues</h2>
              </div>
              <p className="text-valley-brown/90 leading-relaxed text-sm md:text-base lg:text-lg mb-4">
                If you experience or witness behavior that violates this Code of Conduct, please report it as soon as possible.
                You may report concerns by:
              </p>
              <div className="flex flex-col gap-3 text-sm md:text-base lg:text-lg font-bold text-valley-brown break-words ml-2 md:ml-4">
                <div className="flex items-center gap-3 p-2 bg-white/50 rounded-md border border-valley-brown/10 hover:bg-white transition-colors">
                  <span className="w-2 h-2 rounded-full bg-valley-brown shrink-0"></span>
                  <span>Speaking directly with any organizer in person</span>
                </div>
                <div className="flex items-center gap-3 p-2 bg-white/50 rounded-md border border-valley-brown/10 hover:bg-white transition-colors group">
                   <span className="w-2 h-2 rounded-full bg-valley-brown shrink-0 group-hover:bg-valley-gold transition-colors"></span>
                   <a href={`mailto:${siteConfig.links.email}`} className="group-hover:text-valley-gold transition-colors underline break-all">
                    Email: {siteConfig.links.email}
                  </a>
                </div>
                <div className="flex items-center gap-3 p-2 bg-white/50 rounded-md border border-valley-brown/10 hover:bg-white transition-colors">
                   <span className="w-2 h-2 rounded-full bg-valley-brown shrink-0"></span>
                   <span>Directly contacting an organizer or admin on Discord</span>
                </div>
              </div>
              <p className="text-valley-brown/80 text-xs md:text-sm mt-4 italic">
                All reports will be taken seriously and handled confidentially to the extent possible.
              </p>
            </section>

            {/* 7. Enforcement */}
            <section className="relative z-10">
              <div className="flex items-center gap-3 mb-3 md:mb-4">
                <Gavel className="w-6 h-6 md:w-8 md:h-8 text-purple-600 shrink-0" />
                <h2 className="text-lg md:text-2xl font-bold text-valley-brown uppercase leading-tight font-pixel">7. Enforcement</h2>
              </div>
              <p className="text-valley-brown/90 leading-relaxed text-sm md:text-base lg:text-lg mb-2">
                Organizers reserve the right to take any action they deem appropriate, including:
              </p>
              <ul className="space-y-2 md:space-y-3 text-valley-brown/90 list-disc list-outside ml-5 text-sm md:text-base lg:text-lg marker:text-purple-600">
                <li>Issuing a warning</li>
                <li>Requiring behavior to stop or change</li>
                <li>Disqualifying a team or individual</li>
                <li>Removing someone from the event without refund or prizes</li>
                <li>Banning individuals from future events</li>
              </ul>
              <p className="text-valley-brown/90 leading-relaxed text-sm md:text-base lg:text-lg mt-3 font-bold text-red-500/80">
                Failure to comply with this Code of Conduct may result in immediate removal from the hackathon.
              </p>
            </section>

            {/* 8. Scope */}
            <section className="relative z-10">
              <div className="flex items-center gap-3 mb-3 md:mb-4">
                <MapPin className="w-6 h-6 md:w-8 md:h-8 text-green-600 shrink-0" />
                <h2 className="text-lg md:text-2xl font-bold text-valley-brown uppercase leading-tight font-pixel">8. Scope</h2>
              </div>
              <p className="text-valley-brown/90 leading-relaxed text-sm md:text-base lg:text-lg mb-2">
                This Code of Conduct applies to:
              </p>
              <ul className="space-y-2 md:space-y-3 text-valley-brown/90 list-disc list-outside ml-5 text-sm md:text-base lg:text-lg marker:text-green-600">
                <li>All physical event venues</li>
                <li>All event-related activities and spaces</li>
                <li>All official communication channels associated with the hackathon</li>
              </ul>
            </section>

            {/* 9. Acknowledgment */}
            <section className="relative z-10 border-t-2 border-valley-brown/20 pt-6">
              <div className="flex items-center gap-3 mb-3 md:mb-4">
                <CheckCircle className="w-6 h-6 md:w-8 md:h-8 text-valley-gold shrink-0" />
                <h2 className="text-lg md:text-2xl font-bold text-valley-brown uppercase leading-tight font-pixel">9. Acknowledgment</h2>
              </div>
              <p className="text-valley-brown/90 leading-relaxed text-sm md:text-base lg:text-lg md:font-medium">
                By registering for or participating in this hackathon, you agree to comply with this Code of Conduct and accept the decisions of the organizing team.
              </p>
            </section>

          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
