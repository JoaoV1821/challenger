const companies  = [
    {
        id:1,
        name: 'Companhia 1',
        desc: 'Consultoria de TI',
        email: 'cnp1@gmail.com',
        phone_number:'4198765432'
    },

    {
        id:2,
        name: "Companhia 2",
        desc: '',
        email: 'cnp2@gmail.com',
        phone_number:'4198765432'
    },

    {
        id:3,
        name: "Companhia 3",
        desc: '',
        email: 'cnp3@gmail.com',
        phone_number:'4198765432'
    },

    {
        id:4,
        name: "Companhia 4",
        desc: '',
        email: 'cnp4@gmail.com',
        phone_number:'4198765432'
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