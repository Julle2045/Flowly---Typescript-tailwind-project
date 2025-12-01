import React from "react";

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 py-12">
            <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-10">

           {/* Brand */}
        <div>
          <h3 className="text-xl font-bold text-white mb-3">Flowly</h3>
          <p className="text-sm text-gray-400">
            Productivity software for freelancers.  
            Stay organized. Get more done.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="font-semibold text-white mb-3">Company</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white transition">About</a></li>
            <li><a href="#" className="hover:text-white transition">Pricing</a></li>
            <li><a href="#" className="hover:text-white transition">Blog</a></li>
            <li><a href="#" className="hover:text-white transition">Careers</a></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="font-semibold text-white mb-3">Support</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white transition">Help Center</a></li>
            <li><a href="#" className="hover:text-white transition">Contact</a></li>
            <li><a href="#" className="hover:text-white transition">Status</a></li>
            <li><a href="#" className="hover:text-white transition">FAQ</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold text-white mb-3">Get in touch</h4>
          <p className="text-sm text-gray-400">hello@flowly.com</p>
          <p className="text-sm mt-2 text-gray-400">© {new Date().getFullYear()} Flowly.  
            All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;