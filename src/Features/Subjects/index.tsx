import React, { FC, useEffect, useState } from "react";
import ContentWrapper from "../../components/Layout/ContentWrapper";
import {
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  Table,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Pagination,
  PaginationLink,
  PaginationItem,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { useSelector } from "react-redux";
import { subjectSelector } from "../../store/selectors/useSelector";
import { Subject } from "../../type/subject";
import {
  ListSubjects,
  SetLoadingSubject,
  SetSubjectMeta,
  RemoveSubject,
} from "../../store/actions/subject.actions";
import api from "./api";
import { useDispatch } from "../../store/store";
import useMounted from "../../utils/useMounted";
import toast from "react-hot-toast";
import ConfirmDeleteModal from "../../components/ConfirmDeleteModal";
import { Meta } from "../../type/meta";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import SubjectForm from "./components/subjectForm";

const Subjects: FC<any> = (props) => {
  const dispatch = useDispatch();
  const mounted = useMounted();

  // Fetching Subject Lists and Dispatch Actions
  const fetchingSubjects = async () => {
    try {
      const response: any = await api.getSubjects();

      // response exist, set
      if (response) {
        dispatch(ListSubjects(response.data.data));
        dispatch(SetSubjectMeta(response.data.meta));
      }
    } catch (error: any) {
      console.log(error);
      toast.error(`Error: ${error.data}`);
    }
  };

  useEffect(() => {
    fetchingSubjects();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const subjectSl = useSelector(subjectSelector);

  const subjectsList: Subject[] = subjectSl.subjects;

  console.log("Subject List", subjectsList);

  const subjectMeta: Meta = subjectSl.meta;

  console.log("Subject Meta", subjectMeta);

  const [openForm, setOpenForm] = useState(false);
  const [subjectSelected, setSubjectSelected] = useState(null);

  const [openConfirm, setOpenConfirm] = useState(false);
  const [selectedSubjectId, setSelectedSubjectId] = useState("");

  const handleCloseConfirmModal = () => {
    setOpenConfirm(false);
    setSelectedSubjectId("");
  };

  const handleOpenConfirmModal = (subjectId: string) => {
    setOpenConfirm(true);
    setSelectedSubjectId(subjectId);
  };

  const handleOpenForm = (subject: Subject | null) => {
    setOpenForm(true);
    setSubjectSelected(subject as any);
  };

  const handleCloseForm = () => {
    setOpenForm(false);
    setSubjectSelected(null);
  };

  const handleConfirmDelete = async (): Promise<void> => {
    try {
      const response: any = await api.deleteSubject(selectedSubjectId);

      if (mounted.current && response) {
        dispatch(RemoveSubject(selectedSubjectId));
        toast.success("Success");
        handleCloseConfirmModal();
      }
    } catch (error: any) {
      console.log(error);
      toast.error(`Error: ${error.data}`);
    }
  };

  //  handle page size and pagination

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);

  const [pageLimit, setPageLimit] = useState(10);
  const changePageLimit = async (pageLimit: number) => {
    setPageLimit(pageLimit);

    try {
      dispatch(SetLoadingSubject(true));
      const response: any = await api.getSubjects(1, pageLimit);

      // response exist, auth init success, dispatch list of user data
      if (response) {
        dispatch(ListSubjects(response?.data?.data));
        dispatch(SetSubjectMeta(response?.data?.meta));
        dispatch(SetLoadingSubject(false));
      }
    } catch (error: any) {
      dispatch(SetLoadingSubject(false));
      toast.error(`Error: ${error.data}`);
    }
  };

  const handleChangePage = async (pageNumber: number) => {
    try {
      dispatch(SetLoadingSubject(true));
      const response: any = await api.getSubjects(pageNumber, pageLimit);

      // response exist, auth init success, dispatch list of user data
      if (response) {
        dispatch(ListSubjects(response?.data?.data));
        dispatch(SetSubjectMeta(response?.data?.meta));
        dispatch(SetLoadingSubject(false));
      }
    } catch (error: any) {
      dispatch(SetLoadingSubject(false));
      toast.error(`Error: ${error.data}`);
    }
  };

  return (
    <ContentWrapper>
      <div className="content-heading">
        <div>
          Subjects
          <small>Subject Management Page</small>
        </div>
      </div>
      <div style={{ textAlign: "right" }} className="mb-3 ">
        <Button color="primary" onClick={() => handleOpenForm(null)}>
          {" "}
          <span className="btn-label">
            <i className="fa fa-plus"></i>
          </span>{" "}
          Create Subject
        </Button>
      </div>
      <Row>
        <Col sm="12">
          <Card className="card-default">
            <CardHeader>Subjects Table</CardHeader>
            <CardBody>
              <Table hover striped bordered>
                <thead>
                  <tr>
                    <th>#</th>

                    <th>Name</th>

                    <th>Tag</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {subjectSl?.isLoading ? (
                    <>
                      {[...Array(5)].map((e, i) => (
                        <tr key={i}>
                          <td>
                            <Skeleton />
                          </td>
                          <td>
                            <Skeleton />
                          </td>
                          <td>
                            <Skeleton />
                          </td>
                          <td>
                            <Skeleton />
                          </td>
                          <td>
                            <Skeleton />
                          </td>
                          <td>
                            <Skeleton />
                          </td>
                          <td>
                            <Skeleton />
                          </td>
                        </tr>
                      ))}
                    </>
                  ) : (
                    <>
                      {subjectsList.map((v: Subject, index) => {
                        return (
                          <tr>
                            <td>{index + 1}</td>
                            <td>{v?.name}</td>
                            <td>{v?.tag}</td>
                            <td className="flex justify-between">
                              <>
                                <Button
                                  onClick={() => handleOpenForm(v)}
                                  className="mr-2"
                                  color="warning"
                                >
                                  View More
                                </Button>
                                <Button
                                  onClick={() => handleOpenConfirmModal(v?.id)}
                                  color="danger"
                                >
                                  Delete{" "}
                                </Button>
                              </>
                            </td>
                          </tr>
                        );
                      })}
                    </>
                  )}
                </tbody>
              </Table>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Dropdown
          style={{ marginRight: 10 }}
          onChange
          isOpen={dropdownOpen}
          toggle={toggle}
          {...props}
        >
          <DropdownToggle caret size="md">
            {pageLimit}
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem onClick={() => changePageLimit(10)}>10</DropdownItem>
            <DropdownItem onClick={() => changePageLimit(25)}>25</DropdownItem>
            <DropdownItem onClick={() => changePageLimit(50)}>50</DropdownItem>
            <DropdownItem onClick={() => changePageLimit(100)}>
              100
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>

        <Pagination size="md">
          <PaginationItem disabled={subjectMeta.page - 1 === 0}>
            <PaginationLink
              previous
              onClick={() => handleChangePage(subjectMeta.page - 1)}
            />
          </PaginationItem>
          {[...Array(subjectMeta?.total_page)].map((e, i) => (
            <PaginationItem active={i + 1 === subjectMeta.page} key={i}>
              <PaginationLink onClick={() => handleChangePage(i + 1)}>
                {i + 1}
              </PaginationLink>
            </PaginationItem>
          ))}
          <PaginationItem
            disabled={subjectMeta.page === subjectMeta.total_page}
          >
            <PaginationLink
              next
              onClick={() => handleChangePage(subjectMeta.page + 1)}
            />
          </PaginationItem>
        </Pagination>
      </div>

      <Modal isOpen={openForm}>
        <ModalHeader toggle={handleCloseForm}>User Management Form</ModalHeader>
        <ModalBody>
          <SubjectForm subjects={subjectSelected} onClose={handleCloseForm} />
        </ModalBody>
      </Modal>

      <ConfirmDeleteModal
        onConfirm={handleConfirmDelete}
        deleteSubject="Subject"
        open={openConfirm}
        onClose={handleCloseConfirmModal}
      />
    </ContentWrapper>
  );
};

export default Subjects;
