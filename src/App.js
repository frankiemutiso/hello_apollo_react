import { useQuery, gql } from '@apollo/client';

import logo from './logo.svg';
import './App.css';

const GET_LOCATIONS = gql`
	query GetLocations {
		locations {
			id
			name
			description
			photo
		}
	}
`;

function DisplayLocations() {
	const { data, loading, error } = useQuery(GET_LOCATIONS);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error: {error.message}</p>;

	return data.locations.map(({ id, name, description, photo }) => {
		return (
			<div key={id}>
				<h3>{name}</h3>
				<img alt='location' height='250' width='400' src={`${photo}`} />
				<br />
				<b>About this location: </b>
				<p>{description}</p>
				<br />
			</div>
		);
	});
}

function App() {
	return (
		<div className='App'>
			<p>Hello Apollo React</p>
			<DisplayLocations />
		</div>
	);
}

export default App;
