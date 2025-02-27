const biMap = require("bidirectional-map");
const express = require("express");
const app = express();

const raNome = new biMap({ r097ac2: "William Torres Araujo" });

app.use(express.static(__dirname + "/public"));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
	res.render("horario.ejs");
});

app.get("/aluno/:ra", (req, res) => {
	const ra = req.params.ra;
	const nome = raNome.get(ra);
	if (nome === undefined) {
		res.status(400).json({ ERRO: "RA Inválido" });
	} else {
		res.send("Olá, " + nome);
	}
});

app.listen(3000);
