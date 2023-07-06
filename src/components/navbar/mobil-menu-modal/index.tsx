import Link from "@/components/links";
import { SelectedPage } from "@/shared/types/other-types";
import { XMarkIcon } from "@heroicons/react/20/solid";

type MobimMenuModalPropsType = {
  setMenuToogled: React.Dispatch<React.SetStateAction<boolean>>;
  menuToogled: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

export default function MobilMenuModal({
  setMenuToogled,
  menuToogled,
  selectedPage,
  setSelectedPage,
}: MobimMenuModalPropsType) {
  return (
    <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl">
      <div className="flex justify-end p-11">
        <button onClick={() => setMenuToogled(!menuToogled)}>
          <XMarkIcon className="h-5 w-5 text-red-700" />
        </button>
      </div>
      {/* menu items */}
      <div className="ml-[33%] flex flex-col gap-10 text-xl">
        <Link
          page="Home"
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
        <Link
          page="Benefits"
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
        <Link
          page="Our Classes"
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
        <Link
          page="Contact Us"
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
      </div>
    </div>
  );
}
