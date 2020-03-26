import React, { useState } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';

import logoImg from '../../assets/logo.svg';
import api from '../../services/api';

import './styles.css';

export default function NewIncident() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');

  const ongId = localStorage.getItem('ongId');

  const history = useHistory();

  async function handleNewIncident(e) {
    e.preventDefault();

    try {
      const data = {
        title,
        description,
        value,
      };

      await api.post('/incidents', data, {
        headers: {
          Authorization: ongId,
        },
      });

      history.push('/profile');
    } catch (error) {
      alert('Erro ao cadastrar caso, tente novamente.');
    }
  }

  return (
    <div className="new-incident-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Be The Heroe" />
          <h1>Cadastrar novo caso</h1>
          <p>
            Descreva o caso detalhadamente para encontrar um herói para resolver
            isso.
          </p>
          <Link to="/profile" className="link">
            <FiArrowLeft size={16} color="#e02041" />
            Voltar para home
          </Link>
        </section>
        <form onSubmit={handleNewIncident}>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Título do caso"
          />
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Descrição"
          />
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Valor em reais"
          />

          <button className="button" type="submit">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}