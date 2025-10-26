import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const PrivacyPolicy = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-soft">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Button 
          variant="ghost" 
          onClick={() => navigate('/')}
          className="mb-8"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Button>

        <article className="max-w-4xl mx-auto bg-card rounded-2xl shadow-soft p-8 lg:p-12">
          <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
          
          <div className="prose prose-gray max-w-none">
            <p className="text-muted-foreground mb-8">
              Last updated: September 17, 2025
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Data Privacy Policy</h2>
              <p className="mb-4">Version 2.0 - Updated on 17 September 2025</p>

              <h3 className="text-xl font-semibold mt-6 mb-3">I. Introduction</h3>
              <p className="mb-6">
                Samson GmbH takes the protection of your personal data seriously. This Privacy Policy explains how we collect, process, and protect your data when you use the Viraa App, our website, and related services. We comply with the EU General Data Protection Regulation (GDPR), the Bundesdatenschutzgesetz (BDSG), and all other applicable data protection laws. Marketing language has been avoided to ensure legal clarity.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">II. Definitions</h3>
              <ul className="list-disc list-inside mb-6 space-y-2 ml-4">
                <li><strong>Personal Data:</strong> Any information relating to an identified or identifiable individual (Art. 4(1) GDPR).</li>
                <li><strong>Health Data:</strong> Personal Data concerning health status (Art. 4(15) GDPR). Processing requires explicit consent (Art. 9(2)(a) GDPR).</li>
                <li><strong>Anonymized Data:</strong> Data that has been irreversibly altered so that identification of a person is impossible.</li>
                <li><strong>Pseudonymized Data:</strong> Data that can only be attributed to a person with additional separate information.</li>
                <li><strong>Data Controller:</strong> Samson GmbH, which determines purposes and means of processing.</li>
                <li><strong>Processor:</strong> Any external entity processing data on behalf of Samson GmbH, bound by data processing agreements under Art. 28 GDPR.</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-3">III. Sources of Personal Data</h3>
              <p className="mb-4">We collect data in the following contexts:</p>
              <ol className="list-decimal list-inside mb-6 space-y-2 ml-4">
                <li><strong>Website visits:</strong> IP address, browser type, and usage data via cookies (see cookie policy).</li>
                <li><strong>Account creation:</strong> Identity and login information (name, email, password, date of birth).</li>
                <li><strong>Use of Services:</strong> Physiological and technical data, e.g., steps, heart rate, sleep patterns, depending on device permissions.</li>
                <li><strong>Targeted communication:</strong> User segmentation for communication preferences and advertising. Health Data is not shared with third parties.</li>
                <li><strong>Support and contact:</strong> Data provided when contacting support (name, request content).</li>
                <li><strong>Research participation:</strong> Responses to questionnaires, with separate explicit consent.</li>
                <li><strong>Automatically collected data:</strong> Device identifiers, IP addresses, geolocation (if consented).</li>
              </ol>

              <h3 className="text-xl font-semibold mt-6 mb-3">IV. Legal Bases for Processing</h3>
              <ol className="list-decimal list-inside mb-6 space-y-2 ml-4">
                <li><strong>Contract performance</strong> (Art. 6(1)(b) GDPR): Account creation, provision of services.</li>
                <li><strong>Consent</strong> (Art. 6(1)(a) GDPR; Art. 9(2)(a) GDPR for Health Data): Research participation, Health Data processing, marketing.</li>
                <li><strong>Legal obligation</strong> (Art. 6(1)(c) GDPR): Tax, accounting, vigilance obligations.</li>
                <li><strong>Legitimate interest</strong> (Art. 6(1)(f) GDPR): Fraud prevention, IT security, improvement of services – excluding Health Data.</li>
              </ol>

              <h3 className="text-xl font-semibold mt-6 mb-3">V. Consent and Withdrawal</h3>
              <ol className="list-decimal list-inside mb-6 space-y-2 ml-4">
                <li>Consent is obtained separately and explicitly for Health Data, research, and marketing.</li>
                <li>Users may withdraw consent at any time with effect for the future via in-app settings or by emailing dev@samsongmbh.de. Withdrawal shall be as easy as giving consent.</li>
                <li>For minors, parental consent is required (Art. 8 GDPR).</li>
              </ol>

              <h3 className="text-xl font-semibold mt-6 mb-3">VI. Retention of Data</h3>
              <ol className="list-decimal list-inside mb-6 space-y-2 ml-4">
                <li>Personal Data is stored only as long as necessary for the purposes outlined, or as legally required.</li>
                <li>Examples:
                  <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                    <li>Support tickets: max. 3 years, unless legal claims require longer.</li>
                    <li>Accounting data: 10 years (HGB/AO).</li>
                    <li>Vigilance/adverse event reports: 10 years unless longer required under medical device law.</li>
                    <li>Health Data: until account deletion or withdrawal of consent.</li>
                  </ul>
                </li>
                <li>Backup data: Backups cannot be individually modified but are overwritten in cycles to ensure compliance.</li>
                <li>Inactive accounts: Deleted after 3 years of inactivity, following 90 days' notice.</li>
              </ol>

              <h3 className="text-xl font-semibold mt-6 mb-3">VII. Data Sharing and Transfers</h3>
              <ol className="list-decimal list-inside mb-6 space-y-2 ml-4">
                <li>Internal sharing: Only with authorized staff bound by confidentiality.</li>
                <li>Processors: IT providers, hosting providers, and support partners under Art. 28 GDPR agreements.</li>
                <li>Third-country transfers: Only where safeguards exist under Art. 46 GDPR (Standard Contractual Clauses, adequacy decisions).</li>
                <li>Legal disclosures: Data may be shared when required by law, with prior notice unless prohibited.</li>
                <li>Research partners: Only anonymized or aggregated data is shared.</li>
              </ol>

              <h3 className="text-xl font-semibold mt-6 mb-3">VIII. Security Measures</h3>
              <ol className="list-decimal list-inside mb-6 space-y-2 ml-4">
                <li>Samson GmbH implements appropriate technical and organizational measures (Art. 32 GDPR), including encryption, pseudonymization, access controls, and regular audits.</li>
                <li>In case of a data breach, Samson GmbH will notify the supervisory authority within 72 hours (Art. 33 GDPR) and affected users without undue delay (Art. 34 GDPR).</li>
              </ol>

              <h3 className="text-xl font-semibold mt-6 mb-3">IX. User Rights</h3>
              <p className="mb-4">Users may exercise the following rights:</p>
              <ol className="list-decimal list-inside mb-6 space-y-2 ml-4">
                <li>Right to information and access (Art. 15 GDPR).</li>
                <li>Right to rectification (Art. 16 GDPR).</li>
                <li>Right to erasure (Art. 17 GDPR).</li>
                <li>Right to restriction (Art. 18 GDPR).</li>
                <li>Right to portability (Art. 20 GDPR).</li>
                <li>Right to object (Art. 21 GDPR), including:
                  <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                    <li>General right to object to processing based on legitimate interests,</li>
                    <li>Absolute right to object to processing for direct marketing.</li>
                  </ul>
                </li>
                <li>Right to withdraw consent (Art. 7(3) GDPR).</li>
                <li>Right to lodge a complaint with the competent supervisory authority.</li>
              </ol>
              <p className="mb-6">Requests should be sent to dev@samsongmbh.de. Proof of identity may be required. Responses will be provided within one month.</p>

              <h3 className="text-xl font-semibold mt-6 mb-3">X. Automated Decision-Making</h3>
              <p className="mb-6">Samson GmbH does not use personal data for automated decision-making or profiling within the meaning of Art. 22 GDPR.</p>

              <h3 className="text-xl font-semibold mt-6 mb-3">XI. Hosting and Storage</h3>
              <ol className="list-decimal list-inside mb-6 space-y-2 ml-4">
                <li>Health Data is stored exclusively in Germany on Google Cloud servers.</li>
                <li>Other Personal Data may be processed outside the EEA only with adequate safeguards.</li>
              </ol>

              <h3 className="text-xl font-semibold mt-6 mb-3">XII. Severability and Link to GTC</h3>
              <p className="mb-6">This Privacy Policy is an integral part of the contractual framework with the User. If provisions conflict with mandatory law, statutory rules prevail. The remainder remains valid.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">U.S. Addendum – Privacy Rights for U.S. Residents</h2>
              <p className="mb-6">If you are a resident of the United States, including California, the following additional rights apply under state and federal privacy laws such as the California Consumer Privacy Act (CCPA/CPRA) and comparable state laws.</p>

              <h3 className="text-xl font-semibold mt-6 mb-3">1. No Sale or Sharing of Personal Information</h3>
              <p className="mb-6">Samson GmbH does not sell your Personal Information and does not share it for cross-context behavioral advertising within the meaning of CCPA/CPRA.</p>

              <h3 className="text-xl font-semibold mt-6 mb-3">2. Rights of U.S. Residents</h3>
              <p className="mb-4">In addition to the rights set out in the GDPR section of this Policy, U.S. residents may exercise the following rights:</p>
              <ul className="list-disc list-inside mb-6 space-y-2 ml-4">
                <li><strong>Right to Know:</strong> You may request information about the categories and specific pieces of Personal Information we collect and disclose.</li>
                <li><strong>Right to Delete:</strong> You may request the deletion of Personal Information we hold about you, subject to legal retention requirements.</li>
                <li><strong>Right to Correct:</strong> You may request correction of inaccurate Personal Information.</li>
                <li><strong>Right to Opt-Out of Sale/Sharing:</strong> You may request that we do not sell or share your Personal Information.</li>
                <li><strong>Right to Limit Use of Sensitive Personal Information:</strong> You may request that we limit use and disclosure of sensitive information (e.g., health data, biometric data) to what is necessary to provide the Services.</li>
                <li><strong>Right to Non-Discrimination:</strong> You will not be discriminated against for exercising your privacy rights.</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-3">3. Exercising Your U.S. Rights</h3>
              <p className="mb-6">You may exercise these rights free of charge by contacting us at dev@samsongmbh.de. We may need to verify your identity before processing your request. Authorized agents may submit requests on your behalf where permitted by law.</p>

              <h3 className="text-xl font-semibold mt-6 mb-3">4. Response Times</h3>
              <p className="mb-6">We will respond to requests within the timelines required by applicable U.S. law (generally 45 days, extendable by an additional 45 days if necessary).</p>

              <h3 className="text-xl font-semibold mt-6 mb-3">5. Data Breach Notification</h3>
              <p className="mb-6">In addition to our GDPR obligations, in the event of a data breach affecting U.S. residents, we will provide notifications in accordance with applicable federal and state data breach notification laws (e.g., California Civil Code § 1798.82).</p>
            </section>
          </div>
        </article>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
