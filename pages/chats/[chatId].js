// import { useQuery } from '@apollo/client';
import { useMutation } from '@apollo/client';
import { css } from '@emotion/react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Header from '../../components/Header';
import {
  getChatById,
  getChatMembersByChatId,
  getFullUserByToken,
  getMessagesByChatId,
} from '../../util/database';
import { chatUserDeleteMutation } from '../api/client';

// import { messageHistoryQuery } from '../api/client';

// this chat component isn't suitable for Server Side Rendering. By default, Next.js attempts to render everything on the server side
// by using a dynamic() call, we can tell Next.js not to render this during the build process,
// where it would throw errors because it can't connect to the APIs that it needs to function.
// https://ably.com/blog/realtime-chat-app-nextjs-vercel
const AblyChatComponent = dynamic(
  () => import('../../components/AblyChatComponent'),
  { ssr: false },
);

const members = css`
  width: 100%;
  .buddies {
    display: inline-flex;
    align-items: center;
  }
  .avatar {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    overflow: hidden;
    margin: 10px;
    img {
      outline: 6px solid #fff001;
      height: 100%;
      width: 100%;
    }
  }
`;

const top = css`
  position: relative;
  margin: 0;
  padding: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  a {
    text-decoration: none;
    color: black;
  }
  button {
    background-color: transparent;
    border: none;
    text-decoration: underline;
    border-radius: 4px;
  }
  .popup {
    width: 0;
    height: 0;
    overflow: hidden;
  }
  .popup.open {
    width: 75vw;
    height: 30vh;
    padding: 20px;
    position: absolute;
    top: 20vh;
    left: 7vw;
    background-color: #ebebeb;
    border: 2px solid #05396b;
    border-radius: 4px;
    font-size: 24px;
    div {
      margin-top: 15px;
      display: flex;
      justify-content: center;
      gap: 30px;
      button {
        font-size: inherit;
        text-decoration: none;
        border: 2px solid #05396b;
      }
    }
  }
`;
const h1 = css`
  margin: 2vh;
  margin-top: 1.5vh;
`;

export default function TestChat(props) {
  const [popup, setPopup] = useState('closed');
  const router = useRouter();
  const [deleteChat] = useMutation(chatUserDeleteMutation);

  async function leaveChat() {
    try {
      const deleted = await deleteChat({
        variables: { userId: props.currentUser.id, chatId: props.chat.id },
      });
      console.log(deleted);
      await router.push(`/matches`);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      {props.error && <h1>{props.error}</h1>}
      {props.currentUser && (
        <>
          <Header user={props.currentUser} />
          <div css={top}>
            <div className={`popup ${popup}`}>
              Are you sure you want to leave this chat?
              <div>
                <button onClick={() => leaveChat()}>Leave</button>
                <button onClick={() => setPopup('closed')}>Cancel</button>
              </div>
            </div>
            <button onClick={() => setPopup('open')}>
              Want to leave this chat?
            </button>
          </div>
          <h1 className="h1Font" css={h1}>
            {props.chat.name}
          </h1>
          <div css={members}>
            Buddies in this chat:
            <br />
            {props.chatMembers.map((member) => {
              return (
                <div
                  key={`chat-${props.chat.id}-user-${member.id}`}
                  className="buddies"
                >
                  <div className="avatar">
                    <img src={member.avatar} alt="" />
                  </div>
                  <span>{member.name}</span>
                </div>
              );
            })}
            <br />
          </div>
          <AblyChatComponent
            chatId={props.chat.id}
            chatHistory={props.chatHistory}
            user={props.currentUser}
          />
        </>
      )}
    </>
  );
}

export async function getServerSideProps(context) {
  // check if there is already a valid token in the cookie
  const token = context.req.cookies.sessionToken;
  // get the user by token
  const currentUser = await getFullUserByToken(token);
  if (currentUser) {
    // get the chat via the id from the url
    const chatId = context.query.chatId;
    const chat = await getChatById(chatId);

    // get all chat members
    const chatMembers = await getChatMembersByChatId(chatId);
    // if the current user isn't in this chat, send them to another page
    if (!chatMembers.some((member) => member.id === currentUser.id)) {
      return {
        redirect: {
          destination: '/matches',
          permanent: false,
        },
      };
    }
    // this is faster than the graphql API route
    const chatHistory = await getMessagesByChatId(chatId);
    // if there is a logged in user who is part of this chat
    return {
      props: {
        currentUser,
        chat,
        chatMembers: chatMembers.filter(
          (member) => member.id !== currentUser.id,
        ),
        chatHistory,
      },
    };
  }

  // if they aren't logged in, redirect
  return {
    redirect: {
      destination: '/login',
      permanent: false,
    },
  };
}