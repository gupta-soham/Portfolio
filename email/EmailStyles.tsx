"use server";
import {
  Html,
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Preview,
  Section,
  Text,
} from "@react-email/components";
// import { Tailwind } from "@react-email/tailwind";

type EmailStylesProps = {
  message: string;
  senderName: string;
  senderEmail: string;
};

export default async function EmailStyles({
  message,
  senderName,
  senderEmail,
}: EmailStylesProps) {
  
  return (
    <Html>
      <Head />
      <Preview> {`New message from you're Portfolio Site`}</Preview>
      {/* <Tailwind> */}
        <Body className="bg-gray-100 text-black">
          <Container>
            <Section className="bg-white blackBorder my-10 p-4 py-4 rounded-md">
              <Heading className="leading-tight text-xl font-bold mb-4">
                You have received a message from {senderName}
              </Heading>
              <Text>{message}</Text>
              <Hr />
              <Text>{`Sender's email: ${senderEmail}`}</Text>
            </Section>
          </Container>
        </Body>
      {/* </Tailwind> */}
    </Html>
  );
}
