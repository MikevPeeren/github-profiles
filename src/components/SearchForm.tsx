// React
import React, { useRef } from 'react';

// Boostrap
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

// CSS
import './SearchForm.scss';

// Icons

import { FaSearch } from 'react-icons/fa';

const SearchForm = () => {
	const inputElement = useRef(null);

	const handleUsernameSearch = () => {
		//@ts-ignore
		if (inputElement && inputElement.current) console.log(inputElement.current.value);
		else {
		} // TODO: add warning text
	};

	return (
		<InputGroup className="SearchForm">
			<FormControl
				ref={inputElement}
				onKeyPress={(event: any) => {
					if (event.key === 'Enter') {
						handleUsernameSearch();
					}
				}}
				placeholder="Github Username"
			/>
			<InputGroup.Append>
				<Button
					onClick={() => {
						handleUsernameSearch();
					}}
				>
					<FaSearch />
				</Button>
			</InputGroup.Append>
		</InputGroup>
	);
};

export default SearchForm;
