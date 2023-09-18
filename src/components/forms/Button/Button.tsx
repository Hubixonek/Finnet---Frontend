import styles from "../../styles/FundsForm.module.scss";

const Button = ({ postData }) => {
  return (
    <div className="save-btn mt-2">
      <button
        onClick={postData}
        type="submit"
        className={`btn btn-primary form_button--savebtn ${styles.formButton}`}>
        Zapisz
      </button>
    </div>
  );
};
export default Button;
