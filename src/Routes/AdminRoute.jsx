import React from 'react';
import Loading from '../components/Loading/Loading';
import useAuth from '../Hooks/useAuth';
import useRole from '../Hooks/useRole';
import Forbidden from '../Components/Forbidden/Forbidden';

const AdminRoute = ({ children }) => {
  const { loading } = useAuth();
  const { role, roleLoading } = useRole();

  if (loading || roleLoading) {
    return <Loading></Loading>;
  }

  if (role !== 'admin') {
    return <Forbidden></Forbidden>;
  }

  return children;
};

export default AdminRoute;
