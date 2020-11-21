import React from "react";
import {
  FaBehance,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaSketch,
  FaHome,
  FaUserFriends,
  FaFolderOpen,
  FaCalendarAlt,
  FaWpforms,
} from "react-icons/fa";
export const links = [
  {
    id: 1,
    url: "#",
    text: "home",
    icon: <FaHome />,
  },
  {
    id: 2,
    url: "#",
    text: "team",
    icon: <FaUserFriends />,
  },
  {
    id: 3,
    url: "#",
    text: "projects",
    icon: <FaFolderOpen />,
  },
  {
    id: 4,
    url: "#",
    text: "calendar",
    icon: <FaCalendarAlt />,
  },
  {
    id: 5,
    url: "#",
    text: "documents",
    icon: <FaWpforms />,
  },
];

export const social = [
  {
    id: 1,
    url: "https://www.facebook.com",
    icon: <FaFacebook />,
  },
  {
    id: 2,
    url: "https://www.twitter.com",
    icon: <FaTwitter />,
  },
  {
    id: 3,
    url: "https://www.linkedin.com",
    icon: <FaLinkedin />,
  },
  {
    id: 4,
    url: "https://www.behance.net",
    icon: <FaBehance />,
  },
];
