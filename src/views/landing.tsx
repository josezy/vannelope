
const Home = () => <>

  <div style={{
    // position: "absolute",
    
    width: "1100px",
    height: "800px",
    margin: "auto",
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

const Cases = () => <>
  <div className="body-block" style={{
    
    position: 'absolute', 
    height: "800px", 
    
    backgroundColor:"#141414",
  }}>
    <div className="body-sub-block">
      <div className="cases">Cases</div>
      <div
        style={{
          display: 'flex',
        }}
      >
        <div className="my-col">

          <div className="cases-title">Homelister app 
            <div style={{display: "inline"}} className="coming-soon-copy"> Comming Soon
            
            </div>
          </div>

          <div className="cases-description">
            The new way to sell and buy
          </div>

          <div  className="cases-title">Notarial platform</div>
          <div className="cases-description">  First virtual notary on Latin America</div> 
          
          <div  className="cases-title">Travel Industry Products</div>
          <div  className="cases-description"> Flights, hotels, Cars and you won't believe it, Disney! </div>

          <div className="cases-title">Medellín subway  </div>
          <div className="cases-description">  Training virtualization</div>
        </div>
        <div style={{
            marginLeft:"200px",
            
            display: "flex",


            justifyContent: "center",
          }}className="my-col">
          <img  src="./logo.svg" alt=""></img>
        </div>
      </div>
    </div>
  </div>
  
</>


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