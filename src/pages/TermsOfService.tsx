import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const TermsOfService = () => {
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
          <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
          
          <div className="prose prose-gray max-w-none">
            <p className="text-muted-foreground mb-8">
              Last updated: September 17, 2025
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">General Terms and Conditions (GTC)</h2>
              <p className="mb-4">Version 2.0 - Updated on 17 September 2025</p>
              <p className="text-muted-foreground mb-6">
                These General Terms and Conditions ("GTC") govern the contractual relationship between the user ("User" or "Consumer") and Samson GmbH, Lahnstra&#223;e 68, 65195 Wiesbaden, Germany, HRB 34739 ("Samson GmbH" or "we"). They apply to the use of our applications, websites, products, and services. The GTC are binding upon acceptance by the User. Please review them carefully prior to any use of our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Part 1 - General Terms and Conditions</h2>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">I. Structure and Composition</h3>
              <p className="mb-4">The contractual documentation consists of:</p>
              <ol className="list-decimal list-inside mb-4 space-y-2 ml-4">
                <li>Part 1 - General Terms and Conditions (GTC): Definitions, scope, rights, and obligations.</li>
                <li>Part 2 - General Terms and Conditions of Use (GTCU): Rules governing the operation and use of the App, Services, and Products.</li>
              </ol>
              <p className="mb-6">These documents together constitute the contractual framework between the User and Samson GmbH. Your use of our Products is also subject to our Data Privacy Policy and other applicable terms.</p>

              <h3 className="text-xl font-semibold mt-6 mb-3">II. Definitions</h3>
              <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
                <li><strong>App:</strong> The Viraa software application developed and operated by Samson GmbH, accessible via smartphones or other compatible devices.</li>
                <li><strong>Consumer:</strong> Any natural person acting for purposes outside their trade, business, craft, or profession.</li>
                <li><strong>Contract:</strong> The contractual relationship established between Samson GmbH and the User upon registration or other confirmation of consent.</li>
                <li><strong>Services:</strong> All digital content and connected digital health services provided by Samson GmbH, including but not limited to:
                  <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                    <li>Creation and maintenance of User Accounts,</li>
                    <li>Collection, storage, and analysis of personal health-related data,</li>
                    <li>Visualisation of collected data in graphical form,</li>
                    <li>Provision of recommendations or programs concerning exercise, nutrition, and sleep,</li>
                    <li>Transmission of product information, company news, and marketing announcements,</li>
                    <li>Access to customer support services.</li>
                  </ul>
                </li>
                <li><strong>Products:</strong> All digital and non-digital goods and services provided by Samson GmbH, including the Viraa App.</li>
                <li><strong>User Account:</strong> The personal account enabling authenticated access to the App and Services.</li>
                <li><strong>Visitors:</strong> Individuals who access the Samson GmbH website or App without registering a User Account.</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-3">III. Scope and Application</h3>
              <ol className="list-decimal list-inside mb-6 space-y-2 ml-4">
                <li>These GTC apply to all Products and Services offered by Samson GmbH.</li>
                <li>By creating a User Account, downloading the App, or otherwise using the Services, the User accepts these GTC.</li>
                <li>Mandatory statutory consumer protection provisions remain unaffected.</li>
              </ol>

              <h3 className="text-xl font-semibold mt-6 mb-3">IV. Conclusion of Contract</h3>
              <ol className="list-decimal list-inside mb-6 space-y-2 ml-4">
                <li>Any presentation of Products or Services on the website or App constitutes a non-binding invitation to contract.</li>
                <li>By completing registration or using the Services, the User makes a binding offer. The Contract is concluded when Samson GmbH confirms the registration or permits access to the Services.</li>
                <li>The contractual text is stored electronically by Samson GmbH and transmitted to the User upon request.</li>
              </ol>

              <h3 className="text-xl font-semibold mt-6 mb-3">V. Right of Withdrawal</h3>
              <ol className="list-decimal list-inside mb-6 space-y-2 ml-4">
                <li>Consumers are entitled to a statutory right of withdrawal of 14 days in accordance with §§ 355–356 BGB, unless an exclusion applies.</li>
                <li>The right of withdrawal is excluded where provision of digital content has commenced with the User's express consent and acknowledgement of the loss of the right of withdrawal (§ 356 Abs. 5 Nr. 2 BGB).</li>
                <li>Withdrawal must be declared in text form (e.g., email to dev@samsongmbh.de). A model withdrawal form is provided separately.</li>
              </ol>

              <h3 className="text-xl font-semibold mt-6 mb-3">VI. Contract Term and Termination</h3>
              <ol className="list-decimal list-inside mb-6 space-y-2 ml-4">
                <li>The Contract remains valid for the duration of use of the App, Products, or Services.</li>
                <li>The User may terminate the contractual relationship at any time by sending a declaration in text form to dev@samsongmbh.de. Termination shall become effective upon receipt of the notice by Samson GmbH.</li>
                <li>Samson GmbH may terminate the contractual relationship for good cause, including but not limited to:
                  <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                    <li>Serious breach of these GTC or statutory provisions by the User,</li>
                    <li>Use of the App for unlawful or abusive purposes,</li>
                    <li>Manipulation of data or technical interference.</li>
                    <li>Refusal by the User to consent to material amendments of these GTC as communicated in accordance with Section VII</li>
                  </ul>
                </li>
                <li><strong>Inactive Accounts:</strong> An account shall be deemed inactive if the User has not logged in or otherwise interacted with the App for a period of three (3) years. Samson GmbH may delete inactive accounts after prior notification and a grace period of ninety (90) days. All data will then be deleted in accordance with statutory retention periods.</li>
              </ol>

              <h3 className="text-xl font-semibold mt-6 mb-3">VII. Amendments</h3>
              <ol className="list-decimal list-inside mb-6 space-y-2 ml-4">
                <li>Samson GmbH may amend these GTC where necessary to reflect changes in legal requirements, technical developments, or minor adjustments to Services that do not materially affect the User's rights and obligations. Such amendments will be communicated to the User in text form (e.g., email, in-app notification) at least thirty (30) days before they take effect. The User may object within this period; if the User objects, either party may terminate the contract.</li>
                <li>Material changes that substantially alter the contractual balance (e.g., introduction of new fees, limitations of services) require the User's express consent. Continued use of the Services without such consent does not constitute acceptance and does not create a breach; in this case, the existing contract remains in force under the old terms until the User either provides consent or Samson GmbH terminates the contract in accordance with Section VI.</li>
              </ol>

              <h3 className="text-xl font-semibold mt-6 mb-3">VIII. Communications</h3>
              <ol className="list-decimal list-inside mb-6 space-y-2 ml-4">
                <li>Samson GmbH will communicate with the User electronically (email, in-app notifications). Communications are deemed received on the day of transmission.</li>
                <li>The User must ensure that the registered contact details are up to date and regularly checked.</li>
                <li>Electronic records generated by Samson GmbH's systems serve as evidence, subject to statutory evidentiary provisions.</li>
              </ol>

              <h3 className="text-xl font-semibold mt-6 mb-3">IX. Liability</h3>
              <ol className="list-decimal list-inside mb-6 space-y-2 ml-4">
                <li>Samson GmbH shall be liable without limitation for intent (Vorsatz) and gross negligence (grobe Fahrlässigkeit).</li>
                <li>Liability for injury to life, body, or health caused by negligence shall not be excluded.</li>
                <li>In cases of slight negligence, Samson GmbH shall be liable only for breaches of essential contractual obligations (Kardinalpflichten), and only for foreseeable, contract-typical damages.</li>
                <li>Statutory mandatory liability (e.g., under the Produkthaftungsgesetz) remains unaffected.</li>
              </ol>

              <h3 className="text-xl font-semibold mt-6 mb-3">X. Warranty (Gewährleistung)</h3>
              <ol className="list-decimal list-inside mb-6 space-y-2 ml-4">
                <li>Statutory warranty rights apply to all Products and Services, unless expressly excluded where permissible by law.</li>
                <li>For gratuitous Services, liability for defects is limited to intent and gross negligence.</li>
                <li>Warranty periods are governed by statutory law, generally two years for Consumers.</li>
              </ol>

              <h3 className="text-xl font-semibold mt-6 mb-3">XI. Governing Law and Jurisdiction</h3>
              <ol className="list-decimal list-inside mb-6 space-y-2 ml-4">
                <li>These GTC are governed by the laws of the Federal Republic of Germany, excluding the UN Convention on Contracts for the International Sale of Goods (CISG).</li>
                <li>For Consumers resident in the European Union, mandatory consumer protection laws of their country of residence shall also apply.</li>
                <li>Exclusive jurisdiction for merchants is Wiesbaden, Germany. For Consumers, statutory rules on jurisdiction apply.</li>
              </ol>

              <h3 className="text-xl font-semibold mt-6 mb-3">XII. Force Majeure</h3>
              <p className="mb-6">Samson GmbH shall not be liable for non-performance due to events beyond its reasonable control, including but not limited to natural disasters, epidemics, armed conflicts, strikes, cyberattacks, governmental actions, or supply shortages.</p>

              <h3 className="text-xl font-semibold mt-6 mb-3">XIII. Severability</h3>
              <p className="mb-6">Should any provision of these GTC be held invalid, the remaining provisions shall remain enforceable. The invalid provision shall be replaced by a valid one which most closely approximates the intended economic purpose.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Part 2 - General Terms and Conditions of Use (GTCU)</h2>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">I. Access to Services</h3>
              <ol className="list-decimal list-inside mb-6 space-y-2 ml-4">
                <li>The App is available via the Apple App Store and Google Play Store. The User must comply with the applicable store's terms of use.</li>
                <li>Samson GmbH endeavours to provide access to the Services without interruption but does not warrant continuous availability. Scheduled maintenance or unforeseen interruptions will be communicated where possible.</li>
              </ol>

              <h3 className="text-xl font-semibold mt-6 mb-3">II. User Accounts</h3>
              <ol className="list-decimal list-inside mb-6 space-y-2 ml-4">
                <li>Users must be at least 18 years of age. Minors may register only with verifiable parental consent in compliance with applicable law.</li>
                <li>The User is responsible for the accuracy of information provided during registration.</li>
                <li>The User must keep login credentials confidential and ensure secure use of the account. Any use by third parties is attributed to the User unless Samson GmbH is at fault.</li>
                <li>Users may delete their account at any time. Samson GmbH may suspend or delete accounts for material breach or prolonged inactivity, subject to prior notice.</li>
              </ol>

              <h3 className="text-xl font-semibold mt-6 mb-3">III. Use of Services</h3>
              <ol className="list-decimal list-inside mb-6 space-y-2 ml-4">
                <li>Services may only be used for personal, non-commercial purposes.</li>
                <li>Prohibited uses include:
                  <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                    <li>Violation of applicable laws or third-party rights,</li>
                    <li>Reverse engineering, decompilation, or attempts to access source code,</li>
                    <li>Automated data collection (scraping, harvesting, crawling),</li>
                    <li>Manipulation, interference, or disruption of the App or Services,</li>
                    <li>Circumvention of security measures,</li>
                    <li>Use of the App in bad faith or for fraudulent purposes.</li>
                  </ul>
                </li>
              </ol>

              <h3 className="text-xl font-semibold mt-6 mb-3">IV. Health Disclaimer</h3>
              <ol className="list-decimal list-inside mb-6 space-y-2 ml-4">
                <li>The App provides lifestyle and wellness information. It does not constitute a medical device within the meaning of Regulation (EU) 2017/745 (MDR).</li>
                <li>The App does not provide medical diagnosis, treatment, or replace professional medical advice.</li>
                <li>Users with health concerns must seek professional medical consultation without delay.</li>
              </ol>

              <h3 className="text-xl font-semibold mt-6 mb-3">V. Intellectual Property and Licence</h3>
              <ol className="list-decimal list-inside mb-6 space-y-2 ml-4">
                <li>All intellectual property rights in the App, Products, and Services remain vested in Samson GmbH or its licensors.</li>
                <li>The User is granted a limited, non-exclusive, non-transferable licence to use the App and Services in accordance with these GTCU.</li>
                <li>The licence does not entitle the User to reproduce, distribute, sublicense, resell, or combine the App with third-party software or hardware without prior written consent.</li>
              </ol>

              <h3 className="text-xl font-semibold mt-6 mb-3">VI. Updates and Third-Party Features</h3>
              <ol className="list-decimal list-inside mb-6 space-y-2 ml-4">
                <li>Samson GmbH may provide updates, upgrades, or modifications to maintain security and functionality. Users are obliged to install such updates.</li>
                <li>Features provided by third parties are subject to separate terms. Samson GmbH is not liable for third-party content or malfunctions.</li>
              </ol>

              <h3 className="text-xl font-semibold mt-6 mb-3">VII. Data Handling and Account Security</h3>
              <ol className="list-decimal list-inside mb-6 space-y-2 ml-4">
                <li>The User is responsible for implementing adequate technical measures, such as secure passwords, device protection, and software updates.</li>
                <li>Samson GmbH strongly recommends the activation of two-factor authentication.</li>
                <li>Data transmission to third parties, including healthcare professionals, is at the User's risk. Samson GmbH assumes no responsibility for security once the data leaves its systems.</li>
              </ol>

              <h3 className="text-xl font-semibold mt-6 mb-3">VIII. Limitations of Use</h3>
              <ol className="list-decimal list-inside mb-6 space-y-2 ml-4">
                <li>The App is not designed to substitute medical treatment or consultation.</li>
                <li>The App may not be used in jurisdictions where such use would violate applicable law.</li>
              </ol>
            </section>
          </div>
        </article>
      </div>
    </div>
  );
};

export default TermsOfService;
