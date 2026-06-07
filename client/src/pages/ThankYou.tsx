import { Link } from "wouter";
import { CheckCircle, Phone, ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ThankYou() {
  return (
    <div className="min-h-screen bg-[#0f172a] text-white flex flex-col">
      <Navbar />

      <main className="flex-1 flex items-center justify-center px-4 py-20">
        <div className="max-w-2xl w-full text-center">

          {/* Success Icon */}
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 rounded-full bg-orange-500/10 border-2 border-orange-500 flex items-center justify-center">
              <CheckCircle className="w-10 h-10 text-orange-500" />
            </div>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl font-extrabold uppercase tracking-tight mb-4">
            Thank You!
          </h1>
          <p className="text-xl text-slate-300 mb-2">
            Your quote request has been received.
          </p>
          <p className="text-slate-400 mb-10 max-w-lg mx-auto">
            We'll review your request and get back to you within a few hours — usually much sooner. If you need an immediate response, give us a call directly.
          </p>

          {/* What Happens Next */}
          <div className="bg-slate-800/60 border border-slate-700 rounded-2xl p-6 mb-8 text-left">
            <h2 className="text-lg font-bold uppercase tracking-wide text-orange-400 mb-4">What Happens Next</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-full bg-orange-500 text-white text-sm font-bold flex items-center justify-center flex-shrink-0 mt-0.5">1</div>
                <div>
                  <p className="font-semibold text-white">We review your request</p>
                  <p className="text-slate-400 text-sm">Our team looks over your property details and service request.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-full bg-orange-500 text-white text-sm font-bold flex items-center justify-center flex-shrink-0 mt-0.5">2</div>
                <div>
                  <p className="font-semibold text-white">We contact you with a quote</p>
                  <p className="text-slate-400 text-sm">You'll hear from us by phone or email with a free, no-obligation quote.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-full bg-orange-500 text-white text-sm font-bold flex items-center justify-center flex-shrink-0 mt-0.5">3</div>
                <div>
                  <p className="font-semibold text-white">We schedule your service</p>
                  <p className="text-slate-400 text-sm">Same-week appointments available. We come to you — no hassle.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Call CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <a href="tel:+19412292355">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white font-bold uppercase tracking-wide w-full sm:w-auto">
                <Phone className="w-4 h-4 mr-2" />
                Call (941) 229-2355
              </Button>
            </a>
            <Link href="/">
              <Button size="lg" variant="outline" className="border-slate-600 text-white hover:bg-slate-800 font-bold uppercase tracking-wide w-full sm:w-auto bg-transparent">
                Back to Home
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>

          {/* Stars */}
          <div className="flex items-center justify-center gap-1 text-orange-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-orange-400" />
            ))}
            <span className="ml-2 text-slate-300 text-sm">5.0 Stars · 48 Google Reviews</span>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
