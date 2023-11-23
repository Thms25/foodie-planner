import Navbar from "@/components/Navbar";
import '../styles/globals.scss'
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import Provider from "@/auth/Provider";
import { getServerSession } from "next-auth";
config.autoAddCss = false;

export const metadata = {
  title: "Foodie Planner",
  description: "Plan your best meals with foodie planner",
};

export default async function RootLayout({ children }) {
  const session = await getServerSession()

  return (
    <html>
      <body>
        <Provider>
          <Navbar session={session}/>
          {children}
        </Provider>
      </body>
    </html>
  );
}
