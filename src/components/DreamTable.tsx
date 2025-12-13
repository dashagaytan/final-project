import { useState } from "react";

export default function DreamTable({artPieces, onChange}){
    const [form, setForm] = useState({
        title: "",
        medium: "",
        imageUrl: ""
    });

    // handle change when adding new pieces
    function handleChange(e){
        const {name, value} = e.target;
        setForm(prev => ({...prev, [name]: value}))
    }

    //add art pieces to the list
    function handleSubmit(e){
        e.preventDefault();

        const newArt ={
            id: Date.now(),
            title: form.title,
            medium: form.medium,
            imageUrl: form.imageUrl
        };

        onChange([...artPieces, newArt]);

        setForm({
            title: "", 
            medium: "", 
            imageUrl: ""
        });
    }

    // handle delete, remove added items from the gallery
    function handleDelete(id){
        const update = artPieces.filter((item) => item.id !== id);
        onChange(update);
    }

// form to allow users add their art pieces to display or delete them.
    return(
        <>
        <section>
            <h2>Add Your Dreamy Art Pieces</h2>

            <form onSubmit={handleSubmit} className="art-form">
                <input
                name="title"
                value={form.title}
                onChange={handleChange}
                placeholder="Name your art..." required
                />
                <input
                name="medium"
                value={form.medium}
                onChange={handleChange}
                placeholder="What medium was used? " required
                />
                <input
                name="imageUrl"
                value={form.imageUrl}
                onChange={handleChange}
                placeholder="Add your image here..." required
                />     
                <button> Add To Gallery</button>                          
            </form>

            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Medium</th>
                        <th>Art Piece</th>
                        <th></th>
                    </tr>
                </thead>

                <tbody>
                    {artPieces.map((item) => (
                        <tr key={item.id}>
                            <td>{item.title}</td>
                            <td>{item.medium}</td>
                            <td>
                                <img 
                                src={item.imageUrl}
                                alt={item.title}
                                style={{width: "150px", height: "150px", objectFit: "cover"}}/>
                            </td>
                            <td>
                                <button onClick={()=> handleDelete(item.id)}> Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
        </>
    )
}