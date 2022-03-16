import React, { useState, useCallback, useRef } from 'react'

function useHookWithRefCallback(type_data: any, animation: Function) {
  const ref = useRef(null)
  const setRef = useCallback(node => {
    const observer = new IntersectionObserver(
      entries => {
        const entry = entries[0];
        console.log(entries[0])
        if (entry.isIntersecting) {
          console.log(type_data)
          animation()
        }

      },
      { threshold: 0.5, rootMargin: "0px" }
    );
    if (ref.current) {
      // Make sure to cleanup any events/references added to the last instance
    }

    if (node) {
      observer.observe(node);
    }
    ref.current = node
  }, [type_data, animation])

  return [setRef]
}

const Home = () => {

  const [rightDiv, setRighDiv] = useState("my-col right_animation")
  const [leftDiv, setLeftDiv] = useState("my-col left_animation")

  const animation = () => {

    setRighDiv("my-col right_animation show");
    setLeftDiv("my-col left_animation show");
  }
  const [setDivObserver] = useHookWithRefCallback("Home", animation);

  return (
    <div className="body-block" style={{
      backgroundColor: '#FF836C',
    }}>
      <div style={{
        // position: "absolute",
        // height: "800px",
        margin: "auto",
        backgroundImage: "url(./logo.svg)",
        backgroundSize: "28%",
        backgroundPosition: "center 130px",
        backgroundRepeat: "no-repeat",
      }}>
        <div className="vanessa-lopez">Vanessa López</div>
        <div ref={setDivObserver}
          style={{
            display: 'flex',
          }}
        >
          <div className={leftDiv} >
            <div className="vannelope">vannelope</div>
            <div className="vannelope-text">
              I’m a Colombian designer with background in <br /><span>e-learning</span> and <span>big data management</span> who enjoys creating <span>beautiful human-focused products.</span>
            </div>
          </div>
          <div className={rightDiv}>
            <div className="ux-ui">UX/UI</div>
            <div className="ux-ui-text">
              Photography as a hobby, I love working with businesses from <span>different cultures</span>. I love traveling, dogs and Japanese culture.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const Cases = () => {

  const [stackDiv, setStackDiv] = useState("cases-title stack-animation down")
  const animation = () => {

    setStackDiv("cases-title stack-animation up")
  }
  const [setDivObserver] = useHookWithRefCallback("Cases", animation);

  return (
    <div className="body-block" style={{
      backgroundColor: "#141414",
    }}>

      <div ref={setDivObserver} className="cases"  >Cases</div>
      <div
        style={{
          display: 'flex',
        }}
      >

        <div className="my-col"  >

          <div className={stackDiv}>Homelister app
            <div style={{ display: "inline" }} className="coming-soon-copy">  Comming Soon</div>
          </div>
          <div className="cases-description">
            The new way to sell and buy properties
          </div>

          <div className={stackDiv}>Notarial platform</div>
          <div className="cases-description">  First virtual notary on Latin America</div>

          <div className={stackDiv}>Travel Industry Products</div>
          <div className="cases-description"> Flights, hotels, Cars and you won't believe it, Disney! </div>

          <div className={stackDiv}>Medellín subway  </div>
          <div className="cases-description">  Training virtualization</div>
        </div>
        <div className="cases-img">
          <img src="./logo.svg" alt=""></img>
        </div>
      </div>
    </div>
  )
}


const NoWork = () => {

  const [rightDiv, setRighDiv] = useState("my-col-no-work right-bounce-in")
  const [leftDiv, setLeftDiv] = useState("my-col-no-work left-bounce-in")
  const animation = () => {
    setRighDiv("my-col-no-work right-bounce-in show");
    setLeftDiv("my-col-no-work left-bounce-in show");
  }
  const [setDivObserver] = useHookWithRefCallback("NoWork", animation);


  return (
    <div className="body-block" style={{
      backgroundColor: '#FF836C',
    }}>
      <div className="no-work">No work</div>
      <div className="no-work-subtitle">But still my passion</div>
      <div ref={setDivObserver}
        style={{
          display: 'flex',
        }}
      >
        <div className={leftDiv}>
          <div className="center">
            <div className="no-work-first-word">
              Photo
            </div>
          </div>
          <div className="center">
            <div className="no-work-second-word-left ">
              graphy
            </div>
          </div>
        </div>
        <div className={rightDiv}>
          <div className="center">
            <div className="no-work-first-word">
              Brand
            </div>
          </div>

          <div className="center">
            <div className="no-work-second-word-right">
              ing
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


const Contact = () => {

  const [fadeDiv, setFadeDiv] = useState("contact-container fadeout")
  const animation = () => {

    setFadeDiv("contact-container fadein")
  }
  const [setDivObserver] = useHookWithRefCallback("Contact", animation);

  return (
    <div className="body-block" style={{
      backgroundColor: "#141414",
    }}>
      <div className="contact-title">Say hello</div>
      <div ref={setDivObserver}
        style={{
          display: 'flex',
        }}
      >
        <div className="contact-container">
          <div className="contact-text">
            Wanna be in touch? find me on <span>Dribbble, instagram </span> or Just  <span>Reach me out.</span>
          </div>
        </div>
      </div>
    </div>
  )
}


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
