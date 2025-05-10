import IntroBlock from "../components/blocks/IntroBlock";

function NotFound() {
  return (
    <div>
      <IntroBlock
        className="intro-block--404"
        heading={
          <>
            <span className="intro-block__error">404</span> Something went
            wrong...
          </>
        }
      />
    </div>
  );
}

export default NotFound;
