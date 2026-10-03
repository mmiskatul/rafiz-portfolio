import './globals.css';

export const metadata = {
  metadataBase: new URL('https://moshfiq029.github.io'),
  title: "Moshfiq Ahmed Rafi | Software Engineer & AI Researcher",
  description: "Portfolio of Moshfiq Ahmed Rafi: 4th-year Software Engineering student at DIU, AI & Computer Vision researcher, International IT Volunteer (Korea), and IIT Bombay Summer School participant.",
  keywords: [
    "Moshfiq Ahmed Rafi",
    "Software Engineer Bangladesh",
    "AI Researcher",
    "Computer Vision",
    "Daffodil International University",
    "IIT Bombay Summer School",
    "WFK IT Volunteer Korea",
    "Next.js Portfolio",
    "Linux Systems",
  ],
  authors: [{ name: "Moshfiq Ahmed Rafi" }],
  openGraph: {
    title: "Moshfiq Ahmed Rafi | Software Engineer & AI Researcher",
    description: "Explore technical projects, international exchange experiences, research in computer vision, and leadership milestones.",
    url: "https://moshfiq029.github.io",
    siteName: "Moshfiq Ahmed Rafi Portfolio",
    images: [
      {
        url: "/images/profile.jpg",
        width: 1024,
        height: 1024,
        alt: "Moshfiq Ahmed Rafi Portrait",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>{children}</body>
    </html>
  );
}
