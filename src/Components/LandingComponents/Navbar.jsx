import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import { Link, useLocation } from "react-router-dom";

const navigationItems = [
  { name: "Home", href: "/" },
  {
    name: "Services",
    href: "/services",
    dropdown: [
      {
        name: "Seasonal Demand Forecasting",
        href: "/demandForecasting",
        description: "Predict and optimize seasonal product demand trends.",
      },
      {
        name: "Procurement Order Management",
        href: "/orderManagement",
        description: "Automate and track procurement orders efficiently.",
      },
      {
        name: "Freight and Logistics Operations",
        href: "/logisticOperations",
        description: "Manage shipping, routing, and delivery logistics.",
      },
      {
        name: "3PL Operations Management",
        href: "/PlOperations",
        description: "Streamline third-party logistics provider processes.",
      },
      {
        name: "Amazon Inventory Reimbursements",
        href: "/amazonInventory",
        description: "Claim reimbursements for lost or damaged inventory.",
      },
      {
        name: "Amazon FBA/AWD Inventory Management",
        href: "/amazonFba",
        description: "Monitor and manage Amazon FBA & AWD inventory.",
      },
      {
        name: "DTC Supply Chain Management",
        href: "/DTCSupplyChain",
        description: "End-to-end visibility and control of DTC logistics.",
      },
    ],
  },


  { name: "Experience", href: "/experience" },
  {
    name: "Projects", href: "/projects",
    dropdown: [
      { name: "Project1", href: "/project1" },
      { name: "Project2", href: "/project1" },
      { name: "Project3", href: "/project1" },
      { name: "Project4", href: "/project1" },
      { name: "Project5", href: "/project1" },
      { name: "Project6", href: "/project1" },
    ]

  },
  { name: "CV", href: "/cv" },
  { name: "Contact", href: "/contact" },
];

function Navbar() {
  const location = useLocation();
  const [hoverTab, setHoverTab] = useState(null);
  const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0 });
  const navRefs = useRef([]);
  const dropdownRef = useRef(null);
  const [isDropdownToggled, setIsDropdownToggled] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isMobileProjectsOpen, setIsMobileProjectsOpen] = useState(false);

  const currentPath = location.pathname;
  const activeTabByPath = navigationItems.find((item) =>
    item.dropdown
      ? item.dropdown.some((sub) => sub.href === currentPath)
      : item.href === currentPath
  )?.name;

  const activeOrHoverTab = hoverTab || activeTabByPath;

  useEffect(() => {
    const index = navigationItems.findIndex(
      (item) => item.name === activeOrHoverTab
    );
    const el = navRefs.current[index];
    if (el) {
      const { offsetLeft, offsetWidth } = el;
      setUnderlineStyle({ left: offsetLeft, width: offsetWidth });
    }
  }, [activeOrHoverTab, location.pathname]);

  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsDropdownToggled(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <Disclosure as="nav" className="bg-[#08374A] py-4">
      {({ close }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <div className="font-bold text-3xl text-[#CCD8DC]">Ameer Hamza</div>

              <div className="flex items-center lg:hidden">
                <DisclosureButton className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white">
                  <Bars3Icon className="block h-6 w-6 ui-open:hidden" />
                  <XMarkIcon className="hidden h-6 w-6 ui-open:block" />
                </DisclosureButton>
              </div>

              <div className="hidden lg:flex space-x-8 relative">
                {navigationItems.map((item, index) => {
                  const isHovering = hoverTab === item.name;
                  const isServicesOpen =
                    (item.name === "Services" || item.name == "Projects") &&
                    (isHovering || isDropdownToggled);

                  return (
                    <div
                      key={item.name}
                      ref={(el) => (navRefs.current[index] = el)}
                      className="relative"
                      onMouseEnter={() => setHoverTab(item.name)}
                      onMouseLeave={() => {
                        if (!isDropdownToggled) setHoverTab(null);
                      }}
                    
                    >
                      <div className="flex items-center text-white font-medium px-3 py-2 gap-1 cursor-pointer">
                        {item.dropdown ? (
                          <>
                            <Link onClick={() =>
                              setIsDropdownToggled(false)

                            }>
                              {item.name}
                            </Link>
                            <ChevronDownIcon
                              onClick={(e) => {
                                e.stopPropagation();
                                setIsDropdownToggled((prev) =>
                                  (item.name === "Services" || item.name == "Projects") ? !prev : prev
                                );
                              }}
                              className={`h-4 w-4 transition-transform duration-200 cursor-pointer ${isServicesOpen ? "rotate-180" : "rotate-0"
                                }`}
                            />
                          </>
                        ) : (
                          <Link to={item.href}>{item.name}</Link>
                        )}
                      </div>
                      {item.dropdown && (
                        <AnimatePresence>
                          {(isServicesOpen || isDropdownToggled) && (
                            <motion.div
                              ref={dropdownRef}
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -10 }}
                              transition={{ duration: 0.25, ease: "easeInOut" }}
                              className="fixed left-0 w-screen z-30 bg-[#08374A] p-6 hidden lg:flex"
                            >
                              <div className="w-1/4 pr-2 border-r border-[#092936] p-3">
                                <Link
                                  to={item.href}
                                  className="hover:text-[#08374A]"
                                  onClick={() => {
                                    setIsDropdownToggled(false);
                                    setHoverTab(null);
                                  }}
                                >
                                  <p className="block rounded-md px-3 py-2 font-semibold text-[#CCD8DC] transition hover:text-white">
                                    {item.name === "Services" ? "All Services" : "All Projects"}
                                  </p>
                                  <p className="px-3 text-gray-400 font-sm hover:text-white">
                                    {item.name === "Services"
                                      ? "Discover services that streamline, scale, and secure your supply chain."
                                      : "Browse through our featured projects and case studies."}
                                  </p>
                                  <p className="px-3 mt-2 text-[#CCD8DC] underline hover:text-white">
                                    Learn More
                                  </p>
                                </Link>
                              </div>
                              <div className="w-full flex flex-wrap pl-[20px] gap-4">
                                {item.dropdown.map((sub) => (
                                  <Link
                                    onClick={() => {
                                      setIsDropdownToggled(false);
                                      setHoverTab(null);
                                    }}
                                    key={sub.name}
                                    to={sub.href}
                                    className="w-[calc(33.33%-1rem)] rounded-md px-3 py-2 bg-[#092936] hover:bg-[#2F5260] transition-colors"
                                  >
                                    <div className="text-sm font-medium text-white">{sub.name}</div>
                                    <p className="text-xs py-2 text-gray-300">{sub.description}</p>
                                  </Link>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      )}
                      
                    </div>
                  );
                })}
  
                <span
                  className="absolute top-0 h-[2px] bg-white transition-all duration-300 ease-in-out"
                  style={{
                    left: `${underlineStyle.left}px`,
                    width: `${underlineStyle.width}px`,
                  }}
                />
                <span
                  className="absolute bottom-0 h-[2px] bg-white transition-all duration-300 ease-in-out"
                  style={{
                    left: `${underlineStyle.left}px`,
                    width: `${underlineStyle.width}px`,
                  }}
                />
               
              </div>
               
            </div>
            
          </div>

          {/* Mobile menu */}
         <DisclosurePanel className="lg:hidden">
  <div className="pt-2 pb-3 space-y-1">
    {navigationItems.map((item) => (
      <div key={item.name} className="space-y-1">
        {item.dropdown ? (
          <>
            {/* Dropdown toggle */}
            <div
              className="flex items-center justify-start gap-2 px-4 py-2 text-gray-300 hover:text-white cursor-pointer"
              onClick={() => {
                if (item.name === "Services") {
                  setIsMobileServicesOpen((prev) => !prev);
                  setIsMobileProjectsOpen(false); // close the other
                } else if (item.name === "Projects") {
                  setIsMobileProjectsOpen((prev) => !prev);
                  setIsMobileServicesOpen(false); // close the other
                }
              }}
            >
              <span>{item.name}</span>
              <ChevronDownIcon
                className={`h-4 w-4 transform transition-transform duration-200 ${
                  (item.name === "Services" && isMobileServicesOpen) ||
                  (item.name === "Projects" && isMobileProjectsOpen)
                    ? "rotate-180"
                    : "rotate-0"
                }`}
              />
            </div>

            {/* Services dropdown */}
            {item.name === "Services" && isMobileServicesOpen && (
              <div className="pl-6">
                <Link
                  to={item.href}
                  onClick={close}
                  className="block px-4 py-2 text-white font-semibold hover:text-white"
                >
                  All Services
                </Link>
                {item.dropdown.map((sub) => (
                  <Link
                    key={sub.name}
                    to={sub.href}
                    onClick={close}
                    className="block px-4 py-1 text-gray-400 hover:text-white"
                  >
                    {sub.name}
                  </Link>
                ))}
              </div>
            )}

            {/* Projects dropdown */}
            {item.name === "Projects" && isMobileProjectsOpen && (
              <div className="pl-6">
                <Link
                  to={item.href}
                  onClick={close}
                  className="block px-4 py-2 text-white font-semibold hover:text-white"
                >
                  All Projects
                </Link>
                {item.dropdown.map((sub) => (
                  <Link
                    key={sub.name}
                    to={sub.href}
                    onClick={close}
                    className="block px-4 py-1 text-gray-400 hover:text-white"
                  >
                    {sub.name}
                  </Link>
                ))}
              </div>
            )}
          </>
        ) : (
          <Link
            to={item.href}
            onClick={close}
            className="block px-4 py-2 text-gray-300 hover:text-white"
          >
            {item.name}
          </Link>
        )}
      </div>
    ))}
  </div>
</DisclosurePanel>

        </>
      )}
    </Disclosure>
  );
}

export default Navbar;
