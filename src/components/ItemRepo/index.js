import { ItemContainer } from "./style";

function ItemRepo({ repo, handleRemoveRepo }) {
  const removeRepo = () => {
    handleRemoveRepo(repo.id);
  };

  return (
    <ItemContainer onClick={removeRepo}>
      <h3>{repo.name}</h3>
      <p>{repo.full_name}</p>
      <a href={repo.html_url}>Ver Repositório</a> <br />
      <a href="#" className="remover">
        Remover
      </a>
      <hr />
    </ItemContainer>
  );
}

export default ItemRepo;
