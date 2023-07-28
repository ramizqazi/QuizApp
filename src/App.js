import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import AppNavigation from './navigation/AppNavigation';
import { persistStore } from 'redux-persist';
import store from './redux/store';

let persistor = persistStore(store);

/* =============================================================================
<App />
============================================================================= */
const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <AppNavigation />
      </PersistGate>
    </Provider>
  );
};

/* Export
============================================================================= */
export default App;
