import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Child Safety Standards",
  description: `${site.name}'s standards against child sexual abuse and exploitation (CSAE).`,
};

export default function ChildSafetyPage() {
  return (
    <LegalPage
      path="/child-safety"
      title="Child Safety Standards"
      intro={`${site.name} has zero tolerance for child sexual abuse and exploitation (CSAE). This page sets out our standards and how to report concerns.`}
    >
      <h2>Our standards</h2>
      <ul>
        <li>Child sexual abuse material (CSAM) and any content or behaviour that sexualises, grooms, sextorts, trafficks or otherwise exploits a child is prohibited on {site.name}.</li>
        <li>{site.name} is not intended for children under 13, or the higher minimum age that applies in their country.</li>
        <li>Accounts that break these standards are removed and may be permanently banned.</li>
        <li>We report apparent CSAM to the National Center for Missing &amp; Exploited Children (NCMEC) and to the relevant law enforcement authorities, as required by law, and we preserve relevant information for investigations.</li>
      </ul>

      <h2>How to report</h2>
      <ul>
        <li><strong>In the app:</strong> open the chat or profile, choose Report, and submit. You can also block the account.</li>
        <li><strong>By email:</strong> write to <a href={`mailto:${site.safetyEmail}`}>{site.safetyEmail}</a>. Include the username or profile link and a description. Do not attach or forward abusive images of children; describe them instead.</li>
        <li><strong>If a child is in immediate danger,</strong> contact your local emergency number or police first.</li>
      </ul>

      <h2>What happens after a report</h2>
      <p>
        Our team reviews child-safety reports as a priority. We may remove content, suspend or ban accounts, preserve evidence and report to authorities. One-to-one text messages are end-to-end encrypted, so we rely on user reports, including messages a reporter chooses to share with us, and on account and group information we can access.
      </p>

      <h2>Compliance</h2>
      <p>
        {site.name} complies with applicable child-safety laws in the countries where it is offered, and with the child-safety policies of the app stores that distribute it, including Google Play&apos;s Child Safety Standards policy.
      </p>

      <h2>Child-safety contact</h2>
      <p>
        Our designated point of contact for child-safety matters, including enquiries from app stores and law enforcement, can be reached at <a href={`mailto:${site.safetyEmail}`}>{site.safetyEmail}</a>.
      </p>
    </LegalPage>
  );
}
