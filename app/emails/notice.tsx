import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Tailwind,
  Text
} from '@react-email/components';

interface NoticeEmailProps {
  username?: string;
  userImage?: string;
  invitedByUsername?: string;
}

const NoticeEmail = ({
  username = 'Murphy',
  userImage = `https://lp2.email.ibm.com/rs/298-RSE-650/images/IBM_logo.png`,
  invitedByUsername = 'Wholesale',
}: NoticeEmailProps) => {
  const previewText = `Join ${invitedByUsername} on Academy`;

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body className="bg-[#e0e0e0] my-auto mx-auto font-sans">
          <Container className="bg-white rounded my-[40px] mx-auto  w-[600px]">
            <Section>
              <div className="flex justify-between items-center w-full py-0 bg-gray-100">
                <Text className="text-1xl font-semibold px-1">WW Academy</Text>
                <Img
                  alt="IBM"
                  src={userImage}
                  className="max-w-43 px-1"
                  width="43"
                />
              </div>
              <div className="p-8 bg-gray-600 text-3xl leading-10 text-white">
                <span>IBM App Connect Enterprise 培训</span><br /><br />
                <span className="font-semibold text-2xl leading-15">（202204期）ACE 录取通知书</span>
              </div>
            </Section>
            <Section className="px-6">
              <Text className="text-xl font-semibold text-blue-600">
                DEVELOPER UPDATE
              </Text>
              <Text className="text-base">
                Hi {username},
              </Text>
              <Text className="text-base">
                We strive to make Google Play a safe and trusted experience for users.
              </Text>
              <Text className="text-base">
                We've added clarifications to our{' '}
                <Link href="#" className="text-blue-600 underline">
                  Target API Level policy
                </Link>
                . Because this is a clarification, our enforcement standards and practices for this policy remain the same.
              </Text>
            </Section>
            <Section className="px-6 py-1">
              <Text className="text-base">
                We’re noting exceptions to the{' '}
                <Link href="#" className="text-blue-600 underline">
                  Target API Level policy
                </Link>
                , which can be found in our updated{' '}
                <Link href="#" className="text-blue-600 underline">
                  Help Center article.
                </Link>
                These exceptions include permanently private apps and apps that
                target automotive or wearables form factors and are bundled within
                the same package.{' '}
                <Link href="#" className="text-blue-600 underline">
                  Learn more
                </Link>
              </Text>
            </Section>
            <Section className="px-6">
              <Hr className="border-t-2 border-gray-300 my-4" />
              <Text className="text-base">Thank you,</Text>
              <Text className="text-2xl font-semibold">The Google Play team</Text>
            </Section>
            <Section className="text-center mt-[32px]  bg-black">
              <Text className="text-[#f3f3f3] text-[12px] leading-[12px]">
                ©2024 Designed By  WW Academy
              </Text>
              <Text className="text-[#f3f3f3] text-[12px] leading-[12px]">
                秉承技术创新，鼎力协助各部门完成邮件业务数字化转型，实现邮件数智化。
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default NoticeEmail;