import Navbar from "@/components/Navbar";
import '../styles/globals.scss'

export const metadata = {
  title: "Foodie Planner",
  description: "Plan your best meals with foodie planner",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
