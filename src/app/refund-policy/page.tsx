"use client";
import React from "react";

export default function RefundPolicy() {
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
            Refund Policy
          </h1>
          <p className="text-lg text-gray-700 mb-8 text-center">
            At Yatri Yatra, we understand that plans can change. Our refund
            policy is designed to be clear and customer-friendly while adhering
            to the terms set by our service providers.
          </p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-secondary mb-4">
                1. Refund and Cancellation Policy
              </h2>
              <p className="text-lg text-gray-700">
                Cancellations are processed based on the timing of your request.
                Refunds, where applicable, will be issued after deducting
                cancellation charges. Please review the terms below:
              </p>
              <ul className="text-lg text-gray-700 list-disc pl-6">
                <li>
                  <strong>Cancellations Made 30 Days Before the Trip:</strong>{" "}
                  30% cancellation charges will apply. 70% of the total booking
                  amount will be refunded.
                </li>
                <li>
                  <strong>Cancellations Made 15 Days Before the Trip:</strong>{" "}
                  50% cancellation charges will apply. 50% of the total booking
                  amount will be refunded.
                </li>
                <li>
                  <strong>
                    Cancellations Made Less Than 15 Days Before the Trip:
                  </strong>{" "}
                  No refunds will be issued.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-secondary mb-4">
                2. How to Cancel a Booking
              </h2>
              <p className="text-lg text-gray-700">
                To cancel your booking, please:
              </p>
              <ul className="text-lg text-gray-700 list-disc pl-6">
                <li>
                  Write us an email at{" "}
                  <span className="font-semibold">contact@yatriyatra.com</span>{" "}
                  along with the reason for cancellation.
                </li>
                <li>
                  Alternatively, you can call us at{" "}
                  <span className="font-semibold">+91-8191068288</span>.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-secondary mb-4">
                3. Processing Time
              </h2>
              <p className="text-lg text-gray-700">
                Refunds are processed within 7-10 working days after
                confirmation of cancellation. The refund will be credited back
                to the original mode of payment.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-secondary mb-4">
                4. Special Conditions
              </h2>
              <p className="text-lg text-gray-700">
                Certain bookings, including promotional or discounted packages,
                may have different cancellation terms. Always check the terms at
                the time of booking.
              </p>
              <p className="text-lg text-gray-700">
                In case of force majeure events (natural disasters, pandemics,
                etc.), refunds will be governed by the policies of the
                respective service providers.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-secondary mb-4">
                5. Non-Refundable Bookings
              </h2>
              <p className="text-lg text-gray-700">
                Some services, such as last-minute deals or non-refundable
                tickets, may not be eligible for refunds. These will be clearly
                marked at the time of booking.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-secondary mb-4">
                6. Contact for Queries
              </h2>
              <p className="text-lg text-gray-700">
                For any questions regarding cancellations or refunds, please
                reach out to us:
              </p>
              <p className="text-lg text-gray-700">
                Email:{" "}
                <span className="font-semibold">contact@yatriyatra.com</span>
              </p>
              <p className="text-lg text-gray-700">
                Phone: <span className="font-semibold">+91-8191068288</span>
              </p>
            </section>
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg text-gray-700">
              At Yatri Yatra, we strive to make every journey smooth, even when
              plans change. Thank you for choosing us as your travel partner!
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
