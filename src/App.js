import './App.css';
import Main from './MyComponent/Main';
import PageNotFound from './PageNotFound/PageNotFound';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import Category from './Category/CategoryPage';
import SignUp from './SignUp/SignUp';
import HeaderComponent from '../src/CommonComponents/Header/HeaderComponent';
import FooterComponent from '../src/CommonComponents/Footer/FooterComponent';
import LogIn from './LogIn/LogIn';
import ProductPreview from './ProductPreview/ProductPreview';
import Cart from './Cart/Cart';
import StripePayment from './Payment/StripePayment';
import PaymentHistory from './PaymentHistory/PaymentHistory';
import ViewPayment from './PaymentHistory/ViewPayment';

import {Provider} from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react';
import {store, persistor} from './redux/store'
import ProtectedRoutes from './ProtectedRoutes/ProtectedRoutes';

function App() {
  
  return (
    <Provider store={store}>
      <BrowserRouter>
        <PersistGate persistor={persistor}>
          <HeaderComponent/>
              <Routes>
                <Route path='/' element={<Main/>}/>
                <Route exact path='/' element={<ProtectedRoutes/>}>
                  <Route path="/cart" element={<Cart/>}/>
                  <Route path="/payment" element={<StripePayment/>}/>
                  <Route path="/paymenthistory" element={<PaymentHistory/>}/>
                  <Route path="/viewpayment" element={<ViewPayment/>}/>
                </Route>
                <Route path='/categories' element={<Category />}/>
                <Route path="/categories/product/:id" element={<ProductPreview/>}/>
                <Route path="/signup" element={<SignUp/>}/>
                <Route path="/login" element={<LogIn/>}/>
                <Route path='/*' element={<PageNotFound/>}/>
              </Routes>
            <FooterComponent/>
        </PersistGate>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
