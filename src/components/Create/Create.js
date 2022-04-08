import React, { Component } from "react";
import { Formik } from "formik";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useUserAccount, useNFTContract } from "src/hooks";
import AuthorProfile from "../AuthorProfile/AuthorProfile";

const Create = () => {
  const NFT_CONTRACT_INSTANCE = useNFTContract();
  const { account } = useUserAccount();

  const createNft = async (values) => {
    // Get Totalsupply
    const totalSupply = await NFT_CONTRACT_INSTANCE?.methods?.totalSupply
      ?.call()
      .call();

    // Mint NFT
    await NFT_CONTRACT_INSTANCE.methods
      .mintWithRoyalty(account, totalSupply + 1, [account], values.royality)
      .send({
        from: account,
      });

    // Successfully Minted
    toast.success("NFT created successfully !", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  return (
    <section className="author-area">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-12 col-md-4">
            {/* Author Profile */}
            <AuthorProfile />
          </div>
          <div className="col-12 col-md-7">
            {/* Intro */}
            <div className="intro mt-5 mt-lg-0 mb-4 mb-lg-5">
              <div className="intro-content">
                <span>Get Started</span>
                <h3 className="mt-3 mb-0">Create Item</h3>
              </div>
            </div>
            <Formik
              initialValues={{
                file: "",
                name: "",
                description: "",
                price: "",
                royality: "",
                size: "",
                numberOfCopies: "",
              }}
              validate={(values) => {
                const errors = {};
                if (!values.name) {
                  errors.name = "Required";
                }
                if (!values.royality) {
                  errors.royality = "Required";
                }
                return errors;
              }}
              onSubmit={(values, { setSubmitting }) => {
                // createNft(values);
                console.log(values);
              }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
              }) => (
                <form
                  className="item-form card no-hover"
                  onSubmit={handleSubmit}
                >
                  <div className="row">
                    <div className="col-12">
                      <div className="input-group form-group">
                        <div className="custom-file">
                          <input
                            type="file"
                            className="custom-file-input"
                            id="inputGroupFile01"
                            name="file"
                            onChange={(e) => {
                              handleChange(e);
                              console.log(e);
                            }}
                            onBlur={handleBlur}
                            value={values.file}
                          />
                          <label
                            className="custom-file-label"
                            htmlFor="inputGroupFile01"
                          >
                            {values.file ? values.file : "Choose file"}
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group mt-3">
                        <input
                          type="text"
                          className="form-control"
                          name="name"
                          placeholder="Item Name"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.name}
                        />
                        <h3 className="error">
                          {errors.name && touched.name && errors.name}
                        </h3>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group">
                        <textarea
                          className="form-control"
                          name="description"
                          placeholder="Description"
                          cols={30}
                          rows={3}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.description}
                        />
                      </div>
                    </div>
                    <div className="col-12 col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          name="price"
                          placeholder="Item Price"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.price}
                        />
                      </div>
                    </div>
                    <div className="col-12 col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          name="royality"
                          placeholder="Royality"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.royality}
                        />
                        <h3 className="error">
                          {errors.royality &&
                            touched.royality &&
                            errors.royality}
                        </h3>
                      </div>
                    </div>
                    <div className="col-12 col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Size"
                        />
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.size}
                      </div>
                    </div>
                    <div className="col-12 col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          name="numberOfCopies"
                          placeholder="No of Copies"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.numberOfCopies}
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group mt-3">
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions"
                            id="inlineRadio1"
                            defaultValue="option1"
                            defaultChecked
                          />
                          <label
                            className="form-check-label"
                            htmlFor="inlineRadio1"
                          >
                            Put on Sale
                          </label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions"
                            id="inlineRadio2"
                            defaultValue="option2"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="inlineRadio2"
                          >
                            Instant Sale Price
                          </label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions"
                            id="inlineRadio3"
                            defaultValue="option3"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="inlineRadio3"
                          >
                            Unlock Purchased
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <button className="btn w-100 mt-3 mt-sm-4" type="submit">
                        Create Item
                      </button>
                    </div>
                  </div>
                </form>
              )}
            </Formik>
          </div>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default Create;
