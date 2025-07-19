import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Details from '../pages/Details';
import New from '@/pages/New';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/task/:id" element={<Details />} />
                <Route path="/task/new" element={<New />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
