import { useState } from 'react';
import { Button, Form, Row, Col, Alert } from 'react-bootstrap';
import useCategories  from '../hooks/useCategories';
import useDrinks from '../hooks/useDrinks';

const FormComponent = () => {
    const [search, setSearch] = useState({
        name: '',
        category: ''
    });
    const [alert, setAlert] = useState('');
    const { categories } = useCategories();

    const { consultDrinks } = useDrinks();

    const handleChange = e => {
        setSearch({
            ...search,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        if(Object.values(search).includes('')){
            setAlert('Please fill all the fields');
            return;
        }
        setAlert('');
        consultDrinks(search);
    }

    return (
        <Form
            onSubmit={handleSubmit}
        >
            {alert && <Alert variant='danger' className='text-center'>{alert}</Alert>}
            <Row>
                <Col md={6}>
                    <Form.Group className='mb-3'>
                        <Form.Label htmlFor='name'>Drink Name</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Enter the drink e.g. Tequila, Vodka" 
                            name="name" 
                            id="name" 
                            onChange={handleChange}
                            value={search.name}
                        />
                    </Form.Group>
                </Col>
                <Col md={6}>
                    <Form.Group className='mb-3'>
                        <Form.Label htmlFor='category'>Drink Category</Form.Label>
                        <Form.Select 
                            id='category'
                            name='category'
                            onChange={handleChange}
                            value={search.category}
                        >
                            <option value="">--- Select a category ---</option>
                            {categories.map(category => (
                                <option 
                                    key={category.strCategory}
                                    value={category.strCategory}
                                >
                                    {category.strCategory}
                                </option>
                            ))}
                        </Form.Select>
                    </Form.Group>
                </Col>
            </Row>
            <Row className='justify-content-end'>
                <Col md={3}>
                    <Button
                        variant='danger'
                        className='text-uppercase w-100'
                        type='submit'
                    >
                        Search
                    </Button>
                </Col>
            </Row>
        </Form>
    )
}

export default FormComponent
