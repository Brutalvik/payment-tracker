import React from "react";
import { Alert } from "@heroui/alert"; // Changed import paths
import { Mail } from "lucide-react";
import Footer from "@/components/footer";


const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 py-2">
            Privacy Policy
          </h1>
          <p
            className="text-muted-foreground text-base sm:text-lg" // Changed to muted-foreground
          >
            Your privacy is important to us. This policy outlines how we
            collect, use, and protect your information.
          </p>
        </div>

        <div
          className="grid grid-cols-1 gap-6"
          style={{ userSelect: "none" }} // Added userSelect style
        >
          <section className="bg-card rounded-xl shadow-lg border border-border p-6 space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">
              Information Collection
            </h2>
            <p className="text-muted-foreground">
              We collect information to provide and improve our services. This
              may include:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>
                Personal information (e.g., name, email address) when you
                register.
              </li>
              <li>
                Usage data (e.g., pages visited, time spent) to analyze trends.
              </li>
              <li>
                Device information (e.g., IP address, browser type) for
                security.
              </li>
            </ul>
          </section>

          <section className="bg-card rounded-xl shadow-lg border border-border p-6 space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">
              Information Use
            </h2>
            <p className="text-muted-foreground">We use your information to:</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Provide and personalize our services.</li>
              <li>Communicate with you about updates and offers.</li>
              <li>Improve our platform and user experience.</li>
              <li>Ensure the security of our services.</li>
            </ul>
          </section>

          <section className="bg-card rounded-xl shadow-lg border border-border p-6 space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">
              Information Sharing
            </h2>
            <p className="text-muted-foreground">
              We may share your information with:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>
                Service providers who assist us in operating our platform.
              </li>
              <li>Legal authorities when required by law.</li>
              <li>Business partners with your consent.</li>
            </ul>
            <Alert variant="solid" className="mt-4">
              <h1>Note</h1> {/* Added AlertTitle and h3 */}
              <p className="text-muted-foreground">
                We do not sell your personal information to third parties. We do
                not share your personal information with third parties for
                marketing purposes without your consent.
              </p>
            </Alert>
          </section>

          <section className="bg-card rounded-xl shadow-lg border border-border p-6 space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">
              Data Security
            </h2>
            <p className="text-muted-foreground">
              We take reasonable measures to protect your information,
              including:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Encryption of sensitive data.</li>
              <li>Regular security assessments.</li>
              <li>Access controls to limit unauthorized access.</li>
            </ul>
            <p className="text-muted-foreground">
              However, no method of transmission over the internet is completely
              secure.
            </p>
          </section>

          <section className="bg-card rounded-xl shadow-lg border border-border p-6 space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">
              Your Rights
            </h2>
            <p className="text-muted-foreground">You have the right to:</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Access your information.</li>
              <li>Correct inaccuracies.</li>
              <li>Delete your information.</li>
              <li>Object to the processing of your information.</li>
            </ul>
            <p className="text-muted-foreground">
              To exercise these rights, please contact us.
            </p>
          </section>

          <section className="bg-card rounded-xl shadow-lg border border-border p-6 space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">
              Changes to This Policy
            </h2>
            <p className="text-muted-foreground">
              We may update this policy from time to time. We will notify you of
              any significant changes.
            </p>
          </section>

          <section className="bg-card rounded-xl shadow-lg border border-border p-6 space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">
              Contact Us
            </h2>
            <p className="text-muted-foreground">
              If you have any questions about this policy, please contact us at:
            </p>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Mail className="h-4 w-4" />
              <span>privacy@konnectfinance.online</span>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicyPage;
