import { Card, Form, Row, Col, Button, Table, Breadcrumb } from 'react-bootstrap';
import { FaHome, FaSearch, FaTrash, FaDownload, FaUpload, FaPaperPlane, FaEdit } from 'react-icons/fa';
import tableData from '../data/initialStock.json';

export default function InitialStock() {

  return (
    <div>
      <Breadcrumb style={{ fontSize: '12px' }}>
        <Breadcrumb.Item href="#"><FaHome /> Home</Breadcrumb.Item>
        <Breadcrumb.Item active>Initial Stock</Breadcrumb.Item>
      </Breadcrumb>

      <Card className="mb-3 shadow-sm border-0">
        <Card.Header className="card-header-custom bg-white">Initial Stock</Card.Header>
        <Card.Body>
          <Form>
            <Row className="mb-2">
              <Col md={4}>
                <Form.Group as={Row} className="align-items-center">
                  <Form.Label column sm={4} className="form-label-sm">Part No</Form.Label>
                  <Col sm={8}>
                    <div className="d-flex">
                      <Form.Control type="text" size="sm" />
                      <Button variant="warning" size="sm" style={{ borderRadius: '0 4px 4px 0' }}><FaSearch /></Button>
                    </div>
                  </Col>
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group as={Row} className="align-items-center">
                  <Form.Label column sm={4} className="form-label-sm">Plant Code</Form.Label>
                  <Col sm={8}>
                    <Form.Select size="sm" defaultValue="4000">
                      <option value="4000">4000 Karawang - IMV</option>
                    </Form.Select>
                  </Col>
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group as={Row} className="align-items-center">
                  <Form.Label column sm={4} className="form-label-sm">Dock Code</Form.Label>
                  <Col sm={8}>
                    <Form.Select size="sm" defaultValue="44">
                      <option value="44">44</option>
                    </Form.Select>
                  </Col>
                </Form.Group>
              </Col>
            </Row>

            <Row className="mb-2">
              <Col md={4}>
                <Form.Group as={Row} className="align-items-center">
                  <Form.Label column sm={4} className="form-label-sm">Kanban No</Form.Label>
                  <Col sm={8}>
                    <Form.Control type="text" size="sm" />
                  </Col>
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group as={Row} className="align-items-center">
                  <Form.Label column sm={4} className="form-label-sm text-truncate">Last Stock Taking Date</Form.Label>
                  <Col sm={8}>
                    <Form.Control type="text" size="sm" placeholder="DD.MM.YYYY" />
                  </Col>
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group as={Row} className="align-items-center">
                  <Form.Label column sm={4} className="form-label-sm">Area</Form.Label>
                  <Col sm={8}>
                    <Form.Select size="sm">
                      <option>Select One...</option>
                    </Form.Select>
                  </Col>
                </Form.Group>
              </Col>
            </Row>

            <Row className="mb-2">
              <Col md={4}>
                <Form.Group as={Row} className="align-items-center">
                  <Form.Label column sm={4} className="form-label-sm">Submitted Status</Form.Label>
                  <Col sm={8}>
                    <Form.Select size="sm">
                      <option>Select One...</option>
                    </Form.Select>
                  </Col>
                </Form.Group>
              </Col>
            </Row>

            <div className="d-flex justify-content-end gap-2 mt-3">
              <Button variant="primary" size="sm" style={{ width: '80px' }}>Search</Button>
              <Button variant="light" size="sm" className="border" style={{ width: '80px' }}>Clear</Button>
            </div>
          </Form>
        </Card.Body>
      </Card>

      <div className="d-flex justify-content-end gap-2 mb-2">
        <Button variant="danger" size="sm" className="d-flex align-items-center gap-1"><FaTrash /> Delete All</Button>
        <Button variant="warning" size="sm"><FaDownload /></Button>
        <Button variant="warning" size="sm"><FaUpload /></Button>
        <Button variant="primary" size="sm" className="d-flex align-items-center gap-1"><FaPaperPlane /> Submit</Button>
      </div>

      <div className="table-responsive bg-white border">
        <Table bordered striped hover size="sm" className="table-xs mb-0 text-center align-middle" style={{ minWidth: '1200px' }}>
          <thead>
            <tr>
              <th style={{ width: '30px' }}><Form.Check type="checkbox" /></th>
              <th>No</th>
              <th>Plant Code</th>
              <th>Dock Code</th>
              <th>Supplier Code</th>
              <th>Supplier Name</th>
              <th>Part No</th>
              <th>Kanban No</th>
              <th>Pcs / Kanban</th>
              <th>Kanban Address</th>
              <th>Last Stock Taking Date</th>
              <th>Qty (Box)</th>
              <th>Qty (Pcs)</th>
              <th>Total Stock (Pcs)</th>
              <th>Qty Actual (Pcs)</th>
              <th>Address Overflow</th>
              <th>Area</th>
              <th>Submitted</th>
              <th>Submitted Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row) => (
              <tr key={row.no}>
                <td><Form.Check type="checkbox" /></td>
                <td>{row.no}</td>
                <td>{row.plantCode}</td>
                <td>{row.dock}</td>
                <td></td>
                <td></td>
                <td>{row.partNo}</td>
                <td>{row.kanbanNo}</td>
                <td>{row.pcs}</td>
                <td>{row.address}</td>
                <td>{row.date}</td>
                <td>{row.qtyBox}</td>
                <td>{row.qtyPcs}</td>
                <td>{row.totalPcs}</td>
                <td>{row.qtyActual}</td>
                <td>{row.addressOverflow}</td>
                <td></td>
                <td>{row.submitted}</td>
                <td>{row.submittedDate}</td>
                <td style={{ whiteSpace: 'nowrap' }}>
                  <Button variant="primary" size="sm" className="btn-xs me-1"><FaEdit /></Button>
                  {row.submitted === 'Not Yet' && (
                    <Button variant="danger" size="sm" className="btn-xs"><FaTrash /></Button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>

      <div className="pagination-custom">
        <div>Showing Page 1 of 34 (332 row(s))</div>
        <div className="d-flex align-items-center gap-1">
          <Button variant="light" size="sm" disabled className="border">First</Button>
          <Button variant="light" size="sm" disabled className="border">Prev</Button>
          <Button variant="primary" size="sm">1</Button>
          <Button variant="light" size="sm" className="border text-primary">2</Button>
          <Button variant="light" size="sm" className="border text-primary">3</Button>
          <Button variant="light" size="sm" className="border text-primary">Next</Button>
          <Button variant="light" size="sm" className="border text-primary">Last</Button>
          <span className="ms-3 me-2">Go</span>
          <Form.Control type="text" size="sm" style={{ width: '40px' }} />
        </div>
        <div>
          Size <Form.Select size="sm" className="d-inline-block w-auto"><option>10</option></Form.Select>
        </div>
      </div>
    </div>
  );
}
