import { useParams } from 'react-router-dom';

type Params = {
    itemId: string;
};

export const ItemDetail = () => {
    const { itemId } = useParams<Params>();
    return <div>ItemDetail {itemId}</div>;
};
