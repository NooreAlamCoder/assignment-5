import logo from "../assets/logo-text.png";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-slate-100 pt-12 md:pt-16 pb-8 text-slate-500 text-sm container mx-auto">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Top Section */}
        <div className="flex flex-col md:grid md:grid-cols-5 gap-8 lg:gap-12 mb-10 md:mb-14">
          
          <div className="w-full md:col-span-2 flex flex-col items-center md:items-start text-center md:text-left space-y-4">
            <a href="#" className="inline-block">
              <img src={logo} alt="DevStack Logo" className="h-7 w-auto object-contain" />
            </a>
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed max-w-sm">
              Curated tools, technologies, and resources for developers building modern software.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center justify-center md:justify-start gap-3 pt-2 font-medium text-slate-600 text-xs sm:text-sm">
              <a href="#" className="hover:text-pink-600 transition-colors">GitHub</a>
              <span className="text-slate-400">•</span>
              <a href="#" className="hover:text-pink-600 transition-colors">Twitter</a>
              <span className="text-slate-400">•</span>
              <a href="#" className="hover:text-pink-600 transition-colors">LinkedIn</a>
            </div>
          </div>

          {/* Product Links Mobile a hide kora holo */}
          <div className="hidden md:block space-y-3">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Product</h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li><a href="#" className="hover:text-slate-900 transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-slate-900 transition-colors">Technologies</a></li>
              <li><a href="#" className="hover:text-slate-900 transition-colors">Projects</a></li>
            </ul>
          </div>

          {/* Company Links Mobile a Hide kora holo */}
          <div className="hidden md:block space-y-3">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Company</h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li><a href="#" className="hover:text-slate-900 transition-colors">About</a></li>
              <li><a href="#" className="hover:text-slate-900 transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-slate-900 transition-colors">Careers</a></li>
            </ul>
          </div>

          {/* Hidden Kora Mobile Device a*/}
          <div className="hidden md:block space-y-3">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Legal</h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li><a href="#" className="hover:text-slate-900 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-slate-900 transition-colors">Terms of Service</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Section Divider & Copyright */}
        <div className="pt-2 border-t border-slate-100 flex sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-600 transition-colors">Privacy</a>
            <a href="#" className="hover:text-slate-600 transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;