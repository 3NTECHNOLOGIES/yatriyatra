import React from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const faqData = [
  {
    question: "How can I book tickets on Yatri Yatra?",
    answer:
      "Booking tickets is simple! Visit our website, and fill out the contact form. Our team will get in touch with you.",
  },
  {
    question: "Can I customize my holiday package?",
    answer:
      "Yes! We specialize in creating personalized holiday packages tailored to your preferences. Share your requirements with us, and we’ll design the perfect trip for you.",
  },
  {
    question: "What payment methods are accepted?",
    answer:
      "We accept all major payment methods, including credit cards, debit cards, net banking, UPI, and popular digital wallets.",
  },
  {
    question: "What is the cancellation and refund policy?",
    answer: (
      <ul className="list-disc pl-6 space-y-2">
        <li>30 Days Before Trip: 70% refund after 30% cancellation charges.</li>
        <li>15 Days Before Trip: 50% refund after 50% cancellation charges.</li>
        <li>Less Than 15 Days: No refund.</li>
      </ul>
    ),
  },
  {
    question: "Are there any hidden charges on bookings?",
    answer:
      "No, all charges are transparently displayed during the booking process.",
  },
  {
    question: "Is my payment information secure?",
    answer:
      "Absolutely! We use industry-standard encryption to ensure the safety and confidentiality of your payment information.",
  },
  {
    question: "How can I contact customer support?",
    answer: (
      <ul className="list-disc pl-6 space-y-2">
        <li>
          Email:{" "}
          <a
            href="mailto:contact@yatriyatra.com"
            className="text-[#ff0033] hover:text-[#ff3366]"
          >
            contact@yatriyatra.com
          </a>
        </li>
        <li>
          Phone/WhatsApp:{" "}
          <a
            href="tel:+918191068288"
            className="text-[#ff0033] hover:text-[#ff3366]"
          >
            +91-8191068288
          </a>
        </li>
      </ul>
    ),
  },
  {
    question: "Are there discounts for group bookings?",
    answer:
      "Yes, we offer special discounts on group bookings. Contact us for customized packages and rates.",
  },
  {
    question:
      "What happens if my trip is canceled due to unforeseen circumstances?",
    answer:
      "In case of cancellations caused by events like natural disasters, refunds will depend on the policies of the service providers.",
  },
];

function FAQPage() {
  return (
    <section className="bg-[#003580] py-16 px-6">
      <div className="container mx-auto text-left space-y-10">
        {/* Title */}
        <h2 className="text-4xl font-bold text-white leading-tight text-center sm:text-5xl">
          Frequently Asked Questions (FAQs)
        </h2>
        <p className="text-lg text-white opacity-80 text-center sm:text-xl">
          Have questions? We’ve got answers. Check out the most common inquiries
          our customers have.
        </p>

        {/* FAQ Accordion Section */}
        <div className="max-w-3xl mx-auto space-y-6 sm:space-y-8">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="faq-item bg-white rounded-lg shadow-lg p-6"
            >
              <details className="faq-toggle group border-b border-gray-300">
                <summary className="text-xl font-semibold text-[#003580] cursor-pointer flex items-center justify-between transition-all duration-300 ease-in-out group-open:text-[#ff0033] group-open:scale-105 hover:scale-105">
                  <span>
                    {index + 1}. {faq.question}
                  </span>
                  <span className="text-lg">
                    <FaPlus className="group-open:hidden" />
                    <FaMinus className="group-open:block hidden" />
                  </span>
                </summary>
                <div className="faq-answer mt-4 text-gray-700 opacity-80 transition-opacity duration-300 ease-in-out group-open:opacity-100 group-open:translate-x-0 group-closed:opacity-0 group-closed:translate-x-10">
                  {faq.answer}
                </div>
              </details>
            </div>
          ))}
        </div>

        {/* Additional Contact Section */}
        <p className="text-xl text-white mt-10 opacity-90 text-center sm:text-2xl">
          If you have further questions, feel free to{" "}
          <span className="text-[#ff0033]">contact us</span>. At Yatri Yatra,
          your satisfaction is our priority!
        </p>
      </div>
    </section>
  );
}

export default FAQPage;
