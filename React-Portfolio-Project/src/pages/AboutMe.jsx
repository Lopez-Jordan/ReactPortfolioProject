export default function About() {
    
    const secondDiv = {
      display: 'flex',
    }

    const mainDiv = {
      marginRight: '60px',
      marginLeft: '60px'
    }


    return (
      <>
        <div style={mainDiv}>
          <h1 style={{marginTop: '30px', marginBottom: '30px'}}>Who Is Jordan Lopez?</h1>
          <div style={secondDiv}>
            <img style={{height: '250px', width: 'auto', borderRadius: '20px', marginRight: '50px'}} src="/me.png" alt="picture of me" />
            <p>
              Nunc pharetra finibus est at efficitur. Praesent sed congue diam.
              Integer gravida dui mauris, ut interdum nunc egestas sed. Aenean sed
              mollis diam. Nunc aliquet risus ac finibus porta. Nam quis arcu non
              lectus tincidunt fermentum. Suspendisse aliquet orci porta quam semper
              imperdiet. Praesent euismod mi justo, faucibus scelerisque risus cursus
              in. Sed rhoncus mollis diam, sit amet facilisis lectus blandit at.
            </p>
          </div>
        </div>
      </>
    );
  }