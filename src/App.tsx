import { Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./components/NavBar";
import GameGrid from "./components/GameGrid";

function App() {
	return (
		<Grid
			templateAreas={{
				base: `"nav" "main"`,
				lg: `"nav nav" "aside main"`, // 1024 PX
			}}
		>
			<GridItem area={"nav"}>
				<Navbar />
			</GridItem>
			<Show above="lg">
				<GridItem area={"aside"}>Aside</GridItem>
			</Show>
			<GridItem area={"main"}>
				<GameGrid />
			</GridItem>
		</Grid>
	);
}

export default App;
