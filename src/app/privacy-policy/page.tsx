"use client";
import React from "react";

export default function PrivacyPolicy() {
  return (
    <div className="bg-gray-100 min-h-screen text-gray-800">
      {/* Header */}
      <div className="bg-white shadow-lg w-full py-6">
        <div className="flex justify-center items-center px-8">
          <div className="text-primary text-4xl font-extrabold tracking-wide flex flex-row">
            Yatri
            <span className="text-secondary">Yatra</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <h1 className="text-4xl font-bold text-primary mb-6 text-center">
            Privacy Policy
          </h1>
          <p className="text-lg text-gray-700 mb-8 text-center">
            At Yatri Yatra, we are committed to safeguarding your privacy and
            ensuring the security of your personal information. This Privacy
            Policy outlines how we collect, use, and protect your data when you
            use our website and services. By using our platform, you agree to
            the practices described herein.
          </p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-secondary mb-4">
                1. Information We Collect
              </h2>
              <ul className="text-lg text-gray-700 list-disc pl-6">
                <li>
                  Personal Information: Name, contact number, email address, and
                  payment details for bookings and transactions.
                </li>
                <li>
                  Travel Details: Preferences, destinations, and booking
                  history.
                </li>
                <li>
                  Technical Information: IP address, browser type, and usage
                  data to improve our website’s functionality.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-secondary mb-4">
                2. How We Use Your Information
              </h2>
              <ul className="text-lg text-gray-700 list-disc pl-6">
                <li>
                  Processing and managing your bookings for tickets, hotels, or
                  holiday packages.
                </li>
                <li>
                  Communicating updates, confirmations, and customer support
                  services.
                </li>
                <li>
                  Improving our website, tailoring user experiences, and sending
                  promotional offers.
                </li>
                <li>
                  Ensuring compliance with legal or regulatory requirements.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-secondary mb-4">
                3. Data Sharing and Security
              </h2>
              <p className="text-lg text-gray-700">
                We value your trust and never sell or misuse your data. Your
                information is shared only with trusted service providers (e.g.,
                airlines, hotels, or bus/train operators) to fulfill your
                bookings. Our systems are protected with advanced security
                protocols to prevent unauthorized access or breaches.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-secondary mb-4">
                4. Your Rights
              </h2>
              <ul className="text-lg text-gray-700 list-disc pl-6">
                <li>Access your data and request corrections if necessary.</li>
                <li>
                  Opt-out of marketing emails or promotional communications.
                </li>
                <li>
                  Request deletion of your account and personal details at any
                  time.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-secondary mb-4">
                5. Cookies Policy
              </h2>
              <p className="text-lg text-gray-700">
                Our website uses cookies to enhance user experience and track
                preferences. You can manage cookie settings through your browser
                at any time.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-secondary mb-4">
                6. Third-Party Links
              </h2>
              <p className="text-lg text-gray-700">
                Our website may contain links to third-party sites. Please note
                that we are not responsible for their privacy practices, and we
                recommend reviewing their policies before sharing your data.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-secondary mb-4">
                7. Policy Updates
              </h2>
              <p className="text-lg text-gray-700">
                We may update this Privacy Policy periodically to reflect
                changes in our services or legal requirements. Updates will be
                communicated via our website, and continued use of our services
                implies acceptance of these changes.
              </p>
            </section>
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg text-gray-700">
              If you have any questions or concerns about this policy, feel free
              to contact us at:
            </p>
            <p className="text-lg text-gray-700">
              Email:{" "}
              <span className="font-semibold">contact@yatriyatra.com</span>
            </p>
            <p className="text-lg text-gray-700">
              Phone: <span className="font-semibold">+91-8191068288</span>
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gray-200 py-4 mt-12">
        <div className="text-center text-gray-700">
          <p>&copy; 2024 Yatri Yatra. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}
