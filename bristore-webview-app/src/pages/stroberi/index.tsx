import React from 'react';

const Index = () => {
  return null;
};

export async function getServerSideProps() {
  return {
    redirect: { permanent: false, destination: '/stroberi/binding' }
  };
}

export default Index;
