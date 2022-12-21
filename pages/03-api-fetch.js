import React from "react";
import styles from "../styles/Home.module.css";
import todoStyles from "../styles/Todo.module.css";

import { useQuery } from "react-query";

export const ApiFetch = () => {
  // const [user, setUser] = React.useState(null);

  //  ██████╗██╗  ██╗ █████╗ ██╗     ██╗     ███████╗███╗   ██╗ ██████╗ ███████╗
  // ██╔════╝██║  ██║██╔══██╗██║     ██║     ██╔════╝████╗  ██║██╔════╝ ██╔════╝
  // ██║     ███████║███████║██║     ██║     █████╗  ██╔██╗ ██║██║  ███╗█████╗
  // ██║     ██╔══██║██╔══██║██║     ██║     ██╔══╝  ██║╚██╗██║██║   ██║██╔══╝
  // ╚██████╗██║  ██║██║  ██║███████╗███████╗███████╗██║ ╚████║╚██████╔╝███████╗
  //  ╚═════╝╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝╚══════╝╚══════╝╚═╝  ╚═══╝ ╚═════╝ ╚══════╝

  // Create a Next.js API route to fetch a random user from the randomuser.me API
  // https://nextjs.org/docs/api-routes/introduction
  // https://randomuser.me

  // Display the fetched user in the frontend

  // BONUS! At Sotera we use react-query to fetch data from APIs
  // https://react-query.tanstack.com/
  // Try to use react-query to fetch the user instead of using fetch (optional)

  const fetchUser = async () => {
    const response = await fetch("/api/getUser", { method: "GET" });
    const data = await response.json();
    // console.log(data);
    return data;
  };

  const handleClick = () => {
    refetch();
  };

  const { data, refetch } = useQuery("user", fetchUser, {
    manual: true,
    refetchOnWindowFocus: false,
  });
  const user = data;

  return (
    <>
      <p className={styles.challengeDescription}>
        Complete the challenge in the <code>pages/03-api-fetch.js</code> file.
        <br />
      </p>

      <div className={styles.challengeWindow}>
        <div className={styles.resultWindow}>
          <h2>User info</h2>

          {!user && <p>No user fetched...</p>}

          {user && user.name && user.dob && user.location && (
            <p>
              {user.name.first} {user.name.last} {user.dob.age}{" "}
              {user.location.state}, {user.location.country}
            </p>
          )}
        </div>

        <div className={styles.verticalDivider} />

        <div className={styles.challenges}>
          <button
            className={styles.actionButton}
            style={{ width: "100%" }}
            onClick={handleClick}
          >
            Fetch user
          </button>
        </div>
      </div>
    </>
  );
};

export default ApiFetch;
