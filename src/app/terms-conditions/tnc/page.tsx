import React from "react";

import Footer from "@/components/Footer";

const tnc: React.FC = () => {
  return (
    <>
      <div className="flex flex-col items-start py-4 sm:py-6 md:py-8 px-4 sm:px-8 md:px-14 max-w-[100vw] overflow-x-hidden">
        <div className="flex flex-col items-start gap-6 sm:gap-8 md:gap-10 p-4 sm:p-6 md:p-8">
          <h1 className="text-gray-600 font-bold text-2xl sm:text-3xl md:text-4xl">
            ZENSTREET SERVICE AGREEMENT
          </h1>
          <h2 className="text-gray-600 font-bold text-base sm:text-lg">
            Last Updated: March 2025
          </h2>
          <p className="tracking-wider sm:tracking-widest text-gray-600 text-base sm:text-lg ml-4 sm:ml-8">
            <li>
              This Agreement (the "Agreement") is entered into by and between
              ISAZEN TECHNOLOGIES PRIVATE LIMITED, operating under the brand
              name "Zenstreet" (the "Company"), and the licensed therapist
              ("User") who registers on the Zenstreet platform. This Agreement
              sets forth the complete terms and conditions governing the User's
              access to and use of the Platform, including but not limited to
              clinic management, booking facilitation, payment processing, and
              related support services (collectively, the "Services"). The
              Parties agree that their success is intertwined and that this
              Agreement reflects their shared objectives for transparency,
              performance, and growth.
            </li>
          </p>
        </div>
        <div className="flex flex-col items-start gap-4 sm:gap-5 px-4 sm:px-6 md:px-8 py-3 sm:py-4">
          <h5 className="text-base sm:text-lg text-gray-700 tracking-wider sm:tracking-widest">
            1. Recitals and Scope of Agreement
          </h5>
          <p className="tracking-wider sm:tracking-widest text-gray-600 text-base sm:text-lg">
            Purpose and Scope:
          </p>
          <ul className="list-disc flex flex-col gap-3 sm:gap-4 px-4 sm:px-6 md:px-8 ml-3 sm:ml-5">
            <li className="tracking-wider sm:tracking-widest text-gray-600 text-sm sm:text-base md:text-md">
              This Agreement governs all aspects of the User's engagement with
              the Zenstreet Platform. It covers the registration process,
              profile creation, the establishment of session pricing, payment
              processing (including bank account details and payouts), and the
              use of all associated tools such as video calling, note taking,
              and patient tracking. By using the Platform, the User agrees to
              utilize the Services as described herein and in accordance with
              the guidelines set by Zenstreet.
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-start gap-4 sm:gap-5 px-4 sm:px-6 md:px-8 py-3 sm:py-4">
          <h5 className="text-base sm:text-lg text-gray-700 tracking-wider sm:tracking-widest">
            Shared Interests:
          </h5>

          <ul className="list-disc flex flex-col gap-3 sm:gap-4 px-4 sm:px-6 md:px-8 ml-3 sm:ml-5">
            <li className="tracking-wider sm:tracking-widest text-gray-600 text-sm sm:text-base md:text-md">
              Zenstreet is dedicated to delivering a cost-effective,
              transparent, and performance-driven model where the success of the
              User's practice directly impacts the success of Zenstreet. This
              Agreement reflects the mutually beneficial relationship intended
              by both Parties.
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-start gap-4 sm:gap-5 px-4 sm:px-6 md:px-8 py-3 sm:py-4">
          <h5 className="text-base sm:text-lg text-gray-700 tracking-wider sm:tracking-widest">
            2. Definitions
          </h5>
          <ul className="list-disc flex flex-col gap-3 sm:gap-4 px-4 sm:px-6 md:px-8 ml-3 sm:ml-5">
            <li className="tracking-wider sm:tracking-widest text-gray-600 text-sm sm:text-base md:text-md">
              "Zenstreet": The digital service and platform provided by ISAZEN
              TECHNOLOGIES PRIVATE LIMITED.
            </li>
            <li className="tracking-wider sm:tracking-widest text-gray-600 text-sm sm:text-base md:text-md">
              "User": A licensed therapist who registers on and uses the
              Platform.
            </li>
            <li className="tracking-wider sm:tracking-widest text-gray-600 text-sm sm:text-base md:text-md">
              "Services": All functionalities provided by Zenstreet, including
              scheduling, invoicing, note taking, video calling, patient
              tracking, and payment facilitation.
            </li>
            <li className="tracking-wider sm:tracking-widest text-gray-600 text-sm sm:text-base md:text-md">
              "Platform": The website, mobile application, and related services
              provided by Zenstreet.
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-start gap-4 sm:gap-5 px-4 sm:px-6 md:px-8 py-3 sm:py-4">
          <h5 className="text-base sm:text-lg text-gray-700 tracking-wider sm:tracking-widest">
            3. Eligibility
          </h5>
          <p className="tracking-wider sm:tracking-widest text-gray-600 text-base sm:text-lg">
            The Platform is intended solely for licensed therapists operating
            within India. By using the Platform, the User confirms that they
            have the legal capacity to enter into this Agreement and are in
            compliance with all applicable laws and regulations.
          </p>
        </div>
        <div className="flex flex-col items-start gap-4 sm:gap-5 px-4 sm:px-6 md:px-8 py-3 sm:py-4">
          <h5 className="text-base sm:text-lg text-gray-700 tracking-wider sm:tracking-widest">
            4. Account Registration, Profile Creation, and Bank Details
          </h5>
          <p className="tracking-wider sm:tracking-widest text-gray-600 text-base sm:text-lg">
            Registration and Profile Setup:
          </p>
          <ul className="list-disc flex flex-col gap-3 sm:gap-4 px-4 sm:px-6 md:px-8 ml-3 sm:ml-5">
            <li className="tracking-wider sm:tracking-widest text-gray-600 text-sm sm:text-base md:text-md">
              The User must provide accurate and complete personal,
              professional, and practice-related information during
              registration, including the pricing of their sessions.
            </li>
            <li className="tracking-wider sm:tracking-widest text-gray-600 text-sm sm:text-base md:text-md">
              Based on the provided information, Zenstreet will create a
              professional profile for the User on the Platform.
            </li>
            <li className="tracking-wider sm:tracking-widest text-gray-600 text-sm sm:text-base md:text-md">
              The User is responsible for ensuring that all information,
              including session pricing, remains accurate and up-to-date.
            </li>
          </ul>
          <p className="tracking-wider sm:tracking-widest text-gray-600 text-base sm:text-lg">
            Bank Account Details:
          </p>
          <ul className="list-disc flex flex-col gap-3 sm:gap-4 px-4 sm:px-6 md:px-8 ml-3 sm:ml-5">
            <li className="tracking-wider sm:tracking-widest text-gray-600 text-sm sm:text-base md:text-md">
              The User is required to provide valid bank account details during
              the registration process.
            </li>
            <li className="tracking-wider sm:tracking-widest text-gray-600 text-sm sm:text-base md:text-md">
              These details will be used for all payouts following the
              processing of bookings and deduction of applicable fees.
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-start gap-4 sm:gap-5 px-4 sm:px-6 md:px-8 py-3 sm:py-4">
          <h5 className="text-base sm:text-lg text-gray-700 tracking-wider sm:tracking-widest">
            5. License & Permitted Use
          </h5>
          <p className="tracking-wider sm:tracking-widest text-gray-600 text-base sm:text-lg">
            Zenstreet grants the User a limited, non-exclusive, and
            non-transferable license to use the Platform solely for managing
            their therapy practice and delivering services to clients. The User
            agrees not to:
          </p>
          <ul className="list-disc flex flex-col gap-3 sm:gap-4 px-4 sm:px-6 md:px-8 ml-3 sm:ml-5">
            <li className="tracking-wider sm:tracking-widest text-gray-600 text-sm sm:text-base md:text-md">
              Violate any applicable laws or regulations.
            </li>
            <li className="tracking-wider sm:tracking-widest text-gray-600 text-sm sm:text-base md:text-md">
              Interfere with or disrupt the functionality or security of the
              Platform.
            </li>
            <li className="tracking-wider sm:tracking-widest text-gray-600 text-sm sm:text-base md:text-md">
              Access the Platform through any unauthorized means.
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-start gap-4 sm:gap-5 px-4 sm:px-6 md:px-8 py-3 sm:py-4">
          <h5 className="text-base sm:text-lg text-gray-700 tracking-wider sm:tracking-widest">
            6. Booking, Session Pricing, and Service Delivery
          </h5>
          <ul className="list-disc flex flex-col gap-3 sm:gap-4 px-4 sm:px-6 md:px-8 ml-3 sm:ml-5">
            <li className="tracking-wider sm:tracking-widest text-gray-600 text-sm sm:text-base md:text-md">
              Session Pricing: The User sets and is responsible for the pricing
              of the therapy sessions they offer.
            </li>
            <li className="tracking-wider sm:tracking-widest text-gray-600 text-sm sm:text-base md:text-md">
              Booking Process and Service Delivery: Clients book sessions via
              the Zenstreet Platform. Upon booking, Zenstreet facilitates the
              appointment and provides the User with a suite of tools—such as
              video calling, note taking, and patient tracking—to effectively
              manage the session.
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-start gap-4 sm:gap-5 px-4 sm:px-6 md:px-8 py-3 sm:py-4">
          <h5 className="text-base sm:text-lg text-gray-700 tracking-wider sm:tracking-widest">
            7. Revenue Sharing, Fees, and Payouts
          </h5>
          <p className="tracking-wider sm:tracking-widest text-gray-600 text-base sm:text-lg">
            Transaction-Based Revenue Sharing:
          </p>
          <ul className="list-disc flex flex-col gap-3 sm:gap-4 px-4 sm:px-6 md:px-8 ml-3 sm:ml-5">
            <li className="tracking-wider sm:tracking-widest text-gray-600 text-sm sm:text-base md:text-md">
              For every session booked through the Platform, Zenstreet charges a
              fee of 7% of the session fee (excluding any taxes).
            </li>
            <li className="tracking-wider sm:tracking-widest text-gray-600 text-sm sm:text-base md:text-md">
              For example, if a session is priced at INR 100, Zenstreet will
              retain INR 5 (subject to any additional gateway fees), and the net
              amount will be deposited into the User's bank account.
            </li>
          </ul>
          <p className="tracking-wider sm:tracking-widest text-gray-600 text-base sm:text-lg">
            No Upfront or Subscription Fees:
          </p>
          <ul className="list-disc flex flex-col gap-3 sm:gap-4 px-4 sm:px-6 md:px-8 ml-3 sm:ml-5">
            <li className="tracking-wider sm:tracking-widest text-gray-600 text-sm sm:text-base md:text-md">
              The User is not required to pay any initial setup fees or
              recurring subscription costs
            </li>
            <li className="tracking-wider sm:tracking-widest text-gray-600 text-sm sm:text-base md:text-md">
              Charges are applied only when revenue is generated via a session
              booking.
            </li>
          </ul>
          <p className="tracking-wider sm:tracking-widest text-gray-600 text-base sm:text-lg">Payouts:</p>
          <ul className="list-disc flex flex-col gap-3 sm:gap-4 px-4 sm:px-6 md:px-8 ml-3 sm:ml-5">
            <li className="tracking-wider sm:tracking-widest text-gray-600 text-sm sm:text-base md:text-md">
              Net proceeds, after the deduction of Zenstreet's fee and any
              applicable payment gateway charges, will be transferred to the
              User's bank account on a regular payout cycle as defined by
              Zenstreet.
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-start gap-4 sm:gap-5 px-4 sm:px-6 md:px-8 py-3 sm:py-4">
          <h5 className="text-base sm:text-lg text-gray-700 tracking-wider sm:tracking-widest">
            8. Intellectual Property
          </h5>
          <ul className="list-disc flex flex-col gap-3 sm:gap-4 px-4 sm:px-6 md:px-8 ml-3 sm:ml-5">
            <li className="tracking-wider sm:tracking-widest text-gray-600 text-sm sm:text-base md:text-md">
              The User retains ownership of any content they submit; however,
              the User grants Zenstreet a non-exclusive, royalty-free license to
              use, modify, and display such content for the operation and
              promotion of the Platform.
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-start gap-4 sm:gap-5 px-4 sm:px-6 md:px-8 py-3 sm:py-4">
          <h5 className="text-base sm:text-lg text-gray-700 tracking-wider sm:tracking-widest">
            9. Indemnification
          </h5>
          <ul className="list-disc flex flex-col gap-3 sm:gap-4 px-4 sm:px-6 md:px-8 ml-3 sm:ml-5">
            <li className="tracking-wider sm:tracking-widest text-gray-600 text-sm sm:text-base md:text-md">
              The User agrees to indemnify, defend, and hold harmless Zenstreet,
              its affiliates, directors, employees, and agents from and against
              any and all claims, demands, liabilities, losses, damages, or
              expenses (including reasonable attorneys&apos; fees and costs)
              arising out of or relating to (i) the User&apos;s breach of any
              provision of this Agreement, (ii) the User&apos;s violation of any
              applicable laws or regulations, or (iii) any act or omission of
              the User in connection with the use of the Platform. This
              obligation shall survive the termination of this Agreement.
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-start gap-4 sm:gap-5 px-4 sm:px-6 md:px-8 py-3 sm:py-4">
          <h5 className="text-base sm:text-lg text-gray-700 tracking-wider sm:tracking-widest">
            10. Data Privacy
          </h5>
          <ul className="list-disc flex flex-col gap-3 sm:gap-4 px-4 sm:px-6 md:px-8 ml-3 sm:ml-5">
            <li className="tracking-wider sm:tracking-widest text-gray-600 text-sm sm:text-base md:text-md">
              The User's data will be handled in accordance with Zenstreet's
              Privacy Policy. By using the Platform, the User consents to the
              collection, use, and protection practices as detailed in the
              Privacy Policy.
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-start gap-4 sm:gap-5 px-4 sm:px-6 md:px-8 py-3 sm:py-4">
          <h5 className="text-base sm:text-lg text-gray-700 tracking-wider sm:tracking-widest">
            11. Governing Law and Jurisdiction
          </h5>
          <ul className="list-disc flex flex-col gap-3 sm:gap-4 px-4 sm:px-6 md:px-8 ml-3 sm:ml-5">
            <li className="tracking-wider sm:tracking-widest text-gray-600 text-sm sm:text-base md:text-md">
              This Agreement shall be governed by and construed in accordance
              with the laws of India. Any disputes arising from or relating to
              this Agreement shall be exclusively subject to the jurisdiction of
              the courts located in Noida, Uttar Pradesh.
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-start gap-4 sm:gap-5 px-4 sm:px-6 md:px-8 py-3 sm:py-4">
          <h5 className="text-base sm:text-lg text-gray-700 tracking-wider sm:tracking-widest">
            12. Amendments
          </h5>
          <ul className="list-disc flex flex-col gap-3 sm:gap-4 px-4 sm:px-6 md:px-8 ml-3 sm:ml-5">
            <li className="tracking-wider sm:tracking-widest text-gray-600 text-sm sm:text-base md:text-md">
              Zenstreet reserves the right to modify this Agreement at any time.
              Any changes will be effective upon posting on the Platform.
              Continued use of the Platform following such modifications
              constitutes acceptance of the updated terms.
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-start gap-4 sm:gap-5 px-4 sm:px-6 md:px-8 py-3 sm:py-4">
          <h5 className="text-base sm:text-lg text-gray-700 tracking-wider sm:tracking-widest">
            13. Disclaimers and Limitation of Liability
          </h5>
          <ul className="list-disc flex flex-col gap-3 sm:gap-4 px-4 sm:px-6 md:px-8 ml-3 sm:ml-5">
            <li className="tracking-wider sm:tracking-widest text-gray-600 text-sm sm:text-base md:text-md">
              As-Is Basis: The Platform and all Services are provided "as is"
              without any express or implied warranties.
            </li>
            <li className="tracking-wider sm:tracking-widest text-gray-600 text-sm sm:text-base md:text-md">
              Service Guarantee: While Zenstreet strives to maintain
              uninterrupted service, no guarantee is provided for error-free or
              continuous operation of the Platform.
            </li>
            <li className="tracking-wider sm:tracking-widest text-gray-600 text-sm sm:text-base md:text-md">
              Limitation of Liability: To the fullest extent permitted by law,
              Zenstreet shall not be liable for any indirect, incidental, or
              consequential damages arising out of the use of the Platform.
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-start gap-4 sm:gap-5 px-4 sm:px-6 md:px-8 py-3 sm:py-4">
          <h5 className="text-base sm:text-lg text-gray-700 tracking-wider sm:tracking-widest">
            14. Termination
          </h5>
          <ul className="list-disc flex flex-col gap-3 sm:gap-4 px-4 sm:px-6 md:px-8 ml-3 sm:ml-5">
            <li className="tracking-wider sm:tracking-widest text-gray-600 text-sm sm:text-base md:text-md">
              Zenstreet reserves the right to suspend or terminate the User's
              access to the Platform, with or without prior notice, for any
              breach of this Agreement or conduct that is detrimental to the
              Platform or other users.
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-start gap-4 sm:gap-5 px-4 sm:px-6 md:px-8 py-3 sm:py-4">
          <h5 className="text-base sm:text-lg text-gray-700 tracking-wider sm:tracking-widest">
            15. Contact Information
          </h5>
          <ul className="list-disc flex flex-col gap-3 sm:gap-4 px-4 sm:px-6 md:px-8 ml-3 sm:ml-5">
            <li className="tracking-wider sm:tracking-widest text-gray-600 text-sm sm:text-base md:text-md">
              For any questions or concerns regarding this Agreement, please
              contact Zenstreet at help@zenstreet.ai
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-[#F0F0F0] w-full pt-16 sm:pt-20 md:pt-25">
        <Footer />
      </div>
    </>
  );
};

export default tnc;
