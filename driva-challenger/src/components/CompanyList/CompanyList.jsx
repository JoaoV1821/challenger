import React, { useEffect, useState } from 'react';
import { getCompanies } from '../../services/API';
import {Link, useNavigate} from 'react-router-dom'
import style from './list.module.css'

const CompanyList = () => {
  const [companies, setCompanies] = useState([]);
  const navigate = useNavigate();

  const requestCompanies = async () => {
    const resp = await getCompanies();
    setCompanies(resp);
  }

  useEffect(() => {
    requestCompanies();
  }, []);

  return (
    <div>
      
      <div className={style.container}>
      <h1>Tabela de Companhias</h1>
        <table style={style}>
        <thead>
          <tr>
            <th>Nome da Empresa</th>
            <th>Descrição</th>
            <th>Email</th>
            <th>Número de Telefone</th>
            <th>Ação</th>
          </tr>
        </thead>
        <tbody>
          {companies.map((company) => (
            <tr key={company.id}>
              <td>{company.name}</td>
              <td>{company.desc}</td>
              <td>{company.email}</td>
              <td>{company.phone_number}</td>
              <td><Link to={`/CompanyProfile/${company.id}`}>Detalhar</Link></td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
   
  </div>
  
  );
}

export default CompanyList;
