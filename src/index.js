async function csvField(url, campo){
    let list = [];
    let a ;
     return await axios.get(url).then( function(response){   
        let obj = $.csv.toObjects(response.data);
        for(var i=0; i< obj.length;i++){
            for(var aux in obj[i]){
                if(aux == campo)
                    list.push(obj[i][aux]);         
            }
        }
                     
    }).then(res => list);   
}

async function main (){
    
    const list1 = ('https://raw.githubusercontent.com/UserZeca/Enxurrada-de-Bits-Exercicios/master/docs/Characters.csv', 'Character');
    const list2 = ('https://raw.githubusercontent.com/UserZeca/Enxurrada-de-Bits-Exercicios/master/docs/Characters.csv', 'Description/role');
    
}


window.onload = () => {

    main()

        for(let i = 0; i < main.length; i++){
            let lista = document.createElement('ul'); 
            let elementoLista = document.createElement('li'); 
            let conteudoElementoLista = document.createTextNode(list1[i]);
            
            elementoLista.appendChild(counteudoElementoLista);
            lista.appendChild(elementoLista);
            
            let subLista = document.createElement('ul'); 
            let elementoSubLista = document.createElement('li'); 
            let conteudoElementoSubLista = document.createTextNode(list2[i]);

            let estilo1 = document.createAttribute('class');
            estilo1.value = "lista";
            elementoLista.setAttributeNode(estilo1);
            
            let estilo2 = document.createAttribute('class');
            estilo2.value = "sub-lista";
            elementoSubLista.setAttributeNode(estilo2);
            
            elementoSubLista.appendChild(counteudoElementoSubLista);
            subLista.appendChild(elementoSubLista);

            lista.appendChild(subLista);

            document.getElementById('caixa').insertAdjacentElement('beforeend', lista);
            
        }   
}