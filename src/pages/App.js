import { useState } from "react";
import gitLogo from "../assets/github.svg";
import Input from "../components/Input";
import ItemRepo from "../components/ItemRepo";
import Button from "../components/Button";
import { api } from "../services/api";

import { Container } from "./styles";

function App() {
  const [repos, setRepos] = useState([]);
  const [currentRepo, setCurrentRepo] = useState("");

  const handleSearchRepo = async () => {
    const { data } = await api.get(`repos/${currentRepo}`);

    if (data.id) {
      const exist = repos.find((repo) => repo.id === data.id);

      if (!exist) {
        setRepos((prev) => [...prev, data]);
        setCurrentRepo("");
        return;
      }
    }
    alert("Repositório não encontrado");
  };

  const handleRemoveRepo = (id) => {
    setRepos(repos.filter((repo) => repo.Id === id));
  };

  return (
    <Container>
      <img src={gitLogo} width={72} height={72} alt="GitHub Logo" />
      <Input
        value={currentRepo}
        onChange={(e) => setCurrentRepo(e.target.value)}
      />
      <Button onClick={handleSearchRepo} />
      {repos.map((repo) => (
        <ItemRepo repo={repo} handleRemoveRepo={handleRemoveRepo} />
      ))}
    </Container>
  );
}

export default App;
