import Canvas from "./components/Canvas";
import Experience from "./components/Experience";
import Header from "./components/Header";
import Edit from "./components/Edit";
import PersonalDetails from "./components/PersonalDetails";
import Skills from "./components/Skills";
import Wrapper from "./components/Wrapper";
import Container from "./components/Container";
function App() {
  return (
    <Container>
      <Header></Header>
      <Canvas>
        <PersonalDetails></PersonalDetails>
        <Wrapper>
          <Experience type="education"></Experience>
          <Experience type="work"></Experience>
          <Skills></Skills>
        </Wrapper>
      </Canvas>
      <Edit></Edit>
    </Container>
  );
}

export default App;
