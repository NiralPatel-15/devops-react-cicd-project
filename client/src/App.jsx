import NiralPortfolio from "./Components/NiralPortfolio";
import VishwaPortfolio from "./Components/VishwaPortfolio";

function App() {
  return (
    <div style={{ textAlign: "center", fontFamily: "Arial", padding: "20px" }}>
      <h1>DevOps CI/CD Portfolio Project</h1>
      <p>Collaborative DevOps project using GitHub, Docker, and CI/CD</p>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "30px",
          flexWrap: "wrap",
          marginTop: "40px",
        }}
      >
        <NiralPortfolio />
        <VishwaPortfolio />
      </div>
    </div>
  );
}

export default App;
