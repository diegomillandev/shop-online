import {
    Box,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    SelectChangeEvent,
} from '@mui/material';
import { useProducts } from '../store';
import { useEffect } from 'react';

interface Props {
    category: string;
    setCategory: React.Dispatch<React.SetStateAction<string>>;
}

export const SelectCategory = ({ category, setCategory }: Props) => {
    const [categories, getAllCategories] = useProducts((state) => [
        state.categories,
        state.getAllCategories,
    ]);

    useEffect(() => {
        getAllCategories();
    }, [getAllCategories]);

    const handleCategoryChange = (event: SelectChangeEvent<string>) => {
        setCategory(event.target.value);
    };

    return (
        <Box display="flex" justifyContent="flex-end" mt={8} width="100%">
            <FormControl
                variant="outlined"
                sx={{
                    width: '50%',
                    '@media (min-width: 768px)': { width: '25%' },
                }}
            >
                <InputLabel id="category-select-label">Categories</InputLabel>
                <Select
                    labelId="category-select-label"
                    id="category-select"
                    label="Categories"
                    value={category}
                    onChange={handleCategoryChange}
                >
                    <MenuItem value="All Categories">All Categories</MenuItem>

                    {categories?.map((category) => (
                        <MenuItem
                            key={category}
                            value={category}
                            sx={{ textTransform: 'capitalize' }}
                        >
                            {category}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Box>
    );
};
