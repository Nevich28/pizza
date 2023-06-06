import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export const FullPizza: React.FC = () => {
    const { id } = useParams();
    const [pizza, setPizza] = useState<{
        imageUrl: string;
        title: string;
        price: string;
    }>();
    const navigate = useNavigate();
    // console.log(params);
    async function fetchPizza() {
        try {
            const { data } = await axios.get(
                'https://646497be043c103502bd6388.mockapi.io/pizzaitems/' + id,
            );
            setPizza(data);
        } catch (e) {
            navigate('/');
            console.log(e);
        }
    }
    useEffect(() => {
        fetchPizza();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (!pizza) {
        return <>'Loading...'</>;
    }
    return (
        <div>
            <img src={pizza.imageUrl} alt={pizza.title} />
            <h2>{pizza.title}</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel numquam maiores debitis
                qui veniam tempore, a sequi? Repudiandae culpa dolores cupiditate earum, inventore
                distinctio quisquam fugit at veniam deserunt temporibus?
            </p>
        </div>
    );
};
