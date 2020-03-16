// React
import React, { useRef, useState } from 'react';

// Boostrap
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

// CSS
import './SearchForm.scss';

// Icons
import { FaSearch } from 'react-icons/fa';

const SearchForm = () => {
	const [warningText, setWarningText] = useState('');
	const inputElement = useRef(null);

	const handleUsernameSearch = () => {
		setWarningText('');
		//@ts-ignore
		if (inputElement && inputElement.current && inputElement.current.value !== '')
			//@ts-ignore
			console.log(inputElement.current.value);
		else setWarningText('Error');
	};

	return (
		<>
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
			{warningText && <div>{warningText}</div>}
		</>
	);
};

export default SearchForm;
