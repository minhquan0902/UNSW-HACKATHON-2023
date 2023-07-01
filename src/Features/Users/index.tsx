import React, { FC, useState } from "react";
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
import { authSelector, userSelector } from "../../store/selectors/useSelector";
import { User } from "../../type/user";
import UserForm from "./Components/userForm";
import {
  RemoveUser,
  UpdateUserMeta,
  ListUser,
  SetLoading,
} from "../../store/actions/user.actions";
import api from "./api";
import { useDispatch } from "../../store/store";
import useMounted from "../../utils/useMounted";
import toast from "react-hot-toast";
import ConfirmDeleteModal from "../../components/ConfirmDeleteModal";
import { Meta } from "../../type/meta";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Users: FC<any> = (props) => {
  const usersl = useSelector(userSelector);

  const auth = useSelector(authSelector);

  const currentUser = auth.user;

  const userList: User[] = usersl.users;
  const userMeta: Meta = usersl.meta;

  const [openForm, setOpenForm] = useState(false);
  const [userSelected, setUserSelected] = useState(null);

  const dispatch = useDispatch();
  const mounted = useMounted();

  const [openConfirm, setOpenConfirm] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState("");

  const handleCloseConfirmModal = () => {
    setOpenConfirm(false);
    setSelectedUserId("");
  };

  const handleOpenConfirmModal = (userId: string) => {
    setOpenConfirm(true);
    setSelectedUserId(userId);
  };

  const handleOpenForm = (user: User | null) => {
    setOpenForm(true);
    setUserSelected(user as any);
  };

  const handleCloseForm = () => {
    setOpenForm(false);
    setUserSelected(null);
  };

  const handleConfirmDelete = async (): Promise<void> => {
    try {
      const response: any = await api.deleteUser(selectedUserId);

      if (mounted.current && response) {
        dispatch(RemoveUser(selectedUserId));
        toast.success("Success");
        handleCloseConfirmModal();
      }
    } catch (error: any) {
      console.log(error);
      toast.error(`Error: ${error.data}`);
    }
  };

  // handle page size and pagination

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);

  const [pageLimit, setPageLimit] = useState(10);
  const changePageLimit = async (pageLimit: number) => {
    setPageLimit(pageLimit);

    try {
      dispatch(SetLoading(true));
      const response: any = await api.getListUsers(1, pageLimit);

      // response exist, auth init success, dispatch list of user data
      if (response) {
        dispatch(ListUser(response?.data?.data));
        dispatch(UpdateUserMeta(response?.data?.meta));
        dispatch(SetLoading(false));
      }
    } catch (error: any) {
      dispatch(SetLoading(false));
      toast.error(`Error: ${error.data}`);
    }
  };

  const handleChangePage = async (pageNumber: number) => {
    try {
      dispatch(SetLoading(true));
      const response: any = await api.getListUsers(pageNumber, pageLimit);

      // response exist, auth init success, dispatch list of user data
      if (response) {
        dispatch(ListUser(response?.data?.data));
        dispatch(UpdateUserMeta(response?.data?.meta));
        dispatch(SetLoading(false));
      }
    } catch (error: any) {
      dispatch(SetLoading(false));
      toast.error(`Error: ${error.data}`);
    }
  };

  return (
    <ContentWrapper>
      <div className="content-heading">
        <div>
          Users
          <small>User management page</small>
        </div>
      </div>
      <div style={{ textAlign: "right" }} className="mb-3 ">
        <Button onClick={() => handleOpenForm(null)} color="primary">
          {" "}
          <span className="btn-label">
            <i className="fa fa-plus"></i>
          </span>{" "}
          Create Star
        </Button>
      </div>
      <Row>
        <Col sm="12">
          <Card className="card-default">
            <CardHeader>Users Table</CardHeader>
            <CardBody>
              <Table hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Full-Name</th>
                    <th>Email</th>

                    <th>Zalo Id</th>
                    <th>Phone</th>
                    <th>User Type</th>

                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {usersl?.isLoading ? (
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
                      {userList.map((v: User, index) => {
                        return (
                          <tr>
                            <td>{index + 1}</td>
                            <td>{v?.fullname}</td>
                            <td>{v?.email}</td>
                            <td>{v?.zalo_id}</td>
                            <td>{v?.phone}</td>
                            <td>
                              {v?.user_type === "" ? "guest" : v?.user_type}
                            </td>
                            <td className="flex justify-between">
                              {currentUser?.email === v?.email ? (
                                <>
                                  <Button
                                    onClick={() => handleOpenForm(v)}
                                    color="warning"
                                    className="mr-2"
                                  >
                                    View More
                                  </Button>
                                  <Button
                                    color="success"
                                    style={{ pointerEvents: "none" }}
                                  >
                                    Current User
                                  </Button>
                                </>
                              ) : (
                                <>
                                  <Button
                                    onClick={() => handleOpenForm(v)}
                                    className="mr-2"
                                    color="warning"
                                  >
                                    View More
                                  </Button>
                                  <Button
                                    onClick={() =>
                                      handleOpenConfirmModal(v?.id)
                                    }
                                    color="danger"
                                  >
                                    Delete{" "}
                                  </Button>
                                </>
                              )}
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
          <PaginationItem disabled={userMeta.page - 1 === 0}>
            <PaginationLink
              previous
              onClick={() => handleChangePage(userMeta.page - 1)}
            />
          </PaginationItem>
          {[...Array(userMeta?.total_page)].map((e, i) => (
            <PaginationItem active={i + 1 === userMeta.page} key={i}>
              <PaginationLink onClick={() => handleChangePage(i + 1)}>
                {i + 1}
              </PaginationLink>
            </PaginationItem>
          ))}
          <PaginationItem disabled={userMeta.page === userMeta.total_page}>
            <PaginationLink
              next
              onClick={() => handleChangePage(userMeta.page + 1)}
            />
          </PaginationItem>
        </Pagination>
      </div>

      <Modal isOpen={openForm}>
        <ModalHeader toggle={handleCloseForm}>User Management Form</ModalHeader>
        <ModalBody>
          <UserForm users={userSelected} onClose={handleCloseForm} />
        </ModalBody>
      </Modal>

      <ConfirmDeleteModal
        onConfirm={handleConfirmDelete}
        deleteSubject="User"
        open={openConfirm}
        onClose={handleCloseConfirmModal}
      />
    </ContentWrapper>
  );
};

export default Users;
