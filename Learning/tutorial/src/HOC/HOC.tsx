import PrintHello from "./PrintHello";


const EnhancedButton = PrintHello(MyButton);

const HOC = () => {
  return (
    <div>
      <EnhancedButton />
    </div>
  );
};

export default HOC;
