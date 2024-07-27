const Stem = () => {
  return (
    <div className="wrapper">
      <div className="content__wrapper">
        <div className="ellipses-container">
          <h2 className="greeting">
            <span>s</span>
            <span>t</span>
            <span>e</span>
            <span>m</span>
            <span>l</span>
            <span>a</span>
            <span>b</span>
          </h2>

          <div className="ellipses ellipses__outer--thin">
            <div className="ellipses ellipses__orbit"></div>
          </div>

          <div className="ellipses ellipses__outer--thick"></div>
        </div>
      </div>
    </div>
  );
};
export default Stem;
