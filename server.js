import express from "express";

const posts = [
  {
      id: 1,
      descricao: "Um gatinho fofo dormindo no sol.",
      imagem: "https://placecats.com/millie/300/150",
  },
  {
      id: 2,
      descricao: "Gato curioso explorando a natureza.",
      imagem: "https://placecats.com/millie/300/150",
  },
  {
      id: 3,
      descricao: "Um abraço felino: a melhor terapia!",
      imagem: "https://placecats.com/millie/300/150",
  },
  {
      id: 4,
      descricao: "Gato brincando com um barbante.",
      imagem: "https://placecats.com/millie/300/150",
  },
  {
      id: 5,
      descricao: "Olhos felinos: a janela da alma.",
      imagem: "https://placecats.com/millie/300/150",
  }
];

const app = express();
app.use(express.json());

app.listen(3000, () => {
    console.log("servidor escutando");
});

app.get("/posts", (req, res) => {
    res.status(200).json(posts);
});

function buscarPorId (id){
  return posts.findIndex((posts) => {
    return posts.id === Number(id)
  })
}

app.get("/posts/:id", (req, res) => {
  const index = buscarPorId(req.params.id)
  res.status(200).json(posts[index]);
});
 