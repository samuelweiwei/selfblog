import { useState } from "react";
import { useImmer } from "use-immer";
let nextId = 0;

const initialList = [
  { id: 100, title: "thomson", seen: false },
  { id: 101, title: "John davidson", seen: true },
  { id: 102, title: "Misob tickson", seen: false },
  { id: 104, title: "Mary Tiffany", seen: false },
];

function ItemList({ artworks, onToggle }) {
  return (
    <ul>
        {artworks.map(artwork => (
            <li key={artwork.id}>
                <label>
                <input type="checkbox"
                checked={artwork.seen}
                onChange={e=>{
                    onToggle(artwork.id, e.target.checked);
                }} />
                {artwork.title}
                </label>
            </li>
        ))}
    </ul>
  );
}

export function ListImmer() {
  const [oldList, updateOldList] = useImmer(initialList);
  const [newList, updateNewList] = useImmer(initialList);

  function handleToggleOldList(id, nextSeen) {
    updateOldList((draft) => {
      const artwork = draft.find((a) => a.id === id);
      artwork.seen = nextSeen;
    });
  }

  function handleToggleNewList(artworkId, nextSeen) {
    updateNewList((draft) => {
      const artwork = draft.find((a) => a.id === artworkId);
      artwork.seen = nextSeen;
    });
  }

  return (
    <>
      <h3>OldList to seen</h3>
      <ItemList artworks={oldList} onToggle={handleToggleOldList} />
      <ItemList artworks={newList} onToggle={handleToggleNewList} />
    </>
  );
}

export default function ListState() {
  const [name, setName] = useState("");
  const [artists, setArtists] = useState([]);

  return (
    <>
      <h3>Inspiring Sculputure</h3>
      <input value={name} onChange={(e) => setName(e.target.value)}></input>
      <button
        onClick={() => {
          setArtists([...artists, { id: nextId++, name: name }]);
        }}
      >
        Add
      </button>
      <ul>
        {artists.map((artist) => (
          <li key={artist.id}>
            {artist.name}{" "}
            <button
              onyClick={() => {
                setArtists(artists.filter((a) => a.id !== artist.id));
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
