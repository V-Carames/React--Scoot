function IntroBlock({ className, heading }) {
  return (
    <section className={`intro-block ${className || ""}`}>
      <div className="intro-block__content ">
        <h1 className="intro-block__heading ">{heading}</h1>
      </div>
    </section>
  );
}

export default IntroBlock;
