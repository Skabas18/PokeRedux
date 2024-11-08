import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import { StarOutlined } from '@ant-design/icons';

const PokemonCard = () => {
    return <Card
        title="Charmander"
        cover={<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/4.png" alt="Charmander" />}
        extra={<StarOutlined />}
    >
        <Meta description='fire' />
    </Card>
}

export default PokemonCard;