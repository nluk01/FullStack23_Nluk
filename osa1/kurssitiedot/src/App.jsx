const Header = (props) => {
  return (
    <h1>{props.kurssi}</h1>
  )
}

const Part = (props) => {
  return (
    <p>{props.part} {props.lkm}</p>
  )
}

const Content = (props) => {
  <div>
      <Part part={props.part1} lkm={props.harjoitus1} />
      <Part part={props.part2} lkm={props.harjoitus2} />
      <Part part={props.part3} lkm={props.harjoitus3} />
  </div>
}

const Total = (props) => {
  return (
    <p>Number of exercise {props.yhteensa}</p>
  )
}

const App = () => {
  const kurssi = 'Half Stack application development';

  const part1 = 'Fundamentals of React';
  const harjoitus1 = 10;

  const part2 = 'Using props to pass data';
  const harjoitus2 = 7;

  const part3 = 'State of component';
  const harjoitus3 = 14;

  return (
    <div>
      <Header kurssi={kurssi} />
      <Part part={part1} lkm={harjoitus1} />
      <Part part={part2} lkm={harjoitus2} />
      <Part part={part3} lkm={harjoitus3} />
      <Total yhteensa={harjoitus1 + harjoitus2 + harjoitus3} />
    </div>
  )
}

export default App;
