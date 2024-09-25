

const Card = (props) => {

  var description = "";

  if (props.description !== "false") {
    description = "Descrição linda";
  } else {
    description = "";
  };

  return (
      <header className="Card-site">
        <div className="card-container">
          <h1>titulo</h1>
          <p>{description}</p>
          <button>comprar</button>
        </div>
      </header>
    );
  }
  
  export default Card;