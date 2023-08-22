const companies  = [
    {
        id:1,
        name: 'Companhia 1',
        desc: 'Consultoria de TI',
        email: 'cnp1@gmail.com',
        phone_number:'4198765432',
        cnpj: 1111111111,
        logo: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.vector-eps.com%2Fwp-content%2Fgallery%2Fcorporate-logo-vectors%2Fcorporate-logo-vector10.jpg&f=1&nofb=1&ipt=c12d912cd03946f4d9aba50ebedf845fc1da476208d6d7fc1add374992280224&ipo=images"
    },

    {
        id:2,
        name: "Companhia 2",
        desc: 'Serviços gerais',
        email: 'cnp2@gmail.com',
        phone_number:'4198765432',
        cnpj: 2222222222,
        logo: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.vector-eps.com%2Fwp-content%2Fgallery%2Fcorporate-logo-vectors%2Fcorporate-logo-vector10.jpg&f=1&nofb=1&ipt=c12d912cd03946f4d9aba50ebedf845fc1da476208d6d7fc1add374992280224&ipo=images"
    },

    {
        id:3,
        name: "Companhia 3",
        desc: 'Contabilidade',
        email: 'cnp3@gmail.com',
        phone_number:'4198765432',
        cnpj: 3333333333333,
        logo: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.vector-eps.com%2Fwp-content%2Fgallery%2Fcorporate-logo-vectors%2Fcorporate-logo-vector10.jpg&f=1&nofb=1&ipt=c12d912cd03946f4d9aba50ebedf845fc1da476208d6d7fc1add374992280224&ipo=images"
    },

    {
        id:4,
        name: "Companhia 4",
        desc: 'Consultoria médica',
        email: 'cnp4@gmail.com',
        phone_number:'4198765432',
        cnpj: 44444444444,
        logo: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.vector-eps.com%2Fwp-content%2Fgallery%2Fcorporate-logo-vectors%2Fcorporate-logo-vector10.jpg&f=1&nofb=1&ipt=c12d912cd03946f4d9aba50ebedf845fc1da476208d6d7fc1add374992280224&ipo=images"
    }
]

const searchCompany = (id) => {

   const result = companies.filter((company) => company.id == id);

   return result;
}

const listAllcompanies  = (req, res) => {
    return res.status(200).json({companies});
}

const getCompany = (req, res) => {
    const companyId = req.params.id;
    const foundCompany = searchCompany(companyId);

    if (foundCompany.length == 0){
        return res.status(404).send("Empresa não existe");

    } else {
        return res.status(200).json(searchCompany(companyId));
    }    
}

module.exports = {
    listAllcompanies,
    getCompany
}