import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <article className="min-h-screen max-w-3xl mx-auto py-12 px-2 sm:px-8 lg:px-12 text-whit rounded-lg shadow-md">
      {/* Back Button */}
      <Link
        className="flex items-center space-x-2 mb-8 text-blue-400 hover:text-blue-500 font-bold"
        href={"/"}
      >
        <FontAwesomeIcon icon={faArrowLeft} className="h-4 w-4 sm:h-5 sm:w-5" />
        <span>Back</span>
      </Link>

      {/* Blog Content */}
      <section className="prose prose-invert md:prose-lg lg:prose-xl mx-auto">
        {children}
      </section>
    </article>
  );
}
