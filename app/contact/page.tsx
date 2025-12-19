import ContactInner from "./ContactInner";

type Props = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function ContactPage({ searchParams }: Props) {
  const sp = await searchParams;
  const success = sp.success === "1";

  return <ContactInner success={success} />;
}
