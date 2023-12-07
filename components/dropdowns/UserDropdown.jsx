// Icons
import { FiPlusSquare } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";
import { CiLogin, CiLogout } from "react-icons/ci";

// Animate
import { motion, AnimatePresence } from "framer-motion";

// Hooks
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

// Components
import Image from "next/image";

// Auth
import { getProviders } from "next-auth/react";
import { signIn, signOut } from "next-auth/react";

export default function UserDropdown({ session }) {
  const [providers, setProviders] = useState(null);
  const [open, setOpen] = useState(false);

  const router = useRouter();
  const createRecipe = () => router.push("/recipe/create");
  const toDashboard = () => router.push("/dashboard");
  const toCalendar = () => router.push("/calendar");

  useEffect(() => {
    async function settingProviders() {
      const res = await getProviders();
      setProviders(res);
    }

    settingProviders();
  }, []);

  return (
    <motion.div animate={open ? "open" : "closed"} className="relative">
      <button
        onClick={() => setOpen((pv) => !pv)}
        className="flex items-center gap-2 px-3 py-2 rounded-md text-light text-lg hover:text-primary hover:bg-light transition-colors"
      >
        <motion.span>
          {session ? (
            <Image
              priority
              width={37}
              height={37}
              src={session.user.image}
              className="rounded-full"
              alt="user logo"
            />
          ) : (
            <FaRegUser variants={iconVariants} size={24} />
          )}
        </motion.span>
      </button>

      <motion.ul
        initial={wrapperVariants.closed}
        variants={wrapperVariants}
        style={{ originY: "top", translateX: "-75%" }}
        className="bg-primary flex z-10 flex-col gap-2 p-2 rounded-lg shadow-xl absolute top-[180%] w-48 overflow-hidden"
      >
        {session ? (
          <>
            <DropdownItem
              setOpen={setOpen}
              Icon={RxDashboard}
              text="Dashboard"
              func={toDashboard}
            />
            <DropdownItem
              setOpen={setOpen}
              Icon={MdDateRange}
              text="Calendar"
              func={toCalendar}
            />
            <DropdownItem
              setOpen={setOpen}
              Icon={FiPlusSquare}
              text="Create A Recipe"
              func={createRecipe}
            />
            <DropdownItem
              setOpen={setOpen}
              Icon={CiLogout}
              text="Log Out"
              func={signOut}
            />
          </>
        ) : (
          <>
            {providers && (
              <>
                {Object.values(providers)?.map((provider) => (
                  <DropdownItem
                    key={provider.id}
                    setOpen={setOpen}
                    Icon={CiLogin}
                    text={`Log in with ${provider.name}`}
                    func={signIn}
                    providerId={provider.id}
                  />
                ))}
              </>
            )}
          </>
        )}
      </motion.ul>
    </motion.div>
  );
}

const DropdownItem = ({ text, Icon, setOpen, func, providerId }) => {
  return (
    <motion.li
      variants={itemVariants}
      onClick={() => {
        setOpen(false);
        if (func) {
          providerId ? func(providerId) : func();
        }
      }}
      className="flex items-center gap-2 w-full p-2 text-sm font-medium whitespace-nowrap rounded-md hover:bg-light text-slate-700 hover:text-primary transition-colors cursor-pointer"
    >
      <motion.span variants={actionIconVariants}>
        <Icon />
      </motion.span>
      <span>{text}</span>
    </motion.li>
  );
};

const wrapperVariants = {
  open: {
    scaleY: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  closed: {
    scaleY: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.1,
    },
  },
};

const iconVariants = {
  open: { rotate: 180 },
  closed: { rotate: 0 },
};

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
    },
  },
  closed: {
    opacity: 0,
    y: -15,
    transition: {
      when: "afterChildren",
    },
  },
};

const actionIconVariants = {
  open: { scale: 1, y: 0 },
  closed: { scale: 0, y: -7 },
};
