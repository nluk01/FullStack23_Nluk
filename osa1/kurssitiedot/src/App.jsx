const Header = ({kurssi}) => {
  return (
    <h1>{kurssi}</h1>
  )
}

const Content = ({part1, harjoitus1, part2, harjoitus2, part3, harjoitus3}) => {
  return (
    <div>
      <p>
        {part1} {harjoitus1}
      </p>
      <p>
        {part2} {harjoitus2}
      </p>
      <p>
        {part3} {harjoitus3}
      </p>
    </div>
  )
}

const Total = ({harjoitus1, harjoitus2, harjoitus3}) => {
  const totalExercises = harjoitus1 + harjoitus2 + harjoitus3;
  return (
    <p>Number of exercises {totalExercises}</p>
  )
}

const App = () => {
  const kurssi = 'Half Stack application development';
  const part1 = 'Fundamentals of React';
  const harjoitus1 = 10;
  const part2 = 'Using props to pass data';
  const harjoitus2 = 7;
  const part3 = 'State of a component';
  const harjoitus3 = 14;

  return (
    <div>
      <Header kurssi={kurssi} />
      <Content
        part1={part1}
        harjoitus1={harjoitus1}
        part2={part2}
        harjoitus2={harjoitus2}
        part3={part3}
        harjoitus3={harjoitus3}
      />
      <Total
        harjoitus1={harjoitus1}
        harjoitus2={harjoitus2}
        harjoitus3={harjoitus3}
      />
    </div>
  );
};

export default App;
