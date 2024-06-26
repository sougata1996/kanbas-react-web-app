function ClickEvent() {
    const hello = () => {
      alert("Hello World!");
    };
    const good = () => {
      alert("Life is Good!");
    };
    return (
      <div>
        <h2>Click Event</h2>
        <button className="btn btn-primary" onClick={hello}>
          Click Hello 1 </button>
        <button className="btn btn-green" onClick={() => hello()}>
          Click Hello 2 </button>
        <button style={{backgroundColor: 'orange', padding: '5px'}}
          onClick={() => {
            hello();
            good();
          }}
        >
          Click Hello 3
        </button>
      </div>
    );
  }
  export default ClickEvent;