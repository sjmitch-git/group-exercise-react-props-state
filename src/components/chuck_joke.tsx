interface ChuckJokeProps {
  joke: string;
}

const ChuckJoke: React.FC<ChuckJokeProps> = ({ joke }) => <li>{joke}</li>;

export default ChuckJoke;
