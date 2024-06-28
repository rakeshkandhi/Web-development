import PrintHello from "./PrintHello";

export const MyButton = ({ onClick }: { onClick: () => void }) => {
  return <button onClick={onClick}>Click Me</button>;
};

const EnhancedButton = PrintHello(MyButton);

export const HOC = () => {
  return (
    <div>
      <EnhancedButton />
    </div>
  );
};

export default HOC;
