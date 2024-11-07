import { Card } from "antd";
import Meta from "antd/es/card/Meta";

const PokemonCard = () => {
    return <Card
        style={{ width: 250 }}
        title="Charmander"
        cover={<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/4.png" alt="Charmander" />}
    >
        <Meta description='fire' />
    </Card>
}

export default PokemonCard;