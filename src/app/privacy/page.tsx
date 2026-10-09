import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/LegalPage";
import { mediaRetentionDays, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${site.name} collects, uses, shares and protects your information.`,
};

export default function PrivacyPage() {
  return (
    <LegalPage
      path="/privacy"
      title="Privacy Policy"
      intro={`This policy explains what information ${site.name} collects when you use our apps for Android, iPhone and the web, and this website, why we collect it, who we share it with, and the choices you have.`}
    >
      <h2>1. Who we are</h2>
      <p>
        {site.name} is published by {site.company} (&quot;we&quot;, &quot;us&quot;). For any privacy question or request, email{" "}
        <a href={`mailto:${site.privacyEmail}`}>{site.privacyEmail}</a>.
      </p>

      <h2>2. Information we collect</h2>
      <h3>Information you give us</h3>
      <ul>
        <li><strong>Phone number.</strong> Used to create your account and sign you in with a one-time SMS code.</li>
        <li><strong>Profile.</strong> Your display name, username, profile photo and &quot;about&quot; text, if you add them.</li>
        <li><strong>Messages and content.</strong> Messages, photos, videos, voice notes, files, polls and other content you send, and the groups and channels you create or join.</li>
        <li><strong>Support requests.</strong> What you tell us when you contact us.</li>
      </ul>
      <h3>Information collected when you use the app</h3>
      <ul>
        <li><strong>Account and device data.</strong> Your account ID, device identifiers used for sign-in and security, a push notification token, app version, operating system version and language.</li>
        <li><strong>Usage metadata.</strong> Who you message or call and when, message delivery and read status, group membership, call times and durations.</li>
        <li><strong>Contacts (only if you allow it).</strong> When you choose to find friends, the phone numbers in your address book are sent to our server in international format to check which ones belong to {site.name} users. The server applies each person&apos;s &quot;who can find me by phone&quot; setting. The numbers you check are not stored. Names and other contact details stay on your phone.</li>
        <li><strong>Location (only if you share it).</strong> When you share your location or live location in a chat, we process your device&apos;s location and send it to the people in that chat for the time you choose.</li>
        <li><strong>Camera, microphone and media.</strong> Used only when you take a photo, record a voice note or video, make a call, or pick media to send.</li>
        <li><strong>Crash reports (only with your consent).</strong> If you agree, the app sends crash reports that contain the type of error and where in the code it happened. They never include your messages, contacts or phone number. You can turn this off in Privacy settings.</li>
        <li><strong>Technical performance data.</strong> Basic timing information, such as how long screens or network requests take, to help us keep the app fast.</li>
        <li><strong>Purchases.</strong> If you subscribe to {site.name} Pro, the store you pay through (such as Google Play or the Apple App Store) tells us which product you bought and whether the subscription is active. We do not receive your card or payment details.</li>
      </ul>
      <p>
        We do not show ads, we do not use advertising trackers, and we do not sell your personal information.
      </p>

      <h2>3. How your messages are protected</h2>
      <ul>
        <li><strong>One-to-one text messages</strong> are end-to-end encrypted. They are encrypted on your device before sending and can be decrypted only on your and the recipient&apos;s devices. We cannot read them.</li>
        <li><strong>Group and channel messages, photos, videos, files, voice notes and calls</strong> are encrypted in transit between your device and our servers, and are stored with access controls so that only members of the chat can open them. They are <strong>not</strong> end-to-end encrypted today, which means our systems can technically access them. We only do so when needed to run the service, keep it safe, or meet a legal obligation.</li>
        <li><strong>Encryption key backup.</strong> Your encryption keys are backed up in encrypted form so you can restore your chats on a new phone with your recovery code or the PIN you set. Keep them safe: we cannot recover them for you, and after too many wrong PIN attempts the PIN is removed.</li>
      </ul>

      <h2>4. How we use information</h2>
      <ul>
        <li>To create and secure your account and sign you in.</li>
        <li>To deliver messages, calls, media and notifications.</li>
        <li>To let people find you, according to your privacy settings.</li>
        <li>To process {site.name} Pro subscriptions and apply plan limits.</li>
        <li>To keep {site.name} safe: preventing spam, fraud and abuse, enforcing our <Link href="/terms">Terms</Link>, and protecting children (see our <Link href="/child-safety">Child Safety Standards</Link>).</li>
        <li>To fix crashes and improve performance.</li>
        <li>To respond to your support requests and to meet legal obligations.</li>
      </ul>

      <h2>5. Service providers we use</h2>
      <p>We use trusted providers to run {site.name}. They process data on our behalf and only for the purposes above.</p>
      <table>
        <thead>
          <tr><th>Provider</th><th>What it does</th></tr>
        </thead>
        <tbody>
          <tr><td>Google Firebase (Google LLC)</td><td>Phone sign-in, database for messages and accounts, push notifications, app integrity checks (App Check), crash reports with your consent, performance monitoring</td></tr>
          <tr><td>Cloudflare R2 (Cloudflare, Inc.)</td><td>Storage for photos, videos, files and voice notes</td></tr>
          <tr><td>LiveKit Cloud (LiveKit, Inc.)</td><td>Routing of voice and video calls</td></tr>
          <tr><td>Render (Render Services, Inc.)</td><td>Hosting of our backend servers</td></tr>
          <tr><td>Google Play (Google LLC), Apple App Store (Apple Inc.) and other app stores</td><td>App distribution and {site.name} Pro subscription billing</td></tr>
        </tbody>
      </table>
      <p>
        These providers may process data in countries other than your own, including the United States. Where required, we rely on appropriate safeguards for these transfers.
      </p>

      <h2>6. When we share information</h2>
      <ul>
        <li><strong>With the people you talk to.</strong> Your profile, messages, media, calls and shared location go to the people and groups you choose.</li>
        <li><strong>With our service providers</strong> listed above.</li>
        <li><strong>For legal reasons.</strong> When we believe in good faith that the law requires it, or to protect the safety of any person, including reporting child sexual abuse material to the relevant authorities.</li>
        <li><strong>If our business changes hands,</strong> in which case this policy continues to apply to your information.</li>
      </ul>

      <h2>7. How long we keep information</h2>
      <ul>
        <li><strong>Chat media</strong> (photos, videos, files, voice notes) is deleted from our servers about {mediaRetentionDays} days after upload. Copies saved on your phone are not affected.</li>
        <li><strong>Messages and account data</strong> are kept while your account is active, so your chats stay available across your devices, unless you delete them sooner.</li>
        <li><strong>Profile and group photos</strong> are kept until you change or remove them, or delete your account.</li>
        <li><strong>Contacts you check</strong> are not stored.</li>
        <li><strong>When you delete your account,</strong> we delete your profile, account data and content we hold about you, except messages you already sent that remain on other people&apos;s devices, and records we must keep for legal, safety or fraud-prevention reasons. Backups are cleared on a rolling schedule.</li>
      </ul>

      <h2>8. Your choices and rights</h2>
      <ul>
        <li>Edit your profile and privacy settings, including who can see your details and who can find you by phone number, in the app.</li>
        <li>Turn crash reports, contacts access, location, camera, microphone and notifications on or off at any time.</li>
        <li>Block people and report abuse from any chat.</li>
        <li>Delete your account in Settings → Delete Account, or follow our <Link href="/delete-account">account deletion steps</Link>.</li>
        <li>Depending on where you live, you may have the right to access, correct, export or delete your personal information, to object to or restrict some processing, and to complain to your data protection authority. Email <a href={`mailto:${site.privacyEmail}`}>{site.privacyEmail}</a> and we will respond within 30 days.</li>
      </ul>

      <h2>9. Children</h2>
      <p>
        {site.name} is not for children under 13, or the minimum age required in your country to use online services without parental consent, if higher. If we learn that a child has created an account, we will delete it. See our <Link href="/child-safety">Child Safety Standards</Link>.
      </p>

      <h2>10. Security</h2>
      <p>
        We use encryption in transit, end-to-end encryption for one-to-one text messages, access controls, app integrity checks and monitoring to protect your information. No system is perfectly secure, so please protect your phone and turn on app lock and two-step verification.
      </p>

      <h2>11. This website and the web app</h2>
      <p>
        The {site.name} web app keeps your session and a local copy of your chats in your browser&apos;s storage so it can load quickly. On a shared computer, sign out when you finish.
      </p>
      <p>
        This website does not require an account and does not use advertising or analytics cookies. Our hosting provider may keep standard server logs, such as IP address and pages requested, for security.
      </p>

      <h2>12. Changes to this policy</h2>
      <p>
        We will post any changes on this page and update the date at the top. If the changes are significant, we will also tell you in the app.
      </p>

      <h2>13. Contact</h2>
      <p>
        Questions or requests: <a href={`mailto:${site.privacyEmail}`}>{site.privacyEmail}</a>.
      </p>
    </LegalPage>
  );
}
