import {
  Body,
  Container,
  Font,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";

interface EmailTemplateProps {
  verificationCode?: string;
}

export default function VerifyEmailTemplate({
  verificationCode,
}: EmailTemplateProps) {
  const baseUrl = process.env.FE_APP_URL || "";

  return (
    <Html>
      <Tailwind>
        <Head>
          <Font
            fontFamily="Inter"
            fallbackFontFamily="sans-serif"
            webFont={{
              url: "/static/fonts/Inter-Regular.woff2",
              format: "woff2",
            }}
            fontWeight={400}
            fontStyle="normal"
          />

          <Font
            fontFamily="Inter"
            fallbackFontFamily="sans-serif"
            webFont={{
              url: "/static/fonts/Inter-Bold.woff2",
              format: "woff2",
            }}
            fontWeight={700}
            fontStyle="normal"
          />
        </Head>
        <Body className="bg-white font-sans">
          <Container className="m-auto bg-gray-100 p-5">
            <Section className="bg-white">
              <Section className="flex items-center justify-center bg-gray-900 py-5">
                <Img
                  src={`${baseUrl}/static/logo.png`}
                  width="45"
                  height="45"
                  alt="Candysrb Logo"
                />
              </Section>
              <Section className="p-6">
                <Heading className="mb-4 text-lg font-bold text-gray-800">
                  Verifikujte svoju email adresu
                </Heading>
                <Text className="my-6 text-sm/6 text-gray-800">
                  Hvala vam što ste započeli proces registracije novog CandySrb
                  naloga. Želimo da budemo sigurni da ste to zaista vi. Unesite
                  sledeći verifikacioni kod kada bude traženo. Ako ne želite da
                  se registrujete, možete ignorisati ovu poruku.
                </Text>
                <Section className="flex items-center justify-center">
                  <Text className="text-center text-sm font-bold text-gray-800">
                    Verifikacioni kod
                  </Text>

                  <Text className="my-2 text-center text-3xl font-bold text-gray-800">
                    {verificationCode}
                  </Text>
                  <Text className="text-center text-sm text-gray-800">
                    (Ovaj kod je validan 10 minuta)
                  </Text>
                </Section>
              </Section>
              <Hr />
              <Section className="p-6">
                <Text className="my-0 text-sm/6 text-gray-800">
                  CandysSrb nikada neće slati email u kojem traži od vas da
                  otkrijete ili verifikujete vašu lozinku, broj kreditne kartice
                  ili broj bankovnog računa.
                </Text>
              </Section>
            </Section>
            <Text className="px-5 text-xs text-gray-800">
              © 2025, CandySrb d.o.o. Sva prava zadržana. Pogledajte našu&nbsp;
              <Link
                href={`${baseUrl}/politika-privatnosti`}
                target="_blank"
                className="text-sm text-blue-700 underline"
              >
                politiku privatnosti
              </Link>
              .
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}

VerifyEmailTemplate.PreviewProps = {
  verificationCode: "59685378",
} satisfies EmailTemplateProps;
