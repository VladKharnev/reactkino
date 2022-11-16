import {useState } from "react";
import { useFormik } from "formik";


const hocModal = (BaseCompomemt) => {
  return (props) => {
    const [modal, setModal] = useState(true);
    const [valueInput, setValueInput] = useState("");

    function closeModal() {
      props.closeModal(false)
    }

    function handleInputValue(event) {
      const { value } = event.target;
      setValueInput(value);
    }

    const formik = useFormik({
      initialValues: {
        minRaiting: '',
        maxRaiting: '',
        minYear: '',
        maxYear:'',
        string:''
      },
      onSubmit: values => {
        props.setAllValues(values);
      },
    });

    return (
      <BaseCompomemt
        {...props}
        modal={modal}
        setModal={setModal}
        valueInput={valueInput}
        setValueInput={setValueInput}
        closeModal={closeModal}
        handleInputValue={handleInputValue}
        formik = {formik}
      />
    );
  };
};

export default hocModal;
