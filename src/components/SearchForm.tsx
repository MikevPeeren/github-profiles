// React
import React, { useRef, useState, useEffect } from 'react';

// Boostrap
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

// CSS
import './SearchForm.scss';

// Icons
import { FaSearch } from 'react-icons/fa';

interface SearchFormProps {
	setNewGithubUser: Function;
	errorText: string;
}

const SearchForm: React.FC<SearchFormProps> = (props) => {
	const [warningText, setWarningText] = useState('');
	const inputElement = useRef(null);

	const { setNewGithubUser } = props;

	const handleUsernameSearch = () => {
		setWarningText('');
		//@ts-ignore
		if (inputElement && inputElement.current && inputElement.current.value !== '')
			//@ts-ignore
			setNewGithubUser(inputElement.current.value);
		else setWarningText('Error');
	};

	useEffect(() => {
		setWarningText(props.errorText);
	}, [props.errorText]);

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
			{warningText && <span className="SearchForm__WarningText">{warningText}</span>}
		</>
	);
};

export default SearchForm;
