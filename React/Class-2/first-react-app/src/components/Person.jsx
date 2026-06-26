
function Person(props) {

    const personClickHandler = () => {
        console.log('Clicked');
    }

    return <figure onClick={personClickHandler} style={{border:'2px solid #ccc', width:'300px'}}>
        <img  style={{width:'100%'}} src="https://images.unsplash.com/photo-1782145695535-a1510cfc555d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1NXx8fGVufDB8fHx8fA%3D%3D" alt="" />
        <figcaption>
            <h5>Name : { props.name }</h5>
            <h6>Age : { props.age }</h6>
            <p>This is some description</p>
        </figcaption>
    </figure>
}

export default Person;