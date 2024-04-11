import { Container } from "@mui/material";
import Item from "./Item";
import Skeleton from '@mui/material/Skeleton';
import { useEffect, useState } from "react";

export default function Content() {
    const [isLoading, setLoading] = useState(true);
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Obtener datos de la API de Pokémon
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=52`);
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const data = await response.json();

                // Obtener detalles de cada Pokémon
                const pokemonRequests = data.results.map(async pokemon => {
                    const pokemonResponse = await fetch(pokemon.url);
                    return pokemonResponse.json();
                });
                const pokemonData = await Promise.all(pokemonRequests);

                setItems(pokemonData);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching Pokemon:', error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if(isLoading) {
        return (
            <Container className="content" sx={{marginTop:'50px' ,display:'flex',flexDirection:'row', justifyContent:'center', flexWrap:'wrap', gap:'30px'}}>
                <Skeleton
                sx={{ bgcolor: '#E00'  }}
                variant="rectangular"
                width={245}
                height={290}
                />
                <Skeleton
                sx={{ bgcolor: '#E00' }}
                variant="rectangular"
                width={245}
                height={290}
                />
                <Skeleton
                sx={{ bgcolor: '#E00' }}
                variant="rectangular"
                width={245}
                height={290}
                />
                <Skeleton
                sx={{ bgcolor: '#ffffff' }}
                variant="rectangular"
                width={245}
                height={290}
                />
                <Skeleton
                sx={{ bgcolor: '#000000' }}
                variant="rectangular"
                width={245}
                height={290}
                />
                <Skeleton
                sx={{ bgcolor: '#ffffff' }}
                variant="rectangular"
                width={245}
                height={290}
                />
                <Skeleton
                sx={{ bgcolor: '#ffffff' }}
                variant="rectangular"
                width={245}
                height={290}
                />
                <Skeleton
                sx={{ bgcolor: '#ffffff' }}
                variant="rectangular"
                width={245}
                height={290}
                />
            </Container>
        );
    }

    // Listo, mostrar los elementos
    return (
        <Container className="content" sx={{ marginTop: '50px', display: 'flex', flexDirection: 'row', justifyContent: 'center', flexWrap: 'wrap', gap: '30px' }}>
            {items.map((item, index) => (
                <Item
                    key={index}
                    initImg={item.sprites.other['official-artwork'].front_default} // Actualizar la ruta de la imagen según la estructura de datos
                    initName={item.name}
                />
            ))}
        </Container>
    );
}