/* -------------------------------------------------------------------------- */
/*                             External Dependency                            */
/* -------------------------------------------------------------------------- */

import React from 'react';

/* -------------------------- Internal Dependencies ------------------------- */

import SEO from 'components/seo';
import DataProvider from 'context/provider';
import Routes from './routes';

const App = () => {
	return (
		<>
			<SEO />
			<DataProvider>
				<Routes />
			</DataProvider>
		</>
	);
};

export default App;
