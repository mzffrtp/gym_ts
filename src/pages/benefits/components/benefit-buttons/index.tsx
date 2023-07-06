import ActionButton from "@/shared/action-button/action-button";
import { SelectedPage } from "@/shared/types/other-types";

type BenBtnPropsType = {
  setSelectedPage: (value: SelectedPage) => void;
};
export default function BenBtn({ setSelectedPage }: BenBtnPropsType) {
  return (
    <div className="relative mt-16">
      <div className="before:content-sparkles before:-bottom-20 before:right-40 before:z-[1] before:absolute before:md:-right-50">
        <ActionButton setSelectedPage={setSelectedPage}>Join Now</ActionButton>
      </div>
    </div>
  );
}
