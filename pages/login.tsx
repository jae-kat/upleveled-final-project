import { useMutation } from '@apollo/client';
import { css } from '@emotion/react';
import { GetServerSidePropsContext } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { createCsrfToken } from '../util/auth';
import { getSessionByToken } from '../util/database';
import { Session } from '../util/types';
import { loggedIn } from './api/client';

const header = css`
  display: flex;
  width: 100vw;
  margin-top: -6vh;
  margin-bottom: 5vh;
  padding: 20px;
  justify-content: space-around;
  border-bottom: 3px solid;
  border-image-slice: 1;
  border-width: 4px;
  border-image-source: linear-gradient(
    to right,
    #05396b,
    #389583,
    #8de4af,
    #bff0d1
  );
  a:nth-of-type(2) {
    font-size: 26px;
    text-decoration: none;
  }
`;

const formStyles = css`
  align-items: center;
  width: 100%;
  button {
    margin: 40px;
  }
`;

export default function Login(props: { csrfToken: string }) {
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');
  const [errorInfo, setErrorInfo] = useState('');
  const router = useRouter();
  const [getLoggedInUser, { loading, error }] = useMutation(loggedIn);

  async function loginHandler(event: React.FormEvent) {
    event.preventDefault();
    try {
      // try the login
      const userId = await getLoggedInUser({
        variables: { email: email, pw: pw, csrfToken: props.csrfToken },
      });
      // if pw or email are wrong, there will be an error message
      if (userId.data.logUserIn.error) {
        setErrorInfo(userId.data.logUserIn.error);
        return;
      }
      if (userId.data.logUserIn.id === null) return;
      // redirect to their logged in page
      await router.push(`/users/${userId.data.logUserIn.id}`);
    } catch (err) {
      console.log('Error logging in');
    }
  }

  if (loading) {
    return (
      <div>
        <Image
          src="/paperIcon.png"
          alt="Loading your profile..."
          width="90vw"
          height="90vw"
        />
        <h1 className="h1Font">Buddies</h1>
      </div>
    );
  }

  return (
    <>
      <header css={header}>
        <Link href="/">
          <a>
            <Image src="/homeIcon.png" width="30px" height="30px" />
          </a>
        </Link>
        <Link href="/register">
          <a>Sign up</a>
        </Link>
      </header>
      <h1 className="h1Font">Sign in</h1>
      {error && <h2>Sorry, there has been an error. Try again later!</h2>}
      {errorInfo && <h2>{errorInfo}</h2>}
      <form
        css={formStyles}
        className="flexColumn"
        onSubmit={(event) => loginHandler(event)}
      >
        <div>
          <label>
            Email
            <br />
            <input
              type="email"
              required
              value={email}
              onChange={(event) => setEmail(event.currentTarget.value)}
            />
          </label>
          <br />
          <label>
            Password
            <br />
            <input
              type="password"
              required
              value={pw}
              onChange={(event) => setPw(event.currentTarget.value)}
            />
          </label>
          <br />
        </div>
        <button className="buttonStyles">Sign in</button>
      </form>
    </>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  // Redirect from HTTP to HTTPS on Heroku
  if (
    context.req.headers.host &&
    context.req.headers['x-forwarded-proto'] &&
    context.req.headers['x-forwarded-proto'] !== 'https'
  ) {
    return {
      redirect: {
        destination: `https://${context.req.headers.host}/login`,
        permanent: true,
      },
    };
  }

  // check if there is already a valid token in the cookie
  const token = context.req.cookies.sessionToken;

  // if there is, redirect
  if (token) {
    const session: Session | undefined = await getSessionByToken(token);
    if (session) {
      return {
        redirect: {
          destination: `/users/${session.userId}`,
          permanent: false,
        },
      };
    }
  }
  // otherwise create a csrf token and render this login page
  return {
    props: {
      csrfToken: createCsrfToken(),
    },
  };
}