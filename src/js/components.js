import '../css/components.css';

export const greet = (name) => {
    console.log('Creating h1 tag');
    const h1= document.createElement('h1');
    h1.innerText=`I've been waiting for you, ${name}`;
    document.body.appendChild(h1);

}

// export se usa para poder usar la función en otros archivos
