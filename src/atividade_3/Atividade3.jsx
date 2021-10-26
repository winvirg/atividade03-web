import React from 'react';
import VotacaoCidades from './hooks/VotacaoCidades';

export default function Atividade3() {
  const cidades = ['Fortaleza', 'Quixadá', 'Limoeiro', 'Juazeiro'];

  return (
    <div>
      <VotacaoCidades cidades={cidades} />
    </div>
  );
}
