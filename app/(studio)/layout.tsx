/** @format */


export const metadata = {
  title: "My Awesome Site",
  description: "Generated by Next + Sanity",
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="max-w-3xl mx-auto py-10">
        {children}
      </body>
    </html>
  );
}