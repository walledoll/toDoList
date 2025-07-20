import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Details from '../pages/Details';
import New from '@/pages/New';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const client = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={client}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/task/:id" element={<Details />} />
                    <Route path="/task/new" element={<New />} />
                </Routes>
            </BrowserRouter>
        </QueryClientProvider>
    );
}

export default App;
