import React, { useState, useEffect } from "react";
import "./portfolio.scss";
import { Container, Row, Col } from "react-bootstrap";
import Gallery from "./gallery";

const Portfolio = () => {
  // return (

  const [posts, setPost] = useState([
    {
      name: {
        first: "prabhjot",
        last: "singh",
      },
      picture: "https://picsum.photos/500/500",
      location: {
        city: "mukerian",
        state: "punjab",
        country: "india",
      },
    },
    {
      name: {
        first: "prabhjot",
        last: "singh",
      },
      picture: "https://picsum.photos/500/500",
      location: {
        city: "mukerian",
        state: "punjab",
        country: "india",
      },
    },
    {
      name: {
        first: "prabhjot",
        last: "singh",
      },
      picture: "https://picsum.photos/500/500",
      location: {
        city: "mukerian",
        state: "punjab",
        country: "india",
      },
    },
    {
      name: {
        first: "prabhjot",
        last: "singh",
      },
      picture: "https://picsum.photos/500/500",
      location: {
        city: "mukerian",
        state: "punjab",
        country: "india",
      },
    },
    {
      name: {
        first: "prabhjot",
        last: "singh",
      },
      picture: "https://picsum.photos/500/500",
      location: {
        city: "mukerian",
        state: "punjab",
        country: "india",
      },
    },
    ,
    {
      name: {
        first: "prabhjot",
        last: "singh",
      },
      picture: "https://picsum.photos/500/500",
      location: {
        city: "mukerian",
        state: "punjab",
        country: "india",
      },
    },
  ]);
  const getPosts = async () => {
    const url = "https://randomuser.me/api/?results=10";
    let data = await fetch(url);
    let json = await data.json();
    console.log(json);
    setPost(json.results);
  };
  // useEffect(() => {
  //   getPosts();
  // }, []);
  return (
    <React.Fragment>
      <h1 className="gallery_heading">Gallery</h1>
      <div className="categories">
        <img src={require("../../assets/icons/premiere.png")} />
        <img src={require("../../assets/icons/premiere.png")} />
        <img
          className="category_active"
          src={require("../../assets/icons/photoshop.png")}
        />
        <img src={require("../../assets/icons/after-effect.png")} />
        <img src={require("../../assets/icons/after-effect.png")} />
      </div>
      <section className="gallery">
        {posts.map((post) => (
          <Gallery
            name={post.name}
            image={post.picture}
            address={post.location}
          />
        ))}
      </section>
    </React.Fragment>

    //     <section>
    //       <h1 className="gallery_heading">Gallery</h1>
    //       <div className="categories">
    //         <img src={require("../../assets/icons/premiere.png")} />
    //         <img src={require("../../assets/icons/premiere.png")} />
    //         <img
    //           className="category_active"
    //           src={require("../../assets/icons/photoshop.png")}
    //         />
    //         <img src={require("../../assets/icons/after-effect.png")} />
    //         <img src={require("../../assets/icons/after-effect.png")} />
    //       </div>
    //       <div className="gallery">
    //         <div className=" gallery_img">
    //           <div className="img_detail">
    //             <h2>hwading</h2>
    //             <p>lorem ipsujh gskj kjsa dkjsa dks s su sufg u usfhyk </p>
    //           </div>
    //           <img src={require("../../assets/cr1.jpg")} />
    //         </div>
    //         <div className=" gallery_img">
    //           <div className="img_detail">
    //             <h2>hwading</h2>
    //             <p>lorem ipsujh gskj kjsa dkjsa dks s su sufg u usfhyk </p>
    //           </div>
    //           <img src={require("../../assets/cr2.jpg")} />
    //         </div>
    //         <div className=" gallery_img">
    //           <div className="img_detail">
    //             <h2>hwading</h2>
    //             <p>lorem ipsujh gskj kjsa dkjsa dks s su sufg u usfhyk </p>
    //           </div>
    //           <img src={require("../../assets/cr3.jpg")} />
    //         </div>
    //         <div className=" gallery_img">
    //           <div className="img_detail">
    //             <h2>hwading</h2>
    //             <p>lorem ipsujh gskj kjsa dkjsa dks s su sufg u usfhyk </p>
    //           </div>
    //           <img src={require("../../assets/cr4.jpg")} />
    //         </div>
    //         <div className=" gallery_img">
    //           <div className="img_detail">
    //             <h2>hwading</h2>
    //             <p>lorem ipsujh gskj kjsa dkjsa dks s su sufg u usfhyk </p>
    //           </div>
    //           <img src={require("../../assets/cr5.jpg")} />
    //         </div>
    //         <div className=" gallery_img">
    //           <div className="img_detail">
    //             <h2>hwading</h2>
    //             <p>lorem ipsujh gskj kjsa dkjsa dks s su sufg u usfhyk </p>
    //           </div>
    //           <img src={require("../../assets/cr6.jpg")} />
    //         </div>
    //         <div className=" gallery_img">
    //           <div className="img_detail">
    //             <h2>hwading</h2>
    //             <p>lorem ipsujh gskj kjsa dkjsa dks s su sufg u usfhyk </p>
    //           </div>
    //           <img src={require("../../assets/cr1.jpg")} />
    //         </div>
    //         <div className=" gallery_img">
    //           <div className="img_detail">
    //             <h2>hwading</h2>
    //             <p>lorem ipsujh gskj kjsa dkjsa dks s su sufg u usfhyk </p>
    //           </div>
    //           <img src={require("../../assets/cr1.jpg")} />
    //         </div>
    //       </div>
    //     </section>
  );
};
export default Portfolio;
