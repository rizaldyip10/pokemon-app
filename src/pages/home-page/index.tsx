import usePokemonList from "../../hooks/usePokemonList"
import Card from "./components/card-components";

const HomePage = () => {
    const { pokemonList, loading, error } = usePokemonList()
    return (
        <div className="h-full bg-[#252A3E] px-6 py-4 flex flex-wrap gap-4 justify-center">
            {
                pokemonList.map((item, index) => (
                    <Card name={item.name} url={item.url} key={index} />
                ))
            }
        </div>
    )
}

export default HomePage