import React from "react";

export const Alert = ({ errors }) => {
  return (
    <>
      {errors.length > 0 && (
        <div className="alert alert-danger">
          <ul>
            {errors.map((err, key) => (
              <li key={key}>{err.message}</li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};
