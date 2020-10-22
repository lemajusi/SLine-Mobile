import caso from '../tipos';
export default class Casos{
    getAllCasos = () => {
        let casos = fetch('http://localhost:3000/cases',{
            method: 'GET'
        })
        .then(res => res.json())
        return casos
    }
    addCaso=()=>{
        fetch('',{
            method: 'POST',
            body: JSON.stringify({
                caso
            })
        })
    }
}