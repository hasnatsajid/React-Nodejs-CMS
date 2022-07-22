import { useLocation, useParams } from 'react-router-dom';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBoxOpen, faCommentDots, faFileAlt, faPlus, faRocket } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Button, Dropdown, Form, Card } from '@themesberg/react-bootstrap';

import Swal from 'sweetalert2';

import { httpGetCategories } from '../hooks/requests';

const Categories = () => {
  const [category, setCategory] = useState('');
  const { pathname } = useLocation();
  const { id } = useParams();

  const onCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  async function onAddingCategory(e) {
    e.preventDefault();
    // const categories = httpGetCategories();
    // console.log(categories);
    console.log(category);
    const response = await fetch(`http://localhost:8000/api/v1/categories`, {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ category }),
    });
    const value = await response.json();
    console.log(value);

    Swal.fire({
      title: 'Success!',
      text: 'Category has been added!',
      icon: 'success',
      confirmButtonText: 'Cool',
    });

    // return false;
  }

  function createCategory() {
    return (
      <>
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
          <Dropdown>
            <Dropdown.Menu className="dashboard-dropdown dropdown-menu-left mt-2">
              <Dropdown.Item>
                <FontAwesomeIcon icon={faFileAlt} className="me-2" /> Document
              </Dropdown.Item>
              <Dropdown.Item>
                <FontAwesomeIcon icon={faCommentDots} className="me-2" /> Message
              </Dropdown.Item>
              <Dropdown.Item>
                <FontAwesomeIcon icon={faBoxOpen} className="me-2" /> Product
              </Dropdown.Item>

              <Dropdown.Divider />

              <Dropdown.Item>
                <FontAwesomeIcon icon={faRocket} className="text-danger me-2" /> Subscription Plan
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>

        <Row>
          <Col xs={12} xl={8}>
            {/* <GeneralInfoForm /> */}
            <Card border="light" className="bg-white shadow-sm mb-4">
              <Card.Body>
                <h5 className="mb-4">Category Information</h5>
                <Form>
                  <Row>
                    <Col md={6} className="mb-3">
                      <Form.Group id="firstName">
                        <Form.Label>Category Name</Form.Label>
                        <Form.Control required type="text" placeholder="Enter the category" onChange={onCategoryChange} />
                      </Form.Group>
                    </Col>
                  </Row>

                  <div className="mt-3">
                    <Button variant="primary" type="submit" onClick={onAddingCategory}>
                      Add Category
                    </Button>
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </>
    );
  }

  function updateCategory() {
    return 'Category updated';
  }

  function deleteCategory() {
    return 'Delete Category';
  }

  function getCategories() {
    return 'All Categories :)';
  }

  const content =
    (pathname.includes('new') && createCategory()) ||
    (pathname.includes('update') && updateCategory()) ||
    (pathname.includes('delete') && deleteCategory()) ||
    getCategories();

  return <div>{content}</div>;
};

export default Categories;
