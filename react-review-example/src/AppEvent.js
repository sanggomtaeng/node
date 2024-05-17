function Button({ onMySave, children }) {
  return (
    <button onClick={()=>{onMySave("자식에서 전달")}}>
      {children}
    </button>
  );
}

function PlayButton({ movieName, play }) {
  function handlePlayClick(msg) {
    alert(`${msg} Playing ${movieName}!`);
    play();
  }

  return (
    <Button onMySave={handlePlayClick}>
      Play "{movieName}"
    </Button>
  );
}

function UploadButton({upload}) {
  return (
    <Button onMySave={() => upload()}>
      Upload Image
    </Button>
  );
}

function Toolbar( {onClick1, onClick2} ) {
  return (
    <div>
      <PlayButton play={onClick1} movieName="Kiki's Delivery Service" />
      <UploadButton upload={onClick2} />
    </div>
  );
}


function App() {
  return (
    <div className="App">
      <Toolbar onClick1={() => alert("click1")} onClick2={() => alert("click2")}></Toolbar>
    </div>
  );
}

export default App;