import Layout from './components/Layout/Layout';
// import SideDrawer from './components/Layout/SideDrawer';
import SweaterPage from './Containers/SweaterPage';
import { useDispatch, useSelector } from 'react-redux';

function App() {
	return (
		<div>
			<Layout>
				<SweaterPage />
			</Layout>
		</div>
	);
}

export default App;
