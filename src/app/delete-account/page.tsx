import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Delete Your Account",
  description: `How to delete your ${site.name} account and what happens to your data.`,
};

const mailBody = encodeURIComponent(
  "Please delete my Zenova account.\n\nPhone number on the account (with country code): \n",
);

export default function DeleteAccountPage() {
  return (
    <LegalPage
      path="/delete-account"
      title={`Delete your ${site.name} account`}
      intro={`You can delete your ${site.name} account at any time. Deleting is permanent and cannot be undone.`}
    >
      <h2>Delete in the app (fastest)</h2>
      <ul>
        <li>Open {site.name} and go to <strong>Settings</strong>.</li>
        <li>Tap <strong>Delete Account</strong>.</li>
        <li>Read the warning and confirm. Your account and its data are then deleted as described below.</li>
      </ul>

      <h2>Delete without the app</h2>
      <p>
        If you no longer have the app or can&apos;t sign in, email{" "}
        <a href={`mailto:${site.privacyEmail}?subject=${encodeURIComponent("Account deletion request")}&body=${mailBody}`}>{site.privacyEmail}</a>{" "}
        from any address with the subject &quot;Account deletion request&quot; and the phone number on your account, including the country code. To protect you, we will send a one-time code by SMS to that number to confirm the request is yours. We complete deletions within 30 days and email you when it is done.
      </p>

      <h2>What we delete</h2>
      <ul>
        <li>Your profile: name, username, photo and &quot;about&quot; text.</li>
        <li>Your phone number and account record, and your encryption key backup.</li>
        <li>Your messages, media and files stored on our servers, and your membership in groups and channels.</li>
        <li>Your device and notification tokens, settings and Pro plan status.</li>
      </ul>

      <h2>What we may keep</h2>
      <ul>
        <li>Messages and media you already sent remain on the devices of the people who received them. We cannot delete those.</li>
        <li>Records we must keep by law, or to prevent fraud and abuse, such as reports about your account and purchase records held by the app store you paid through, for as long as required.</li>
        <li>Data in encrypted backups, which is overwritten on a rolling schedule within 90 days.</li>
      </ul>

      <h2>Before you delete</h2>
      <ul>
        <li>Save any photos, videos and files you want to keep. You can also export chats in Settings → Chat Backup.</li>
        <li>Cancel any {site.name} Pro subscription in the store you bought it from (Google Play → Payments and subscriptions, or on iPhone, Settings → your name → Subscriptions). Deleting your account does not cancel billing on its own.</li>
        <li>If you own a group or channel, make someone else the owner first, or it may be closed.</li>
      </ul>
      <p>
        More detail is in our <Link href="/privacy">Privacy Policy</Link>.
      </p>
    </LegalPage>
  );
}
