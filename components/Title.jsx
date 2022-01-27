import React from 'react';
import Head from 'next/head';
const Title = ({ heading }) => {
      return (
            <Head>
                  <title>{heading}</title>
            </Head>
      )
};

export default Title;
