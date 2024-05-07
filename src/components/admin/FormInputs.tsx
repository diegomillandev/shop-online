import {
    FormControl,
    FormErrorMessage,
    FormLabel,
    Input,
    Textarea,
} from '@chakra-ui/react';
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { FormProduct, Product } from '../../types';

interface FormInputsProps {
    register: UseFormRegister<FormProduct>;
    errors: FieldErrors<FormProduct>;
    product?: Product | null;
}

export const FormInputs = ({ register, errors, product }: FormInputsProps) => {
    return (
        <>
            <FormControl mb="6" isInvalid={errors.title ? true : false}>
                <FormLabel htmlFor="title">Title Product</FormLabel>
                <Input
                    type="text"
                    id="title"
                    borderColor={'black'}
                    defaultValue={product?.title}
                    {...register('title', {
                        required: 'This is required',
                        minLength: {
                            value: 3,
                            message: 'Minimum length should be 3',
                        },
                        maxLength: {
                            value: 50,
                            message: 'Maximum length should be 50',
                        },
                    })}
                />
                <FormErrorMessage>
                    {errors.title && errors.title.message}
                </FormErrorMessage>
            </FormControl>
            <FormControl mb="4" isInvalid={errors.image ? true : false}>
                <FormLabel htmlFor="url_image">Url Image</FormLabel>
                <Input
                    type="text"
                    id="url_image"
                    borderColor={'black'}
                    defaultValue={product?.image}
                    {...register('image', {
                        required: 'This is required',
                        pattern: {
                            value: /\.(jpe?g|png|gif|bmp)$/i,
                            message: 'Invalid image url',
                        },
                    })}
                />
                <FormErrorMessage>
                    {errors.image && errors.image.message}
                </FormErrorMessage>
            </FormControl>
            <FormControl mb="4" isInvalid={errors.category ? true : false}>
                <FormLabel htmlFor="category">Category</FormLabel>
                <Input
                    type="text"
                    id="category"
                    borderColor={'black'}
                    defaultValue={product?.category}
                    {...register('category', {
                        required: 'This is required',
                        minLength: {
                            value: 3,
                            message: 'Minimum length should be 3',
                        },
                        maxLength: {
                            value: 50,
                            message: 'Maximum length should be 50',
                        },
                    })}
                />
                <FormErrorMessage>
                    {errors.category && errors.category.message}
                </FormErrorMessage>
            </FormControl>
            <FormControl mb="4" isInvalid={errors.price ? true : false}>
                <FormLabel htmlFor="price">Price</FormLabel>
                <Input
                    type="text"
                    id="price"
                    borderColor={'black'}
                    defaultValue={product?.price}
                    {...register('price', {
                        required: 'This is required',
                        pattern: {
                            value: /^[0-9]*$/,
                            message: 'Invalid price',
                        },
                    })}
                />
                <FormErrorMessage>
                    {errors.price && errors.price.message}
                </FormErrorMessage>
            </FormControl>
            <FormControl mb="4" isInvalid={errors.description ? true : false}>
                <FormLabel htmlFor="description">Description</FormLabel>
                <Textarea
                    id="description"
                    borderColor={'black'}
                    defaultValue={product?.description}
                    {...register('description', {
                        required: 'This is required',
                        minLength: {
                            value: 3,
                            message: 'Minimum length should be 3',
                        },
                        maxLength: {
                            value: 500,
                            message: 'Maximum length should be 500',
                        },
                    })}
                />
                <FormErrorMessage>
                    {errors.description && errors.description.message}
                </FormErrorMessage>
            </FormControl>
        </>
    );
};
