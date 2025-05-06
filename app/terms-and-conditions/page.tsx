import React from "react";
import { motion } from "framer-motion";
import { Alert} from "@heroui/alert";
import Footer from "@/components/footer";

const TermsAndConditionsPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div
          className="text-center space-y-4"
          style={{ userSelect: "none" }} // Added userSelect style
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
            Terms and Conditions
          </h1>
          <p className="text-muted-foreground text-base sm:text-lg">
            Please read these terms and conditions carefully before using our
            services.
          </p>
        </div>

        <div
          className="text-left space-y-4"
          style={{ userSelect: "none" }} // Added userSelect style
        >
          <section className="bg-card rounded-xl shadow-lg border border-border p-6 space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">
              Acceptance of Terms
            </h2>
            <p className="text-muted-foreground">
              By accessing and using our services, you agree to be bound by
              these terms and conditions. If you do not agree to these terms,
              please do not use our services.
            </p>
          </section>

          <section className="bg-card rounded-xl shadow-lg border border-border p-6 space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">
              Description of Services
            </h2>
            <p className="text-muted-foreground">
              We provide [description of services, e.g., a platform for
              connecting professionals, a tool for managing projects, etc.]. We
              reserve the right to modify or discontinue any service at any time
              without notice.
            </p>
          </section>

          <section className="bg-card rounded-xl shadow-lg border border-border p-6 space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">
              User Accounts
            </h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>
                You are responsible for maintaining the confidentiality of your
                account credentials.
              </li>
              <li>
                You agree to provide accurate and complete information when
                creating your account.
              </li>
              <li>
                You are responsible for all activities that occur under your
                account.
              </li>
            </ul>
          </section>

          <section className="bg-card rounded-xl shadow-lg border border-border p-6 space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">
              User Conduct
            </h2>
            <p className="text-muted-foreground">
              You agree not to use our services for any unlawful or prohibited
              purpose. You agree not to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>
                Post or transmit any content that is offensive, harmful, or
                illegal.
              </li>
              <li>Impersonate any person or entity.</li>
              <li>Interfere with the operation of our services.</li>
              <li>Violate any intellectual property rights.</li>
            </ul>
          </section>

          <section className="bg-card rounded-xl shadow-lg border border-border p-6 space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">
              Intellectual Property
            </h2>
            <p className="text-muted-foreground">
              The content and materials available through our services,
              including but not limited to text, graphics, logos, and software,
              are owned by us or our licensors and are protected by copyright
              and other intellectual property laws.
            </p>
          </section>

          <section className="bg-card rounded-xl shadow-lg border border-border p-6 space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">
              Disclaimer of Warranties
            </h2>
            <p className="text-muted-foreground">
              Our services are provided as is and as available without
              warranties of any kind, either express or implied, including but
              not limited to warranties of merchantability, fitness for a
              particular purpose, or non-infringement.
            </p>
          </section>

          <section className="bg-card rounded-xl shadow-lg border border-border p-6 space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">
              Limitation of Liability
            </h2>
            <p className="text-muted-foreground">
              In no event shall we be liable for any indirect, incidental,
              special, consequential, or punitive damages, including without
              limitation, loss of profits, data, use, goodwill, or other
              intangible losses, arising out of or relating to your use of our
              services.
            </p>
            <Alert variant="solid" className="mt-4">
              <h3>Limitation of Liability</h3>
              <p className="text-muted-foreground">
                To the fullest extent permitted by law, we shall not be liable
                for any damages resulting from your use of our services,
                including but not limited to direct, indirect, incidental,
                consequential, or punitive damages. We are not responsible for
                any actions, claims, damages, liabilities, losses, and expenses,
                including reasonable attorneys fees, arising from your use of
                our services.
              </p>
            </Alert>
          </section>

          <section className="bg-card rounded-xl shadow-lg border border-border p-6 space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">
              Governing Law
            </h2>
            <p className="text-muted-foreground">
              These terms and conditions shall be governed by and construed in
              accordance with the laws of [Your Jurisdiction], without regard to
              its conflict of laws principles.
            </p>
          </section>

          <section className="bg-card rounded-xl shadow-lg border border-border p-6 space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">
              Changes to These Terms
            </h2>
            <p className="text-muted-foreground">
              We may update these terms and conditions from time to time. We
              will notify you of any significant changes by posting the new
              terms on our website or by other means of communication. Your
              continued use of our services after the effective date of any
              changes constitutes your acceptance of the new terms.
            </p>
          </section>

          <section className="bg-card rounded-xl shadow-lg border border-border p-6 space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">
              Contact Us
            </h2>
            <p className="text-muted-foreground">
              If you have any questions about these terms and conditions, please
              contact us at:
            </p>
            <p className="text-muted-foreground">Email: support@example.com</p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TermsAndConditionsPage;
