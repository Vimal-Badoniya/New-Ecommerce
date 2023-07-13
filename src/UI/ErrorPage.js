import React from "react";
import Header from "./Header";
import "./ErrorPage.css"

function ErrorPage() {
  return (
    <React.Fragment>
      <Header />
      <div className="err">
        <h1>Oops ! An Error Occured...</h1>
        <p>Could Not Find Requested Page. Please use above buttons to navigate between pages.</p>
      </div>
    </React.Fragment>
  );
}

export default ErrorPage;
