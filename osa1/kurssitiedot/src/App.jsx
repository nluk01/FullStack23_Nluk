const Heaader = ({kurssi}) => {
  <h1>{kurssi}</h1>
}


const App = () => {
  const kurssi = 'Half Stack application development'


  return (
    <div>
      <Header kurssi={kurssi} />

    </div>
  )
}



export default App