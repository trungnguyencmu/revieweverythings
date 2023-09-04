/** @format */

import { usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";

export const useActiveNav = () => {
  // const [isOnline, setIsOnline] = useState(null);
  const pathName = usePathname();

  const [activeNav, setActiveNav] = useState(false);
  const [activePage, setActivePage] = useState<string>(pathName || "");


  // useEffect(() => {
  //   setActiveNav(isActivePage(slug));
  // }, [slug]);

  const isActivePage = (slug: string): boolean => {
    return activePage === slug;
  };

 
  return activeNav;
}
