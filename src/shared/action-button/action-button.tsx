import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "../types/other-types";
type ActionButtonPropsType = {
  children: React.ReactNode;
  setSelectedPage: (value: SelectedPage) => void;
};

export default function ActionButton({
  children,
  setSelectedPage,
}: ActionButtonPropsType) {
  return (
    <AnchorLink
      className="hover:text-white w-52 rounded-full bg-lime-300 hover:bg-fuchsia-200 text-lg p-2 text-center"
      onClick={() => {
        setSelectedPage(SelectedPage.ContactUs);
      }}
      href={`#${SelectedPage.ContactUs}`}
    >
      {children}
    </AnchorLink>
  );
}
