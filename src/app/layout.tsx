import type { Metadata } from "next";
import { Epilogue } from "next/font/google";
import "./globals.css";

const epilogueFont = Epilogue({
    subsets: ["latin"],
    weight: ["400", "700"],
    variable: "--font-epilogue",
});

export const metadata: Metadata = {
    title: "Suite Landing Page Challenge for Frontend Mentor",
    description:
        "This is a solution to the Suite Landing Page challenge from Frontend Mentor.",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={`${epilogueFont.variable}`}>
            <body>{children}</body>
        </html>
    );
}
