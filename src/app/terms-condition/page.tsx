"use client";
import React from "react";

export default function TermsAndConditions() {
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
            Terms & Conditions
          </h1>
          <p className="text-lg text-gray-700 mb-8 text-center">
            Welcome to Yatri Yatra! By using our website or services, you agree
            to comply with the following terms and conditions. Please read them
            carefully before proceeding.
          </p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-secondary mb-4">
                1. Service Use
              </h2>
              <p className="text-lg text-gray-700">
                Our platform facilitates booking of bus, train, and flight
                tickets, hotel accommodations, and holiday packages. All
                bookings are subject to availability and confirmation by the
                respective service providers.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-secondary mb-4">
                2. User Responsibilities
              </h2>
              <p className="text-lg text-gray-700">
                Users must provide accurate personal details for bookings. Users
                agree not to misuse the website for fraudulent activities.
                Minors must use the platform under the supervision of a parent
                or guardian.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-secondary mb-4">
                3. Pricing and Payment
              </h2>
              <p className="text-lg text-gray-700">
                Prices displayed are subject to change based on availability,
                currency fluctuations, and partner policies. Payments must be
                made via our secure platform using accepted methods (credit
                card, debit card, etc.).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-secondary mb-4">
                4. Cancellations and Refunds
              </h2>
              <p className="text-lg text-gray-700">
                Cancellation requests must be submitted through the platform and
                are subject to the policies of individual service providers.
                Refunds, if applicable, will be processed within 7-10 working
                days.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-secondary mb-4">
                5. Limitation of Liability
              </h2>
              <p className="text-lg text-gray-700">
                While we strive to ensure accurate bookings, Yatri Yatra is not
                liable for any delays, cancellations, or losses caused by
                third-party service providers. Travelers are advised to review
                the terms of airlines, hotels, and operators for additional
                conditions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-secondary mb-4">
                6. Intellectual Property
              </h2>
              <p className="text-lg text-gray-700">
                All content on the website, including logos, text, images, and
                software, is the property of Yatri Yatra. Unauthorized use is
                prohibited.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-secondary mb-4">
                7. Dispute Resolution
              </h2>
              <p className="text-lg text-gray-700">
                In case of disputes, efforts will be made to resolve them
                amicably. Legal proceedings, if required, will be subject to the
                jurisdiction of Gurugram, Haryana.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-secondary mb-4">
                8. Policy Updates
              </h2>
              <p className="text-lg text-gray-700">
                We reserve the right to modify these terms without prior notice.
                Continued use of the platform indicates your acceptance of these
                changes.
              </p>
            </section>
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg text-gray-700">
              For any clarifications, reach us at:
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
