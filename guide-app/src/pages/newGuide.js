import React from "react";
const newGuide = () => {
  return (
    <>
      <form>
        <div class="form-group">
          <label for="exampleFormControlInput1">Guide Name</label>
          <input
            type="email"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com "
          />
        </div>
      </form>
    </>
  );
};

export default newGuide;
