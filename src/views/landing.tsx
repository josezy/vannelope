
const Home = () => <>
  <div style={{
    // position: "absolute",
    width: "100%",
    height: "800px",
    backgroundImage: "url(./logo.svg)",
    backgroundSize: "28%",
    backgroundPosition: "center 130px",
    backgroundRepeat: "no-repeat",
  }}>
    <div className="vanessa-lopez">Vanessa López</div>
    <div
      style={{
        display: 'flex',
      }}
    >
      <div className="my-col">
        <div className="vannelope">vannelope</div>
        <div className="vannelope-text">
          I’m a Colombian designer with background in <br/><span>e-learning</span> and <span>big data management</span> who enjoys creating <span>beautiful human-focused products.</span>
        </div>
      </div>
      <div className="my-col">
        <div className="ux-ui">UX/UI</div>
        <div className="ux-ui-text">
          Photography as a hobby, I love working with businesses from <span>different cultures</span>. I love traveling, dogs and Japanese culture.
        </div>
      </div>
    </div>
  </div>
</>

const Cases = () => <></>

const NoWork = () => <></>

const Contact = () => <></>


export const Landing = () => {
  return (
    <>
      <Home />
      <Cases />
      <NoWork />
      <Contact />
    </>
  )
}