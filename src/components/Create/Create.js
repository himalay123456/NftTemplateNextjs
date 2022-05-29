import React, { Component, useState, useEffect } from "react";
import { Formik } from "formik";
import Arweave from "arweave";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useUserAccount, useNFTContract } from "src/hooks";
import AuthorProfile from "../AuthorProfile/AuthorProfile";

const arweave = Arweave.init({
  host: "arweave.net",
  port: 443,
  protocol: "http",
});

const Create = () => {
  const [arweaveKey, setArweaveKey] = useState();
  const [imageUrl, setImageUrl] = useState();
  const [uploadedImage, setUploadedImage] = useState("");

  useEffect(() => {
    // Aeweave setup
    arweave.wallets.generate().then((key) => {
      console.log("#".repeat(10), key);
      setArweaveKey(key);
      arweave.wallets.jwkToAddress(key).then((address) => {
        console.log(address);
        arweave.wallets.getBalance(address).then((balance) => {
          let winston = balance;
          let ar = arweave.ar.winstonToAr(balance);

          console.log(winston, "Balance in winston");
          //125213858712

          console.log(ar);
          //0.125213858712
        });
      });
    });
  }, []);

  const handleImageChange = (e) => {
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];
    console.log(file);
    reader.onloadend = async () => {
      setUploadedImage(reader.result);
      let imageDataUri =
      	'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAACgCAYAAACLz2ctAAAAAXNSR0IArs4c6QAABLNJREFUeF7t28GO2zAMRdHk/z86RdtVAQ9AlmIoy2fWT6R1eaNEwPj9+Xw+L38IDBF4E3CIvLZ/CBCQCKMECDiKX3MCcmCUAAFH8WtOQA6MEiDgKH7NCciBUQIEHMWvOQE5MEqAgKP4NScgB0YJEHAUv+YE5MAoAQKO4tecgBwYJUDAUfyaE5ADowQIOIpf88cJ+H6//3vqXp/5b3Q/LiRggikBE7CCUQIGQf2OETABKxglYBAUAROgElECJmA5AROwgtFjBPzG5aLS42oehD7oveCKHFERKj0IeH0kOgETlwsCBr9XEzECEjChy/ooAQm43qpExe0FjH7tRX/HJdi0R0/eWxQeAaOkGnIEvMEt+OQhnby36OfVCRgl1ZAjoBOwQat4SQLeVMA7XjjiWj4recuvYAKeIykBz5nlLXdCwFuO7ZyHJuA5s7zlTrYS8OpW6PfeLb0KPzQBw6gEOwgQsIOqmmECBAyjEuwgQMAOqmqGCYwJ6MIRntHRQQIePd79N0fA/Wd09BMS8Ojx7r85Au4/o6Of8CsCunAc7VBpcwQs4bO4SoCAVYLWlwgQsITP4ioBAlYJWl8isFxAF47SPB63mICPG/leGybgXvN43NMQ8HEj32vDBNxrHo97mpKALhyP82X5hgm4HKmCGQIEzNCSXU6AgMuRKpghQMAMLdnlBAi4HKmCGQIEzNCSXU6AgMuRKpghQMAMLdnlBAi4HKmCGQIEzNCSXU6AgMuRKpghQMAMLdnlBAi4HKmCGQIEzNCSXU6AgMuRKpghQMAMLdnlBAi4HKmCGQIEzNCSXU6AgMuRKpghEBbQ+x8ZrLJRAgSMkpJrIUDAFqyKRgkQMEpKroUAAVuwKholQMAoKbkWAgRswapolAABo6TkWggQsAWrolECBIySkmshQMAWrIpGCRAwSkquhQABW7AqGiVAwCgpuRYCBGzBqmiUAAGjpORaCBCwBauiUQIEjJKSayFAwBasikYJEDBKSq6FwKWA3v9oYa3oBQEC0mKUAAFH8WtOQA6MEiDgKH7N3YI5MEqAgKP4NScgB0YJEHAUv+YE5MAoAQKO4tecgBwYJUDAUfyaE5ADowQIOIpf87CAV6j82xaBqgQIWCVofYkAAUv4LK4SIGCVoPUlAgQs4bO4SqAkoItJFb/1BOTAKAECjuLXnIAcGCVAwFH8mi8X0MWEVBkCBMzQkl1OgIDLkSqYIUDADC3Z5QQIuBypghkCXxEwejG5yn0+n8x+jsxe/dtbZaM7MSVgZZJfWkvABtBRqDt9WhswhEpGWYWKvV6vnZg6AaNTG8wRsAF+FOpOn9YGDKGSUVahYk7AKKa/uQr83eWN7m33feQm+m967Cs4+tDRId3xBh3dGwGjtjTkokMiYAP8L5R0An4B8k8toh8uJ+ANhuQEHBxSofX2J2Bhb6ULTKVvZe3Jp90VFwJWbGlYS8AGqFMlo7+xpp7vjj8bVrNyAq4mWqznBCwC3Gm5E3CnaVw/y9En4P74PSEBOTBKgICj+DUnIAdGCRBwFL/mBOTAKAECjuLXnIAcGCVAwFH8mhOQA6MECDiKX3MCcmCUAAFH8WtOQA6MEiDgKH7NfwER2jFdIT5jOQAAAABJRU5ErkJggg=='
      // let imageDataUri = reader.result;
      const imageBuffer = Buffer.from(imageDataUri.split(",")[1], "base64");
      const contentType = ["Content-Type", "image/png"];
      const { id } = await runUpload(imageBuffer, contentType, true);
      const url = id ? `https://arweave.net/${id}` : undefined;
      console.log("imageUrl", url);
      setImageUrl(url);
    };
    reader.readAsDataURL(file);
  };

  const runUpload = async (data, contentType, isUploadByChunk = false) => {
    console.log(data, contentType, "RunUpload function");
    const tx = await arweave.createTransaction({ data: data }, arweaveKey);
    // tx.addTag(...contentType);
    await arweave.transactions.sign(tx, arweaveKey);

    if (isUploadByChunk) {
      const uploader = await arweave.transactions.getUploader(tx);

      while (!uploader.isComplete) {
        await uploader.uploadChunk();
        console.log(
          `${uploader.pctComplete}% complete, ${uploader.uploadedChunks}/${uploader.totalChunks}`
        );
      }
    }

    //   Do we need to post with uploader?
    await arweave.transactions.post(tx);

    //   console.log("url", `http://localhost:1984/${tx.id}`);
    console.log("url", `https://arweave.net/${tx.id}`);
    return tx;
  };

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
                createNft(values);
                // console.log(values);
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
                            // onChange={(e) => {
                            //   handleImageChange(e);
                            // }}
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
