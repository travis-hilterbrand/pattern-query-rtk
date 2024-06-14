import { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { PokeCard } from "./components/PokeCard";
import { PokeList } from "./components/PokeList";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // default: true
    },
  },
});

function App() {
  const ids = ["bulbasaur", "charmander", "squirtle"];
  const [selectedItem, setSelectedItem] = useState("bulbasaur");

  return (
    <QueryClientProvider client={queryClient}>
      <PokeList
        ids={ids}
        selectedId={selectedItem}
        onSelect={(id) => setSelectedItem(id)}
      />
      <hr />
      <PokeCard id={selectedItem} />
    </QueryClientProvider>
  );
}

export default App;
