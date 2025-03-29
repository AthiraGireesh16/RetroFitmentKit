import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start px-6">
      {/* Company Info */}
      <div className="w-full md:w-1/2 flex flex-col space-y-4">
        <p className="flex items-center gap-2">
          <div className="w-5 h-5" />
          <strong>Company:</strong> Retrofitment Kit
        </p>
        <p className="flex items-center gap-2">
          <div className="w-5 h-5" />
          <strong>Founder:</strong> Mr. Biju Varghese
        </p>
        <p className="flex items-center gap-2">
          <div className="w-5 h-5" />
          <strong>Address:</strong> Venkurinji, Kerala
        </p>
        <p className="flex items-center gap-2">
          <div className="w-5 h-5" />
          <strong>Phone:</strong> +91 94473559094
        </p>
        <p className="flex items-center gap-2">
          <div className="w-5 h-5" />
          <strong>Email:</strong> info@retrofitmentkit.com
        </p>
      </div>

      {/* Privacy & Terms */}
      <div className="w-full md:w-1/2 text-right mt-4 md:mt-0">
        <p><a href="/privacy" className="hover:underline">Privacy Policy</a></p>
        <p><a href="/terms" className="hover:underline">Terms of Use</a></p>
      </div>
    </div>
  </footer>
  );
};

export default Footer;
