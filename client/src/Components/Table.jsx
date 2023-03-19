import React from "react";

    const Head = "text-xs text-left text-main font-semibold px-6 py-2 uppercase";
    const Text = "text-sm text-left leading-6 whitespace-nowrap px-5 py-3";
    
    const Rows = (movie, i) => {
    
return (

    <tr key={i}>
        <td className={`${Text}`}>
            <div className="w-12 p-1 bg-dry border border-border h-12 rounded overflow-hidden">
                <img 
                src={`/images/movies/${movie?.titleImage}`} 
                alt={movie?.name}
                className="w-full h-full object-cover" 
                />
            </div>
        </td>
            <td className={`${Text} truncate`}>{movie.name}</td>
            <td className={`${Text} `}>{movie.language}</td>
            <td className={`${Text} `}>{movie.category}</td>
            <td className={`${Text} `}>{movie.year}</td>
            <td className={`${Text} float-right flex-rows gap-2`}>{movie.time}</td>
               
        
    </tr>
);
};
    


function Table({ data }) {
    return (
        <div className="overflow-x-scroll overflow-hidden relative w-full">
            <table className="w-full table-auto border border-border divide-y divide-border">
                <thead>
                    <tr className="bg-dryGray">
                        <th scope="col" className={`${Head}` }>
                            Imagen
                        </th>
                        <th scope="col" className={`${Head}` }>
                            Nombre
                        </th>
                        <th scope="col" className={`${Head}` }>
                            Categoria
                        </th>
                        <th scope="col" className={`${Head}` }>
                            Lenguaje
                        </th>
                        <th scope="col" className={`${Head}` }>
                            Año
                        </th>
                        <th scope="col" className={`${Head}` }>
                            Tiempo
                        </th>
                      
                    </tr>
                </thead>
                <tbody className="bg-main  divide-y divide-gray-600">
                    {data.map((movie, i) => Rows(movie, i))}
                </tbody>
            </table>
        </div>
    );
};
    
export default Table;
