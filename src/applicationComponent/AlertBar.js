export const AlertBar = (props) => {
  let msg = props.msg;

  return (
    <div className="alert alert-danger alert-dismissible">
      <strong>{msg}</strong>
    </div>
  );
};
