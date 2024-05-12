import './App.css';

function App() {
  return (
    <div id="screen">
      <h1>HUNGRY FELLAS</h1>
      <p>COMING SOON</p>
      <video autoPlay loop muted id="gameplay-video">
        <source src="/gameplay.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default App;
