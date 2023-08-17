import "./globals.css";

export const metadata = {
  title: "Foodie PLanner",
  description: "Plan your best meals with foodie planner",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
