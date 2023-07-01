import { FC, useState } from "react";
import ContentWrapper from "../../components/Layout/ContentWrapper";
import { Row, Col, Button, ButtonGroup } from "reactstrap";
import TableView from "./components/TableView";
import GridView from "./components/GridView";

const DataList: FC<any> = (props) => {
  const [rTable, setRTable] = useState(true);

  return (
    <ContentWrapper>
      <div className="content-heading">Data Check List</div>
      <Row>
        <Col sm="12">
          <div className="mb-3 d-flex">
            <div>
              <button className="btn btn-sm btn-info" type="button">
                New Data
              </button>
              <button className="btn btn-sm btn-secondary" type="button">
                <em className="fa fa-user-plus"></em>
              </button>
              <button className="btn btn-sm btn-secondary" type="button">
                <em className="fas fa-pencil-alt"></em>
              </button>
              <button className="btn btn-sm btn-secondary" type="button">
                <em className="fas fa-share"></em>
              </button>
              <button className="btn btn-sm btn-secondary" type="button">
                <em className="fa fa-print"></em>
              </button>
            </div>
            <div className="ml-auto">
              <ButtonGroup>
                <Button
                  color="primary"
                  outline
                  onClick={() => setRTable(true)}
                  active={rTable}
                >
                  Table
                </Button>
                <Button
                  color="primary"
                  outline
                  onClick={() => setRTable(false)}
                  active={!rTable}
                >
                  Grid
                </Button>
              </ButtonGroup>
            </div>
          </div>
          {rTable ? <TableView /> : <GridView />}
        </Col>
      </Row>
    </ContentWrapper>
  );
};

export default DataList;
