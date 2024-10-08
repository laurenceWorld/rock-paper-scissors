import { useState } from 'react';
import './App.css';
import Box from './component/Box';

const choice = {
  rock: {
    name: 'Rock',
    img: 'https://i.pinimg.com/564x/82/e6/75/82e675bec3c5052c1abcd32202649038.jpg',
  },
  scissors: {
    name: 'Scissors',
    img: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhUTEhMVFRUWEhcYFhYXFhcXExgXFRUWFxYYFRcaHSkgGB0lGxcVIjEjJSorMC4uFx8zODUtNygtLisBCgoKDg0NDg0NDysZFRkrKystKysrKys3LSsrKysrKystNystLSstLS0rKysrKys3KysrKysrKysrKysrKysrK//AABEIALcBEwMBIgACEQEDEQH/xAAcAAEAAgIDAQAAAAAAAAAAAAAABgcECAECBQP/xABEEAABAwICBwQGCAMGBwAAAAABAAIDBBEhMQUGEkFRYYEHE3GRIjJCUqGxI2JygpLB0fAzU9IUFRdDk6IINGOywuHx/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAH/xAAVEQEBAAAAAAAAAAAAAAAAAAAAEf/aAAwDAQACEQMRAD8AvFdJ2bTSAS0kEbQzHMLuiCJTawT0j+7qWCRvsyN9EuHG2RPLBe5o3TUE/wDDeNr3Tg/yOfRZGkKBk7CyQXB8wdxB3FVrp7QclK7HFhPovHyPAoLTRVlovWyohsHHvG8H59HZ+d1L9Fa1081gXd273X4Do7I/BB7yIEQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQF854GvaWvAc0ixByK+iIK71j1VdDeSG748yM3M8eI5+fFRiyutRXWHVFsl5ILNfmW5Md4e6fggiOitPT09gx92+470mdBu6WUy0VrlDJZso7p3E4sPXd181X9RTOjcWvaWuGYOa+SC6WPBAIIIORGIPgV2VR6M0xNAfo3kDe04sPiFMtE66xvs2Yd273hjGfzb+8UEqRdY5A4AtIIORBuD4FdkBERAREQEREBERAREQEREBERAREQEREBERAREQEREBFHdP6t96TJC4xy77EhrvG2R5qFVNfWU7tl8krSNxc4jpfBBa6Krodb6pv+Zfxa0/ldZsOvc49ZkbujgfmgsRFCodfx7cB+6+/wACFnQ670xzEjfFoI+BQexpbREVQ20jcRk4YOb4H8slX2ndW5ae7rbcfvgZfaG75KcQ6z0jspgPtBzfmFnxV0UnqyRuvuDmn80FOkLhWFpzU5kl3wWY73fYPh7vyUFrqN8LiyRpa7gfmDkR4IProzS80BvE8gb25tPi3JTXRGukUlmzDu3e9nGfzb18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',
  },
  paper: {
    name: 'Paper',
    img: 'data:image/jpeg;base64,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',
  },
};

function App() {
  const [userSelect, setUserSelect] = useState(null);
  const [computerSelect, setComputerSelect] = useState(null);
  const [result, setResult] = useState('');

  const play = (userChoice) => {
    setUserSelect(choice[userChoice]);
    const computerChoice = randomChoice();
    setComputerSelect(computerChoice);
    const gameResult = judgment(choice[userChoice], computerChoice);
    setResult(gameResult);
  };

  const randomChoice = () => {
    let itemArray = Object.keys(choice); // 객체에 키값만 뽑아서 어레이로 만들어주는 함수다
    let randomItem = Math.floor(Math.random() * itemArray.length);
    let final = itemArray[randomItem];
    return choice[final];
  };

  const reset = () => {
    setUserSelect(null);
    setComputerSelect(null);
    setResult('');
  };

  const judgment = (user, computer) => {
    if (user.name === computer.name) {
      return 'tie';
    } else if (user.name === 'Rock') {
      return computer.name === 'Scissors' ? 'win' : 'lose';
    } else if (user.name === 'Scissors') {
      return computer.name === 'Paper' ? 'win' : 'lose';
    } else if (user.name === 'Paper') {
      return computer.name === 'Rock' ? 'win' : 'lose';
    }
  };

  return (
    <div>
      <h1 className='header main'>Rock Scissors Paper!</h1>
      <div className='main'>
        <Box title='You' item={userSelect} result={result} />
        <Box title='Computer' item={computerSelect} result={result} />
      </div>

      <div className='main'>
        <button onClick={() => play('rock')}>✊</button>
        <button onClick={() => play('scissors')}>✂️</button>
        <button onClick={() => play('paper')}>✋</button>
      </div>
      <div className='main reset'>
        <button onClick={() => reset()}>🔄</button>
      </div>
    </div>
  );
}

export default App;
