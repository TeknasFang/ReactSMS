import React,{useState} from "react";
import styles from "./form.module.css";
import InputError from "../../../../../ui/InputError";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import axios from "axios";
import { registerStudent } from "../../../../../../redux/action";
import StudentData from '../../../../student/StudentData';
const StudentRegistration = () => {
  let dispatch = useDispatch();
  let [img,setImg]=useState(null)

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  function onFileChange(e) {
    console.log(e.target.files)
    setImg(e.target.files[0])
}
  const onSubmit = (data) => {
    // let formData = new FormData()
    // formData.append('file', img,'hi.png')
    // axios.post('http://localhost:5800/student/uploadImage',formData).then(res=>console.log('ok'))
    // .catch(err=>console.log(err))
    let studentData = []
    studentData.push(data)
    studentData.push(img)
    dispatch(registerStudent(studentData));
  };

  return (
    <div className={styles.container}>
      <h2>Student Registration Form</h2>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)} enctype="multipart/form-data">
        <h5>Student Details</h5>
        <div className="row">
          <div className="col-md-6 ic">
            <label for="firstName">First Name</label>
            {errors.firstName?.type === "required" && (
              <InputError error={errors.firstName.message} />
            )}
            <input
              {...register("firstName", {
                required: {
                  value: true,
                  message: "First Name is a required field",
                },
              })}
              className={styles.input}
              type="text"
              id="firstName"
              name="firstName"
            />
          </div>
          <div className="col-md-6 ic">
            <label for="lastName">Last Name</label>
            <input
              {...register("lastName", {
                required: {
                  value: true,
                  message: "Last Name is a required field",
                },
              })}
              className={styles.input}
              type="text"
              id="lastName"
              name="lastName"
            />
            {errors.lastName?.type === "required" && (
              <InputError error={errors.lastName.message} />
            )}
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 ic">
            <label for="email">Email</label>
            <input
              {...register("email", {
                required: { value: true, message: "Email is a required field" },
                pattern: {
                  value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                  message: "Please enter a valid email adress",
                },
              })}
              className={styles.input}
              type="email"
              id="email"
              name="email"
            />
            {errors.email && <InputError error={errors.email.message} />}
          </div>
          <div className="col-md-6 ic">
            <label for="phone">Phone</label>
            <input
              {...register("phone", {
                required: { value: true, message: "Phone is a required field" },
              })}
              className={styles.input}
              type="tel"
              id="phone"
              name="phone"
            />
            {errors.phone && <InputError error={errors.phone.message} />}
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 ic">
            <label for="dob">Date of Birth</label>
            <input
              {...register("dob", {
                required: {
                  value: true,
                  message: "Date of Birth is a required field",
                },
              })}
              className={styles.input}
              type="date"
              id="dob"
              name="dob"
            />
            {errors.dob?.type === "required" && (
              <InputError error={errors.dob.message} />
            )}
          </div>
          <div className="col-md-6 ic">
            <label for="address">Address</label>
            <input
              {...register("address", {
                required: {
                  value: true,
                  message: "Adress is a required field",
                },
              })}
              className={styles.input}
              type="text"
              id="address"
              name="address"
            />
            {errors.adress?.type === "required" && (
              <InputError error={errors.adress.message} />
            )}
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 ic">
            <label for="standard">Standard</label>
            <select
              {...register("standard", {
                required: {
                  value: true,
                  message: "Standard is a required field",
                },
              })}
              className={styles.input}
              id="standard"
              name="standard"
            >
              <option value="" disabled selected>
                Select Grade Level
              </option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
            </select>
            {errors.standard?.type === "required" && (
              <InputError error={errors.standard.message} />
            )}
          </div>
          <div className="col-md-6 ic">
            <label htmlFor="stream">Stream</label>
            <select
              className={styles.input}
              id="stream"
              name="standard"
              {...register("stream", {
                required: {
                  value: true,
                  message: "Stream is a required field",
                },
              })}
            >
              <option value="" disabled selected>
                Select Stream
              </option>
              <option value="science">science</option>
              <option value="commerce">commerce</option>
              <option value="arts">arts</option>
            </select>
            {errors.stream?.type === "required" && (
              <InputError error={errors.stream.message} />
            )}
          </div>
        </div>
        <div className="row">
          {/* <div className="col-sm-6 ic">
            <label for="image">Choose an image</label>
            <input
              {...register("image", {
                required: {
                  value: true,
                  message: "Please upload an image",
                },
              })}
              className={styles.input}
              type="file"
              id="image"
              accept="image/*"
              class="file-input"
            />
            {errors.image?.type === "required" && (
              <InputError error={errors.image.message} />
            )}
          </div> */}
          <div className="col-sm-6 ic">
            <label for="image">Choose an image</label>
            <input
            onChange={onFileChange}
              className={styles.input}
              type="file"
              id="image"
              accept="image/*"
              class="file-input"
            />
            {errors.image?.type === "required" && (
              <InputError error={errors.image.message} />
            )}
          </div>
        </div>
        {/* <h2>Stylish Image Uploader</h2>
        <div class="upload-box">
          <label for="imageUpload" class="upload-label">
            <span class="upload-text">Choose an image</span>
          </label>
          
          {errors.input?.type === "required" && (
              <InputError error={errors.input.message} />
            )}
        </div> */}
        <h5>Parent Details</h5>
        <div className="row">
          <div className="col-sm-6 ic">
            <label for="parentFirstName">First Name</label>
            <input
              {...register("parentFirstName", {
                required: {
                  value: true,
                  message: "Parent First Name is a required field",
                },
              })}
              className={styles.input}
              type="text"
              id="parentFirstName"
              name="parentFirstName"
            />
            {errors.parentFirstName?.type === "required" && (
              <InputError error={errors.parentFirstName.message} />
            )}
          </div>
          <div className="col-md-6 ic">
            <label for="parentLastName">Last Name</label>
            <input
              {...register("parentLastName", {
                required: {
                  value: true,
                  message: "Parent Last Name is a required field",
                },
              })}
              className={styles.input}
              type="text"
              id="parentLastName"
              name="parentLastName"
            />
            {errors.parentLastName?.type === "required" && (
              <InputError error={errors.parentLastName.message} />
            )}
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6 ic">
            <label for="parentEmail">Email</label>
            <input
              {...register("parentEmail", {
                required: {
                  value: true,
                  message: "Parent Email is a required field",
                },
              })}
              className={styles.input}
              type="email"
              id="parentEmail"
              name="parentEmail"
            />
            {errors.parentEmail?.type === "required" && (
              <InputError error={errors.parentEmail.message} />
            )}
          </div>
          <div className="col-md-6 ic">
            <label for="parentPhone">Phone</label>
            <input
              {...register("parentPhone", {
                required: {
                  value: true,
                  message: "Parent Phone is a required field",
                },
              })}
              className={styles.input}
              type="tel"
              id="parentPhone"
              name="parentPhone"
            />
            {errors.parentPhone?.type === "required" && (
              <InputError error={errors.parentPhone.message} />
            )}
          </div>
        </div>

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default StudentRegistration;
