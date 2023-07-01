import React from "react";

const Form = () => {
  return <div class="container">
    <h2>It's now or never</h2>
    <h1>Come on, Join us!</h1>

    <form action="" id="join-us">
      <div class="fields">
        <span>
          <input placeholder="Where u wanna go" type="text" />
        </span>
        <br />
        <span>
          <input placeholder="Password" type="password" />
        </span>
      </div>
      <div class="submit">
        <input class="submit" value="Submit" type="button" />
      </div>
    </form>
  </div>;
};

export default Form;
