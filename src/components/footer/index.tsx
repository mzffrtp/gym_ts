import { SelectedPage } from "@/shared/types/other-types";
import logo from "@/assets/logobody.png";
import Link from "../links";

type FooterPropsType = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};
export default function Footer({
  selectedPage,
  setSelectedPage,
}: FooterPropsType) {
  return (
    <footer className="py-16 bg-primary-100 drop-shadow">
      <div className="justify-content w-5/6 mx-auto gap-16 md:flex ">
        <div className="basis-1/2 mb-16">
          <img src={logo} />
          <p className="my-5">
            <span className="text-primary-500 text-xl font-bold">
              MT Body Worx
            </span>{" "}
            is more than just a place to sweat. It's a sanctuary where dreams
            become reality, where you discover the strength you never knew you
            had, and where your body works in harmony with your aspirations.
            Join us and experience the extraordinary. Your transformation awaits
            at{" "}
            <span className="text-primary-500 text-xl font-bold">
              MT Body Worx
            </span>
            .
          </p>
          <p>© MT Body Worx All Rights Reserved.</p>
        </div>
        <div className="md:basis-1/4 text-center  md:mt-0 bg-red-50 md:bg-primary-100">
          <h4 className="font-bold mb-5">Links</h4>
          <div className="flex flex-col gap-3 items-center">
            <button className="w-2/3 bg-white hover:bg-primary-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
              <Link
                page="Home"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            </button>
            <button className="w-2/3 bg-white hover:bg-primary-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
              <Link
                page="Benefits"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            </button>
            <button className="w-2/3 bg-white hover:bg-primary-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
              <Link
                page="Our Classes"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            </button>
            <button className="w-2/3 bg-white hover:bg-primary-100 text-gray-800 font-semibold mb-3 py-2 px-4 border border-gray-400 rounded shadow">
              <Link
                page="Contact Us"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            </button>
          </div>
        </div>
        <div className="basis-1/4 mt-10 md:mt-0 text-center">
          <h4 className="font-bold mb-5">Contact Us</h4>
          <div className="flex flex-col gap-5 items-center">
            <div className="flex items-center gap-3 p-3 w-3/4 hover:bg-white hover:rounded-full">
              <img
                className="w-[3rem]"
                src="https://img.icons8.com/external-rabit-jes-detailed-outline-rabit-jes/62/external-pin-navigation-and-maps-rabit-jes-detailed-outline-rabit-jes-2.png"
              />
              <p>Bahceli/Ankara</p>
            </div>
            <div className="flex items-center gap-3 p-3 w-3/4 hover:bg-white hover:rounded-full">
              <img
                className="w-[3rem]"
                src="https://img.icons8.com/ios/50/ringer-volume.png"
              />
              <p>+90 682 89 56</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
