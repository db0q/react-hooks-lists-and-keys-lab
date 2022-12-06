
import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const linksATag = links.map((myLink) => (
    <a key={myLink} href={"#"+myLink}>
      {myLink}
    </a>
  ));
  return <nav>{linksATag}</nav>;
}

export default NavBar;
