import { useState } from "react";
import "./App.css";
import ListMovies from "./Components/ListMovies";
import NavElm from "./Components/NavElm.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import AddingMovie from "./Components/AddingMovie";

const movies = [
  {
    id: Math.random(),
    img: "https://www.movieposters.com/cdn/shop/products/b2b88e848295ca82cf69f26f6eac1a3a_0e40c226-cf5b-4372-972c-61f4d6b058e8_480x.progressive.jpg?v=1573595129",
    title: "Saw I",
    text: "As a deadly battle rages over Jigsaw's brutal legacy, a group of Jigsaw survivors gathers to seek the support of self-help guru and fellow survivor Bobby Dagen.",
    rating: "4",
  },
  {
    id: Math.random(),
    img: "https://www.movieposters.com/cdn/shop/products/985a29533f02a28f3ba9c22a0d656992_7a9714d9-b076-4da4-8895-59a258e58b0c_480x.progressive.jpg?v=1573613743",
    title: "Saw II",
    text: "A detective and his team must rescue 8 people trapped in a factory by the twisted serial killer known as Jigsaw.",
    rating: "3",
  },
  {
    id: Math.random(),
    img: "https://www.movieposters.com/cdn/shop/products/7e20754bf94f4508858faed3d704ada2_689a38c5-cf6c-4159-8983-93ce53701085_480x.progressive.jpg?v=1573587393",
    title: "Saw III",
    text: "Jigsaw abducts a doctor in order to keep himself alive while he watches his new apprentice put an unlucky citizen named Jeff through a brutal test.",
    rating: "4",
  },
  {
    id: Math.random(),
    img: "https://www.movieposters.com/cdn/shop/products/70c4c55337142b3c4d0bd237448e7105_4adf1b01-e398-4a52-a194-0ea0a3dcd958_480x.progressive.jpg?v=1573617534",
    title: "Saw IV",
    text: "Despite Jigsaw's death, and in order to save the lives of two of his colleagues, Lieutenant Rigg is forced to take part in a new game.",
    rating: "5",
  },
  {
    id: Math.random(),
    img: "https://www.movieposters.com/cdn/shop/products/scream_bt9vtnjo_480x.progressive.jpg?v=1651685484",
    title: "Scream",
    text: "25 years after a streak of brutal murders shocked the quiet town of Woodsboro, new killer dons the Ghostface mask and begins targeting a group of teenagers.",
    rating: "4",
  },
  {
    id: Math.random(),
    img: "https://www.movieposters.com/cdn/shop/products/parasite_ver3_xlg_480x.progressive.jpg?v=1581309216",
    title: "Parasite",
    text: "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
    rating: "5",
  },
  {
    id: Math.random(),
    img: "https://www.movieposters.com/cdn/shop/products/b19086faeb4bf097e2462f0fefdb46d3_9aa92185-265a-4593-ab8b-8375bb6c5a2a_480x.progressive.jpg?v=1660161531",
    title: "Shallows",
    text: "A mere 200 yards from shore, surfer Nancy is attacked by a great white shark, with her short journey to safety becoming the ultimate contest of wills.",
    rating: "4",
  },
  {
    id: Math.random(),
    img: "https://www.movieposters.com/cdn/shop/products/shutter-island_bd6f55ce_480x.progressive.jpg?v=1638902290",
    title: "Shutter Island",
    text: "Teddy Daniels and Chuck Aule, two US marshals, are sent to an asylum on a remote island in order to investigate the disappearance of a patient.",
    rating: "3",
  },
];

function App() {
  const [name, setName] = useState("");
  const [movie, setMovie] = useState(movies);
  const [etoile, setEtoile] = useState(1);

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handledelete = (id) => {
    setMovie(movie.filter((el) => el.id !== id));
  };

  const handleadd = (newobj) => {
    setMovie([...movie, newobj]);
  };

  const handlerating = (x) => {
    setEtoile(x);
  };

  return (
    <div className="App">
      <NavElm
        change={handleChange}
        /*name={name} */ handlerating={handlerating}
        rate={etoile}
      />
      <ListMovies tab={movie} name={name} del={handledelete} rate={etoile} />
      <AddingMovie add={handleadd} />
    </div>
  );
}

export default App;
