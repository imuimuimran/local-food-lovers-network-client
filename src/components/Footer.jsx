import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaYoutube, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="bg-neutral-100 border-t mt-12">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold">FL</div>
            <div>
              <h3 className="text-lg font-semibold">Local Food Lovers Network</h3>
              <p className="text-sm text-neutral-500">Celebrating Dhaka's local flavors</p>
            </div>
          </div>

          <div className="flex gap-6">
            <div>
              <h4 className="font-semibold mb-2">Navigation</h4>
              <ul className="space-y-1 text-sm">
                <li><Link to="/" className="hover:text-primary">Home</Link></li>
                <li><Link to="/add-review" className="hover:text-primary">Add Review</Link></li>
                <li><Link to="/all-reviews" className="hover:text-primary">All Reviews</Link></li>
                <li><Link to="/my-reviews" className="hover:text-primary">My Reviews</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Follow</h4>
              <div className="flex gap-3">
                <a href="https://www.facebook.com/" target="_blank" aria-label="Facebook" className="p-2 rounded-full hover:bg-neutral-200"><FaFacebookF /></a>

                <a href="https://x.com/" target="_blank" aria-label="X" className="p-2 rounded-full hover:bg-neutral-200"><FaXTwitter /></a>

                <a href="https://www.youtube.com/" target="_blank" aria-label="YouTube" className="p-2 rounded-full hover:bg-neutral-200"><FaYoutube /></a>

                <a href="https://www.instagram.com/" target="_blank" aria-label="Instagram" className="p-2 rounded-full hover:bg-neutral-200"><FaInstagram /></a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t pt-4 text-sm text-neutral-500 flex flex-col md:flex-row items-center justify-between">
          <p>© {new Date().getFullYear()} Local Food Lovers Network. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Built for Dhaka foodies • <span className="italic">Share honestly, eat happily.</span></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
