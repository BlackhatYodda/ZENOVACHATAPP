import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `The rules for using ${site.name}.`,
};

export default function TermsPage() {
  return (
    <LegalPage
      path="/terms"
      title="Terms of Service"
      intro={`These Terms are an agreement between you and ${site.company} for your use of the ${site.name} app and website. By creating an account or using ${site.name}, you agree to them. If you do not agree, do not use ${site.name}.`}
    >
      <h2>1. Who can use Zenova</h2>
      <ul>
        <li>You must be at least 13 years old, or the minimum age required in your country to use online services without parental consent, if higher.</li>
        <li>You must use a mobile number that you own or are authorised to use.</li>
        <li>You must not be barred from using the service under applicable law, and you must not have had a previous account removed by us for breaking these Terms.</li>
      </ul>

      <h2>2. Your account</h2>
      <p>
        You are responsible for your account and for what happens on it. Keep your phone, SIM, recovery code and PIN safe, and turn on app lock and two-step verification. Tell us right away at{" "}
        <a href={`mailto:${site.supportEmail}`}>{site.supportEmail}</a> if you think someone else has accessed your account.
      </p>

      <h2>3. Acceptable use</h2>
      <p>You agree not to use {site.name} to:</p>
      <ul>
        <li>Share child sexual abuse material, or sexualise, groom or exploit minors in any way. We report this to the authorities. See our <Link href="/child-safety">Child Safety Standards</Link>.</li>
        <li>Harass, threaten, bully, stalk or intimidate anyone, or promote violence, terrorism or hatred.</li>
        <li>Share someone&apos;s private information or intimate images without their consent.</li>
        <li>Send spam, run scams or phishing, or impersonate someone else.</li>
        <li>Sell or promote illegal goods or services, or break any law.</li>
        <li>Infringe anyone&apos;s copyright, trademark or other rights.</li>
        <li>Spread malware, or try to access accounts, data or systems without permission.</li>
        <li>Reverse engineer, overload, scrape or interfere with {site.name}, or create accounts with automated tools.</li>
      </ul>

      <h2>4. Your content</h2>
      <p>
        You own the content you send. You give us a worldwide, non-exclusive, royalty-free licence to store, transmit, process and display it only as needed to run and improve {site.name}, for example to deliver your messages and media to the people you choose. This licence ends when the content is deleted from our systems, except for copies that others have saved.
      </p>
      <p>
        You are responsible for the content you share and for having the right to share it.
      </p>

      <h2>5. Safety and enforcement</h2>
      <p>
        You can block and report people in the app. We review reports and may remove content, limit features, or suspend or remove accounts that break these Terms or put others at risk. Because one-to-one text messages are end-to-end encrypted, we may rely on reports, including the reported messages that you choose to forward to us, to act on them. Where the law requires it, or to protect someone&apos;s safety, we may share information with law enforcement.
      </p>

      <h2>6. Zenova Pro</h2>
      <ul>
        <li>{site.name} Pro is an optional paid subscription sold through the app store you installed from, such as Google Play or the Apple App Store. It raises upload size limits. Prices are shown in the app and in the store before you buy.</li>
        <li>Subscriptions renew automatically until you cancel. You can cancel at any time in your store account: Google Play → Payments and subscriptions, or on iPhone, Settings → your name → Subscriptions. Cancelling stops future renewals; you keep Pro until the end of the period you paid for.</li>
        <li>Refunds are handled by the store you paid through, under its refund policy and the consumer law that applies to you.</li>
        <li>Plan limits may change. We will tell you in advance if a change reduces what you have paid for.</li>
      </ul>

      <h2>7. Storage and availability</h2>
      <p>
        {site.name} is not a backup service. Chat media is removed from our servers after a period of time (see the <Link href="/privacy">Privacy Policy</Link>), so keep copies of anything important on your phone. We work to keep {site.name} available, but it may sometimes be interrupted for maintenance, updates or reasons outside our control.
      </p>

      <h2>8. Third-party services</h2>
      <p>
        {site.name} relies on services such as Google Play, the Apple App Store, other app stores, Firebase and your mobile carrier. If you got Zenova from Apple, Apple is not a party to these Terms and has no responsibility for the app or its support. Their own terms apply to your use of them, and we are not responsible for them.
      </p>

      <h2>9. Our rights</h2>
      <p>
        The {site.name} name, logo, app and website are owned by {site.company} and protected by law. These Terms do not give you any right to use them except to use {site.name} as intended. We may update the app and add, change or remove features.
      </p>

      <h2>10. Ending your use</h2>
      <p>
        You can stop using {site.name} and <Link href="/delete-account">delete your account</Link> at any time. We may suspend or end your access if you break these Terms, if required by law, or if continuing would create risk for us or others. Where reasonable, we will tell you first.
      </p>

      <h2>11. Disclaimers</h2>
      <p>
        {site.name} is provided &quot;as is&quot; and &quot;as available&quot;. To the extent the law allows, we make no warranties, express or implied, including that {site.name} will be uninterrupted, error-free or completely secure. {site.name} is not a replacement for emergency services: in an emergency, call your local emergency number.
      </p>

      <h2>12. Limitation of liability</h2>
      <p>
        To the extent the law allows, {site.company} is not liable for indirect, incidental, special or consequential damages, or for lost data, profits or goodwill, arising from your use of {site.name}. Our total liability for any claim is limited to the greater of the amount you paid us in the 12 months before the claim or USD 50. Nothing in these Terms limits liability that cannot be limited by law, or your rights as a consumer.
      </p>

      <h2>13. Governing law</h2>
      <p>
        These Terms are governed by the laws of {site.jurisdiction}, without regard to conflict-of-law rules. This does not take away any protection you have under the mandatory consumer laws of the country where you live.
      </p>

      <h2>14. Changes to these Terms</h2>
      <p>
        We may update these Terms. We will post the new version here and update the date at the top, and tell you in the app if the changes are significant. If you keep using {site.name} after the changes take effect, you accept them.
      </p>

      <h2>15. Contact</h2>
      <p>
        Questions about these Terms: <a href={`mailto:${site.supportEmail}`}>{site.supportEmail}</a>.
      </p>
    </LegalPage>
  );
}
