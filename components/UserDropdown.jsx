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

// Components
import NewRecipe from "@/components/NewRecipe";

// Auth
import { getProviders } from 'next-auth/react';
import { signIn, signOut } from "next-auth/react";

export default function UserDropdown ({ session }) {
  const [providers, setProviders] = useState(null);
  const [open, setOpen] = useState(false);
  const [modalOpen, setModaOpen] = useState(false);
  const closeModal = () => setModaOpen(false);
  const openModal = () => setModaOpen(true);

  useEffect(() => {
    async function settingProviders() {
      const res = await getProviders()
      setProviders(res)
    }

    settingProviders()
  }, []);

  return (
    <>
      <motion.div animate={open ? "open" : "closed"} className="relative">
        <button
          onClick={() => setOpen((pv) => !pv)}
          className="flex items-center gap-2 px-3 py-2 rounded-md text-light text-lg hover:text-primary hover:bg-light transition-colors"
        >
          <motion.span>
            <FaRegUser variants={iconVariants} />
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
              <DropdownItem setOpen={setOpen} Icon={RxDashboard} text="Dashboard" />
              <DropdownItem setOpen={setOpen} Icon={MdDateRange} text="Calendar" />
              <DropdownItem setOpen={setOpen} Icon={FiPlusSquare} text="Create A Recipe" func={openModal} />
              <DropdownItem setOpen={setOpen} Icon={CiLogout} text="Log Out" func={signOut} />
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
      <AnimatePresence initial={false} wait>
          {modalOpen && (
            <NewRecipe
              modalOpen={modalOpen}
              handleClose={closeModal}
            />
          )}
        </AnimatePresence>
    </>
  );
};

const DropdownItem = ({ text, Icon, setOpen, func, providerId }) => {
  return (
    <motion.li
      variants={itemVariants}
      onClick={() => {
        setOpen(false);
        if (func) {
          providerId ? func(providerId) : func()
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
