
import BackButton from "../components/BackButton";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <article className="min-h-screen max-w-3xl mx-auto py-12 px-2 sm:px-8 lg:px-12 text-whit rounded-lg shadow-md">
     
     <BackButton/>

      <section className="prose prose-invert md:prose-lg lg:prose-xl mx-auto">
        {children}
      </section>
    </article>
  );
}
