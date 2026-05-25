import React, { useState } from 'react';

function Notas() {

    const [formData, setFormData] = useState({
        "Nome do Aluno": "",
        "disciplina": "",
        "nota dos testes": "",
        Teste: "",
        "nota dos trabalhos": "",
        Trabalho: "",
        "nota das atitudes": "",
        Atitude: "",
    });

    const [notas, setNotas] = useState([]);

    const [dadosSubmetidos, setDadosSubmetidos] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    function handleSubmit(e) {
        e.preventDefault(); // impede o recarregamento da página
        setDadosSubmetidos(formData); // guarda os dados preenchidos

        const novaNota = {
            id: Date.now(),
            ...formData
        };
        setNotas([...notas, novaNota]);
    }
    
    const limparFormulario = () => {
        setFormData({
            "Nome do Aluno": "",
            "disciplina": "",
            "nota dos testes": "",
            Teste: "",
            "nota dos trabalhos": "",
            Trabalho: "",
            "nota das atitudes": "",
            Atitude: "",
        });
        setDadosSubmetidos(null);
    }

    


    return (
        <div className="mt-4 row">

        </div>
    );
}

export default Notas;