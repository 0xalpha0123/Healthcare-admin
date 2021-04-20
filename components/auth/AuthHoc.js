import React from 'react';

const AuthHoc = (WrappedComponent) => {
  return class extends React.Component {
    // static getStaticProps(ctx) {
    //   const token = ctx.req.headers.cookie?.replace('authorization=', '');
    //   //verify token
    //   if (!token) {
    //     ctx.res.redirect('/test');
    //   }
    // }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
};

export default AuthHoc;
