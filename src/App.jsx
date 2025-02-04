import './App.css'

function App() {

  // <PUT YOUR CODE HERE>

  // </PUT YOUR CODE HERE>
  
  return (
    <div style={{
      height: '100dvh',
      marginLeft: 'auto',
      marginRight: 'auto',
      width: '100dvw',
      display: 'flex',
      justifyContent: 'center',
    }}>
      <div style={{
        maxWidth: '1200px',
        width: '100%',
        padding: '20px 0px',
        display: 'flex',
        flexDirection: 'column',
        gap: 40,
      }}>
        <div style={{
          display: 'flex',
          gap: 20,
          justifyContent: 'center'
        }}>
          <img src='/logo.webp'/>
          <h2 style={{color: '#2c2c2f'}}>Cordillera Digital Interview</h2>
        </div>
        <div style={{
          backgroundColor: '#2c2c2f',
          height: 1,
          width: '100%',
        }}></div>
        {/* <PUT YOUR CODE HERE> */}

        {/* </PUT YOUR CODE HERE */}
      </div>
    </div>
  )
}

export default App
