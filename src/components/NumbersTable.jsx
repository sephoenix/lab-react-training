function NumbersTable({ limit }) {
  let numberArr = [];
  for (let i = 1; i <= limit; i++) {
    numberArr.push(
      <div
        style={{
          backgroundColor: `${i % 2 === 0 ? 'red' : 'white'}`,
          width: '50px',
          heigth: '50px',
        }}
      >
        {i}
      </div>
    );
  }

  return <div>{numberArr.map((num) => num)}</div>;
}

export default NumbersTable;
