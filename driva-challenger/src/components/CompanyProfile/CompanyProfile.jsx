import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getSingleCompany } from '../../services/API';
import style from './profile.module.css'

const CompanyProfile = () => {
  const [company, setCompany] = useState({});
  const [showMore, setShowMore] = useState(false); // Estado para controlar se deve mostrar mais informações
  const { id } = useParams();

  const requestCompany = async (id) => {
    const resp = await getSingleCompany(id);
    setCompany(resp);
  }

  useEffect(() => {
    requestCompany(id);
  }, [id]); // Certifique-se de observar as mudanças no 'id'

  const toggleShowMore = () => {
    setShowMore(!showMore); // Inverte o estado 'showMore' ao clicar no botão
  }

  return (
    <div >

      <div className={style.title}>
        <h1>{company.name}</h1>
        <img src={company.logo} alt="" />
      </div>
     

      <div className={style.container}>
        <label htmlFor="">Descrição: </label>
        <p>{company.desc}</p>
        <label htmlFor="">Email: </label>
        <p>{company.email}</p>
        <label htmlFor="">Telefone: </label>
        <p>{company.phone_number}</p>
        {showMore && (
          <>
            <label htmlFor="">CNPJ: </label>
            <p>{company.cnpj}</p>
      
          </>
        )}
      <button onClick={toggleShowMore}>
        {showMore ? 'Mostrar menos' : 'Mostrar mais'}
      </button>
      </div>

    
    </div>
  )
}

export default CompanyProfile;
