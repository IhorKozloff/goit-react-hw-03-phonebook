import React from "react";
import { SearchingWrapper, SearchingTextArea } from 'components/SearchingFilter/SearchingFilter.styled';
export const SearchingFilter = ({onFilterAction}) => {
    
return (
    <SearchingWrapper>
        Find contacts by Name
        <SearchingTextArea onChange={onFilterAction}></SearchingTextArea>
    </SearchingWrapper>
)



}