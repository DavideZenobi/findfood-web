import React, { useState } from 'react';
import styled from 'styled-components';
import TextField from "@mui/material/TextField";
import { getAllShops, getProductsWithPrice, getLabels } from "../services/api-service";
import Button from '@mui/material/Button';
import Autocomplete, { AutocompleteRenderGetTagProps } from '@mui/material/Autocomplete';
import { Chip } from '@mui/material';

const SearchBarWrapper = styled.div`
    margin-top: 20px;
    width: 400px;
`;

export interface SearchBarOption {
    id: number;
    name: string;
    brand: string;
    price: number;
}

export interface LabelOption {
    id: number;
    name: string;
}

export const SearchBar = (props: any) => {

    const [options, setOptions] = useState<SearchBarOption[]>([]);
    const [labels, setLabels] = useState<LabelOption[]>([]);
    const [inputValue, setInputValue] = useState('abcd');

    //Get labels from database
    /*
    function getLabels() {
        getLabels().then(labels => {
            const labelOptions = labels.map((label: any) => {
                return {
                    id: label.id,
                    name: label.name
                };
            });
            setLabels(labelOptions);
        });
    }*/

    //Autocomplete stuff
    function getOptionLabel(option: string | SearchBarOption): string {
        if (typeof option === 'string') return option || '-';
        else return option.name + " " + option.price;
    }

    function renderTags(value: readonly SearchBarOption[], getTagProps: AutocompleteRenderGetTagProps): React.ReactNode {
        return value.map((option: SearchBarOption, index: number) => {
            return (<Chip label={option.name + " " + option.price} {...getTagProps({ index })} />);
        });
      }

    function onInputChange(event: any) {
        if(event.target.value.length >= 3) {
            getProductsWithPrice(event.target.value).then(products => {
                const productOptions = products.map((product: any) => {
                    return {
                        id: product.id,
                        name: product.name,
                        brand: product.brand,
                        price: product.price,
                    };
                });
                setOptions(productOptions);
            });
        }
    }

    function onSearch() {

    }

    return (
        <>
            <Autocomplete
                options={options}
                onInputChange={onInputChange}                
                getOptionLabel={getOptionLabel}
                renderTags={renderTags}
                sx={{ width: 600 }}
                renderInput={(params) => <TextField {...params} label="Search" />}
            />
            <Button variant="contained"
              style={{margin: '1rem'}}
              onClick={() => onSearch()}>Search</Button>
        </>
    );
}



/*<TextField
                id="outlined-basic"
                variant="outlined"
                rows="1"
                fullWidth
                placeholder="Example: barilla, spaguettis, water"
                onChange={onChange}
            />
            <h3>{options}</h3>*/