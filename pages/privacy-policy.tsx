/** @jsx jsx */
import { jsx, Heading, Text, Container, Link as A } from "theme-ui";
import PageLayout from "components/layouts/page";

import { HeadProps } from "components/primitives/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const headProps: HeadProps = {
  meta: {
    title: "Privacy Policy",
    description:
      "Livepeer.org is a primary online resource for participants and users of the Livepeer network.",
    url: "https://livepeer.org/privacy-policy",
    siteName: "Livepeer.org",
    image: "https://livepeer.org/OG.png",
    twitterUsername: "@LivepeerOrg",
  },
};

const PrivacyPolicyPage = () => (
  <PageLayout headProps={headProps} footerProps={{ prefooter: null }}>
    <Container sx={{ py: 5, maxWidth: "800px", p: { mb: 4, lineHeight: 1.7 } }}>
      <Heading variant="heading.3" sx={{ textAlign: "left", mb: 4 }}>
        Privacy Policy
      </Heading>
      <Heading variant="heading.5" sx={{ textAlign: "left", mb: 4 }}>
        Last Updated: April 26, 2018
      </Heading>
      <Text as="p">
        Livepeer, Inc. (<b>"Livepeer"</b>, <b>"we"</b> or <b>"us"</b>) is
        committed to protecting your privacy. We have prepared this Privacy
        Policy to describe to you our practices regarding the Personal Data (as
        defined below) we collect from users of this user registration website
        (the <b>"Site"</b>). The purpose (the <b>"Purpose"</b>) of this Site is
        to allow you to register to receive Livepeer tokens (<b>"LPT"</b>)
        solely for use on the Livepeer network (the <b>"Network"</b>) as a
        staking token (which is explained in more detail in our participation
        agreement at livepeer.org/participation-agreement (the{" "}
        <b>"Participation Agreement"</b>) and for us to distribute the Livepeer
        tokens in accordance with the Participation Agreement. Any term that is
        capitalized and is not defined in this Privacy Policy has the meaning
        provided in the Participation Agreement.
      </Text>
      <Text as="p">
        <b>1. User Consent.</b> By submitting Personal Data through our Site or
        Services, you agree to the terms of this Privacy Policy and you
        expressly consent to the collection, use and disclosure of your Personal
        Data in accordance with this Privacy Policy. Without limiting the
        foregoing, you agree to the processing of your Personal Data in
        connection with the Purpose, including compliance with any regulatory
        requirements.
      </Text>
      <Text as="p">
        <b>2. Types of Data We Collect.</b> <b>"Personal Data"</b> means data
        that allows someone to identify or contact you, including, for example,
        your name, address, telephone number, e-mail address, as well as any
        other non-public information about you that is associated with or linked
        to any of the foregoing data.<b>"Anonymous Data"</b> means data that is
        not associated with or linked to your Personal Data; Anonymous Data does
        not, by itself, permit the identification of individual persons. We
        collect Personal Data and Anonymous Data, as described below.
      </Text>
      <Text as="p">
        <b>3. Information You Provide to Us.</b>
      </Text>
      <Text as="p">
        <b>4.</b> We may collect Personal Data from you, such as your first and
        last name, phone number, e-mail address, country of residence, and
        mailing addresses and password when you register on the Site (
        <b>"Registration"</b>).
      </Text>
      <Text as="p">
        <b>5.</b> In connection with regulatory requirements, we or our third
        party providers may collect your social security number, date of birth,
        address history and photo images of you. In the alternative, we or our
        third party provider may use the phone number that you have provided to
        collect the social security number, date of birth and address history
        associated with such phone number(s) from other parties to allow us to
        comply with the regulatory requirements.
      </Text>
      <Text as="p">
        <b>6.</b> We may associate your phone number to your mobile device
        identification information.
      </Text>
      <Text as="p">
        <b>7.</b> If you provide us feedback or contact us via e-mail, we will
        collect your name and e-mail address, as well as any other content
        included in the e-mail, in order to send you a reply.
      </Text>
      <Text as="p">
        <b>8.</b> We also collect other types of Personal Data that you provide
        to us voluntarily, such as your operating system and version and other
        requested information if you contact us via e-mail regarding support for
        the Services.
      </Text>
      <Text as="p">
        <b>9.</b> We may also collect Personal Data at other points in our Site
        that state that Personal Data is being collected.
      </Text>
      <Text as="p">
        <b>10. Cookies.</b>
      </Text>
      <Text as="p">
        <b>11</b>. Like many websites, we use Cookies to collect information.
        "Cookies" are small pieces of information that a website sends to your
        computer's hard drive while you are viewing the website. We may use both
        session Cookies (which expire once you close your web browser) and
        persistent Cookies (which stay on your computer until you delete them)
        to provide you with a more personal and interactive experience on our
        Services. This type of information is collected to make the Site more
        useful to you and to tailor the experience with us to meet your special
        interests and needs. We use two broad categories of Cookies: (1) first
        party Cookies, served directly by us to your computer or mobile device,
        which are used only by us to recognize your computer or mobile device
        when it uses the Services; and (2) third party Cookies, which are served
        by service providers on our Services, and can be used by such service
        providers to recognize your computer or mobile device when it visits
        other websites.
      </Text>
      <Text as="p">
        <b>12.</b> Our Services use the following types of Cookies for the
        purposes set out below:
      </Text>
      <table
        sx={{
          borderCollapse: "initial",
          borderSpacing: "24px",
          display: "block",
          overflow: "auto",
          width: "100vw",
          maxWidth: "1000px",
          position: "relative",
        }}>
        <thead>
          <tr>
            <th sx={{ minWidth: "132px", textAlign: "left" }}>
              Type of Cookies
            </th>
            <th sx={{ textAlign: "left" }}>Purpose</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Essential Cookies</td>
            <td>
              These Cookies are essential to provide you with services available
              through our Services and to enable you to use some of its
              features. For example, they allow you to log in to secure areas of
              our Services and help the content of the pages you request load
              quickly. Without these Cookies, the services that you have asked
              for cannot be provided, and we only use these Cookies to provide
              you with those services.
            </td>
          </tr>
          <tr>
            <td>Functionality Cookies</td>
            <td>
              These Cookies allow our Services to remember choices you make when
              you use our Services, remembering your login details and
              remembering the changes you make to other parts of our
              Site/Application(s)/Service which you can customize. The purpose
              of these Cookies is to provide you with a more personal experience
              and to avoid you having to re-enter your preferences every time
              you visit our Services.
            </td>
          </tr>
          <tr>
            <td>Analytics and Performance Cookies</td>
            <td>
              These Cookies are used to collect information about traffic to our
              Services and how users use our Services. The information gathered
              does not identify any individual visitor. The information is
              aggregated and anonymous. It includes the number of visitors to
              our Services, the websites that referred them to our Services, the
              pages they visited on our Services, what time of day they visited
              our Services, whether they have visited our Services before, and
              other similar information. We use this information to help operate
              our Services more efficiently, to gather broad demographic
              information and to monitor the level of activity on our
              Site/Application(s)/Services. We use Google Analytics and other
              third party analytics services for this purpose. Google Analytics
              uses its own Cookies. It is only used to improve how our Services
              works. You can find out more information about Google Analytics
              Cookies here:{" "}
              <A
                variant="accent"
                href="https://developers.google.com/analytics/resources/concepts/gaConceptsCookies">
                https://developers.google.com/analytics/resources/concepts/gaConceptsCookies
              </A>
              . You can find out more about how Google protects your data here:
              www.google.com/analytics/learn/privacy.html. You can prevent the
              use of Google Analytics relating to your use of our Services by
              downloading and installing the browser plugin available via this
              link:{" "}
              <A
                variant="accent"
                href="http://tools.google.com/dlpage/gaoptout?hl=en-GB">
                http://tools.google.com/dlpage/gaoptout?hl=en-GB
              </A>
              .
            </td>
          </tr>
        </tbody>
      </table>
      <Text as="p">
        <b>13. Information Collected via Technology</b>
      </Text>
      <Text as="p">
        <b>14. Information Collected by Our Servers.</b> To make our Site more
        useful to you, our servers (which may be hosted by a third party service
        provider) collect information from you, including your browser type,
        operating system, Internet Protocol ("IP") address (a number that is
        automatically assigned to your computer when you use the Internet, which
        may vary from session to session), domain name, and/or a date/time stamp
        for your visit.
      </Text>
      <Text as="p">
        <b>15. Log Files.</b> As is true of most websites, we gather certain
        information automatically and store it in log files. This information
        includes IP addresses, browser type, Internet service provider ("ISP"),
        referring/exit pages, operating system, date/time stamp, and clickstream
        data. We use this information to analyze trends, administer the Site,
        track users' movements around the Site, gather demographic information
        about our user base as a whole, and better tailor our Services to our
        users' needs.
      </Text>
      <Text as="p">
        <b>16. Pixel Tags.</b> In addition, we may use "Pixel Tags" (also
        referred to as clear Gifs, Web beacons, or Web bugs). Pixel Tags are
        tiny graphic images with a unique identifier, similar in function to
        Cookies, that are used to track online movements of Web users. In
        contrast to Cookies, which are stored on a user's computer hard drive,
        Pixel Tags are embedded invisibly in Web pages. Pixel Tags also allow us
        to send e-mail messages in a format users can read, and they tell us
        whether e-mails have been opened to ensure that we are sending only
        messages that are of interest to our users. We may use this information
        to reduce or eliminate messages sent to a user. We do not tie the
        information gathered by Pixel Tags to our users' Personal Data.
      </Text>
      <Text as="p">
        <b>17. How We Respond to Do Not Track Signals.</b> We do not currently
        respond to "do not track" signals or other mechanisms that might enable
        Users to opt out of tracking on our site.
      </Text>
      <Text as="p">
        (a) <b>Information Collected from You About Others.</b>{" "}
        <b>Information Collected from Third Party Companies.</b> We may receive
        Personal and/or Anonymous Data about you from companies that provide
        services to us in connection with the Purpose. We may add this
        information to the information we have already collected from you via
        our Site for use in connection with the Purpose, including to ensure
        compliance with regulatory compliance.
      </Text>
      <Text as="p">
        <b>18. Use of Your Personal Data</b>
      </Text>
      <Text as="p">
        <b>19. General Use.</b> In general, Personal Data you submit to us is
        used in connection with the Purpose, including compliance with
        regulatory requirements or to respond to your queries. We use your
        Personal Data in the following ways:
      </Text>
      <ul sx={{ listStyle: "inside", mb: 4 }}>
        <li sx={{ mb: 2 }}>facilitate your Registration;</li>
        <li sx={{ mb: 2 }}>identify you as a user in our system;</li>
        <li sx={{ mb: 2 }}>provide improved administration of our Site and</li>
      </ul>
      <Text as="p">
        <b>20. Creation of Anonymous Data.</b> We may create Anonymous Data
        records from Personal Data by excluding information (such as your name)
        that makes the data personally identifiable to you. We use this
        Anonymous Data to analyze request and usage patterns so that we may
        enhance the content of our Services and improve Site navigation. We
        reserve the right to use Anonymous Data and aggregated and other
        de-identified information for any purpose and disclose Anonymous Data to
        third parties in our sole discretion.
      </Text>
      <Text as="p">
        <b>21. Disclosure of Your Personal Data.</b> We disclose your Personal
        Data as described below and as described elsewhere in this Privacy
        Policy.
      </Text>
      <Text as="p">
        <b>22. Third Party Service Providers.</b> We may share your Personal
        Data with third party service providers to: provide you with the
        Services that we offer you through our Site; to conduct quality
        assurance testing; to facilitate creation of accounts; to provide
        technical support; and/or to provide other services to the Company.
      </Text>
      <Text as="p">
        <b>23. Corporate Restructuring.</b> We may share some or all of your
        Personal Data in connection with or during negotiation of any merger,
        financing, acquisition or dissolution transaction or proceeding
        involving sale, transfer, divestiture, or disclosure of all or a portion
        of our business or assets. In the event of an insolvency, bankruptcy, or
        receivership, Personal Data may also be transferred as a business asset.
        If another company acquires our company, business, or assets, that
        company will possess the Personal Data collected by us and will assume
        the rights and obligations regarding your Personal Data as described in
        this Privacy Policy.
      </Text>
      <Text as="p">
        <b>24. Other Disclosures.</b> Regardless of any choices you make
        regarding your Personal Data (as described below), Company may disclose
        Personal Data if it believes in good faith that such disclosure is
        necessary (i) in connection with any legal investigation; (ii) to comply
        with relevant laws or to respond to subpoenas or warrants served on
        Company; (iii) to protect or defend the rights or property of Company or
        users of the Site or Services; and/or (iv) to investigate or assist in
        preventing any violation or potential violation of the law, this Privacy
        Policy, or the Participation Agreement.
      </Text>
      <Text as="p">
        <b>25. Third Party Websites.</b> Our Site may contain links to third
        party websites. When you click on a link to any other website or
        location, you will leave our Site and go to another site, and another
        entity may collect Personal Data or Anonymous Data from you. We have no
        control over, do not review, and cannot be responsible for, these
        outside websites or their content. Please be aware that the terms of
        this Privacy Policy do not apply to these outside websites or content,
        or to any collection of your Personal Data after you click on links to
        such outside websites. We encourage you to read the privacy policies of
        every website you visit. The links to third party websites or locations
        are for your convenience and do not signify our endorsement of such
        third parties or their products, content or websites.
      </Text>
      <Text as="p">
        <b>26. Your Choices Regarding Information.</b> You have several choices
        regarding the use of information on our Service:
      </Text>
      <Text as="p">
        <b>27. Email Communications.</b> We will periodically send you e-mails
        that directly promote the LPT or the Site. When you receive promotional
        communications from us, you may indicate a preference to stop receiving
        further communications from us and you will have the opportunity to
        "opt-out" by following the unsubscribe instructions provided in the
        e-mail you receive or by contacting us directly (please see contact
        information below). Despite your indicated e-mail preferences, we may
        send you service related communications, including notices of any
        updates to the Participation Agreement or Privacy Policy.
      </Text>
      <Text as="p">
        <b>28. Cookies.</b> If you decide at any time that you no longer wish to
        accept Cookies for any of the purposes described above, then you can
        instruct your browser, by changing its settings, to stop accepting
        Cookies or to prompt you before accepting a Cookie from the websites you
        visit. Consult your browser's technical information. If you do not
        accept Cookies, however, you may not be able to use all functionality of
        the Site. If you have any questions about how to disable or modify
        Cookies, please let us know at the contact information provided below.
      </Text>
      <Text as="p">
        <b>29. Changing or Deleting Your Personal Data.</b> All users may
        review, update, correct or delete the Personal Data in their user
        account by contacting us at the address listed below. We will use
        commercially reasonable efforts to honor your request. We may retain an
        archived copy of your records as required by law or for legitimate
        business purposes. If you request a modification of any Personal Data,
        we may not be able to provide you with LPT.
      </Text>
      <Text as="p">
        <b>30. Transfer of Personal Information Outside the EEA.</b> Your
        information, including Personal Information that we collect from you,
        may be transferred to, stored at and processed by us and our affiliates
        and other third parties outside the country in which you reside,
        including, but not limited to the United States, where data protection
        and privacy regulations may not offer the same level of protection as in
        other parts of the world. By using the Site, you agree to this transfer,
        storing or processing. We will take all steps reasonably necessary to
        ensure that your information is treated securely and in accordance with
        this policy.
      </Text>
      <Text as="p">
        <b>31. Automated Decision-Marking.</b> We do not use your Personal
        Information for the purposes of automated decision-making. However, we
        may do so in order to fulfil obligations imposed by law, in which case
        we will inform you of any such processing and provide you with an
        opportunity to object.
      </Text>
      <Text as="p">
        <b>32. Data Retention Periods.</b> We will only retain your Personal
        Information as long as reasonably required in connection with the
        Purpose or as otherwise required or permitted in connection with
        applicable law (for example, for regulatory purposes).
      </Text>
      <Text as="p">
        <b>33. Changes to This Privacy Policy.</b> This Privacy Policy may be
        updated from time to time for any reason. We will notify you of any
        changes to our Privacy Policy by posting the new Privacy Policy at
        siafunds.tech/privacy and we will change the "Last Updated" date above.
        You should consult this Privacy Policy regularly for any changes.
      </Text>
      <Text as="p">
        <b>34. Questions; Contacting Company; Reporting Violations.</b> If you
        have any questions or concerns or complaints about our Privacy Policy or
        our data collection or processing practices, or if you want to report
        any security violations to us, please contact us at the following
        address or phone number:
      </Text>
      <Text as="p">Livepeer, Inc.</Text>
      <Text as="p">85 Broad Street</Text>
      <Text as="p">New York, NY 10004</Text>
      <Text as="p">Attn: Privacy</Text>
    </Container>
  </PageLayout>
);

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
    revalidate: 1,
  };
}

export default PrivacyPolicyPage;
