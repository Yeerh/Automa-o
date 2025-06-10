const express = require("express");
const cors = require("cors");
const app = express();
const { PrismaClient } = require("./generated/prisma");
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

// Endpoint para criar uma nova portaria
app.post("/portaria", async (req, res) => {
    try {
        const { nome, portaria, cpf, cargo, simbolo, secretaria, data } = req.body;

        // Validação básica dos dados
        if (!nome || !portaria || !cpf || !cargo || !simbolo || !secretaria || !data) {
            return res.status(400).json({ error: "Todos os campos são obrigatórios" });
        }

        // Verifica se a portaria já existe
        const portaExiste = await prisma.portaria.findFirst({ where: { portaria } });

        if (portaExiste) {
            return res.status(409).json({ error: "Portaria já existe!" });
        }

        // Cria a portaria no banco de dados
        const novaPortaria = await prisma.portaria.create({
            data: {
                nome,
                portaria,
                cpf,
                cargo,
                simbolo,
                secretaria,
                data: new Date(data),
            },
        });

        // Responde com a portaria criada
        res.status(201).json(novaPortaria);
    } catch (error) {
        console.error("Erro ao criar portaria:", error);
        res.status(error.status || 500).json({ error: error.message || "Erro ao criar portaria no servidor" });
    }
});

app.listen(8080, () => {
    console.log("Servidor rodando na porta 8080");
});