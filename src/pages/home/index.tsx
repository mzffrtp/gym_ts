import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/action-button/action-button";
import AnchorLink from "react-anchor-link-smooth-scroll";

export default function HomePage() {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
  return (
    <section id="home">
      {/* image and main header */}
      <div>
        {/* main header */}
        <div>
          {/* headings */}
          <div>
            <div>
              <div>
                <img alt="home page text" src={"backgoround gelecek"} />
              </div>
            </div>
            <p>
              Unrivaled training for fitness. You are very near to get your{" "}
              <span>DREAM Body</span>now!
            </p>
          </div>
          {/* actions */}
          <div>
            <ActionButton> Join Now</ActionButton>
            <AnchorLink>
              <p>Learn More</p>
            </AnchorLink>
          </div>
        </div>
      </div>
    </section>
  );
}
